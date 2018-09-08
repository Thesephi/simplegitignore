const fs = require("fs")
const path = require("path")
const assert = require("assert")

// allow `requir`ing `.ts` files
require("ts-node").register({})

// since our library implementation logic involves outputing to `stdout`
// and `stderr`, patching `console.log` and `console.error` is needed to
// assert certain conditions
// p.s: we may use `jest` in a more robust setup, but it's cool for now.
const c = require("./console-patch")

describe("simplegitignore", function() {

  this.timeout(5000)

  before(done => {

    // so that later we can assert what's logged
    c.applyPatch(false)

    // !important or else you may overwrite your 'real' .gitignore file ;)
    process.chdir(__dirname)
    // our library is expected to run from `npx` or otherwise be invoked directly
    // from the cli, thus to test it means to simply `require` it
    require("../main")

    // start the test after 3s so our library will have done its things by then
    setTimeout(() => {
      // !important to revert the patch or mocha's use of console will mess us up
      c.revertPatch()
      // ready for the suite
      done()
    }, 3000)

  })

  it("should log the URI of the newly written .gitignore to stdout", () => {
    const outputFilePath = path.join(__dirname, ".gitignore")
    assert(c.numLogCalls === 1,
      `console.log must be invoked exactly 1 time (${c.numLogCalls} vs 1)`)
    assert(outputFilePath === c.stdout,
      `${c.stdout} vs ${outputFilePath}`)
  })

  it("should log `done` as the final output to stderr", () => {
    assert(c.numErrCalls === 2,
      `console.error must be invoked exactly 2 times (${c.numErrCalls} vs 2)`)
    assert(c.stderr.endsWith("done"),
      `the string \`done\` must be at the end of ${c.stderr}`)
  })

})
