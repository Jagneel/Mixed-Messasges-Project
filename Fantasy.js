// Fantasy Random Character Generator

// First let's create an object that contains character traits

const charTraits = {
    race : ['Human', 'Elf', 'Dwarf', 'Orc', 'Troll', 'Goblin'],
    profession : ['Warrior', 'Mage', 'Rouge', 'Preist', 'Paladin'],
    allegiance : ['Alliance', 'Horde', 'Blood Cult', 'Infernals']
};

const getRandomTrait = () => {
    let randRace = charTraits.race[(Math.floor(Math.random()*charTraits.race.length))];
    let randProf = charTraits.profession[(Math.floor(Math.random()*charTraits.profession.length))];
    let randAlle = charTraits.allegiance[(Math.floor(Math.random()*charTraits.allegiance.length))];
    return `You are a ${randRace} ${randProf} who fights for the ${randAlle}!`;
};

console.log(getRandomTrait())