import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { mockUniversityInfo } from '../data/mockData';

const UniversityInfo: React.FC = () => {
  const { 
    course, 
    university, 
    campus, 
    coordinator, 
    schedule, 
    semesterProgress, 
    nextSubjects 
  } = mockUniversityInfo;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Card */}
      <LinearGradient
        colors={['#2563eb', '#1e40af']}
        style={styles.headerCard}
      >
        <View style={styles.headerContent}>
          <Ionicons name="school" size={32} color="white" />
          <Text style={styles.headerTitle}>Informações Acadêmicas</Text>
          <Text style={styles.headerSubtitle}>{course}</Text>
        </View>
      </LinearGradient>

      {/* Course Info Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="library" size={24} color="#2563eb" />
            <Text style={styles.cardTitle}>Curso e Instituição</Text>
          </View>
          
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Curso:</Text>
              <Text style={styles.infoValue}>{course}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Universidade:</Text>
              <Text style={styles.infoValue}>{university}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Campus:</Text>
              <Text style={styles.infoValue}>{campus}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Coordenador:</Text>
              <Text style={styles.infoValue}>{coordinator}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Schedule Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="time" size={24} color="#059669" />
            <Text style={styles.cardTitle}>Horários das Aulas</Text>
          </View>
          
          <View style={styles.scheduleList}>
            {schedule.map((scheduleItem, index) => (
              <View key={index} style={styles.scheduleItem}>
                <View style={styles.scheduleIcon}>
                  <Ionicons name="calendar" size={16} color="#059669" />
                </View>
                <Text style={styles.scheduleText}>{scheduleItem}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Progress Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="trending-up" size={24} color="#7c3aed" />
            <Text style={styles.cardTitle}>Progresso do Semestre</Text>
          </View>
          
          <View style={styles.progressSection}>
            <View style={styles.progressInfo}>
              <Text style={styles.progressLabel}>Andamento do Semestre</Text>
              <Text style={styles.progressPercentage}>{semesterProgress}%</Text>
            </View>
            
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarBackground}>
                <LinearGradient
                  colors={['#7c3aed', '#6d28d9']}
                  style={[styles.progressBarFill, { width: `${semesterProgress}%` }]}
                />
              </View>
            </View>
            
            <Text style={styles.progressDescription}>
              Você está no meio do semestre. Continue assim!
            </Text>
          </View>
        </View>
      </View>

      {/* Next Subjects Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="book" size={24} color="#dc2626" />
            <Text style={styles.cardTitle}>Próximas Disciplinas</Text>
          </View>
          
          <View style={styles.subjectsList}>
            {nextSubjects.map((subject, index) => (
              <View key={index} style={styles.subjectItem}>
                <View style={styles.subjectIcon}>
                  <LinearGradient
                    colors={['#dc2626', '#b91c1c']}
                    style={styles.subjectIconGradient}
                  >
                    <Text style={styles.subjectNumber}>{index + 1}</Text>
                  </LinearGradient>
                </View>
                <View style={styles.subjectContent}>
                  <Text style={styles.subjectText}>{subject}</Text>
                  <Text style={styles.subjectDescription}>
                    Próximo semestre
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#6b7280" />
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Academic Status Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="shield-checkmark" size={24} color="#059669" />
            <Text style={styles.cardTitle}>Status Acadêmico</Text>
          </View>
          
          <View style={styles.statusGrid}>
            <View style={styles.statusItem}>
              <LinearGradient
                colors={['#059669', '#047857']}
                style={styles.statusIcon}
              >
                <Ionicons name="checkmark" size={20} color="white" />
              </LinearGradient>
              <Text style={styles.statusLabel}>Matrícula</Text>
              <Text style={styles.statusValue}>Ativa</Text>
            </View>
            
            <View style={styles.statusItem}>
              <LinearGradient
                colors={['#2563eb', '#1e40af']}
                style={styles.statusIcon}
              >
                <Ionicons name="school" size={20} color="white" />
              </LinearGradient>
              <Text style={styles.statusLabel}>Situação</Text>
              <Text style={styles.statusValue}>Regular</Text>
            </View>
            
            <View style={styles.statusItem}>
              <LinearGradient
                colors={['#7c3aed', '#6d28d9']}
                style={styles.statusIcon}
              >
                <Ionicons name="trophy" size={20} color="white" />
              </LinearGradient>
              <Text style={styles.statusLabel}>Desempenho</Text>
              <Text style={styles.statusValue}>Bom</Text>
            </View>
            
            <View style={styles.statusItem}>
              <LinearGradient
                colors={['#d97706', '#b45309']}
                style={styles.statusIcon}
              >
                <Ionicons name="time" size={20} color="white" />
              </LinearGradient>
              <Text style={styles.statusLabel}>Frequência</Text>
              <Text style={styles.statusValue}>95%</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Contact Info */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="call" size={24} color="#6b7280" />
            <Text style={styles.cardTitle}>Contatos Importantes</Text>
          </View>
          
          <View style={styles.contactList}>
            <View style={styles.contactItem}>
              <Ionicons name="person" size={16} color="#6b7280" />
              <Text style={styles.contactText}>
                Coordenação: {coordinator}
              </Text>
            </View>
            
            <View style={styles.contactItem}>
              <Ionicons name="mail" size={16} color="#6b7280" />
              <Text style={styles.contactText}>
                Email: coordenacao@ufrn.br
              </Text>
            </View>
            
            <View style={styles.contactItem}>
              <Ionicons name="call" size={16} color="#6b7280" />
              <Text style={styles.contactText}>
                Telefone: (84) 3000-0000
              </Text>
            </View>
            
            <View style={styles.contactItem}>
              <Ionicons name="location" size={16} color="#6b7280" />
              <Text style={styles.contactText}>
                Localização: {campus}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom padding */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  headerCard: {
    margin: 16,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  headerSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  cardContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginLeft: 12,
  },
  infoSection: {
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  infoLabel: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '600',
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: '#1f2937',
    fontWeight: '600',
    flex: 2,
    textAlign: 'right',
  },
  scheduleList: {
    gap: 12,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scheduleIcon: {
    marginRight: 12,
  },
  scheduleText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  progressSection: {
    alignItems: 'center',
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  progressLabel: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '600',
  },
  progressPercentage: {
    fontSize: 18,
    color: '#7c3aed',
    fontWeight: 'bold',
  },
  progressBarContainer: {
    width: '100%',
    marginBottom: 12,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressDescription: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
  subjectsList: {
    gap: 12,
  },
  subjectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  subjectIcon: {
    marginRight: 16,
  },
  subjectIconGradient: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectNumber: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subjectContent: {
    flex: 1,
  },
  subjectText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  subjectDescription: {
    fontSize: 12,
    color: '#6b7280',
  },
  statusGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  statusItem: {
    width: '47%',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
  },
  statusIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
    textAlign: 'center',
  },
  statusValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
  },
  contactList: {
    gap: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 12,
  },
});

export default UniversityInfo;