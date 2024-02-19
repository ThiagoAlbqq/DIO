let types = {
  types: [
    ["mago", "magia"],
    ["guerreiro", "espada"],
    ["monje", "artes marciais"],
    ["ninja", "shuriken"],
  ],
};

class hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = "-";
    this.typeName = "-";
    for (let [typeName, category] of types.types) {
      if (typeName === type) {
        this.typeName = typeName;
        this.type = category;
        break;
      }
    }
  }

  attack() {
    console.log(`o ${this.typeName} está atacando com ${this.type}.`);
  }
}

let mage = new hero("neguin", 30, "ninja");

console.log(mage);
console.log(mage.attack());
