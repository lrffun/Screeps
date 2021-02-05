var roleBuilder = require("role.Builder");

var roleTransfer = {
    transfer: function(creep,sourceCode,containerCode,X,Y) {
        var sources = Game.spawns["Nero"].room.find(FIND_SOURCES);
        creep.moveTo(new RoomPosition(X, Y, creep.room.name));
    
        if(!creep.harvest(sources[sourceCode])){
            creep.moveTo(sources[sourceCode]);
        }
    
	}
 };
 
 module.exports = roleTransfer;