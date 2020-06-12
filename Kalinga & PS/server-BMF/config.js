 const dbConfiguration={
    dbUrl:"orchardmongo.eastus.cloudapp.azure.com",
    db:'Orchard4',
    user:"mongoUser4",
    pass:"User4pwd"
}

 const PORT=process.env.PORT||3001;
 
 const PublicKey="BPKvX15X-noKLtYl5lywiLxcdEYuE9mL5d-zAOXgEROwNHqqcuA4E0lhsyP0T6xuWna3BU32XUsol1uN71mDJWs";
 const PrivateKey="lkhtlFdf6k0FFvYIl-0RwLXMK4BnryTqXp9t_xkFLK4";
 
 module.exports={dbConfiguration,PORT,PublicKey,PrivateKey}


 
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Manikandan:Mh030521!@railwaydev-tkkpi.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
