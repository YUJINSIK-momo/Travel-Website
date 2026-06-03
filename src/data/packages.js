import beppu from '../assets/oita.jpeg';
import kyotoAutumn from '../assets/kyouto.jpeg';
import hokaido2 from '../assets/hokaido2.jpeg';
import maldives2 from '../assets/maldives2.jpg';
import borabora2 from '../assets/borabora2.jpg';
import maldives3 from '../assets/maldives3.jpg';

const packages = [
  {
    id: 1,
    name: { ko: '벳푸 온천 힐링', en: 'Beppu Onsen Retreat', ja: '別府温泉ヒーリング' },
    description: {
      ko: '일본 최대 온천 도시 벳푸에서 즐기는 노천탕과 가이세키 요리, 단풍 힐링 4일.',
      en: "Four days of open-air baths, kaiseki dining and autumn healing in Japan's onsen capital, Beppu.",
      ja: '日本最大の温泉地・別府で楽しむ露天風呂と会席料理、紅葉ヒーリングの4日間。',
    },
    image: beppu,
    duration: { ko: '4일 3박', en: '4 Days / 3 Nights', ja: '4日間 / 3泊' },
    style: { ko: '럭셔리', en: 'Luxury', ja: 'ラグジュアリー' },
    price: '₩1,290,000',
    originalPrice: '₩1,650,000',
  },
  {
    id: 2,
    name: { ko: '교토 단풍 명소 투어', en: 'Kyoto Autumn Highlights', ja: '京都紅葉ツアー' },
    description: {
      ko: '기요미즈데라와 아라시야마 등 교토의 단풍 명소를 전문 가이드와 함께 도는 5일 일정.',
      en: "A 5-day guided tour of Kyoto's finest autumn spots including Kiyomizu-dera and Arashiyama.",
      ja: '清水寺や嵐山など京都の紅葉名所を専門ガイドと巡る5日間。',
    },
    image: kyotoAutumn,
    duration: { ko: '5일 4박', en: '5 Days / 4 Nights', ja: '5日間 / 4泊' },
    style: { ko: '럭셔리', en: 'Luxury', ja: 'ラグジュアリー' },
    price: '₩1,180,000',
    originalPrice: '₩1,480,000',
  },
  {
    id: 3,
    name: { ko: '홋카이도 겨울 여행', en: 'Hokkaido Winter Adventure', ja: '北海道冬の旅' },
    description: {
      ko: '하얀 눈밭과 온천을 즐기는 홋카이도 5일 4박 여행 패키지.',
      en: 'Enjoy white snowfields and soothing hot springs in Hokkaido for 5 days.',
      ja: '白い雪原と温泉を楽しむ北海道5日間の旅行パッケージ。',
    },
    image: hokaido2,
    duration: { ko: '5일 4박', en: '5 Days / 4 Nights', ja: '5日間 / 4泊' },
    style: { ko: '어드벤처', en: 'Adventure', ja: 'アドベンチャー' },
    price: '₩1,580,000',
    originalPrice: '₩1,980,000',
  },
  {
    id: 4,
    name: { ko: '몰디브 허니문 패키지', en: 'Maldives Honeymoon', ja: 'モルディブハネムーン' },
    description: {
      ko: '커플을 위한 최고의 로맨틱 여행. 수상 방갈로와 프라이빗 다이닝이 포함됩니다.',
      en: 'The ultimate romantic getaway for couples. Includes overwater bungalow and private dining.',
      ja: 'カップルのための最高のロマンチックな旅。水上バンガローとプライベートダイニングが含まれます。',
    },
    image: maldives2,
    duration: { ko: '7일 6박', en: '7 Days / 6 Nights', ja: '7日間 / 6泊' },
    style: { ko: '럭셔리', en: 'Luxury', ja: 'ラグジュアリー' },
    price: '₩3,290,000',
    originalPrice: '₩4,100,000',
  },
  {
    id: 5,
    name: { ko: '보라보라 리조트 투어', en: 'Bora Bora Resort Tour', ja: 'ボラボラリゾートツアー' },
    description: {
      ko: '남태평양 최고의 리조트에서 즐기는 8일 7박의 완벽한 휴양.',
      en: 'A perfect 8-day retreat at the finest resorts in the South Pacific.',
      ja: '南太平洋の最高のリゾートで楽しむ7泊8日の完璧な休暇。',
    },
    image: borabora2,
    duration: { ko: '8일 7박', en: '8 Days / 7 Nights', ja: '8日間 / 7泊' },
    style: { ko: '럭셔리', en: 'Luxury', ja: 'ラグジュアリー' },
    price: '₩4,150,000',
    originalPrice: '₩5,200,000',
  },
  {
    id: 6,
    name: { ko: '몰디브 다이빙 투어', en: 'Maldives Diving Tour', ja: 'モルディブダイビングツアー' },
    description: {
      ko: '투명한 바닷속 세상을 탐험하는 스쿠버다이빙 전문 패키지.',
      en: 'Explore the crystal clear underwater world with our scuba diving package.',
      ja: '透明な海の世界を探索するスキューバダイビング専門パッケージ。',
    },
    image: maldives3,
    duration: { ko: '6일 5박', en: '6 Days / 5 Nights', ja: '6日間 / 5泊' },
    style: { ko: '스릴', en: 'Thrill', ja: 'スリル' },
    price: '₩2,850,000',
    originalPrice: '₩3,500,000',
  },
];

export default packages;
