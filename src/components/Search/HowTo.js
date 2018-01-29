import React from 'react';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';

import LinkToAbout from '../LinkToAbout';
import { howTo as howToStyle } from '../../commonStyles';

const HowTo = () => (
  <div style={howToStyle.container}>
    <h5 style={{ margin: 'auto', paddingLeft: '1em' }}>遊び方</h5>
    <Stepper orientation="vertical">
      <Step>
        <StepLabel active={true} style={howToStyle.label}>
          検索
        </StepLabel>
        <StepContent active={true} style={howToStyle.text}>
          検索したい語句、記事のタイトル、記事のURLを入れます
        </StepContent>
      </Step>
      <Step>
        <StepLabel active={true}  style={howToStyle.label}>
          地図に追加
        </StepLabel>
        <StepContent active={true} style={howToStyle.text}>
          検索結果が出たら「地図に追加」をクリック
        </StepContent>
      </Step>
      <Step>
        <StepLabel active={true}  style={howToStyle.label}>
          地図を見る
        </StepLabel>
        <StepContent active={true} style={howToStyle.text}>
          下メニューの「地図」で地図が表示されます
        </StepContent>
      </Step>
    </Stepper>
    <LinkToAbout />
  </div>
);

export default HowTo;
