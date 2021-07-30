import React from 'react'
import './Card.css'
import image from '../../assets/image.png'

export default function Card(props) {
    const {title, description} = props
    return (
        <div className="card">
            
            <div className="card-container">

                <div className="img-container">
                    <img src={image} alt="" />
                </div>

                <div className="text-container">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <a href="https://www.instagram.com/inokiardhi" target="_blank"><span className="fa fa-external-link"></span></a>
                </div>

            </div>

        </div>
    )
}
