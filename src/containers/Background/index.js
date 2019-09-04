import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';

import Hill from '../../components/Hill';
import Cloud from '../../components/Cloud';
import './background.scss';

class Background extends Component {
  render() {
    const { dayTime } = this.props;
    return (
      <div className={`background-wrapper background-${dayTime}`}>
        <Bounce top>
          <Cloud dayTime={dayTime} top="5vh" left="12vw" />
          <Cloud dayTime={dayTime} top="3vh" right="6vw" />
          <Cloud dayTime={dayTime} top="15vw" right="15vw" />
        </Bounce>
        <Hill dayTime={dayTime} left="-20px" />
        <Hill dayTime={dayTime} right="-20px" />
      </div>
    );
  }
}

export default Background;
