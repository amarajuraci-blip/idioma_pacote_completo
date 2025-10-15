import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Volume2, PlayCircle } from 'lucide-react';
import { allLanguageData } from '../data/modules';
import { saveLessonProgress } from '../utils/progress';

const getLanguageFolderName = (langCode: string): string => {
  const map: { [key: string]: string } = {
    en: 'ingles', jp: 'japones', kr: 'coreano', fr: 'frances', es: 'espanhol', 
    de: 'alemao', it: 'italiano', ru: 'russo', cn: 'mandarim', tr: 'turco'
  };
  return map[langCode] || 'ingles';
};

const LessonPage: React.FC = () => {
  const navigate = useNavigate();
  const { lang, lessonId } = useParams<{ lang: string; lessonId: string }>();
  
  const languageData = allLanguageData[lang || 'en'];
  const lesson = languageData.lessons.find(l => l.id.toString() === lessonId);

  const [cardIndex, setCardIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [lessonStarted, setLessonStarted] = useState(false);

  const cards = lesson?.cards || [];
  const currentCard = cards[cardIndex];
  const isLastCard = cardIndex === cards.length - 1;

  const getFlagCode = (langCode: string | undefined) => {
    if (langCode === 'en') return 'us';
    if (langCode === 'zh') return 'cn';
    return langCode;
  };
  const flagCode = getFlagCode(lang);
  
  const currentTranslation = currentCard?.translations[lang || 'en'] || 'Tradução não encontrada';
  // AQUI ESCOLHEMOS O ÁUDIO CORRETO
  const currentAudioUrl = currentCard?.audioUrls[lang || 'en'];

  const playAudioWithPauses = (audioUrl: string | undefined, repetitions: number) => {
    if (!audioUrl) {
        console.error("Áudio não encontrado para este idioma.");
        return;
    }
    let playCount = 0;
    const audio = new Audio(audioUrl);
    const playWithDelay = () => { audio.play().catch(e => console.error("Erro ao tocar áudio:", e)); };
    audio.onended = () => {
      playCount++;
      if (playCount < repetitions) {
        setTimeout(playWithDelay, 1500);
      }
    };
    playWithDelay();
  };

  useEffect(() => {
    if (!lessonStarted || !currentCard) return;
    setShowNextButton(false);
    
    if (!(lesson?.id === 1 && cardIndex === 0)) {
        playAudioWithPauses(currentAudioUrl, 3);
    }

    const timer = setTimeout(() => {
      setShowNextButton(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, [cardIndex, currentCard, lessonStarted, lesson, currentAudioUrl]);

  const handleStartLesson = () => {
    if (lesson?.id === 1 && cardIndex === 0 && lang) {
      const folderName = getLanguageFolderName(lang);
      const narrationAudio = new Audio(`/audio/narrations/${folderName}/aula1_intro.mp3`);
      narrationAudio.play().catch(e => console.error("Erro ao tocar narração:", e));
    } else {
      playAudioWithPauses(currentAudioUrl, 3);
    }
    setLessonStarted(true);
  };

  const handleNext = () => {
    if (isLastCard) {
      if (lang && lesson) {
        saveLessonProgress(lang, lesson.id);
        navigate(`/${lang}/aula-concluida`);
      }
    } else {
      setCardIndex(cardIndex + 1);
    }
  };
  
  if (!cards || cards.length === 0) {
    return <div className="min-h-screen bg-black text-white p-8">Nenhuma aula encontrada para este idioma ainda.</div>;
  }
  
  const formattedCurrentCard = String(cardIndex + 1).padStart(2, '0');
  const formattedTotalCards = String(cards.length).padStart(2, '0');

  if (!lessonStarted) {
    return (
      <div className="h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Aula {lessonId}</h1>
        <p className="text-gray-400 text-center mb-8">Clique abaixo para começar</p>
        <button
          onClick={handleStartLesson}
          className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-full h-32 w-32 flex items-center justify-center transform hover:scale-105 transition-transform"
        >
          <PlayCircle size={80} />
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen bg-black text-black flex flex-col items-center justify-center p-4 gap-3 overflow-hidden">
      <h2 className="text-2xl font-bold text-white text-center">
        Memorize o nome dessa imagem!
      </h2>
      
      <div className="w-full max-w-sm flex flex-col gap-3">
        <div className="flex justify-end">
          <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">
            {formattedCurrentCard}/{formattedTotalCards}
          </span>
        </div>

        <div className="bg-white rounded-lg p-2 shadow-lg">
          <div className="flex items-center border-b border-gray-300 p-2 h-12">
            <img src="https://flagcdn.com/w40/br.png" alt="Bandeira do Brasil" className="w-8 h-auto mr-3" />
            <span className="font-bold text-xl">{currentCard.portuguese}</span>
          </div>
          <div className="flex items-center p-2 h-12">
            <img src={`https://flagcdn.com/w40/${flagCode}.png`} alt="Bandeira do Idioma" className="w-8 h-auto mr-3" />
            <span className="font-bold text-xl">{currentTranslation}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-2 flex justify-center items-center h-64">
          <img src={currentCard.imageUrl} alt={currentTranslation} className="max-w-full max-h-full object-contain" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <button 
            onClick={() => playAudioWithPauses(currentAudioUrl, 1)} 
            className="bg-white rounded-lg py-3 flex justify-center items-center active:bg-gray-200"
          >
            <Volume2 className="w-7 h-7" />
          </button>
          
          <div className="col-span-2 h-full">
            {showNextButton && (
              <button 
                onClick={handleNext} 
                className={`w-full h-full rounded-lg font-bold text-base transition-all duration-300 ${isLastCard ? 'bg-green-600 text-white' : 'bg-white text-black'}`}
              >
                {isLastCard ? 'CONCLUIR' : 'PRÓXIMO'}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm grid grid-cols-2 gap-4">
        <button className="bg-gray-700 opacity-50 cursor-not-allowed rounded-2xl h-20 flex justify-center items-center text-2xl font-bold" disabled>Não!</button>
        <button className="bg-gray-700 opacity-50 cursor-not-allowed rounded-2xl h-20 flex justify-center items-center text-2xl font-bold" disabled>Sim!</button>
      </div>
    </div>
  );
};

export default LessonPage;