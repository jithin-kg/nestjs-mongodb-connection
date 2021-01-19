import { Module } from "@nestjs/common";
import { Db, MongoClient } from "mongodb";

@Module({
    providers:[{
        provide:'DATABASE_CONNECTION',
        useFactory: async () :Promise<Db> =>{
            try{
                const client = await MongoClient.connect(DatabaseModule.uri,
                    {useUnifiedTopology:true})   
                    return client.db('databasename')
            }catch(e){
                console.log(`error while connecting to database ${e}`)
                throw e
            }
        }
    }],
    exports: ['DATABASE_CONNECTION'],
})

export class DatabaseModule{
    static uri = "your url to databas";

}
