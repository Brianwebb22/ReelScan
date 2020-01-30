import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as colors from '../colors';

export const CodeList = ({ codeArray, onUrlPressed, onDeletePressed }) => {
  const renderListItem = ({ item, index }) => {
    return (
      <View style={styles.listItem}>
        <TouchableOpacity
          onPress={() => onUrlPressed(item)}
          style={styles.urlButton}>
          <Text numberOfLines={2} style={styles.linkText}>
            {item}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDeletePressed(index)}
          style={styles.deleteButton}>
          <Icon name="times" style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    );
  };
  if (codeArray.length < 1) {
    return <Text style={styles.nullText}>Scan a QR code to get started!</Text>;
  }

  return (
    <FlatList
      data={codeArray}
      keyExtractor={item => item}
      renderItem={renderListItem}
      style={styles.list}
    />
  );
};
CodeList.propTypes = {
  codeArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDeletePressed: PropTypes.func.isRequired,
  onUrlPressed: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  deleteButton: {
    alignItems: 'center',
    backgroundColor: colors.blueLight,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    elevation: 4,
    justifyContent: 'center',
    flex: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: colors.darkGray,
    shadowOpacity: 0.3,
  },
  deleteIcon: {
    color: colors.orangePrimary,
    fontSize: 30,
  },
  linkText: {
    color: colors.darkGray,
    fontSize: 18,
  },
  list: {
    backgroundColor: colors.blueLight,
    paddingTop: 5,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    marginBottom: 5,
    marginHorizontal: 20,
    marginTop: 10,
  },
  nullText: {
    color: colors.bluePrimary,
    fontSize: 30,
    fontWeight: '400',
    paddingHorizontal: 20,
    paddingTop: 40,
    textAlign: 'center',
  },
  urlButton: {
    backgroundColor: colors.blueLight,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    elevation: 4,
    flex: 4,
    justifyContent: 'center',
    marginRight: 2,
    paddingHorizontal: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: colors.darkGray,
    shadowOpacity: 0.3,
  },
});
