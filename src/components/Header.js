import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';

export default function Header({ onMenu, menuOpen }) {
  return (
    <View style={styles.bar}>
      <TouchableOpacity onPress={onMenu} accessibilityLabel={menuOpen ? 'Close menu' : 'Open menu'}>
        <Text style={styles.icon}>{menuOpen ? '✕' : '☰'}</Text>
      </TouchableOpacity>
      <View style={styles.brand}>
        <Text style={styles.paw}>🐾</Text>
        <Text style={styles.name}>Pawsitive</Text>
        <Text style={styles.sub}>PET ACADEMY</Text>
      </View>
      <View style={{ width: 28 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 2,
    borderBottomColor: colors.green,
  },
  icon: { fontSize: 26, color: colors.blue },
  brand: { alignItems: 'center' },
  paw: { fontSize: 18 },
  name: { fontSize: 20, fontWeight: 'bold', color: colors.blue },
  sub: { fontSize: 9, letterSpacing: 2, color: colors.green, fontWeight: 'bold' },
});
