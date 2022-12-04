const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };


// Crie uma função que retorne o dano do dragão.

// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = () => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;

  return damage;
};
// console.log(dragonDamage());



// Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = () => {
  const minDamage = warrior.strength;
  const maxdamage = minDamage * warrior.weaponDmg;
  const damage = Math.floor(Math.random() * (maxdamage - minDamage + 1)) + minDamage;

  return damage;
};  
// console.log(warriorDamage());



// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.

// **** DUVIDA SOBRE COMO MUDAR O VALOR DE MANA DO MAGE PARA IR ATUALIZANDO A CADA TURNO ***** //

const manaDamageMage = () => {
  // damage
  const minDamage = mage.intelligence;
  const maxDamage = minDamage * 2;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;  
  const mageObj = {
    dano: damage,
    manaSpent: 15,
  };
  
  // if (mage.mana < 15) {
  //   mageObj.dano = 'Não possui mana suficiente', mageObj.manaSpent = 0
  // }
  mage.mana < 15 && (mageObj.dano = 'Não possui mana suficiente', mageObj.manaSpent = 0);

  return mageObj;
};
console.log('Dano função mago', manaDamageMage());



