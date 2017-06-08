import React from 'react';
import Starter from './containers/Starter';
import Like from './containers/Like';
import './index.scss';

// Antd styles
import 'antd/lib/icon/style';

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
      <div>
        { this.state.route === 'Start' && <Starter changeRoute={this.changeRoute} /> }
        { this.state.route === 'Like' && <Like changeRoute={this.changeRoute} /> }
      </div>
    );
  }
}

export default Agthy;
