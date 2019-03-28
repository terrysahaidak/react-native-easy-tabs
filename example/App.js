import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
} from 'react-native';
import { Constants } from 'expo';

import { Tab, TabView } from 'react-native-easy-tabs';

const colors = {
  white: 'white',
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  padding: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// or any pure javascript modules available in npm

function Header({ setCurrentTab }) {
  return (
    <View style={styles.padding}>
      <Button title="Tab 1" onPress={() => setCurrentTab(0)} />
      <Button title="Tab 2" onPress={() => setCurrentTab(1)} />
      <Button title="Tab 3" onPress={() => setCurrentTab(2)} />
    </View>
  );
}

export default class App extends React.Component {
  state = {
    currentTab: 0,
  };

  componentDidMount() {
    Dimensions.addEventListener('change', ({ window }) => {
      this.setState({ width: window.width });
    });
  }

  setCurrentTab(index) {
    this.setState({
      currentTab: index,
      width: Dimensions.get('window').width,
    });
  }

  render() {
    return (
      <View style={styles.fill}>
        <Header
          setCurrentTab={(index) => this.setCurrentTab(index)}
        />

        <TabView
          layoutWidth={this.state.width}
          selectedTabIndex={this.state.currentTab}
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
}
