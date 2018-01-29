// Code ThemedDecoration Component Here
import React, {Component} from 'react';

class ThemedDecoration extends Component {
  render() {
    const theme = 'party';
    const themeItems = React.Children.map(this.props.children, child => {
      
    })
    return (
        {themeItems}
      );
  }
}

export default ThemedDecoration;