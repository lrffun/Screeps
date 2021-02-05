var roleSpawn = require("autoSpawning")
var roleWorker = require("role.Worker")
var roleUpgrader = require("role.Upgrader")
var roleBuilder = require("role.Builder")
var soldier = require("Nero1Soldier")
var roleTransporter = require('role.transport');
var roleRepairer = require("role.repairer")
var roleCharger = require("role.charger")
var mTower = require('Tower')

var Main = {
    run: function(roleNumber){
        roleSpawn.run("Nero1",roleNumber);
        soldier.run();
        mTower.run("Nero1")
        for(var name in Game.creeps) {
            var creep = Game.creeps[name];
            if(creep.memory.role == "Nero1_Worker"){
                roleWorker.work(creep,0,1);
            }
            if(creep.memory.role == "Nero1_Upgrader"){
                roleUpgrader.run(creep,4,1);
            }
            if(creep.memory.role == "Nero1_Builder"){
                roleBuilder.run(creep,1,1);
            }
            if(creep.memory.role == "Nero1_transporter"){
                roleTransporter.transport(creep,3,4);
            }
            if(creep.memory.role == "Nero1_repairer"){
                roleRepairer.run(creep,2,1);
            }
            if(creep.memory.role == "Nero1_charger"){
                roleCharger.run(creep,0,1);
            }
        
        }
    }
}

module.exports = Main;