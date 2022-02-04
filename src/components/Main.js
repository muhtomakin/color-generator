import React, { useState } from 'react'
import Color from './Color'
import Values from 'values.js'


const Main = () => {
    
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("#FF7777").all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors)
        }catch (error) {
            setError(true)
            console.log(error);
        }
    };


    return (
        <>
            <section className='container'>
                <h3>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text' 
                        value={color} 
                        onChange={(e) => setColor(e.target.value)} 
                        className={`${error ? "error" : null}`}
                    />
                    <button type='submit' className='btn'>submit</button>
                </form>
            </section>
            <section className='colors'>
                {list.map((color, index) => {
                    return (
                        <Color 
                            key={index} 
                            {...color} 
                            index={index} 
                            hexColor={color.hex}
                        />
                    )
                })}               
            </section>
        </>
    )
}

export default Main
