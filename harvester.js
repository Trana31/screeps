/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester');
 * mod.thing == 'a thing'; // true
 */

var movement = require('movement');

module.exports = {
    run(creepList){
        for (var id in creepList) {
            var result = Game.spawns["homebase"].spawnCreep([WORK,MOVE,CARRY], creepList[id]);
            
            console.log(result);
            
            var creepy = Game.creeps[creepList[id]];
            var controller = creepy.room.controller;
            var source = creepy.room.find(FIND_SOURCES)[0];
            
            //if creep has no energy, go to energy source and harvest some
            if (creepy.store[RESOURCE_ENERGY] == 0){
                creepy.say( "😖");
                movement.run(creepy, source);
                creepy.harvest(source);
            }else{
                creepy.say(creepy.store[RESOURCE_ENERGY] + "/" + creepy.store.getCapacity());
                
                //if creep is not full on energy and is still near a power source, keep collecting energy 
                if(creepy.store[RESOURCE_ENERGY] != creepy.store.getCapacity() && creepy.pos.inRangeTo(source, 3)){
                    movement.run(creepy, source);
                    creepy.harvest(source);
                }else{
                    //upgrade controller unitl empty
                    movement.run(creepy, controller);;
                    creepy.upgradeController(controller);
                }
            }             
        }
       
    }
};