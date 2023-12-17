module.exports.loop = function(){
    //This is the main game loop. The code inside these bracket will run once per tick.

    //export useful function
    var harvester = require('harvester');
    var spawningCreep = require('spawningCreep');
    
    //ArrayList of useful entities
    var harvesterList = ["Hannah", "Harper", "Haven"];
    var builderList = ["Bella"]
    var sourceList = ["e13307739d94e83"];
    
    harvester.run(harvesterList);
} 