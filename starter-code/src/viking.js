// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
};

Soldier.prototype.attack = function(){
   return this.strength;
};

Soldier.prototype.receiveDamage = function(damage){
   this.health = this.health - damage;
};

// Viking
function Viking(name,health,strength) {
   this.name = name;
   Soldier.call(this, health, strength, this.attack());

}

Viking.prototype.receiveDamage = function(damage){
   this.health = this.health - damage;
   if(this.health > 0){
       return this.name + "has recieved " + damage + " points of damage";
   }else{
       return this.name + "has died in act of combat";
   }
}

Viking.prototype.battleCry = function(){
   return "Odin Owns You All";
}

// Saxon
function Saxon(health,strength) {
   Soldier.call(this, health, strength, this.attack());
}

Saxon.prototype.receiveDamage = function(damage){
   this.health = this.health - damage;
   if(this.health > 0){
       return " A Saxon has recieved " + damage + " points of damage";
   }else{
       return " A Saxon has died in act of combat";
   }
}

// War
function War() {}
