export default function getRandomColor() {
  const colors = ['red', 'skyblue', 'blue', 'orange', 'green'];
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
