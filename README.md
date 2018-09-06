# Generating your boilerplate .gitignore the dead simple way

## Usage
Step 1:
```
npx simplegitignore
```
Step 2: there's no step 2. You should now have a `.gitignore` file in your current directory. Happy starting your project!

## Known caveats
The current version:
- **only generates MacOS .gitignore** 😞
- **will overwrite any existing .gitignore file** (💣 💣 💣 you've been warned!)
- doesn't gracefully handle any network error while fetching the remote `.gitignore` file content
- doesn't allow specifying any output destination (in other words: it **always writes to the current directory**)

While pull requests are much welcomed to address the above, do keep in mind that the general idea behind this tool is to stay **dead simple** 💪

If you require more sophisticated features, including support for programmatic use, the [gitignore npm module](https://www.npmjs.com/package/gitignore) might be a much better alternative.

## Credits
This tool uses the content straight from [GitHub's gitignore repo](https://github.com/github/gitignore).
All credits go to its respective contributors.
