/* Recomendado */

//  Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';


// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer Coisa';
input.focus();

/*  Nao Recomendado */

// Non-null assertion (!)
const body1 = document.querySelector('body')!;
body1.style.background = 'red';

// Type asseertion
const body4 = document.querySelector('body') as unknown as number;

