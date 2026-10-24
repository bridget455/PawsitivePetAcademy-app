import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';
import { courses, money } from '../data';
import Footer from '../components/Footer';

export default function CourseDetailScreen({ courseId, requestQuote }) {
  const course = courses.find((c) => c.id === courseId) || courses[0];
  return (
    <ScrollView>
      <View style={styles.top}>
        <Image source={{ uri: course.image }} style={styles.img} />
        <View style={styles.topText}>
          <Text style={styles.name}>{course.name}</Text>
          <Text style={styles.purpose}>{course.purpose}</Text>
        </View>
      </View>

      <View style={styles.box}>
        <Text style={styles.h2}>Course Content</Text>
        {course.content.map((item) => (
          <View key={item} style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.item}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.twoCol}>
        <View style={[styles.box, styles.half]}>
          <Text style={styles.h2}>Duration</Text>
          <Text style={styles.big}>{course.duration}</Text>
        </View>
        <View style={[styles.box, styles.half]}>
          <Text style={styles.h2}>Course Fee</Text>
          <Text style={styles.big}>{money(course.fee)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => requestQuote(course.id)}>
        <Text style={styles.btnText}>REQUEST QUOTE</Text>
      </TouchableOpacity>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    margin: 16,
    padding: 10,
    borderWidth: 1.5,
    borderColor: colors.green,
    borderRadius: 8,
  },
  img: { width: 110, height: 110, borderRadius: 6, backgroundColor: '#ddd' },
  topText: { flex: 1, marginLeft: 12 },
  name: { fontSize: 20, fontWeight: 'bold', color: colors.blue },
  purpose: { marginTop: 6, color: colors.text, lineHeight: 20 },
  box: {
    marginHorizontal: 16,
    marginBottom: 14,
    padding: 12,
    borderWidth: 1.5,
    borderColor: colors.green,
    borderRadius: 8,
  },
  h2: { fontSize: 16, fontWeight: 'bold', color: colors.blue, marginBottom: 6 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  dot: { width: 9, height: 9, borderRadius: 5, backgroundColor: colors.green, marginRight: 10 },
  item: { fontSize: 15, color: colors.text },
  twoCol: { flexDirection: 'row' },
  half: { flex: 1 },
  big: { fontSize: 22, fontWeight: 'bold', color: colors.orange },
  btn: {
    backgroundColor: colors.orange,
    marginHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 26,
    alignItems: 'center',
  },
  btnText: { color: colors.white, fontWeight: 'bold', fontSize: 16 },
});
