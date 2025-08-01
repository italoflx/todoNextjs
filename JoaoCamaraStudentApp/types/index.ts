export interface Student {
  name: string;
  registration: string;
  course: string;
  university: string;
  semester: string;
  status: 'Ativo' | 'Inativo';
  photo?: string;
  email?: string;
  phone?: string;
}

export interface BusRoute {
  time: string;
  departure: string;
  destination: string;
  status: 'No horário' | 'Atrasado' | 'Partiu' | 'Próximo' | 'Pendente';
}

export interface AttendanceDay {
  date: string;
  dayOfWeek: string;
  status: 'Confirmado' | 'Faltou' | 'Pendente';
}

export interface UniversityInfo {
  course: string;
  university: string;
  campus: string;
  coordinator: string;
  schedule: string[];
  semesterProgress: number;
  nextSubjects: string[];
}

export interface NotificationSettings {
  push: boolean;
  reminders: boolean;
  autoConfirmation: boolean;
}

export interface AppSettings {
  notifications: NotificationSettings;
  version: string;
}

export type MenuOption = 'inicio' | 'carteirinha' | 'presenca' | 'onibus' | 'faculdade' | 'configuracoes';

export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  route: MenuOption;
  color: string;
}