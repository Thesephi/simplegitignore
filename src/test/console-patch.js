let _consoleLog
let _consoleErr
let _out = ""
let _err = ""
let _logCalls = 0
let _errCalls = 0
function applyPatch(shouldPassThrough) {
  _consoleLog = console.log
  _consoleErr = console.error
  console.log = (...args) => {
    _logCalls++
    _out += args.join()
    if(shouldPassThrough) _consoleLog("patched console.log", ...args)
  }
  console.error = (...args) => {
    _errCalls++
    _err += args.join()
    if(shouldPassThrough) _consoleErr("patched console.error", ...args)
  }
}
function revertPatch() {
  console.log = _consoleLog
  console.error = _consoleErr
}

module.exports = {
  get stdout() {
    return _out
  },
  get stderr() {
    return _err
  },
  get numLogCalls() {
    return _logCalls
  },
  get numErrCalls() {
    return _errCalls
  },
  applyPatch,
  revertPatch
}
