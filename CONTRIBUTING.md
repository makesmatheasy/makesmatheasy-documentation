# Contributing to Makes Math Easy Documentation

We love your input! We want to make contributing to this simple documentation website  as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer


# Contributing

 In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

## Setting up Jekyll

* First and foremost we will need Ruby. If you do not have Ruby installed, install it from [here](https://www.ruby-lang.org/en/downloads/)
* Fork this repository and clone it locally
* Next we will need **bundler** for getting github pages to work. For this type `gem install bundler` in your terminal or command prompt
* Now, in the root of the forked repo, create a file named `Gemfile` (without any extension) and write these contents in the file

    ```
        source 'https://rubygems.org'
        gem 'github-pages', group: :jekyll_plugins
    ```
**Note** : You don't need to do this step for this repository as we have already added __GemFile__ for this project

* Next, just fire the command `bundle install`. This will install all the dependencies required for running the fork
* Lastly, execute the command `bundle exec jekyll serve` to run the Jekyll server on `localhost:4000`

## Contributing To Documents

- Contributors should be familiar with each and every tool of Makes Math Easy
- All the Documentation for Makes Math Easy tools is written in Markdown and Katex which is used for write Mathematics notations and identities. 
- All the tools section in Documenation should have atleast one example of "How to use this tool", this can be anything like GIFs, Images and videos


Before submitting a pull request, documentation should be tested locally. Ultimately testing of documentation must be done before merging a pull request

Location
--------

Documentation source files should be contained in a folder named ``docs`` located at the root of the project.
Images and other static assets should be located in ``public``.

File naming
-----------

- reST source files and static assets should have names that consist only of lowercase letters (``a-z``), numbers (``0-9``), periods (``.``), hyphens (``-``) and (``_``).
- Files must start with a letter.
- Markdown source files should have the extension of ``.md`` or ``,markdown``.



## Issues


Feel free to submit issues and enhancement requests.

Issues are very valuable to this project.

* Ideas are a valuable source of contributions others can make
* Problems show where this project is lacking
* With a question you show where contributors can improve the user experience

## Pull Requests

Pull requests are, a great way to get your ideas into this repository.

When deciding if I merge in a pull request I look at the following things:

### Does it state intent

You should be clear which problem you're trying to solve with your contribution.

For example:

> Add link to code of conduct in README.md

Doesn't tell me anything about why you're doing that

> Add link to code of conduct in README.md because users don't always look in the CONTRIBUTING.md

Tells me the problem that you have found, and the pull request shows me the action you have taken to solve it.

### Is it of good quality

* There are no spelling mistakes
* It reads well



### Does it move this repository closer to my vision for the repository

The aim of this repository is:

* To provide a simple implementaions of codes with time complexites on the go, anyone can copy and paste, into their project
* The content is usable by someone who hasn't written something like this before
* Foster a culture of respect and gratitude in the open source community.




## Any contributions you make will be under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.


