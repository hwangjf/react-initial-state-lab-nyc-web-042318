// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props)

    // console.log(props.initialCount)
    this.state = {
      secondsLeft: props.initialCount
    }
  };

  render() {
    // let message = ''
    // if (this.state.secondsLeft === 0) {
    //   message = 'Boom!'
    // } else {
    //   message = `${this.state.secondsLeft} seconds left before I go boom!`
    // };

    return (
      <div>{this.state.secondsLeft !== 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'}</div>
    )
  };
}

export default Bomb;
