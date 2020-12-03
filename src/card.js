import React, {useState, useEffect} from 'react';

const Card = (props) => {
return (
<div id='card' style={{height: 'fit-content', width: '20vw', display: 'flex', flexDirection: 'column', border: '1px solid gray',marginBottom: '2vh', overflow: 'auto'}}>
    <img src={props.thumbnailUrl} />
    <h3>{props.title}</h3>
    <h4>id: {props.id}</h4>
</div>
)
}
 export default Card;