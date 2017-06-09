import React from 'react';
import './styles.scss';

class Starter extends React.Component {
  render() {
    const events = {
      changeRoute: this.props.changeRoute
    };

    return (
      <div className="Agthy-Starter" onClick={() => {events.changeRoute('Like')}}>
        <div className="Agthy-Starter-icon">🙏</div>
      </div>
    );
  }
}

export default Starter;
