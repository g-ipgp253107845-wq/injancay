export interface GuideItem {
  id: string;
  number: string;
  title: string;
  iconKey: 'smartphone-alert' | 'book-copyright' | 'robot-ai' | 'shield-key' | 'chat-bubble' | 'computer-alert';
  points: string[];
  situationTitle: string;
  situationDesc: string;
  safeAction: string;
  unsafeAction: string;
}

export interface ThreatItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  iconKey: 'copy-x' | 'newspaper-alert' | 'message-off' | 'fish-hook' | 'unlock-alert';
  exampleTitle: string;
  exampleScenario: string;
  previewSender: string;
  previewMessage: string;
  preventionSteps: string[];
}

export interface GoldenRuleItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: 'A' | 'B' | 'C';
    text: string;
  }[];
  correctLabel: 'A' | 'B' | 'C';
  explanation: string;
}

export interface ReferenceItem {
  id: string;
  name: string;
  role: string;
  description: string;
  url: string;
}

export const HERO_IMAGE_PATH = '/src/assets/images/hero_galaxy_aliens_1795106398766.jpg';
export const NETIKET_IMAGE_PATH = '/src/assets/images/card_netiket_galaxy_1795106399697.jpg';
export const CYBER_IMAGE_PATH = '/src/assets/images/card_keselamatan_galaxy_1795106398718.jpg';
export const CLOSING_IMAGE_PATH = '/src/assets/images/closing_wira_galaxy_1795106398863.jpg';

export const DEFINITIONS = [
  {
    id: 'netiket' as const,
    number: '01',
    title: 'Netiket',
    kicker: 'Etika & Budi Pekerti Galaksi Digital',
    summary:
      'Amalan dan peraturan tingkah laku yang sopan serta beretika ketika berkomunikasi dan berinteraksi di internet.',
    image: NETIKET_IMAGE_PATH,
    imageAlt: 'Ilustrasi rakan alien mesra dan pengembara angkasa muda berkomunikasi dengan sopan menggunakan tablet holografik di dalam bilik darjah kubah bulan.',
    dailyExamples: [
      'Memberi salam dan menggunakan kata-kata yang baik dalam kumpulan kelas.',
      'Menghormati pendapat rakan walaupun berbeza pandangan.',
      'Tidak menghantar mesej yang menyakitkan hati atau memalukan sesiapa.',
    ],
  },
  {
    id: 'keselamatan' as const,
    number: '02',
    title: 'Keselamatan Siber',
    kicker: 'Perisai Perlindungan Diri & Peranti',
    summary:
      'Langkah melindungi maklumat peribadi, peranti dan akaun digital daripada ancaman serta penyalahgunaan dalam talian.',
    image: CYBER_IMAGE_PATH,
    imageAlt: 'Ilustrasi pengawal teknologi alien melindungi komputer riba dan kunci bintang kristal di dalam perisai medan tenaga keemasan.',
    dailyExamples: [
      'Menjaga kerahsiaan kata laluan dan tidak berkongsi alamat rumah.',
      'Mengelakkan pautan mencurigakan yang menjanjikan hadiah percuma.',
      'Meminta bantuan ibu bapa atau guru apabila terjumpa kandungan pelik.',
    ],
  },
];

