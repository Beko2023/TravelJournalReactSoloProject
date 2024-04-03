import data from "./Data"
import React from "react"
import Header from "./components/Header.js"
import Hero from "./components/Hero.js"

export default function App () {
    const hero = data.map (item => {
        return (
            <Hero
                key={item.id}
                item={item}
            />
        )    
    })
         // Page />
    return (
        <div>
            <Header />
            {hero}
        </div>
    )
}