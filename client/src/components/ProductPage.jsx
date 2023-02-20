import React from 'react'
import { useParams } from 'react-router-dom';

function ProductPage(props) {
  const param = useParams();
  const {slug} = param
  return (
    <div>{slug}</div>
  );
}

export default ProductPage