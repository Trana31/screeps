/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawningCreep');
 * mod.thing == 'a thing'; // true todo
 */

module.exports = {
    run(creepList){
        for (var id in creepList) {
            Game.spawns["homebase"].spawnCreep([WORK,MOVE,CARRY], creepList[id]);      
        }        
    }
};