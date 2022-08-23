import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import Slide, { Slider } from '../../components/Slide/Slider'
import { loadProductAsync } from '../../redux/middleware/middleware'
import "./bodysection.css"
const BodyContainer = () => {
    const {isLoading , products , errorMessage,category} = useSelector(state => state.products)
   const dispatch =  useDispatch()
   useEffect(()=>{
     dispatch(loadProductAsync(category));
   },[category])
  
  return (<>
   <div style={{width:"77%",margin:"auto"}}>
    <Slider imgs={[
                'https://www.bigbasket.com/media/uploads/banner_images/CXNP9510_1200x300_110322.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/CXNP9507_1200x300_110322.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/YXNP641_1200x300_130422.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/l1p_cmc_m_tataneu_300_100422.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/CXNP9519_1200x300_160322.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP1196-1200X300-7thMAY22.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP641-1200X300-7thAPR22.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/CXNP9513_1200x300_110322.jpg',
            ]}/>


    </div>
    <div style={{display:"grid", gridTemplateColumns:"100%"}}>
    <div className="container body-container  px-5">
      <div className="row" style={{ 
}} >
        <div className="col col-lg-10 col-xl-10 col-md-12 col-sm-12 col-xs-12 content-col " >
          <h3 style={{textTransform: "uppercase",fontSize:"3vh"}} >{category} </h3>
          <div className="all-products">
            <i className="fa-solid fa-truck-moving"></i>
            <p>All Products</p>
          </div>
          <hr className="solid" />

          <div className="container-fluid card-container">
          {products && products.map((product) => {
            return <div key={product._id}>
             <Card  product={product}/>
            </div>
          })}
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default BodyContainer