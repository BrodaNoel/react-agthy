import React from 'react';
import './styles.scss';

class Reactions extends React.Component {
  render() {
    return (
      <div className="Agthy-Reactions">
        {
          this.props.reactions.map(reaction => {
            return (
              <div
                className="Agthy-Reactions-reaction"
                key={reaction.value}
                onClick={() => this.props.onSelect(reaction)}>
                {reaction.label}
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Reactions;
