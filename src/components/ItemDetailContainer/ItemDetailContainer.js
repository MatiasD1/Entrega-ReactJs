import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetaliContainer = () => {

    const [product, setProduct] = useState(null);

    const { itemId } = useParams() 

    /*useEffect(() => {
        getProductById('1')
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    */
    useEffect(() => { 
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [itemId])
    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetaliContainer