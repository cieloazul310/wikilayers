import React from 'react';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';

const HowTo = () => (
  <div style={{
    width: '100%',
    maxWidth: 400,
    margin: 'auto',
    padding: '2em .5em 3em .5em'
  }}>
    <h5 style={{ margin: 'auto', paddingLeft: '1em' }}>遊び方</h5>
    <Stepper orientation="vertical">
      <Step>
        <StepLabel active={true}>
          検索
        </StepLabel>
        <StepContent active={true} style={{ fontSize: 12 }}>
          検索したい語句、記事のタイトル、記事のURLを入れます
        </StepContent>
      </Step>
      <Step>
        <StepLabel active={true}>
          地図に追加
        </StepLabel>
        <StepContent active={true} style={{ fontSize: 12 }}>
          検索結果が出たら「地図に追加」をクリック
        </StepContent>
      </Step>
      <Step>
        <StepLabel active={true}>
          地図を見る
        </StepLabel>
        <StepContent active={true} style={{ fontSize: 12 }}>
          下メニューの「地図」で地図が表示されます
        </StepContent>
      </Step>
    </Stepper>
  </div>
);

export default HowTo;
