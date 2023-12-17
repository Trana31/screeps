/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('movement');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run(mycreep, mydestination){
        if(!mycreep.pos.inRangeTo(mydestination, 1)){
            mycreep.moveTo(mydestination);
        }
    }
};