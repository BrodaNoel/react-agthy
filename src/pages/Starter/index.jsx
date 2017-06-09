import React from 'react';
import './styles.scss';

import Icon from 'antd/lib/icon';

class Starter extends React.Component {
  render() {
    const events = {
      changeRoute: this.props.changeRoute
    };

    return (
      <div className="Agthy-Starter" onClick={() => {events.changeRoute('Like')}}>
        <Icon type="smile-o" />
      </div>
    );
  }
}

export default Starter;
