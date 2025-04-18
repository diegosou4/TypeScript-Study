export default class Slide {
    private container: Element;
    private elements: Element[];
    private controls: Element;
    private time: number = 5000;
    private _current: number = 0;
    constructor(
        container : Element,
        elements: Element[],
        controls: Element,
        time: number = 5000,
        _current:number = 0)
        {
            this.container = container;
            this.elements = elements;
            this.controls = controls;
            this.time = time;
            this.show(0);
        }
        show(index: number): void{
            this.elements[index].classList.add('active');
        }
        hidden(index:number): void{
            this.elements[index].classList.remove('active');
        }
        set current(index:number){
            this._current = index;
        }
        get current(): number{
            return this._current;
        }
        get elementsLength() : number{
            return this.elements.length
        }
}