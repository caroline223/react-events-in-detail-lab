// Code CoordinatesButton Component Here

import React from 'react';

class CoordinatesButton extends React.Component {


    processClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <div>
                <button onClick={this.processClick}>Coordinates</button>
            </div>
        )
    }


}

export default CoordinatesButton;
