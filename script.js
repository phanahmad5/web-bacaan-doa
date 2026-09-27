/* ============================================================
   TAWASUL NŪR - Script Utama PWA
   ============================================================ */

'use strict';

/* ========== DATA TAWASUL ========== */
const tawasulData = [
  {
    title: "Tawasul Pertama",
    arab: "إِلَى حَضْرَةِ النَّبِيِّ الْمُصْطَفَى رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَآلِهِ وَأَصْحَابِهِ وَأَزْوَاجِهِ وَذُرِّيَّاتِهِ أَجْمَعِينَ شَيْءٌ لِلَّهِ لَهُمُ الْفَاتِحَةُ",
    latin: "Ilaa hadhratin-nabiyyil mushthafaa rasuulillaahi shallallaahu 'alayhi wasallama wa-aalihi wa-ashhaabihi wa-azwaajihi wa-dzurriyyaatihi ajma'iina syai'ul lillaahi lahumul-faatihah."
  },
  {
    title: "Tawasul Kedua",
    arab: "ثُمَّ إِلَى حَضْرَةِ إِخْوَانِهِ مِنَ الْأَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَالْأَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ وَالتَّابِعِيْنَ وَالْعُلَمَاءِ الْعَامِلِيْنَ وَالْمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَجَمِيْعِ الْمَلَائِكَةِ الْمُقَرَّبِيْنَ، خُصُوْصًا إِلَى سَيِّدِنَا الشَّيْخِ عَبْدِ الْقَادِرِ الْجِيْلَانِي وَخُصُوْصًا إِلَى مُؤَسِّسِيْ جَمْعِيَّةِ نَهْضَةِ الْعُلَمَاءِ الْفَاتِحَةُ",
    latin: "Tsumma ilaa hadhroti ikhwaanihi minal anbiyaa'i wal mursaliina wal awliyaa'i wasy-syuhadaa'i wash-shaalihiina wash-shahaabati wat-taabi'iina wal 'ulamaail 'aamilina wal mushannifina al-mukhlishiina wa jami'il malaa'ikatil muqarrabiina, khushuushan ilaa sayyidinasy-syaikh 'abdil qaadiri al-jiilanii... al-Faatihah."
  },
  {
    title: "Tawasul Ketiga",
    arab: "ثُمَّ إِلَى جَمِيعِ أَهْلِ الْقُبُورِ مِنَ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ مِنْ مَشَارِقِ الْأَرْضِ إِلَى مَغَارِبِهَا بَرِّهَا وَبَحْرِهَا خُصُوصًا إِلَى آبَائِنَا وَأُمَّهَاتِنَا وَأَجْدَادِنَا وَمَشَايِخِنَا وَأَسَاتِذَتِنَا وَلِمَنْ أَحْسَنَ إِلَيْنَا الْفَاتِحَةُ",
    latin: "Tsumma ilaa jamii'i ahlil quburi minal muslimiina wal muslimaat wal mu'miniina wal mu'minaat min masyaariqil ardhi ilaa maghaaribihaa barrihaa wa bahrihaa, khushuushan ilaa aabaainaa wa ummahaatinaa wa ajdaadinaa wa masyaayikhinaa wa asaatidzinaaa wa liman ahsana ilainaal-Faatihah."
  },
  {
    title: "Tawasul Keempat",
    arab: "ثُمَّ إِلَى جَمِيعِ أَهْلِ الْقُبُورِ مِمَّنْ ذُكِرَتْ أَسْمَاؤُهُمْ فِي هَذِهِ الرِّسَالَةِ رَحِمَهُمُ اللَّهُ وَغَفَرَ لَهُمْ الْفَاتِحَةُ",
    latin: "Tsumma ilaa jamii'i ahlil qubuuri mimman dzukirat asmaa'uhum fii haadzihir risaalati, rahimahumullaahu wa ghafara lahum, al-Faatihah."
  },
  {
    title: "Bacaan Ayat & Dzikir",
    arab: `بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
قُلْ هُوَ اللّٰهُ اَحَدٌ ۝ اَللّٰهُ الصَّمَدُ ۝
لَمْ يَلِدْ وَلَمْ يُوْلَدْ ۝ وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ

لَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ

قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝
وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفّٰثٰتِ فِى الْعُقَدِ ۝
وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ

لَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ

قُلْ اَعُوْذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝
اِلٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝
الَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ`,
    latin: "Bismillaahir rahmaanir rahiim. Qul huwallaahu ahad. Allaahush-shamad. Lam yalid wa lam yuulad. Wa lam yakun lahu kufuwan ahad. (Al-Ikhlas) | Qul a'uudzu bi rabbil falaq... (Al-Falaq) | Qul a'uudzu bi rabbin naas... (An-Naas)"
  },
  {
    title: "Ayat Kursi & Doa Akhir Al-Baqarah",
    arab: `اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ
لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌ
لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ
مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖ
يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْ
وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَ
وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَ
وَلَا يَـُٔوْدُهٗ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيْمُ`,
    latin: "Allaahu laa ilaaha illaa huu, al-hayyul qayyuum. Laa ta'khudzuhuu sinatuw wa laa nawm, lahuu maa fis-samaawaati wa maa fil ardh, man dzal-ladzii yasyfa'u 'indahuu illaa bi-idznih..."
  },
  {
    title: "Shalawat & Istighfar",
    arab: `إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ
يَا أَيُّهَا الَّذِيْنَ أٰمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًا

اَللّٰهُمَّ صَلِّ أَفْضَلَ الصَّلَاةِ عَلَى أَسْعَدِ مَخْلُوْقَاتِكَ
نُوْرِ الْهُدَى سَيِّدِنَا مُحَمَّدٍ
وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلِّمْ

حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيْلُ
نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرُ

أَسْتَغْفِرُ اللهَ الْعَظِيْمَ × ٣`,
    latin: "Innallaaha wa malaa-ikatahu yushalluna 'alan-nabiyy. Yaa ayyuhal-ladziina aamanuu shalluu 'alayhi wa sallimuu tasliimaa. Allaahumma shalli afdhalash-shalaati 'alaa as'adi makhluu-qaatika nuural-hudaa sayyidinaa Muhammad..."
  },
  {
    title: "Doa Penutup (1) - Pembuka",
    arab: `أَعُوْذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ
حَمْدَ الشَّاكِرِيْنَ حَمْدَ النَّاعِمِيْنَ
حَمْدًا يُّوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيْدَهُ
يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِيْ
لِجَلَالِ وَجْهِكَ وَعَظِيْمِ سُلْطَانِكَ`,
    latin: "A'uudzu billaahi minasy-syaythaanir rajiim. Bismillaahir-rahmaanir-rahiim. Alhamdulillaahi rabbil 'aalamiin, hamdasy-syaakiriin, hamdan naa'imiin, hamday-yuwaafii ni'amahu wa yukaafi'u maziidah. Yaa rabbanaa lakal hamdu kamaa yanbaghii lijalaali wajhika wa 'azhiimi sulthaanik."
  },
  {
    title: "Doa Penutup (2) - Shalawat & Permohonan",
    arab: `اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ
صَلَاةً تُنْجِيْنَا بِهَا مِنْ جَمِيْعِ الْأَهْوَالِ وَالْاٰفَاتِ
وَتَقْضِيْ لَنَا بِهَا جَمِيعَ الْحَاجَاتِ
وَتُطَهِّرُنَا بِهَا مِنْ جَمِيْعِ السَّيِّئَاتِ
وَتَرْفَعُنَا بِهَا عِنْدَكَ أَعْلَى الدَّرَجَاتِ
وَتُبَلِّغُنَا بِهَا أَقْصَى الْغَايَاتِ
مِنْ جَمِيْعِ الْخَيْرَاتِ فِى الْحَيَاةِ وَبَعْدَ الْمَمَاتِ`,
    latin: "Allaahumma shalli 'alaa sayyidinaa Muhammad, shalaatay-tunjinaa bihaa min jamii'il ahwaali wal aafaat, wa taqdhii lanaa bihaa jamii'al haajaat, wa tuthahhirunaa bihaa min jamii'is-sayyi'aat, wa tarfa'unaa bihaa 'indaka a'lad-darajaat..."
  },
  {
    title: "Doa Penutup (3) - Permohonan & Hadiah",
    arab: `اَللّٰهُمَّ تَقَبَّلْ وَأَوْصِلْ ثَوَابَ مَا قَرَاْنَاهُ
مِنَ الْقُرْآنِ الْعَظِيْمِ وَمَا هَلَّلْنَا وَمَا سَبَّحْنَا
وَمَا اسْتَغْفَرْنَا وَمَا صَلَّيْنَا عَلَى سَيِّدِنَا مُحَمَّدٍ
هَدِيَّةً وَاصِلَةً وَرَحْمَةً نَازِلَةً وَبَرَكَةً شَامِلَةً

رَبَّنَا اٰتِنَا فِي الدُّنْيَا حَسَنَةً
وَّفِي الْآخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ

سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَ
وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ
وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَلَمِيْنَ ۝ اَلْفَاتِحَة`,
    latin: "Allaahumma taqabbal wa awshil tsawaaba maa qara'naahu minal qur'aanil 'azhiim wa maa hallalnaa wa maa sabbahnaa wa maastaghfarnaa wa maa shallaynaa 'alaa sayyidinaa Muhammad, hadiyyataw-waashilah, wa rahmataw-naazilah, wa barakatasy-syaamilah..."
  }
];

