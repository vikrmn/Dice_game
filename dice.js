roll.onclick = function(){
    const numDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    
    for(let i = 0; i < numDice; i++){
       const value = Math.floor(Math.random() * 6) + 1;
       values.push(value);
       const image = (`<img src = "dice_images/${value}_dice.png">`);
       images.push(image);
    }
    diceResult.textContent =`dice: ${values.join(' , ')}`;
    diceImages.innerHTML = `${images.join(' ')}`;
}