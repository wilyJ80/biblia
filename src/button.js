/**
 * Creates a button.
 * @param {HTMLElement} parent
 * @returns {HTMLElement} btn
 */
export function createBtn(parent) {
  const btn = document.createElement('button');
  btn.style.fontSize = "1.8rem";
  btn.className = 'btn h-auto text-start p-4';
  parent.appendChild(btn);

  return btn;
}
