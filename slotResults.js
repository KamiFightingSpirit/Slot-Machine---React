const num = function numPicker(){
    const number =  Math.floor(Math.random() * 3);
    return number;
    
}
function slotResultCreator(fruitArray){
    let resultArr = [];   
    let i = 0;
    let counter = 0;
    while(i < 3) {
       resultArr.push(fruitArray[num()]); 
       i++;
    }
    const winner = winnerCheck(resultArr);
    const returnArr = [resultArr, winner];
    return returnArr;
}
function winnerCheck(resultArr) {
    if(resultArr[0] === resultArr[1] && resultArr[0] === resultArr[2]){
        return " Winner!!!!";
    } else {
       return " sorry, try again";
    }
}

class SlotResults extends React.Component {    
    render(){
        const fruitArray = [this.props.pineapple, this.props.cherry,this.props.eggplant];
        const fruitMap = fruitArray.map(k => <span>{k}</span>);
        const result1 = slotResultCreator(fruitArray,num);
        const result2 = slotResultCreator(fruitArray,num);
        const result3 = slotResultCreator(fruitArray,num);
   
        return(
            <div>
                <h1>{fruitMap} HELLO!!!!!! {fruitMap}</h1>
                <h3>Welcome to the Automatic Slot Machine Game</h3>              
                <div>{result1}</div>
                <div>{result2}</div>
                <div>{result3}</div>
            </div>
        )
    }

}