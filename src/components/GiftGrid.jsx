import { useFetchGifs } from "../hooks/useFetchGifs"
import { GiftItem } from "../components";


export const GiftGrid = ( {category}) => {
    
    const {images, isLoading} = useFetchGifs(category);

    return (
    <>
        <h3>{category}</h3>
        {
            isLoading && (<h2>está Cargando</h2>)
        }

        <div className="card-grid">
            {
                images.map( (imagen) => 
                    <GiftItem key={imagen.id} {...imagen} />
                ) 
            }
        </div>
    </>
  )
}
