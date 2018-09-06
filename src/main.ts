/**
 * Message for contributors: please KISS
 * Peace!
 */

// things not yet supported:
// - os flavours other than Mac
// - check for the existence of a `.gitignore` file already
// - setting destination output (right now it's the same dest as `process.cwd()`)
// - remote content request failover (e.g. due to network issues)

// imports
import http from "http"
import fs from "fs"
import path from "path"

const destinationFile: string = path.join(process.cwd(), ".gitignore")
console.log(`writing ${destinationFile}`)

// step 1: grab the file from GitHub
http.get("http://raw.githubusercontent.com/github/gitignore/master/Global/macOS.gitignore")
  .pipe(fs.createWriteStream(destinationFile))
