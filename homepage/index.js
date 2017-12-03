let React = require('react');
let ReactDOM = require('react-dom');

let Util = require('./util');
let LayoutComponent = require('./layout');
let EditorComponent = require('./editor');
let MarkdownComponent = require('./markdown');

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

ReactDOM.render(<MainComponent />, document.querySelector('#app'));
