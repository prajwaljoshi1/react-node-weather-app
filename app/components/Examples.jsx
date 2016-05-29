var React = require("react");

var {Link} = require('react-router');

var Examples = React.createClass({
    render: function(){
      return(
        <div>
          <h1 className="text-center">Examples Components</h1>
          <p>Here are some examples</p>
          <ol>
            <li><Link to='/?location=sydney'>Sydney</Link></li>
              <li><Link to='/?location=london'>London</Link></li>
          </ol>
      </div>
    );
    }
});

// var Examples = (props) => {
//   return(
//     <h3>Examples Component</h3>
//   );
// }

module.exports = Examples;
