// const button = document.querySelector('button');

// function handleClick(this: HTMLButtonElement ,event: MouseEvent)
// {
//     console.log(this);
// }
// button?.addEventListener('click', handleClick);

// Nao recomendado o uso do this


// const button = document.querySelector('button');

// function handleClick(event: MouseEvent)
// {
//     const element = event.currentTarget;
//     if(element instanceof HTMLElement){
//         console.log(element.innerHTML);
//     }
    
// }
// button?.addEventListener('click', handleClick);

const button = document.querySelector('button');

function handleClick(event: MouseEvent):void
{
    const nav = document.getElementById('nav');
    const element = event.currentTarget;
    if(element instanceof HTMLElement && nav)
    {
        const active = nav.classList.contains('active');
        if (active) {
            nav.classList.remove('active');
            element.setAttribute('aria-expanded', 'false');
            element.setAttribute('aria-label', 'Abrir Menu');
          } else {
            nav.classList.add('active');
            element.setAttribute('aria-expanded', 'true');
            element.setAttribute('aria-label', 'Fechar Menu');
          }
    }
}

button?.addEventListener('click',handleClick);