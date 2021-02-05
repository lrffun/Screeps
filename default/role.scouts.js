var roleScouts = {
   /** @param {Creep} creep **/
    run: function(creep,anotherRoomName){
        if(creep.room.name != anotherRoomName) {
            const exitDir = Game.map.findExit(creep.room, anotherRoomName);
            const exit = creep.pos.findClosestByRange(exitDir);
            creep.moveTo(exit);
        }else{
            if(creep.room.controller) {
                if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
            creep.moveTo(new RoomPosition(10, 6, anotherRoomName));
        }
        

    }  
};

module.exports = roleScouts;