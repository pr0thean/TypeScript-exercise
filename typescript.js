var Warrior = /** @class */ (function () {
    function Warrior(name, health, attack, defence) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defence = defence;
    }
    Warrior.prototype.writeFullInfo = function () {
        return "<br>Warrior " + this.name + "<br>Health: " + this.health + "<br>Attack: " + this.attack + "<br>Defence: " + this.defence + "<br>";
    };
    Warrior.prototype.writeInfo = function () {
        return "<br>Warrior " + this.name + "<br>Health: " + this.health + "<br>";
    };
    return Warrior;
}());
var Monster = /** @class */ (function () {
    function Monster(name, health, attack, defence) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defence = defence;
    }
    Monster.prototype.writeFullInfo = function () {
        return "<br>Monster " + this.name + "<br>Health: " + this.health + "<br>Attack: " + this.attack + "<br>Defence: " + this.defence + "<br>";
    };
    Monster.prototype.writeInfo = function () {
        return "<br>Monster " + this.name + "<br>Health: " + this.health + "<br>";
    };
    return Monster;
}());
function combat(w1, m1, j) {
    var action1 = document.getElementById("action1");
    var action2 = document.getElementById("action2");
    var action3 = document.getElementById("action3");
    var action4 = document.getElementById("action4");
    var action5 = document.getElementById("action5");
    var action6 = document.getElementById("action6");
    var actions = [action1, action2, action3, action4, action5, action6];
    actions[j].innerHTML += "Walka " + (j + 1) + "<br>";
    actions[j].innerHTML += w1.writeFullInfo();
    actions[j].innerHTML += m1.writeFullInfo();
    var i = 1;
    if (w1.defence >= m1.attack) {
        return actions[j].innerHTML += "<br>" + w1.name + " automatycznie wygrywa z uwagi na wysok\u0105 obron\u0119";
    }
    if (m1.defence >= w1.attack) {
        return actions[j].innerHTML += "<br>" + m1.name + " automatycznie wygrywa z uwagi na wysok\u0105 obron\u0119";
    }
    while (w1.health >= 0 || m1.health >= 0) {
        actions[j].innerHTML += "---------------------<br>RUNDA " + i + "<br>";
        actions[j].innerHTML += "<br>" + w1.name + " atakuje!";
        m1.health = m1.health + m1.defence - w1.attack;
        actions[j].innerHTML += m1.writeInfo();
        if (m1.health <= 0)
            return actions[j].innerHTML += "<br>" + w1.name + " wygrywa po " + i + " rundach";
        actions[j].innerHTML += "<br>" + m1.name + " atakuje!";
        w1.health = w1.health + w1.defence - m1.attack;
        actions[j].innerHTML += w1.writeInfo();
        if (w1.health <= 0)
            return actions[j].innerHTML += "<br>" + m1.name + " wygrywa po " + i + " rundach";
        i++;
    }
}
window.onload = function () {
    var combatButton = document.getElementById("combatButton");
    var j = 0;
    combatButton.addEventListener("click", function () {
        var warriorInfo = document.getElementById("infoWarrior");
        var warriorName = warriorInfo.querySelector("input[name='warriorNameInput']").value;
        var warriorHealth = warriorInfo.querySelector("input[name='warriorHealthInput']").value;
        var warriorAttack = warriorInfo.querySelector("input[name='warriorAttackInput']").value;
        var warriorDefence = warriorInfo.querySelector("input[name='warriorDefenceInput']").value;
        var wojownik1 = new Warrior(warriorName, parseInt(warriorHealth), parseInt(warriorAttack), parseInt(warriorDefence));
        var monsterInfo = document.getElementById("infoMonster");
        var monsterName = monsterInfo.querySelector("input[name='monsterNameInput']").value;
        var monsterHealth = monsterInfo.querySelector("input[name='monsterHealthInput']").value;
        var monsterAttack = monsterInfo.querySelector("input[name='monsterAttackInput']").value;
        var monsterDefence = monsterInfo.querySelector("input[name='monsterDefenceInput']").value;
        var monster1 = new Monster(monsterName, parseInt(monsterHealth), parseInt(monsterAttack), parseInt(monsterDefence));
        combat(wojownik1, monster1, j);
        j++;
    });
    if (j == 5) // why to nie działa?
        alert("To była ostatnia możliwa runda");
};
