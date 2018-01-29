// Code ThemedDecoration Component Here
import React, {Component} from 'react';

class ThemedDecorations extends Component {
  render() {
    const themeItems = React.Children.map(this.props.children, child => {
      return <div className={this.props.theme}>{child}</div>
    });
    return (
        {themeItems}
      );
  }
}

export default ThemedDecorations;