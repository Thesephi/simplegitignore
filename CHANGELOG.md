# v0.2.1
- updated [README](README.md): a single typo fix and lots of good-to-read,
among a few good-to-write stuff

# v0.2.0
- added support for multiple platforms, i.e. running the script on Windows will
generate a Windows global .gitignore, and so on
- updated [README](README.md) to add `cli` API and other bells and whistles

# v0.1.5 (not published to npm)
- added test
- from now on, this package can only be published to npm if all tests pass

# v0.1.4
- only the (newly written) .gitignore file path is output to `stdout` while everything
else `stderr`. This helps make the script more easily integrated into other cli
tools.
- updated package description

# v0.1.3
- output to `stdout` on success (before it was `stderr`)
