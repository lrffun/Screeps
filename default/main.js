var RoomNero = require("RoomNero");
var RoomNero1 = require("RoomNero1");

NeroRoleNumber = [
    {"role":"Nero_Worker","num":4,"parts":[WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]},
    {"role":"Nero_transfer","num":4,"parts":[WORK,WORK,WORK,WORK,WORK,CARRY,MOVE]},
    {"role":"Nero_upgrader","num":3,"parts":[WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE]},
    {"role":"Nero_Builder","num":2,"parts":[WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]},
    {"role":"Nero_transporter","num":1,"parts":[CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE]},
    {"role":"Nero_repairer","num":1,"parts":[WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]},
    {"role":"Nero_charger","num":1,"parts":[CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]},
    {"role":"Nero_attacker","num":3,"parts":[TOUGH,TOUGH,TOUGH,TOUGH,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE]},
    {"role":"Nero_thief","num":3,"parts":[WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE]},
    {"role":"Nero_claimer","num":1,"parts":[CLAIM,MOVE,MOVE]}
]

Nero1RoleNumber = [
    {"role":"Nero1_Worker","num":3,"parts":[WORK,CARRY,CARRY,MOVE,MOVE,MOVE]},
    {"role":"Nero1_transfer","num":4,"parts":[WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE]},
    {"role":"Nero1_Upgrader","num":4,"parts":[WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE]},
    {"role":"Nero1_Builder","num":2,"parts":[WORK,CARRY,CARRY,MOVE,MOVE]},
    {"role":"Nero1_transporter","num":3,"parts":[CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]},
    {"role":"Nero1_repairer","num":1,"parts":[WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]},
    {"role":"Nero1_charger","num":1,"parts":[CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]},
    // {"role":"attacker","num":3,"parts":[TOUGH,TOUGH,TOUGH,TOUGH,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE]},
    // {"role":"claimer","num":1,"parts":[CLAIM,MOVE,MOVE]},
    // {"role":"thief","num":3,"parts":[WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE]}
]

module.exports.loop = function () {
    RoomNero.run(NeroRoleNumber);
    RoomNero1.run(Nero1RoleNumber);
}

