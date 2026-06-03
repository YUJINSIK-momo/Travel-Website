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
  {
    id: 7,
    name: { ko: '산토리니', en: 'Santorini', ja: 'サントリーニ' },
    description: {
      ko: '에게해를 굽어보는 새하얀 절벽 마을과 황홀한 일몰',
      en: 'Whitewashed cliff villages and mesmerizing sunsets over the Aegean Sea',
      ja: 'エーゲ海を見下ろす白い崖の村と魅惑的な夕日',
    },
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80',
    tag: 'Best Seller',
    price: '₩2,290,000',
    rating: 4.9,
  },
  {
    id: 8,
    name: { ko: '파리', en: 'Paris', ja: 'パリ' },
    description: {
      ko: '예술과 낭만이 흐르는 빛의 도시, 에펠탑의 야경',
      en: 'The city of light where art and romance meet beneath the Eiffel Tower',
      ja: '芸術とロマンが流れる光の都、エッフェル塔の夜景',
    },
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    tag: 'Trending',
    price: '₩1,290,000',
    rating: 4.7,
  },
  {
    id: 9,
    name: { ko: '스위스 알프스', en: 'Swiss Alps', ja: 'スイスアルプス' },
    description: {
      ko: '만년설과 청정 호수가 어우러진 유럽의 지붕',
      en: 'Snow-capped peaks and pristine lakes atop the roof of Europe',
      ja: '万年雪と清らかな湖が調和するヨーロッパの屋根',
    },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    tag: 'Recommended',
    price: '₩1,950,000',
    rating: 4.8,
  },
  {
    id: 10,
    name: { ko: '발리', en: 'Bali', ja: 'バリ島' },
    description: {
      ko: '초록빛 계단식 논과 영적인 사원이 있는 신들의 섬',
      en: 'The island of gods with emerald rice terraces and spiritual temples',
      ja: '緑の棚田と神聖な寺院がある神々の島',
    },
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    tag: 'Trending',
    price: '₩1,150,000',
    rating: 4.7,
  },
  {
    id: 11,
    name: { ko: '두바이', en: 'Dubai', ja: 'ドバイ' },
    description: {
      ko: '사막 위에 솟아오른 미래 도시와 화려한 스카이라인',
      en: 'A futuristic city rising from the desert with a dazzling skyline',
      ja: '砂漠の上にそびえる未来都市と華やかなスカイライン',
    },
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    tag: 'Recommended',
    price: '₩1,680,000',
    rating: 4.6,
  },
  {
    id: 12,
    name: { ko: '베네치아', en: 'Venice', ja: 'ヴェネツィア' },
    description: {
      ko: '운하를 따라 흐르는 곤돌라와 중세의 낭만이 가득한 물의 도시',
      en: 'A romantic city of canals where gondolas drift past medieval palaces',
      ja: '運河に沿って流れるゴンドラと中世のロマンあふれる水の都',
    },
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80',
    tag: 'Best Seller',
    price: '₩1,420,000',
    rating: 4.8,
  },
];

export default destinations;
