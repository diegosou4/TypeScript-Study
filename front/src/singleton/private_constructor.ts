// Singleton  | GoF | Factory Method
// Uma instancia da classe 

export class Database {
    private static database: Database;

    private constructor(
        private host: string,
        private username : string,
        private password: string
    )
        {}
    
    connect(): void {
        console.log(`Conected: ${this.host}, ${this.username}, ${this.password}`);
    }
    static getDatabase(host: string,username : string,password: string): Database {
        if(Database.database) return Database.database;
        Database.database = new Database(host,username,password);
        return Database.database;
    }
}

const db1 = Database.getDatabase('localhost','Diego','Pa$w0rd');


const db2 = Database.getDatabase('localhost','Root','240521');
db1.connect();

db2.connect();