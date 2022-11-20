/**
 * テキストのホバーアニメーション（下から1文字ずつフェードイン）
 */

const elements = document.querySelectorAll<HTMLAnchorElement>('.js-rolling-text');

elements.forEach((element) => {
  const innerText = element.innerText;
  element.innerHTML = '';

  const textContainer: HTMLDivElement = document.createElement('div');
  textContainer.classList.add('js-text-wrapper');

  for (const letter of innerText) {
    const span: HTMLSpanElement = document.createElement('span');
    span.innerText = letter.trim() === '' ? '\xa0' : letter;
    span.classList.add('js-text-letter');
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});
