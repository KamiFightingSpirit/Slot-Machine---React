

class App extends React.Component {
    render(){
       
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
