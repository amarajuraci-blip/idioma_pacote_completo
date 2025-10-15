import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import ModuleCard from './ModuleCard';
import { languageModules } from '../data/modules';
import FirstTimeModal from './FirstTimeModal';

const LanguageSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const [isFirstTimeModalOpen, setIsFirstTimeModalOpen] = useState(false);

  useEffect(() => {
    const hasSeenWarning = localStorage.getItem('hasSeenSoundWarning');
    if (!hasSeenWarning) {
      setIsFirstTimeModalOpen(true);
    } else {
      const audio = new Audio('/audio/narrations/efeito/idioma.mp3');
      audio.play().catch(error => console.error("Erro ao tocar áudio de idioma:", error));
    }
  }, []);

  const handleCloseFirstTimeModal = () => {
    localStorage.setItem('hasSeenSoundWarning', 'true');
    setIsFirstTimeModalOpen(false);
    const audio = new Audio('/audio/narrations/efeito/idioma.mp3');
    audio.play().catch(error => console.error("Erro ao tocar áudio de idioma:", error));
  };

  const handleModuleClick = (languageCode: string) => {
    // Agora, qualquer idioma clicado levará para sua respectiva home page.
    navigate(`/${languageCode}/home`);
  };

  return (
    <>
      <FirstTimeModal isOpen={isFirstTimeModalOpen} onClose={handleCloseFirstTimeModal} />
      
      <div className="min-h-screen bg-black flex flex-col justify-center">
        <div className="container mx-auto px-4 py-16 max-w-6xl text-center">
          <SectionTitle align="center">
            Escolha seu Idioma para Começar
          </SectionTitle>
          
          <p className="text-gray-400 -mt-8 mb-12">Selecione o idioma que você deseja estudar.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {languageModules.map((module) => (
              <div key={module.id} onClick={() => handleModuleClick(module.code)}>
                <ModuleCard
                  moduleNumber={module.id}
                  title={module.title}
                  imageUrl={module.imageUrl}
                  sectionType="course"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageSelectionPage;