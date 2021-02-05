

var roleTransport = {
    transport: function(creep,containerFrom,containerTo) {
        var mTargets = creep.room.find(FIND_STRUCTURES);
        var targets = mTargets.filter(function(structure){
            return structure.structureType == STRUCTURE_CONTAINER;  
        });
        if(creep.store.getFreeCapacity() > 0){
            if(creep.withdraw(targets[containerFrom], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && targets[containerFrom].store[RESOURCE_ENERGY] != 0) {
                creep.moveTo(targets[containerFrom]);
            }else if(creep.withdraw(targets[2], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && targets[2].store[RESOURCE_ENERGY] != 0){
                creep.moveTo(targets[2]);
            }else if(creep.withdraw(targets[3], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && targets[3].store[RESOURCE_ENERGY] != 0){
                creep.moveTo(targets[3]);
            }else{
                creep.moveTo(targets[containerFrom]);
            }
        }else{
            if(creep.transfer(targets[containerTo], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ){
                creep.moveTo(targets[containerTo]);
            }
        }
        
	}
 };
 
 module.exports = roleTransport;