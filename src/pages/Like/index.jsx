import React from 'react';
import Reactions from 'containers/Reactions';
import services from 'services';
import './styles.scss';

class Like extends React.Component {
  reactions = [
    { value: 1, label: '😡' },
    { value: 2, label: '👎' },
    { value: 3, label: '😐' },
    { value: 4, label: '👍' },
    { value: 5, label: '🎉' }
  ];

  onSelect = reaction => {
    services.backend.reaction({
      customerId: this.props.customerId,
      campaignId: this.props.campaignId,
      reaction,
      url: document.location.href
    });

    this.props.changeRoute('Thanks');

    setTimeout(
      () => this.props.changeRoute('Start'),
      2000
    );
  }

  render() {
    return (
      <div className="Agthy-Like">
        <div className="Agthy-h1">how would you rate this content?</div>
        <div className="Agthy-hr"></div>

        <Reactions
          reactions={this.reactions}
          onSelect={this.onSelect} />
      </div>
    );
  }
}

export default Like;