/* ========== DATA DOA ========== */
const doaData = [
  {
    id: 'doa-selamat',
    title: "Doa Selamat",
    tag: "Harian",
    kategori: "harian",
    icon: "🛡️",
    iconBg: "linear-gradient(135deg, #1a5e35, #2d8a54)",
    arab: "اَللّٰهُمَّ إِنَّا نَسْأَلُكَ سَلَامَةً فِي الدِّينِ، وَعَافِيَةً فِي الْجَسَدِ، وَزِيَادَةً فِي الْعِلْمِ، وَبَرَكَةً فِي الرِّزْقِ، وَتَوْبَةً قَبْلَ الْمَوْتِ، وَرَحْمَةً عِنْدَ الْمَوْتِ، وَمَغْفِرَةً بَعْدَ الْمَوْتِ",
    latin: "Allaahumma innaa nas'aluka salaamatan fid-diin, wa 'aafiyatan fil jasad, wa ziyaadatan fil 'ilm, wa barakatan fir-rizq, wa tawbatan qablal mawt, wa rahmatan 'indal mawt, wa maghfiratan ba'dal mawt.",
    arti: "Ya Allah, sesungguhnya kami memohon kepada-Mu keselamatan dalam agama, kesehatan pada badan, tambahan ilmu, keberkahan dalam rezeki, taubat sebelum mati, rahmat ketika mati, dan ampunan sesudah mati.",
    faedah: "Doa ini sangat dianjurkan dibaca setiap hari untuk memohon perlindungan Allah dalam segala aspek kehidupan. Diriwayatkan dari berbagai sumber hadits yang sahih."
  },
  {
    id: 'doa-orang-tua',
    title: "Doa untuk Orang Tua",
    tag: "Harian",
    kategori: "harian",
    icon: "❤️",
    iconBg: "linear-gradient(135deg, #8b1a4a, #c4306a)",
    arab: "رَبِّ اغْفِرْ لِيْ وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِيْ صَغِيْرًا",
    latin: "Rabbighfir lii wa liwalidayya warhamhumaa kamaa rabbayaanii shaghiiraa.",
    arti: "Ya Tuhanku, ampunilah aku dan kedua orang tuaku, dan sayangilah mereka sebagaimana mereka menyayangi aku di waktu kecil.",
    faedah: "Doa ini termaktub dalam Al-Qur'an Surah Al-Isra: 24. Dianjurkan dibaca minimal setelah setiap shalat fardhu sebagai bentuk bakti kepada orang tua."
  },
  {
    id: 'doa-pagi',
    title: "Doa Pagi Hari (Dzikir Pagi)",
    tag: "Pagi/Sore",
    kategori: "pagi",
    icon: "🌅",
    iconBg: "linear-gradient(135deg, #c97a1a, #e8b34a)",
    arab: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    latin: "Ashbahnaa wa ashbahal mulku lillaah, walhamdulillaah, laa ilaaha illallaahu wahdahu laa syariika lah, lahul mulku wa lahul hamdu, wa huwa 'alaa kulli syai'in qadiir.",
    arti: "Kami berpagi hari dan kekuasaan pun berpagi hari milik Allah. Segala puji bagi Allah. Tiada sesembahan yang berhak disembah selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya seluruh kekuasaan dan bagi-Nya segala pujian, dan Dia Mahakuasa atas segala sesuatu.",
    faedah: "Dzikir pagi ini dibaca setelah Subuh sebanyak 1 kali. Rasulullah ﷺ selalu mengamalkannya. (HR. Muslim no. 2723)"
  },
  {
    id: 'doa-sore',
    title: "Doa Sore Hari (Dzikir Petang)",
    tag: "Pagi/Sore",
    kategori: "pagi",
    icon: "🌆",
    iconBg: "linear-gradient(135deg, #5e1a7a, #8a34c4)",
    arab: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    latin: "Amsaynaa wa amsal mulku lillaah, walhamdulillaah, laa ilaaha illallaahu wahdahu laa syariika lah, lahul mulku wa lahul hamdu, wa huwa 'alaa kulli syai'in qadiir.",
    arti: "Kami bersore hari dan kekuasaan pun bersore hari milik Allah. Segala puji bagi Allah. Tiada sesembahan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya seluruh kekuasaan dan bagi-Nya segala pujian, dan Dia Mahakuasa atas segala sesuatu.",
    faedah: "Dibaca setelah Ashar/Maghrib sebagai penutup hari dan perlindungan dari keburukan malam hari."
  },
  {
    id: 'doa-tidur',
    title: "Doa Sebelum Tidur",
    tag: "Harian",
    kategori: "harian",
    icon: "🌙",
    iconBg: "linear-gradient(135deg, #1a2e5e, #2d4ea8)",
    arab: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    latin: "Bismikallaahumma amuutu wa ahyaa.",
    arti: "Dengan menyebut nama-Mu ya Allah, aku mati (tidur) dan aku hidup (bangun).",
    faedah: "Doa ini dibaca sebelum tidur. Tidur diibaratkan seperti kematian kecil, maka kita menyerahkan diri kepada Allah. (HR. Bukhari no. 6324)"
  },
  {
    id: 'doa-makan',
    title: "Doa Sebelum Makan",
    tag: "Harian",
    kategori: "harian",
    icon: "🍽️",
    iconBg: "linear-gradient(135deg, #3d5e1a, #6a9a2d)",
    arab: "اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    latin: "Allaahumma baarik lanaa fiimaa razaqtanaa wa qinaa 'adzaaban naar.",
    arti: "Ya Allah, berkahilah rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa neraka.",
    faedah: "Membaca doa sebelum makan adalah sunnah Rasulullah ﷺ. Jika lupa membaca di awal, bacalah: 'Bismillaahi awwaalahu wa aakhirah'."
  },
  {
    id: 'doa-keluar-rumah',
    title: "Doa Keluar Rumah",
    tag: "Khusus",
    kategori: "khusus",
    icon: "🚪",
    iconBg: "linear-gradient(135deg, #5e4a1a, #a8832d)",
    arab: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    latin: "Bismillaah, tawakkaltu 'alallaah, wa laa hawla wa laa quwwata illaa billaah.",
    arti: "Dengan nama Allah, aku bertawakkal kepada Allah. Tiada daya dan kekuatan selain dengan pertolongan Allah.",
    faedah: "Barangsiapa membaca doa ini ketika keluar rumah, maka dikatakan kepadanya: kamu diberi kecukupan, kamu dilindungi, dan kamu dijaga, serta syaithan menjauh darinya. (HR. Abu Dawud no. 5095)"
  }
];

