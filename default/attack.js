var mAttack = {
   /** @param {Creep} creep **/
    run: function(creep,roomName){
        if(creep.room.name != roomName) {
            const exitDir = Game.map.findExit(creep.room, roomName);
            const exit = creep.pos.findClosestByRange(exitDir);
            creep.moveTo(exit);
        }else{
            // targets = creep.room.find(FIND_STRUCTURES);
            // targetss = targets.filter(function(structure){
            //  return structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_EXTENSION;  
            // });
            // target = targetss[0];
            target = Game.getObjectById("60143d82d680a5f496c81879");
            
            
            // console.log("attack....................."+creep.attack(target));
            if(creep.attack(target) == ERR_NOT_IN_RANGE){
                creep.moveTo(target);
            }
        }
            
        
        // if(creep.room.name != roomName) {
        //     const exitDir = Game.map.findExit(creep.room, roomName);
        //     const exit = creep.pos.findClosestByRange(exitDir);
        //     creep.moveTo(exit);
        // }else{
        //     creep.moveTo(new RoomPosition(7, 48, creep.room.name));
        // }
        
        
    }  
};

module.exports = mAttack;