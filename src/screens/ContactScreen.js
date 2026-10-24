import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { colors } from '../theme';
import Footer from '../components/Footer';

const ADDRESS = '12 Marine Parade, Durban, 4001';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const send = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('Please fill in all fields.');
      return;
    }
    setStatus('Thank you, ' + name.trim() + '. We will get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.pad}>
        <Text style={styles.title}>Contact Us</Text>
        <View style={styles.line} />

        <TouchableOpacity
          style={styles.map}
          onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ADDRESS))}
        >
          <Text style={styles.mapText}>📍 MAP</Text>
          <Text style={styles.mapSub}>Tap to get directions</Text>
        </TouchableOpacity>

        <View style={styles.box}>
          <Text style={styles.info}>📍 {ADDRESS}</Text>
          <Text style={styles.info}>📞 081 348 7730</Text>
          <Text style={styles.info}>✉️ info@pawsitivepet.co.za</Text>
          <Text style={styles.info}>Facebook · Instagram · TikTok</Text>
        </View>

        <Text style={styles.h2}>Send us a message</Text>
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
          placeholder="Message"
          multiline
          value={message}
          onChangeText={setMessage}
        />
        {status ? <Text style={styles.status}>{status}</Text> : null}
        <TouchableOpacity style={styles.btn} onPress={send}>
          <Text style={styles.btnText}>SEND</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pad: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.blue },
  line: { height: 3, width: 60, backgroundColor: colors.green, marginVertical: 8, marginBottom: 14 },
  map: {
    height: 140,
    backgroundColor: '#DDE6F3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  mapText: { fontSize: 20, fontWeight: 'bold', color: colors.blue },
  mapSub: { color: colors.grey, marginTop: 4 },
  box: { borderWidth: 1.5, borderColor: colors.green, borderRadius: 8, padding: 12, marginBottom: 16 },
  info: { fontSize: 15, color: colors.text, marginBottom: 6 },
  h2: { fontSize: 18, fontWeight: 'bold', color: colors.blue, marginBottom: 8 },
  input: {
    borderWidth: 1.5,
    borderColor: colors.green,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 15,
    backgroundColor: colors.white,
  },
  status: { color: colors.blue, marginBottom: 8 },
  btn: { backgroundColor: colors.orange, paddingVertical: 14, borderRadius: 26, alignItems: 'center' },
  btnText: { color: colors.white, fontWeight: 'bold', fontSize: 16 },
});
