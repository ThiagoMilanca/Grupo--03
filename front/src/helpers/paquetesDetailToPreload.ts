const paquetesDatailToPreload = [

  {
    id: 1,
    image1: "/Imagenes detalle Paquete/Colosseum/Colosseum1.jpg",
    image2: "/Imagenes detalle Paquete/Colosseum/Colosseum2.jpg",
    image3: "/Imagenes detalle Paquete/Colosseum/Colosseum3.jpg",
    title: "Colosseum Guided Tour with Skip-the-Line",
    description:
      "Go behind the scenes at the world-famous Colosseum with a local guide.",
    description2:
      "Este tour ofrece una experiencia única y exclusiva al Colosseum, donde no solo evitarás las largas filas, sino que también tendrás acceso a áreas restringidas que normalmente están cerradas al público. Podrás caminar por las mismas arenas donde los gladiadores lucharon hace siglos y explorar los misteriosos túneles subterráneos, guiado por un experto local que te contará historias fascinantes y detalles históricos poco conocidos. Es una inmersión total en la historia y cultura de la antigua Roma, ideal para quienes desean una comprensión más profunda de este icónico monumento.",
    price: 100,
    location: "Rome, Italy",
    duration: "1 Day",
    stock: 5,
    categories: ["diseño de sonrisa", "europa", "italia"],
  },
  {
    id: 2,
    image1: "/Imagenes detalle Paquete/Statue of Liberty/Statue1.jpg",
    image2: "/Imagenes detalle Paquete/Statue of Liberty/Statue2.jpg",
    image3: "/Imagenes detalle Paquete/Statue of Liberty/Statue3.jpg",
    title: "Statue of Liberty and Ellis Island Tour",
    description:
      "Experience breathtaking views of the Statue of Liberty and Ellis Island.",
    description2:
      "Este tour te lleva más allá de lo que la mayoría de los visitantes experimentan. No solo admirarás la majestuosa Estatua de la Libertad desde lejos, sino que también tendrás la oportunidad de subir al pedestal y disfrutar de vistas panorámicas incomparables de Nueva York. Además, el recorrido incluye una visita a Ellis Island, donde podrás explorar el Museo Nacional de Inmigración y conocer las conmovedoras historias de millones de inmigrantes que llegaron a Estados Unidos en busca de una vida mejor. Es una experiencia enriquecedora que ofrece una conexión profunda con la historia y el espíritu de la libertad.",
    price: 150,
    location: "New York, USA",
    duration: "Half Day",
    stock: 5,
    categories: ["américa", "estados unidos"],
  },
  {
    id: 3,
    image1: "/Imagenes detalle Paquete/The big buddha/Buddha1.jpg",
    image2: "/Imagenes detalle Paquete/The big buddha/Buddha2.jpg",
    image3: "/Imagenes detalle Paquete/The big buddha/Buddha3.jpg",
    title: "Fushimi Inari Taisha Shrine Morning Tour",
    description:
      "Avoid the long queues and enjoy a morning tour of Fushimi Inari Taisha Shrine.",
    description2:
      "Este tour matutino al Santuario Fushimi Inari Taisha ofrece una experiencia espiritual y cultural única en uno de los sitios más emblemáticos de Japón. Llegar temprano te permite disfrutar de la tranquilidad del lugar, lejos de las multitudes, y explorar los miles de torii (puertas) rojas que serpentean por las montañas. A lo largo del recorrido, un guía experto te ofrecerá insights sobre la historia, el simbolismo y las tradiciones asociadas con este importante lugar de culto. Este tour es perfecto para quienes buscan una experiencia introspectiva y auténtica en la serenidad de la naturaleza japonesa.",
    price: 80,
    location: "Kyoto, Japan",
    duration: "3 Hours",
    stock: 5,
    categories: ["asia", "japón"],
  },
  {
    id: 4,
    image1: "/Imagenes detalle Paquete/Sydney Opera/Sydney1.jpg",
    image2: "/Imagenes detalle Paquete/Sydney Opera/Sydney2.jpg",
    image3: "/Imagenes detalle Paquete/Sydney Opera/Sydney3.jpg",
    title: "Sydney Opera House Guided Tour",
    description: "Explore the iconic Sydney Opera House with an expert guide.",
    description2:
      "Este recorrido guiado por la Ópera de Sídney te ofrece una mirada exclusiva a uno de los edificios más icónicos del mundo. Con acceso a áreas detrás de escena, tendrás la oportunidad de ver cómo funciona este impresionante centro cultural desde adentro. El guía te contará sobre la historia arquitectónica y las increíbles hazañas de ingeniería que hicieron posible su construcción. Además, conocerás detalles fascinantes sobre los famosos eventos y actuaciones que han tenido lugar aquí, lo que convierte a este tour en una experiencia imprescindible para cualquier amante del arte y la arquitectura.",
    price: 200,
    location: "Sydney, Australia",
    duration: "2 Hours",
    stock: 5,
    categories: ["oceanía", "australia"],
  },
  {
    id: 5,
    image1: "/Imagenes detalle Paquete/Christ the Redeemer/Christ1.jpg",
    image2: "/Imagenes detalle Paquete/Christ the Redeemer/Christ2.jpg",
    image3: "/Imagenes detalle Paquete/Christ the Redeemer/Christ3.jpg",
    title: "Christ the Redeemer and Sugarloaf Mountain Tour",
    description:
      "Walk along the iconic Christ the Redeemer and enjoy stunning views of Sugarloaf Mountain.",
    description2:
      "Este tour te lleva a dos de los destinos más emblemáticos de Brasil, el Cristo Redentor y el Pan de Azúcar, ofreciendo una experiencia que combina belleza natural y cultural. Comenzarás con una visita al Cristo Redentor, una de las Nuevas Siete Maravillas del Mundo, donde podrás disfrutar de vistas panorámicas de Río de Janeiro. Luego, subirás al Pan de Azúcar en un teleférico, donde te esperan vistas aún más impresionantes de la ciudad y sus playas. Un guía local te acompañará, compartiendo información fascinante sobre la historia y cultura de la región, haciendo de este un tour inolvidable.",
    price: 120,
    location: "Rio de Janeiro, Brazil",
    duration: "1 Day",
    stock: 5,
    categories: ["américa", "brasil"],
  },
  {
    id: 6,
    image1: "/Imagenes detalle Paquete/Pyramids of Giza/Pyramids1.jpg",
    image2: "/Imagenes detalle Paquete/Pyramids of Giza/Pyramids2.jpg",
    image3: "/Imagenes detalle Paquete/Pyramids of Giza/Pyramids3.jpg",
    title: "Pyramids of Giza and Sphinx Day Tour",
    description:
      "Embark on an unforgettable day tour of the Pyramids of Giza and Sphinx.",
    description2:
      "Este tour de un día completo te brinda la oportunidad de explorar las maravillas del antiguo Egipto en un recorrido exhaustivo y lleno de historia. Con un guía egiptólogo a tu lado, descubrirás los secretos de las pirámides de Giza, la Esfinge y otros sitios emblemáticos. Además, tendrás acceso a áreas restringidas donde podrás ver de cerca la increíble construcción de estas estructuras milenarias. La experiencia se complementa con historias y leyendas fascinantes que te transportarán al pasado, haciendo de este tour una experiencia educativa y emocionante para los amantes de la historia.",
    price: 180,
    location: "Cairo, Egypt",
    duration: "1 Day",
    stock: 5,
    categories: ["áfrica", "egipto"],
  },
  {
    id: 7,
    image1: "/Imagenes detalle Paquete/Maui/Maui1.jpg",
    image2: "/Imagenes detalle Paquete/Maui/Maui2.jpg",
    image3: "/Imagenes detalle Paquete/Maui/Maui3.jpg",
    title: "Maui Helicopter Tour with Ocean Views",
    description:
      "Enjoy a thrilling helicopter tour of Maui with breathtaking ocean views.",
    description2:
      "Este tour en helicóptero por Maui es una experiencia incomparable para quienes buscan aventura y vistas espectaculares. Desde el aire, podrás apreciar la impresionante belleza de la isla, con sus cascadas, acantilados y playas de arena blanca. Además, sobrevolarás el cráter Haleakala, uno de los volcanes inactivos más grandes del mundo. La vista del océano Pacífico desde esta perspectiva es simplemente impresionante. Con un piloto experimentado que compartirá su conocimiento sobre la geografía y la historia de la isla, este tour es una aventura que no querrás perderte.",
    price: 250,
    location: "Maui, Hawaii",
    duration: "2 Hours",
    stock: 5,
    categories: ["oceanía", "hawái"],
  },
];

