function numPicker(){
    return Math.floor(Math.random() * 3)+1;
}


class App extends React.Component {
    render(){
        console.log(numPicker());
        return(
            <SlotResults 
                pineapple="🍍"
                cherry ="🍒"
                eggplant ="🍆"
                />
        )
    }
}

ReactDOM.render(<App />,document.getElementById("root"));