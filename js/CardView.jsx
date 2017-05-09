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
    const cardData = this.props.cardData;
    let transforms = [];
    transforms.push(`translate3d(${this.props.position.x}px, ${this.props.position.y}px, 0)`);
    if (this.state.tapped) {
      transforms.push('rotate3d(0,0,1, 80deg)');
    }
    const style = {
      transform: transforms.join(' ')
    }
    console.log(style);
    return (
      <div className="card-container" style={style}
        onClick={this.handleClick}
        onMouseDown={this.props.handleDragStart}
      >
        <div className="card-title">{cardData.title}</div>
        <div className="card-type">{cardData.cardType}</div>
        <div className="card-rules">{cardData.rules}</div>
      </div>
    );
  }
})

export default CardView;
