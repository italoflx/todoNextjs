import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Alert,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { mockStudent, mockAppSettings } from '../data/mockData';

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState(mockAppSettings);

  const handleNotificationChange = (key: keyof typeof settings.notifications) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key]
      }
    }));
  };

  const handleEditProfile = () => {
    Alert.alert(
      'Editar Perfil',
      'Esta funcionalidade permitirá editar suas informações pessoais.',
      [{ text: 'OK' }]
    );
  };

  const handleChangePassword = () => {
    Alert.alert(
      'Alterar Senha',
      'Você será redirecionado para alterar sua senha.',
      [{ text: 'OK' }]
    );
  };

  const handleChangeData = () => {
    Alert.alert(
      'Alterar Dados',
      'Esta funcionalidade permitirá atualizar seus dados pessoais.',
      [{ text: 'OK' }]
    );
  };

  const handlePreferences = () => {
    Alert.alert(
      'Preferências',
      'Configure suas preferências do aplicativo.',
      [{ text: 'OK' }]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair do aplicativo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', style: 'destructive', onPress: () => {
          // Aqui seria implementada a lógica de logout
          console.log('Logout realizado');
        }}
      ]
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Card */}
      <LinearGradient
        colors={['#2563eb', '#1e40af']}
        style={styles.headerCard}
      >
        <View style={styles.headerContent}>
          <Ionicons name="settings" size={32} color="white" />
          <Text style={styles.headerTitle}>Configurações</Text>
          <Text style={styles.headerSubtitle}>Gerencie sua conta</Text>
        </View>
      </LinearGradient>

      {/* Profile Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="person" size={24} color="#2563eb" />
            <Text style={styles.cardTitle}>Perfil</Text>
          </View>
          
          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              <Image 
                source={{ uri: mockStudent.photo }}
                style={styles.profileImage}
                resizeMode="cover"
              />
              <TouchableOpacity style={styles.editImageButton}>
                <Ionicons name="camera" size={16} color="white" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{mockStudent.name}</Text>
              <Text style={styles.profileEmail}>{mockStudent.email}</Text>
              <Text style={styles.profilePhone}>{mockStudent.phone}</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.editButton}
              onPress={handleEditProfile}
            >
              <Ionicons name="create" size={16} color="#2563eb" />
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Notifications Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="notifications" size={24} color="#059669" />
            <Text style={styles.cardTitle}>Notificações</Text>
          </View>
          
          <View style={styles.notificationsList}>
            <View style={styles.notificationItem}>
              <View style={styles.notificationInfo}>
                <Text style={styles.notificationTitle}>Notificações Push</Text>
                <Text style={styles.notificationDescription}>
                  Receba alertas importantes
                </Text>
              </View>
              <Switch
                value={settings.notifications.push}
                onValueChange={() => handleNotificationChange('push')}
                trackColor={{ false: '#d1d5db', true: '#059669' }}
                thumbColor="#ffffff"
              />
            </View>
            
            <View style={styles.notificationItem}>
              <View style={styles.notificationInfo}>
                <Text style={styles.notificationTitle}>Lembretes de Ônibus</Text>
                <Text style={styles.notificationDescription}>
                  Avisos 15 min antes da partida
                </Text>
              </View>
              <Switch
                value={settings.notifications.reminders}
                onValueChange={() => handleNotificationChange('reminders')}
                trackColor={{ false: '#d1d5db', true: '#059669' }}
                thumbColor="#ffffff"
              />
            </View>
            
            <View style={styles.notificationItem}>
              <View style={styles.notificationInfo}>
                <Text style={styles.notificationTitle}>Confirmação Automática</Text>
                <Text style={styles.notificationDescription}>
                  Confirmar presença automaticamente
                </Text>
              </View>
              <Switch
                value={settings.notifications.autoConfirmation}
                onValueChange={() => handleNotificationChange('autoConfirmation')}
                trackColor={{ false: '#d1d5db', true: '#059669' }}
                thumbColor="#ffffff"
              />
            </View>
          </View>
        </View>
      </View>

      {/* Account Actions Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="shield-checkmark" size={24} color="#7c3aed" />
            <Text style={styles.cardTitle}>Ações da Conta</Text>
          </View>
          
          <View style={styles.actionsList}>
            <TouchableOpacity 
              style={styles.actionItem}
              onPress={handleChangePassword}
            >
              <View style={styles.actionIcon}>
                <Ionicons name="lock-closed" size={20} color="#7c3aed" />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Alterar Senha</Text>
                <Text style={styles.actionDescription}>
                  Mantenha sua conta segura
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6b7280" />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.actionItem}
              onPress={handleChangeData}
            >
              <View style={styles.actionIcon}>
                <Ionicons name="document-text" size={20} color="#2563eb" />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Alterar Dados</Text>
                <Text style={styles.actionDescription}>
                  Atualize suas informações
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6b7280" />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.actionItem}
              onPress={handlePreferences}
            >
              <View style={styles.actionIcon}>
                <Ionicons name="options" size={20} color="#059669" />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Preferências</Text>
                <Text style={styles.actionDescription}>
                  Configure o aplicativo
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6b7280" />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.actionItem, styles.logoutAction]}
              onPress={handleLogout}
            >
              <View style={[styles.actionIcon, styles.logoutIcon]}>
                <Ionicons name="log-out" size={20} color="#dc2626" />
              </View>
              <View style={styles.actionContent}>
                <Text style={[styles.actionTitle, styles.logoutText]}>Sair</Text>
                <Text style={styles.actionDescription}>
                  Desconectar da conta
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6b7280" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Support Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="help-circle" size={24} color="#d97706" />
            <Text style={styles.cardTitle}>Suporte</Text>
          </View>
          
          <View style={styles.supportList}>
            <View style={styles.supportItem}>
              <Ionicons name="call" size={16} color="#6b7280" />
              <Text style={styles.supportText}>
                Central de Atendimento: (84) 3000-0000
              </Text>
            </View>
            
            <View style={styles.supportItem}>
              <Ionicons name="mail" size={16} color="#6b7280" />
              <Text style={styles.supportText}>
                Email: suporte@joaocamara.rn.gov.br
              </Text>
            </View>
            
            <View style={styles.supportItem}>
              <Ionicons name="time" size={16} color="#6b7280" />
              <Text style={styles.supportText}>
                Horário: Segunda a Sexta, 8h às 17h
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* App Info */}
      <View style={styles.appInfoContainer}>
        <Text style={styles.appVersion}>
          Versão {settings.version}
        </Text>
        <Text style={styles.appCopyright}>
          © 2024 Prefeitura Municipal de João Câmara/RN
        </Text>
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
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  editImageButton: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: '#2563eb',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  },
  profilePhone: {
    fontSize: 14,
    color: '#6b7280',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2563eb',
    backgroundColor: 'rgba(37, 99, 235, 0.1)',
  },
  editButtonText: {
    color: '#2563eb',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
  notificationsList: {
    gap: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationInfo: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  actionsList: {
    gap: 16,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(37, 99, 235, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  actionDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  logoutAction: {
    marginTop: 8,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  logoutIcon: {
    backgroundColor: 'rgba(220, 38, 38, 0.1)',
  },
  logoutText: {
    color: '#dc2626',
  },
  supportList: {
    gap: 16,
  },
  supportItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  supportText: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 12,
  },
  appInfoContainer: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  appVersion: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  appCopyright: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
  },
});

export default SettingsPage;