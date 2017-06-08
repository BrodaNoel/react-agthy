import React from 'react';
import './styles.scss';

class Like extends React.Component {
  render() {
    const events = {
      changeRoute: this.props.changeRoute
    };

    return (
      <div className="Agthy-Like" onClick={() => {events.changeRoute('Start')}}>
        👍 - 👎
      </div>
    );
  }
}

export default Like;
