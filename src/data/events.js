import osaka from '../assets/event/5.jpeg';
import marunouchi from '../assets/event/6.jpeg';
import sakura from '../assets/event/7.jpeg';
import kimono from '../assets/event/8.jpeg';
import cruise from '../assets/event/2.jpeg';
import glamping from '../assets/event/3.jpeg';
import momo1 from '../assets/momo1.jpg';
import momo2 from '../assets/momo2.jpg';
import momo3 from '../assets/momo3.jpg';

// momo* 는 사용자가 제공한 일본어 프로모션 배너 이미지(텍스트 포함)
export const campaignBanners = [momo1, momo2, momo3];

const events = [
  {
    id: 1,
    title: { ko: '오사카 미도스지 일루미네이션', en: 'Osaka Midosuji Illumination', ja: '大阪御堂筋イルミネーション' },
    description: {
      ko: '미도스지 거리를 수놓는 환상적인 겨울 빛의 향연.',
      en: "A magical winter festival of lights along Osaka's Midosuji avenue.",
      ja: '御堂筋を彩る幻想的な冬のイルミネーション。',
    },
    image: osaka,
    season: { ko: '겨울 한정', en: 'Winter', ja: '冬季限定' },
  },
  {
    id: 2,
    title: { ko: '도쿄 마루노우치 일루미네이션', en: 'Tokyo Marunouchi Illumination', ja: '東京丸の内イルミネーション' },
    description: {
      ko: '황금빛 가로수가 빛나는 도쿄 마루노우치의 겨울 거리.',
      en: "Golden tree-lined streets glowing through Tokyo's Marunouchi winter.",
      ja: '黄金色の並木が輝く東京・丸の内の冬の街。',
    },
    image: marunouchi,
    season: { ko: '겨울 한정', en: 'Winter', ja: '冬季限定' },
  },
  {
    id: 3,
    title: { ko: '메구로강 벚꽃 야경', en: 'Meguro River Cherry Blossoms', ja: '目黒川の夜桜' },
    description: {
      ko: '강을 따라 흐드러진 야간 벚꽃과 등불의 낭만.',
      en: 'Romantic nighttime cherry blossoms and lanterns along the river.',
      ja: '川沿いに咲き誇る夜桜と提灯のロマンス。',
    },
    image: sakura,
    season: { ko: '봄 한정', en: 'Spring', ja: '春季限定' },
  },
  {
    id: 4,
    title: { ko: '전통 기모노 체험', en: 'Traditional Kimono Experience', ja: '伝統着物体験' },
    description: {
      ko: '전통 가옥에서 기모노를 입고 거니는 특별한 하루.',
      en: 'A special day strolling in a kimono through a traditional house.',
      ja: '伝統家屋で着物を着て過ごす特別な一日。',
    },
    image: kimono,
    season: { ko: '연중', en: 'Year-round', ja: '通年' },
  },
  {
    id: 5,
    title: { ko: '도쿄만 나이트 크루즈 디너', en: 'Tokyo Bay Night Cruise Dinner', ja: '東京湾ナイトクルーズディナー' },
    description: {
      ko: '도시의 야경을 바라보며 즐기는 프라이빗 크루즈 디너.',
      en: 'A private cruise dinner with sparkling city night views.',
      ja: '都会の夜景を眺めながら楽しむプライベートクルーズディナー。',
    },
    image: cruise,
    season: { ko: '연중', en: 'Year-round', ja: '通年' },
  },
  {
    id: 6,
    title: { ko: '겨울 글램핑', en: 'Winter Glamping', ja: '冬グランピング' },
    description: {
      ko: '별빛 아래 따뜻한 텐트에서 즐기는 겨울 캠핑.',
      en: 'Cozy winter camping in a warm tent beneath the stars.',
      ja: '星空の下、暖かいテントで楽しむ冬のキャンプ。',
    },
    image: glamping,
    season: { ko: '겨울 한정', en: 'Winter', ja: '冬季限定' },
  },
];

export default events;
