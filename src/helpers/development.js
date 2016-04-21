import React from 'react';

function Dump(obj){
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}


export {Dump}