/* ========== DATA TAUSYIAH ========== */
const tausyiahDataArr = [
  {
    title: "Makna Syukur dalam Islam",
    tag: "Akhlak",
    icon: "🌿",
    preview: "Syukur adalah kunci pembuka nikmat yang lebih besar. Memahami hakikat syukur akan mengubah pandangan kita terhadap kehidupan.",
    content: `<p>Assalamualaikum Warahmatullahi Wabarakatuh.</p>
    <p class="arab-inline">إِنَّ الْحَمْدَ ِللَّهِ، نَحْمَدُهُ وَنَسْتَعِينُهُ وَنَسْتَغْفِرُهُ</p>
    <p>Hadirin yang dimuliakan Allah, syukur dalam pandangan Islam bukan sekadar mengucapkan "Alhamdulillah" di lisan. Syukur adalah keadaan hati yang mengakui bahwa segala nikmat datang dari Allah ﷻ, diikuti dengan penggunaan nikmat tersebut di jalan yang diridhai-Nya.</p>
    <p>Allah berfirman dalam Al-Qur'an:</p>
    <p class="arab-inline">لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ وَلَئِنْ كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ</p>
    <p><em>"Sesungguhnya jika kamu bersyukur, niscaya Aku akan menambah (nikmat) kepadamu; tetapi jika kamu mengingkari (nikmat-Ku), maka sesungguhnya azab-Ku sangat pedih."</em> (QS. Ibrahim: 7)</p>
    <p>Syukur memiliki tiga rukun: <strong>Pertama</strong>, mengakui nikmat di dalam hati. <strong>Kedua</strong>, mengucapkan syukur dengan lisan (alhamdulillah). <strong>Ketiga</strong>, menggunakan nikmat untuk ketaatan kepada Allah.</p>
    <p>Semoga Allah ﷻ menjadikan kita termasuk golongan hamba-hamba-Nya yang senantiasa bersyukur. Aamiin.</p>
    <p>Wassalamualaikum Warahmatullahi Wabarakatuh.</p>`
  },
  {
    title: "Keutamaan Membaca Shalawat",
    tag: "Shalawat",
    icon: "🌟",
    preview: "Shalawat adalah bentuk cinta kita kepada Rasulullah ﷺ. Satu shalawat akan dibalas sepuluh rahmat dari Allah.",
    content: `<p>Assalamualaikum Warahmatullahi Wabarakatuh.</p>
    <p>Allah ﷻ berfirman dengan tegas dalam Surah Al-Ahzab ayat 56:</p>
    <p class="arab-inline">إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِيْنَ أٰمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًا</p>
    <p><em>"Sesungguhnya Allah dan para malaikat-Nya bershalawat untuk Nabi. Hai orang-orang yang beriman, bershalawatlah kamu untuk Nabi dan ucapkanlah salam penghormatan kepadanya."</em></p>
    <p>Sabda Rasulullah ﷺ: <em>"Barangsiapa yang bershalawat kepadaku sekali, maka Allah akan bershalawat (memberi rahmat) untuknya sepuluh kali."</em> (HR. Muslim)</p>
    <p>Keutamaan shalawat di antara lain: mendapat sepuluh rahmat Allah, mendapat syafaat Rasulullah, menghapus dosa-dosa kecil, meninggikan derajat, dan mendapat keberkahan hidup.</p>
    <p>Mari perbanyak shalawat kepada Nabi Muhammad ﷺ, khususnya di hari Jumat.</p>
    <p class="arab-inline">اَللّٰهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى اٰلِ مُحَمَّدٍ</p>
    <p>Wassalamualaikum Warahmatullahi Wabarakatuh.</p>`
  },
  {
    title: "Menjaga Kebersihan Hati",
    tag: "Tazkiyatun Nafs",
    icon: "💚",
    preview: "Hati yang bersih adalah kunci kebahagiaan dunia dan akhirat. Penyakit hati lebih berbahaya dari penyakit fisik.",
    content: `<p>Assalamualaikum Warahmatullahi Wabarakatuh.</p>
    <p>Rasulullah ﷺ bersabda dalam hadits yang terkenal:</p>
    <p class="arab-inline">أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً، إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ، وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ، أَلَا وَهِيَ الْقَلْبُ</p>
    <p><em>"Ketahuilah, sesungguhnya dalam jasad ada segumpal darah. Jika ia baik, maka seluruh jasad akan baik. Jika ia rusak, maka seluruh jasad akan rusak. Ketahuilah, ia adalah hati."</em> (HR. Bukhari-Muslim)</p>
    <p>Penyakit-penyakit hati yang perlu dihindari: <strong>hasad</strong> (iri dengki), <strong>kibr</strong> (sombong), <strong>su'uzhan</strong> (buruk sangka), <strong>riya'</strong> (pamer), dan <strong>ujub</strong> (bangga diri berlebihan).</p>
    <p>Cara membersihkan hati: rutin membaca Al-Qur'an, memperbanyak dzikir, bertaubat, bergaul dengan orang-orang shalih, berpuasa, dan selalu muhasabah (introspeksi diri).</p>
    <p>Semoga Allah ﷻ senantiasa menjaga hati kita dari penyakit-penyakit tersebut. Aamiin ya Rabbal 'aalamiin.</p>
    <p>Wassalamualaikum Warahmatullahi Wabarakatuh.</p>`
  },
  {
    title: "Keutamaan Membaca Al-Qur'an",
    tag: "Al-Qur'an",
    icon: "📗",
    preview: "Setiap huruf Al-Qur'an yang dibaca bernilai 10 kebaikan. Rumah yang dibacakan Al-Qur'an akan bercahaya.",
    content: `<p>Assalamualaikum Warahmatullahi Wabarakatuh.</p>
    <p>Rasulullah ﷺ bersabda:</p>
    <p class="arab-inline">مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللهِ فَلَهُ بِهِ حَسَنَةٌ، وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا</p>
    <p><em>"Barangsiapa yang membaca satu huruf dari kitab Allah (Al-Qur'an), maka baginya satu kebaikan, dan satu kebaikan itu dibalas dengan sepuluh kebaikan semisal."</em> (HR. Tirmidzi)</p>
    <p>Al-Qur'an adalah petunjuk hidup yang sempurna. Dengan membacanya secara rutin, hati menjadi tenang, pikiran menjadi jernih, dan kehidupan menjadi berkah.</p>
    <p>Adab membaca Al-Qur'an: dalam keadaan suci (berwudhu), menghadap kiblat, membaca ta'awwudz dan basmalah, membaca dengan tartil dan tidak tergesa-gesa, serta merenungi maknanya (tadabbur).</p>
    <p>Semoga kita termasuk Ahlul Qur'an yang menjadi keluarga Allah. Aamiin.</p>
    <p>Wassalamualaikum Warahmatullahi Wabarakatuh.</p>`
  },
  {
    title: "Pentingnya Shalat Berjamaah",
    tag: "Ibadah",
    icon: "🕌",
    preview: "Shalat berjamaah bernilai 27 derajat lebih utama dibanding shalat sendiri. Masjid adalah rumah Allah di bumi.",
    content: `<p>Assalamualaikum Warahmatullahi Wabarakatuh.</p>
    <p>Rasulullah ﷺ bersabda:</p>
    <p class="arab-inline">صَلَاةُ الْجَمَاعَةِ تَفْضُلُ صَلَاةَ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً</p>
    <p><em>"Shalat berjamaah lebih utama 27 derajat dibandingkan shalat sendirian."</em> (HR. Bukhari-Muslim)</p>
    <p>Shalat berjamaah mengajarkan kita tentang persatuan, kedisiplinan, dan kebersamaan umat Islam. Ketika kita berdiri bersama di hadapan Allah, tidak ada perbedaan status sosial, kaya atau miskin, semua sama di hadapan-Nya.</p>
    <p>Mari kita hidupkan kembali tradisi shalat berjamaah di masjid-masjid kita. Jadikan masjid sebagai pusat kehidupan umat Islam.</p>
    <p>Wassalamualaikum Warahmatullahi Wabarakatuh.</p>`
  }
];

