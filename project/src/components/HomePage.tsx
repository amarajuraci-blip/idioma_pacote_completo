import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { supabase } from '../supabaseClient';
import SectionTitle from './SectionTitle';
import ModuleCarousel from './ModuleCarousel';
import { allLanguageData } from '../data/modules';
import { getProgress, markIntroAsPlayed, markAudio03AsPlayed, markAudio06AsPlayed, markAudio09AsPlayed, markAudio13AsPlayed } from '../utils/progress';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const progress = getProgress(lang || 'en');

  const [isModule1AudioLocked, setIsModule1AudioLocked] = useState(false);
  const [isModule2AudioLocked, setIsModule2AudioLocked] = useState(false);
  const [isModule3AudioLocked, setIsModule3AudioLocked] = useState(false);
  const [isModule4AudioLocked, setIsModule4AudioLocked] = useState(false);
  const [isModule5AudioLocked, setIsModule5AudioLocked] = useState(false);

  useEffect(() => {
    if (!lang) return;
    const currentProgress = getProgress(lang);

    const playAndMark = (audioPath: string, markFunction: (lang: string) => void) => {
        try {
            const audio = new Audio(audioPath);
            audio.play().catch(err => console.error(`Erro ao tocar áudio ${audioPath}:`, err));
            markFunction(lang);
        } catch (error) {
            console.error(`Não foi possível criar o objeto de áudio para ${audioPath}:`, error);
        }
    };

    if (!currentProgress.hasPlayedIntro) {
        setIsModule1AudioLocked(true);
        playAndMark('/audio/narrations/ingles/audio_01.mp3', markIntroAsPlayed);
        setTimeout(() => setIsModule1AudioLocked(false), 14000);
    }
    if (currentProgress.lastLessonCompleted >= 1 && !currentProgress.hasPlayedAudio03) {
        setIsModule2AudioLocked(true);
        playAndMark('/audio/narrations/ingles/audio_03.mp3', markAudio03AsPlayed);
        setTimeout(() => setIsModule2AudioLocked(false), 10000);
    }
    if (currentProgress.completedReviews[2] && !currentProgress.hasPlayedAudio06) {
        setIsModule3AudioLocked(true);
        playAndMark('/audio/narrations/ingles/audio_06.mp3', markAudio06AsPlayed);
        setTimeout(() => setIsModule3AudioLocked(false), 6000);
    }
    if (currentProgress.completedReviews[3] && !currentProgress.hasPlayedAudio09) {
        setIsModule4AudioLocked(true);
        playAndMark('/audio/narrations/ingles/audio_09.mp3', markAudio09AsPlayed);
        setTimeout(() => setIsModule4AudioLocked(false), 7000);
    }
    if (currentProgress.completedReviews[4] && !currentProgress.hasPlayedAudio13) {
        setIsModule5AudioLocked(true);
        playAndMark('/audio/narrations/ingles/audio_13.mp3', markAudio13AsPlayed);
        setTimeout(() => setIsModule5AudioLocked(false), 10000);
    }
  }, [lang]);

  const handleModuleClick = (moduleId: number) => {
    if (moduleId === 1 && isModule1AudioLocked) return;
    if (moduleId === 2 && isModule2AudioLocked) return;
    if (moduleId === 3 && isModule3AudioLocked) return;
    if (moduleId === 4 && isModule4AudioLocked) return;
    if (moduleId === 5 && isModule5AudioLocked) return;
    
    const isUnlocked = progress.unlockedModules.includes(moduleId);
    if (!isUnlocked) {
      alert(`Complete o módulo ${moduleId - 1} para desbloquear este!`);
      return;
    }

    const path = `/${lang}/modulo/${moduleId}`;
    navigate(path);
  };

  const handleLogout = () => {
    supabase.auth.signOut(); 
    navigate('/', { replace: true });
  };

  const { main: mainModules, advanced: advancedModules, listeningPractice, readingAndWriting } = allLanguageData[lang || 'en'].homePageModules;
  
  // AQUI ESTÁ A CORREÇÃO!
  // Voltamos a verificar o progresso para decidir se mostramos o conteúdo avançado.
  const showAdvancedContent = progress.completedReviews[5];

  return (
    <div className="min-h-screen bg-black pb-20">
        <div className="absolute top-4 right-4 z-50">
            <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors duration-300 border border-gray-700 hover:border-gray-600"
            >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Sair</span>
            </button>
        </div>
        <section className="relative">
            {lang === 'en' ? (
                <picture>
                <source
                    media="(max-width: 768px)"
                    srcSet="/images/visual/capa_en_cell.webp"
                />
                <img
                    src="/images/visual/capa_en_pc.webp"
                    alt="Banner Principal"
                    className="w-full h-[40vh] md:h-[60vh] object-cover"
                />
                </picture>
            ) : (
                <img
                src="https://i.imgur.com/ru9WoNh.jpg"
                alt="Banner Principal"
                className="w-full h-[40vh] md:h-[60vh] object-cover"
                />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </section>
        <div className="container mx-auto px-4 py-16 max-w-7xl">
            <section className="mb-12 md:mb-20">
                <SectionTitle>
                    PRIMEIRA SESSÃO - VOCABULÁRIO:
                </SectionTitle>
                <ModuleCarousel
                    modules={mainModules.map(module => ({
                        ...module,
                        isLocked: !progress.unlockedModules.includes(module.id) || 
                                  (module.id === 1 && isModule1AudioLocked) || 
                                  (module.id === 2 && isModule2AudioLocked) || 
                                  (module.id === 3 && isModule3AudioLocked) ||
                                  (module.id === 4 && isModule4AudioLocked) ||
                                  (module.id === 5 && isModule5AudioLocked)
                    }))}
                    sectionType="course"
                    onModuleClick={handleModuleClick}
                />
            </section>

            {showAdvancedContent && (
            <>
                <section className="mb-12 md:mb-20">
                    <SectionTitle>
                        SEGUNDA SESSÃO - FRASES E DIÁLOGOS:
                    </SectionTitle>
                    <ModuleCarousel
                        modules={advancedModules}
                        sectionType="howto"
                        onModuleClick={handleModuleClick}
                    />
                </section>
                
                <section className="mb-12 md:mb-20">
                    <SectionTitle>
                        TERCEIRA SESSÃO – CONVERSAÇÃO NATURAL:
                    </SectionTitle>
                    <ModuleCarousel
                        modules={listeningPractice}
                        sectionType="bonus"
                        onModuleClick={handleModuleClick}
                    />
                </section>

                <section className="mb-12 md:mb-20">
                    <SectionTitle>
                        QUARTA SESSÃO – LEITURA E ESCRITA:
                    </SectionTitle>
                    <ModuleCarousel
                        modules={readingAndWriting}
                        sectionType="course"
                        onModuleClick={handleModuleClick}
                    />
                </section>
            </>
            )}
        </div>
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Seu Curso de Idiomas
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
                A sua jornada para a fluência começa aqui.
            </p>
            </div>
        </footer>
    </div>
  );
};

export default HomePage;