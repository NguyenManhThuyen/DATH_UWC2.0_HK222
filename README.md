# Hệ thống thu gom rác

## Giới thiệu

Hệ thống thu gom rác là một dự án để giải quyết vấn đề rác thải trong thành phố. Dự án này bao gồm một trang web để giúp người dân đăng ký để được thu gom rác.

## Cài đặt

Để cài đặt dự án này, các bạn lướt xuống bên dưới nha

## Đóng góp

Nếu bạn muốn đóng góp cho dự án này, hãy tạo một pull request trên GitHub của chúng tôi.

## Tác giả

Dự án này được phát triển bởi team CNPM && team DATH

## Giấy phép

Xem tệp LICENSE để biết thêm chi tiết.
---------------------------------------------------------------------------------------------------------------------------------------
# UWC Frontend

## Prerequisites

- Node v16; it is recommended to install Node with [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Bootstrap

- Clone this project

- Run the following commands inside the project folder:
  ```bash
  nvm install && nvm use
  npm install
  npm run dev
  npm install --save cdbreact
  npm install react-router-dom
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
- `Vite`: Module bundler
- [React](https://reactjs.org/docs/getting-started.html): Core UI library
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) & [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page) : styling and components library
- [SASS](https://sass-lang.com/documentation/): CSS preprocessor
- [Redux](https://redux.js.org/introduction/getting-started): State management
- [React Router](https://reactrouter.com/en/main/start/tutorial): Routing library
- [Vitest](https://vitest.dev/guide/): Testing library

## Project Structure

```markdown
uwc-frontent/
|__ src/
|   |__ assets/ - dynamic assets
|   |__ components/ - shared components
|   |__ pages/ - page-level components
|   |__ scss/styles.scss - global styling
|   |__ main.jsx - main js entry
|__ mocks/ - mock data
|__ tests/ - testing setup
|__ public/ - public assets
|__ index.html - HTML entry
|__ vite.config.js - Vite config
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

---------------------------------------------------------------------------------------------------------------------------------------
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
------------------------------------------------------------------------------------------------------------------------------------
