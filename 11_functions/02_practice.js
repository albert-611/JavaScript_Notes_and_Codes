function rollDice(){
    while(1){
    let rand = (Math.floor(Math.random() * 6) + 1);
        if(rand === 6){
            console.log("Chokka : ", rand);
            break;
        }else{
            console.log(rand);
        }
    }
}rollDice();