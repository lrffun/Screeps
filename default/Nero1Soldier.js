var roleTransfer = require("role.transfer");
var recycling = require("recycling");
var en = require("emergency");

var soldier = {
   /** @param {Creep} creep **/
    run: function(){
        // var roles = _.filter(Game.creeps, (creep) => creep.memory.role == "Nero_attacker");
        // if(roles.length > 0&&Game.creeps["Nero_attacker0"]){
        //     var attacker1 = Game.creeps["Nero_attacker0"];
        //     attacker1.moveTo(new RoomPosition(32, 28, attacker1.room.name));
        // }
        // if(roles.length > 1&&Game.creeps["Nero_attacker1"]){
        //     var attacker2 = Game.creeps["Nero_attacker1"];
        //     attacker2.moveTo(new RoomPosition(35, 6, attacker2.room.name));   
        // }
        // if(roles.length > 2&&Game.creeps["Nero_attacker2"]){
        //     var attacker3 = Game.creeps["Nero_attacker2"];
        //     attacker3.moveTo(new RoomPosition(30, 21, attacker3.room.name));  
        // }

        var transfers = _.filter(Game.creeps, (creep) => creep.memory.role == "Nero1_transfer");
        if(Game.creeps["Nero1_transfer0"]){
            roleTransfer.transfer(Game.creeps["Nero1_transfer0"],0,0,4,9,1);
        }
        if(Game.creeps["Nero1_transfer1"]){
            roleTransfer.transfer(Game.creeps["Nero1_transfer1"],0,1,4,10,0);
        }
        if(Game.creeps["Nero1_transfer2"]){
            roleTransfer.transfer(Game.creeps["Nero1_transfer2"],1,2,5,11,3);
        }
        if(Game.creeps["Nero1_transfer3"]){
            roleTransfer.transfer(Game.creeps["Nero1_transfer3"],1,3,6,12,2);
        }
        
    }  
};

module.exports = soldier;