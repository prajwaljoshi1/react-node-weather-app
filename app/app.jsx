var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); // object destructuring
var Route = require('react-router').Route;

var Main = require('Main');
var Nav = require('Nav');

ReactDOM.render(
  <Router history ={hashHistory}>
    <Route path ="/" component={Main }/>
    <Route path ="/" component={Nav}/>
  </Router>,
  document.getElementById("main")
)
