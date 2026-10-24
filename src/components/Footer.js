import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Durban | info@pawsitivepet.co.za | 081 348 7730</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.blue,
    borderTopWidth: 3,
    borderTopColor: colors.green,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  text: { color: colors.white, fontSize: 12 },
});
