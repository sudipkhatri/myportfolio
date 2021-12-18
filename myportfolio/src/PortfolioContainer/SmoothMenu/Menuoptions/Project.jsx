import React from 'react';
import './options.css'

const Project = () =>{

    return(
        <div className = "Project-container">
            <div className = "Project proj-1">
                <img src = {require('../../Files/Images/tictac.png').default} alt = "Img Not Found" />
                <a href = "https://sudipkhatri.github.io/tictac/" target = "_blank"> TicTacToe </a>
            </div>
            <div className = "Project proj-2">
                <img src = {require('../../Files/Images/header.jpg').default} alt = "Img Not Found" />
                <a href = "https://github.com/sudipkhatri/website" target = "_blank"> Scholarship Ranking Website </a>
            </div>
            <div className = "Project proj-3">
            <img src = {require('../../Files/Images/sample.jpg').default} alt = "Img Not Found" />
                <a href = "https://github.com/sudipkhatri/RIver-Crossing-Game" target = "_blank"> River Crossing Game</a>
            </div>
            <div className = "Project proj-4">
                <img src = {require('../../Files/Images/calculator.png').default} alt = "Img Not Found" />
                <a href = "https://sudipkhatri.github.io/reactCalculator/" target = "_blank"> Calculator </a>
            </div>
            <div className = "Project proj-6">
                <h1> Please check my github profile for more projects. </h1>
            </div>
            
        </div>
    )

}

export default Project;