import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gift } from 'lucide-react';

const ReleaseCountdownPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAttemptAccess = () => {
    // Este botão levará o usuário para a rota principal do aplicativo.
    navigate('/initial-route', { replace: true });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-xl w-full bg-gray-900 border border-purple-500 rounded-xl shadow-2xl p-8 md:p-12 animate-fade-in">
        <Gift className="w-16 h-16 text-purple-400 mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Quase lá!</h1>
        <p className="text-gray-300 text-lg mb-8">
          Estamos finalizando os últimos preparativos no seu acesso. Em instantes, todo o conteúdo estará disponível para você. Agradecemos a sua paciência!
        </p>

        <button
          onClick={handleAttemptAccess}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full text-lg"
        >
          Tentar Acessar Agora
        </button>
      </div>
    </div>
  );
};

export default ReleaseCountdownPage;
