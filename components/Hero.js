import React from "react"

export default function Hero (props) {
    return (    
        <div className="hero">
            <div>
            <img src={`${props.item.imageUrl}`} className="hero--image" />
            </div>
            <div className="location--stats"> 
                <div className="location--text">
                        <h2 className="country--name"> {props.item.location}</h2>
                        <a className="country--loco" href={`${props.item.googleMapsUrl}`}>View in Google Maps</a>
                </div>
                    <h1 className="location--title"> {props.item.title} </h1>
                <div className="dates--section">
                    <span className="dates"> {props.item.startDate} - </span>
                    <span className="dates"> {props.item.endDate} </span>
                </div>
                <p className="country--description"> {props.item.description} </p>
            </div> 
        </div>
    )
}