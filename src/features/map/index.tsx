import React from 'react';
import { connect } from 'react-redux';
import { SPRITE_SIZE } from '../../config/constants';

import './style.css';

function getTileSprite(type:number) {
    switch(type) {
        case 0:
            return 'grass'
        case 5:
            return 'rock'
        case 6:
            return 'tree'
    }
}

function MapTile(props:any) {
    return <div 
        className={`tile ${getTileSprite(props.tile)}`}
        style={{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE,
        }}
    >

    </div>
}

function MapRow(props:any) {
    return <div className='row'>
        {
            props.tiles.map((tile: any) => <MapTile tile={tile} />)
        }
    </div>
}

function Map(props: any) {
    return (
    <div
        style={{
            position: 'relative',
            top: '0px',
            left: '0px',
            width: '800px',
            height: '640px',
            border: '4px solid red',
        }}
    >
        {
            props.tiles.map( (row: Array<number>) => <MapRow tiles={row} />)
        }
    </div>
    )
}

function mapStateToProps(state:any) {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map);