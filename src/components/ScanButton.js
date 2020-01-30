import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as colors from '../colors';

export const ScanButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name="qrcode" style={styles.icon} />
    </TouchableOpacity>
  );
};
ScanButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.bluePrimary,
    borderRadius: 40,
    bottom: 30,
    elevation: 4,
    height: 80,
    justifyContent: 'center',
    position: 'absolute',
    right: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: colors.darkGray,
    shadowOpacity: 0.3,
    width: 80,
  },
  icon: {
    color: colors.blueLight,
    fontSize: 50,
    textAlign: 'center',
  },
});
