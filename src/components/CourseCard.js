import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';
import { money } from '../data';

export default function CourseCard({ course, onPress }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: course.image }} style={styles.img} />
      <View style={styles.body}>
        <Text style={styles.name}>{course.name}</Text>
        <Text style={styles.fee}>{money(course.fee)}</Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.btnText}>VIEW MORE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.green,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 14,
    padding: 10,
  },
  img: { width: 90, height: 90, borderRadius: 6, backgroundColor: '#ddd' },
  body: { flex: 1, marginLeft: 12, justifyContent: 'space-between' },
  name: { fontSize: 16, fontWeight: 'bold', color: colors.blue },
  fee: { fontSize: 15, color: colors.orange, fontWeight: 'bold' },
  btn: {
    alignSelf: 'flex-start',
    backgroundColor: colors.orange,
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 20,
  },
  btnText: { color: colors.white, fontWeight: 'bold', fontSize: 11 },
});
