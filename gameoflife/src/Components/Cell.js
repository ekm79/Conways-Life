import React from "react";
import Styled from "styled-components";
import "./Cell.css";

const Square = Styled.div`
    height: 18px;
    width: 18px;
    border: 1px solid black;
    
`;

class Cell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            alive: false,
            dead: true,
        }
    }

    toggleCell = () => {
        this.props.selectBox(this.props.row, this.props.col);
    }


;
    render(){
        return ( 
            <Square className={this.props.cellClass} onClick={this.toggleCell} id={this.props.id}/>
        )
    }
}

export default Cell;