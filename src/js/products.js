/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  /*
    {
      id: "P1",
      title: "Title 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
 */
  {
    id: "p1",
    title: "Sony WH1000XM4",
    description:
      "Over-ear Bluetooth headphones, successor of the XM3 model with improved durability, battery life and noise cancelling capabilities",
    price: 49999,
    discontinued: false,
    categories: ["c1", "c7"],
    imageUrl: "img/h1.png"
  },
  {
    id: "p2",
    title: "Sony WH1000XM3",
    description:
      "Over-ear Bluetooth headphones with adaptive noise cancelling technology, touch sensor controls",
    price: 34999,
    discontinued: true,
    categories: ["c1", "c7"],
    imageUrl: "img/h2.png"
  },
  {
    id: "p3",
    title: "Bose QuietComfort 45",
    description:
      "Over-ear Bluetooth headphones with specially made smooth and cushioned earcups to offer a comfortable listening experience",
    price: 44999,
    discontinued: false,
    categories: ["c1", "c7"],
    imageUrl: "img/h3.png"
  },
  {
    id: "p4",
    title: "ClearTones CL12",
    description:
      "Bluetooth headphones with adaptive ambient noise controls, ability to detect speech and automatically turn off noise cancelling",
    price: 29999,
    discontinued: true,
    categories: ["c1", "c7"],
    imageUrl: "img/h4.png"
  },
  {
    id: "p5",
    title: "HyperX Cloud II",
    description:
      "Wireless gaming headset with 30 hours battery life and high durability, built to survive gamer rage",
    price: 22999,
    discontinued: false,
    categories: ["c2", "c7"],
    imageUrl: "img/g5.png"
  },
  {
    id: "p6",
    title: "Razer BlackShark V2 X",
    description: "Wired gaming headset compatible with PC, Xbox and Playstation consoles",
    price: 5999,
    discontinued: false,
    categories: ["c2", "c6"],
    imageUrl: "img/g2.png"
  },
  {
    id: "p7",
    title: "Razer Kraken",
    description: "Wireless gaming headset with built in microphone and noise isolation",
    price: 11999,
    discontinued: false,
    categories: ["c2", "c7"],
    imageUrl: "img/g1.png"
  },
  {
    id: "p8",
    title: "Razer Kraken Kitty Edition",
    description:
      "The Razer Kraken with a cute spin to it, adding cat ears with all the same functionality",
    price: 13999,
    discontinued: false,
    categories: ["c2", "c7"],
    imageUrl: "img/g4.png"
  },
  {
    id: "p9",
    title: "Aquarius Predator B2",
    description:
      "Wireless waterproof gaming headset with a detachable microphone and noise cancelling",
    price: 49999,
    discontinued: false,
    categories: ["c2", "c7"],
    imageUrl: "img/g3.png"
  },
  {
    id: "p10",
    title: "Sony SRS-XB13",
    description: "Waterproof Bluetooth speaker with long lasting battery and high durability",
    price: 7999,
    discontinued: false,
    categories: ["c5", "c7"],
    imageUrl: "img/s1.png"
  },
  {
    id: "p11",
    title: "Bose S1 Pro",
    description: "Bluetooth PA Speaker, designed for professionals, lightweight and powerful",
    price: 81099,
    discontinued: false,
    categories: ["c5", "c7"],
    imageUrl: "img/s2.png"
  },
  {
    id: "p12",
    title: "Sony SS-CS5",
    description: "Pair of speakers with high-end sound technology, no loss, wire sold seperately",
    price: 29999,
    discontinued: false,
    categories: ["c5", "c6"],
    imageUrl: "img/s3.png"
  },
  {
    id: "p13",
    title: "Seneca Wall Speaker Set",
    description:
      "Set of 10 speakers designed for classrooms, loud and clear sound, high durability",
    price: 199999,
    discontinued: false,
    categories: ["c5", "c6"],
    imageUrl: "img/s4.png"
  },
  {
    id: "p14",
    title: "BrightNoise XB2",
    description:
      "Ceiling speaker that doubles as a light source, replacable LED light bulb, optional bluetooth",
    price: 29999,
    discontinued: false,
    categories: ["c5", "c6"],
    imageUrl: "img/s5.png"
  },
  {
    id: "p15",
    title: "Blue Microphones Yeti",
    description:
      "USB microphone with omnidirectional/stereo sound modes, foldable and compatible with both MAC and Windows",
    price: 12999,
    discontinued: false,
    categories: ["c4", "c6"],
    imageUrl: "img/mw.png"
  },
  {
    id: "p16",
    title: "Blue Microphones SnowBall iCE",
    description: "USB microphone with simple plug-and-play technology, tripod included",
    price: 6999,
    discontinued: false,
    categories: ["c4", "c6"],
    imageUrl: "img/mw.png"
  },
  {
    id: "p17",
    title: "Bose Sport Earbuds",
    description:
      "In-Ear Truly Wireless Earphones, design helps anchor the earbud in-ear to prevent falling out during physical activities",
    price: 23999,
    discontinued: true,
    categories: ["c3", "c7"],
    imageUrl: "img/e1.png"
  },
  {
    id: "p18",
    title: "Apple Airpod Pro",
    description:
      "In-Ear Truly Wireless Earphones with active noise cancellation, water resistance, effortless setup for Apple devices",
    price: 26999,
    discontinued: false,
    categories: ["c3", "c7"],
    imageUrl: "img/airpods.png"
  },
  {
    id: "p19",
    title: "Sony WF1000XM4",
    description:
      "In-ear Truly Wireless Earphones with active noise cancelling, programmable buttons and boosted bass",
    price: 39999,
    discontinued: false,
    categories: ["c3", "c7"],
    imageUrl: "img/e2.png"
  },
  {
    id: "p20",
    title: "Buwohones",
    description:
      "Bluetooth earphones with buwoosted bass, buwoosted charging speed, and buwoosted battery life",
    price: 1337,
    discontinued: false,
    categories: ["c3", "c7"],
    imageUrl: "img/e3.png"
  }
];
