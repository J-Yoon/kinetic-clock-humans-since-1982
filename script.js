/* manu.ninja의 로직/각도표를 그대로 사용 (순수 JS) */

/* ===== 숫자 각도 테이블 ===== */
const digits = [
    [    // 0
        { hour: 6, minute: 15 },
        { hour: 9, minute: 30 },
        { hour: 6, minute: 0 },
        { hour: 0, minute: 30 },
        { hour: 3, minute: 0 },
        { hour: 0, minute: 45 }
    ], [ // 1
        { hour: 7.5, minute: 37.5 },
        { hour: 6, minute: 30 },
        { hour: 7.5, minute: 37.5 },
        { hour: 6, minute: 0 },
        { hour: 7.5, minute: 37.5 },
        { hour: 0, minute: 0 }
    ], [ // 2
        { hour: 3, minute: 15 },
        { hour: 9, minute: 30 },
        { hour: 6, minute: 15 },
        { hour: 0, minute: 45 },
        { hour: 0, minute: 15 },
        { hour: 9, minute: 45 }
    ], [ // 3
        { hour: 3, minute: 15 },
        { hour: 9, minute: 30 },
        { hour: 3, minute: 15 },
        { hour: 9, minute: 0 },
        { hour: 3, minute: 15 },
        { hour: 9, minute: 0 }
    ], [ // 4
        { hour: 6, minute: 30 },
        { hour: 6, minute: 30 },
        { hour: 0, minute: 15 },
        { hour: 6, minute: 0 },
        { hour: 7.5, minute: 37.5 },
        { hour: 0, minute: 0 }
    ], [ // 5
        { hour: 6, minute: 15 },
        { hour: 9, minute: 45 },
        { hour: 0, minute: 15 },
        { hour: 6, minute: 45 },
        { hour: 3, minute: 15 },
        { hour: 0, minute: 45 }
    ], [ // 6
        { hour: 6, minute: 15 },
        { hour: 9, minute: 45 },
        { hour: 6, minute: 0 },
        { hour: 6, minute: 45 },
        { hour: 0, minute: 15 },
        { hour: 0, minute: 45 }
    ], [ // 7
        { hour: 3, minute: 15 },
        { hour: 6, minute: 45 },
        { hour: 7.5, minute: 37.5 },
        { hour: 6, minute: 0 },
        { hour: 7.5, minute: 37.5 },
        { hour: 0, minute: 0 }
    ], [ // 8
        { hour: 6, minute: 15 },
        { hour: 6, minute: 45 },
        { hour: 0, minute: 15 },
        { hour: 0, minute: 45 },
        { hour: 0, minute: 15 },
        { hour: 0, minute: 45 }
    ], [ // 9
        { hour: 6, minute: 15 },
        { hour: 6, minute: 45 },
        { hour: 3, minute: 0 },
        { hour: 6, minute: 0 },
        { hour: 3, minute: 15 },
        { hour: 0, minute: 45 }
    ]
];

const happyDigit   = Array(6).fill({ hour: 22.5, minute: 7.5 });
const neutralDigit = Array(6).fill({ hour: 7.5,  minute: 7.5 });
// 24:00을 표시하는 특수 상태 (2, 4, 0, 0)
const midnightDigit = [
    digits[2], // 2
    digits[4], // 4  
    digits[0], // 0
    digits[0]  // 0
];

/* ===== DOM 생성 (Pug 루프 → JS로 변환) ===== */
const artEl  = document.getElementById('art');
const textEl = document.getElementById('text');

