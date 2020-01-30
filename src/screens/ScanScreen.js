import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { saveCode } from '../store/actions';
import * as colors from '../colors';

class ScanScreen extends Component {
  onSuccess = e => {
    this.props.saveCode(e.data);
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        topContent={
          <Text style={styles.text}>Focus camera on QR code to scan</Text>
        }
      />
    );
  }
}

ScanScreen.propTypes = {
  saveCode: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, { saveCode })(ScanScreen);

const styles = StyleSheet.create({
  text: {
    color: colors.bluePrimary,
    flex: 1,
    fontSize: 26,
    fontWeight: '400',
    paddingHorizontal: 30,
    paddingTop: 20,
    textAlign: 'center',
  },
});
