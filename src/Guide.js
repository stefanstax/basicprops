import React from 'react'

const guide = (props) => {
    return (
        <div className={props.display}>
            <ul>
                <li>Instead of having <span>introduction</span>, <span>location</span>, <span>bio</span> divs make them into separate files.</li>
                <li>Import and showcase new files into your main App.js</li>
                <li>Transform hardcoded text into props</li>
                <li>Design is not important, understanding how props work is</li>
                <li>Feel free to write for help, we can even schedule a free call</li>
            </ul> 
        </div>
    )
}

export default guide
