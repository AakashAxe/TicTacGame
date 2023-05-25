import {useState} from 'react';
import "./Tile.css";

const Tile = ({id, onChangeFunc}) => {

    const [value, setValue] = useState(null);
    const [disabled, setDisabled] = useState(false);

    return (
        <div className='tile' disabled={disabled} onClick={() => {
                onChangeFunc(id, setValue)
                setDisabled(true)
                }}>
            {value}

        </div>
    )
}

export default Tile;


