import store from '../../config/store';
import { SPRITE_SIZE } from '../../config/constants';

export default function handleMovement(player:any) {

    function getNewPosition(direction:string) {
        const oldPos = store.getState().player.position;
        console.log(oldPos)
        switch(direction) {
            case 'TOP':
                return [ oldPos[0], oldPos[1]-SPRITE_SIZE]
            case 'RIGHT':
                return [ oldPos[0]+SPRITE_SIZE, oldPos[1]]
            case 'LEFT':
                return [ oldPos[0]-SPRITE_SIZE, oldPos[1]]
            case 'DOWN':
                return [ oldPos[0], oldPos[1]+SPRITE_SIZE]
        }
        
    }

    function dispatchMove(direction:string) {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)
            }
        })
    }

    function handleKeyDown(event:any) {
        event.preventDefault();

        switch(event.keyCode) {
            case 87:
                return dispatchMove('TOP');

            case 83:
                return dispatchMove('DOWN');
    
            case 65:
                return dispatchMove('LEFT');
    
            case 68:
                return dispatchMove('RIGHT');
        
                      
            default:
                console.log(event.keyCode);
        }
    }

    window.addEventListener('keydown', (event) => {
        handleKeyDown(event)
    })

    return player
}