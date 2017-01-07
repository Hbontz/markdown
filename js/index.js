"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialInput = '# Headings\n## Get\n### Smaller\n#### And\n##### Smaller\n\nTwo new lines create a paragraph\n\n*italics* like this and _italics_ like this  \n**bold** like this and __bold__ like this  \n~~to strike it~~\n\nDid I mention that two spaces at the end of a line  \ncreate a line break?\n\nShopping list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n5. apples\n2. oranges\n4. pears\n\nSee that, the numbers don\'t matter, and the list is formatted for you.\n\nThanks  *[marked](https://github.com/chjj/marked)*';

var PreviewContainer = function (_React$Component) {
  _inherits(PreviewContainer, _React$Component);

  function PreviewContainer() {
    _classCallCheck(this, PreviewContainer);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.handleChange = function (e) {
      return _this.setState({
        input: e.target.value
      });
    };

    _this.state = { input: initialInput };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  PreviewContainer.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "header" },
        "Preview Markdown"
      ),
      React.createElement(
        "div",
        { className: "col-xs-12 col-sm-6" },
        React.createElement(
          "textarea",
          { className: "form-control", rows: "31", onChange: this.handleChange },
          this.state.input
        )
      ),
      React.createElement("div", { className: "col-xs-12 col-sm-5 col-sm-offset-1", dangerouslySetInnerHTML: { __html: marked(this.state.input) } })
    );
  };

  return PreviewContainer;
}(React.Component);

ReactDOM.render(React.createElement(PreviewContainer, null), document.getElementById('displayPreviewer'));