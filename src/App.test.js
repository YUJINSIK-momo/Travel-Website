import { render, screen } from '@testing-library/react';
import App from './App';

// jsdom에는 scrollTo가 없으므로 noop으로 대체
beforeAll(() => {
  window.scrollTo = () => {};
});

test('홈이 크래시 없이 렌더되고 TRVL 브랜드가 보인다', () => {
  window.location.hash = '#/';
  render(<App />);
  expect(screen.getAllByText(/TRVL/i).length).toBeGreaterThan(0);
});

test('여행지 전용 페이지(/destinations)가 렌더된다', () => {
  window.location.hash = '#/destinations';
  render(<App />);
  // 기본 언어(ko)의 여행지 섹션 제목이 노출되는지 확인
  expect(screen.getAllByText(/여행지/).length).toBeGreaterThan(0);
});
