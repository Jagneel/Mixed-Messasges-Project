// The HIIT workout planner

//  we must declare the exercises used within this planner

const exercises = ['Star jumps - 60s', 'Mountain climbers - 30s', 'Plank 30s', 'Push ups -30s', 'Push ups - 30s', 'Sit ups - 30s', 'Stop jogging - 60s', 'Squats - 45s', 
'Squat thrust - 30s', 'Flutter kicks -30s', 'Russian twists - 30s', 'V-holds - 45s'];

// Now we must define two 6 sided die & simulate rolling the dice.

const rollDice = () => {
    const dice1 = [1,2,3,4,5,6];
    const dice2 = [1,2,3,4,5,6];
    const rolledDice = dice1[Math.floor(Math.random()*6)] + dice2[Math.floor(Math.random()*6)];
    return rolledDice;
    
};

//Test to see if the code works below:
console.log(rollDice())

//Now we define the number of rolls to fill the training schedule. We shortened the word exercise to ex.


// Now we have to ensure that two numbers never get rolled one after another.

