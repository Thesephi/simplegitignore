type SourceUriMap = { [id: string]: string }

const SOURCES: SourceUriMap = {
  MAC: "https://raw.githubusercontent.com/github/gitignore/master/Global/macOS.gitignore",
  WIN: "https://raw.githubusercontent.com/github/gitignore/master/Global/Windows.gitignore",
  LINUX: "https://raw.githubusercontent.com/github/gitignore/master/Global/Linux.gitignore"
}

let platformGitignoreBlobUri: string
switch(process.platform) {
  case "darwin" :
    platformGitignoreBlobUri = SOURCES.MAC
  break
  case "win32" :
    platformGitignoreBlobUri = SOURCES.WIN
  break
  default :
    platformGitignoreBlobUri = SOURCES.LINUX
}

export { platformGitignoreBlobUri, SOURCES }
