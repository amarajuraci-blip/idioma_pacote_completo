import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Faz a verificação de sessão com o Supabase
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        setIsAuthenticated(false);
        navigate('/', { replace: true });
      } else {
        setIsAuthenticated(true);
      }
    };

    checkSession();

    // Listener para o caso de o usuário fazer logout em outra aba
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        if (!session) {
            setIsAuthenticated(false);
            navigate('/', { replace: true });
        }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  // Tela de carregamento enquanto a verificação acontece
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">A verificar acesso...</div>
      </div>
    );
  }

  // Se estiver autenticado, mostra o conteúdo
  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;