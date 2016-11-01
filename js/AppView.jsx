import React from 'react';
import CardView from './CardView';

const AppView = React.createClass({
  render: function() {
    return (
      <CardView cardData={{
        title: 'Test',
        cardType: 'Creature',
        rules: 'This is the body of the thing'
      }} />
    );
  }
});

export default AppView;
