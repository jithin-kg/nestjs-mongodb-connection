import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';
import { CollectionNames } from './db/collection.names';

@Injectable()
export class AppService {
  constructor(@Inject("DATABASE_CONNECTION") private db:Db){}
  async getHello(): Promise<string> {
    const result =  await this.db.collection(CollectionNames.MYCOLLECTION_COLLECTION).find().limit(2).toArray
    console.log(result)
    
    return 'Hello World!';
  }
}
