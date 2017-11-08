import React from 'react';
import {Link} from 'react-router';

class HomePage extends  React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Chapa la pachala</h1>
        <p>Hacepe un pete</p>
        <Link to="about" className="btn btn-primary btn-lg">Click Mutherfucker</Link>
      </div>
    );
  }
}

export default HomePage;