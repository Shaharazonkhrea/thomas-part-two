function playMiniGolf() {
    let name = prompt("Welcome to GC mini golf! What is your name?");
    
    let numHoles = parseInt(prompt(`Hi ${name}! Would you like to play 3 or 6 holes today?`));
    
    
    let totalPar = numHoles * 3;
    let totalScore = 0;
    
    for (let hole = 1; hole <= numHoles; hole++) {
        let puttCount = parseInt(prompt(`How many putts for hole ${hole}: (par is 3)`));
        totalScore += puttCount;
    }
    
    let difference = totalScore - totalPar;
    
    if (difference > 0) {
        console.log(`Nice try, ${name}... Your total par was: +${difference}.`);
    } else if (difference < 0) {
        console.log(`Great job, ${name}! Your total par was: ${difference}.`);
    } else {
        console.log(`Good game, ${name}. Your total par was: 0.`);
    }
}

playMiniGolf();
