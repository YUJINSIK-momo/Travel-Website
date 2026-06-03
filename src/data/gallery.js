import img1 from '../assets/images/img-1.jpg';
import img2 from '../assets/images/img-2.jpg';
import img3 from '../assets/images/img-3.jpg';
import img4 from '../assets/images/img-4.jpg';
import img5 from '../assets/images/img-5.jpg';
import img6 from '../assets/images/img-6.jpg';
import img7 from '../assets/images/img-7.jpg';
import img8 from '../assets/images/img-8.jpg';
import img9 from '../assets/images/img-9.jpg';
import kyoto from '../assets/kyoto.jpeg';
import sakura from '../assets/monzi.jpeg';
import airport from '../assets/tiba1.jpeg';
import seaside from '../assets/gril.jpeg';

// 앞쪽 9장은 홈 갤러리 섹션에, 전체는 갤러리 전용 페이지에 노출된다.
const galleryImages = [
  { src: img1, tall: true },
  { src: sakura, tall: false },
  { src: img3, tall: false },
  { src: kyoto, tall: false },
  { src: img5, tall: false },
  { src: img6, tall: true },
  { src: airport, tall: false },
  { src: img8, tall: false },
  { src: seaside, tall: false },
  { src: img2, tall: false },
  { src: img4, tall: true },
  { src: img7, tall: false },
  { src: img9, tall: false },
];

export default galleryImages;
