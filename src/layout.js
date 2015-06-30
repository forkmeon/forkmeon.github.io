/* ================================================================
 * forkmeon by xdf(xudafeng[at]126.com)
 *
 * first created at : Mon Jun 02 2014 20:15:51 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

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
