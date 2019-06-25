import React from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
});

function getState({ children, layoutWidth }) {
  const pages = Array.isArray(children) ? children : [children];
  const pagesLength = pages.length;
  const pagerWidth = pagesLength * layoutWidth;

  return {
    pagesLength,
    pagerWidth,
    pages,
  };
}

class TabView extends React.PureComponent {
  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      ...getState(props),
    };
  }

  state = getState(this.props);

  componentDidUpdate(prevProps) {
    if (prevProps.selectedTabIndex !== this.props.selectedTabIndex) {
      this._runTransition();
    }

    if (prevProps.layoutWidth !== this.props.layoutWidth) {
      this.translateX.setValue(this._getTranslateValue());
    }
  }

  translateX = new Animated.Value(this._getTranslateValue());

  _getTranslateValue(index = this.props.selectedTabIndex) {
    return index * this.props.layoutWidth * -1;
  }

  _runTransition() {
    this.setState(
      {
        hideInvisible: false,
      },
      () => {
        if (this.props.animated) {
          Animated.timing(this.translateX, {
            toValue: this._getTranslateValue(),
            duration: this.props.animationDuration,
            useNativeDriver: true,
          }).start(() => {
            this.setState({ hideInvisible: true });
          });
        } else {
          this.translateX.setValue(this._getTranslateValue());
          this.setState({ hideInvisible: true });
        }
      },
    );
  }

  render() {
    const { children, style, useAbsoluteViews } = this.props;
    const { pagerWidth } = this.state;

    const pagesToRender = React.Children.map(
      children,
      (child, index) =>
        React.cloneElement(child, {
          tabIndex: index,
          layoutWidth: this.props.layoutWidth,
          selectedTabIndex: this.props.selectedTabIndex,
          hideInvisible: this.state.hideInvisible,
          useAbsoluteViews,
        }),
    );

    const stylesToPass = Array.isArray(style) ? style : [style];

    return (
      <Animated.View
        style={[
          s.container,
          { width: pagerWidth },
          {
            transform: [
              {
                translateX: this.translateX,
              },
            ],
          },
          ...stylesToPass,
        ]}
      >
        {pagesToRender}
      </Animated.View>
    );
  }
}

TabView.defaultProps = {
  animationDuration: 250,
  layoutWidth: Dimensions.get('window').width,
  animated: true,
};

export default TabView;
