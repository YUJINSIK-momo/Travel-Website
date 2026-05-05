import maldives from '../assets/maldives.jpg';
import borabora from '../assets/borabora.jpg';
import kyoto from '../assets/kyoto.jpeg';
import tokyo from '../assets/tokyo.jpg';
import hokaido from '../assets/hokaido.jpeg';
import keywest from '../assets/keywest.jpg';

const destinations = [
  {
    id: 1,
    name: { ko: '몰디브', en: 'Maldives', ja: 'モルディブ' },
    description: {
      ko: '세상에서 가장 아름다운 산호초와 투명한 에메랄드빛 바다',
      en: 'Crystal clear waters and stunning coral reefs in paradise',
      ja: '世界で最も美しいサンゴ礁と透明なエメラルドの海',
    },
    image: maldives,
    tag: 'Best Seller',
    price: '₩1,890,000',
    rating: 4.9,
  },
  {
    id: 2,
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
    id: 3,
    name: { ko: '교토', en: 'Kyoto', ja: '京都' },
    description: {
      ko: '천년 고도의 신사와 전통이 살아숨쉬는 일본의 보석',
      en: 'Ancient temples and timeless tradition in Japan\'s cultural heart',
      ja: '千年の古都、神社と伝統が息づく日本の宝石',
    },
    image: kyoto,
    tag: 'Recommended',
    price: '₩890,000',
    rating: 4.7,
  },
  {
    id: 4,
    name: { ko: '도쿄', en: 'Tokyo', ja: '東京' },
    description: {
      ko: '현대와 전통이 공존하는 활기찬 세계 최고의 도시',
      en: 'Where futuristic innovation meets centuries-old tradition',
      ja: '現代と伝統が共存する活気ある世界都市',
    },
    image: tokyo,
    tag: 'Trending',
    price: '₩750,000',
    rating: 4.8,
  },
  {
    id: 5,
    name: { ko: '홋카이도', en: 'Hokkaido', ja: '北海道' },
    description: {
      ko: '광활한 자연과 사계절 내내 펼쳐지는 아름다운 설경',
      en: 'Vast nature and breathtaking snowscapes throughout all seasons',
      ja: '広大な自然と四季折々の美しい雪景色',
    },
    image: hokaido,
    tag: 'Recommended',
    price: '₩980,000',
    rating: 4.6,
  },
  {
    id: 6,
    name: { ko: '키웨스트', en: 'Key West', ja: 'キーウェスト' },
    description: {
      ko: '카리브해 분위기가 가득한 플로리다 최남단의 낙원',
      en: 'The southernmost US paradise with vibrant Caribbean vibes',
      ja: 'カリブ海の雰囲気漂うフロリダ最南端のパラダイス',
    },
    image: keywest,
    tag: 'Best Seller',
    price: '₩2,450,000',
    rating: 4.7,
  },
];

export default destinations;
