export function createBtn(parent) {
  const btn = document.createElement('button');
  btn.style.fontSize = "2rem";
  btn.className = 'btn h-auto text-start p-4';
  parent.appendChild(btn);

  return btn;
}
