/**
 * 送信ボタンの活性/非活性
 */

const validate = (): void => {
  const validForm = document.querySelector<HTMLFormElement>('form:valid');
  const submitButton = document.querySelector<HTMLButtonElement>('#submit');

  if (submitButton !== null) submitButton.disabled = validForm === null;
};

validate();

document.querySelectorAll<HTMLElement>('input, textarea').forEach((input) => {
  input.addEventListener('input', validate);
});

export {};
