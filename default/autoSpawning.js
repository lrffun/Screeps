
function NewName(role){
    
    var roles = _.filter(Game.creeps, (creep) => creep.memory.role == role.role);
    var NewName = role.role+roles.length;
    console.log(role.role+":"+roles.length);
    for(var i = 0;i < role.num;i++){
        if(!Game.creeps[role.role+i]){
            NewName = role.role+i;
            break;
        }
    }
    return NewName;
}

var roleSpawing = {

    /** @param {Creep} creep **/
    run: function(spawnName,roleNumber) {
        for(var role of roleNumber){
            var roles = _.filter(Game.creeps, (creep) => creep.memory.role == role.role);
            console.log(role.role+":"+roles.length);
            if(roles.length < role.num) {
                console.log(spawnName+" ready to spawn "+role.role+":"+roles.length);
                var newName = NewName(role);
                Game.spawns[spawnName].spawnCreep(role.parts, newName, 
                    {memory: {role: role.role}});
                break;        
            }
        }

        
        // var workers = _.filter(Game.creeps,(creep) => creep.memory.role == "Worker");
        // if(workers.length < 3){
        //     Game.creeps[0].memory.role = "Worker";
        // }
        
        if(Game.spawns[spawnName].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns[spawnName].spawning.name];
            Game.spawns[spawnName].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns[spawnName].pos.x + 1, 
                Game.spawns[spawnName].pos.y, 
                {align: 'left', opacity: 0.8});
        }
        
	}
};

module.exports = roleSpawing;