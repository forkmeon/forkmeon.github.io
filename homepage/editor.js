let React = require('react');
let RibbonComponent = require('..');

let Util = require('./util');
let pkg = require('../package.json');

function formatExports(content) {
  return content
    .replace(/\sdata-reactid="\S+"/g, '');
}

function formatCssExports(content) {
  var elementContainerCss = content.elementContainerCss;
  var elementAnchorCss = content.elementAnchorCss;
  var res = `.${this.refs.demo.props.classPrefix}-ribbon {\n  ${elementContainerCss.replace(/;\s+/g, ';\n  ')}\n}\n`;
  res += `.${this.refs.demo.props.classPrefix}-ribbon a {\n  ${elementAnchorCss.replace(/;\s+/g, ';\n  ')}\n}\n`;
  return res;
}

function formatInnerHtml() {
  return `<div class="${this.refs.demo.props.classPrefix}-ribbon">\n  <a target="_blank" href="${this.state.href}">${this.refs.demo.props.text}</a>\n</div>`;
}

const events = [
  'textInputChangeHandler',
  'linkUrlInputChangeHandler',
  'fixedCheckboxChangeHandler',
  'flatCheckboxChangeHandler',
  'horizontalRadioChangeHandler',
  'verticalRadioChangeHandle',
  'borderCheckboxChangeHandler'
];

class EditorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.bindEventMap();
    this.state = {
    };
  }

  bindEventMap() {
    events.forEach(function(i) {
      this[i] = this[i].bind(this);
    }.bind(this));
  }

  componentDidMount() {
  }

  bind(props) {
    var that = this;
    props.onDemoUpdateDid = function() {
      var outerHtml = React.findDOMNode(that.refs.demo).outerHTML;

      if (typeof DOMParser !== 'undefined') {
        var parser = new DOMParser();
        var node = parser.parseFromString(outerHtml, 'text/html');
        var elementContainerCss = node.querySelector('div').style.cssText;
        var elementAnchorCss = node.querySelector('a').style.cssText;
        var href = node.querySelector('a').href;
      }

      if (outerHtml !== that.state.outerHtml) {
        that.setState({
          outerHtml: outerHtml,
          cssContent: {
            elementContainerCss: elementContainerCss,
            elementAnchorCss: elementAnchorCss
          },
          href: href
        });
      }
    };
  }

  getEditorProps() {
    var props = {};
    Util.merge(props, this.props);
    Util.merge(props, this.state);
    this.bind(props);
    return props;
  }

  getExportHtml() {
    if (this.state.outerHtml) {
      return formatExports(this.state.outerHtml);
    }
  }

  getExportCss() {
    if (this.state.cssContent) {
      return formatCssExports.call(this, this.state.cssContent);
    }
  }

  getExportInnerHtml() {
    if (this.state.href) {
      return formatInnerHtml.call(this);
    }
  }

  fixedCheckboxChangeHandler(e) {
    this.setState({
      fixed: e.target.checked
    });
  }

  flatCheckboxChangeHandler(e) {
    this.setState({
      flat: e.target.checked
    });
  }

  textInputChangeHandler(e) {
    this.setState({
      text: e.target.value || this.props.text
    });
  }

  linkUrlInputChangeHandler(e) {
    this.setState({
      linkUrl: e.target.value || this.props.linkUrl
    });
  }

  horizontalRadioChangeHandler(e) {
    this.setState({
      left: e.target.value === 'left'
    });
  }

  verticalRadioChangeHandle(e) {
    this.setState({
      top: e.target.value === 'top'
    });
  }

  borderCheckboxChangeHandler(e) {
    this.setState({
      border: e.target.checked
    });
  }

  render() {
    return (
      <div className="editor">
        <div className="form-group">
          <div>
            <label className="control-label">position</label>
          </div>
          <label className="radio-inline">
            <input type="radio" name="horizontalRadio" onChange={this.horizontalRadioChangeHandler} value="left" /> left
          </label>
          <label className="radio-inline">
            <input type="radio" name="horizontalRadio" onChange={this.horizontalRadioChangeHandler} value="right" /> right
          </label>
          <label className="radio-inline">
            <input type="radio" name="verticalRadio" onChange={this.verticalRadioChangeHandle} value="top" /> top
          </label>
          <label className="radio-inline">
            <input type="radio" name="verticalRadio" onChange={this.verticalRadioChangeHandle} value="bottom" /> bottom
          </label>
          <label className="checkbox-inline fixed-checkbox">
            <input type="checkbox" onChange={this.fixedCheckboxChangeHandler} /> fixed
          </label>
        </div>
        <div className="form-group">
          <div>
            <label className="control-label">style</label>
          </div>
          <label className="checkbox-inline">
            <input type="checkbox" onChange={this.flatCheckboxChangeHandler} /> flat
          </label>
          <label className="checkbox-inline">
            <input type="checkbox" onChange={this.borderCheckboxChangeHandler} /> border
          </label>
        </div>
        <div className="form-group">
          <label className="control-label">text</label>
          <input className="form-control" placeholder={this.props.text} onChange={this.textInputChangeHandler} type="text" />
        </div>
        <div className="form-group">
          <label className="control-label">link</label>
          <input className="form-control" placeholder={this.props.linkUrl} onChange={this.linkUrlInputChangeHandler} type="text" />
        </div>
        <div className="form-group">
          <label className="control-label">copy css</label>
          <pre>{this.getExportCss()}</pre>
          <pre>{this.getExportInnerHtml()}</pre>
        </div>
        <div className="form-group">
          <label className="control-label">copy html</label>
          <pre>{this.getExportHtml()}</pre>
        </div>
        <RibbonComponent ref="demo" {...this.getEditorProps()} />
      </div>
    );
  }
}

EditorComponent.defaultProps = {
  text: 'Fork me on GitHub',
  linkUrl: pkg.repository.url,
  fixed: false,
  left: false,
  top: true,
  border: true
};

module.exports = EditorComponent;
