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
            <a style={{color: "white", fontSize: "20px", backgroundColor: "#303030", padding: "10px", borderRadius: "4.5px", boxShadow: "0px 0px 5px black"}} href="https://github.com/stefanstax/basicprops" target="_blank">Clone Repository from GitHub</a>
        </div>
    )
}

export default guide
