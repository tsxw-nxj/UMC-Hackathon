/*eslint-disable*/
import Title from "./Title"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Switch from "./Switch"
import "../jun.css";

export default function Upper() {

    const navigate = useNavigate();
    const handleNext = () => {
        navigate(`/room`);
    };

    return(
        <div className='Upper'>
            <Title/>
            <button style={{background:"none", border:"none"}} onClick={handleNext}><Switch/></button>
        </div>
    )

}