#!/usr/bin/env node

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
import { platformGitignoreBlobUri } from "./sources"

const destinationFile: string = path.join(process.cwd(), ".gitignore")

// step 1: grab the file from GitHub
let data: string = ""
https.get(platformGitignoreBlobUri, (res: IncomingMessage): void => {

  res.on("data", (chunk: any): void => {
    data += chunk
  })

  // step 2: write result to destination file
  res.on("end", (): void => {
    console.error("writing .gitignore ...")
    fs.writeFile(destinationFile, data, (err: Error): void =>
      err ? console.error(err) : ((): void => {
        console.error("done")
        console.log(destinationFile)
      })())
  })

})
