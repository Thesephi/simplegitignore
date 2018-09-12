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

## Command Line Interface API
The execution of this script should result in 2 streams of data:
- the `stdout` which, on a successful execution, outputs the full path of the newly written .gitignore file (i.e. `/path/to/my/project/.gitignore`). This value could be piped into other programs or otherwise consumed in environments such as IDEs, where the user then has the option to [open the file](https://github.com/Thesephi/vscodesimplegitignore/raw/master/images/example.gif) for inspection after it is created.
- the `stderr` which, outputs the string `done` if the execution was successful, or information about the error if the execution failed.

When writing an integration plugin that executes `npx simplegitignore`, it is recommended that you inspect the value of `stdout` and `stderr` to decide appropriate courses of action, as shown in [these](https://github.com/Thesephi/vscodesimplegitignore/blob/master/src/extension.ts#L59) [examples](https://github.com/Thesephi/atomsimplegitignore/blob/master/lib/simplegitignore.js#L88).

## Known caveats
The current version:
- **will overwrite any existing .gitignore file** (💣 💣 💣 you've been warned!)
- doesn't gracefully handle any network error while fetching the remote `.gitignore` file content
- doesn't allow specifying any output destination (in other words: it **always writes to the current directory**)

While pull requests are much welcomed to address the above, do keep in mind that the general idea behind this tool is to stay **dead simple** 💪

If you require more sophisticated features, including support for programmatic use, the [gitignore npm module](https://www.npmjs.com/package/gitignore) might be a much better alternative.

## Credits
This tool uses the content straight from Github's [Globally Useful gitignores](https://github.com/github/gitignore/tree/master/Global) repo.
All credits go to its respective contributors.
