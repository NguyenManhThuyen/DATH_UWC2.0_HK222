# UWC Backend

## Prerequisites

- Node v16; it is recommended to install Node with [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Bootstrap

- Clone this project

- Run the following commands inside the project folder:
  ```bash
  nvm install && nvm use
  npm install
  npm run webpack-server
  npm run nodemon
  ```

## Workflow

- To work on a new feature, checkout a new branch from the `main` branch on your local machine:

  ```bash
  git checkout -b <branch-name>
  ```

  - The branch name should be in the form of `ft/<functionality>`, for example `ft/login`

- To push changes from that new branch to the repo for the first time:

  ```bash
  git push -u origin <branch-name>
  ```

  - `<branch-name>` here is the name of the respective branch on the Github repo, and it should be similar to the local branch name.

- After that you can just push changes simply with `git push`.

- When a feature is ready for merging, create a `pull request`.

- **NEVER PUSH TO THE MAIN BRANCH**

# Tech

## Tech stacks

- `Node 16 & npm`: Runtime & package manager
- `Webpack`: Module bundler
- [Express.js](): HTTP library for router and controller
- [Jest](): Testing library

## Project Structure

```markdown
uwc-backend/
|__ src/
|   |__ configs/ - configurations
|   |__ feature1/
|   |__ feature2/
|   |.....
|   |__ feature_x/
|   |   |__ feature_x.controller.js
|   |   |__ feature_x.model.js
|   |   |__ feature_x.service.js
|   |   |__ feature_x.test.js
|   |   |__ index.js
|   |   |.....
|   |__ utils/ - utilites/helpers
|__ tests/ - testing setup
|__ index.js - App entry
|__ webpack.config.js - Webpack config
```

## Conventions

### Commits

- Commit messages should be in the form `<action> + <target>`, eg. _updated configs_
  - `<action>`: in past tense, eg. _added_, _updated_
  - `<target>`: files, packages, or features, eg. _side bar component_, _Bootstrap_, _assign task module_

### Naming

- Variables and functions should be named in camel case, eg. _selectedStaffs_, _customHook_

- Constants should be named in snake case with all caps, eg. _API_KEY_

- Components and their respective files should be named with Pascal case, eg. _AddStaffModal_, _AddStaffModal.jsx_.

- To be added.

# References

These articles might provide some understandings and good practices for the project.

- [Node Hero - Getting Started With Node.js Tutorial](https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/)
