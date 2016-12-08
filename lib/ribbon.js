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

let Util = require('./util');

const innerStyle = {
  display: 'inline-block',
  width: '200px',
  overflow: 'hidden',
  padding: '6px 0',
  textAlign: 'center',
  WebkitTransform: 'rotate(45deg)',
  MozTransform: 'rotate(45deg)',
  msTransform: 'rotate(45deg)',
  OTransform: 'rotate(45deg)',
  Transform: 'rotate(45deg)',
  textDecoration: 'none',
  color: '#fff',
  position: 'inherit',
  top: '45px',
  right: '-40px',
  borderWidth: '1px 0',
  borderStyle: 'dotted',
  borderColor: 'rgba(255, 255, 255, 0.7)',
  font: '700 13px "Helvetica Neue", Helvetica, Arial, sans-serif',
  boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.5)',
  backgroundColor: '#a00',
  backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))'
};

const outerStyle = {
  position: 'absolute',
  right: 0,
  top: 0,
  width: '150px',
  height: '150px',
  overflow: 'hidden',
  zIndex: 9999
};

class RibbonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  componentDidUpdate() {
    this.props.onDemoUpdateDid();
  }

  getInnerStyle() {
    var style = Util.merge({}, innerStyle);

    if (this.props.flat) {
      delete style.backgroundImage;
    }

    if (this.props.left) {
      style.left = style.right;
      style.transform = 'rotate(-45deg)';
      delete style.right;
    }

    if (!this.props.top) {
      style.bottom = style.top;
      delete style.top;

      if (this.props.left) {
        style.transform = 'rotate(45deg)';
      } else {
        style.transform = 'rotate(-45deg)';
      }
    }

    if (!this.props.border) {
      delete style.borderWidth;
      delete style.borderStyle;
      delete style.borderColor;
    }

    return style;
  }

  getOuterStyle() {
    var style = Util.merge({}, outerStyle);

    if (this.props.fixed) {
      style.position = 'fixed';
    }

    if (this.props.left) {
      style.left = 0;
      delete style.right;
    }

    if (!this.props.top) {
      style.bottom = 0;
      delete style.top;
    }
    return style;
  }

  render() {
    return (
      <div className={`${this.props.classPrefix}-ribbon`} style={this.getOuterStyle()}>
        <a target="_blank" style={this.getInnerStyle()} href={this.props.linkUrl}>{this.props.text}</a>
      </div>
    );
  }
}

RibbonComponent.defaultProps = {
  classPrefix: 'github',
  fixed: false,
  flat: false,
  linkUrl: '',
  text: '',
  left: false,
  top: true,
  border: true
};

module.exports = RibbonComponent;

