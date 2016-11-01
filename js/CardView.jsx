import React from 'react';

const CardView = React.createClass({
  render: function() {
    let cardData = this.props.cardData;
    return (
      <div className="card-container">
        <div className="card-title">{cardData.title}</div>
        <div className="card-type">{cardData.cardType}</div>
        <div className="card-rules">{cardData.rules}</div>
      </div>
    );
  }
})

export default CardView;
