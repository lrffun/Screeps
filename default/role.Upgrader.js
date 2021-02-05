
var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep,containerCode) {
        var workers = _.filter(Game.creeps,(creep) => creep.memory.role == "Nero_Worker");
        if(workers.length < 2){
            creep.memory.role = "Nero_Worker";
        }
        
        var mTargets = creep.room.find(FIND_STRUCTURES);
        var targets = mTargets.filter(function(structure){
             return structure.structureType == STRUCTURE_CONTAINER;  
        });
        var links = mTargets.filter(function(structure){
            return structure.structureType == STRUCTURE_LINK;  
       });
        
	    if(creep.store.getFreeCapacity() == 0) {
	       if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else if(creep.store[RESOURCE_ENERGY] == 0){
            if(creep.withdraw(targets[containerCode], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && targets[containerCode].store[RESOURCE_ENERGY] != 0) {
                creep.moveTo(targets[containerCode]);
            }else{
                if(creep.withdraw(links[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && links[0].store[RESOURCE_ENERGY] != 0) {
                    creep.moveTo(links[0]);
                }else{
                    creep.moveTo(links[0]);
                }
            }
        }else{
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                if(creep.withdraw(targets[containerCode], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && targets[containerCode].store[RESOURCE_ENERGY] != 0){
                    creep.moveTo(creep.room.controller);
                    creep.upgradeController(creep.room.controller);
                }else{
                    if(creep.withdraw(targets[containerCode], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && targets[containerCode].store[RESOURCE_ENERGY] != 0) {
                        creep.moveTo(targets[containerCode]);
                    }else{
                        if(creep.withdraw(links[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && links[0].store[RESOURCE_ENERGY] != 0) {
                            creep.moveTo(links[0]);
                        }else{
                            creep.moveTo(links[0]);
                        }
                    }
                //     }else if(targets.length > 0){
                //         for(var target of targets){
                //             if(creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && target.store[RESOURCE_ENERGY] != 0) {
                //                 creep.moveTo(target); 
                //                 break;
                //             }else{
                //                 continue;
                //             }        
                //         }    
                //     }else{
                //         var sources = creep.room.find(FIND_SOURCES);
                //         if(creep.harvest(sources[containerCode]) == ERR_NOT_IN_RANGE) {
                //             creep.moveTo(sources[containerCode]);
                //         } 
                //     } 
                 }
            }else{
               creep.upgradeController(creep.room.controller); 
            }
        }
	}
};

module.exports = roleUpgrader;