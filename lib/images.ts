/**
 * Every image is an Unsplash photo verified to be taken in the Philippines
 * (geotag or location caption checked against the Unsplash photo record).
 */
const img = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const ph = {
  // Cordillera & highland landscapes
  pulagSunset: img("1633670425294-cbf6ce988408", 2400), // Mt. Pulag sea of clouds at sunset
  pulagSunlight: img("1519869718241-60e98fc4f3e9"), // Mt. Pulag range under sunlight
  pulagHikers: img("1467429873259-12292d96a9ca"), // hikers on Mt. Pulag ridge
  pulagNight: img("1696511612368-ebb1a25a6b7e", 2200), // stars over Mt. Pulag
  pulagGolden: img("1675493421204-4d9abd607e07"), // golden sunset over Benguet peaks
  marlboroHill: img("1585761347573-0b9b767801cb", 2200), // Marlboro Hill, Sagada — misty ridges
  sagadaTerraces: img("1548710332-3e03e8220a79"), // Sagada rice terraces
  sagadaValley: img("1716863451342-f279ecac3d2b"), // lush Sagada valley
  sagadaRiver: img("1716863451551-305b5d868e77"), // river through Sagada valley
  sagadaGreen: img("1563175544-9759b48523b9"), // terraced Cordillera valley
  batadTerraces: img("1714746093194-90606d562049"), // Batad rice terraces, Ifugao
  batadAmphitheater: img("1711060169357-ed923c9f2156"), // Batad terrace amphitheater
  batadTrail: img("1711060204030-09b3ac1f1869"), // trail above Batad
  batadDusk: img("1598021273416-2c9b47519a5f"), // Batad mountain silhouette at dusk
  luzonForest: img("1575891467811-70c900ebd3ff", 2200), // aerial forest ridge, Luzon
  mindanaoClouds: img("1661200797529-c25677f64a14", 2200), // cloud-wrapped Mindanao range
  batangasRange: img("1598175703471-4d4d0f88f6f3"), // Batangas highlands
  zambalesRidge: img("1739769234533-99a3fba5f923"), // Mt. Kapigpiglatan ridge, Zambales
  anawanginPines: img("1605762721664-8db0d1249c79"), // pines by the water, Zambales
  baguioHills: img("1580127252363-1d29a1ff0603"), // Benguet mountain folds
  baguioTown: img("1666029584705-6c1d16984c22"), // Baguio town among mountains
  baguioPath: img("1627268770654-654e98b0a72b"), // grassy path, Baguio
  baguioPines: img("1573717317533-ea27c93bba5a"), // golden light through Baguio pines
  baguioValley: img("1704633112930-4d0e91db77e9"), // Baguio valley view
  elNidoStars: img("1756574533089-7253ab1eac65", 2200), // starry sky, Palawan

  // Stays, structures & interiors
  davaoCabins: img("1541695493187-0f94a5a7cc0e"), // lamplit cabins under pines, Davao
  negrosTents: img("1655298614846-1ca9a58b12c1"), // glamping tents in Negros forest
  alfonsoPorch: img("1723587363395-318cc7dd517c"), // carved wooden porch, Alfonso highlands
  iloiloSala: img("1775146089517-79a8ac943a7b"), // heritage capiz-window sala, Iloilo
  quezonDaybed: img("1733472107207-547dc85e1d31"), // handwoven daybed, Quezon
  familyBed: img("1587499078339-d3b5fe013b0a"), // family morning in bed, Metro Manila
  marivelesPool: img("1612073922730-892e51bd75f8"), // garden pool from above, Bataan
  cebuJunglePool: img("1709390084978-bd3e063a89ec"), // forest pool and falls, Cebu
  dauinTable: img("1691946070872-2b4334391e17"), // wooden table by a bright window, Dauin
  puntaBulataTable: img("1617337054175-60b92084a0bd"), // wooden dining set, Negros resort

  // Food & coffee
  tagaytayBreakfast: img("1531088009183-5ff5b7c95f91", 2000), // terrace breakfast over Tagaytay
  tagaytayBowl: img("1583913459026-781129ce061f"), // bowl of home cooking, Tagaytay
  bananaLeafFeast: img("1537495988501-f9cd94a78f3e"), // fried feast on banana leaf, QC
  silogPlate: img("1536489885071-87983c3e2859"), // rice, okra, eggplant, salted egg
  manilaGrill: img("1593870682262-8c9f6a9bb225"), // meat over charcoal, Manila
  nativeSoup: img("1534596382981-1974b10d4e1a"), // brothy soup plate, QC
  bananaFritters: img("1540714605746-4f474eefc6d4"), // banana fritters, QC
  toastEggBreakfast: img("1533089860892-a7c6f0a88666"), // toast and fried egg breakfast, QC
  siargaoBowls: img("1557568951-a691f75c810f"), // cafe bowls, Siargao
  ozamizCoffee: img("1687841148082-ff56594dc4b2"), // pour-over cup, Ozamiz
  cebuLatte: img("1747147122505-48ddd6cb2da3"), // latte art, Cebu
  manilaCoffee: img("1527678357412-ef45dfbd9ecc"), // black coffee, Mandaluyong

  // Fire & night
  bonfire: img("1595179519946-3c4880add937"), // bonfire sparks, Pangasinan
};
