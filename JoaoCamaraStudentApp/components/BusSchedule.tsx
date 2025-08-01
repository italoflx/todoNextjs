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
import { BusRoute } from '../types';
import { mockBusRoutes } from '../data/mockData';

const BusSchedule: React.FC = () => {
  const [routes, setRoutes] = useState<BusRoute[]>(mockBusRoutes);
  const [reminders, setReminders] = useState<Set<string>>(new Set());

  const getStatusIcon = (status: BusRoute['status']) => {
    switch (status) {
      case 'No horário':
        return 'checkmark-circle';
      case 'Atrasado':
        return 'warning';
      case 'Partiu':
        return 'close-circle';
      case 'Próximo':
        return 'time';
      case 'Pendente':
        return 'ellipse';
      default:
        return 'help-circle';
    }
  };

  const getStatusColor = (status: BusRoute['status']) => {
    switch (status) {
      case 'No horário':
        return '#059669';
      case 'Atrasado':
        return '#d97706';
      case 'Partiu':
        return '#6b7280';
      case 'Próximo':
        return '#2563eb';
      case 'Pendente':
        return '#9ca3af';
      default:
        return '#6b7280';
    }
  };

  const getStatusBadgeColor = (status: BusRoute['status']) => {
    switch (status) {
      case 'No horário':
        return ['#059669', '#047857'];
      case 'Atrasado':
        return ['#d97706', '#b45309'];
      case 'Partiu':
        return ['#6b7280', '#4b5563'];
      case 'Próximo':
        return ['#2563eb', '#1e40af'];
      case 'Pendente':
        return ['#9ca3af', '#6b7280'];
      default:
        return ['#6b7280', '#4b5563'];
    }
  };

  const handleSetReminder = (time: string, departure: string, destination: string) => {
    const routeKey = `${time}-${departure}-${destination}`;
    
    if (reminders.has(routeKey)) {
      // Remove reminder
      setReminders(prev => {
        const newSet = new Set(prev);
        newSet.delete(routeKey);
        return newSet;
      });
      
      Alert.alert(
        'Lembrete Removido',
        'O lembrete para este ônibus foi removido.',
        [{ text: 'OK' }]
      );
    } else {
      // Add reminder
      setReminders(prev => new Set(prev).add(routeKey));
      
      Alert.alert(
        'Lembrete Ativado',
        `Você receberá uma notificação 15 minutos antes do ônibus das ${time}.`,
        [{ text: 'OK' }]
      );
    }
  };

  const getNextBus = () => {
    return routes.find(route => route.status === 'Próximo');
  };

  const nextBus = getNextBus();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Card */}
      <LinearGradient
        colors={['#2563eb', '#1e40af']}
        style={styles.headerCard}
      >
        <View style={styles.headerContent}>
          <Ionicons name="bus" size={32} color="white" />
          <Text style={styles.headerTitle}>Horários de Ônibus</Text>
          <Text style={styles.headerSubtitle}>Transporte Universitário</Text>
        </View>
      </LinearGradient>

      {/* Next Bus Card */}
      {nextBus && (
        <View style={styles.nextBusContainer}>
          <LinearGradient
            colors={['#059669', '#047857']}
            style={styles.nextBusCard}
          >
            <View style={styles.nextBusHeader}>
              <Ionicons name="time" size={24} color="white" />
              <Text style={styles.nextBusTitle}>Próximo Ônibus</Text>
            </View>
            
            <View style={styles.nextBusInfo}>
              <Text style={styles.nextBusTime}>{nextBus.time}</Text>
              <Text style={styles.nextBusRoute}>
                {nextBus.departure} → {nextBus.destination}
              </Text>
            </View>
            
            <TouchableOpacity
              style={styles.reminderButtonNext}
              onPress={() => handleSetReminder(nextBus.time, nextBus.departure, nextBus.destination)}
            >
              <Ionicons name="notifications" size={16} color="white" />
              <Text style={styles.reminderButtonText}>Receber Lembrete</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}

      {/* Routes List */}
      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Todos os Horários</Text>
        
        <View style={styles.routesList}>
          {routes.map((route, index) => {
            const routeKey = `${route.time}-${route.departure}-${route.destination}`;
            const hasReminder = reminders.has(routeKey);
            
            return (
              <View key={index} style={styles.routeItem}>
                <View style={styles.routeInfo}>
                  <View style={styles.timeContainer}>
                    <Text style={styles.routeTime}>{route.time}</Text>
                    {hasReminder && (
                      <Ionicons name="notifications" size={16} color="#2563eb" />
                    )}
                  </View>
                  
                  <View style={styles.routeDetails}>
                    <Text style={styles.routeText}>
                      <Text style={styles.departureText}>{route.departure}</Text>
                      <Text style={styles.arrowText}> → </Text>
                      <Text style={styles.destinationText}>{route.destination}</Text>
                    </Text>
                  </View>
                  
                  <View style={styles.statusContainer}>
                    <LinearGradient
                      colors={getStatusBadgeColor(route.status)}
                      style={styles.statusBadge}
                    >
                      <Ionicons
                        name={getStatusIcon(route.status) as any}
                        size={16}
                        color="white"
                      />
                      <Text style={styles.statusText}>{route.status}</Text>
                    </LinearGradient>
                  </View>
                </View>

                {/* Action Buttons */}
                <View style={styles.actionContainer}>
                  <TouchableOpacity
                    style={[
                      styles.reminderButton,
                      hasReminder && styles.reminderButtonActive
                    ]}
                    onPress={() => handleSetReminder(route.time, route.departure, route.destination)}
                  >
                    <Ionicons 
                      name={hasReminder ? "notifications" : "notifications-outline"} 
                      size={16} 
                      color={hasReminder ? "white" : "#2563eb"} 
                    />
                    <Text style={[
                      styles.reminderText,
                      hasReminder && styles.reminderTextActive
                    ]}>
                      {hasReminder ? 'Ativo' : 'Lembrete'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      {/* Info Card */}
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Ionicons name="information-circle" size={24} color="#2563eb" />
            <Text style={styles.infoTitle}>Informações Importantes</Text>
          </View>
          
          <View style={styles.infoContent}>
            <View style={styles.infoItem}>
              <Ionicons name="time" size={16} color="#6b7280" />
              <Text style={styles.infoText}>
                Chegue ao ponto com 10 minutos de antecedência
              </Text>
            </View>
            
            <View style={styles.infoItem}>
              <Ionicons name="card" size={16} color="#6b7280" />
              <Text style={styles.infoText}>
                Tenha sua carteirinha digital sempre em mãos
              </Text>
            </View>
            
            <View style={styles.infoItem}>
              <Ionicons name="notifications" size={16} color="#6b7280" />
              <Text style={styles.infoText}>
                Lembretes são enviados 15 minutos antes da partida
              </Text>
            </View>
            
            <View style={styles.infoItem}>
              <Ionicons name="call" size={16} color="#6b7280" />
              <Text style={styles.infoText}>
                Em caso de dúvidas, ligue para (84) 3000-0000
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
  nextBusContainer: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  nextBusCard: {
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  nextBusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  nextBusTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  nextBusInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  nextBusTime: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  nextBusRoute: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
  },
  reminderButtonNext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  reminderButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
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
  routesList: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  routeItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  routeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  timeContainer: {
    width: 70,
    alignItems: 'center',
  },
  routeTime: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  routeDetails: {
    flex: 1,
    marginLeft: 16,
  },
  routeText: {
    fontSize: 16,
    color: '#374151',
  },
  departureText: {
    fontWeight: '600',
  },
  arrowText: {
    color: '#6b7280',
  },
  destinationText: {
    fontWeight: '600',
  },
  statusContainer: {
    marginLeft: 16,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  actionContainer: {
    alignItems: 'flex-end',
  },
  reminderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2563eb',
    backgroundColor: 'white',
  },
  reminderButtonActive: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  reminderText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2563eb',
    marginLeft: 6,
  },
  reminderTextActive: {
    color: 'white',
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

export default BusSchedule;