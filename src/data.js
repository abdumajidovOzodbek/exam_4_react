import red from '../public/image/red.png'
import orange from '../public/image/orange.png'
import white from '../public/image/white.png'
import black from '../public/image/black.png'
import yellow from '../public/image/yellow.png'
import earport1 from '../public/image/earport1.png'
import earport2 from '../public/image/earport2.png'
import earport3 from '../public/image/earport3.png'
import earport4 from '../public/image/earport4.png'
import earport5 from '../public/image/earport5.png'
import earport6 from '../public/image/earport6.png'
import earport7 from '../public/image/earport7.png'
import earport8 from '../public/image/earport8.png'
import earport9 from '../public/image/earport9.png'
import earport10 from '../public/image/earport10.png'
import earport11 from '../public/image/earport11.png'
import dron1 from '../public/image/dron1.png'
import dron2 from '../public/image/dron2.png'
import dron3 from '../public/image/dron3.png'
import dron4 from '../public/image/dron4.png'


// eslint-disable-next-line no-unused-vars
const db = [
  {
    id: 1,
    image: earport1,
    type: "speaker",
    price: 2300,
    title: "Apple earport s",
    desciption: {
      about:
        "Компактный адаптер питания с двумя портами USB-C мощностью 35 Вт позволяет заряжать два устройства одновременно, независимо от того, находитесь ли вы дома, в офисе или в дороге. Компактный размер и складные зубцы позволяют легко упаковывать и хранить. Apple рекомендует использовать его с MacBook Air. Вы также можете использовать его с iholder, iPad, Apple Watch и AirPods.",
      battery: "35W",
    },
  },
  {
    id: 2,
    image: earport2,
    price: 1700,
    type: "speaker",
    title: "Apple earport s1",
    desciption: {
      about:
        "В отличие от круглой формы обычных наушников-вкладышей, конструкция новых наушников EarPods продиктована геометрией ушной раковины",
      battery: "70W",
    },
  },
  {
    id: 3,
    image: earport3,
    price: 2010,
    type: "speaker",
    title: "Apple earport 9",
    desciption: {
      about:
        "Беспроводное зарядное устройство 2 в 1: зарядная станция для аккумулятора и Power Bank для смартфонов и других гаджетов. Поддерживается одновременная зарядка сразу 3-ех устройств. Стоит защита от инородных тел, короткого замыкания, перезарядки аккумулятора и так далее",
      battery: "55W",
    },
  },
  {
    id: 4,
    image: earport4,
    type: "speaker",
    price: 1090,
    title: "Apple earport s5",
    desciption: {
      about:
        "Портативный аккумулятор со встроенной беспроводной зарядкой с поддержкой стандарта Qi. В комплект входит подставка для вертикальной зарядки самого аккумулятора, при этом на него можно установить",
      battery: "80W",
    },
  },
  {
    id: 5,
    image: earport5,
    type: "speaker",
    price: 2610,
    title: "Apple earport s1",
    desciption: {
      about:
        "Компактная и портативная конструкция LDNIO A2421C в купе с мощностью 22.5 Вт и встроенными протоколами быстрой зарядки делает адаптер LDNIO незаменимым в современной жизни для зарядки повседневных аксессуаров.",
      battery: "105W",
    },
  },
  {
    id: 6,
    image: earport6,
    type: "speaker",
    price: 1890,
    title: "Apple earport e3",
    desciption: {
      about:
        "Высокая емкость обеспечивает большее количество зарядок за более короткое время. Вы можете легко делиться им с друзьями. Xiaomi Mi Wireless Power Bank 30W имеет аккумулятор емкостью 10000 мАч.",
      battery: "85W",
    },
  },
  {
    id: 7,
    image: red,
    type: "holder",
    price: 1560,
    title: "чехол red",
    desciption: {
      about:
        "color-red",
      battery: "",
    },

  },
  {
    id: 8,
    image: yellow,
    type: "holder",
    price: 1980,
    title: "чехол yellow",
    desciption: {
      about:
        "color-yellow",
      battery: "",
    },
  },
  {
    id: 9,
    image: black,
    type: "holder",
    price: 900,
    title: "чехол black",
    desciption: {
      about:
        "color-black",
      battery: "",
    },

  },
  {
    id: 10,
    image: white,
    type: "holder",
    price: 1800,
    title: "чехол white",
    desciption: {
      about:
        "color-white",
      battery: "",
    },

  },
  {
    id: 11,
    image: orange,
    type: "holder",
    price: 810,
    title: "чехол orange",
    desciption: {
      about:
        "color-orange",
      battery: "",
    },

  },
  {
    id: 12,
    image: earport7,
    price: 9010,
    type: "speaker",
    title: "Apple earport0s",
    desciption: {
      about: 'изменение имени наушников вес и внешний вид полностью соответствуют настоящей версии',
      battery: "40W",
    },
  },
  {
    id: 13,
    image: earport8,
    price: 8910,
    type: "speaker",
    title: 'speaker s4 ',
    desciption: {
      about: "4 полные зарядки от кейса.- всплывающее окно при подключении- работают со всеми типами устройств iOS, Android.",
      battery: "60W",
    },
  },
  {
    id: 14,
    image: earport9,
    type: "speaker",
    price: 7810,
    title: "speaker y5",
    desciption: {
      about: "наушники AirPods;- зарядный чехол;- 6 амбушюр (2 на наушниках и 4 запасных);",
      battery: "70W",
    },
  },
  {
    id: 15,
    image: earport10,
    type: "speaker",
    price: 9000,
    title: "speaker7",
    desciption: {
      about: "- Lightning / typec - инструкция;В комплектаций коробка, документация, гарнитура и кабель Lightning/USB-C",
      battery: "90W",
    },
  },
  {
    id: 16,
    image: earport11,
    type: "speaker",
    price: 8900,
    title: "speaker 9",
    desciption: {
      about: "Настраиваются в одно касание, Вызов голосового ассистента.",
      battery: "90W",
    },
  },
  {
    id: 17,
    image: dron1,
    type: "dron",
    price: 1100,
    title: "BOROFONE",
    desciption: {
      about: "Беспроводное соединение 2,4G.Дальность передачи расстояние составляет 120 метров (без препятствий), наилучшее рекомендуемое расстояние составляет 15 метров.",
      battery: "30W",
    },
  },
  {
    id: 18,
    image: dron2,
    type: "dron",
    price: 1002,
    title: "BOROFONE-2",
    desciption: {
      about: "Емкость аккумулятора: микрофон 70 мАч; зарядный кейс 450мАч.Время работы: 4 часа, поддержка быстрой зарядки: зарядка 5 минут, использование 1 час.",
      battery: "85W",
    },
  },
  {
    id: 19,
    image: dron3,
    type: "dron",
    price: 1050,
    title: "BOROFONE-3",
    desciption: {
      about: "Ремешок миланская петля. Ремешок действительно один из самых интересных и функциональных, так как совмещает в себе, казалось бы не совместимые вещи.Изготовлен из стали,при этом совсем не тяжелый и эластичный",
      battery: "55W",
    },
  },
  {
    id: 20,
    image: dron4,
    type: "dron",
    price: 1000,
    title: "BOROFONE-4",
    desciption: {
      about: "Деловой и строгий внешний вид и спортивные возможности, не намокает,абсолютно не боится воды и пота. Дышаший, очень прочный, стильный и с максимально удобной застежкой которую в течении дня",
      battery: "45W",
    },
  },
];
export const data= JSON.parse(localStorage.getItem('data'));
export const restarant= JSON.parse(localStorage.getItem('restarant'));
console.log(restarant);