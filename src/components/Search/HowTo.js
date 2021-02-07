import React from 'react';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import { Translate } from 'react-redux-i18n';
import LinkToAbout from '../LinkToAbout';
import { howTo as howToStyle } from '../../commonStyles';

const HowTo = () => (
  <div style={howToStyle.container}>
    <h5 style={{ margin: 'auto', paddingLeft: '1em' }}>
      <Translate value="howTo.title" />
    </h5>
    <Stepper orientation="vertical">
      <Step>
        <StepLabel active={true} style={howToStyle.label}>
          <Translate value="howTo.firstTitle" />
        </StepLabel>
        <StepContent active={true} style={howToStyle.text}>
          <Translate value="howTo.firstText" />
        </StepContent>
      </Step>
      <Step>
        <StepLabel active={true}  style={howToStyle.label}>
          <Translate value="howTo.secondTitle" />
        </StepLabel>
        <StepContent active={true} style={howToStyle.text}>
          <Translate value="howTo.secondText" />
        </StepContent>
      </Step>
      <Step>
        <StepLabel active={true}  style={howToStyle.label}>
          <Translate value="howTo.thirdTitle" />
        </StepLabel>
        <StepContent active={true} style={howToStyle.text}>
          <Translate value="howTo.thirdText" />
        </StepContent>
      </Step>
    </Stepper>
    <LinkToAbout />
  </div>
);

export default HowTo;
