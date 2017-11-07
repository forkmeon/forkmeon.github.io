let React = require('react');
let Markdown = require('marked');
let Highlight = require('highlight.js');

Markdown.setOptions({
  highlight: function(code) {
    return Highlight.highlightAuto(code).value;
  }
});

class MarkdownComponent extends React.Component {
  render() {
    return (
      <div className='markdown' dangerouslySetInnerHTML = {
        {
          __html: Markdown(this.props.children)
        }
      }></div>
    );
  }
}

module.exports = MarkdownComponent;
