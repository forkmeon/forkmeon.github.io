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
let LayoutComponent = require('./layout');
let MarkdownComponent = require('./markdown');
let EditorComponent = require('./editor');
let Util = require('./util');

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readmeConent: ''
    };
  }

  componentDidMount() {
    this.init();
  }

  init() {
    this.ajaxReadMeContent();
  }

  ajaxReadMeContent() {
    Util.ajax('./README.md', function(data) {
      this.setState({
        readmeConent: data
      });
    }.bind(this));
  }

  getReadMeContent() {
    return this.state.readmeConent || 'loading...';
  }

  render() {
    return (
      <LayoutComponent>
        <MarkdownComponent>{this.getReadMeContent()}</MarkdownComponent>
        <EditorComponent {...this.props}/>
      </LayoutComponent>
    );
  }
}

MainComponent.defaultProps = {
  globalData: {}
};

React.render(<MainComponent />, document.body);
