import React from 'react';

const CardView = React.createClass({
  getInitialState: function() {
    return {
      tapped: false
    };
  },
  handleClick: function(e) {
    this.setState({
      tapped: !this.state.tapped
    });
  },
  render: function() {
    let cardData = this.props.cardData;
    let style = {};
    if (this.state.tapped) {
      style.transform = 'rotate3d(0,0,1, 80deg)';
    }
    return (
      <div className="card-container" style={style} onClick={this.handleClick}>
        <div className="card-title">{cardData.title}</div>
        <div className="card-type">{cardData.cardType}</div>
        <div className="card-rules">{cardData.rules}</div>
      </div>
    );
  }
})

export default CardView;
