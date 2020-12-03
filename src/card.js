import React, {useState, useEffect} from 'react';

const Card = (props) => {
return (
<div id='card' style={{height: '30vh', width: '20vw', display: 'flex', flexDirection: 'column'}}>
    <img src={props.thumbnailUrl} />
    <h3>{props.title}</h3>
</div>
)
}
 export default Card;