export default paquetesDatailToPreload;

/*
  const tours = [
    {
      id: 1,
      image: "/product.png",
      image2: "/product.png",
      image3: "/product.png",
      title: "Colosseum Guided Tour with Skip-the-Line",
      description:
      "Explore the iconic Colosseum with a professional guide and skip the long lines.",
      description2:
      "Explore the iconic Colosseum with a professional guide and skip the long lines.",
      price: "127",
      location: "Rome, Italy",
      duration: "1 Day",
    },
    {
      id: 2,
      image: "/product2.png",
      image2: "/product.png",
      image3: "/product.png",
      title: "Statue of Liberty and Ellis Island Tour",
      description:
      "Visit two of New York’s most famous landmarks with an expert guide.",
      description2:
      "Explore the iconic Colosseum with a professional guide and skip the long lines.",
      price: "63",
      location: "New York, USA",
      duration: "Half Day",
    },
    {
      id: 3,
      image: "/product3.png",
      image2: "/product.png",
      image3: "/product.png",
      title: "Fushimi Inari Taisha Shrine Morning Tour",
      description:
      "Experience the serene beauty of Kyoto’s famous shrine in the early morning.",
      description2:
      "Explore the iconic Colosseum with a professional guide and skip the long lines.",
      price: "40",
      location: "Kyoto, Japan",
      duration: "3 Hours",
    },
    {
      id: 4,
      image: "/product4.png",
      image2: "/product.png",
      image3: "/product.png",
      title: "Sydney Opera House Guided Tour",
      description:
      "Go behind the scenes at the world-famous Sydney Opera House with a local guide.",
      description2:
      "Explore the iconic Colosseum with a professional guide and skip the long lines.",
      price: "75",
      location: "Sydney, Australia",
      duration: "2 Hours",
    },
    {
      id: 5,
      image: "/product.png",
      discount: "5% OFF",
      featured: false,
      title: "Christ the Redeemer and Sugarloaf Mountain Tour",
      description:
      "Witness the breathtaking views from two of Rio’s most famous landmarks.",
      rating: "4.7",
      reviews: 180,
      oldPrice: "$80",
      price: "$76",
      location: "Rio de Janeiro, Brazil",
      duration: "1 Day",
    },
    {
      id: 6,
      image: "/product.png",
      discount: "20% OFF",
      featured: true,
      title: "Pyramids of Giza and Sphinx Day Tour",
      description:
      "Discover the ancient wonders of Egypt with a guided tour of the Pyramids of Giza.",
      rating: "4.9",
      reviews: 400,
      oldPrice: "$200",
      price: "$160",
      location: "Cairo, Egypt",
      duration: "1 Day",
    },
    {
      id: 7,
      image: "/product.png",
      discount: "30% OFF",
      featured: false,
      title: "Maui Helicopter Tour with Ocean Views",
      description:
      "Fly over the stunning landscapes of Maui, including its famous beaches and volcanoes.",
      rating: "4.8",
      reviews: 250,
      oldPrice: "$300",
      price: "$210",
      location: "Maui, Hawaii",
      duration: "2 Hours",
    },
  ];*/
