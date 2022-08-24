import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import  { Slider } from '../../components/Slide/Slider'
import { loadProductAsync } from '../../redux/middleware/middleware'
import "./bodysection.css"
const BodyContainer = () => {
    const {  products ,category} = useSelector(state => state.products)
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
      <div className="row"  >
      <div className="col col-lg-2 col-xl-2  d-none d-lg-block d-xl-block blank-col" style={{paddingTop:"12vh",paddingLeft:"10vh"}}>

        <h4 style={{fontSize:"2vh",color:"grey"}}>Bank Offers</h4>
          <img
            className="img-fluid"
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_aff_m_paytm_360_11082022.jpg"
            alt="offer"
          />
           <img
            className="img-fluid"
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_aff_m_rbl_360_110822.jpg"
            alt="offer"
          />
           <img
            className="img-fluid"
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_aff_m_indus_360_110822.jpg"
            alt="offer"
          />
        </div>
        <div className="col col-lg-10 col-xl-10 col-md-12 col-sm-12 col-xs-12 content-col " >
          <h3 style={{textTransform: "uppercase",fontSize:"3vh"}} >{category} </h3>
          <div className="all-products">
            <i className="fa-solid fa-truck-moving" style={{color:"#84c225"}}></i>
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