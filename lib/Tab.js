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

  getAdditionalStyles() {
    const { hideInvisible, selectedTabIndex, tabIndex } = this.props;

    const opacity =
      hideInvisible && selectedTabIndex !== tabIndex ? 0 : 1;

    return {
      opacity,
    };
  }

  render() {
    const { layoutWidth, children } = this.props;
    return (
      <View
        style={[
          s.container,
          {
            width: layoutWidth,
            ...this.getAdditionalStyles(),
          },
        ]}
      >
        {this.state.shouldRender && children}
      </View>
    );
  }
}

export default Tab;