export const SIX_GUIDES: GuideItem[] = [
  {
    id: 'fikir-sebelum-kongsi',
    number: '01',
    title: 'FIKIR SEBELUM BERKONGSI',
    iconKey: 'smartphone-alert',
    points: [
      'Semak kesahihan maklumat sebelum berkongsi.',
      'Jangan sebarkan berita palsu atau maklumat yang belum disahkan.',
      'Pastikan perkongsian tidak menyakiti atau memalukan orang lain.',
    ],
    situationTitle: 'Mesej Cuti Sekolah Mengejut',
    situationDesc:
      'Adam menerima mesej dalam aplikasi sembang yang mendakwa esok cuti sekolah, tetapi tiada surat rasmi daripada pihak sekolah.',
    safeAction: 'Bertanya kepada guru kelas atau ibu bapa dan menyemak laman rasmi sekolah terlebih dahulu.',
    unsafeAction: 'Terus menghantar mesej tersebut ke semua kumpulan rakan sehingga menimbulkan kekeliruan.',
  },
  {
    id: 'hormati-hak-cipta',
    number: '02',
    title: 'HORMATI HAK CIPTA DAN HASIL KARYA',
    iconKey: 'book-copyright',
    points: [
      'Jangan menyalin hasil kerja orang lain tanpa kebenaran.',
      'Nyatakan sumber rujukan apabila menggunakan maklumat atau gambar.',
      'Elakkan plagiarisme dalam tugasan sekolah.',
    ],
    situationTitle: 'Projek Buku Skrap Sejarah',
    situationDesc:
      'Aina mencari gambar dan fakta tokoh negara di internet untuk menyiapkan tugasan buku skrap sekolah.',
    safeAction: 'Menulis semula maklumat dengan ayat sendiri dan menyenaraikan pautan sumber rujukan di halaman akhir.',
    unsafeAction: 'Menyalin bulat-bulat karangan orang lain dan mengaku ia hasil tulisan sendiri.',
  },
  {
    id: 'guna-ai-beretika',
    number: '03',
    title: 'GUNAKAN AI SECARA BERETIKA',
    iconKey: 'robot-ai',
    points: [
      'Gunakan AI sebagai alat bantuan pembelajaran.',
      'Jangan mengaku hasil AI sebagai hasil kerja sendiri sepenuhnya.',
      'Semak ketepatan maklumat yang diberikan oleh AI.',
      'Jangan masukkan maklumat peribadi ke dalam aplikasi AI.',
    ],
    situationTitle: 'Mencari Idea Karangan Sains',
    situationDesc:
      'Hakim menggunakan pembantu AI untuk memahami konsep kitaran air bagi menyiapkan latihan sains.',
    safeAction: 'Membaca penerangan AI untuk faham, menyemak fakta dengan buku teks, dan menulis jawapan sendiri.',
    unsafeAction: 'Memasukkan nombor kad pengenalan atau menyalin semua jawapan AI tanpa membaca.',
  },
  {
    id: 'lindungi-maklumat',
    number: '04',
    title: 'LINDUNGI MAKLUMAT PERIBADI',
    iconKey: 'shield-key',
    points: [
      'Jangan berkongsi alamat rumah, nombor telefon, kata laluan atau maklumat keluarga.',
      'Gunakan kata laluan yang kukuh dan berbeza bagi akaun penting.',
      'Jangan berkongsi kata laluan dengan orang lain.',
    ],
    situationTitle: 'Permainan Dalam Talian Baharu',
    situationDesc:
      'Rakan baharu dalam permainan dalam talian meminta alamat rumah dan kata laluan akaun Mei Ling untuk memberi ganjaran.',
    safeAction: 'Menolak permintaan tersebut, merahsiakan maklumat diri, dan memberitahu ibu bapa.',
    unsafeAction: 'Memberikan nombor telefon keluarga dan kata laluan semata-mata untuk mendapatkan ganjaran permainan.',
  },
  {
    id: 'komunikasi-sopan',
    number: '05',
    title: 'BERKOMUNIKASI DENGAN SOPAN',
    iconKey: 'chat-bubble',
    points: [
      'Gunakan bahasa yang sopan ketika menghantar mesej.',
      'Hormati pendapat dan perbezaan orang lain.',
      'Jangan melakukan buli siber atau menghantar komen yang menyakitkan hati.',
    ],
    situationTitle: 'Perbincangan Kumpulan Kelas',
    situationDesc:
      'Seorang rakan tersilap menghantar jawapan kuiz di dalam kumpulan kelas dalam talian.',
    safeAction: 'Memberi teguran secara berhemah dan membantunya memahami jawapan yang betul.',
    unsafeAction: 'Mengejek dengan huruf besar atau menyebarkan tangkap layar kesilapan rakan.',
  },
  {
    id: 'jauhi-ancaman-siber',
    number: '06',
    title: 'JAUHI ANCAMAN SIBER',
    iconKey: 'computer-alert',
    points: [
      'Jangan klik pautan atau muat turun fail yang mencurigakan.',
      'Jangan berkongsi akaun dengan individu tidak dikenali.',
      'Laporkan mesej, pautan atau aktiviti mencurigakan kepada guru dan ibu bapa.',
      'Jangan cuba menggodam akaun atau peranti orang lain.',
    ],
    situationTitle: 'Pautan Hadiah Telefon Percuma',
    situationDesc:
      'Sebuah tetingkap timbul di komputer mengatakan anda menang hadiah utama dan meminta anda klik pautan segera.',
    safeAction: 'Menutup tetingkap tersebut serta-merta dan memberitahu guru atau ibu bapa.',
    unsafeAction: 'Menekan pautan tersebut dan memuat turun fail yang tidak dikenali ke dalam komputer.',
  },
];

