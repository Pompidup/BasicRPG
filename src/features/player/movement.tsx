import store from '../../config/store';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants';

export default function handleMovement(player:any) {

    function getNewPosition(oldPos:any, direction:string) {
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

    function observeImpassable(newPos:any) {
        const tiles = store.getState().map.tiles;
        
        const y = newPos[1] / SPRITE_SIZE;
        const x = newPos[0] / SPRITE_SIZE;

        if (y < 0 || y > MAP_HEIGHT / SPRITE_SIZE - 1) {
            return false;
        } else {

            const nextTile = tiles[y][x];
            return nextTile < 5;
        }
    }

    function observeBoundaries(oldPos:any, newPos:any) {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
                (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
                ? newPos : oldPos;
    }

    function dispatchMove(newPos:any) {
        
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos,
            }
        })
    }

    function attemptMove(direction:string) {
        const oldPos = store.getState().player.position;
        const newPos = getNewPosition(oldPos,direction);

        if (observeBoundaries(oldPos, newPos) && observeImpassable(newPos)) {
            dispatchMove(newPos)
        }
    }

    function handleKeyDown(event:any) {
        event.preventDefault();

        switch(event.keyCode) {
            case 87:
                return attemptMove('TOP');

            case 83:
                return attemptMove('DOWN');
    
            case 65:
                return attemptMove('LEFT');
    
            case 68:
                return attemptMove('RIGHT');
        
                      
            default:
                console.log(event.keyCode);
        }
    }

    window.addEventListener('keydown', (event) => {
        handleKeyDown(event)
    })

    return player
}