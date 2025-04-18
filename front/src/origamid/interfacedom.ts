const link = document.querySelectorAll('.link');


link.forEach((item) => {
    if(item instanceof HTMLElement)
        change(item);
}

)


function change(element: HTMLElement): void
{
    element.style.color = 'gray';
    element.style.border = '2px solid red';
}

