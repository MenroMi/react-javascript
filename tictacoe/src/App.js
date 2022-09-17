function Window() {

    const boxStyles = {
        border: "2px solid blue",
        borderRadius: '5px',
        width: '100px',
        height: "30px",
        boxShadow: '0x 5px 1px red',
    }

    return <div style={boxStyles}>Times!</div>
}

function Text() {
    const stylesSpan = {
        boxShadow: "0 0 5px blue",
        border: "1px solid blue",
        display: "block",
        margin: "0 auto"
    }
    const stylesDiv = {
        width: "400px"
        
    }
    const text = <div style={stylesDiv}>
        <span style={stylesSpan}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequatur minima maiores vero nobis praesentium libero dicta soluta voluptatibus nulla pariatur perferendis tempora, est nemo possimus magnam similique officiis! Praesentium.</span>
    </div>


    return text;
}


function ComponentBlock() {
    return (
        <div>
            <Window/>
            <Text/>
        </div>
    );
}

export default ComponentBlock;
