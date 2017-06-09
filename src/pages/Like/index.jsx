import React from 'react';
import Reactions from 'containers/Reactions';
import './styles.scss';

class Like extends React.Component {
  reactions = [
    { value: 1, label: '😡' },
    { value: 2, label: '👎' },
    { value: 3, label: '😐' },
    { value: 4, label: '👍' },
    { value: 5, label: '🎉' }
  ];

  onSelect = (reaction) => {
    console.log('reaction selected', reaction);
  }

  render() {
    const events = {
      changeRoute: this.props.changeRoute
    };

    // onClick={ () => {events.changeRoute('')} }
    return (
      <div className="Agthy-Like">
        <div className="Agthy-h1">how would you rate this content?</div>

        <Reactions
          reactions={this.reactions}
          onSelect={this.onSelect} />
      </div>
    );
  }
}

export default Like;
