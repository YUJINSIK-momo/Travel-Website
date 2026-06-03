import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';
import borabora2 from '../assets/borabora2.jpg';
import hokaido2 from '../assets/hokaido2.jpeg';

const packages = [
  {
    id: 1,
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
    id: 2,
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
  {
    id: 5,
    name: { ko: '산토리니 로맨틱 에스케이프', en: 'Santorini Romantic Escape', ja: 'サントリーニ・ロマンティック' },
    description: {
      ko: '에게해의 석양을 바라보는 절벽 위 호텔과 프라이빗 요트 투어가 포함된 커플 여행.',
      en: 'A couples retreat with a clifftop hotel overlooking the Aegean sunset and a private yacht tour.',
      ja: 'エーゲ海の夕日を望む崖の上のホテルとプライベートヨットツアー付きのカップル旅行。',
    },
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    duration: { ko: '6일 5박', en: '6 Days / 5 Nights', ja: '6日間 / 5泊' },
    style: { ko: '럭셔리', en: 'Luxury', ja: 'ラグジュアリー' },
    price: '₩3,680,000',
    originalPrice: '₩4,500,000',
  },
  {
    id: 6,
    name: { ko: '스위스 알프스 트레킹', en: 'Swiss Alps Trekking', ja: 'スイスアルプス・トレッキング' },
    description: {
      ko: '인터라켄과 융프라우를 잇는 파노라마 트레일을 전문 가이드와 함께 걷는 7일 일정.',
      en: 'A 7-day guided journey along the panoramic trails connecting Interlaken and Jungfrau.',
      ja: 'インターラーケンとユングフラウを結ぶパノラマトレイルを専門ガイドと歩く7日間。',
    },
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    duration: { ko: '7일 6박', en: '7 Days / 6 Nights', ja: '7日間 / 6泊' },
    style: { ko: '어드벤처', en: 'Adventure', ja: 'アドベンチャー' },
    price: '₩2,490,000',
    originalPrice: '₩2,980,000',
  },
];

export default packages;
