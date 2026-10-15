import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { colors } from './src/theme';
import Header from './src/components/Header';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CourseDetailScreen from './src/screens/CourseDetailScreen';
import FeesScreen from './src/screens/FeesScreen';
import ContactScreen from './src/screens/ContactScreen';

const MENU = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About Us' },
  { key: 'courses', label: 'Courses' },
  { key: 'fees', label: 'Calculate Fees' },
  { key: 'contact', label: 'Contact Us' },
];

export default function App() {
  const [screen, setScreen] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseId, setCourseId] = useState(null);
  const [preselect, setPreselect] = useState(null);

  const go = (key) => {
    setMenuOpen(false);
    setScreen(key);
  };
  const openCourse = (id) => {
    setCourseId(id);
    setScreen('detail');
  };
  const requestQuote = (id) => {
    setPreselect(id);
    setScreen('fees');
  };

  let content;
  if (screen === 'home') content = <HomeScreen go={go} openCourse={openCourse} />;
  else if (screen === 'about') content = <AboutScreen />;
  else if (screen === 'courses') content = <CoursesScreen openCourse={openCourse} />;
  else if (screen === 'detail') content = <CourseDetailScreen courseId={courseId} requestQuote={requestQuote} />;
  else if (screen === 'fees') content = <FeesScreen key={preselect || 'none'} preselect={preselect} />;
  else content = <ContactScreen />;

  const activeKey = screen === 'detail' ? 'courses' : screen;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <Header menuOpen={menuOpen} onMenu={() => setMenuOpen(!menuOpen)} />
      {menuOpen ? (
        <View style={styles.menu}>
          {MENU.map((m) => (
            <TouchableOpacity key={m.key} style={styles.menuItem} onPress={() => go(m.key)}>
              <Text style={[styles.menuText, activeKey === m.key && styles.menuActive]}>{m.label}</Text>
              <View style={styles.menuLine} />
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.content}>{content}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.white, paddingTop: StatusBar.currentHeight || 0 },
  content: { flex: 1 },
  menu: { flex: 1, backgroundColor: colors.blue, padding: 28 },
  menuItem: { marginBottom: 14 },
  menuText: { color: colors.white, fontSize: 22, paddingVertical: 12 },
  menuActive: { color: colors.orange, fontWeight: 'bold' },
  menuLine: { height: 1, backgroundColor: colors.green },
});