import { Component } from "react";
import "./App.css";
import Button from "./Components/Button";
import CardListClass from "./Components/CardListWithClass";
class App extends Component {
    state = {
        show: false,
    };
    handleShow = () => {
        this.setState({
            show: !this.state.show,
        });
    };
    render() {
        return (
            <div className="App">
                <Button textButton="Show" onClick={this.handleShow} />
                <CardListClass show={this.state.show} />
            </div>
        );
    }
}

export default App;
