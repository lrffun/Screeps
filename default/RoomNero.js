var roleWorker = require('role.Worker');
var roleUpgrader = require('role.Upgrader');
var roleBuilder = require('role.Builder');
var roleSpawing = require('autoSpawning');
var roleAttacker = require('role.attacker');
var roleClaimer = require('role.claimer');
var roleCharger = require('role.charger');
var roleTransporter = require('role.transport');
var roleRepairer = require('role.repairer');
var roleThief = require('role.thief');
var roleTest = require('role.test');
var soldier = require('NeroSoldier');
var mAttack = require('attack');
var mTower = require('Tower');
const link = require('./Link');
var newRoom = require('newRoom');


var Main = {
   run: function(roleNumber){ 
              
    soldier.run();
    mTower.run("Nero");
    link.run(1,0);
    
    // mAttack.run(Game.creeps["attacker1"],"E6S42");
    
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        
        if(creep.memory.role == "Nero_Worker"){
            if(creep.ticksToLive < 30){
                
                    if(Game.spawns["Nero"].renewCreep(creep) == ERR_NOT_IN_RANGE){
                       creep.moveTo(Game.spawns["Nero"]); 
                    }else{
                       creep.moveTo(Game.spawns["Nero"]); 
                    }
                
            }else{
               roleWorker.work(creep,1,0); 
            }
        }
        if(creep.memory.role == "Nero_upgrader"){
            roleUpgrader.run(creep,4);
        }
        if(creep.memory.role == "Nero_Builder"){
            if(creep.ticksToLive < 30){
                
                    if(Game.spawns["Nero"].renewCreep(creep) == ERR_NOT_IN_RANGE){
                       creep.moveTo(Game.spawns["Nero"]); 
                    }else{
                       creep.moveTo(Game.spawns["Nero"]); 
                    }
                
            }else{
                roleBuilder.run(creep,3,1)
            }
        }
        if(creep.memory.role == "Nero_attacker"){
            roleAttacker.run(creep);
        }
        if(creep.memory.role == "Nero_claimer"){
            roleClaimer.run(creep,"E7S42");
        }
        if(creep.memory.role == "Nero_charger"){
            roleCharger.run(creep,0,0);
        }
        if(creep.memory.role == "Nero_transporter"){
            if(creep.ticksToLive < 30){
                
                    if(Game.spawns["Nero"].renewCreep(creep) == ERR_NOT_IN_RANGE){
                       creep.moveTo(Game.spawns["Nero"]); 
                    }else{
                       creep.moveTo(Game.spawns["Nero"]); 
                    }
                
            }else{
                roleTransporter.transport(creep,2,4);
            }
        }
        if(creep.memory.role == "Nero_thief"){
            roleThief.run(creep,"E5S43",0,"E6S43");
        }
        if(creep.memory.role == "Nero_repairer"){
            if(creep.ticksToLive < 30){
                
                    if(Game.spawns["Nero"].renewCreep(creep) == ERR_NOT_IN_RANGE){
                       creep.moveTo(Game.spawns["Nero"]); 
                    }else{
                       creep.moveTo(Game.spawns["Nero"]); 
                    }
                
            }else{
                roleRepairer.run(creep,3,1);
            }
        }
        // if(creep.memory.role == "test"){
        //     roleTest.run(creep);
        // }
    }

    roleSpawing.run("Nero",roleNumber);
    
    if(Game.creeps["Builder"]){
       newRoom.run(Game.creeps["Builder"]); 
    }else{
        Game.spawns["Nero"].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],"Builder");
    }
    
    if(Game.creeps["newRoom0"]){
       newRoom.run(Game.creeps["newRoom0"]); 
    }else{
        Game.spawns["Nero"].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],"newRoom0");
    }
   }
}

module.exports = Main;