/* ========== MUTIARA / QUOTE ========== */
const mutiaraData = [
  { arab: "حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيْلُ", latin: "Hasbunallahu wa ni'mal wakiil", meaning: "Cukuplah Allah bagi kami dan Dia sebaik-baik Pelindung." },
  { arab: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", latin: "Inna ma'al 'usri yusraa", meaning: "Sesungguhnya bersama kesulitan ada kemudahan." },
  { arab: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", latin: "Wa may yatawakkal 'alallahi fa huwa hasbuh", meaning: "Barangsiapa bertawakkal kepada Allah, maka Dia cukuplah baginya." },
  { arab: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", latin: "Innallaaha ma'ash-shaabiriin", meaning: "Sesungguhnya Allah bersama orang-orang yang sabar." },
  { arab: "فَاذْكُرُونِي أَذْكُرْكُمْ", latin: "Fadzkuruunii adzkurkum", meaning: "Maka ingatlah kepada-Ku, niscaya Aku ingat kepadamu." },
  { arab: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ", latin: "Wa idzaa sa'alaka 'ibaadii 'anni fa-innii qariib", meaning: "Dan apabila hamba-hamba-Ku bertanya kepadamu tentang Aku, maka sesungguhnya Aku dekat." },
  { arab: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", latin: "Alaa bidzikrillahi tathma'innul quluub", meaning: "Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram." }
];

/* ========== STATE ========== */
let currentPage = 'pageHome';
let currentReadingIdx = 0;
let arabFontSize = 30;
let isDark = false;
let favorites = JSON.parse(localStorage.getItem('tawasulFavs') || '[]');
let currentDoaIdx = null;
let deferredInstallPrompt = null;
let currentQuoteIdx = 0;
let currentDoaFilter = 'all';

/* ========== UTILITY ========== */
function showToast(msg, duration = 2500) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.classList.add('hidden'), 300);
  }, duration);
}

function saveFavs() {
  localStorage.setItem('tawasulFavs', JSON.stringify(favorites));
}

/* ========== NAVIGATION ========== */
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.classList.add('hidden');
  });
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('active');
    currentPage = pageId;
  }

  // Update bottom nav
  document.querySelectorAll('.bnav-item').forEach(b => b.classList.remove('active'));
  const navMap = {
    'pageHome': 'bn-home',
    'pageDoa': 'bn-doa',
    'pageTausyiah': 'bn-tausyiah',
    'pageFavorit': 'bn-favorit'
  };
  if (navMap[pageId]) {
    const btn = document.getElementById(navMap[pageId]);
    if (btn) btn.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Lazy render pages
  if (pageId === 'pageDoa') renderDoa();
  if (pageId === 'pageTausyiah') renderTausyiah();
  if (pageId === 'pageFavorit') renderFavorit();
}

