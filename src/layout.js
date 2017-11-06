let React = require('react');
let ReactLogoComponent = require('react-logo');

class LayoutComponent extends React.Component {
  render() {
    return (
      <div className="page">
        {this.props.children}
        <div className="text-center">
          &copy;&nbsp;<a href="http://github.com/xudafeng">xdf</a> {new Date().getFullYear()}
          <ReactLogoComponent />
        </div>
      </div>
    );
  }
}

module.exports = LayoutComponent;
