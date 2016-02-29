var App = React.createClass({
  displayName: 'App',

  render: function () {
    return React.createElement(
      'p',
      null,
      'Hello World'
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