function buildDom() {
    for (let d = 0; d < 4; d++) {
        const digit = document.createElement('div');
        digit.className = 'digit';
        for (let c = 0; c < 6; c++) {
            const id = d * 6 + c;
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('class', `clock clock--${id}`);
            svg.setAttribute('width', '100');
            svg.setAttribute('height', '100');
            svg.setAttribute('viewBox', '0 0 100 100');

            // small hand path
            const pSmall = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pSmall.setAttribute('class', 'clock-smallHand');
            pSmall.setAttribute('d', 'M50,44 C47.5147186,44 45,46.5147186 45,50 C45,53.4852814 47.5147186,56 50,56 L95,56 L95,44 L50,44 Z'); // 더 굵게 (44-56 = 12픽셀)
            pSmall.setAttribute('stroke', 'none');
            pSmall.setAttribute('fill', '#fff'); // 흰색으로 변경
            pSmall.setAttribute('fill-rule', 'evenodd');

            // large hand path
            const pLarge = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pLarge.setAttribute('class', 'clock-largeHand');
            pLarge.setAttribute('d', 'M50,44 C47.5147186,44 45,46.5147186 45,50 C45,53.4852814 47.5147186,56 50,56 L100,56 L100,44 L50,44 Z'); // 더 굵게 (44-56 = 12픽셀)
            pLarge.setAttribute('stroke', 'none');
            pLarge.setAttribute('fill', '#fff'); // 흰색으로 변경
            pLarge.setAttribute('fill-rule', 'evenodd');

            svg.appendChild(pSmall);
            svg.appendChild(pLarge);
            digit.appendChild(svg);
        }
        artEl.appendChild(digit);
    }
}
buildDom();

/* ===== 유틸 함수 ===== */
function hourToDegrees(hour)   { return hour * (360 / 12) - 90; }
function minuteToDegrees(min)  { return min  * (360 / 60)  - 90; }

function setHands(id, hour, minute) {
    const clock = document.querySelector(`.clock--${id}`);
    clock.style.setProperty('--small-hand', `${hourToDegrees(hour) + 360}deg`);
    clock.style.setProperty('--large-hand', `${minuteToDegrees(minute) - 360}deg`);
}

function setDigit(id, values) {
    for (let x = 0; x < 6; x++) {
        setHands(id * 6 + x, values[x].hour, values[x].minute);
    }
}

function setTime(time) {
    // time은 "HH:MM:SS GMT..." 같은 형태에서 앞 5자리 사용
    // ex) "16:42"
    setDigit(0, digits[time.charAt(0)]);
    setDigit(1, digits[time.charAt(1)]);
    setDigit(2, digits[time.charAt(3)]);
    setDigit(3, digits[time.charAt(4)]);
}

function setMidnightTime() {
    // 24:00을 표시하는 특수 함수
    setDigit(0, digits[2]); // 2
    setDigit(1, digits[4]); // 4
    setDigit(2, digits[0]); // 0
    setDigit(3, digits[0]); // 0
}

/* ===== 특수 상태 & 상호작용 ===== */
let state = '----';
let interval;

function startClock() {
    state = '----';
    interval = window.setInterval(() => {
        // 원본처럼 10초 앞 시간을 기준으로 비교(트랜지션 여유)
        const time = new Date(Date.now() + 10000).toTimeString();
        if (time !== state) {
            setTime(time);
            state = time;
        }
    }, 1000);
}

function stopClock() { clearInterval(interval); }

function showSpecialState(digit) {
    stopClock();
    for (let x = 0; x < 4; x++) setDigit(x, digit);
    window.setTimeout(() => startClock(), 10000);
}

/* 키보드 이벤트만 유지 */
window.addEventListener('keydown', e => {
    if (e.keyCode === 72) showSpecialState(happyDigit);   // H
    if (e.keyCode === 78) showSpecialState(neutralDigit); // N
    if (e.keyCode === 89) { // Y - 24:00 정시 효과
        stopClock();
        setMidnightTime();
        window.setTimeout(() => startClock(), 10000);
    }
});

/* 아트 클릭 이벤트 */
document.querySelector('.art').addEventListener('click', () => {
    textEl.classList.toggle('s-hidden');
    artEl.classList.toggle('art--full');
});

/* 디지털 시계 업데이트 */
function updateDigitalTime() {
    const timeDisplay = document.getElementById('digitalTime');
    if (timeDisplay) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ko-KR', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        timeDisplay.textContent = timeString;
    }
    setTimeout(updateDigitalTime, 1000);
}

/* 시작! */
startClock();
updateDigitalTime();
