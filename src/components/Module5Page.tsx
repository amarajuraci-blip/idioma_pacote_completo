import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useReviewCards } from '../hooks/useReviewCards';
import { getProgress, markModule5IntroAsPlayed, completeFirstReview } from '../utils/progress';
import { playAudioOnce } from '../utils/audioPlayer';
import { playFeedbackAudio } from '../utils/feedbackPlayer'; // <-- NOVA IMPORTAÇÃO

const Module5Page: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  const reviewCards = useReviewCards();

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [imageFlashClass, setImageFlashClass] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isIntroAudioPlaying, setIsIntroAudioPlaying] = useState(false);

  useEffect(() => {
    if (!lang) return;
    const progress = getProgress(lang);
    if (!progress.hasPlayedModule5Intro) {
      setIsIntroAudioPlaying(true);
      playAudioOnce('module5_intro', '/audio/narrations/ingles/audio_14.mp3');
      markModule5IntroAsPlayed(lang);
      setTimeout(() => {
        setIsIntroAudioPlaying(false);
      }, 22000);
    }
  }, [lang]);

  const currentCard = reviewCards[currentCardIndex];

  const playCardAudio = () => {
    if (currentCard?.audioUrl) {
      const audio = new Audio(currentCard.audioUrl);
      audio.play();
    }
  };

  const handleReveal = () => {
    if (isIntroAudioPlaying) return;
    setIsRevealed(true);
  };

  const handleFeedback = (feedback: 'yes' | 'no') => {
    if (isProcessing || isIntroAudioPlaying) return;

    const isCorrect = feedback === 'yes';

    // --- TOCA O ÁUDIO DE FEEDBACK ---
    playFeedbackAudio(isCorrect);
    
    setIsProcessing(true);
    setImageFlashClass(isCorrect ? 'flash-image-green' : 'flash-image-red');

    setTimeout(() => {
      const nextIndex = currentCardIndex + 1;
      if (nextIndex >= reviewCards.length) {
        if (lang) completeFirstReview(lang, 5);
        navigate(`/${lang}/modulo/5/concluido`);
        return;
      }
      setCurrentCardIndex(nextIndex);
      setIsRevealed(false);
      setImageFlashClass('');
      setIsProcessing(false);
    }, 3000);
  };

  useEffect(() => {
    if (currentCard && !isRevealed && !isIntroAudioPlaying) {
      playCardAudio();
    }
  }, [currentCard, isRevealed, isIntroAudioPlaying]);

  if (reviewCards.length === 0) {
    return (
      <div className="h-screen bg-black text-white flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-bold text-center mb-4">Nenhum card para revisar!</h2>
          <p className="text-center text-gray-400 mb-6">Complete algumas aulas no Módulo 1 para liberar as revisões.</p>
          <button 
              onClick={() => navigate(`/${lang}/home`)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
              Voltar
          </button>
      </div>
    )
  }
  
  if (!currentCard) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Carregando revisão...</div>;
  }

  const formattedCurrent = String(currentCardIndex + 1).padStart(2, '0');
  const formattedTotal = String(reviewCards.length).padStart(2, '0');
  const isButtonDisabled = isProcessing || isIntroAudioPlaying;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm flex flex-col gap-3">
        <div>
          <h2 className="text-2xl font-bold text-center">
            O que você está escutando?
          </h2>
          <div className="flex justify-end mt-1">
            <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">
              {formattedCurrent}/{formattedTotal}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-2 shadow-lg text-black">
          <div className="flex items-center border-b border-gray-300 p-2 h-12">
            <img src="https://flagcdn.com/w40/br.png" alt="Bandeira do Brasil" className="w-8 h-auto mr-3" />
            {isRevealed && (
              <span className="font-bold text-xl">{currentCard.portuguese}</span>
            )}
          </div>
          <div className="flex items-center p-2 h-12">
            <img src={`https://flagcdn.com/w40/${lang === 'en' ? 'us' : lang}.png`} alt="Bandeira do Idioma" className="w-8 h-auto mr-3" />
            {isRevealed && (
              <span className="font-bold text-xl">{currentCard.translation}</span>
            )}
          </div>
        </div>

        <div className={`bg-white rounded-lg p-2 flex justify-center items-center h-64 ${imageFlashClass}`}>
          {isRevealed ? (
            <img src={currentCard.imageUrl} alt={currentCard.translation} className="max-w-full max-h-full object-contain" />
          ) : (
            <button
              onClick={playCardAudio}
              className="text-black transform hover:scale-110 transition-transform"
              disabled={isButtonDisabled}
            >
              <Volume2 size={80} strokeWidth={1.5} />
            </button>
          )}
        </div>

        <div className="h-12 flex items-center justify-center">
          {!isRevealed ? (
            <button
              onClick={handleReveal}
              disabled={isButtonDisabled}
              className="bg-white rounded-lg w-full h-full font-bold text-base text-black active:bg-gray-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              REVELAR
            </button>
          ) : (
            <p className="text-white text-lg font-semibold">Você acertou o nome?</p>
          )}
        </div>

        <div className="w-full grid grid-cols-2 gap-4">
          <button
            onClick={() => handleFeedback('no')}
            disabled={!isRevealed || isButtonDisabled}
            className={`rounded-2xl h-20 flex justify-center items-center transition-opacity text-2xl font-bold disabled:cursor-not-allowed ${isRevealed ? 'bg-red-600 active:bg-red-700' : 'bg-gray-700 opacity-50'}`}
          >
            Não!
          </button>
          <button
            onClick={() => handleFeedback('yes')}
            disabled={!isRevealed || isButtonDisabled}
            className={`rounded-2xl h-20 flex justify-center items-center transition-opacity text-2xl font-bold disabled:cursor-not-allowed ${isRevealed ? 'bg-green-600 active:bg-green-700' : 'bg-gray-700 opacity-50'}`}
          >
            Sim!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Module5Page;