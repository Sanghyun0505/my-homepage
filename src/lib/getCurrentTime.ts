export function getCurrentTime(): string {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // 시간과 분을 문자열로 변환하여 반환
  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}
