interface Card {
  id: number;
  portuguese: string;
  imageUrl: string;
  translations: {
    [key: string]: string;
  };
  audioUrls: {
    [key: string]: string;
  };
}

interface Lesson {
  id: number;
  title: string;
  thumbnailUrl: string;
  cards: Card[];
}

interface LanguageData {
  homePageModules: {
    main: { id: number; title: string; imageUrl: string; }[];
    advanced: { id: number; title: string; imageUrl: string; }[];
    listeningPractice: { id: number; title: string; imageUrl: string; }[];
    readingAndWriting: { id: number; title: string; imageUrl: string; }[];
  };
  lessons: Lesson[];
}

const lessonData: LanguageData = {
  homePageModules: {
    main: [
      { id: 1, title: "Módulo 01", imageUrl: "/images/visual/m1_01.webp" },
      { id: 2, title: "Módulo 02", imageUrl: "/images/visual/m1_02.webp" },
      { id: 3, title: "Módulo 03", imageUrl: "/images/visual/m1_03.webp" },
      { id: 4, title: "Módulo 04", imageUrl: "/images/visual/m1_04.webp" },
      { id: 5, title: "Módulo 05", imageUrl: "/images/visual/m1_05.webp" }
    ],
    advanced: [
      { id: 6, title: "Módulo Avançado 1", imageUrl: "/images/visual/m2_01.webp" },
      { id: 7, title: "Módulo Avançado 2", imageUrl: "/images/visual/m2_02.webp" },
      { id: 8, title: "Módulo Avançado 3", imageUrl: "/images/visual/m2_03.webp" },
      { id: 9, title: "Módulo Avançado 4", imageUrl: "/images/visual/m2_04.webp" },
      { id: 10, title: "Módulo Avançado 5", imageUrl: "/images/visual/m2_05.webp" },
      { id: 11, title: "Módulo Avançado 6", imageUrl: "/images/visual/m2_06.webp" },
      { id: 12, title: "Módulo Avançado 7", imageUrl: "/images/visual/m2_07.webp" },
      { id: 13, title: "Módulo Avançado 8", imageUrl: "/images/visual/m2_08.webp" },
      { id: 14, title: "Módulo Avançado 9", imageUrl: "/images/visual/m2_09.webp" },
      { id: 15, title: "Módulo Avançado 10", imageUrl: "/images/visual/m2_10.webp" },
    ],
    listeningPractice: [
        { id: 16, title: "Treino 1", imageUrl: "/images/visual/m3_01.webp" },
        { id: 17, title: "Treino 2", imageUrl: "/images/visual/m3_02.webp" },
        { id: 18, title: "Treino 3", imageUrl: "/images/visual/m3_03.webp" },
        { id: 19, title: "Treino 4", imageUrl: "/images/visual/m3_04.webp" },
        { id: 20, title: "Treino 5", imageUrl: "/images/visual/m3_05.webp" },
        { id: 21, title: "Treino 6", imageUrl: "/images/visual/m3_06.webp" },
        { id: 22, title: "Treino 7", imageUrl: "/images/visual/m3_07.webp" },
        { id: 23, title: "Treino 8", imageUrl: "/images/visual/m3_08.webp" },
        { id: 24, title: "Treino 9", imageUrl: "/images/visual/m3_09.webp" },
        { id: 25, title: "Treino 10", imageUrl: "/images/visual/m3_10.webp" },
    ],
    readingAndWriting: [
      { id: 26, title: "Leitura 1", imageUrl: "/images/visual/m4_01.webp" },
      { id: 27, title: "Leitura 2", imageUrl: "/images/visual/m4_02.webp" },
      { id: 28, title: "Leitura 3", imageUrl: "/images/visual/m4_03.webp" },
      { id: 29, title: "Leitura 4", imageUrl: "/images/visual/m4_04.webp" },
      { id: 30, title: "Leitura 5", imageUrl: "/images/visual/m4_05.webp" },
    ]
  },
  lessons: [
    {
      id: 1,
      title: "Aula 01: Primeiros Passos",
      thumbnailUrl: "/images/visual/Thumbnail1.webp",
      cards: [
        { id: 101, portuguese: 'Sino',      imageUrl: '/images/aula1/Bell.webp',    translations: { en: 'Bell', es: 'Campana', jp: 'ベル', fr: 'Cloche', de: 'Glocke', it: 'Campana', kr: '종', ru: 'колокол', zh: '钟', tr: 'Çan' }, 
          // CAMINHO DO ESPANHOL CORRIGIDO ABAIXO
          audioUrls: { en: '/audio/ingles/aula1/bell.mp3', es: '/audio/es/aula1/campana.mp3' } },
        { id: 102, portuguese: 'Bicicleta', imageUrl: '/images/aula1/bicycle.webp', translations: { en: 'Bicycle', es: 'Bicicleta', jp: '自転車', fr: 'Vélo', de: 'Fahrrad', it: 'Bicicletta', kr: '자전거', ru: 'Велосипед', zh: '自行车', tr: 'Bisiklet' }, audioUrls: { en: '/audio/ingles/aula1/bicycle.mp3' } },
        { id: 103, portuguese: 'Casa',      imageUrl: '/images/aula1/House.webp',   translations: { en: 'House', es: 'Casa', jp: '家' }, audioUrls: { en: '/audio/ingles/aula1/house.mp3' } },
        { id: 104, portuguese: 'Cachorro',  imageUrl: '/images/aula1/dog.webp',     translations: { en: 'Dog', es: 'Perro', jp: '犬' }, audioUrls: { en: '/audio/ingles/aula1/dog.mp3' } },
        { id: 105, portuguese: 'Praia',     imageUrl: '/images/aula1/beach.webp',   translations: { en: 'Beach', es: 'Playa', jp: 'ビーチ' }, audioUrls: { en: '/audio/ingles/aula1/beach.mp3' } },
        { id: 106, portuguese: 'Estrela',   imageUrl: '/images/aula1/star.webp',    translations: { en: 'Star', es: 'Estrella', jp: '星' }, audioUrls: { en: '/audio/ingles/aula1/star.mp3' } },
        { id: 107, portuguese: 'Porta',     imageUrl: '/images/aula1/door.webp',    translations: { en: 'Door', es: 'Puerta', jp: 'ドア' }, audioUrls: { en: '/audio/ingles/aula1/door.mp3' } },
        { id: 108, portuguese: 'Flor',      imageUrl: '/images/aula1/Flower.webp',  translations: { en: 'Flower', es: 'Flor', jp: '花' }, audioUrls: { en: '/audio/ingles/aula1/flower.mp3' } },
        { id: 109, portuguese: 'Árvore',    imageUrl: '/images/aula1/tree.webp',    translations: { en: 'Tree', es: 'Árbol', jp: '木' }, audioUrls: { en: '/audio/ingles/aula1/tree.mp3' } },
        { id: 110, portuguese: 'Janela',    imageUrl: '/images/aula1/window.webp',  translations: { en: 'Window', es: 'Ventana', jp: '窓' }, audioUrls: { en: '/audio/ingles/aula1/window.mp3' } },
        { id: 111, portuguese: 'Igreja',    imageUrl: '/images/aula1/church.webp',  translations: { en: 'Church', es: 'Iglesia', jp: '教会' }, audioUrls: { en: '/audio/ingles/aula1/church.mp3' } },
        { id: 112, portuguese: 'Lua',       imageUrl: '/images/aula1/Moon.webp',    translations: { en: 'Moon', es: 'Luna', jp: '月' }, audioUrls: { en: '/audio/ingles/aula1/moon.mp3' } }
      ]
    },
    {
      id: 2,
      title: "Aula 02: Animais da Quinta",
      thumbnailUrl: "/images/visual/Thumbnail2.webp",
      cards: [
        { id: 113, portuguese: 'Periquito', imageUrl: '/images/aula2/budgie.webp',  translations: { en: 'Budgie', es: 'Periquito', jp: 'インコ' }, audioUrls: { en: '/audio/ingles/aula2/budgie.mp3' } },
        { id: 114, portuguese: 'Touro',     imageUrl: '/images/aula2/bull.webp',    translations: { en: 'Bull', es: 'Toro', jp: '雄牛' }, audioUrls: { en: '/audio/ingles/aula2/bull.mp3' } },
        { id: 115, portuguese: 'Gato',      imageUrl: '/images/aula2/cat.webp',     translations: { en: 'Cat', es: 'Gato', jp: '猫' }, audioUrls: { en: '/audio/ingles/aula2/cat.mp3' } },
        { id: 116, portuguese: 'Galinha',   imageUrl: '/images/aula2/chicken.webp', translations: { en: 'Chicken', es: 'Pollo', jp: '鶏' }, audioUrls: { en: '/audio/ingles/aula2/chicken.mp3' } },
        { id: 117, portuguese: 'Vaca',      imageUrl: '/images/aula2/cow.webp',     translations: { en: 'Cow', es: 'Vaca', jp: '牛' }, audioUrls: { en: '/audio/ingles/aula2/cow.mp3' } },
        { id: 118, portuguese: 'Pato',      imageUrl: '/images/aula2/duck.webp',    translations: { en: 'Duck', es: 'Pato', jp: 'アヒル' }, audioUrls: { en: '/audio/ingles/aula2/duck.mp3' } },
        { id: 119, portuguese: 'Peixe',     imageUrl: '/images/aula2/fish.webp',    translations: { en: 'Fish', es: 'Pez', jp: '魚' }, audioUrls: { en: '/audio/ingles/aula2/fish.mp3' } },
        { id: 120, portuguese: 'Cabra',     imageUrl: '/images/aula2/goat.webp',    translations: { en: 'Goat', es: 'Cabra', jp: 'ヤギ' }, audioUrls: { en: '/audio/ingles/aula2/goat.mp3' } },
        { id: 121, portuguese: 'Cavalo',    imageUrl: '/images/aula2/horse.webp',   translations: { en: 'Horse', es: 'Caballo', jp: '馬' }, audioUrls: { en: '/audio/ingles/aula2/horse.mp3' } },
        { id: 122, portuguese: 'Porco',     imageUrl: '/images/aula2/pig.webp',     translations: { en: 'Pig', es: 'Cerdo', jp: '豚' }, audioUrls: { en: '/audio/ingles/aula2/pig.mp3' } },
        { id: 123, portuguese: 'Coelho',    imageUrl: '/images/aula2/rabbit.webp',  translations: { en: 'Rabbit', es: 'Conejo', jp: 'ウサギ' }, audioUrls: { en: '/audio/ingles/aula2/rabbit.mp3' } },
        { id: 124, portuguese: 'Ovelha',    imageUrl: '/images/aula2/sheep.webp',   translations: { en: 'Sheep', es: 'Oveja', jp: '羊' }, audioUrls: { en: '/audio/ingles/aula2/sheep.mp3' } }
      ]
    },
    {
      id: 3,
      title: "Aula 03: Frutas",
      thumbnailUrl: "/images/visual/Thumbnail3.webp",
      cards: [
        { id: 125, portuguese: 'Maçã',      imageUrl: '/images/aula3/apple.webp',      translations: { en: 'Apple', es: 'Manzana', jp: 'リンゴ' }, audioUrls: { en: '/audio/ingles/aula3/apple.mp3' } },
        { id: 126, portuguese: 'Abacate',   imageUrl: '/images/aula3/avocado.webp',    translations: { en: 'Avocado', es: 'Aguacate', jp: 'アボカド' }, audioUrls: { en: '/audio/ingles/aula3/avocado.mp3' } },
        { id: 127, portuguese: 'Coco',      imageUrl: '/images/aula3/coconut.webp',    translations: { en: 'Coconut', es: 'Coco', jp: 'ココナッツ' }, audioUrls: { en: '/audio/ingles/aula3/coconut.mp3' } },
        { id: 128, portuguese: 'Uva',       imageUrl: '/images/aula3/grape.webp',      translations: { en: 'Grape', es: 'Uva', jp: 'ブドウ' }, audioUrls: { en: '/audio/ingles/aula3/grape.mp3' } },
        { id: 129, portuguese: 'Jaca',      imageUrl: '/images/aula3/jackfruit.webp',  translations: { en: 'Jackfruit', es: 'Yaca', jp: 'ジャックフルーツ' }, audioUrls: { en: '/audio/ingles/aula3/jackfruit.mp3' } },
        { id: 130, portuguese: 'Laranja',   imageUrl: '/images/aula3/orange.webp',     translations: { en: 'Orange', es: 'Naranja', jp: 'オレンジ' }, audioUrls: { en: '/audio/ingles/aula3/orange.mp3' } },
        { id: 131, portuguese: 'Abacaxi',   imageUrl: '/images/aula3/pineapple.webp',  translations: { en: 'Pineapple', es: 'Piña', jp: 'パイナップル' }, audioUrls: { en: '/audio/ingles/aula3/pineapple.mp3' } },
        { id: 132, portuguese: 'Ameixa',    imageUrl: '/images/aula3/plum.webp',       translations: { en: 'Plum', es: 'Ciruela', jp: 'プラム' }, audioUrls: { en: '/audio/ingles/aula3/plum.mp3' } },
        { id: 133, portuguese: 'Graviola',  imageUrl: '/images/aula3/soursop.webp',    translations: { en: 'Soursop', es: 'Guanábana', jp: 'サワーソップ' }, audioUrls: { en: '/audio/ingles/aula3/soursop.mp3' } },
        { id: 134, portuguese: 'Carambola', imageUrl: '/images/aula3/starfruit.webp',  translations: { en: 'Starfruit', es: 'Carambola', jp: 'スターフルーツ' }, audioUrls: { en: '/audio/ingles/aula3/starfruit.mp3' } },
        { id: 135, portuguese: 'Morango',   imageUrl: '/images/aula3/strawberry.webp', translations: { en: 'Strawberry', es: 'Fresa', jp: 'イチゴ' }, audioUrls: { en: '/audio/ingles/aula3/strawberry.mp3' } },
        { id: 136, portuguese: 'Melancia',  imageUrl: '/images/aula3/watermelon.webp', translations: { en: 'Watermelon', es: 'Sandía', jp: 'スイカ' }, audioUrls: { en: '/audio/ingles/aula3/watermelon.mp3' } }
      ]
    },
  ]
};

