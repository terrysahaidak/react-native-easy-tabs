declare module "react-native-easy-tabs" {
  import * as React from 'react';
  import { ViewProperties } from 'react-native';

  interface TabProps {
    lazy: boolean;
  }

  export class Tab extends React.PureComponent<TabProps, any> {}

  interface TabViewProps extends ViewProperties {
    animationDuration: number;
    layoutWidth: number;
    animated: boolean;
    selectedTabIndex: number;
    children: React.ElementType | React.ElementType[];
  }

  export class TabView extends React.PureComponent<TabViewProps, any> {}
}
