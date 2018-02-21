# Example of hooking up React DnD with Redux

This project is bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app).,
and follows the instructions of
[ReactDnD tutorial](http://react-dnd.github.io/react-dnd/docs-tutorial.html).
Deployment follows [create-react-app gh-pages deployment procedure](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages)


Dependencies
  * react-dnd, react-dnd-html5-backend, react-redux, gh-pages  


Deviations from the ReactDnD tutorial:
  * Kept the files and file structure generated by create-react-app
  * The Board lives in App.js
  * Redux setup-related changes involve App.js, Board.js, BoardSquare.js, actions.js, reducers.js, constants.js
  * Game.js is ignored as soon as Redux gets hooked up
    * moveKnight() becomes an action creator in actions.js
    * canMoveKnight() is migrated to BoardSquare.js
  * all css changes are in App.css
