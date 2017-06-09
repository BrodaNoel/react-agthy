import React from 'react';
import Starter from './pages/Starter';
import Like from './pages/Like';
import './index.scss';

class Agthy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: 'Start'
    };
  }

  changeRoute = newRoute => {
    this.setState({
      route: newRoute
    });
  }

  render() {
    return (
      <div className="Agthy">
        { this.state.route === 'Start' && <Starter changeRoute={this.changeRoute} /> }
        { this.state.route === 'Like' && <Like changeRoute={this.changeRoute} /> }
      </div>
    );
  }
}

export default Agthy;
