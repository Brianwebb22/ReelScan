import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { deleteCode } from '../store/actions';
import { CodeList, ScanButton } from '../components';
import * as colors from '../colors';

class HomeScreen extends Component {
  onDeletePressed(itemIndex) {
    this.props.deleteCode(itemIndex);
  }

  onUrlPressed(itemUrl) {
    this.props.navigation.navigate('WebViewScreen', { uri: itemUrl });
  }

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <Icon name="qrcode" style={styles.icon} />
      </View>
      <Text style={styles.headerText}>ReelScan</Text>
    </View>
  );

  render() {
    const { codeArray, navigation } = this.props;
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <CodeList
          codeArray={codeArray}
          onDeletePressed={itemIndex => this.onDeletePressed(itemIndex)}
          onUrlPressed={itemUrl => this.onUrlPressed(itemUrl)}
        />
        <ScanButton onPress={() => navigation.navigate('ScanScreen')} />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  codeArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteCode: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { codeArray } = state;
  return {
    codeArray,
  };
};
export default connect(mapStateToProps, { deleteCode })(HomeScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blueLight,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    backgroundColor: colors.bluePrimary,
    flexDirection: 'row',
  },
  headerText: {
    color: colors.blueLight,
    fontSize: 50,
    fontFamily: 'serif',
    paddingLeft: 15,
  },
  icon: {
    color: colors.blueLight,
    fontSize: 60,
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: colors.orangePrimary,
    borderBottomRightRadius: 45,
    borderTopRightRadius: 45,
    height: 90,
    justifyContent: 'center',
    width: 90,
  },
});
