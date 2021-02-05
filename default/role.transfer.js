var roleTransport = require("role.transport");

var roleTransfer = {
    transfer: function(creep,sourceCode,containerCode,X,Y,mto) {
        var sources = creep.room.find(FIND_SOURCES);
        creep.moveTo(new RoomPosition(X, Y, creep.room.name));
        if(creep.store.getFreeCapacity() > 0){
            if(!creep.harvest(sources[sourceCode])){
                creep.moveTo(sources[sourceCode]);
            }
        }else{
            var mTargets = creep.room.find(FIND_STRUCTURES);
            var targets = mTargets.filter(function(structure){
                return structure.structureType == STRUCTURE_CONTAINER;//  && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;  
            });
            if(targets.length > (containerCode - 1)) {
                
                if(targets[containerCode].store.getFreeCapacity(RESOURCE_ENERGY) > 0){
                    if(creep.transfer(targets[containerCode], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                      creep.moveTo(targets[containerCode]);  
                    }
                }else{
                    if(targets[mto].store.getFreeCapacity(RESOURCE_ENERGY) > 0){
                        if(creep.transfer(targets[mto], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                          creep.moveTo(targets[mto]);  
                        }
                    }else{
                        creep.moveTo(targets[containerCode]); 
                    }
                }
            }else{
                creep.moveTo(targets[containerCode]);
            }
        }
        
	}
 };
 
 module.exports = roleTransfer;