/* ========== TAWASUL READING ========== */
function startReading() {
  navigateTo('pageTawasul');
  currentReadingIdx = 0;
  renderReading();
  document.getElementById('progressContainer').style.display = 'block';
}

function goHome() {
  document.getElementById('progressContainer').style.display = 'none';
  document.getElementById('progress').style.width = '0%';
  navigateTo('pageHome');
}

function renderReading() {
  const item = tawasulData[currentReadingIdx];
  if (!item) return;

  document.getElementById('readingNum').textContent = `${currentReadingIdx + 1} / ${tawasulData.length}`;
  document.getElementById('title').textContent = item.title;
  document.getElementById('arab').textContent = item.arab;
  document.getElementById('arab').style.fontSize = arabFontSize + 'px';

  const latinBox = document.getElementById('latinBox');
  if (item.latin) {
    latinBox.textContent = item.latin;
    latinBox.style.display = 'block';
  } else {
    latinBox.style.display = 'none';
  }

  // Progress
  const pct = ((currentReadingIdx + 1) / tawasulData.length) * 100;
  document.getElementById('progress').style.width = pct + '%';

  // Dots
  const dotsEl = document.getElementById('readingDots');
  dotsEl.innerHTML = '';
  tawasulData.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'rdot' + (i === currentReadingIdx ? ' active' : '');
    dotsEl.appendChild(d);
  });

  // Buttons
  document.getElementById('prevBtn').disabled = currentReadingIdx === 0;
  document.getElementById('nextBtn').textContent = '';
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.innerHTML = currentReadingIdx === tawasulData.length - 1
    ? 'Selesai <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
    : 'Selanjutnya <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>';

  // Fav button
  updateFavBtn();

  // Animate card
  const card = document.getElementById('readingCard');
  card.style.opacity = '0';
  card.style.transform = 'translateY(12px)';
  requestAnimationFrame(() => {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  });

  document.getElementById('pageTawasul').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function next() {
  if (currentReadingIdx < tawasulData.length - 1) {
    currentReadingIdx++;
    renderReading();
  } else {
    showToast('🎉 Alhamdulillah! Bacaan selesai.');
    goHome();
  }
}

