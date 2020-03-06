import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class BlenderReact extends React.Component {

  render() {
    return (
        <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(<BlenderReact />, document.getElementById('root'));
