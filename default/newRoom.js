var toContainer = require("ToContainer")

var link = {

    run: function(creep){

        if(creep.room.name != "E6S42"){
            const exitDir = Game.map.findExit(creep.room, "E6S42");
            const exit = creep.pos.findClosestByRange(exitDir);
            creep.moveTo(exit); 
        }else{
            if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
                creep.memory.building = false;
                creep.say('🔄 harvest');
            }
            if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
                creep.memory.building = true;
                creep.say('🚧 build');
            }

            if(creep.memory.building) {
                var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                console.log("building number:"+targets.length);
                if(targets.length > 0 ) {
                    if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0]);
                    }
                }else{
                    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller);
                    }
                }
            }
            else {
                toContainer.run(creep,3,1);
            }
        }  
    }
};

module.exports = link;