export const FIVE_THREATS: ThreatItem[] = [
  {
    id: 'plagiarisme',
    number: '01',
    title: 'Plagiarisme',
    shortDesc: 'Mengambil hasil kerja orang lain tanpa memberikan pengiktirafan.',
    iconKey: 'copy-x',
    exampleTitle: 'Contoh Situasi',
    exampleScenario:
      'Seorang murid menyalin keseluruhan karangan atau lukisan daripada blog di internet dan menghantarnya kepada guru sebagai kerja rumah sendiri tanpa menyebut sumber.',
    previewSender: 'Tugasan Sekolah',
    previewMessage: 'Salin & Tampal 100% teks dari laman web tanpa menulis nama penulis asal.',
    preventionSteps: [
      'Tulis semula idea dengan kefahaman dan ayat sendiri.',
      'Sentiasa nyatakan nama penulis atau pautan laman web rujukan.',
      'Minta izin sebelum menggunakan gambar atau karya rakan.',
    ],
  },
  {
    id: 'berita-palsu',
    number: '02',
    title: 'Berita Palsu',
    shortDesc: 'Maklumat tidak benar yang disebarkan sehingga mengelirukan orang lain.',
    iconKey: 'newspaper-alert',
    exampleTitle: 'Contoh Situasi',
    exampleScenario:
      'Berita tentang perubahan tarikh peperiksaan atau bencana alam yang tiada pengesahan rasmi disebarkan pantas dalam kumpulan sembang sehingga ramai murid panik.',
    previewSender: 'Mesej Tular Tanpa Sumber',
    previewMessage: 'TERKINI! Sebarkan kepada 10 kumpulan sekarang atau akaun anda akan ditutup!',
    preventionSteps: [
      'Semak berita daripada portal rasmi kerajaan atau pengumuman sekolah.',
      'Jangan terus tekan butang kongsi jika berita kedengaran terlalu pelik.',
      'Tanya ibu bapa atau guru untuk memastikan kesahihan maklumat.',
    ],
  },
  {
    id: 'buli-siber',
    number: '03',
    title: 'Buli Siber',
    shortDesc: 'Menggunakan teknologi untuk mengganggu, menghina atau menyakiti orang lain.',
    iconKey: 'message-off',
    exampleTitle: 'Contoh Situasi',
    exampleScenario:
      'Sekumpulan pengguna meninggalkan komen mengejek rupa paras seorang murid pada gambar kelas atau menyebarkan gambar memalukan tanpa izin.',
    previewSender: 'Komen Tidak Sopan',
    previewMessage: 'Mesej berulang yang mengejek, mengugut, atau memulaukan seseorang di dalam talian.',
    preventionSteps: [
      'Simpan bukti tangkap layar dan sekat (block) pembuli.',
      'Jangan balas komen negatif dengan kata-kata kasar.',
      'Laporkan segera kepada guru, kaunselor atau ibu bapa.',
    ],
  },
  {
    id: 'phishing',
    number: '04',
    title: 'Phishing',
    shortDesc:
      'Cubaan memperdaya pengguna supaya memberikan maklumat sulit melalui mesej atau laman web palsu.',
    iconKey: 'fish-hook',
    exampleTitle: 'Contoh Situasi',
    exampleScenario:
      'Mesej yang menyamar sebagai pihak pentadbir permainan atau bank menghantar pautan palsu dan meminta anda memasukkan kata laluan serta nombor telefon ibu bapa.',
    previewSender: 'hadiah-palsu@pautan-pelik.xyz',
    previewMessage: 'Tahniah! Sila log masuk kata laluan akaun anda di pautan ini dalam masa 5 minit.',
    preventionSteps: [
      'Periksa alamat pengirim dan pautan URL dengan teliti.',
      'Jangan sesekali memasukkan kata laluan melalui pautan mesej mencurigakan.',
      'Tanya orang dewasa yang dipercayai sebelum mengisi sebarang borang.',
    ],
  },
  {
    id: 'penggodaman',
    number: '05',
    title: 'Penggodaman',
    shortDesc: 'Pencerobohan akaun atau sistem tanpa kebenaran.',
    iconKey: 'unlock-alert',
    exampleTitle: 'Contoh Situasi',
    exampleScenario:
      'Akaun pembelajaran atau e-mel seorang murid diambil alih oleh orang asing kerana menggunakan kata laluan mudah seperti "123456" dan tidak log keluar di komputer awam.',
    previewSender: 'Amaran Keselamatan Akaun',
    previewMessage: 'Log masuk tidak dikenali dikesan daripada peranti asing pada kata laluan yang lemah.',
    preventionSteps: [
      'Cipta kata laluan yang kukuh (gabungan huruf besar, kecil, nombor & simbol).',
      'Sentiasa log keluar (Log Out) selepas menggunakan komputer makmal sekolah.',
      'Jangan muat turun perisian cetak rompak atau fail yang tidak diketahui.',
    ],
  },
];

