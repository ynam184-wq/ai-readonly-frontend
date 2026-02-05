// config.js
// ✅ 데모 모드: API_BASE = "" 로 두면 로컬 더미 데이터로 동작
// ✅ 서버 연결: API_BASE 를 예) "http://localhost:8000" 로 바꾸면 실제 API 호출

window.APP_CONFIG = {
  API_BASE: "", // 예: "http://localhost:8000"
  DEMO_MODE: true, // API_BASE를 채우면 자동으로 false로 바뀌어도 OK
};