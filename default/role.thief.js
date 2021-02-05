
var roleThief = {
    run: function(creep,FromRoomName,sourceCode,ToRoomName) {
        var mStructures = Game.spawns["Nero"].room.find(FIND_STRUCTURES);
        var targets = mStructures.filter(function(structure){
            return structure.structureType == STRUCTURE_LINK;
            // return structure.structureType == STRUCTURE_CONTAINER;
        });

        var mStorage = mStructures.filter(function(structure){
            return structure.structureType == STRUCTURE_STORAGE;
            // return structure.structureType == STRUCTURE_CONTAINER;
        });
        
        var mResource = creep.room.find(FIND_DROPPED_RESOURCES);
        if(mResource.length > 1){
            if(creep.store.getFreeCapacity() > 0){
                if(creep.pickup(mResource[1]) == ERR_NOT_IN_RANGE){
                    creep.moveTo(mResource[1]);
                }
            }else{
                if(creep.room.name != ToRoomName){
                    const exitDir = Game.map.findExit(creep.room, ToRoomName);
                    const exit = creep.pos.findClosestByRange(exitDir);
                    creep.moveTo(exit); 
                }else{
                    for(let type in creep.store){
                        if(creep.transfer(mStorage[0],type) == ERR_NOT_IN_RANGE){
                            creep.moveTo(mStorage[0]);
                        }
                    }
                }    
            }
        }else{
            if(creep.store.getFreeCapacity() > 0){
                if(creep.room.name != FromRoomName){
                    const exitDir = Game.map.findExit(creep.room, FromRoomName);
                    const exit = creep.pos.findClosestByRange(exitDir);
                    creep.moveTo(exit); 
                }else{
                    var sources = creep.room.find(FIND_SOURCES);
                    if(creep.harvest(sources[sourceCode]) == ERR_NOT_IN_RANGE){
                        creep.moveTo(sources[sourceCode]);
                    }
            }
        }else{
            if(creep.room.name != ToRoomName){
                const exitDir = Game.map.findExit(creep.room, ToRoomName);
                const exit = creep.pos.findClosestByRange(exitDir);
                creep.moveTo(exit); 
            }else{
                if(creep.transfer(targets[1],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(targets[1]);
                }
            } 
        } 
        }

    }
}

module.exports = roleThief;