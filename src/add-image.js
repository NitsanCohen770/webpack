import Kiwi from './kiwi.jpg';
import Food from './food.svg';
export default function addImage() {
  const img = document.createElement('img');
  const svg = document.createElement('img');
  img.alt = 'Kiwi';
  svg.alt = 'Food';
  img.width = 300;
  svg.width = 300;
  img.src = Kiwi;
  svg.src = Food;
  const body = document.querySelector('body');
  body.appendChild(img);
  body.appendChild(svg);
}
