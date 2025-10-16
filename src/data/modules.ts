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
          audioUrls: { en: '/audio/ingles/aula1/bell.mp3', es: '/audio/es/campana.mp3', jp: '/audio/jp/kane.mp3', fr: '/audio/fr/cloche.mp3', de: '/audio/de/glocke.mp3', it: '/audio/it/campana.mp3', kr: '/audio/kr/jong.mp3', ru: '/audio/ru/kolokol.mp3', cn: '/audio/cn/zhōng.mp3', tr: '/audio/tr/çan.mp3' } },

        { id: 102, portuguese: 'Bicicleta', imageUrl: '/images/aula1/bicycle.webp', translations: { en: 'Bicycle', es: 'Bicicleta', jp: '自転車 (jitensha)', fr: 'Vélo', de: 'Fahrrad', it: 'Bicicletta', kr: '자전거 (jajeongeo)', ru: 'Велосипед (Velosiped)', cn: '自行车 (zìxíngchē)', tr: 'Bisiklet' }, 
        audioUrls: { en: '/audio/ingles/aula1/bicycle.mp3', es: '/audio/es/bicicleta.mp3', jp: '/audio/jp/jitensha.mp3', fr: '/audio/fr/vélo.mp3', de: '/audio/de/fahrrad.mp3', it: '/audio/it/bicicletta.mp3', kr: '/audio/kr/jajeongeo.mp3', ru: '/audio/ru/velosiped.mp3', cn: '/audio/cn/zìxíngchē.mp3', tr: '/audio/tr/bisiklet.mp3' } },

        { id: 103, portuguese: 'Casa',      imageUrl: '/images/aula1/House.webp',   translations: { en: 'House', es: 'Casa', jp: '家 (ie)', fr: 'Maison', de: 'Haus', it: 'Casa', kr: '집 (jip)', ru: 'Дом (Dom)', cn: '房子 (fángzi)', tr: 'Ev'  }, 
        audioUrls: { en: '/audio/ingles/aula1/house.mp3', es: '/audio/es/casa.mp3', jp: '/audio/jp/ie.mp3', fr: '/audio/fr/maison.mp3', de: '/audio/de/haus.mp3', it: '/audio/it/casa.mp3', kr: '/audio/kr/jip.mp3', ru: '/audio/ru/dom.mp3', cn: '/audio/cn/fángzi.mp3', tr: '/audio/tr/ev.mp3' } },

        { id: 104, portuguese: 'Cachorro',  imageUrl: '/images/aula1/dog.webp',     translations: { en: 'Dog', es: 'Perro', jp: '犬 (inu)', fr: 'Chien', de: 'Hund', it: 'Cane', kr: '개 (gae)', ru: 'Собака (Sobaka)', cn: '狗 (gǒu)', tr: 'Köpek' }, 
        audioUrls: { en: '/audio/ingles/aula1/dog.mp3', es: '/audio/es/perro.mp3', jp: '/audio/jp/inu.mp3', fr: '/audio/fr/chien.mp3', de: '/audio/de/hund.mp3', it: '/audio/it/cane.mp3', kr: '/audio/kr/gae.mp3', ru: '/audio/ru/sobaka.mp3', cn: '/audio/cn/gǒu.mp3', tr: '/audio/tr/köpek.mp3' } },

        { id: 105, portuguese: 'Praia',     imageUrl: '/images/aula1/beach.webp',   translations: { en: 'Beach', es: 'Playa', jp: '浜 (hama)', fr: 'Plage', de: 'Strand', it: 'Spiaggia', kr: '해변 (haebyeon)', ru: 'Пляж (Plyazh)', cn: '海滩 (hǎitān)', tr: 'Plaj' }, 
        audioUrls: { en: '/audio/ingles/aula1/beach.mp3', es: '/audio/es/playa.mp3', jp: '/audio/jp/umi.mp3', fr: '/audio/fr/plage.mp3', de: '/audio/de/strand.mp3', it: '/audio/it/spiaggia.mp3', kr: '/audio/kr/haebyeon.mp3', ru: '/audio/ru/plyazh.mp3', cn: '/audio/cn/hǎitān.mp3', tr: '/audio/tr/plaj.mp3' } },

        { id: 106, portuguese: 'Estrela',   imageUrl: '/images/aula1/star.webp',    translations: { en: 'Star', es: 'Estrella', jp: '星 (hoshi)', fr: 'Étoile', de: 'Stern', it: 'Stella', kr: '별 (byeol)', ru: 'Звезда (Zvezda)', cn: '星星 (xīngxing)', tr: 'Yıldız' }, 
        audioUrls: { en: '/audio/ingles/aula1/star.mp3', es: '/audio/es/estrella.mp3', jp: '/audio/jp/hoshi.mp3', fr: '/audio/fr/étoile.mp3', de: '/audio/de/stern.mp3', it: '/audio/it/stella.mp3', kr: '/audio/kr/byeol.mp3', ru: '/audio/ru/zvezda.mp3', cn: '/audio/cn/xīngxing.mp3', tr: '/audio/tr/yıldız.mp3' } },

        { id: 107, portuguese: 'Porta',     imageUrl: '/images/aula1/door.webp',    translations: { en: 'Door', es: 'Puerta', jp: 'ドア (doa)', fr: 'Porte', de: 'Tür', it: 'Porta', kr: '문 (mun)', ru: 'Дверь (Dver)', cn: '门 (mén)', tr: 'Kapı' }, 
        audioUrls: { en: '/audio/ingles/aula1/door.mp3',es: '/audio/es/puerta.mp3', jp: '/audio/jp/doa.mp3', fr: '/audio/fr/porte.mp3', de: '/audio/de/tür.mp3', it: '/audio/it/porta.mp3', kr: '/audio/kr/mun.mp3', ru: '/audio/ru/dver.mp3', cn: '/audio/cn/mén.mp3', tr: '/audio/tr/kapı.mp3' } },

        { id: 108, portuguese: 'Flor',      imageUrl: '/images/aula1/Flower.webp',  translations: { en: 'Flower', es: 'Flor', jp: '花 (hana)', fr: 'Fleur', de: 'Blume', it: 'Fiore', kr: '꽃 (kkot)', ru: 'Цветок (Tsvetok)', cn: '花 (huā)', tr: 'Çiçek' }, 
        audioUrls: { en: '/audio/ingles/aula1/flower.mp3',es: '/audio/es/flor.mp3', jp: '/audio/jp/hana.mp3', fr: '/audio/fr/fleur.mp3', de: '/audio/de/blume.mp3', it: '/audio/it/fiore.mp3', kr: '/audio/kr/kkot.mp3', ru: '/audio/ru/tsvetok.mp3', cn: '/audio/cn/huā.mp3', tr: '/audio/tr/çiçek.mp3' } },

        { id: 109, portuguese: 'Árvore',    imageUrl: '/images/aula1/tree.webp',    translations: { en: 'Tree', es: 'Árbol', jp: '木 (ki)', fr: 'Arbre', de: 'Baum', it: 'Albero', kr: '나무 (namu)', ru: 'Дерево (Derevo)', cn: '树 (shù)', tr: 'Ağaç' }, 
        audioUrls: { en: '/audio/ingles/aula1/tree.mp3',es: '/audio/es/árbol.mp3', jp: '/audio/jp/ki.mp3', fr: '/audio/fr/arbre.mp3', de: '/audio/de/baum.mp3', it: '/audio/it/albero.mp3', kr: '/audio/kr/namu.mp3', ru: '/audio/ru/derevo.mp3', cn: '/audio/cn/shù.mp3', tr: '/audio/tr/ağaç.mp3' } },

        { id: 110, portuguese: 'Janela',    imageUrl: '/images/aula1/window.webp',  translations: { en: 'Window', es: 'Ventana', jp: '窓 (mado)', fr: 'Fenêtre', de: 'Fenster', it: 'Finestra', kr: '창문 (changmun)', ru: 'окно (okno)', cn: 'Окно (Okno)', zh: '窗户 (chuānghu)', tr: 'Pencere' }, 
        audioUrls: { en: '/audio/ingles/aula1/window.mp3',es: '/audio/es/ventana.mp3', jp: '/audio/jp/mado.mp3', fr: '/audio/fr/fenêtre.mp3', de: '/audio/de/fenster.mp3', it: '/audio/it/finestra.mp3', kr: '/audio/kr/changmun.mp3', ru: '/audio/ru/okno.mp3', cn: '/audio/cn/chuānghu.mp3', tr: '/audio/tr/pencere.mp3' } },

        { id: 111, portuguese: 'Igreja',    imageUrl: '/images/aula1/church.webp',  translations: { en: 'Church', es: 'Iglesia', jp: '教会 (kyōkai)', fr: 'Église', de: 'Kirche', it: 'Chiesa', kr: '교회 (gyohoe)', ru:'церковь (tserkov)', cn: 'Церковь (Tserkov)', zh: '教堂 (jiàotáng)', tr: 'Kilise' }, 
        audioUrls: { en: '/audio/ingles/aula1/church.mp3', es: '/audio/es/iglesia.mp3', jp: '/audio/jp/kyokai.mp3', fr: '/audio/fr/église.mp3', de: '/audio/de/kirche.mp3', it: '/audio/it/chiesa.mp3', kr: '/audio/kr/gyohoe.mp3', ru: '/audio/ru/tserkov.mp3', cn: '/audio/cn/jiàotáng.mp3', tr: '/audio/tr/kilise.mp3' } },

        { id: 112, portuguese: 'Lua',       imageUrl: '/images/aula1/Moon.webp',    translations: { en: 'Moon', es: 'Luna', jp: '月 (tsuki)', fr: 'Lune', de: 'Mond', it: 'Luna', kr: '달 (dal)', ru: 'Луна (Luna)', cn: '月亮 (yuèliàng)', tr: 'Ay' }, 
        audioUrls: { en: '/audio/ingles/aula1/moon.mp3',es: '/audio/es/luna.mp3', jp: '/audio/jp/tsuki.mp3', fr: '/audio/fr/lune.mp3', de: '/audio/de/mond.mp3', it: '/audio/it/luna.mp3', kr: '/audio/kr/dal.mp3', ru: '/audio/ru/luna.mp3', cn: '/audio/cn/yuèliang.mp3', tr: '/audio/tr/ay.mp3' } }
      ]
    },
    {
      id: 2,
      title: "Aula 02: Animais da Quinta",
      thumbnailUrl: "/images/visual/Thumbnail2.webp",
      cards: [
        { id: 113, portuguese: 'Periquito', imageUrl: '/images/aula2/budgie.webp',  translations: { en: 'Budgie', es: 'Periquito', jp: 'インコ (inko)', fr: 'Perruche', de: 'Sittich', it: 'Pappagallino', kr: '잉꼬 (ingkko)', ru: 'Попугай (Popugay)', cn: '长尾小鹦鹉 (chángwěi xiǎo yīngwǔ)', tr: 'Muhabbet kuşu' }, 
        audioUrls: { en: '/audio/ingles/aula2/budgie.mp3',es: '/audio/es/periquito.mp3', jp: '/audio/jp/inko.mp3', fr: '/audio/fr/perruche.mp3', de: '/audio/de/sittich.mp3', it: '/audio/it/pappagallino.mp3', kr: '/audio/kr/ingkko.mp3', ru: '/audio/ru/popugay.mp3', cn: '/audio/cn/yīngwǔ.mp3', tr: '/audio/tr/muhabbet kuşu.mp3' } },

        { id: 114, portuguese: 'Touro',     imageUrl: '/images/aula2/bull.webp',    translations: { en: 'Bull', es: 'Toro', jp: 'トロ (toro)', fr: 'Taureau', de: 'Stier', it: 'Toro', kr: '황소 (hwangso)', ru: 'Бык (Byk)', cn: '公牛 (gōngniú)', tr: 'Boğa' }, 
        audioUrls: { en: '/audio/ingles/aula2/bull.mp3',es: '/audio/es/toro.mp3', jp: '/audio/jp/oushi.mp3', fr: '/audio/fr/taureau.mp3', de: '/audio/de/stier.mp3', it: '/audio/it/toro.mp3', kr: '/audio/kr/hwangso.mp3', ru: '/audio/ru/byk.mp3', cn: '/audio/cn/gōngniú.mp3', tr: '/audio/tr/boğa.mp3' } },

        { id: 115, portuguese: 'Gato',      imageUrl: '/images/aula2/cat.webp',     translations: { en: 'Cat', es: 'Gato', jp: '猫 (neko)', fr: 'Chat', de: 'Katze', it: 'Gatto', kr: '고양이 (goyangi)', ru: 'Кошка (Koshka)', cn: '猫 (māo)', tr: 'Kedi' }, 
        audioUrls: { en: '/audio/ingles/aula2/cat.mp3',es: '/audio/es/gato.mp3', jp: '/audio/jp/neko.mp3', fr: '/audio/fr/chat.mp3', de: '/audio/de/katze.mp3', it: '/audio/it/gatto.mp3', kr: '/audio/kr/goyangi.mp3', ru: '/audio/ru/kot.mp3', cn: '/audio/cn/māo.mp3', tr: '/audio/tr/kedi.mp3' } },

        { id: 116, portuguese: 'Galinha',   imageUrl: '/images/aula2/chicken.webp', translations: { en: 'Chicken', es: 'Pollo', jp: '鶏 (niwatori)', fr: 'Poule', de: 'Huhn', it: 'Gallina', kr: '닭 (dak)', ru: 'Курица (Kuritsa)', cn: '鸡 (jī)', tr: 'Tavuk' }, 
        audioUrls: { en: '/audio/ingles/aula2/chicken.mp3',es: '/audio/es/gallina.mp3', jp: '/audio/jp/niwatori.mp3', fr: '/audio/fr/poule.mp3', de: '/audio/de/huhn.mp3', it: '/audio/it/gallina.mp3', kr: '/audio/kr/dak.mp3', ru: '/audio/ru/kuritsa.mp3', cn: '/audio/cn/jī.mp3', tr: '/audio/tr/tavuk.mp3' } },

        { id: 117, portuguese: 'Vaca',      imageUrl: '/images/aula2/cow.webp',     translations: { en: 'Cow', es: 'Vaca', jp: '雌牛 meushi', fr: 'Vache', de: 'Kuh', it: 'Mucca', kr: '소 (so)', ru: 'Корова (Korova)', cn: '牛 (niú)', tr: 'İnek' }, 
        audioUrls: { en: '/audio/ingles/aula2/cow.mp3',es: '/audio/es/vaca.mp3', jp: '/audio/jp/meushi.mp3', fr: '/audio/fr/vache.mp3', de: '/audio/de/kuh.mp3', it: '/audio/it/mucca.mp3', kr: '/audio/kr/so.mp3', ru: '/audio/ru/korova.mp3', cn: '/audio/cn/niú.mp3', tr: '/audio/tr/inek.mp3' } },

        { id: 118, portuguese: 'Pato',      imageUrl: '/images/aula2/duck.webp',    translations: { en: 'Duck', es: 'Pato', jp: 'アヒル (ahiru)', fr: 'Canard', de: 'Ente', it: 'Anatra', kr: '오리 (ori)', ru: 'Утка (Utka)', cn: '鸭 (yā)', tr: 'Ördek' }, 
        audioUrls: { en: '/audio/ingles/aula2/duck.mp3',es: '/audio/es/pato.mp3', jp: '/audio/jp/ahiru.mp3', fr: '/audio/fr/canard.mp3', de: '/audio/de/ente.mp3', it: '/audio/it/anatra.mp3', kr: '/audio/kr/ori.mp3', ru: '/audio/ru/utka.mp3', cn: '/audio/cn/yā.mp3', tr: '/audio/tr/ördek.mp3' } },

        { id: 119, portuguese: 'Peixe',     imageUrl: '/images/aula2/fish.webp',    translations: { en: 'Fish', es: 'Pez', jp: '魚 (sakana)', fr: 'Poisson', de: 'Fisch', it: 'Pesce', kr: '물고기 (mulgogi)', ru: 'Рыба (Ryba)', cn: '鱼 (yú)', tr: 'Balık' }, 
        audioUrls: { en: '/audio/ingles/aula2/fish.mp3',es: '/audio/es/pez.mp3', jp: '/audio/jp/sakana.mp3', fr: '/audio/fr/poisson.mp3', de: '/audio/de/fisch.mp3', it: '/audio/it/pesce.mp3', kr: '/audio/kr/mulgogi.mp3', ru: '/audio/ru/ryba.mp3', cn: '/audio/cn/yú.mp3', tr: '/audio/tr/balık.mp3' } },

        { id: 120, portuguese: 'Cabra',     imageUrl: '/images/aula2/goat.webp',    translations: { en: 'Goat', es: 'Cabra', jp: 'ヤギ (yagi)', fr: 'Chèvre', de: 'Ziege', it: 'Capra', kr: '염소 (yeomso)', ru: 'Коза (Koza)', cn: '山羊 (shānyáng)', tr: 'Keçi' }, 
        audioUrls: { en: '/audio/ingles/aula2/goat.mp3',es: '/audio/es/cabra.mp3', jp: '/audio/jp/yagi.mp3', fr: '/audio/fr/chèvre.mp3', de: '/audio/de/ziege.mp3', it: '/audio/it/capra.mp3', kr: '/audio/kr/yeomso.mp3', ru: '/audio/ru/koza.mp3', cn: '/audio/cn/shānyáng.mp3', tr: '/audio/tr/keçi.mp3' } },

        { id: 121, portuguese: 'Cavalo',    imageUrl: '/images/aula2/horse.webp',   translations: { en: 'Horse', es: 'Caballo', jp: '馬 (uma)', fr: 'Cheval', de: 'Pferd', it: 'Cavallo', kr: '말 (mal)', ru: 'Лошадь (Loshad)', cn: '马 (mǎ)', tr: 'At' }, 
        audioUrls: { en: '/audio/ingles/aula2/horse.mp3',es: '/audio/es/caballo.mp3', jp: '/audio/jp/uma.mp3', fr: '/audio/fr/cheval.mp3', de: '/audio/de/pferd.mp3', it: '/audio/it/cavallo.mp3', kr: '/audio/kr/mal.mp3', ru: '/audio/ru/loshad.mp3', cn: '/audio/cn/mǎ.mp3', tr: '/audio/tr/at.mp3' } },

        { id: 122, portuguese: 'Porco',     imageUrl: '/images/aula2/pig.webp',     translations: { en: 'Pig', es: 'Cerdo', jp: '豚 (buta)', fr: 'Cochon', de: 'Schwein', it: 'Maiale', kr: '돼지 (dwaeji)', ru: 'Свинья (Svinya)', cn: '猪 (zhū)', tr: 'Domuz' }, 
        audioUrls: { en: '/audio/ingles/aula2/pig.mp3',es: '/audio/es/cerdo.mp3', jp: '/audio/jp/buta.mp3', fr: '/audio/fr/cochon.mp3', de: '/audio/de/schwein.mp3', it: '/audio/it/maiale.mp3', kr: '/audio/kr/dwaeji.mp3', ru: '/audio/ru/svinya.mp3', cn: '/audio/cn/zhū.mp3', tr: '/audio/tr/domuz.mp3' } },

        { id: 123, portuguese: 'Coelho',    imageUrl: '/images/aula2/rabbit.webp',  translations: { en: 'Rabbit', es: 'Conejo', jp: 'ウサギ (usagi)', fr: 'Lapin', de: 'Hase', it: 'Coniglio', kr: '토끼 (tokki)', ru: 'Кролик (Krolik)', cn: '兔子 (tùzi)', tr: 'Tavşan' }, 
        audioUrls: { en: '/audio/ingles/aula2/rabbit.mp3',es: '/audio/es/conejo.mp3', jp: '/audio/jp/usagi.mp3', fr: '/audio/fr/lapin.mp3', de: '/audio/de/hase.mp3', it: '/audio/it/coniglio.mp3', kr: '/audio/kr/tokki.mp3', ru: '/audio/ru/krolik.mp3', cn: '/audio/cn/tùzi.mp3', tr: '/audio/tr/tavşan.mp3' } },

        { id: 124, portuguese: 'Ovelha',    imageUrl: '/images/aula2/sheep.webp',   translations: { en: 'Sheep', es: 'Oveja', jp: '羊 (hitsuji)', fr: 'Mouton', de: 'Schaf', it: 'Pecora', kr: '양 (yang)', ru: 'Овца (Ovtsa)', cn: '羊 (yáng)', tr: 'Koyun' }, 
        audioUrls: { en: '/audio/ingles/aula2/sheep.mp3',es: '/audio/es/oveja.mp3', jp: '/audio/jp/hitsuji.mp3', fr: '/audio/fr/mouton.mp3', de: '/audio/de/schaf.mp3', it: '/audio/it/pecora.mp3', kr: '/audio/kr/yang.mp3', ru: '/audio/ru/ovtsa.mp3', cn: '/audio/cn/yáng.mp3', tr: '/audio/tr/koyun.mp3' } }
      ]
    },
    {
      id: 3,
      title: "Aula 03: Frutas",
      thumbnailUrl: "/images/visual/Thumbnail3.webp",
      cards: [
        { id: 125, portuguese: 'Maçã',      imageUrl: '/images/aula3/apple.webp',      translations: { en: 'Apple', es: 'Manzana', jp: '林檎 (ringo)', fr: 'Pomme', de: 'Apfel', it: 'Mela', kr: '사과 (sagwa)', ru: 'Яблоко (Yabloko)', cn: '苹果 (píngguǒ)', tr: 'Elma' }, 
        audioUrls: { en: '/audio/ingles/aula3/apple.mp3',es: '/audio/es/manzana.mp3', jp: '/audio/jp/ringo.mp3', fr: '/audio/fr/pomme.mp3', de: '/audio/de/apfel.mp3', it: '/audio/it/mela.mp3', kr: '/audio/kr/sagwa.mp3', ru: '/audio/ru/yabloko.mp3', cn: '/audio/cn/píngguǒ.mp3', tr: '/audio/tr/elma.mp3' } },

        { id: 126, portuguese: 'Abacate',   imageUrl: '/images/aula3/avocado.webp',    translations: { en: 'Avocado', es: 'Aguacate', jp: 'アボカド (abokado)', fr: 'Avocat', de: 'Avocado', it: 'Avocado', kr: '아보카도 (abokado)', ru: 'Авокадо (Avokado)', cn: '鳄梨 (èlí)', tr: 'Avokado' }, 
        audioUrls: { en: '/audio/ingles/aula3/avocado.mp3',es: '/audio/es/aguacate.mp3', jp: '/audio/jp/abokado.mp3', fr: '/audio/fr/avocat.mp3', de: '/audio/de/avocado.mp3', it: '/audio/it/avocado.mp3', kr: '/audio/kr/abokado.mp3', ru: '/audio/ru/avokado.mp3', cn: '/audio/cn/èlí.mp3', tr: '/audio/tr/avokado.mp3' } },

        { id: 127, portuguese: 'Coco',      imageUrl: '/images/aula3/coconut.webp',    translations: { en: 'Coconut', es: 'Coco', jp: 'ココナッツ (kokonattsu)', fr: 'Noix de coco', de: 'Kokosnuss', it: 'Noce di cocco', kr: '코코넛 (kokoneot)', ru: 'Кокос (Kokos)', cn: '椰子 (yēzi)', tr: 'Hindistan cevizi' }, 
        audioUrls: { en: '/audio/ingles/aula3/coconut.mp3',es: '/audio/es/coco.mp3', jp: '/audio/jp/kokonattsu.mp3', fr: '/audio/fr/noix de coco.mp3', de: '/audio/de/kokosnuss.mp3', it: '/audio/it/noce di cocco.mp3', kr: '/audio/kr/kokoneot.mp3', ru: '/audio/ru/kokos.mp3', cn: '/audio/cn/yēzi.mp3', tr: '/audio/tr/hindistan cevizi.mp3' } },

        { id: 128, portuguese: 'Uva',       imageUrl: '/images/aula3/grape.webp',      translations: { en: 'Grape', es: 'Uva', jp: '葡萄 (budō)', fr: 'Raisin', de: 'Traube', it: 'Uva', kr: '포도 (podo)', ru: 'Виноград (Vinograd)', cn: '葡萄 (pútao)', tr: 'Üzüm' }, 
        audioUrls: { en: '/audio/ingles/aula3/grape.mp3',es: '/audio/es/uva.mp3', jp: '/audio/jp/budō.mp3', fr: '/audio/fr/raisin.mp3', de: '/audio/de/traube.mp3', it: '/audio/it/uva.mp3', kr: '/audio/kr/podo.mp3', ru: '/audio/ru/vinograd.mp3', cn: '/audio/cn/pútáo.mp3', tr: '/audio/tr/üzüm.mp3' } },

        { id: 129, portuguese: 'Jaca',      imageUrl: '/images/aula3/jackfruit.webp',  translations: { en: 'Jackfruit', es: 'Yaca', jp: 'ジャックフルーツ (jakku furūtsu)', fr: 'Jacque', de: 'Jackfrucht', it: 'Giaca', kr: '잭프루트 (jaekpeuruteu)', ru: 'Джекфрут (Dzhekfrut)', cn: '菠萝蜜 (bōluómì)', tr: 'Jak meyvesi' }, 
        audioUrls: { en: '/audio/ingles/aula3/jackfruit.mp3',es: '/audio/es/yaca.mp3', jp: '/audio/jp/jakkufurūtsu.mp3', fr: '/audio/fr/jacque.mp3', de: '/audio/de/jackfrucht.mp3', it: '/audio/it/jackfruit.mp3', kr: '/audio/kr/jaekpeuruteu.mp3', ru: '/audio/ru/džekfrut.mp3', cn: '/audio/cn/bōluómì.mp3', tr: '/audio/tr/jak meyvesi.mp3' } },

        { id: 130, portuguese: 'Laranja',   imageUrl: '/images/aula3/orange.webp',     translations: { en: 'Orange', es: 'Naranja', jp: 'オレンジ (orenji)', fr: 'Orange', de: 'Orange', it: 'Arancia', kr: '오렌지 (orenji)', ru: 'Апельсин (Apel sin)', cn: '橙子 (chéngzi)', tr: 'Portakal' }, 
        audioUrls: { en: '/audio/ingles/aula3/orange.mp3',es: '/audio/es/naranja.mp3', jp: '/audio/jp/orenji.mp3', fr: '/audio/fr/orange.mp3', de: '/audio/de/orange.mp3', it: '/audio/it/arancia.mp3', kr: '/audio/kr/orenji.mp3', ru: '/audio/ru/apelsin.mp3', cn: '/audio/cn/chéngzi.mp3', tr: '/audio/tr/portakal.mp3' } },

        { id: 131, portuguese: 'Abacaxi',   imageUrl: '/images/aula3/pineapple.webp',  translations: { en: 'Pineapple', es: 'Piña', jp: 'パイナップル (painappuru)', fr: 'Ananas', de: 'Ananas', it: 'Ananas', kr: '파인애플 (painaepeul)', ru: 'Ананас (Ananas)', cn: '菠萝 (bōluó)', tr: 'Ananas' }, 
        audioUrls: { en: '/audio/ingles/aula3/pineapple.mp3',es: '/audio/es/piña.mp3', jp: '/audio/jp/painappuru.mp3', fr: '/audio/fr/ananas.mp3', de: '/audio/de/ananas.mp3', it: '/audio/it/ananas.mp3', kr: '/audio/kr/painaeepeul.mp3', ru: '/audio/ru/ananas.mp3', cn: '/audio/cn/bōluó.mp3', tr: '/audio/tr/ananas.mp3'} },

        { id: 132, portuguese: 'Ameixa',    imageUrl: '/images/aula3/plum.webp',       translations: { en: 'Plum', es: 'Ciruela', jp: 'プラム (puramu)', fr: 'Prune', de: 'Pflaume', it: 'Prugna', kr: '자두 (jadu)', ru: 'Слива (Sliva)', cn: '李子 (lǐzi)', tr: 'Erik' }, 
        audioUrls: { en: '/audio/ingles/aula3/plum.mp3',es: '/audio/es/ciruela.mp3', jp: '/audio/jp/ume.mp3', fr: '/audio/fr/prune.mp3', de: '/audio/de/pflaume.mp3', it: '/audio/it/prugna.mp3', kr: '/audio/kr/jadu.mp3', ru: '/audio/ru/sliva.mp3', cn: '/audio/cn/lǐzi.mp3', tr: '/audio/tr/erik.mp3' } },

        { id: 133, portuguese: 'Graviola',  imageUrl: '/images/aula3/soursop.webp',    translations: { en: 'Soursop', es: 'Guanábana', jp: 'サワーソップ (sawā soppu)', fr: 'Corossol', de: 'Sauersack', it: 'Guanabana', kr: '사워솝 (sawoseop)', ru: 'Сметанное яблоко (Smetannoye yabloko)', cn: '刺果番荔枝 (cìguǒ fānlìzhī)', tr: 'Guanabana' }, 
        audioUrls: { en: '/audio/ingles/aula3/soursop.mp3',es: '/audio/es/guanábana.mp3', jp: '/audio/jp/sawāsoppu.mp3', fr: '/audio/fr/corossol.mp3', de: '/audio/de/sauersack.mp3', it: '/audio/it/guanabana.mp3', kr: '/audio/kr/sawoseop.mp3', ru: '/audio/ru/guanabana.mp3', cn: '/audio/cn/cìguǒ fānlìzhī.mp3', tr: '/audio/tr/guanabana.mp3' } },

        { id: 134, portuguese: 'Carambola', imageUrl: '/images/aula3/starfruit.webp',  translations: { en: 'Starfruit', es: 'Carambola', jp: 'スターフルーツ (sutā furūtsu)', fr: 'Carambole', de: 'Sternfrucht', it: 'Carambola', kr: '스타프루트 (seutapeuruteu)', ru: 'Карамбола (Karambola)', cn: '杨桃 (yángtáo)', tr: 'Yıldız meyvesi' }, 
        audioUrls: { en: '/audio/ingles/aula3/starfruit.mp3',es: '/audio/es/carambola.mp3', jp: '/audio/jp/sutāfurūtsu.mp3', fr: '/audio/fr/carambole.mp3', de: '/audio/de/sternfrucht.mp3', it: '/audio/it/carambola.mp3', kr: '/audio/kr/seutapeuruteu.mp3', ru: '/audio/ru/karambola.mp3', cn: '/audio/cn/yángtáo.mp3', tr: '/audio/tr/yıldız meyvesi.mp3' } },

        { id: 135, portuguese: 'Morango',   imageUrl: '/images/aula3/strawberry.webp', translations: { en: 'Strawberry', es: 'Fresa', jp: 'イチゴ (ichigo)', fr: 'Fraise', de: 'Erdbeere', it: 'Fragola', kr: '딸기 (ttalgi)', ru: 'Клубника (Klubnika)', cn: '草莓 (cǎoméi)', tr: 'Çilek' }, 
        audioUrls: { en: '/audio/ingles/aula3/strawberry.mp3',es: '/audio/es/fresa.mp3', jp: '/audio/jp/ichigo.mp3', fr: '/audio/fr/fraise.mp3', de: '/audio/de/erdbeere.mp3', it: '/audio/it/fragola.mp3', kr: '/audio/kr/ttalgi.mp3', ru: '/audio/ru/klubnika.mp3', cn: '/audio/cn/cǎoméi.mp3', tr: '/audio/tr/çilek.mp3' } },

        { id: 136, portuguese: 'Melancia',  imageUrl: '/images/aula3/watermelon.webp', translations: { en: 'Watermelon', es: 'Sandía', jp: 'スイカ (suika)', fr: 'Pastèque', de: 'Wassermelone', it: 'Anguria', kr: '수박 (subak)', ru: 'Арбуз (Arbuz)', cn: '西瓜 (xīguā)', tr: 'Karpuz' }, 
        audioUrls: { en: '/audio/ingles/aula3/watermelon.mp3',es: '/audio/es/sandía.mp3', jp: '/audio/jp/suika.mp3', fr: '/audio/fr/pastèque.mp3', de: '/audio/de/wassermelone.mp3', it: '/audio/it/anguria.mp3', kr: '/audio/kr/subak.mp3', ru: '/audio/ru/arbuz.mp3', cn: '/audio/cn/xīguā.mp3', tr: '/audio/tr/karpuz.mp3' } }
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
