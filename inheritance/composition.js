function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`),
  };
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`),
  };
}

function attackerAndWalker({ name }) {
  return {
    attack: () => console.log(`${name} attacked`),
    walk: () => console.log(`${name} walked`),
  };
}

function swimmerMonsterCreator(name) {
  const monster = { name: name };

  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster),
  };
}

function flyerSwimmerMonsterCreator(name) {
  const monster = { name: name };

  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster),
    ...flyer(monster),
  };
}

const animal = flyerSwimmerMonsterCreator("Frog");
animal.swim();
animal.fly();
animal.attack();
animal.walk();