function prev() {
  if (currentReadingIdx > 0) {
    currentReadingIdx--;
    renderReading();
  }
}

/* ========== DARK MODE ========== */
function toggleDark() {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
  document.getElementById('moonIcon').classList.toggle('hidden', isDark);
  document.getElementById('sunIcon').classList.toggle('hidden', !isDark);
  localStorage.setItem('tawasulDark', isDark);
}

/* ========== FONT SIZE ========== */
function fontUp() {
  if (arabFontSize < 56) {
    arabFontSize += 2;
    document.querySelectorAll('.arab, .detail-arab').forEach(el => el.style.fontSize = arabFontSize + 'px');
  }
}
function fontDown() {
  if (arabFontSize > 18) {
    arabFontSize -= 2;
    document.querySelectorAll('.arab, .detail-arab').forEach(el => el.style.fontSize = arabFontSize + 'px');
  }
}

/* ========== DOA ========== */
function renderDoa() {
  const list = document.getElementById('doaList');
  const filtered = currentDoaFilter === 'all'
    ? doaData
    : doaData.filter(d => d.kategori === currentDoaFilter);

  list.innerHTML = '';
  filtered.forEach((doa, i) => {
    const card = document.createElement('div');
    card.className = 'doa-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.onclick = () => openDetailDoa(doa.id);
    card.innerHTML = `
      <div class="doa-card-icon" style="background: ${doa.iconBg}">${doa.icon}</div>
      <div class="doa-card-body">
        <div class="doa-card-title">${doa.title}</div>
        <div class="doa-card-preview">${doa.arab.substring(0, 60)}...</div>
      </div>
      <div class="doa-card-tag">${doa.tag}</div>
    `;
    list.appendChild(card);
  });

  if (filtered.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">🔍</div><p>Belum ada doa di kategori ini.</p></div>';
  }
}

function filterDoa(filter, btn) {
  currentDoaFilter = filter;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderDoa();
}

