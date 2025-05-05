export const mockCategories = [
  {
    id: "politics",
    name: "Politika",
    count: 12,
    icon: "🏛️",
  },
  {
    id: "technology",
    name: "Teknoloji",
    count: 8,
    icon: "💻",
  },
  {
    id: "business",
    name: "İş Dünyası",
    count: 6,
    icon: "📈",
  },
  {
    id: "entertainment",
    name: "Eğlence",
    count: 9,
    icon: "🎬",
  },
  {
    id: "sports",
    name: "Spor",
    count: 5,
    icon: "⚽",
  },
  {
    id: "science",
    name: "Bilim",
    count: 4,
    icon: "🔬",
  },
  {
    id: "health",
    name: "Sağlık",
    count: 7,
    icon: "🏥",
  },
  {
    id: "education",
    name: "Eğitim",
    count: 3,
    icon: "🎓",
  },
]

export const mockWatchedPeople = [
  {
    id: "1",
    name: "Donald Trump",
    bio: "Amerika Birleşik Devletleri'nin 45. Başkanı",
    category: "Politika",
    source: "https://twitter.com/realDonaldTrump",
    sourceType: "Twitter",
    lastUpdate: "2 saat önce",
  },
  {
    id: "2",
    name: "Elon Musk",
    bio: "Tesla, SpaceX ve X'in CEO'su",
    category: "Teknoloji",
    source: "https://twitter.com/elonmusk",
    sourceType: "Twitter",
    lastUpdate: "5 saat önce",
  },
  {
    id: "3",
    name: "NASA",
    bio: "Ulusal Havacılık ve Uzay Dairesi",
    category: "Bilim",
    source: "https://www.nasa.gov",
    sourceType: "Web Sitesi",
    lastUpdate: "1 gün önce",
  },
  {
    id: "4",
    name: "The New York Times",
    bio: "Son dakika haberleri, dünya haberleri ve multimedya",
    category: "News",
    source: "https://www.nytimes.com",
    sourceType: "RSS Beslemesi",
    lastUpdate: "12 saat önce",
  },
  {
    id: "5",
    name: "Bill Gates",
    bio: "Microsoft'un kurucu ortağı, hayırsever",
    category: "Teknoloji",
    source: "https://www.gatesnotes.com",
    sourceType: "Web Sitesi",
    lastUpdate: "3 gün önce",
  },
]

