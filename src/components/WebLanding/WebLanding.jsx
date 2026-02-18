import React from 'react';
import WebLandingBG from './WebLandingBG';
import WebLandingTxt from './WebLandingTxt';
import WebLandingMsg from './WebLandingMsg';

function WebLanding() {
  return (
    <WebLandingBG>
      <WebLandingTxt />
      <WebLandingMsg />
    </WebLandingBG>
  );
}

export default WebLanding;
