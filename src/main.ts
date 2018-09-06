/**
 * Message for contributors: please KISS
 * Peace!
 */

// things not yet supported:
// - os flavours other than Mac
// - check for the existence of a `.gitignore` file already
// - setting destination output (right now it's the same dest as `process.cwd()`)
// - remote content request failover (e.g. due to network issues)
// - `https.get` error handling

// imports
import https from "https"
import fs from "fs"
import path from "path"
import { IncomingMessage } from "http"

const destinationFile: string = path.join(process.cwd(), ".gitignore")

// step 1: grab the file from GitHub
// http://raw.githubusercontent.com/github/gitignore/master/Global/macOS.gitignore
const sourceFileURI: string = "https://raw.githubusercontent.com/github/gitignore/master/Global/macOS.gitignore"
let data: string = ""
https.get(sourceFileURI, (res: IncomingMessage): void => {

  res.on("data", (chunk: any): void => {
    data += chunk
  })

  // step 2: write result to destination file
  res.on("end", () => {
    console.log(`writing ${destinationFile} ...`)
    fs.writeFile(destinationFile, data, (err: Error): void =>
      console.error(err ? err : "done\n"))
  })

})
