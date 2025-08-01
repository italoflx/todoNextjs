import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { MenuOption } from '../types';

interface NavigationProps {
  currentPage: MenuOption;
  onNavigate: (page: MenuOption) => void;
}

const { width, height } = Dimensions.get('window');

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimation] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    const toValue = isMenuOpen ? 0 : 1;
    
    Animated.timing(menuAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    
    setIsMenuOpen(!isMenuOpen);
  };

  const menuOptions = [
    { id: 'inicio', title: 'Início', icon: 'home' },
    { id: 'carteirinha', title: 'Carteirinha', icon: 'card' },
    { id: 'presenca', title: 'Presença', icon: 'checkmark-circle' },
    { id: 'onibus', title: 'Ônibus', icon: 'bus' },
    { id: 'faculdade', title: 'Faculdade', icon: 'school' },
    { id: 'configuracoes', title: 'Configurações', icon: 'settings' },
  ] as const;

  const bottomNavOptions = [
    { id: 'inicio', icon: 'home' },
    { id: 'carteirinha', icon: 'card' },
    { id: 'onibus', icon: 'bus' },
    { id: 'configuracoes', icon: 'settings' },
  ] as const;

  const handleMenuItemPress = (page: MenuOption) => {
    onNavigate(page);
    toggleMenu();
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1e40af" />
      
      {/* Header */}
      <LinearGradient
        colors={['#2563eb', '#1e40af', '#1d4ed8']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <Ionicons name="location" size={20} color="white" />
            <Text style={styles.headerTitle}>João Câmara</Text>
          </View>
          
          <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
            <Animated.View
              style={{
                transform: [
                  {
                    rotate: menuAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '90deg'],
                    }),
                  },
                ],
              }}
            >
              <Ionicons 
                name={isMenuOpen ? 'close' : 'menu'} 
                size={24} 
                color="white" 
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <Animated.View
          style={[
            styles.overlay,
            {
              opacity: menuAnimation,
            },
          ]}
        >
          <TouchableOpacity 
            style={styles.overlayTouchable} 
            onPress={toggleMenu}
            activeOpacity={1}
          />
        </Animated.View>
      )}

      {/* Dropdown Menu */}
      <Animated.View
        style={[
          styles.dropdownMenu,
          {
            transform: [
              {
                translateY: menuAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-300, 0],
                }),
              },
            ],
            opacity: menuAnimation,
          },
        ]}
        pointerEvents={isMenuOpen ? 'auto' : 'none'}
      >
        <BlurView intensity={90} style={styles.blurContainer}>
          <LinearGradient
            colors={['rgba(37, 99, 235, 0.95)', 'rgba(30, 64, 175, 0.95)']}
            style={styles.menuGradient}
          >
            <View style={styles.menuGrid}>
              {menuOptions.map((option, index) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.menuItem,
                    currentPage === option.id && styles.menuItemActive
                  ]}
                  onPress={() => handleMenuItemPress(option.id as MenuOption)}
                >
                  <View style={styles.menuItemIcon}>
                    <Ionicons 
                      name={option.icon as any} 
                      size={28} 
                      color={currentPage === option.id ? '#2563eb' : 'white'} 
                    />
                  </View>
                  <Text style={[
                    styles.menuItemText,
                    currentPage === option.id && styles.menuItemTextActive
                  ]}>
                    {option.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </LinearGradient>
        </BlurView>
      </Animated.View>

      {/* Bottom Navigation */}
      {!isMenuOpen && (
        <View style={styles.bottomNav}>
          <LinearGradient
            colors={['rgba(37, 99, 235, 0.95)', 'rgba(30, 64, 175, 0.95)']}
            style={styles.bottomNavGradient}
          >
            <View style={styles.bottomNavContent}>
              {bottomNavOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.bottomNavItem,
                    currentPage === option.id && styles.bottomNavItemActive
                  ]}
                  onPress={() => onNavigate(option.id as MenuOption)}
                >
                  <Ionicons 
                    name={option.icon as any} 
                    size={24} 
                    color={currentPage === option.id ? '#2563eb' : 'rgba(255, 255, 255, 0.8)'} 
                  />
                </TouchableOpacity>
              ))}
            </View>
          </LinearGradient>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight || 44,
    paddingBottom: 16,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  menuButton: {
    padding: 8,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  overlayTouchable: {
    flex: 1,
  },
  dropdownMenu: {
    position: 'absolute',
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 60 : 104,
    left: 0,
    right: 0,
    zIndex: 1000,
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  blurContainer: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  menuGradient: {
    padding: 20,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '48%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  menuItemActive: {
    backgroundColor: 'white',
    borderColor: '#2563eb',
  },
  menuItemIcon: {
    marginBottom: 8,
  },
  menuItemText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  menuItemTextActive: {
    color: '#2563eb',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  bottomNavGradient: {
    paddingBottom: 20,
    paddingTop: 12,
  },
  bottomNavContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomNavItem: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  bottomNavItemActive: {
    backgroundColor: 'white',
  },
});

export default Navigation;