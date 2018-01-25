import React, {Component} from 'react';
import EventListener, {withOptions} from 'react-event-listener';

class EventComponent extends Component {
  handleResize = () => {
    console.log('resize');
  };

  handleScroll = () => {
    console.log('scroll');
  };

  render() {
    return (
      <div>
        <EventListener
          target="window"
          onResize={this.handleResize}
          onScroll={withOptions(this.handleScroll, {passive: true, capture: false})}
        />
      </div>
    );
  }
}

export default EventComponent;
