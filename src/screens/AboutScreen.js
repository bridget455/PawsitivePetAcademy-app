import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../theme';
import Footer from '../components/Footer';

const goals = [
  'Make quality pet education accessible to everyone',
  'Reduce pet negligence through education',
  'Grow a community of responsible pet owners',
  'Help students build pet care careers',
];

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.h2}>{title}</Text>
      <View style={styles.line} />
      {children}
    </View>
  );
}

export default function AboutScreen() {
  return (
    <ScrollView>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=900' }}
        style={styles.hero}
      />
      <View style={styles.pad}>
        <Section title="Our History">
          <Text style={styles.body}>
            Pawsitive Pet Academy was established in 2023 in Durban by Sarah Smith. We have trained
            hundreds of pet owners and aspiring pet care professionals through our six-month
            programmes and six-week courses.
          </Text>
        </Section>
        <Section title="Our Vision">
          <Text style={styles.body}>
            To be South Africa's most trusted pet care educational academy, where every pet owner
            gains knowledge to give their pets a healthy and happy life.
          </Text>
        </Section>
        <Section title="Our Mission">
          <Text style={styles.body}>
            To provide practical, professional pet care training that improves the wellbeing of
            animals and creates job opportunities in the pet care industry.
          </Text>
        </Section>
        <Section title="Our Goals">
          {goals.map((g) => (
            <View key={g} style={styles.goalRow}>
              <View style={styles.dot} />
              <Text style={styles.body}>{g}</Text>
            </View>
          ))}
        </Section>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: { width: '100%', height: 200, backgroundColor: '#ddd' },
  pad: { padding: 16 },
  section: { marginBottom: 18 },
  h2: { fontSize: 20, fontWeight: 'bold', color: colors.blue },
  line: { height: 3, width: 50, backgroundColor: colors.green, marginVertical: 6 },
  body: { fontSize: 15, color: colors.text, lineHeight: 22, flexShrink: 1 },
  goalRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 6 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.green, marginTop: 6, marginRight: 10 },
});
