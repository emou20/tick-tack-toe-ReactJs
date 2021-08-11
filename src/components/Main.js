import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div className="contMainBtt">
                <a href="/pwpc" className="bttMain">Jouer contre ordinateur</a>
                <a href="/pwpl" className="bttMain">Jouer contre un autre joueur</a>
            </div>
        )
    }
}
