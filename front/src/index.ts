import funcao from './mod' 
import isEmail from 'validator/lib/isEmail';




function validUsername(): boolean
{
    const username: HTMLInputElement = document.getElementById('username') as HTMLInputElement;
    if(username === null)
        return false;
    if(username.value.length <= 4)
        return false;
    return true;
}

function validEmail(): boolean {
    const email: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
    
    if(email === null)
        return false;
    
    if(isEmail(email.value) === true)
        return true;

    return false;
}

function validPass(): boolean
{
    const password: HTMLInputElement =  document.getElementById('password') as HTMLInputElement;
    if(password === null)
        return false;
    if(password.value.length <= 6)
        return false;
    return true
}

function comparePass(): boolean {
    const password: HTMLInputElement =  document.getElementById('password') as HTMLInputElement;
    const password2: HTMLInputElement =  document.getElementById('password2') as HTMLInputElement;

    if(password === null || password2 === null)
        return false;
    if(password.value === password2.value && password.value.length > 6 && password2.value.length > 6)
        return true;
    return false;   
}

function validForm(): void
{
    const erroclass: HTMLElement[] = Array.from(document.querySelectorAll('.error-message')) as HTMLElement[];
    const arrayFuctions: boolean[] = [validUsername(), validEmail(), validPass(), comparePass()];
    if(erroclass === null)
        return;
    
    for(let i = 0; i < erroclass.length; i++)
    {
        if(arrayFuctions[i] === false)
            erroclass[i].style.display = 'block';
        else
            erroclass[i].style.display = 'none';
    }
}

function btnsummit(): void
{
    const button: HTMLButtonElement | null = document.querySelector('button');
    if(button === null)
        return;

    button.addEventListener('click', (event: Event) => {
        event.preventDefault();
        validForm();
    });
}

btnsummit();
