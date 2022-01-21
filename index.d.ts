declare module "react-native-easy-tabs" {
  import * as React from 'react';
  import { ViewProperties, ViewStyle } from 'react-native';

  interface TabProps {
    lazy: boolean;
    style?: ViewStyle;
  }

  export class Tab extends React.PureComponent<TabProps, any> {}

  interface TabViewProps extends ViewProperties {
    animationDuration: number;
    layoutWidth: number;
    animated: boolean;
    selectedTabIndex: number;
    useAbsoluteViews: boolean;
    children: React.ElementType | React.ElementType[] | React.Element;
  }

  export class TabView extends React.PureComponent<TabViewProps, any> {}
}
