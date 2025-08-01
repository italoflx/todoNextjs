import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MenuOption } from '../types';
import { mockStudent, quickActions } from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: MenuOption) => void;
}

const { width } = Dimensions.get('window');

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const currentTime = new Date();
  const greeting = currentTime.getHours() < 12 ? 'Bom dia' : currentTime.getHours() < 18 ? 'Boa tarde' : 'Boa noite';

  const agenda = [
    { time: '08:00', subject: 'Estruturas de Concreto', location: 'Sala 205' },
    { time: '10:00', subject: 'Mecânica dos Solos', location: 'Lab. Solos' },
    { time: '14:00', subject: 'Hidráulica Aplicada', location: 'Sala 301' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Welcome Card */}
      <LinearGradient
        colors={['#2563eb', '#1e40af']}
        style={styles.welcomeCard}
      >
        <View style={styles.welcomeContent}>
          <Text style={styles.greetingText}>{greeting}</Text>
          <Text style={styles.studentName}>{mockStudent.name}</Text>
          <Text style={styles.courseText}>{mockStudent.course} - {mockStudent.semester} Semestre</Text>
        </View>
        <View style={styles.welcomeIcon}>
          <Ionicons name="school" size={40} color="rgba(255, 255, 255, 0.8)" />
        </View>
      </LinearGradient>

      {/* Status Cards */}
      <View style={styles.statusContainer}>
        <View style={styles.statusCard}>
          <LinearGradient
            colors={['#059669', '#047857']}
            style={styles.statusCardGradient}
          >
            <Ionicons name="bus" size={24} color="white" />
            <Text style={styles.statusTitle}>Próximo Ônibus</Text>
            <Text style={styles.statusValue}>08:30</Text>
            <Text style={styles.statusSubtitle}>Rodoviária → UFRN</Text>
          </LinearGradient>
        </View>

        <View style={styles.statusCard}>
          <LinearGradient
            colors={['#dc2626', '#b91c1c']}
            style={styles.statusCardGradient}
          >
            <Ionicons name="checkmark-circle" size={24} color="white" />
            <Text style={styles.statusTitle}>Presença Hoje</Text>
            <Text style={styles.statusValue}>Pendente</Text>
            <Text style={styles.statusSubtitle}>Confirme até 18h</Text>
          </LinearGradient>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        <View style={styles.quickActionsGrid}>
          {quickActions.map((action) => (
            <TouchableOpacity
              key={action.id}
              style={styles.quickActionCard}
              onPress={() => onNavigate(action.route)}
            >
              <View style={[styles.quickActionIcon, { backgroundColor: action.color }]}>
                <Ionicons name={action.icon as any} size={28} color="white" />
              </View>
              <Text style={styles.quickActionText}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Today's Schedule */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Agenda de Hoje</Text>
        <View style={styles.agendaContainer}>
          {agenda.map((item, index) => (
            <View key={index} style={styles.agendaItem}>
              <View style={styles.agendaTime}>
                <Text style={styles.agendaTimeText}>{item.time}</Text>
              </View>
              <View style={styles.agendaContent}>
                <Text style={styles.agendaSubject}>{item.subject}</Text>
                <Text style={styles.agendaLocation}>{item.location}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6b7280" />
            </View>
          ))}
        </View>
      </View>

      {/* Quick Tip */}
      <View style={styles.tipContainer}>
        <LinearGradient
          colors={['#7c3aed', '#6d28d9']}
          style={styles.tipCard}
        >
          <View style={styles.tipIcon}>
            <Ionicons name="bulb" size={24} color="white" />
          </View>
          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>Dica do Dia</Text>
            <Text style={styles.tipText}>
              Lembre-se de confirmar sua presença diariamente para manter seu benefício do transporte universitário.
            </Text>
          </View>
        </LinearGradient>
      </View>

      {/* Bottom padding for navigation */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  welcomeCard: {
    margin: 16,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  welcomeContent: {
    flex: 1,
  },
  welcomeIcon: {
    opacity: 0.3,
  },
  greetingText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
    marginBottom: 4,
  },
  studentName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  courseText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  statusContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
  },
  statusCard: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  statusCardGradient: {
    padding: 16,
    alignItems: 'center',
  },
  statusTitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 12,
    marginTop: 8,
    marginBottom: 4,
  },
  statusValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  statusSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 11,
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickActionCard: {
    width: (width - 44) / 2,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
  agendaContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  agendaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  agendaTime: {
    width: 60,
    alignItems: 'center',
  },
  agendaTimeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  agendaContent: {
    flex: 1,
    marginLeft: 16,
  },
  agendaSubject: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  agendaLocation: {
    fontSize: 14,
    color: '#6b7280',
  },
  tipContainer: {
    marginTop: 24,
    marginHorizontal: 16,
  },
  tipCard: {
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  tipIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tipText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default HomePage;