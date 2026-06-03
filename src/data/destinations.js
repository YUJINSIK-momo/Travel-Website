import kyoto from '../assets/kyouto.jpeg';
import tokyo from '../assets/tokyo.jpg';
import hokaido from '../assets/hokaido.jpeg';
import sapporo from '../assets/event/1.jpeg';
import iwate from '../assets/iwate.jpeg';
import oita from '../assets/oita.jpeg';
import arashiyama from '../assets/event/4.jpeg';
import torii from '../assets/jinzya.jpeg';
import disney from '../assets/dizuni.jpg';
import maldives from '../assets/maldives.jpg';
import borabora from '../assets/borabora.jpg';
import keywest from '../assets/keywest.jpg';

const destinations = [
  {
    id: 1,
    name: { ko: '교토', en: 'Kyoto', ja: '京都' },
    description: {
      ko: '천년 고도의 신사와 단풍이 어우러진 기요미즈데라의 환상적인 야경',
      en: 'Ancient temples and autumn leaves illuminating Kiyomizu-dera in the old capital',
      ja: '千年の古都、紅葉と神社が織りなす清水寺の幻想的な夜景',
    },
    image: kyoto,
    tag: 'Best Seller',
    price: '₩890,000',
    rating: 4.9,
  },
  {
    id: 2,
    name: { ko: '도쿄', en: 'Tokyo', ja: '東京' },
    description: {
      ko: '현대와 전통이 공존하는 활기찬 세계 최고의 메가시티',
      en: 'A vibrant megacity where futuristic innovation meets timeless tradition',
      ja: '現代と伝統が共存する活気あふれる世界都市',
    },
    image: tokyo,
    tag: 'Trending',
    price: '₩750,000',
    rating: 4.8,
  },
  {
    id: 3,
    name: { ko: '홋카이도', en: 'Hokkaido', ja: '北海道' },
    description: {
      ko: '광활한 대자연과 사계절 내내 펼쳐지는 아름다운 설경',
      en: 'Vast wilderness and breathtaking snowscapes through every season',
      ja: '広大な自然と四季折々の美しい雪景色',
    },
    image: hokaido,
    tag: 'Recommended',
    price: '₩980,000',
    rating: 4.7,
  },
  {
    id: 4,
    name: { ko: '삿포로', en: 'Sapporo', ja: '札幌' },
    description: {
      ko: '황금빛 은행나무 가로수와 낭만이 흐르는 밤거리',
      en: 'Golden ginkgo avenues and romantic, glittering night streets',
      ja: '黄金色のイチョウ並木とロマンあふれる夜の街',
    },
    image: sapporo,
    tag: 'Trending',
    price: '₩890,000',
    rating: 4.6,
  },
  {
    id: 5,
    name: { ko: '이와테', en: 'Iwate', ja: '岩手' },
    description: {
      ko: '물안개 피어오르는 호수와 단풍이 물드는 동북의 비경',
      en: 'Misty lakes and crimson foliage hidden in the heart of Tohoku',
      ja: '霧立ちのぼる湖と紅葉に染まる東北の秘境',
    },
    image: iwate,
    tag: 'Recommended',
    price: '₩690,000',
    rating: 4.7,
  },
  {
    id: 6,
    name: { ko: '벳푸·오이타', en: 'Beppu, Oita', ja: '別府・大分' },
    description: {
      ko: '김이 피어오르는 노천 온천과 단풍 속의 깊은 휴식',
      en: 'Steaming open-air hot springs and deep rest among autumn maples',
      ja: '湯気立ちのぼる露天風呂と紅葉の中の深い癒し',
    },
    image: oita,
    tag: 'Best Seller',
    price: '₩820,000',
    rating: 4.8,
  },
  {
    id: 7,
    name: { ko: '아라시야마', en: 'Arashiyama', ja: '嵐山' },
    description: {
      ko: '도게쓰교와 대나무 숲이 빛나는 교토의 사계',
      en: "The Togetsukyo bridge and bamboo groves through Kyoto's seasons",
      ja: '渡月橋と竹林が輝く京都の四季',
    },
    image: arashiyama,
    tag: 'Recommended',
    price: '₩910,000',
    rating: 4.8,
  },
  {
    id: 8,
    name: { ko: '시라히게 신사', en: 'Shirahige Shrine', ja: '白鬚神社' },
    description: {
      ko: '비와코 수면 위로 떠오르는 신비로운 일몰의 토리이',
      en: 'A mystical torii gate rising from Lake Biwa at sunset',
      ja: '琵琶湖の湖面に浮かぶ神秘的な夕暮れの鳥居',
    },
    image: torii,
    tag: 'Trending',
    price: '₩740,000',
    rating: 4.9,
  },
  {
    id: 9,
    name: { ko: '도쿄 디즈니리조트', en: 'Tokyo Disney Resort', ja: '東京ディズニーリゾート' },
    description: {
      ko: '불꽃과 조명이 수놓는 꿈 같은 테마파크의 밤',
      en: 'A dreamlike theme-park night lit by fireworks and lights',
      ja: '花火とイルミネーションが彩る夢のようなテーマパークの夜',
    },
    image: disney,
    tag: 'Best Seller',
    price: '₩650,000',
    rating: 4.7,
  },
  {
    id: 10,
    name: { ko: '몰디브', en: 'Maldives', ja: 'モルディブ' },
    description: {
      ko: '세상에서 가장 아름다운 산호초와 투명한 에메랄드빛 바다',
      en: 'Crystal clear waters and stunning coral reefs in paradise',
      ja: '世界で最も美しいサンゴ礁と透明なエメラルドの海',
    },
    image: maldives,
    tag: 'Recommended',
    price: '₩1,890,000',
    rating: 4.9,
  },
  {
    id: 11,
    name: { ko: '보라보라', en: 'Bora Bora', ja: 'ボラボラ' },
    description: {
      ko: '남태평양의 에메랄드빛 석호와 수상 방갈로의 낭만',
      en: 'Emerald lagoons and overwater bungalows in the South Pacific',
      ja: '南太平洋のエメラルドのラグーンと水上バンガローの浪漫',
    },
    image: borabora,
    tag: 'Trending',
    price: '₩2,150,000',
    rating: 4.8,
  },
  {
    id: 12,
    name: { ko: '키웨스트', en: 'Key West', ja: 'キーウェスト' },
    description: {
      ko: '카리브해 분위기가 가득한 플로리다 최남단의 낙원',
      en: 'The southernmost US paradise with vibrant Caribbean vibes',
      ja: 'カリブ海の雰囲気漂うフロリダ最南端のパラダイス',
    },
    image: keywest,
    tag: 'Recommended',
    price: '₩2,450,000',
    rating: 4.7,
  },
];

export default destinations;
