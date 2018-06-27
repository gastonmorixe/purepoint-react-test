# PurePoint React Test

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [ToDo](#todo)
- [Dependencies](#dependencies)
- [How to run](#how-to-run)
- [Structure](#structure)
- [Maintainers](#mantainers)

## Todo

- [] Throttle input typing in saga.
- [] Cancel previous in-flight request (fetch doesn't allow this).

## Dependencies

- Theme: `glamorous`
- Testing: `jest`
- Router: `react-router`
- Data: `redux`

## Structure

```
app/
  public/
    index.html
    favicon.ico
  src/
    providers/
      MyNewProvider.js
    components/
      MyComponent/
        index.js (container, ie. redux connect)
        View.js (component)
```

## How to run

In the project, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Mantainers

Gaston Morixe (gaston@gastonmorixe.com)
for PurePoint
June 2018
