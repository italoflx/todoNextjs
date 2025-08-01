import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { mockStudent } from '../data/mockData';

const { width } = Dimensions.get('window');

const StudentCard: React.FC = () => {
  const qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=' + 
    encodeURIComponent(`JOAO_CAMARA_STUDENT_${mockStudent.registration}`);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Official Student Card */}
      <View style={styles.cardContainer}>
        <LinearGradient
          colors={['#2563eb', '#1e40af', '#1d4ed8']}
          style={styles.cardGradient}
        >
          {/* Header */}
          <View style={styles.cardHeader}>
            <View style={styles.logoContainer}>
              <Ionicons name="shield" size={28} color="white" />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.prefeituraText}>PREFEITURA MUNICIPAL</Text>
              <Text style={styles.cidadeText}>JOÃO CÂMARA-RN</Text>
            </View>
          </View>

          {/* Card Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.cardTitle}>CARTEIRA ESTUDANTIL</Text>
            <Text style={styles.cardSubtitle}>TRANSPORTE UNIVERSITÁRIO</Text>
          </View>

          {/* Student Photo and Badge */}
          <View style={styles.photoSection}>
            <View style={styles.photoContainer}>
              <Image 
                source={{ uri: mockStudent.photo }}
                style={styles.studentPhoto}
                resizeMode="cover"
              />
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>ATIVO</Text>
              </View>
            </View>
            
            {/* Student Info */}
            <View style={styles.studentInfo}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>NOME:</Text>
                <Text style={styles.infoValue}>{mockStudent.name}</Text>
              </View>
              
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>MATRÍCULA:</Text>
                <Text style={styles.infoValue}>{mockStudent.registration}</Text>
              </View>
              
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>SEMESTRE:</Text>
                <Text style={styles.infoValue}>{mockStudent.semester}</Text>
              </View>
            </View>
          </View>

          {/* Course Information */}
          <View style={styles.courseSection}>
            <View style={styles.courseHeader}>
              <Ionicons name="school" size={20} color="white" />
              <Text style={styles.courseTitle}>CURSO</Text>
            </View>
            <Text style={styles.courseName}>{mockStudent.course}</Text>
            <Text style={styles.universityName}>{mockStudent.university}</Text>
          </View>

          {/* QR Code Section */}
          <View style={styles.qrSection}>
            <View style={styles.qrContainer}>
              <Image 
                source={{ uri: qrCodeUrl }}
                style={styles.qrCode}
                resizeMode="contain"
              />
            </View>
            <View style={styles.qrInfo}>
              <Text style={styles.qrTitle}>QR CODE PARA EMBARQUE</Text>
              <Text style={styles.qrInstructions}>
                Apresente este código ao motorista para registrar sua viagem
              </Text>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.cardFooter}>
            <View style={styles.footerInfo}>
              <Ionicons name="call" size={16} color="rgba(255, 255, 255, 0.8)" />
              <Text style={styles.footerText}>Contato: (84) 3000-0000</Text>
            </View>
            <Text style={styles.footerDate}>
              Válida até: Dezembro/2024
            </Text>
          </View>
        </LinearGradient>
      </View>

      {/* Instructions Card */}
      <View style={styles.instructionsContainer}>
        <View style={styles.instructionsCard}>
          <View style={styles.instructionsHeader}>
            <Ionicons name="information-circle" size={24} color="#2563eb" />
            <Text style={styles.instructionsTitle}>Como Usar a Carteirinha</Text>
          </View>
          
          <View style={styles.instructionsList}>
            <View style={styles.instructionItem}>
              <View style={styles.instructionNumber}>
                <Text style={styles.instructionNumberText}>1</Text>
              </View>
              <Text style={styles.instructionText}>
                Apresente a carteirinha digital ao motorista antes de embarcar
              </Text>
            </View>
            
            <View style={styles.instructionItem}>
              <View style={styles.instructionNumber}>
                <Text style={styles.instructionNumberText}>2</Text>
              </View>
              <Text style={styles.instructionText}>
                Mostre o QR Code para registrar automaticamente sua viagem
              </Text>
            </View>
            
            <View style={styles.instructionItem}>
              <View style={styles.instructionNumber}>
                <Text style={styles.instructionNumberText}>3</Text>
              </View>
              <Text style={styles.instructionText}>
                Confirme sua presença diariamente para manter o benefício
              </Text>
            </View>
            
            <View style={styles.instructionItem}>
              <View style={styles.instructionNumber}>
                <Text style={styles.instructionNumberText}>4</Text>
              </View>
              <Text style={styles.instructionText}>
                Mantenha a carteirinha sempre atualizada e acessível
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
  cardContainer: {
    margin: 16,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 12,
  },
  cardGradient: {
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoContainer: {
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  prefeituraText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cidadeText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 12,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardSubtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2,
  },
  photoSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  photoContainer: {
    position: 'relative',
    marginRight: 16,
  },
  studentPhoto: {
    width: 80,
    height: 100,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
  },
  statusBadge: {
    position: 'absolute',
    bottom: -8,
    left: 0,
    right: 0,
    backgroundColor: '#059669',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  statusText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  studentInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  infoRow: {
    marginBottom: 8,
  },
  infoLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  infoValue: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  courseSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  courseTitle: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  courseName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  universityName: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
  },
  qrSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  qrContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginRight: 16,
  },
  qrCode: {
    width: 80,
    height: 80,
  },
  qrInfo: {
    flex: 1,
  },
  qrTitle: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  qrInstructions: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 11,
    lineHeight: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    paddingTop: 16,
  },
  footerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    marginLeft: 6,
  },
  footerDate: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
  },
  instructionsContainer: {
    marginHorizontal: 16,
    marginTop: 8,
  },
  instructionsCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  instructionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginLeft: 12,
  },
  instructionsList: {
    gap: 16,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  instructionNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  instructionNumberText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  instructionText: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
});

export default StudentCard;