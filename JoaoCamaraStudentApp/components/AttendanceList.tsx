import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { AttendanceDay } from '../types';
import { mockAttendance } from '../data/mockData';

const AttendanceList: React.FC = () => {
  const [attendance, setAttendance] = useState<AttendanceDay[]>(mockAttendance);

  const getStatusIcon = (status: AttendanceDay['status']) => {
    switch (status) {
      case 'Confirmado':
        return 'checkmark-circle';
      case 'Faltou':
        return 'close-circle';
      case 'Pendente':
        return 'time';
      default:
        return 'help-circle';
    }
  };

  const getStatusColor = (status: AttendanceDay['status']) => {
    switch (status) {
      case 'Confirmado':
        return '#059669';
      case 'Faltou':
        return '#dc2626';
      case 'Pendente':
        return '#d97706';
      default:
        return '#6b7280';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
    });
  };

  const handleConfirmAttendance = (date: string) => {
    Alert.alert(
      'Confirmar Presença',
      `Deseja confirmar sua presença para o dia ${formatDate(date)}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Confirmar',
          onPress: () => {
            setAttendance(prev =>
              prev.map(item =>
                item.date === date
                  ? { ...item, status: 'Confirmado' as const }
                  : item
              )
            );
          },
        },
      ]
    );
  };

  const handleMarkAbsent = (date: string) => {
    Alert.alert(
      'Marcar Falta',
      `Deseja marcar falta para o dia ${formatDate(date)}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Marcar Falta',
          style: 'destructive',
          onPress: () => {
            setAttendance(prev =>
              prev.map(item =>
                item.date === date
                  ? { ...item, status: 'Faltou' as const }
                  : item
              )
            );
          },
        },
      ]
    );
  };

  const getWeekSummary = () => {
    const confirmed = attendance.filter(item => item.status === 'Confirmado').length;
    const absent = attendance.filter(item => item.status === 'Faltou').length;
    const pending = attendance.filter(item => item.status === 'Pendente').length;
    
    return { confirmed, absent, pending };
  };

  const summary = getWeekSummary();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Card */}
      <LinearGradient
        colors={['#2563eb', '#1e40af']}
        style={styles.headerCard}
      >
        <View style={styles.headerContent}>
          <Ionicons name="calendar" size={32} color="white" />
          <Text style={styles.headerTitle}>Controle de Presença</Text>
          <Text style={styles.headerSubtitle}>Semana Atual</Text>
        </View>
      </LinearGradient>

      {/* Summary Cards */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <LinearGradient
            colors={['#059669', '#047857']}
            style={styles.summaryGradient}
          >
            <Ionicons name="checkmark-circle" size={24} color="white" />
            <Text style={styles.summaryNumber}>{summary.confirmed}</Text>
            <Text style={styles.summaryLabel}>Confirmados</Text>
          </LinearGradient>
        </View>

        <View style={styles.summaryCard}>
          <LinearGradient
            colors={['#dc2626', '#b91c1c']}
            style={styles.summaryGradient}
          >
            <Ionicons name="close-circle" size={24} color="white" />
            <Text style={styles.summaryNumber}>{summary.absent}</Text>
            <Text style={styles.summaryLabel}>Faltas</Text>
          </LinearGradient>
        </View>

        <View style={styles.summaryCard}>
          <LinearGradient
            colors={['#d97706', '#b45309']}
            style={styles.summaryGradient}
          >
            <Ionicons name="time" size={24} color="white" />
            <Text style={styles.summaryNumber}>{summary.pending}</Text>
            <Text style={styles.summaryLabel}>Pendentes</Text>
          </LinearGradient>
        </View>
      </View>

      {/* Attendance List */}
      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Histórico Semanal</Text>
        
        <View style={styles.attendanceList}>
          {attendance.map((item, index) => (
            <View key={item.date} style={styles.attendanceItem}>
              <View style={styles.attendanceInfo}>
                <View style={styles.dateContainer}>
                  <Text style={styles.dateText}>{formatDate(item.date)}</Text>
                  <Text style={styles.dayText}>{item.dayOfWeek}</Text>
                </View>
                
                <View style={styles.statusContainer}>
                  <Ionicons
                    name={getStatusIcon(item.status) as any}
                    size={24}
                    color={getStatusColor(item.status)}
                  />
                  <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
                    {item.status}
                  </Text>
                </View>
              </View>

              {/* Action Buttons for Pending Items */}
              {item.status === 'Pendente' && (
                <View style={styles.actionButtons}>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.confirmButton]}
                    onPress={() => handleConfirmAttendance(item.date)}
                  >
                    <Ionicons name="checkmark" size={16} color="white" />
                    <Text style={styles.actionButtonText}>Confirmar</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    style={[styles.actionButton, styles.absentButton]}
                    onPress={() => handleMarkAbsent(item.date)}
                  >
                    <Ionicons name="close" size={16} color="white" />
                    <Text style={styles.actionButtonText}>Marcar Falta</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Info Card */}
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Ionicons name="information-circle" size={24} color="#2563eb" />
            <Text style={styles.infoTitle}>Importante</Text>
          </View>
          
          <View style={styles.infoContent}>
            <View style={styles.infoItem}>
              <Ionicons name="time" size={16} color="#6b7280" />
              <Text style={styles.infoText}>
                Confirme sua presença até às 18h do mesmo dia
              </Text>
            </View>
            
            <View style={styles.infoItem}>
              <Ionicons name="warning" size={16} color="#d97706" />
              <Text style={styles.infoText}>
                Mais de 3 faltas no mês pode suspender o benefício
              </Text>
            </View>
            
            <View style={styles.infoItem}>
              <Ionicons name="checkmark-circle" size={16} color="#059669" />
              <Text style={styles.infoText}>
                Presença confirmada garante o transporte no dia seguinte
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
  summaryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 24,
  },
  summaryCard: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  summaryGradient: {
    padding: 16,
    alignItems: 'center',
  },
  summaryNumber: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  summaryLabel: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 12,
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  attendanceList: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  attendanceItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  attendanceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateContainer: {
    flex: 1,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 2,
  },
  dayText: {
    fontSize: 14,
    color: '#6b7280',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
  },
  confirmButton: {
    backgroundColor: '#059669',
  },
  absentButton: {
    backgroundColor: '#dc2626',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  infoContainer: {
    marginTop: 24,
    marginHorizontal: 16,
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginLeft: 12,
  },
  infoContent: {
    gap: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
    marginLeft: 12,
    lineHeight: 20,
  },
});

export default AttendanceList;