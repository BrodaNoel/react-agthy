import React from 'react';
import Starter from './pages/Starter';
import Like from './pages/Like';
import Thanks from './pages/Thanks';
import utils from './utils';
import './index.scss';

class Agthy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: 'Start'
    };
  }

  changeRoute = newRoute => {
    // If the user clicked in Agthy, let's add the events
    // to close Agthy if the user click outside Aghty or press ESC.
    if (this.state.route === 'Start') {
      const hideAgthy = () => { this.changeRoute('Start') };
      utils.attachCloseEvents(hideAgthy);
    }

    this.setState({
      route: newRoute
    });
  }

  render() {
    return (
      <div className="Agthy">
        { this.state.route === 'Start' && <Starter changeRoute={this.changeRoute} /> }
        { this.state.route === 'Like' && <Like changeRoute={this.changeRoute} /> }
        { this.state.route === 'Thanks' && <Thanks /> }
      </div>
    );
  }
}

export default Agthy;