export const GOLDEN_RULES: GoldenRuleItem[] = [
  {
    id: 'rule-1',
    number: '01',
    title: 'Fikir sebelum klik.',
    subtitle: 'Teliti setiap pautan atau butang muat turun sebelum menekan.',
  },
  {
    id: 'rule-2',
    number: '02',
    title: 'Semak sebelum kongsi.',
    subtitle: 'Pastikan maklumat sahih dan tidak memalukan orang lain.',
  },
  {
    id: 'rule-3',
    number: '03',
    title: 'Rahsiakan maklumat peribadi.',
    subtitle: 'Lindungi kata laluan, alamat rumah dan nombor telefon.',
  },
  {
    id: 'rule-4',
    number: '04',
    title: 'Hormati orang lain di alam maya.',
    subtitle: 'Berbahasa sopan dan elakkan sebarang bentuk buli siber.',
  },
  {
    id: 'rule-5',
    number: '05',
    title: 'Laporkan perkara mencurigakan kepada orang dewasa yang dipercayai.',
    subtitle: 'Sentiasa rujuk guru atau ibu bapa jika berasa tidak selamat.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Apakah tindakan yang betul apabila menerima pautan yang mencurigakan?',
    options: [
      { label: 'A', text: 'Terus klik pautan tersebut.' },
      { label: 'B', text: 'Kongsi kepada semua rakan.' },
      { label: 'C', text: 'Jangan klik dan laporkan kepada guru.' },
    ],
    correctLabel: 'C',
    explanation:
      'Pautan mencurigakan mungkin cubaan phishing atau mengandungi perisian berbahaya. Jangan klik dan laporkan segera kepada guru atau ibu bapa.',
  },
  {
    id: 2,
    question: 'Apakah maksud plagiarisme?',
    options: [
      { label: 'A', text: 'Menghasilkan karya sendiri.' },
      { label: 'B', text: 'Mengambil hasil kerja orang lain tanpa pengiktirafan.' },
      { label: 'C', text: 'Memberikan kredit kepada penulis asal.' },
    ],
    correctLabel: 'B',
    explanation:
      'Plagiarisme ialah perbuatan menyalin hasil kerja, teks atau karya orang lain dan mengakuinya sebagai hasil sendiri tanpa menyatakan sumber.',
  },
  {
    id: 3,
    question: 'Apakah maklumat yang tidak boleh dikongsi secara terbuka?',
    options: [
      { label: 'A', text: 'Hobi.' },
      { label: 'B', text: 'Warna kegemaran.' },
      { label: 'C', text: 'Kata laluan akaun.' },
    ],
    correctLabel: 'C',
    explanation:
      'Kata laluan akaun ialah kunci keselamatan digital anda. Berkongsi kata laluan boleh menyebabkan akaun anda diceroboh atau disalahgunakan.',
  },
  {
    id: 4,
    question: 'Bagaimanakah cara menggunakan AI dengan beretika?',
    options: [
      { label: 'A', text: 'Menyalin semua jawapan AI tanpa menyemak.' },
      { label: 'B', text: 'Menggunakan AI sebagai alat bantuan dan menyemak maklumat.' },
      { label: 'C', text: 'Menghantar maklumat peribadi kepada AI.' },
    ],
    correctLabel: 'B',
    explanation:
      'AI sesuai dijadikan pembantu untuk memahami topik pelajaran, namun kita wajib menyemak ketepatan faktanya dan menulis tugasan dengan usaha sendiri.',
  },
  {
    id: 5,
    question: 'Apakah tindakan apabila melihat rakan menjadi mangsa buli siber?',
    options: [
      { label: 'A', text: 'Turut mengejek.' },
      { label: 'B', text: 'Menyebarkan tangkap layar.' },
      { label: 'C', text: 'Memberitahu guru atau orang dewasa yang dipercayai.' },
    ],
    correctLabel: 'C',
    explanation:
      'Melaporkan buli siber kepada guru atau orang dewasa yang dipercayai membantu menghentikan gangguan dan melindungi rakan anda dengan selamat.',
  },
];

