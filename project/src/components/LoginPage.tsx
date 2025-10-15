import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // SUBSTITUA A SUA FUNÇÃO handleLogin POR ESTA
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
    } else {
      // Lógica de redirecionamento com o cronômetro
      const unlockDate = new Date('2025-10-16T06:00:00');
      const now = new Date();

      if (now < unlockDate) {
        // Se a data de liberação ainda não chegou, vai para a página de espera
        navigate('/aguarde-liberacao', { replace: true });
      } else {
        // Se a data já passou, segue o fluxo normal
        navigate('/initial-route', { replace: true });
      }
    }
    // O setIsLoading(false) é tratado implicitamente pela navegação
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <img
            src="/images/visual/capa_login.webp"
            alt="Logo do Curso"
            className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
          />
        </div>

        <div className="bg-gray-900 rounded-xl p-8 shadow-2xl border border-gray-800">
         <h2 className="text-2xl font-bold text-white text-center mb-8">
            Área de Membros
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                placeholder="Digite seu email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                placeholder="Digite sua senha"
                required
              />
            </div>

            {error && (
              <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3"
            >
              {isLoading ? 'A entrar...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;