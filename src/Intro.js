import React from 'react'

const Intro = (props) => {
    return (
        <div className={props.display}>
           <h5>{props.intro}</h5> 
        </div>
    )
}

export default Intro
