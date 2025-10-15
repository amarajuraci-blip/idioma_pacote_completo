import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import LanguageSelectionPage from './components/LanguageSelectionPage';
import HomePage from './components/HomePage';
import Module1Page from './components/Module1Page';
import LessonPage from './components/LessonPage';
import Module2Page from './components/Module2Page';
import Module3Page from './components/Module3Page';
import Module4Page from './components/Module4Page';
import Module5Page from './components/Module5Page';
import LessonCompletionPage from './components/LessonCompletionPage';
import ModuleCompletionPage from './components/ModuleCompletionPage';
import WelcomePage from './components/WelcomePage'; // <-- NOVA IMPORTAÇÃO
import InitialRouter from './components/InitialRouter'; // <-- NOVA IMPORTAÇÃO

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
        {/* --- NOVAS ROTAS PARA O FLUXO INICIAL --- */}
        <Route 
          path="/initial-route" 
          element={<ProtectedRoute><InitialRouter /></ProtectedRoute>} 
        />
        <Route 
          path="/bem-vindo" 
          element={<ProtectedRoute><WelcomePage /></ProtectedRoute>} 
        />
        
        <Route 
          path="/selecao-idioma" 
          element={<ProtectedRoute><LanguageSelectionPage /></ProtectedRoute>} 
        />
        
        <Route path="/:lang/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/:lang/modulo/1" element={<ProtectedRoute><Module1Page /></ProtectedRoute>} />
        <Route path="/:lang/modulo/1/aula/:lessonId" element={<ProtectedRoute><LessonPage /></ProtectedRoute>} />
        <Route path="/:lang/modulo/2" element={<ProtectedRoute><Module2Page /></ProtectedRoute>} />
        <Route path="/:lang/modulo/3" element={<ProtectedRoute><Module3Page /></ProtectedRoute>} />
        <Route path="/:lang/modulo/4" element={<ProtectedRoute><Module4Page /></ProtectedRoute>} />
        <Route path="/:lang/modulo/5" element={<ProtectedRoute><Module5Page /></ProtectedRoute>} />

        <Route 
          path="/:lang/aula-concluida" 
          element={<ProtectedRoute><LessonCompletionPage /></ProtectedRoute>} 
        />

        <Route path="/:lang/modulo/2/concluido" element={<ProtectedRoute><ModuleCompletionPage moduleNumber={2} /></ProtectedRoute>} />
        <Route path="/:lang/modulo/3/concluido" element={<ProtectedRoute><ModuleCompletionPage moduleNumber={3} /></ProtectedRoute>} />
        <Route path="/:lang/modulo/4/concluido" element={<ProtectedRoute><ModuleCompletionPage moduleNumber={4} /></ProtectedRoute>} />
        <Route path="/:lang/modulo/5/concluido" element={<ProtectedRoute><ModuleCompletionPage moduleNumber={5} /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;