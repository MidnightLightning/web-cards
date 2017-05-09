import React from 'react';
import CardView from './CardView';

const AppView = React.createClass({
  getInitialState: function() {
    return {
      draggingElement: false,
      cardPositions: [
        {x: 50, y:50}
      ]
    };
  },
  handleMouseDown: function(e) {
    console.log(e.target);
  },
  handleMouseMove: function(e) {

  },
  handleMouseUp: function(e) {
    this.setState({
      draggingElement: false
    });
  },
  componentWillMount: function() {
    document.addEventListener('mouseup', this.handleMouseUp, false);
  },
  componentWillUnmount: function() {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
  },
  render: function() {
    let cards = [
      {
        title: 'Test',
        cardType: 'Creature',
        rules: 'This is the body of the thing'
      }
    ];

    return (
      <div className="playmat">
        {
          cards.map((card, index) => {
            return (
              <CardView
                key={index}
                cardData={card}
                handleDragStart={this.handleMouseDown}
                position={this.state.cardPositions[index]}
              />
            );
          })
        }
      </div>
    );
  }
});

export default AppView;
