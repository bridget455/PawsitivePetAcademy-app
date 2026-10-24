import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { colors } from '../theme';
import { courses } from '../data';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';

export default function CoursesScreen({ openCourse }) {
  const sixMonth = courses.filter((c) => c.type === 'Six-month');
  const sixWeek = courses.filter((c) => c.type === 'Six-week');
  return (
    <ScrollView>
      <Text style={styles.title}>Our Courses</Text>
      <Text style={styles.sub}>Choose one or more courses. Book more and save.</Text>

      <Text style={styles.h2}>Six-month programmes (12 weeks)</Text>
      <View style={styles.line} />
      {sixMonth.map((c) => (
        <CourseCard key={c.id} course={c} onPress={() => openCourse(c.id)} />
      ))}

      <Text style={styles.h2}>Six-week short courses</Text>
      <View style={styles.line} />
      {sixWeek.map((c) => (
        <CourseCard key={c.id} course={c} onPress={() => openCourse(c.id)} />
      ))}
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: 'bold', color: colors.blue, margin: 16, marginBottom: 2 },
  sub: { color: colors.grey, marginHorizontal: 16, marginBottom: 10 },
  h2: { fontSize: 18, fontWeight: 'bold', color: colors.blue, marginHorizontal: 16, marginTop: 14 },
  line: { height: 3, width: 50, backgroundColor: colors.green, marginHorizontal: 16, marginVertical: 6, marginBottom: 12 },
});
