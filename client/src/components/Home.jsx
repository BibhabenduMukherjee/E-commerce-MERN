import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
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
      
      <main>
        <h1>Featured Products</h1>
  
        <div className='products'>

    

           {loading ? (<div>loading...</div>)
           : error ? (<>{error}</>) : (<>
            <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>

           </>)
            
           }


         
        </div>

      </main>
    </div>
 
  )
}

export default Home