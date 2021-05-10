import Redis from "redis";
let client = Redis.createClient(6379);

console.log("test")
let propertiesFile = require('./properties.json');
let quizfile = require("./quiz.json");

client.set("Properties", JSON.stringify(propertiesFile.properties), (err, reply) => {
    if (err) throw err;
    //console.log(reply);
});
client.set("Parkings", JSON.stringify(propertiesFile.parkings), (err, reply) => {
    if (err) throw err;
    //console.log(reply);
});
client.set("Stations", JSON.stringify(propertiesFile.stations), (err, reply) => {
    if (err) throw err;
    //console.log(reply);
});

client.set("Quiz", JSON.stringify(quizfile.Quiz), (err, reply) => {
    if (err) throw err;
    //console.log(reply);
});

client.set("Consequences", JSON.stringify(quizfile.Consequences), (err, reply) => {
    if (err) throw err;
    //console.log(reply);
});

client.mget('Properties', "Stations", "Parkings", (err, reply) => {
    if (err) throw err;
    console.log(JSON.parse(reply[0]));
    console.log(JSON.parse(reply[1]));
    console.log(JSON.parse(reply[2]));
    //let properties = JSON.parse(reply)
});

client.quit();