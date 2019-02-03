var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ESSDEv_ScriptStartup");
    
    dbo.createCollection("Retailers", function(err, res) {
        if (err) throw err;
        console.log("Collection 'Retailers' created created!");
        db.close();
    });

    dbo.createCollection("Deals", function(err, res) {
        if (err) throw err;
        console.log("Deals 'Retailers' created created!");
        db.close();
    });

    var retailerObjects = [
        { name: "Metro", address: "310 Barrie Street",  tags: ["groceries", "chain"]},
        { name: "The Toucan", address: "76 Princess Street",  tags: ["pub", "affordable", "beer", "casual"]}
    ];

    var dealsObjects = [
        { slogans: ["50% off for students"], BOGO: false, Duration: ["Thursday"]}
    ];

    dbo.collection("Retailers").insertMany(retailerObjects, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
    });

    dbo.collection("Deals").insertMany(dealsObjects, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
    });

    db.close();
});