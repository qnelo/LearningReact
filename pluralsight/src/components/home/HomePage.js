import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>jumbotron</h1>
        <p>ACM1PT</p>
        <Link to="about" className="btn btn-primary btn-lg">Button</Link>
      </div>
    );
  }
}

export default HomePage;