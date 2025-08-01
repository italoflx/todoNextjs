import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Components
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import StudentCard from './components/StudentCard';
import AttendanceList from './components/AttendanceList';
import BusSchedule from './components/BusSchedule';
import UniversityInfo from './components/UniversityInfo';
import SettingsPage from './components/SettingsPage';

// Types
import { MenuOption } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<MenuOption>('inicio');

  const handleNavigate = (page: MenuOption) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <HomePage onNavigate={handleNavigate} />;
      case 'carteirinha':
        return <StudentCard />;
      case 'presenca':
        return <AttendanceList />;
      case 'onibus':
        return <BusSchedule />;
      case 'faculdade':
        return <UniversityInfo />;
      case 'configuracoes':
        return <SettingsPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#1e40af" />
      
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />
      
      <View style={styles.content}>
        {renderCurrentPage()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    flex: 1,
  },
});
