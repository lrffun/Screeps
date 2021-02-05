var roleWorker = require("role.Worker");
var toContainer = require("ToContainer");

var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep,containerCode,sourceCode) {

        var mStructures = creep.room.find(FIND_STRUCTURES);
        var targets = mStructures.filter(function(structure){
            return (structure.structureType == STRUCTURE_ROAD || structure.structureType == STRUCTURE_CONTAINER)&& structure.hits < structure.hitsMax;// || structure.structureType == STRUCTURE_RAMPART
        })
        if(targets.length > 0){
            if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
                creep.memory.building = false;
                creep.say('🔄 harvest');
            }
            if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
                creep.memory.building = true;
                creep.say('🚧 repairer');
            }
            if(creep.memory.building) {
                var minHitsStructure = targets[0];
                for(var mStructure of targets){
                    if(((mStructure.hits/mStructure.hitsMax) < (minHitsStructure.hits/minHitsStructure.hitsMax))){
                        minHitsStructure = mStructure;
                    }
                }
                if(creep.repair(minHitsStructure) == ERR_NOT_IN_RANGE){
                    creep.moveTo(minHitsStructure);
                }
            }
            else {

                toContainer.run(creep,containerCode,sourceCode);
            }
        }else{
            roleWorker.work(creep,containerCode,sourceCode);
        }

	}
};

module.exports = roleRepairer;