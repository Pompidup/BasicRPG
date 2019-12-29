import React from 'react';

import Player from '../player';
import Map from '../map';

function World(props: any) {
    return (
        <div 
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: 'auto',
            }}>
            <Map />
            <Player />
        </div>
    )
}

export default World;