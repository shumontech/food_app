const { MongoClient, ServerApiVersion, Collection } = require('mongodb');
const uri = process.env.URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
export const connect= (Collection: string)=>{
    const database = process.env.DB_NAME;
    return client.db(database).collection(Collection)
}