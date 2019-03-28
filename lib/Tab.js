import React from 'react';
import { StyleSheet, View } from 'react-native';

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Tab extends React.PureComponent {
  static getDerivedStateFromProps(props, state) {
    if (state.shouldRender) {
      return null;
    }

    return {
      shouldRender: props.selectedTabIndex === props.tabIndex,
    };
  }

  state = {
    shouldRender: !this.props.lazy,
  };

  render() {
    const { layoutWidth, children } = this.props;

    return (
      <View
        style={[
          s.container,
          {
            width: layoutWidth,
          },
        ]}
      >
        {this.state.shouldRender && children}
      </View>
    );
  }
}

export default Tab;
