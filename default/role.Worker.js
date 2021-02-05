var toContainer = require("ToContainer");
var roleUpgrader = require("role.Upgrader");
var roleTransport = require("role.transport");

var roleWorker = {

    /** @param {Creep} creep **/
    work: function(creep,containerCode,sourceCode) {
        var mTargets = creep.room.find(FIND_STRUCTURES);
        var targets = mTargets.filter(function(structure){
             return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;  
        })
        if(targets.length > 0) {
            if(creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
                creep.memory.working = false;
    	    }
    	    if(!creep.memory.working && creep.store.getFreeCapacity() == 0) {
    	        creep.memory.working = true;
    	    }
    	    if(creep.memory.working) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ){
                   creep.moveTo(targets[0]);
                }
    	    }else{
    	        toContainer.run(creep,containerCode,sourceCode);   
    	    }
        }else{
            roleTransport.transport(creep,containerCode,4);
        }
	}
};

module.exports = roleWorker;