function openDetailDoa(id) {
  const doa = doaData.find(d => d.id === id);
  if (!doa) return;
  currentDoaIdx = id;

  document.getElementById('doaDetailPageTitle').textContent = doa.title;
  document.getElementById('doaDetailTag').textContent = doa.tag;
  document.getElementById('doaDetailTitle').textContent = doa.title;
  document.getElementById('doaDetailArab').textContent = doa.arab;
  document.getElementById('doaDetailArab').style.fontSize = arabFontSize + 'px';
  document.getElementById('doaDetailLatin').textContent = doa.latin;
  document.getElementById('doaDetailArti').textContent = doa.arti;
  document.getElementById('doaDetailFaedah').textContent = doa.faedah;

  updateFavDoaBtn();
  navigateTo('pageDetailDoa');
}

function closeDetailDoa() {
  navigateTo('pageDoa');
  renderDoa();
}

/* ========== TAUSYIAH ========== */
function renderTausyiah() {
  const grid = document.getElementById('tausyiahGrid');
  grid.innerHTML = '';
  tausyiahDataArr.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'taus-card';
    card.onclick = () => openDetailTausyiah(i);
    card.innerHTML = `
      <div class="taus-card-tag">${t.tag}</div>
      <h3>${t.icon} ${t.title}</h3>
      <p>${t.preview}</p>
      <div class="taus-card-link">
        Baca Selengkapnya
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openDetailTausyiah(idx) {
  const t = tausyiahDataArr[idx];
  document.getElementById('tausDetailPageTitle').textContent = t.title;
  document.getElementById('tausDetailTag').textContent = t.tag;
  document.getElementById('tausDetailTitle').textContent = `${t.icon} ${t.title}`;
  document.getElementById('tausDetailContent').innerHTML = t.content;
  navigateTo('pageDetailTausyiah');
}

function closeDetailTausyiah() {
  navigateTo('pageTausyiah');
  renderTausyiah();
}

/* ========== FAVORIT ========== */
function isFavReading(idx) {
  return favorites.some(f => f.type === 'tawasul' && f.idx === idx);
}
function isFavDoa(id) {
  return favorites.some(f => f.type === 'doa' && f.id === id);
}

function updateFavBtn() {
  const btn = document.getElementById('favBtn');
  const icon = document.getElementById('favIcon');
  const active = isFavReading(currentReadingIdx);
  btn.classList.toggle('active', active);
  icon.style.fill = active ? '#dc3545' : 'none';
}

function updateFavDoaBtn() {
  const btn = document.getElementById('favDoaBtn');
  const icon = document.getElementById('favDoaIcon');
  const active = isFavDoa(currentDoaIdx);
  btn.classList.toggle('active', active);
  icon.style.fill = active ? '#dc3545' : 'none';
}

function toggleFavoriteReading() {
  const item = tawasulData[currentReadingIdx];
  const idx = favorites.findIndex(f => f.type === 'tawasul' && f.idx === currentReadingIdx);
  if (idx >= 0) {
    favorites.splice(idx, 1);
    showToast('❌ Dihapus dari favorit');
  } else {
    favorites.push({ type: 'tawasul', idx: currentReadingIdx, title: item.title });
    showToast('❤️ Ditambahkan ke favorit!');
  }
  saveFavs();
  updateFavBtn();
}

function toggleFavDoa() {
  const doa = doaData.find(d => d.id === currentDoaIdx);
  const idx = favorites.findIndex(f => f.type === 'doa' && f.id === currentDoaIdx);
  if (idx >= 0) {
    favorites.splice(idx, 1);
    showToast('❌ Dihapus dari favorit');
  } else {
    favorites.push({ type: 'doa', id: currentDoaIdx, title: doa.title });
    showToast('❤️ Ditambahkan ke favorit!');
  }
  saveFavs();
  updateFavDoaBtn();
}

function removeFav(i) {
  favorites.splice(i, 1);
  saveFavs();
  renderFavorit();
  showToast('❌ Dihapus dari favorit');
}

function renderFavorit() {
  const list = document.getElementById('favoritList');
  list.innerHTML = '';
  if (favorites.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🤍</div>
        <p>Belum ada favorit.<br>Tandai bacaan atau doa dengan ❤️</p>
      </div>`;
    return;
  }
  favorites.forEach((fav, i) => {
    const item = document.createElement('div');
    item.className = 'fav-item';
    const icon = fav.type === 'tawasul' ? '📖' : '🤲';
    const typeLabel = fav.type === 'tawasul' ? 'Bacaan Tawasul' : 'Doa';
    item.innerHTML = `
      <div class="fav-item-icon">${icon}</div>
      <div class="fav-item-body">
        <div class="fav-item-type">${typeLabel}</div>
        <div class="fav-item-title">${fav.title}</div>
      </div>
      <button class="fav-item-del" onclick="removeFav(${i})" aria-label="Hapus favorit">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
      </button>
    `;
    item.addEventListener('click', (e) => {
      if (e.target.closest('.fav-item-del')) return;
      if (fav.type === 'tawasul') {
        currentReadingIdx = fav.idx;
        navigateTo('pageTawasul');
        renderReading();
      } else {
        openDetailDoa(fav.id);
      }
    });
    list.appendChild(item);
  });
}

