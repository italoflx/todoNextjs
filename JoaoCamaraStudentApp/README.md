# 📱 App Carteirinha Estudantil - João Câmara/RN

Um aplicativo mobile para estudantes universitários da cidade de João Câmara/RN, oferecendo carteirinha digital, controle de presença e informações sobre transporte universitário.

## ✨ Funcionalidades

### 📋 **Páginas Principais**
- **🏠 Início**: Dashboard com boas-vindas, status cards e ações rápidas
- **🆔 Carteirinha Digital**: Cartão oficial da prefeitura com QR Code
- **✅ Presença**: Controle semanal de presença com ações de confirmar/faltar
- **🚌 Horários de Ônibus**: Lista de rotas com status e lembretes
- **🎓 Informações da Faculdade**: Dados acadêmicos e progresso
- **⚙️ Configurações**: Perfil, notificações e ações da conta

### 🎨 **Design System**
- **Cores principais**: Azul (#2563eb) e tons complementares
- **Gradientes**: Gradientes azuis elegantes
- **Mobile-first**: Otimizado para dispositivos móveis
- **Cards**: Sombras suaves e bordas arredondadas
- **Tipografia**: Hierarquia clara com tamanhos responsivos

### 🧭 **Navegação**
- **Header fixo** com logo "João Câmara" e menu hambúrguer
- **Menu dropdown** com 6 opções em grid 2x3
- **Bottom navigation** com 4 opções principais
- **Overlay escuro** quando menu está aberto

## 🚀 Tecnologias

- **React Native** com **TypeScript**
- **Expo** para desenvolvimento e build
- **Expo Linear Gradient** para gradientes
- **Expo Blur** para efeitos de blur
- **Ionicons** para ícones
- **React Native SVG** para gráficos vetoriais

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Expo CLI

### Passos para executar

1. **Clone o repositório**
```bash
git clone <repository-url>
cd JoaoCamaraStudentApp
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**

**Para Web:**
```bash
npm run web
```

**Para Android:**
```bash
npm run android
```

**Para iOS:**
```bash
npm run ios
```

## 📁 Estrutura do Projeto

```
JoaoCamaraStudentApp/
├── components/           # Componentes React Native
│   ├── Navigation.tsx    # Header, menu e bottom nav
│   ├── HomePage.tsx      # Dashboard inicial
│   ├── StudentCard.tsx   # Carteirinha digital
│   ├── AttendanceList.tsx # Controle de presença
│   ├── BusSchedule.tsx   # Horários de ônibus
│   ├── UniversityInfo.tsx # Informações acadêmicas
│   └── SettingsPage.tsx  # Configurações
├── types/               # Definições TypeScript
│   └── index.ts         # Interfaces e tipos
├── data/               # Dados mock
│   └── mockData.ts     # Dados de exemplo
├── assets/             # Imagens e recursos
├── App.tsx            # Componente principal
├── app.json           # Configurações do Expo
└── package.json       # Dependências
```

## 📋 Dados Mock

### 👤 **Estudante Exemplo**
```typescript
Nome: Maria Silva Santos
Matrícula: 2024001234
Curso: Engenharia Civil
Universidade: UFRN - Campus Central
Semestre: 3º
Status: Ativo
```

### 🚌 **Rotas de Ônibus**
```
07:00 - Centro → UFRN (No horário)
08:30 - Rodoviária → UFRN (Próximo)
10:00 - Centro → UFRN (Pendente)
14:00 - UFRN → Centro (Pendente)
17:30 - UFRN → Rodoviária (Pendente)
```

## 🎯 Funcionalidades Especiais

- ✅ **Menu hambúrguer animado** com rotação e blur
- ✅ **Cards com hover effects** e sombras elegantes
- ✅ **Gradientes e sombras** para visual moderno
- ✅ **Ícones contextuais** do Ionicons
- ✅ **Layout responsivo** mobile-first
- ✅ **Navegação por estado** sem React Router
- ✅ **QR Code dinâmico** para embarque
- ✅ **Switches interativos** para notificações
- ✅ **Alerts nativos** para confirmações

## 📱 Screenshots

O app conta com:
- Dashboard inicial com cartão de boas-vindas
- Carteirinha oficial com dados do estudante
- Lista de presença com botões de ação
- Horários de ônibus com status coloridos
- Informações acadêmicas organizadas
- Configurações completas com perfil

## 🏛️ Sobre a Prefeitura

Este aplicativo foi desenvolvido para a **Prefeitura Municipal de João Câmara/RN**, visando modernizar o sistema de transporte universitário e facilitar o acesso dos estudantes aos serviços municipais.

**Contato:**
- 📞 Telefone: (84) 3000-0000
- 📧 Email: suporte@joaocamara.rn.gov.br
- ⏰ Horário: Segunda a Sexta, 8h às 17h

## 📄 Licença

© 2024 Prefeitura Municipal de João Câmara/RN
Todos os direitos reservados.

---

**Versão:** 1.0.0  
**Desenvolvido para:** Estudantes universitários de João Câmara/RN  
**Plataformas:** iOS, Android, Web