// Code ThemedDecoration Component Here
import React, {Component} from 'react';

class ThemedDecoration extends Component {
  render() {
    const childtheme = 'heaven';
    const themeItems = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: ctheme,
      });
    });
    return (
        {themeItems}
      );
  }
}

export default ThemedDecoration;