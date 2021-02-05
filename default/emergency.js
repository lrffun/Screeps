var roleTransfer = require("role.transfer");
var recycling = require("recycling");


var soldier = {
   /** @param {Creep} creep **/
    run: function(creep,source,targetId){
	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }
	    if(creep.memory.building){
	        target = Game.getObjectById(targetId);
	        if(creep.build(target)==ERR_NOT_IN_RANGE){
	            creep.moveTo(target);
	        }
	    }else{
	        if(creep.harvest(source) == ERR_NOT_IN_RANGE){
	            creep.moveTo(source);
	        }
	    }
    }  
};

module.exports = soldier;