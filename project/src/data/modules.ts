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
        { id: 101, portuguese: 'Sino',      imageUrl: '/images/aula1/Bell.webp',    translations: { en: 'Bell', es: 'Campana', jp: '鐘 (kane)', fr: 'Cloche', de: 'Glocke', it: 'Campana', kr: '종 (jong)', ru: 'Колокол (Kolokol)', cn: '钟 (zhōng)', tr: 'Çan' }, 
          // CAMINHO DO ESPANHOL CORRIGIDO ABAIXO
          audioUrls: { en: '/audio/ingles/aula1/bell.mp3', es: '/audio/es/aula1/campana.mp3' } },
        { id: 102, portuguese: 'Bicicleta', imageUrl: '/images/aula1/bicycle.webp', translations: { en: 'Bicycle', es: 'Bicicleta', jp: '自転車 (jitensha)', fr: 'Vélo', de: 'Fahrrad', it: 'Bicicletta', kr: '자전거 (jajeongeo)', ru: 'Велосипед (Velosiped)', cn: '自行车 (zìxíngchē)', tr: 'Bisiklet' }, audioUrls: { en: '/audio/ingles/aula1/bicycle.mp3' } },
        { id: 103, portuguese: 'Casa',      imageUrl: '/images/aula1/House.webp',   translations: { en: 'House', es: 'Casa', jp: '家 (ie)', fr: 'Maison', de: 'Haus', it: 'Casa', kr: '집 (jip)', ru: 'Дом (Dom)', cn: '房子 (fángzi)', tr: 'Ev'  }, audioUrls: { en: '/audio/ingles/aula1/house.mp3' } },
        { id: 104, portuguese: 'Cachorro',  imageUrl: '/images/aula1/dog.webp',     translations: { en: 'Dog', es: 'Perro', jp: '犬 (inu)', fr: 'Chien', de: 'Hund', it: 'Cane', kr: '개 (gae)', ru: 'Собака (Sobaka)', cn: '狗 (gǒu)', tr: 'Köpek' }, audioUrls: { en: '/audio/ingles/aula1/dog.mp3' } },
        { id: 105, portuguese: 'Praia',     imageUrl: '/images/aula1/beach.webp',   translations: { en: 'Beach', es: 'Playa', jp: '浜 (hama)', fr: 'Plage', de: 'Strand', it: 'Spiaggia', kr: '해변 (haebyeon)', ru: 'Пляж (Plyazh)', cn: '海滩 (hǎitān)', tr: 'Plaj' }, audioUrls: { en: '/audio/ingles/aula1/beach.mp3' } },
        { id: 106, portuguese: 'Estrela',   imageUrl: '/images/aula1/star.webp',    translations: { en: 'Star', es: 'Estrella', jp: '星 (hoshi)', fr: 'Étoile', de: 'Stern', it: 'Stella', kr: '별 (byeol)', ru: 'Звезда (Zvezda)', cn: '星星 (xīngxing)', tr: 'Yıldız' }, audioUrls: { en: '/audio/ingles/aula1/star.mp3' } },
        { id: 107, portuguese: 'Porta',     imageUrl: '/images/aula1/door.webp',    translations: { en: 'Door', es: 'Puerta', jp: 'ドア (doa)', fr: 'Porte', de: 'Tür', it: 'Porta', kr: '문 (mun)', ru: 'Дверь (Dver)', cn: '门 (mén)', tr: 'Kapı' }, audioUrls: { en: '/audio/ingles/aula1/door.mp3' } },
        { id: 108, portuguese: 'Flor',      imageUrl: '/images/aula1/Flower.webp',  translations: { en: 'Flower', es: 'Flor', jp: '花 (hana)', fr: 'Fleur', de: 'Blume', it: 'Fiore', kr: '꽃 (kkot)', ru: 'Цветок (Tsvetok)', cn: '花 (huā)', tr: 'Çiçek' }, audioUrls: { en: '/audio/ingles/aula1/flower.mp3' } },
        { id: 109, portuguese: 'Árvore',    imageUrl: '/images/aula1/tree.webp',    translations: { en: 'Tree', es: 'Árbol', jp: '木 (ki)', fr: 'Arbre', de: 'Baum', it: 'Albero', kr: '나무 (namu)', ru: 'Дерево (Derevo)', cn: '树 (shù)', tr: 'Ağaç' }, audioUrls: { en: '/audio/ingles/aula1/tree.mp3' } },
        { id: 110, portuguese: 'Janela',    imageUrl: '/images/aula1/window.webp',  translations: { en: 'Window', es: 'Ventana', jp: '窓 (mado)', fr: 'Fenêtre', de: 'Fenster', it: 'Finestra', kr: '창문 (changmun)', cn: 'Окно (Okno)', zh: '窗户 (chuānghu)', tr: 'Pencere' }, audioUrls: { en: '/audio/ingles/aula1/window.mp3' } },
        { id: 111, portuguese: 'Igreja',    imageUrl: '/images/aula1/church.webp',  translations: { en: 'Church', es: 'Iglesia', jp: '教会 (kyōkai)', fr: 'Église', de: 'Kirche', it: 'Chiesa', kr: '교회 (gyohoe)', cn: 'Церковь (Tserkov)', zh: '教堂 (jiàotáng)', tr: 'Kilise' }, audioUrls: { en: '/audio/ingles/aula1/church.mp3' } },
        { id: 112, portuguese: 'Lua',       imageUrl: '/images/aula1/Moon.webp',    translations: { en: 'Moon', es: 'Luna', jp: '月 (tsuki)', fr: 'Lune', de: 'Mond', it: 'Luna', kr: '달 (dal)', ru: 'Луна (Luna)', cn: '月亮 (yuèliàng)', tr: 'Ay' }, audioUrls: { en: '/audio/ingles/aula1/moon.mp3' } }
      ]
    },
    {
      id: 2,
      title: "Aula 02: Animais da Quinta",
      thumbnailUrl: "/images/visual/Thumbnail2.webp",
      cards: [
        { id: 113, portuguese: 'Periquito', imageUrl: '/images/aula2/budgie.webp',  translations: { en: 'Budgie', es: 'Periquito', jp: 'インコ (inko)', fr: 'Perruche', de: 'Sittich', it: 'Pappagallino', kr: '잉꼬 (ingkko)', ru: 'Попугай (Popugay)', cn: '长尾小鹦鹉 (chángwěi xiǎo yīngwǔ)', tr: 'Muhabbet kuşu' }, audioUrls: { en: '/audio/ingles/aula2/budgie.mp3' } },
        { id: 114, portuguese: 'Touro',     imageUrl: '/images/aula2/bull.webp',    translations: { en: 'Bull', es: 'Toro', jp: 'トロ (toro)', fr: 'Taureau', de: 'Stier', it: 'Toro', kr: '황소 (hwangso)', ru: 'Бык (Byk)', cn: '公牛 (gōngniú)', tr: 'Boğa' }, audioUrls: { en: '/audio/ingles/aula2/bull.mp3' } },
        { id: 115, portuguese: 'Gato',      imageUrl: '/images/aula2/cat.webp',     translations: { en: 'Cat', es: 'Gato', jp: '猫 (neko)', fr: 'Chat', de: 'Katze', it: 'Gatto', kr: '고양이 (goyangi)', ru: 'Кошка (Koshka)', cn: '猫 (māo)', tr: 'Kedi' }, audioUrls: { en: '/audio/ingles/aula2/cat.mp3' } },
        { id: 116, portuguese: 'Galinha',   imageUrl: '/images/aula2/chicken.webp', translations: { en: 'Chicken', es: 'Pollo', jp: '鶏 (niwatori)', fr: 'Poule', de: 'Huhn', it: 'Gallina', kr: '닭 (dak)', ru: 'Курица (Kuritsa)', cn: '鸡 (jī)', tr: 'Tavuk' }, audioUrls: { en: '/audio/ingles/aula2/chicken.mp3' } },
        { id: 117, portuguese: 'Vaca',      imageUrl: '/images/aula2/cow.webp',     translations: { en: 'Cow', es: 'Vaca', jp: '牛 (ushi)', fr: 'Vache', de: 'Kuh', it: 'Mucca', kr: '소 (so)', ru: 'Корова (Korova)', cn: '牛 (niú)', tr: 'İnek' }, audioUrls: { en: '/audio/ingles/aula2/cow.mp3' } },
        { id: 118, portuguese: 'Pato',      imageUrl: '/images/aula2/duck.webp',    translations: { en: 'Duck', es: 'Pato', jp: 'アヒル (ahiru)', fr: 'Canard', de: 'Ente', it: 'Anatra', kr: '오리 (ori)', ru: 'Утка (Utka)', cn: '鸭 (yā)', tr: 'Ördek' }, audioUrls: { en: '/audio/ingles/aula2/duck.mp3' } },
        { id: 119, portuguese: 'Peixe',     imageUrl: '/images/aula2/fish.webp',    translations: { en: 'Fish', es: 'Pez', jp: '魚 (sakana)', fr: 'Poisson', de: 'Fisch', it: 'Pesce', kr: '물고기 (mulgogi)', ru: 'Рыба (Ryba)', cn: '鱼 (yú)', tr: 'Balık' }, audioUrls: { en: '/audio/ingles/aula2/fish.mp3' } },
        { id: 120, portuguese: 'Cabra',     imageUrl: '/images/aula2/goat.webp',    translations: { en: 'Goat', es: 'Cabra', jp: 'ヤギ (yagi)', fr: 'Chèvre', de: 'Ziege', it: 'Capra', kr: '염소 (yeomso)', ru: 'Коза (Koza)', cn: '山羊 (shānyáng)', tr: 'Keçi' }, audioUrls: { en: '/audio/ingles/aula2/goat.mp3' } },
        { id: 121, portuguese: 'Cavalo',    imageUrl: '/images/aula2/horse.webp',   translations: { en: 'Horse', es: 'Caballo', jp: '馬 (uma)', fr: 'Cheval', de: 'Pferd', it: 'Cavallo', kr: '말 (mal)', ru: 'Лошадь (Loshad)', cn: '马 (mǎ)', tr: 'At' }, audioUrls: { en: '/audio/ingles/aula2/horse.mp3' } },
        { id: 122, portuguese: 'Porco',     imageUrl: '/images/aula2/pig.webp',     translations: { en: 'Pig', es: 'Cerdo', jp: '豚 (buta)', fr: 'Cochon', de: 'Schwein', it: 'Maiale', kr: '돼지 (dwaeji)', ru: 'Свинья (Svinya)', cn: '猪 (zhū)', tr: 'Domuz' }, audioUrls: { en: '/audio/ingles/aula2/pig.mp3' } },
        { id: 123, portuguese: 'Coelho',    imageUrl: '/images/aula2/rabbit.webp',  translations: { en: 'Rabbit', es: 'Conejo', jp: 'ウサギ (usagi)', fr: 'Lapin', de: 'Hase', it: 'Coniglio', kr: '토끼 (tokki)', ru: 'Кролик (Krolik)', cn: '兔子 (tùzi)', tr: 'Tavşan' }, audioUrls: { en: '/audio/ingles/aula2/rabbit.mp3' } },
        { id: 124, portuguese: 'Ovelha',    imageUrl: '/images/aula2/sheep.webp',   translations: { en: 'Sheep', es: 'Oveja', jp: '羊 (hitsuji)', fr: 'Mouton', de: 'Schaf', it: 'Pecora', kr: '양 (yang)', ru: 'Овца (Ovtsa)', cn: '羊 (yáng)', tr: 'Koyun' }, audioUrls: { en: '/audio/ingles/aula2/sheep.mp3' } }
      ]
    },
    {
      id: 3,
      title: "Aula 03: Frutas",
      thumbnailUrl: "/images/visual/Thumbnail3.webp",
      cards: [
        { id: 125, portuguese: 'Maçã',      imageUrl: '/images/aula3/apple.webp',      translations: { en: 'Apple', es: 'Manzana', jp: '林檎 (ringo)', fr: 'Pomme', de: 'Apfel', it: 'Mela', kr: '사과 (sagwa)', ru: 'Яблоко (Yabloko)', cn: '苹果 (píngguǒ)', tr: 'Elma' }, audioUrls: { en: '/audio/ingles/aula3/apple.mp3' } },
        { id: 126, portuguese: 'Abacate',   imageUrl: '/images/aula3/avocado.webp',    translations: { en: 'Avocado', es: 'Aguacate', jp: 'アボカド (abokado)', fr: 'Avocat', de: 'Avocado', it: 'Avocado', kr: '아보카도 (abokado)', ru: 'Авокадо (Avokado)', cn: '鳄梨 (èlí)', tr: 'Avokado' }, audioUrls: { en: '/audio/ingles/aula3/avocado.mp3' } },
        { id: 127, portuguese: 'Coco',      imageUrl: '/images/aula3/coconut.webp',    translations: { en: 'Coconut', es: 'Coco', jp: 'ココナッツ (kokonattsu)', fr: 'Noix de coco', de: 'Kokosnuss', it: 'Noce di cocco', kr: '코코넛 (kokoneot)', ru: 'Кокос (Kokos)', cn: '椰子 (yēzi)', tr: 'Hindistan cevizi' }, audioUrls: { en: '/audio/ingles/aula3/coconut.mp3' } },
        { id: 128, portuguese: 'Uva',       imageUrl: '/images/aula3/grape.webp',      translations: { en: 'Grape', es: 'Uva', jp: '葡萄 (budō)', fr: 'Raisin', de: 'Traube', it: 'Uva', kr: '포도 (podo)', ru: 'Виноград (Vinograd)', cn: '葡萄 (pútao)', tr: 'Üzüm' }, audioUrls: { en: '/audio/ingles/aula3/grape.mp3' } },
        { id: 129, portuguese: 'Jaca',      imageUrl: '/images/aula3/jackfruit.webp',  translations: { en: 'Jackfruit', es: 'Yaca', jp: 'ジャックフルーツ (jakku furūtsu)', fr: 'Jacque', de: 'Jackfrucht', it: 'Giaca', kr: '잭프루트 (jaekpeuruteu)', ru: 'Джекфрут (Dzhekfrut)', cn: '菠萝蜜 (bōluómì)', tr: 'Jak meyvesi' }, audioUrls: { en: '/audio/ingles/aula3/jackfruit.mp3' } },
        { id: 130, portuguese: 'Laranja',   imageUrl: '/images/aula3/orange.webp',     translations: { en: 'Orange', es: 'Naranja', jp: 'オレンジ (orenji)', fr: 'Orange', de: 'Orange', it: 'Arancia', kr: '오렌지 (orenji)', ru: 'Апельсин (Apel sin)', cn: '橙子 (chéngzi)', tr: 'Portakal' }, audioUrls: { en: '/audio/ingles/aula3/orange.mp3' } },
        { id: 131, portuguese: 'Abacaxi',   imageUrl: '/images/aula3/pineapple.webp',  translations: { en: 'Pineapple', es: 'Piña', jp: 'パイナップル (painappuru)', fr: 'Ananas', de: 'Ananas', it: 'Ananas', kr: '파인애플 (painaepeul)', ru: 'Ананас (Ananas)', cn: '菠萝 (bōluó)', tr: 'Ananas' }, audioUrls: { en: '/audio/ingles/aula3/pineapple.mp3' } },
        { id: 132, portuguese: 'Ameixa',    imageUrl: '/images/aula3/plum.webp',       translations: { en: 'Plum', es: 'Ciruela', jp: 'プラム (puramu)', fr: 'Prune', de: 'Pflaume', it: 'Prugna', kr: '자두 (jadu)', ru: 'Слива (Sliva)', cn: '李子 (lǐzi)', tr: 'Erik' }, audioUrls: { en: '/audio/ingles/aula3/plum.mp3' } },
        { id: 133, portuguese: 'Graviola',  imageUrl: '/images/aula3/soursop.webp',    translations: { en: 'Soursop', es: 'Guanábana', jp: 'サワーソップ (sawā soppu)', fr: 'Corossol', de: 'Sauersack', it: 'Guanabana', kr: '사워솝 (sawoseop)', ru: 'Сметанное яблоко (Smetannoye yabloko)', cn: '刺果番荔枝 (cìguǒ fānlìzhī)', tr: 'Guanabana' }, audioUrls: { en: '/audio/ingles/aula3/soursop.mp3' } },
        { id: 134, portuguese: 'Carambola', imageUrl: '/images/aula3/starfruit.webp',  translations: { en: 'Starfruit', es: 'Carambola', jp: 'スターフルーツ (sutā furūtsu)', fr: 'Carambole', de: 'Sternfrucht', it: 'Carambola', kr: '스타프루트 (seutapeuruteu)', ru: 'Карамбола (Karambola)', cn: '杨桃 (yángtáo)', tr: 'Yıldız meyvesi' }, audioUrls: { en: '/audio/ingles/aula3/starfruit.mp3' } },
        { id: 135, portuguese: 'Morango',   imageUrl: '/images/aula3/strawberry.webp', translations: { en: 'Strawberry', es: 'Fresa', jp: 'イチゴ (ichigo)', fr: 'Fraise', de: 'Erdbeere', it: 'Fragola', kr: '딸기 (ttalgi)', ru: 'Клубника (Klubnika)', cn: '草莓 (cǎoméi)', tr: 'Çilek' }, audioUrls: { en: '/audio/ingles/aula3/strawberry.mp3' } },
        { id: 136, portuguese: 'Melancia',  imageUrl: '/images/aula3/watermelon.webp', translations: { en: 'Watermelon', es: 'Sandía', jp: 'スイカ (suika)', fr: 'Pastèque', de: 'Wassermelone', it: 'Anguria', kr: '수박 (subak)', ru: 'Арбуз (Arbuz)', cn: '西瓜 (xīguā)', tr: 'Karpuz' }, audioUrls: { en: '/audio/ingles/aula3/watermelon.mp3' } }
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