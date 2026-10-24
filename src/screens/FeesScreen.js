import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';
import { courses, calculateQuote, money } from '../data';
import Footer from '../components/Footer';

export default function FeesScreen({ preselect }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState(preselect ? [preselect] : []);
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState('');

  const toggle = (id) => {
    setQuote(null);
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const calculate = () => {
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError('Enter your name, phone number and email address.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Enter a valid email address.');
      return;
    }
    if (selected.length === 0) {
      setError('Select at least one course.');
      return;
    }
    setError('');
    setQuote(calculateQuote(courses.filter((c) => selected.includes(c.id))));
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.pad}>
        <Text style={styles.title}>Calculate your fees</Text>
        <View style={styles.line} />

        <TextInput style={styles.input} placeholder="Full name" value={name} onChangeText={setName} />
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Email address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.h2}>Select your courses</Text>
        {courses.map((c) => {
          const on = selected.includes(c.id);
          return (
            <TouchableOpacity key={c.id} style={styles.courseRow} onPress={() => toggle(c.id)}>
              <View style={[styles.box, on && styles.boxOn]}>
                {on && <Text style={styles.tick}>✓</Text>}
              </View>
              <Text style={styles.courseName}>{c.name}</Text>
              <Text style={styles.courseFee}>{money(c.fee)}</Text>
            </TouchableOpacity>
          );
        })}

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.btn} onPress={calculate}>
          <Text style={styles.btnText}>CALCULATE TOTAL</Text>
        </TouchableOpacity>

        {quote && (
          <View style={styles.result}>
            <Row label="Courses selected" value={String(selected.length)} />
            <Row label="Subtotal" value={money(quote.subtotal)} />
            <Row label={`Discount (${Math.round(quote.rate * 100)}%)`} value={'-' + money(quote.discount)} />
            <Row label="VAT (15%)" value={money(quote.vat)} />
            <View style={styles.divider} />
            <Row label="Total" value={money(quote.total)} bold />
            <Text style={styles.note}>This is a quoted fee and not a formal invoice.</Text>
          </View>
        )}
      </View>
      <Footer />
    </ScrollView>
  );
}

function Row({ label, value, bold }) {
  return (
    <View style={styles.resRow}>
      <Text style={[styles.resText, bold && styles.bold]}>{label}</Text>
      <Text style={[styles.resText, bold && styles.bold]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pad: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.blue },
  line: { height: 3, width: 60, backgroundColor: colors.green, marginVertical: 8, marginBottom: 14 },
  input: {
    borderWidth: 1.5,
    borderColor: colors.green,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 15,
    backgroundColor: colors.white,
  },
  h2: { fontSize: 18, fontWeight: 'bold', color: colors.blue, marginTop: 10, marginBottom: 8 },
  courseRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 9 },
  box: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: colors.green,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  boxOn: { backgroundColor: colors.green },
  tick: { color: colors.white, fontWeight: 'bold' },
  courseName: { flex: 1, fontSize: 15, color: colors.text },
  courseFee: { fontSize: 15, fontWeight: 'bold', color: colors.orange },
  error: { color: '#C62828', marginTop: 8 },
  btn: {
    backgroundColor: colors.orange,
    paddingVertical: 14,
    borderRadius: 26,
    alignItems: 'center',
    marginTop: 14,
  },
  btnText: { color: colors.white, fontWeight: 'bold', fontSize: 16 },
  result: {
    marginTop: 18,
    padding: 14,
    borderWidth: 1.5,
    borderColor: colors.green,
    borderRadius: 8,
    backgroundColor: colors.light,
  },
  resRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 },
  resText: { fontSize: 15, color: colors.text },
  bold: { fontWeight: 'bold', color: colors.blue, fontSize: 17 },
  divider: { height: 1, backgroundColor: colors.green, marginVertical: 6 },
  note: { marginTop: 10, fontSize: 12, color: colors.grey, fontStyle: 'italic' },
});
