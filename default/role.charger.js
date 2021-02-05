var roleBuilder = require("role.Builder");
var toContainer = require("ToContainer");
var roleTransport = require("role.transport");

var roleCharger = {

    /** @param {Creep} creep **/
    run: function(creep,containerCode,sourceCode) {
        var mTargets = creep.room.find(FIND_STRUCTURES);
        // return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
        var targets = mTargets.filter(function(structure){
             return (structure.structureType == STRUCTURE_TOWER) && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;  
        })
        if(targets.length > 0) {
            if(creep.store.getFreeCapacity() > 0) {
                toContainer.run(creep,containerCode,sourceCode);
            }
            else {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ){
                   creep.moveTo(targets[0]);
                }
            }
        }else{
            roleTransport.transport(creep,containerCode,4)
        }
	}
};

module.exports = roleCharger;
