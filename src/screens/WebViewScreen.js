import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native-webview';

import * as colors from '../colors';

export default class WebViewScreen extends Component {
  renderHeader(uri) {
    return (
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          onPress={() => this.props.navigation.goBack()}
          style={styles.icon}
        />
        <Text numberOfLines={1} style={styles.text}>
          {uri}
        </Text>
      </View>
    );
  }
  render() {
    const uri = this.props.navigation.getParam('uri');
    return (
      <View style={styles.container}>
        {this.renderHeader(uri)}
        <View style={styles.webViewContainer}>
          <WebView source={{ uri }} style={styles.webView} />
        </View>
      </View>
    );
  }
}

WebViewScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blueLight,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  icon: {
    color: colors.orangePrimary,
    fontSize: 30,
  },
  text: {
    color: colors.darkGray,
    flex: 1,
    fontSize: 22,
    fontWeight: '400',
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  webView: {
    elevation: 4,
    flex: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: colors.darkGray,
    shadowOpacity: 0.3,
  },
  webViewContainer: {
    elevation: 4,
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: colors.darkGray,
    shadowOpacity: 0.3,
  },
});
