# react-native-easy-tabs

> Blazing fast and easy tabs
______________________________

:raising_hand: If you are looking for a rich tab view with gestures and build-in headers (tab-switchers), take a look at [react-native-tab-view](https://github.com/react-native-community/react-native-tab-view).

## Examples

<a href="https://raw.githubusercontent.com/terrysahaidak/react-native-easy-tabs/master/gifs/login.gif"><img src="https://raw.githubusercontent.com/terrysahaidak/react-native-easy-tabs/master/gifs/login.gif" width="360"></a>
<a href="https://raw.githubusercontent.com/terrysahaidak/react-native-easy-tabs/master/gifs/home.gif"><img src="https://raw.githubusercontent.com/terrysahaidak/react-native-easy-tabs/master/gifs/home.gif" width="360"></a>
<a href="https://raw.githubusercontent.com/terrysahaidak/react-native-easy-tabs/master/gifs/listing_view.gif"><img src="https://raw.githubusercontent.com/terrysahaidak/react-native-easy-tabs/master/gifs/listing_view.gif" width="360"></a>

## Installation

Use npm or yarn to install it. There is no need for linking, since it's just plain React Native Animated with `useNativeDriver`.

```bash
npm i --save react-native-easy-tabs
# or
yarn add react-native-easy-tabs
```

## Changelog

Here is our [changelog](CHANGELOG). We are using [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and [Semantic Versioning](https://semver.org/spec/v2.0.0.html) during development.

## Usage
`react-native-easy-tabs` exposes two components – `TabView` and `Tab`.
`TabView` is a container for your tabs. It manages tab position

Clone this repository and run example project.

Here is a quick overview:
```js
import React, { useState } from 'react';
import { Tab, TabView } from 'react-native-easy-tabs';

export default function MyScreen() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <View style={styles.fill}>
      <View style={styles.padding}>
        <Button title="Tab 1" onPress={() => setCurrentTab(0)} />
        <Button title="Tab 2" onPress={() => setCurrentTab(1)} />
        <Button title="Tab 3" onPress={() => setCurrentTab(2)} />
      </View>

      <TabView
        selectedTabIndex={currentTab}
      >
        <Tab>
          <View style={styles.container}>
            <Text style={styles.paragraph}>This is tab 1</Text>
          </View>
        </Tab>

        <Tab lazy>
          <View style={styles.container}>
            <Text style={styles.paragraph}>
              Second tab here, yo
            </Text>
          </View>
        </Tab>
        <Tab lazy>
          <View style={styles.container}>
            <Text style={styles.paragraph}>THIRD TAB YAAAY</Text>
          </View>
        </Tab>
      </TabView>
    </View>
  );
}
```

## License

[MIT](LICENSE) © Terry Sahaidak 2019