/* ========== QUOTE / MUTIARA ========== */
function renderQuote(idx) {
  const q = mutiaraData[idx];
  document.getElementById('quoteArabic').textContent = q.arab;
  document.getElementById('quoteLatin').textContent = q.latin;
  document.getElementById('quoteMeaning').textContent = q.meaning;
}

function refreshQuote() {
  let newIdx;
  do { newIdx = Math.floor(Math.random() * mutiaraData.length); }
  while (newIdx === currentQuoteIdx && mutiaraData.length > 1);
  currentQuoteIdx = newIdx;
  renderQuote(currentQuoteIdx);
}

/* ========== SEARCH ========== */
function toggleSearch() {
  const overlay = document.getElementById('searchOverlay');
  overlay.classList.toggle('hidden');
  if (!overlay.classList.contains('hidden')) {
    document.getElementById('searchInput').focus();
  } else {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
  }
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
  document.getElementById('clearSearchBtn').classList.add('hidden');
  document.getElementById('searchInput').focus();
}

function doSearch(q) {
  const results = document.getElementById('searchResults');
  const clear = document.getElementById('clearSearchBtn');
  if (!q) {
    results.innerHTML = '';
    clear.classList.add('hidden');
    return;
  }
  clear.classList.remove('hidden');
  const lower = q.toLowerCase();
  const matches = [];

  tawasulData.forEach((item, i) => {
    if (item.title.toLowerCase().includes(lower) || item.arab.includes(q)) {
      matches.push({ icon: '📖', title: item.title, sub: 'Bacaan Tawasul', action: () => { toggleSearch(); currentReadingIdx = i; navigateTo('pageTawasul'); renderReading(); } });
    }
  });
  doaData.forEach(doa => {
    if (doa.title.toLowerCase().includes(lower) || doa.arab.includes(q)) {
      matches.push({ icon: '🤲', title: doa.title, sub: 'Doa', action: () => { toggleSearch(); openDetailDoa(doa.id); } });
    }
  });
  tausyiahDataArr.forEach((t, i) => {
    if (t.title.toLowerCase().includes(lower) || t.preview.toLowerCase().includes(lower)) {
      matches.push({ icon: t.icon, title: t.title, sub: 'Tausyiah', action: () => { toggleSearch(); openDetailTausyiah(i); } });
    }
  });

  if (matches.length === 0) {
    results.innerHTML = '<div class="search-no-result">🔍 Tidak ditemukan hasil untuk "<strong>' + q + '</strong>"</div>';
    return;
  }
  results.innerHTML = '';
  matches.slice(0, 8).forEach(m => {
    const el = document.createElement('div');
    el.className = 'search-result-item';
    el.innerHTML = `<div class="sri-icon">${m.icon}</div><div class="sri-text"><strong>${m.title}</strong><span>${m.sub}</span></div>`;
    el.onclick = m.action;
    results.appendChild(el);
  });
}

/* ========== PWA INSTALL ========== */
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const banner = document.getElementById('installBanner');
  if (!localStorage.getItem('tawasulInstallDismissed')) {
    banner.classList.remove('hidden');
  }
});

document.getElementById('installBtn').addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  const { outcome } = await deferredInstallPrompt.userChoice;
  if (outcome === 'accepted') {
    showToast('✅ Aplikasi berhasil dipasang!');
    document.getElementById('installBanner').classList.add('hidden');
  }
  deferredInstallPrompt = null;
});

document.getElementById('installDismiss').addEventListener('click', () => {
  document.getElementById('installBanner').classList.add('hidden');
  localStorage.setItem('tawasulInstallDismissed', '1');
});

/* ========== SERVICE WORKER ========== */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(r => console.log('SW registered:', r.scope))
      .catch(e => console.log('SW error:', e));
  });
}

/* ========== INIT ========== */
document.addEventListener('DOMContentLoaded', () => {
  // Load prefs
  isDark = localStorage.getItem('tawasulDark') === 'true';
  document.body.classList.toggle('dark', isDark);
  document.getElementById('moonIcon').classList.toggle('hidden', isDark);
  document.getElementById('sunIcon').classList.toggle('hidden', !isDark);

  // Update stats
  document.getElementById('statTawasul').textContent = tawasulData.length;
  document.getElementById('statDoa').textContent = doaData.length;
  document.getElementById('statTausyiah').textContent = tausyiahDataArr.length;

  // Initial quote
  renderQuote(0);

  // Search input
  document.getElementById('searchInput').addEventListener('input', (e) => doSearch(e.target.value.trim()));

  // Splash fade out
  setTimeout(() => {
    const splash = document.getElementById('splashScreen');
    splash.classList.add('fade-out');
    setTimeout(() => splash.remove(), 500);
  }, 1800);

  // Keyboard nav
  document.addEventListener('keydown', (e) => {
    if (currentPage === 'pageTawasul') {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    }
    if (e.key === 'Escape') {
      const overlay = document.getElementById('searchOverlay');
      if (!overlay.classList.contains('hidden')) toggleSearch();
    }
  });

  // Touch swipe for reading
  let touchStartX = 0;
  document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', (e) => {
    if (currentPage !== 'pageTawasul') return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 70) {
      if (dx < 0) next();
      else prev();
    }
  }, { passive: true });
});