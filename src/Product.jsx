function Product(){
    const product={
        name: 'iPhone 14',
        price: 1200,
        description: 'Apremium smartphone with adnaced features',
      }
      
      return (
        <div >
      <h2> Product Details</h2>
      <p> Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
      
      )
        
}
export default Product