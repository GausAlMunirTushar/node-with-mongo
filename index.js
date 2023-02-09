const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://admin:tushar@cluster0.bstsr.mongodb.net/school?retryWrites=true&w=majority';
const config = {useUnifiedTopology: true}

MongoClient.connect(url,config,function (error,MyMongoClinet) {
    if(error){
        console.log("Connection Fail")
    }
    else{
        console.log("Connection Success");

       InsertData(MyMongoClinet);

        //DeleteOneItem(MyMongoClinet);
        //DeleleAllItem(MyMongoClinet);
        //FindOneWithoutCondition(MyMongoClinet)
        //FindOneWithCondition(MyMongoClinet);
       // FindAllData(MyMongoClinet)
       // FindAllDataByProjection(MyMongoClinet);
       // FindAllDataByQuery(MyMongoClinet)
        //FindAllDataByLimit(MyMongoClinet)
      // FindAllDataBySort(MyMongoClinet);
      //  UpdateMyData(MyMongoClinet);
       // CreateMyCollection(MyMongoClinet)
       // DeleteMyCollection(MyMongoClinet);
    }
});

function InsertData (MyMongoClinet){

}