export class Database {
    constructor(
        private host: string,
        private username : string,
        private password: string)
        {}
    
    connect(): void {
        console.log(`Conected: ${this.host}, ${this.username}, ${this.password}`);
    }
}

const db1 = new Database('localhost','Diego','Pa$w0rd');


const db2 = new Database('localhost','Root','240521');
db1.connect();

db2.connect();