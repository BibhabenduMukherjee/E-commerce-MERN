import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useReducer } from 'react'

// use reducer to state management 
const reducer = (state , action)=>{
    switch (action.type){
        case 'FETCH_REQUEST' :
            return {...state , loading:true}
        case 'FETCH_SUCCESS' :
            return {...state , products:action.payload, loading:false}
        case 'FETCH_FAIL':
            return {...state,loading:false , error : action.payload}
        default:
            return state
    }
}




function Home() {
  const [{loading , error , products} , dispatch] = useReducer(reducer, {
   products: [], loading:true,error:'',
  })
   //const [products , setProducts] = useState([])
   useEffect(()=>{
    async function fetchProducts(){
        dispatch({type : 'FETCH_REQUEST'})
        try{
            const result = await axios.get("http://localhost:3001/api/products");
            dispatch({type :'FETCH_SUCCESS' , payload : result.data})
          // setProducts(result.data)
        }catch(err){
    dispatch({type :'FETCH_FAIL' , payload : err.message})
        }
   
     //console.log(products)
    }

     fetchProducts();
     //console.log(products)
   } , [])

  return (
 
         <div className="">
      <header>
        <Link className='Brand' href = "/amazon">Amazon</Link>
      </header>
      <main>
        <h1>Featured Products</h1>
  
        <div className='products'>

    

           {loading ? (<div>loading...</div>)
           : error ? (<>{error}</>) : (<>
            {products.map((product)=>(
            <div className='product' key = {product.slug}>
            <Link to={`product/${product.slug}`}>
            <img src= {product.image} alt={product.name}/>
            </Link>
          
              <div className='pro-info'>
              <a href={`/product/${product.slug}`}>
              <p>{product.name}</p>
              </a>
             <Link to= {`/product/${product.slug}`}>
             <p>{product.price}</p>
             </Link>
            
              <button>Add To Cart</button>
              </div>
             
            </div>
          ))}

           </>)
            
           }


         
        </div>

      </main>
    </div>
 
  )
}

export default Home