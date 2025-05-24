const menuData = [
    // sasiのカテゴリー
    { id: 1, nameKey: 'sasimori', price: 1500, image: '/images/susi/sasimori.jpg', category: 'Sasimi' },
    { id: 2, nameKey: 'taisasi', price: 1200, image: '/images/susi/taisasi.jpg', category: 'Sasimi' },
    { id: 3, nameKey: 'gomakanpati', price: 1300, image: '/images/susi/gomakanpati.jpg', category: 'Sasimi' },
    { id: 4, nameKey: 'sa-mon', price: 1100, image: '/images/susi/sa-mon.jpg', category: 'Sasimi' },

    // small_plateのカテゴリー
    { id: 5, nameKey: 'edamame', price: 350, image: '/images/small_plate/edamame.jpg', category: 'Small_plate' },
    { id: 6, nameKey: 'onion', price: 300, image: '/images/small_plate/onion.jpg', category: 'Small_plate' },
    { id: 7, nameKey: 'kyu-rigoma', price: 350, image: '/images/small_plate/kyu-rigoma.jpg', category: 'Small_plate' },
    { id: 8, nameKey: 'ikanosiokara', price: 400, image: '/images/small_plate/ikanosiokara.jpg', category: 'Small_plate' },
    { id: 9, nameKey: 'kimuti', price: 400, image: '/images/small_plate/kimuti.jpg', category: 'Small_plate' },
    { id: 10, nameKey: 'hotaruika', price: 550, image: '/images/small_plate/hotaruika.jpg', category: 'Small_plate' },
    { id: 11, nameKey: 'tyanzya', price: 400, image: '/images/small_plate/tyanzya.jpg', category: 'Small_plate' },
    { id: 12, nameKey: 'eihire', price: 600, image: '/images/small_plate/eihire.jpg', category: 'Small_plate' },
    { id: 13, nameKey: 'tomasura', price: 450, image: '/images/small_plate/tomasura.jpg', category: 'Small_plate' },
    { id: 14, nameKey: 'kyuuriume', price: 500, image: '/images/small_plate/kyuuriume.jpg', category: 'Small_plate' },
    { id: 15, nameKey: 'kuriti-wasa', price: 500, image: '/images/small_plate/kuriti-wasa.jpg', category: 'Small_plate' },
    { id: 16, nameKey: 'kanimiso', price: 550, image: '/images/small_plate/kanimiso.jpg', category: 'Small_plate' },
    { id: 17, nameKey: 'takowasa', price: 400, image: '/images/small_plate/takowasa.jpg', category: 'Small_plate' },
    { id: 18, nameKey: 'taiwata', price: 550, image: '/images/small_plate/taiwata.jpg', category: 'Small_plate' },
    { id: 19, nameKey: 'yamaimotansaku', price: 550, image: '/images/small_plate/yamaimotansaku.jpg', category: 'Small_plate' },

    // Saladのカテゴリー
    { id: 20, nameKey: 'yasaisalada', price: 600, image: '/images/salada/yasaisalada.jpg', category: 'Salada' },
    { id: 21, nameKey: 'zyakosalada', price: 900, image: '/images/salada/zyakosalada.jpg', category: 'Salada' },
    { id: 22, nameKey: 'namahamusalada', price: 900, image: '/images/salada/namahamusalada.jpg', category: 'Salada' },
    { id: 23, nameKey: 'aigamosalada', price: 950, image: '/images/salada/aigamosalada.jpg', category: 'Salada' },
    { id: 24, nameKey: 'okurasalada', price: 9000, image: '/images/salada/okurasalada.jpg', category: 'Salada' },
    { id: 25, nameKey: 'kaisensalada', price: 1400, image: '/images/salada/kaisensalada.jpg', category: 'Salada' },

    // Createのカテゴリー
    { id: 26, nameKey: 'supamuiriniratama', price: 600, image: '/images/create/supamuiriniratama.jpg', category: 'Create' },
    { id: 27, nameKey: 'namahamunamaharumaki', price: 850, image: '/images/create/namahamunamaharumaki.jpg', category: 'Create' },
    { id: 28, nameKey: 'ebiabokado', price: 750, image: '/images/create/ebiabokado.jpg', category: 'Create' },
    { id: 29, nameKey: 'kaisennamaharumaki', price: 850, image: '/images/create/kaisennamaharumaki.jpg', category: 'Create' },
    { id: 30, nameKey: 'takokotyuzyan', price: 750, image: '/images/create/takokotyuzyan.jpg', category: 'Create' },
    { id: 31, nameKey: 'aigamoro-suto', price: 950, image: '/images/create/aigamoro-suto.jpg', category: 'Create' },
    { id: 32, nameKey: 'tomaabo', price: 850, image: '/images/create/tomaabo.jpg', category: 'Create' },
    { id: 33, nameKey: 'karupattyon', price: 1100, image: '/images/create/karupattyon.jpg', category: 'Create' },
    { id: 34, nameKey: 'wahhuupasuta', price: 1600, image: '/images/create/wahhuupasuta.jpg', category: 'Create' },
    { id: 35, nameKey: 'ebitiri', price: 950, image: '/images/create/ebitiri.jpg', category: 'Create' },
    { id: 36, nameKey: 'amadaiaosa', price: 900, image: '/images/create/amadaiaosa.jpg', category: 'Create' },
    { id: 37, nameKey: 'kimutige', price: 900, image: '/images/create/kimutige.jpg', category: 'Create' },
    { id: 38, nameKey: 'torimomo', price: 850, image: '/images/create/torimomo.jpg', category: 'Create' },
    { id: 39, nameKey: 'ahi-zyo', price: 130000, image: '/images/create/ahi-zyo.jpg', category: 'Create' },
    { id: 40, nameKey: 'sawarasakamusi', price: 950, image: '/images/create/sawarasakamusi.jpg', category: 'Create' },
    { id: 41, nameKey: 'taimentai', price: 850, image: '/images/create/taimentai.jpg', category: 'Create' },
    { id: 42, nameKey: 'asarinosakamusi', price: 800, image: '/images/create/asarinosakamusi.jpg', category: 'Create' },
    { id: 43, nameKey: 'yamaimokaniankake', price: 750, image: '/images/create/yamaimokaniankake.jpg', category: 'Create' },

    // Grilledのカテゴリー
    { id: 44, nameKey: 'hanba-gu', price: 1100, image: '/images/grilled/hanba-gu.jpg', category: 'Grilled' },
    { id: 45, nameKey: 'gyuhattu', price: 900, image: '/images/grilled/gyuhattu.jpg', category: 'Grilled' },
    { id: 46, nameKey: 'gyufile', price: 2200, image: '/images/grilled/gyufile.jpg', category: 'Grilled' },
    { id: 47, nameKey: 'kousiro-su', price: 1700, image: '/images/grilled/kousiro-su.jpg', category: 'Grilled' },
    { id: 48, nameKey: 'sa-roin', price: 2800, image: '/images/grilled/sa-roin.jpg', category: 'Grilled' },
    { id: 48.1, nameKey: 'sagari-mas', price: 1200, image: '/images/grilled/sagari-mas.jpg', category: 'Grilled' },
    { id: 49, nameKey: 'sunazurisioitame', price: 700, image: '/images/grilled/sunazurisioitame.jpg', category: 'Grilled' },
    { id: 50, nameKey: 'yamaiomosute-ki', price: 650, image: '/images/grilled/yamaiomosute-ki.jpg', category: 'Grilled' },
    { id: 51, nameKey: 'toritukune', price: 750, image: '/images/grilled/toritukune.jpg', category: 'Grilled' },
    { id: 52, nameKey: 'kaisenguratan', price: 950, image: '/images/grilled/kaisenguratan.jpg', category: 'Grilled' },
    { id: 53, nameKey: 'ro-suguriru', price: 950, image: '/images/grilled/ro-suguriru.jpg', category: 'Grilled' },
    { id: 54, nameKey: 'amadaisote-', price: 900, image: '/images/grilled/amadaisote-.jpg', category: 'Grilled' },
    { id: 55, nameKey: 'ooebisioyaki', price: 1400, image: '/images/grilled/ooebisioyaki.jpg', category: 'Grilled' },
    { id: 56, nameKey: 'dasimaki', price: 650, image: '/images/grilled/dasimaki.jpg', category: 'Grilled' },


    // Friedのカテゴリー
    { id: 57, nameKey: 'atuage', price: 650, image: '/images/fried/atuage.jpg', category: 'Fried' },
    { id: 58, nameKey: 'nikumakiume', price: 900, image: '/images/fried/nikumakiume.jpg', category: 'Fried' },
    { id: 59, nameKey: 'kaniharumaki', price: 800, image: '/images/fried/kaniharumaki.jpg', category: 'Fried' },
    { id: 60, nameKey: 'sunazurikaraage', price: 650, image: '/images/fried/sunazurikaraage.jpg', category: 'Fried' },
    { id: 61, nameKey: 'kuritiisobe', price: 650, image: '/images/fried/kuritiisobe.jpg', category: 'Fried' },
    { id: 62, nameKey: 'maguroreakatu', price: 1400, image: '/images/fried/maguroreakatu.jpg', category: 'Fried' },
    { id: 63, nameKey: 'harihari', price: 550, image: '/images/fried/harihari.jpg', category: 'Fried' },
    { id: 64, nameKey: 'GS', price: 550, image: '/images/fried/GS.jpg', category: 'Fried' },
    { id: 65, nameKey: 'karaage', price: 7500, image: '/images/fried/karaage.jpg', category: 'Fried' },

    // Rice&Soupのカテゴリー

    { id: 68, nameKey: 'onigiri', price: 350, image: '/images/rice&soup/sakeonigiri.jpg', category: 'Rice/Soup' },
    { id: 69, nameKey: 'kaisenonigiri', price: 600, image: '/images/rice&soup/kaisenonigiri.jpg', category: 'Rice/Soup' },
    { id: 70, nameKey: 'Ochazuke', price: 700, image: '/images/rice&soup/umetya.jpg', category: 'Rice/Soup' },
    { id: 73, nameKey: 'zousui', price: 750, image: '/images/rice&soup/kanizousui.jpg', category: 'Rice/Soup' },
    { id: 73.1, nameKey: 'torizousui', price: 750, image: '/images/rice&soup/torizousui.jpg', category: 'Rice/Soup' },
    { id: 75, nameKey: 'oyakodon', price: 750, image: '/images/rice&soup/oyakodon.jpg', category: 'Rice/Soup' },
    { id: 78, nameKey: 'misosoup', price: 400, image: '/images/rice&soup/namekomiso.jpg', category: 'Rice/Soup' },


    // Sweetsのカテゴリー
    { id: 79, nameKey: 'kinakomoti', price: 350, image: '/images/sweets/kinakomoti.jpg', category: 'Sweets' },
    { id: 80, nameKey: 'ice', price: 300, image: '/images/sweets/ice.jpg', category: 'Sweets' },
    { id: 81, nameKey: 'pancake', price: 600, image: '/images/sweets/pancake.jpg', category: 'Sweets' }

];

export default menuData;