export const mockGeneratedNews = [
  {
    id: "1",
    title: "Trump Yeni Ekonomi Politikasını Son Açıklamasında Duyurdu",
    summary:
      "Eski Başkan Donald Trump, vergi indirimleri ve deregülasyona odaklanarak Amerikan işletmelerini desteklemeye yönelik ekonomik reform vizyonunu açıkladı.",
    source: {
      name: "Donald Trump",
    },
    category: "Politika",
    publishDate: "9 Nis 2025",
    readTime: "3 dk",
    content: `
      <p>Bugün yayınlanan bir açıklamada, eski Başkan Donald Trump, "Amerikan ekonomisini canlandıracak ve daha önce hiç olmadığı kadar iş imkanı yaratacak" kapsamlı bir ekonomi politikası önerisi sundu.</p>
      
      <p>Plan, hem bireyler hem de şirketler için önemli vergi indirimleri ve işletmeler için bürokratik engelleri azaltmayı amaçlayan kapsamlı bir deregülasyon girişimi etrafında şekilleniyor.</p>
      
      <p>Trump, "Amerikan işletmelerinin tam potansiyelini ortaya çıkarmamız gerekiyor" dedi. "Vergileri düşürerek ve gereksiz düzenlemeleri ortadan kaldırarak, milyonlarca yeni iş yaratabilir ve küresel pazarda Amerikan hakimiyetini sağlayabiliriz."</p>
      
      <p>Trump'ın ekonomik önerisinden öne çıkan noktalar şunlar:</p>
      
      <ul>
        <li>Kurumlar vergisi oranlarının %21'den %15'e düşürülmesi</li>
        <li>Tüm gelir dilimleri için ek gelir vergisi indirimleri</li>
        <li>Enerji, üretim ve finans sektörlerindeki düzenlemelerin kaldırılması</li>
        <li>Amerikan endüstrilerini korumak için ithal mallara yeni tarifeler getirilmesi</li>
      </ul>
      
      <p>Ekonomi uzmanları öneriye karışık tepkiler verdi. Bazıları ekonomik büyüme potansiyelini överken, diğerleri ulusal açık üzerindeki etkisi konusunda endişe duyuyor.</p>
      
      <p>Bu açıklama, Trump'ın kendisini Cumhuriyetçi siyasette kilit bir figür olarak konumlandırmaya devam ettiği ve gelecekteki siyasi hedefleri hakkındaki spekülasyonların yoğun bir şekilde tartışıldığı bir dönemde geliyor.</p>
    `,
  },
  {
    id: "2",
    title: "Musk, Tesla Araçları İçin Devrim Niteliğinde Yapay Zeka Entegrasyonunu Açıkladı",
    summary:
      "Elon Musk, Tesla'nın tüm araçlara gelişmiş yapay zeka yetenekleri entegre edeceğini ve yeni otonom özellikleri etkinleştireceğini duyurdu.",
    source: {
      name: "Elon Musk",
    },
    category: "Teknoloji",
    publishDate: "9 Nis 2025",
    readTime: "4 dk",
    content: `
      <p>Tesla CEO'su Elon Musk, bugün şirketin tüm araç yelpazesine "Tesla'nın tarihindeki en önemli yazılım güncellemesi" olarak tanımladığı çığır açan bir yapay zeka entegrasyonu yapacağını duyurdu.</p>
      
      <p>Yeni yapay zeka sistemi, "Tesla Mind" olarak adlandırılıyor ve mevcut Otopilot ve Tam Kendi Kendine Sürüş yeteneklerini geliştirirken, gelişmiş makine öğrenimi algoritmalarından yararlanan birkaç yeni özellik sunuyor.</p>
      
      <p>Musk, duyuru sırasında "Tesla Mind, otonom sürüş teknolojisinde büyük bir sıçramayı temsil ediyor" dedi. "Bu sadece kademeli bir iyileştirme değil, araçların çevreleriyle nasıl etkileşime girdiğinin ve kararlar aldığının temel bir yeniden tasarımı."</p>
      
      <p>Tesla Mind sisteminin temel özellikleri şunları içeriyor:</p>
      
      <ul>
        <li>Trafik modelleri ve yaya davranışları için gelişmiş tahmin yetenekleri</li>
        <li>Araç sahibinin tercihlerine göre sürüş deneyimini kişiselleştiren adaptif öğrenme</li>
        <li>Daha sezgisel sesli komutlar için gelişmiş doğal dil işleme</li>
        <li>Akıllı ev sistemleri ve kişisel programlarla sorunsuz entegrasyon</li>
      </ul>
      
      <p>Sektör analistleri, bu hamlenin Tesla'nın yapay zeka yeteneklerinin önemli bir farklılaştırıcı haline geldiği giderek rekabetçi elektrikli araç pazarında liderliğini sürdürmesini sağlayacağını belirtiyor.</p>
      
      <p>Güncellemenin önümüzdeki ay içinde Tesla araçlarına dağıtılmaya başlanması ve tam dağıtımın yıl sonuna kadar tamamlanması planlanıyor.</p>
    `,
  },
  {
    id: "3",
    title: "NASA, Mars'ta Eski Mikrobiyal Yaşam İzleri Keşfetti",
    summary:
      "NASA'nın Perseverance gezgini, Mars'ta eski mikrobiyal yaşamın varlığını gösteren ikna edici kanıtlar buldu.",
    source: {
      name: "NASA",
    },
    category: "Bilim",
    publishDate: "7 Nis 2025",
    readTime: "5 dk",
    content: `
      <p>Yüzyılın en önemli bilimsel keşiflerinden biri olabilecek bir gelişmede, NASA bugün Perseverance gezgininin Mars'ta eski mikrobiyal yaşamın varlığını güçlü bir şekilde gösteren kanıtlar bulduğunu açıkladı.</p>
      
      <p>Çığır açan bulgular, gezginin 2021 Şubat ayında inişinden bu yana keşif yaptığı Jezero Krateri içindeki eski bir göl yatağından toplanan kaya örneklerinin analizinden geliyor.</p>
      
      <p>"Bu örnekler, Dünya'da bulunan fosilleşmiş mikrobiyal hasırlara dikkat çekici şekilde benzeyen karmaşık organik bileşikler ve yapılar içeriyor" diye açıkladı Mars görevi için baş astrobiyolog Dr. Sarah Johnson. "Uygun bilimsel temkinle ilerlerken, eski mikrobiyal yaşam için kanıtlar daha önce gördüğümüz her şeyden daha ikna edici."</p>
      
      <p>Keşif şunları içeriyor:</p>
      
      <ul>
        <li>Biyolojik süreçlerle tutarlı düzenlerde karmaşık organik moleküller</li>
        <li>Fosilleşmiş bakteri kolonilerine benzeyen mikroskobik yapılar</li>
        <li>Dünya'nın en eski yaşam formlarının kullandıklarına benzer metabolik süreçleri gösteren kimyasal imzalar</li>
        <li>İlkel yaşam formlarını destekleyebilecek çevresel koşulların kanıtları</li>
      </ul>
      
      <p>NASA, bu örnekleri daha detaylı analiz için Dünya'ya getirecek olan Mars Örnek Dönüş görevi kapsamında bu örnekleri geri getirme planlarını başlattı.</p>
      
      <p>NASA Yöneticisi Bill Nelson, "Eğer doğrulanırsa, bu keşif evrendeki yaşama dair anlayışımızı temelden değiştiriyor" dedi. "Bu, yaşamın kozmosta daha önce düşündüğümüzden daha yaygın olabileceğini gösteriyor."</p>
    `,
  },
  {
    id: "4",
    title: "New York Times İnteraktif Veri Gazeteciliği Platformunu Başlattı",
    summary:
      "The New York Times, interaktif veri görselleştirme ve sürükleyici hikaye anlatımına adanmış yeni bir platform tanıttı.",
    source: {
      name: "The New York Times",
    },
    category: "News",
    publishDate: "6 Nis 2025",
    readTime: "2 dk",
    content: `
      <p>The New York Times, "Data Lens" adlı yenilikçi bir platform başlattı. Bu platform, okuyucuların interaktif veri görselleştirme ve sürükleyici hikaye anlatım teknikleri aracılığıyla haberlerle etkileşim kurma şeklini dönüştürmek için tasarlandı.</p>
      
      <p>Platform, dijital gazeteciliğe önemli bir yatırımı temsil ediyor ve okuyucuların karmaşık konuları kullanıcı girdisine ve tercihlerine yanıt veren özelleştirilebilir grafikler, haritalar ve interaktif öğeler aracılığıyla keşfetmelerine olanak tanıyor.</p>
      
      <p>The New York Times'ın yönetici editörü Dean Baquet, "Data Lens, bilgiyi daha erişilebilir ve ilgi çekici hale getirmekle ilgili" dedi. "Günümüzün bilgi açısından zengin ortamında, okuyucuların haberlerin bağlamını ve önemini anlamalarına yardımcı olacak araçları hak ettiklerine inanıyoruz."</p>
      
      <p>Data Lens platformunun temel özellikleri şunları içeriyor:</p>
      
      <ul>
        <li>Okuyucuların hikayelerin kendileri için en alakalı yönlerine odaklanmalarını sağlayan kişiselleştirilmiş veri keşif araçları</li>
        <li>Haberleri belirli bölgeler veya topluluklar içinde bağlamsallaştıran coğrafi görselleştirme</li>
        <li>Güncel olayları daha geniş bağlamda konumlandıran tarihsel trend analizi</li>
        <li>Mobil kullanıcılar için artırılmış gerçeklik özellikleriyle entegrasyon</li>
      </ul>
      
      <p>Platform, iklim değişikliği verileri, ekonomik eşitsizlik metrikleri ve küresel göç modelleri dahil olmak üzere kapsamlı görselleştirmeler içeren birkaç amiral gemisi projesiyle başlıyor.</p>
      
      <p>Medya analistleri, bu hamlenin geleneksel haber kuruluşlarının giderek rekabetçi bilgi ekosistemlerinde okuyucuları çekmeye çalıştıkça, dijital gazetecilikte daha interaktif ve kişiselleştirilmiş içerik deneyimlerine doğru daha geniş bir değişimi temsil ettiğini öne sürüyor.</p>
    `,
  },
]
