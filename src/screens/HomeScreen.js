import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';
import { courses, money } from '../data';
import Footer from '../components/Footer';

export default function HomeScreen({ go, openCourse }) {
  const featured = [courses[0], courses[1], courses[4]];
  return (
    <ScrollView>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=900' }}
        style={styles.hero}
      />
      <View style={styles.pad}>
        <Text style={styles.title}>Pawsitive Pet Academy</Text>
        <View style={styles.line} />
        <Text style={styles.body}>
          Pawsitive Pet Academy offers professional pet care education and training for aspiring pet
          owners, animal lovers and pet care professionals in Durban.
        </Text>
        <TouchableOpacity style={styles.btn} onPress={() => go('courses')}>
          <Text style={styles.btnText}>Register Now</Text>
        </TouchableOpacity>

        <Text style={styles.h2}>Popular courses</Text>
        <View style={styles.row}>
          {featured.map((c) => (
            <TouchableOpacity key={c.id} style={styles.card} onPress={() => openCourse(c.id)}>
              <Image source={{ uri: c.image }} style={styles.cardImg} />
              <Text style={styles.cardName}>{c.name}</Text>
              <Text style={styles.cardFee}>{money(c.fee)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: { width: '100%', height: 200, backgroundColor: '#ddd' },
  pad: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.blue },
  line: { height: 3, width: 60, backgroundColor: colors.green, marginVertical: 8 },
  body: { fontSize: 15, color: colors.text, lineHeight: 22 },
  btn: {
    alignSelf: 'flex-start',
    backgroundColor: colors.orange,
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 24,
    marginVertical: 18,
  },
  btnText: { color: colors.white, fontWeight: 'bold', fontSize: 15 },
  h2: { fontSize: 20, fontWeight: 'bold', color: colors.blue, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  card: {
    width: '31%',
    borderWidth: 1.5,
    borderColor: colors.green,
    borderRadius: 8,
    padding: 6,
    backgroundColor: colors.white,
  },
  cardImg: { width: '100%', height: 70, borderRadius: 4, backgroundColor: '#ddd' },
  cardName: { fontSize: 12, fontWeight: 'bold', color: colors.blue, marginTop: 6 },
  cardFee: { fontSize: 12, color: colors.orange, fontWeight: 'bold', marginTop: 2 },
});
