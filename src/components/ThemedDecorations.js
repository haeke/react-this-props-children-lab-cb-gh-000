// Code ThemedDecoration Component Here
import React, {Component} from 'react';

class ThemedDecorations extends Component {
  render() {
    const childtheme = 'heaven';
    const themeItems = React.Children.map(this.props.children, child => {
      return <div className={this.props.theme}
    });
    return (
        {themeItems}
      );
  }
}

export default ThemedDecorations;