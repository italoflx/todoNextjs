import { Student, BusRoute, AttendanceDay, UniversityInfo, AppSettings, QuickAction } from '../types';

export const mockStudent: Student = {
  name: 'Maria Silva Santos',
  registration: '2024001234',
  course: 'Engenharia Civil',
  university: 'UFRN - Campus Central',
  semester: '3º',
  status: 'Ativo',
  photo: 'https://via.placeholder.com/150x200/2563eb/ffffff?text=FOTO',
  email: 'maria.santos@ufrn.br',
  phone: '(84) 99999-9999'
};

export const mockBusRoutes: BusRoute[] = [
  {
    time: '07:00',
    departure: 'Centro',
    destination: 'UFRN',
    status: 'No horário'
  },
  {
    time: '08:30',
    departure: 'Rodoviária',
    destination: 'UFRN',
    status: 'Próximo'
  },
  {
    time: '10:00',
    departure: 'Centro',
    destination: 'UFRN',
    status: 'Pendente'
  },
  {
    time: '14:00',
    departure: 'UFRN',
    destination: 'Centro',
    status: 'Pendente'
  },
  {
    time: '17:30',
    departure: 'UFRN',
    destination: 'Rodoviária',
    status: 'Pendente'
  }
];

export const mockAttendance: AttendanceDay[] = [
  {
    date: '2024-01-15',
    dayOfWeek: 'Segunda-feira',
    status: 'Confirmado'
  },
  {
    date: '2024-01-16',
    dayOfWeek: 'Terça-feira',
    status: 'Confirmado'
  },
  {
    date: '2024-01-17',
    dayOfWeek: 'Quarta-feira',
    status: 'Faltou'
  },
  {
    date: '2024-01-18',
    dayOfWeek: 'Quinta-feira',
    status: 'Confirmado'
  },
  {
    date: '2024-01-19',
    dayOfWeek: 'Sexta-feira',
    status: 'Pendente'
  },
  {
    date: '2024-01-22',
    dayOfWeek: 'Segunda-feira',
    status: 'Pendente'
  },
  {
    date: '2024-01-23',
    dayOfWeek: 'Terça-feira',
    status: 'Pendente'
  }
];

export const mockUniversityInfo: UniversityInfo = {
  course: 'Engenharia Civil',
  university: 'UFRN - Campus Central',
  campus: 'Campus Central - Natal/RN',
  coordinator: 'Prof. Dr. João Santos',
  schedule: [
    'Segunda: 08:00 - 12:00',
    'Terça: 14:00 - 18:00',
    'Quarta: 08:00 - 12:00',
    'Quinta: 14:00 - 18:00',
    'Sexta: 08:00 - 12:00'
  ],
  semesterProgress: 65,
  nextSubjects: [
    'Mecânica dos Solos',
    'Estruturas de Concreto II',
    'Hidráulica Aplicada',
    'Gestão de Projetos'
  ]
};

export const mockAppSettings: AppSettings = {
  notifications: {
    push: true,
    reminders: true,
    autoConfirmation: false
  },
  version: '1.0.0'
};

export const quickActions: QuickAction[] = [
  {
    id: 'carteirinha',
    title: 'Carteirinha',
    icon: 'credit-card',
    route: 'carteirinha',
    color: '#2563eb'
  },
  {
    id: 'presenca',
    title: 'Presença',
    icon: 'check-circle',
    route: 'presenca',
    color: '#059669'
  },
  {
    id: 'onibus',
    title: 'Ônibus',
    icon: 'bus',
    route: 'onibus',
    color: '#dc2626'
  },
  {
    id: 'faculdade',
    title: 'Faculdade',
    icon: 'graduation-cap',
    route: 'faculdade',
    color: '#7c3aed'
  }
];