export function setLog(params) {
  // 환경에 따른 체크 필요
  /* const debugMode = true;
  return debugMode ? require('debug')(params) : () => {}; */
  return require('debug')(params);
}
