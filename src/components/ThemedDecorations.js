// Code ThemedDecoration Component Here
import React, {Component} from 'react';

class ThemedDecorations extends Component {
  render() {
    const childtheme = 'heaven';
    const themeItems = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: childtheme,
      });
    });
    return (
        {themeItems}
      );
  }
}

export default ThemedDecoration;