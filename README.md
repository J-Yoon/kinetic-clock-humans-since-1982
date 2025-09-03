# ClockClock 24 - 아날로그 시계 모듈 애니메이션

![ClockClock 24](https://img.shields.io/badge/ClockClock-24-blue) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

YouTube 스타일의 ClockClock 24 시계를 웹에서 구현한 예술적 시계 애니메이션입니다. 24개의 아날로그 시계 모듈이 조합되어 디지털 시간을 표시합니다.

## ✨ 특징

- **24개 시계 모듈**: 4개 digit × 각 6개 시계 (3×2 격자)
- **실시간 시간 표시**: 매 분마다 현재 시간으로 정렬
- **부드러운 애니메이션**: 10초 duration의 우아한 바늘 움직임
- **특수 상태**: 해피/뉴트럴 모드 지원
- **반응형 디자인**: 다양한 화면 크기에 자동 적응
- **순수 웹 기술**: HTML/CSS/JavaScript만 사용

## 🎮 인터랙션

### 키보드 단축키
- **H키**: 해피 상태 (10:30)
- **N키**: 뉴트럴 상태 (1:30)

### 마우스 조작
- **좌측 하단 클릭**: 해피 상태
- **우측 하단 클릭**: 뉴트럴 상태
- **시계 영역 클릭**: 전체 화면 토글

## 🚀 시작하기

### 설치
```bash
# 저장소 클론
git clone https://github.com/your-username/clock-clock-24.git

# 프로젝트 디렉토리로 이동
cd clock-clock-24
```

### 실행
```bash
# 로컬 서버 실행 (Python 3)
python3 -m http.server 8000

# 또는 Node.js 사용
npx http-server

# 브라우저에서 접속
open http://localhost:8000
```

## 📁 프로젝트 구조

```
clock-clock-24/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # JavaScript 로직
├── README.md           # 프로젝트 문서
└── assets/             # 추가 리소스 (선택사항)
```

## 🎨 디자인 특징

### 시각적 스타일
- **배경**: 깔끔한 흰색 배경
- **시계 패널**: 검정색 매트한 질감
- **시계 원형**: 움푹 파인 듯한 3D 효과
- **바늘**: 굵고 밝은 흰색 바늘
- **애니메이션**: 10초 duration의 부드러운 전환

### 반응형 브레이크포인트
- **데스크톱**: 70px 시계, 8px 간격
- **태블릿**: 55px 시계, 6px 간격  
- **모바일**: 45px 시계, 4px 간격

## ⚙️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - CSS Grid 레이아웃
  - CSS 변수 시스템
  - Transform 애니메이션
  - Box-shadow 3D 효과
- **JavaScript (ES6+)**:
  - 클래스 기반 구조
  - SVG 동적 생성
  - 실시간 시간 동기화

## 🔧 커스터마이징

### 시계 바늘 속도 조정
```css
.clock-smallHand,
.clock-largeHand {
    transition: transform 10s cubic-bezier(0.4, 0.0, 0.2, 1);
    /* duration 값을 변경하여 속도 조정 */
}
```

### 색상 테마 변경
```css
:root {
    --primary-bg: #fff;        /* 배경색 */
    --clock-bg: #1a1a1a;       /* 시계 배경 */
    --hand-color: #fff;        /* 바늘 색상 */
    --text-color: #333;        /* 텍스트 색상 */
}
```

### 시계 크기 조정
```css
.clock {
    width: 70px;   /* 시계 크기 */
    height: 70px;
}
```

## 🌟 사용 사례

- **Wallpaper Engine**: 동적 배경화면
- **Chrome New Tab Extension**: 새 탭 페이지
- **디지털 사이니지**: 공공장소 디스플레이
- **예술적 웹사이트**: 포트폴리오 요소
- **교육용**: 시간 개념 시각화

## 📱 브라우저 지원

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 🙏 감사의 말

- **Humans since 1982**: 원본 ClockClock 24 디자인 영감
- **YouTube**: 스타일 참고
- **Web Standards**: 순수 웹 기술 구현

## 📞 연락처

프로젝트 링크: [https://github.com/your-username/clock-clock-24](https://github.com/your-username/clock-clock-24)

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
