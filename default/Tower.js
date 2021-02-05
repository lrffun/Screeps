var tower = {

    run: function(roomName){
        var mStructures = Game.spawns[roomName].room.find(FIND_STRUCTURES);
        var towers = mStructures.filter(function(structure){
            return structure.structureType == STRUCTURE_TOWER;  
        });
     
        for(var tower of towers){
            var enemy = Game.spawns[roomName].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(enemy){
                tower.attack(enemy);
            }else{
                var mStructures = Game.spawns[roomName].room.find(FIND_STRUCTURES);
                // var minHits = mStructures[1].hits;
                // var minHitsStucture = mStructures[1];
                var targets = mStructures.filter(function(structure){
                    return structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_STORAGE || structure.structureType == STRUCTURE_LINK;  
                });
                for(var mStructure of targets){
                    if(mStructure.hits < mStructure.hitsMax){
                        tower.repair(mStructure);
                    }
                }
                
            }
        } 
    }
};

module.exports = tower;