export const REFERENCES: ReferenceItem[] = [
  {
    id: 'cybersecurity-my',
    name: 'CyberSecurity Malaysia',
    role: 'Agensi Keselamatan Siber Negara',
    description: 'Panduan kesedaran keselamatan siber, pelaporan insiden dan tip perlindungan digital Malaysia.',
    url: 'https://www.cybersecurity.my/',
  },
  {
    id: 'mcmc',
    name: 'Suruhanjaya Komunikasi dan Multimedia Malaysia (MCMC)',
    role: 'Klik Dengan Bijak',
    description: 'Sumber rasmi keselamatan internet, etika komunikasi dan kempen Klik Dengan Bijak.',
    url: 'https://www.mcmc.gov.my/',
  },
  {
    id: 'unicef',
    name: 'UNICEF – Online Safety',
    role: 'Perlindungan Kanak-kanak Global',
    description: 'Panduan antarabangsa untuk memastikan kanak-kanak dan remaja kekal selamat di ruang digital.',
    url: 'https://www.unicef.org/parenting/child-care/online-safety',
  },
  {
    id: 'be-internet-awesome',
    name: 'Google Be Internet Awesome',
    role: 'Pembelajaran Interaktif Kanak-kanak',
    description: 'Program latihan keselamatan digital dan permainan interaktif untuk murid sekolah rendah.',
    url: 'https://beinternetawesome.withgoogle.com/',
  },
];
