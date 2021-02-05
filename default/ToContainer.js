var toContainer = {

    run: function(creep,containerCode,sourceCode){
        var mTargets = creep.room.find(FIND_STRUCTURES);
        var targets = mTargets.filter(function(structure){
             return structure.structureType == STRUCTURE_CONTAINER;  
        });
        var haveENERGYs = targets.filter(function(structure){
            return structure.store[RESOURCE_ENERGY] != 0;
        });
        var sources = creep.room.find(FIND_SOURCES);
        if(haveENERGYs.length != 0){
            if(creep.withdraw(targets[containerCode], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && targets[containerCode].store[RESOURCE_ENERGY] != 0) {
                creep.moveTo(targets[containerCode]);
            }else if(haveENERGYs.length > 0){
                for(var target of targets){
                    if(creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && target.store[RESOURCE_ENERGY] != 0) {
                        creep.moveTo(target); 
                        break;
                    }else{
                        continue;
                    }        
                }  
            }else{
                creep.moveTo(targets[containerCode]); 
            }
        }else{
            if(creep.harvest(sources[sourceCode]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[sourceCode]);
            }else if(creep.harvest(sources[sourceCode]) == ERR_NOT_ENOUGH_RESOURCES){
                var mStorage = mTargets.filter(function(structure){
                    return structure.structureType == STRUCTURE_STORAGE;
                })
                if(creep.withdraw(mStorage[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && mStorage[0].store[RESOURCE_ENERGY] != 0) {
                    creep.moveTo(mStorage[0]);
                }else if(mStorage[0].store[RESOURCE_ENERGY] == 0){
                    creep.moveTo(targets[containerCode]); 
                }   
            }
        }

    }
};

module.exports = toContainer;