import React from 'react';

import Player from '../player';
import Map from '../map';
import store from '../../config/store';
import { tiles } from '../../data/map/1';

function World(props: any) {
    store.dispatch({ type: 'ADD_TILES', payload: {
        tiles,
    }})
    
    return (
        <div 
            style={{
                position: 'relative',
                width: '800px',
                height: '640px',
                margin: 'auto',
            }}>
            <Map />
            <Player />
        </div>
    )
}

export default World;