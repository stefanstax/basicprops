const Entry = (props) => {
    return (
        <button className={`${props.display}`} onClick={props.triggerTest}>Start</button>
    )
}

export default Entry
