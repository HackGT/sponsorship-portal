import React from 'react';
import './../App.css';

import Login from './Login';

class Content extends React.Component<{}, {currScreen: string}> {
  constructor() {
    super({})

    this.state = {
      currScreen: 'login'
    };
  };

  render() {
    let content;

    if (this.state.currScreen == 'login') {
      content = <Login onNextClick={this.onNextClick}/>
    } else {
      content = <div>You've logged in!</div>
    }
    return(
      <div className="App">
        <div>{content}</div>
      </div>
    );
  };

  onNextClick = (next_action:string) => {
		this.setState({
			currScreen: next_action,
		});
  };
}

export default Content;
