import Slide from "./slide"

const container = document.getElementById('slide');
const elements = document.getElementById('slide-elements');
const controls = document.getElementById("slide-controls");

function eventBtnN(slide: Slide): void
{
    if(slide.current + 1 < slide.elementsLength)
    {   
        const lastindex = slide.current;
        slide.hidden(lastindex);
        slide.current = slide.current + 1;
        slide.show(slide.current);
    }
}

function eventBtnP(slide: Slide): void
{
    if(slide.current - 1 >= 0)
    {   
            const lastindex = slide.current;
            slide.hidden(lastindex);
            slide.current = slide.current - 1;
            slide.show(slide.current);
    }

}

if(container && elements && controls && elements.children.length){
    const slide = new Slide(container,Array.from(elements.children), controls, 3000);
    const btnprev = document.getElementById('prev');
    const btnnext = document.getElementById('next');
    if(btnnext && slide)
        btnnext.addEventListener('click',function(){
            eventBtnN(slide);
        })
    if(btnprev && slide)
        btnprev.addEventListener('click',function(){
            eventBtnP(slide);
        })
}