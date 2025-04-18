
export abstract class Personagem {
    protected abstract emoji:string;
    constructor(
        protected name:string, 
        protected attack:number,
        protected life:number
        ){}
        atack(personagem: Personagem,): void{
            this.bordao();
            personagem.lostLife(this.attack);
        }

        lostLife(attackScore: number): void{
            console.log(`${this.name} lost ${attackScore} points of life...`);
            console.log(`${this.life} score life`);
            this.life -= attackScore;
        }

        abstract bordao(): void;
}

export class Guerreira extends Personagem {
    emoji = ':)';
    bordao(): void {
        console.log(`${this.name}  goddess of sand temple attacking...`)
    }

}
export class Monstro extends Personagem {
    emoji = ':}';
    bordao(): void {
        console.log(`${this.name} king of the ocean dark attacking...`)
    }

}

const guerreira = new Guerreira('Xayana', 300,400);
const monstro = new Monstro('Globin', 75,1500); 

guerreira.atack(monstro);
guerreira.atack(monstro);
guerreira.atack(monstro);

monstro.atack(guerreira);
monstro.atack(guerreira);
monstro.atack(guerreira);