import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category}) =>{
   
    // const [images, setImages] = useState([]);   
    const {data:imagen,loading} = useFetchGifs( {category});

    


    return(
        <>
            <h3> {category}</h3>
                {loading && <p>Loading</p>}
                <div className='card-grid'>
                {
                    imagen.map( img => (

                        <GifGridItem 
                        key={img.id}
                        {...img }
                        />
                    ))
                }
            </div>
        </>
    )

}