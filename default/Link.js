var link = {

    run: function(from,to){
        var mStructures = Game.spawns["Nero"].room.find(FIND_STRUCTURES);
        var links = mStructures.filter(function(structure){
            return structure.structureType == STRUCTURE_LINK;  
        });
        
        if(links[from].cooldown == 0 && links[from].store[RESOURCE_ENERGY] != 0){
            links[from].transferEnergy(links[to]);
        }
    }
};

module.exports = link;