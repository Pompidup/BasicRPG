import React from 'react';
import { connect } from 'react-redux';
import walkSprite from './walkSprite.png';
import handleMovement from './movement';

const Player = (props: any) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: '0 0',
                width: '16px',
                height: '16px',
            }}
        />
    )
}

function mapStateToProps(state: any) {
    return {
        ...state.player,
    }
}
export default connect(mapStateToProps)(handleMovement(Player));