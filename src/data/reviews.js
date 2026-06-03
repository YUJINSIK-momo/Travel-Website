const reviews = [
  {
    id: 1,
    name: { ko: '김민준', en: 'Minjun Kim', ja: 'キム・ミンジュン' },
    destination: { ko: '몰디브', en: 'Maldives', ja: 'モルディブ' },
    rating: 5,
    text: {
      ko: '정말 꿈 같은 여행이었어요. 수상 방갈로에서의 하루하루가 너무나도 완벽했습니다. TRVL 덕분에 최고의 신혼여행이 되었어요!',
      en: 'Truly a dream vacation. Every day in the overwater bungalow was absolutely perfect. TRVL made our honeymoon unforgettable!',
      ja: '本当に夢のような旅でした。水上バンガローでの毎日がとても完璧でした。TRVLのおかげで最高の新婚旅行になりました！',
    },
    avatar: 'https://i.pravatar.cc/100?img=11',
    date: '2025.03',
  },
  {
    id: 2,
    name: { ko: '이서연', en: 'Seoyeon Lee', ja: 'イ・ソヨン' },
    destination: { ko: '교토', en: 'Kyoto', ja: '京都' },
    rating: 5,
    text: {
      ko: '교토의 사계절이 이렇게 아름다울 줄 몰랐어요. 가이드 투어도 완벽하고 숙소도 너무 좋았어요. 다음에도 꼭 이용할게요!',
      en: "I didn't know Kyoto's seasons could be this beautiful. The guided tour and accommodations were excellent. I'll definitely use TRVL again!",
      ja: '京都の四季がこんなに美しいとは知りませんでした。ガイドツアーも完璧で、宿泊施設も素晴らしかった。また利用します！',
    },
    avatar: 'https://i.pravatar.cc/100?img=5',
    date: '2025.02',
  },
  {
    id: 3,
    name: { ko: '박지호', en: 'Jiho Park', ja: 'パク・ジホ' },
    destination: { ko: '보라보라', en: 'Bora Bora', ja: 'ボラボラ' },
    rating: 5,
    text: {
      ko: '보라보라의 물빛은 사진으로 봐도 믿기 어려운데 실제로는 더 아름다웠습니다. TRVL의 모든 서비스가 최상이었어요.',
      en: "The color of Bora Bora's water is breathtaking in photos, but in person it was even more stunning. All TRVL services were top-notch.",
      ja: 'ボラボラの水の色は写真でも信じがたいほどですが、実際はさらに美しかった。TRVLのサービスはすべて最高でした。',
    },
    avatar: 'https://i.pravatar.cc/100?img=12',
    date: '2025.01',
  },
  {
    id: 4,
    name: { ko: '최유나', en: 'Yuna Choi', ja: 'チェ・ユナ' },
    destination: { ko: '산토리니', en: 'Santorini', ja: 'サントリーニ' },
    rating: 5,
    text: {
      ko: '절벽 위 호텔에서 본 석양은 평생 잊지 못할 거예요. 일정 하나하나가 세심하게 준비돼 있어서 정말 편안한 여행이었습니다.',
      en: 'The sunset from our clifftop hotel is something I will never forget. Every detail was thoughtfully arranged for a truly relaxing trip.',
      ja: '崖の上のホテルから見た夕日は一生忘れられません。一つ一つの日程が丁寧に準備されていて本当に快適な旅でした。',
    },
    avatar: 'https://i.pravatar.cc/100?img=32',
    date: '2025.04',
  },
  {
    id: 5,
    name: { ko: '정태현', en: 'Taehyun Jung', ja: 'チョン・テヒョン' },
    destination: { ko: '스위스 알프스', en: 'Swiss Alps', ja: 'スイスアルプス' },
    rating: 5,
    text: {
      ko: '융프라우 트레킹은 인생 최고의 경험이었어요. 가이드분이 사진도 정말 잘 찍어주셔서 추억이 가득합니다.',
      en: 'Trekking around Jungfrau was the experience of a lifetime. Our guide even took amazing photos — so many memories!',
      ja: 'ユングフラウのトレッキングは人生最高の経験でした。ガイドさんが写真も上手に撮ってくれて思い出がいっぱいです。',
    },
    avatar: 'https://i.pravatar.cc/100?img=13',
    date: '2025.05',
  },
  {
    id: 6,
    name: { ko: '한소희', en: 'Sohee Han', ja: 'ハン・ソヒ' },
    destination: { ko: '발리', en: 'Bali', ja: 'バリ島' },
    rating: 4,
    text: {
      ko: '발리의 자연과 사원이 정말 인상적이었어요. 가성비도 훌륭하고 직원분들이 친절해서 또 가고 싶어요.',
      en: 'The nature and temples of Bali were so impressive. Great value and friendly staff — I want to go back!',
      ja: 'バリの自然と寺院が本当に印象的でした。コスパも良くスタッフも親切で、また行きたいです。',
    },
    avatar: 'https://i.pravatar.cc/100?img=45',
    date: '2025.05',
  },
];

export default reviews;
