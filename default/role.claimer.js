var roleClaimer = {
    /** @param {Creep} creep **/
     run: function(creep,roomName){
         if(creep.room.name != roomName) {
             const exitDir = Game.map.findExit(creep.room, roomName);
             const exit = creep.pos.findClosestByRange(exitDir);
             creep.moveTo(exit);
         }else{
             target = creep.room.controller;
             console.log(creep.reserveController(target));
             if(creep.reserveController(target) == ERR_NOT_IN_RANGE){
                 creep.moveTo(target);
             }else if(creep.reserveController(target) == ERR_INVALID_TARGET){
                 if(creep.attack(creep.room.spawn) == ERR_NOT_IN_RANGE){
                     xewwp.moveTo(target);
                 }
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
 
 module.exports = roleClaimer;