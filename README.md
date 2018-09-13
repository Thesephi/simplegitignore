# Generating your boilerplate .gitignore the dead simple way

## Usage
Step 1:
```
npx simplegitignore
```
Step 2: there's no step 2. You should now have a `.gitignore` file in your current directory. Happy starting your project!

## Features
- intended to be lightweight 🚀 (**2.06 KiB** output size at v0.2.0)
- intended to be used with [`npx`](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner), which enhances the designated `cli` nature of this tool 🤖
- **0** dependencies and **0** dependents 👌
- suitable as integrations into other `cli`'s or IDE's, such as [this](https://marketplace.visualstudio.com/items?itemName=thesephi.simplegitignore) and [this](https://atom.io/packages/simplegitignore) 🔌

## Command Line Interface API
The execution of this script should result in 2 streams of data:
- the `stdout` which, on a successful execution, outputs the full path of the newly written .gitignore file (i.e. `/path/to/my/project/.gitignore`). This value could be piped into other programs or otherwise consumed in environments such as IDE's, where the user then has the option to [open the file](https://github.com/Thesephi/vscodesimplegitignore/raw/master/images/example.gif) for inspection after it is created.
- the `stderr` which ends with the string `done` if the execution was successful, or spits our information about the error if the execution failed.

When writing an integration plugin that executes `npx simplegitignore`, it is recommended that you inspect the value of `stdout` and `stderr` to decide appropriate courses of action, as shown in [these](https://github.com/Thesephi/vscodesimplegitignore/blob/master/src/extension.ts#L59) [examples](https://github.com/Thesephi/atomsimplegitignore/blob/master/lib/simplegitignore.js#L88).

## Known caveats (!important!)
The current version:
- **will overwrite any existing .gitignore file** (💣 💣 💣 you've been warned!)
- doesn't gracefully handle any network error while fetching the remote `.gitignore` file content
- doesn't allow specifying any output destination (in other words: it **always writes to the current directory**)
- should not be `npm install`ed or `require()`d / `import`ed because it will just immediately invoke then exit. In other words: **no programmatic use**! 😞

While pull requests are much welcomed to address the above, do keep in mind that the general idea behind this tool is to stay **dead simple** 💪

If you require more sophisticated features, including support for programmatic use, the [gitignore npm module](https://www.npmjs.com/package/gitignore) might be a much better alternative.

## Developer Notes
While the main idea behind this tool is to [KISS](https://en.wikipedia.org/wiki/KISS_principle), it might be interesting to have it integrated into IDE's, potentially saving time for us developers. At writing time, `simplegitignore` [plugin for Atom](https://atom.io/packages/simplegitignore) and [extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=thesephi.simplegitignore) have been on the market. If you like to tinker with writing software that integrates into Text Editors or IDE's in general (which is an interesting challenge on its own), you are more than welcomed to chime in and _pick your favorite editor_ for which to write a `simplegitignore` plugin. If you do create one, it'd be my honor to have it featured here on this page, too!

## Credits
This tool uses the content straight from Github's [Globally Useful gitignores](https://github.com/github/gitignore/tree/master/Global) repo.
All credits go to its respective contributors.
