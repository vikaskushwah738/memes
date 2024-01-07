import React, { useState, createRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Text from './Text';
import {exportComponentAsJPEG} from "react-component-export-image"
function Edit() {
    const [params] = useSearchParams();
    console.log(params.get("url"));
    const [count, setCount]=useState(0);
    const memeRef= createRef();
    const addText=() =>{ setCount(count+1)}

    return (
        <div className='container'><br />
            <div ref={memeRef} style={{width:"500px", border:"1px solid"}}><br />
                <img src={params.get('url')} alt=""  width='250px' />     
            </div>
            {Array(count).fill(0).map((el)=> <Text/> )}
            <Button style={{ marginTop:'10px' }} onClick={addText}>Add Text</Button>
            <Button variant='success' style={{marginLeft:'10px',marginTop:'10px'}} onClick={(el) =>{exportComponentAsJPEG(memeRef)} }>Save</Button>
        </div>
            )
}
export default Edit