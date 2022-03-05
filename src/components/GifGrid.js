import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {
    //Se ejecuta cuando se renderiza por primera vez el componente
    // const [images, setImages] = useState([])
    const { data:images, loading } = useFetchGifs(category);
    // useEffect(() => {
    //     getGifs(category)
    //         // .then(setImages);
    //         .then(img => setImages(img));
    // }, [category])

    return (
        <>
            <h1>{category}</h1>
            {loading && <p>Loading...</p>}
            <div className='card-grid'>
                <ol>
                    {
                        // images.map(({ id, title }) =>
                        images.map(img =>
                        // {} Sin llaves es por que es un return implicito
                        (
                            <GifGridItem
                                key={img.id}
                                // img={img}
                                {...img}
                            />
                            // <li key={id}>{title}</li>
                        ))
                    }
                </ol>
            </div>
        </>
    );
};

export default GifGrid;
