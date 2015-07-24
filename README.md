# vimflowy

This is a productivity tool which draws great inspiration from workflowy and vim

Try it out [here](https://vimflowy.bitballoon.com)!

(Video coming eventually...)

For now, it really is aimed at vim users, who should feel quite at home.
I plan on eventually having default bindings for normal people (as well as emacs users),
and very customizable bindings for those who want to go crazy with them.
But for now, if you want to use vimflowy, you should first learn vim.  Perhaps http://vim-adventures.com/?

## FEATURES ##

- Workflowy features
  - bullets, sub-bullets
  - collapsing
  - zooming
- Vim features
  - most of the standard movement/operators
  - modal editing
    - insert and normal mode
    - visual mode (only within a line)
    - visual line (only within siblings)
  - keybindings for everything
  - undo!  Full history kept within a session
  - ctrl+o and ctrl+i to move through jump history
  - macros
- Extras
  - (inefficient) search
  - marks (not quite like vim's)
  - data export
  - multiple documents (by visiting /documentname)
  - different themes
  - lazy loads data, for big documents

## NOTES ##

- The app is entirely local - the storage is localStorage, so it should be used in only one browser
- Currently, weird things happen when you use it in multiple tabs
- There are many [known inconsistencies with vim](vim_inconsistencies.md), mostly intentional.

## SET UP: ##

#### INSTALL: ####

Assuming you have node and npm

    git clone https://github.com/WuTheFWasThat/vimflowy.git
    cd vimflowy
    npm install

#### START: ####

Just run

    npm start

And you can visit the app at `http://localhost:8080/`

#### RUN TESTS: ####

    npm test

## CONTRIBUTE: ##

Please send pull requests!  Remember to write tests when appropriate!

You may contact me at [githubusername]@gmail.com as well

## LICENSE ##

MIT: http://wuthefwasthat.mit-license.org/
