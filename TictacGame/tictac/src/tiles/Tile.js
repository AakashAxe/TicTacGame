import {useState} from 'react';

const Tile = ({id, onChangeFunc}) => {

    const [value, setValue] = useState(null);

    return (
        <div>
            <button onClick={() => {onChangeFunc(id, setValue)}}>{value}</button>
        </div>
    )
}

export default Tile;


