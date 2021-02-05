var toContainer = require("ToContainer");
var roleUpgrader = require("role.Upgrader");
var roleRepairer = require("role.repairer");

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep,containerCode,sourceCode) {
        var workers = _.filter(Game.creeps,(creep) => creep.memory.role == "Nero_Worker");
        if(workers.length < 2){
            creep.memory.role = "Nero_Worker";
        }

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
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
	        console.log("building number:"+targets.length);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
            else{
                roleRepairer.run(creep,containerCode,sourceCode);
            }
	    }
	    else {
            toContainer.run(creep,containerCode,sourceCode);
	    }
	}
};

module.exports = roleBuilder;