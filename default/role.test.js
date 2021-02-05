var roleTest = {
    run: function(creep,FromRoomName,sourceCode,ToRoomName) {
        //Game.spawns["Nero"].spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE],"Test0",{memory:{role:"test"});
        targetRoom = "E6S44";
        if(creep.room.name != targetRoom){
            const exitDir = Game.map.findExit(creep.room, targetRoom);
            const exit = creep.pos.findClosestByRange(exitDir);
            creep.moveTo(exit,{visualizePathStyle:{
                fill: 'transparent',
                stroke: '#fff',
                lineStyle: 'dashed',
                strokeWidth: .15,
                opacity: .1
            }}); 
        }else{
            var target = Game.getObjectById("6017d609e8b1c589ac53239f");
            if(creep.rangedAttack(target) == ERR_NOT_IN_RANGE){
                creep.moveTo(target);
            }else{
                if(creep.room.name != "E6S43"){
                    const exitDir = Game.map.findExit(creep.room, "E6S43");
                    const exit = creep.pos.findClosestByRange(exitDir);
                    creep.moveTo(exit);  
                }else{
                    creep.moveTo(new RoomPosition(36, 22, creep.room.name))
                }
            }
        }
        
        // targetRoom = "E6S43";
        // if(creep.room.name != targetRoom){
        //     const exitDir = Game.map.findExit(creep.room, targetRoom);
        //     const exit = creep.pos.findClosestByRange(exitDir);
        //     creep.moveTo(exit); 
        // }else{
        //     const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        //     if(creep.rangedAttack(target) == ERR_NOT_IN_RANGE){
        //         creep.moveTo(target);
        //     }else{
        //         creep.moveTo(new RoomPosition(36, 22, creep.room.name))
        //     }
        // }
            

    }
}

module.exports = roleTest;