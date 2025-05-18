const menuData = [
    // sasiのカテゴリー
    { id: 1, nameKey: 'sasimori', price: 1500, image: '/images/susi/sasimori.jpg', category: 'Sasimi' },
    { id: 2, nameKey: 'taisasi', price: 1200, image: '/images/susi/taisasi.jpg', category: 'Sasimi' },
    { id: 3, nameKey: 'gomakanpati', price: 1300, image: '/images/susi/gomakanpati.jpg', category: 'Sasimi' },
    { id: 4, nameKey: 'sa-mon', price: 1100, image: '/images/susi/sa-mon.jpg', category: 'Sasimi' },

    // small_plateのカテゴリー
    { id: 5, nameKey: 'edamame', price: 400, image: '/images/small_plate/edamame.jpg', category: 'Small_plate' },
    { id: 6, nameKey: 'onion', price: 300, image: '/images/small_plate/onion.jpg', category: 'Small_plate' },
    { id: 7, nameKey: 'kyu-rigoma', price: 350, image: '/images/small_plate/kyu-rigoma.jpg', category: 'Small_plate' },
    { id: 8, nameKey: 'ikanosiokara', price: 450, image: '/images/small_plate/ikanosiokara.jpg', category: 'Small_plate' },
    { id: 9, nameKey: 'kimuti', price: 400, image: '/images/small_plate/kimuti.jpg', category: 'Small_plate' },
    { id: 10, nameKey: 'hotaruika', price: 500, image: '/images/small_plate/hotaruika.jpg', category: 'Small_plate' },
    { id: 11, nameKey: 'tyanzya', price: 450, image: '/images/small_plate/tyanzya.jpg', category: 'Small_plate' },
    { id: 12, nameKey: 'eihire', price: 600, image: '/images/small_plate/eihire.jpg', category: 'Small_plate' },
    { id: 13, nameKey: 'tomasura', price: 300, image: '/images/small_plate/tomasura.jpg', category: 'Small_plate' },
    { id: 14, nameKey: 'kyuuriume', price: 350, image: '/images/small_plate/kyuuriume.jpg', category: 'Small_plate' },
    { id: 15, nameKey: 'kuriti-wasa', price: 500, image: '/images/small_plate/kuriti-wasa.jpg', category: 'Small_plate' },
    { id: 16, nameKey: 'kanimiso', price: 550, image: '/images/small_plate/kanimiso.jpg', category: 'Small_plate' },
    { id: 17, nameKey: 'takowasa', price: 400, image: '/images/small_plate/takowasa.jpg', category: 'Small_plate' },
    { id: 18, nameKey: 'taiwata', price: 450, image: '/images/small_plate/taiwata.jpg', category: 'Small_plate' },
    { id: 19, nameKey: 'yamaimotansaku', price: 350, image: '/images/small_plate/yamaimotansaku.jpg', category: 'Small_plate' },
    // Saladのカテゴリー
    { id: 20, nameKey: 'yasaisalada', price: 800, image: '/images/salad/yasaisalada.jpg', category: 'Salad' },
    { id: 21, nameKey: 'zyakosalada', price: 900, image: '/images/salad/zyakosalada.jpg', category: 'Salad' },
    { id: 22, nameKey: 'namahamusalada', price: 1000, image: '/images/salad/namahamusalada.jpg', category: 'Salad' },
    { id: 23, nameKey: 'aigamosalada', price: 1100, image: '/images/salad/aigamosalada.jpg', category: 'Salad' },
    { id: 24, nameKey: 'okurasalada', price: 950, image: '/images/salad/okurasalada.jpg', category: 'Salad' },
    { id: 25, nameKey: 'kaisensalada', price: 1200, image: '/images/salad/kaisensalada.jpg', category: 'Salad' },

    // Createのカテゴリー
    { id: 26, nameKey: 'supamuiriniratama', price: 850, image: '/images/create/supamuiriniratama.jpg', category: 'Create' },
    { id: 27, nameKey: 'namahamunamaharumaki', price: 950, image: '/images/create/namahamunamaharumaki.jpg', category: 'Create' },
    { id: 28, nameKey: 'ebiabokado', price: 1000, image: '/images/create/ebiabokado.jpg', category: 'Create' },
    { id: 29, nameKey: 'kaisennamaharumaki', price: 1100, image: '/images/create/kaisennamaharumaki.jpg', category: 'Create' },
    { id: 30, nameKey: 'takokotyuzyan', price: 900, image: '/images/create/takokootyuzyan.jpg', category: 'Create' },
    { id: 31, nameKey: 'aigamoro-suto', price: 1200, image: '/images/create/aigamoro-suto.jpg', category: 'Create' },
    { id: 32, nameKey: 'tomaabo', price: 950, image: '/images/create/tomaabo.jpg', category: 'Create' },
    { id: 33, nameKey: 'karupattyon', price: 1300, image: '/images/create/karupattyon.jpg', category: 'Create' },
    { id: 34, nameKey: 'wahhuupasuta', price: 1300, image: '/images/Create/.png', category: 'Create' },
    { id: 35, nameKey: 'ebitiri', price: 1300, image: '/images/Create/.png', category: 'Create' },
    { id: 36, nameKey: 'amadaiaosa', price: 1300, image: '/images/Create/.png', category: 'Create' },
    { id: 37, nameKey: 'kimutige', price: 1300, image: '/images/Create/.png', category: 'Create' },
    { id: 38, nameKey: 'torimomo', price: 1300, image: '/images/Create/.png', category: 'Create' },
    { id: 39, nameKey: 'ahi-zyo', price: 1300, image: '/images/Create/.png', category: 'Create' },
    { id: 40, nameKey: 'sawarasakamusi', price: 1300, image: '/images/Create/.png', category: 'Create' },
    { id: 41, nameKey: 'taimentai', price: 1300, image: '/images/Create/.png', category: 'Create' },
    { id: 42, nameKey: 'asarinosakamusi', price: 1300, image: '/images/Create/.png', category: 'Create' },
    { id: 43, nameKey: 'yamaimokaniankake', price: 1300, image: '/images/Create/.png', category: 'Create' },

    // Grilledのカテゴリー
    { id: 44, nameKey: 'hanba-gu', price: 1100, image: '/images/grilled/.png', category: 'Grilled' },
    { id: 45, nameKey: 'gyuhattu', price: 1100, image: '/images/grilled/.png', category: 'Grilled' },
    { id: 46, nameKey: 'gyufile', price: 1100, image: '/images/grilled/.png', category: 'Grilled' },
    { id: 47, nameKey: 'kousiro-su', price: 1100, image: '/images/grilled/.png', category: 'Grilled' },
    { id: 48, nameKey: 'sa-roin', price: 1100, image: '/images/grilled/.png', category: 'Grilled' },
    { id: 49, nameKey: 'sunazurisioitame', price: 1100, image: '/images/grilled/.png', category: 'Grilled' },
    { id: 50, nameKey: 'yamaiomosute-ki', price: 1100, image: '/images/grilled/.png', category: 'Grilled' },
    { id: 51, nameKey: 'toritukune', price: 1100, image: '/images/grilled/.png', category: 'Grilled' },
    { id: 52, nameKey: 'kaisenguratan', price: 1100, image: '/images/grilled/.png', category: 'Grilled' },
    { id: 53, nameKey: 'ro-suguriru', price: 1100, image: '/images/grilled/.png', category: 'Grilled' },
    { id: 54, nameKey: 'amadaisote-', price: 1100, image: '/images/grilled/.png', category: 'Grilled' },
    { id: 55, nameKey: 'ooebisioyaki', price: 1100, image: '/images/grilled/.png', category: 'Grilled' },
    { id: 56, nameKey: 'dasimaki', price: 1100, image: '/images/grilled/.png', category: 'Grilled' },


    // Friedのカテゴリー
    { id: 57, nameKey: 'atuage', price: 1300, image: '/images/Fried/.png', category: 'Fried' },
    { id: 58, nameKey: 'nikumakiume', price: 1300, image: '/images/Fried/.png', category: 'Fried' },
    { id: 59, nameKey: 'kaniharumaki', price: 1300, image: '/images/Fried/.png', category: 'Fried' },
    { id: 60, nameKey: 'sunazurikaraage', price: 1300, image: '/images/Fried/.png', category: 'Fried' },
    { id: 61, nameKey: 'kuritiisobe', price: 1300, image: '/images/Fried/.png', category: 'Fried' },
    { id: 62, nameKey: 'maguroreakatu', price: 1300, image: '/images/Fried/.png', category: 'Fried' },
    { id: 63, nameKey: 'harihari', price: 1300, image: '/images/Fried/.png', category: 'Fried' },
    { id: 64, nameKey: 'GS', price: 1300, image: '/images/Fried/.png', category: 'Fried' },
    { id: 65, nameKey: 'karaage', price: 1300, image: '/images/Fried/.png', category: 'Fried' },

    // Rice&Soupのカテゴリー
    { id: 66, nameKey: 'umeonigiri', price: 1300, image: '/images/Fried/.png', category: 'Rice&Soup' },
    { id: 67, nameKey: 'mentaionigiri', price: 1300, image: '/images/Fried/.png', category: 'Rice&Soup' },
    { id: 68, nameKey: 'sakeonigiri', price: 1300, image: '/images/Fried/.png', category: 'Rice&Soup' },
    { id: 69, nameKey: 'kaisenonigiri', price: 1300, image: '/images/Fried/.png', category: 'Rice&Soup' },
    { id: 70, nameKey: 'umetya', price: 1300, image: '/images/Fried/.png', category: 'Rice&Soup' },
    { id: 71, nameKey: 'mentaitya', price: 1300, image: '/images/Fried/.png', category: 'Rice&Soup' },
    { id: 72, nameKey: 'saketya', price: 1300, image: '/images/Fried/.png', category: 'Rice&Soup' },
    { id: 73, nameKey: 'aosamiso', price: 1300, image: '/images/Fried/.png', category: 'Rice&Soup' },
    { id: 74, nameKey: 'asarimiso', price: 1300, image: '/images/Fried/.png', category: 'Rice&Soup' },
    { id: 75, nameKey: 'namekomiso', price: 1300, image: '/images/Fried/.png', category: 'Rice&Soup' },

    // Sweetsのカテゴリー
    { id: 76, nameKey: 'kinakomoti', price: 1300, image: '/images/Fried/.png', category: 'Sweets' },
    { id: 77, nameKey: 'pancake', price: 1300, image: '/images/Fried/.png', category: 'Sweets' },
    { id: 78, nameKey: 'mattyaice', price: 1300, image: '/images/Fried/.png', category: 'Sweets' },
    { id: 79, nameKey: 'banilaice', price: 1300, image: '/images/Fried/.png', category: 'Sweets' },
    { id: 79, nameKey: 'yuzusya-betto', price: 1300, image: '/images/Fried/.png', category: 'Sweets' }

];

export default menuData;