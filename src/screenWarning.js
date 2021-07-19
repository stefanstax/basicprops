import React from 'react'

const ScreenWarning = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", color: "white"}}>
            <h4 style={{width: "65%"}}>Please open this project on a device that has IDE and is higher than 1024px</h4>
            <a style={{color: "white", backgroundColor: "#303030", padding: "10px 20px", borderRadius: "4.5px", boxShadow: "0px 0px 5px black"}} href="https://github.com/stefanstax/basicprops" target="_blank">Open Repository</a>
        </div>
    )
}

export default ScreenWarning
