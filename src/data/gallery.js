import img1 from '../assets/images/img-1.jpg';
import img2 from '../assets/images/img-2.jpg';
import img3 from '../assets/images/img-3.jpg';
import img4 from '../assets/images/img-4.jpg';
import img5 from '../assets/images/img-5.jpg';
import img6 from '../assets/images/img-6.jpg';
import img7 from '../assets/images/img-7.jpg';
import img8 from '../assets/images/img-8.jpg';
import img9 from '../assets/images/img-9.jpg';

const U = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

// 앞쪽 9장은 홈 갤러리 섹션에, 전체 15장은 갤러리 전용 페이지에 노출된다.
const galleryImages = [
  { src: img1, tall: true },
  { src: img2, tall: false },
  { src: img3, tall: false },
  { src: img4, tall: false },
  { src: img5, tall: false },
  { src: img6, tall: true },
  { src: img7, tall: false },
  { src: img8, tall: false },
  { src: img9, tall: false },
  { src: U('1507525428034-b723cf961d3e'), tall: true },
  { src: U('1476514525535-07fb3b4ae5f1'), tall: false },
  { src: U('1469854523086-cc02fe5d8800'), tall: false },
  { src: U('1488646953014-85cb44e25828'), tall: false },
  { src: U('1530521954074-e64f6810b32d'), tall: true },
  { src: U('1473773508845-188df298d2d1'), tall: false },
];

export default galleryImages;