export const allLanguageData: { [key: string]: LanguageData } = {
  en: lessonData,
  jp: lessonData,
  kr: lessonData,
  fr: lessonData,
  es: lessonData,
  de: lessonData,
  it: lessonData,
  ru: lessonData,
  // CHAVE DO MANDARIM CORRIGIDA ABAIXO
  cn: lessonData, 
  tr: lessonData,
};

export const languageModules = [
  { id: 1, code: 'en', title: "Inglês", imageUrl: "/images/visual/eng.webp" },
  { id: 2, code: 'jp', title: "Japonês", imageUrl: "/images/visual/jpa.webp" },
  { id: 3, code: 'kr', title: "Coreano", imageUrl: "/images/visual/cor.webp" },
  { id: 4, code: 'fr', title: "Francês", imageUrl: "/images/visual/fra.webp" },
  { id: 5, code: 'es', title: "Espanhol", imageUrl: "/images/visual/esp.webp" },
  { id: 6, code: 'de', title: "Alemão", imageUrl: "/images/visual/ger.webp" },
  { id: 7, code: 'it', title: "Italiano", imageUrl: "/images/visual/ita.webp" },
  { id: 8, code: 'ru', title: "Russo", imageUrl: "/images/visual/rus.webp" },
  { id: 9, code: 'cn', title: "Mandarim", imageUrl: "/images/visual/chi.webp" },
  { id: 10, code: 'tr', title: "Turco", imageUrl: "/images/visual/tur.webp" }
];