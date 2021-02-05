var toContainer = require("ToContainer");

var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep,containerCode,sourceCode) {
	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('🚧 upgrader');
	    }
	    if(creep.memory.building) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE ){
                creep.moveTo(creep.room.controller);
            }
	    }
	    else {
            toContainer.run(creep,containerCode,sourceCode);
	    }
	}
};

module.exports = roleUpgrader;