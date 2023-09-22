import React from 'react'
import { TopBar } from '../Bar/TopBar'
import { SideBar } from '../Bar/SideBar'
import './Admin.css';

export const ViewProduct = () => {
  return (
    <div>
      <div className="main d-flex-r">
      <TopBar/>
      <SideBar/>
      <div className="content d-flex-r">
        {/* <table style={{width:'40vw'}}>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Available</th>
            </tr>
            <tr style={{textAlign:'center'}}>
              <td>1</td>
              <td>Tomato</td>
              <td>15</td>
              <td>Vegetables</td>
              <td>25kg</td>
            </tr>
            <tr style={{textAlign:'center'}}>
              <td>2</td>
              <td>Apple</td>
              <td>120</td>
              <td>Fruits</td>
              <td>18kg</td>
            </tr>
            <tr style={{textAlign:'center'}}>
              <td>3</td>
              <td>Onion</td>
              <td>50</td>
              <td>Vegetables</td>
              <td>35kg</td>
            </tr>
            <tr style={{textAlign:'center'}}>
              <td>1</td>
              <td>Tomato</td>
              <td>15</td>
              <td>Vegetables</td>
              <td>25kg</td>
            </tr>
            <tr style={{textAlign:'center'}}>
              <td>1</td>
              <td>Tomato</td>
              <td>15</td>
              <td>Vegetables</td>
              <td>25kg</td>
            </tr>
            <tr style={{textAlign:'center'}}>
              <td>1</td>
              <td>Tomato</td>
              <td>15</td>
              <td>Vegetables</td>
              <td>25kg</td>
            </tr>
            <tr style={{textAlign:'center'}}>
              <td>1</td>
              <td>Tomato</td>
              <td>15</td>
              <td>Vegetables</td>
              <td>25kg</td>
            </tr> 
        </table>*/}
        <div className='vpcontainer d-flex-r'>              
               <div className='vpbox' style={{width:'15vw',height:'40vh',border:'2px solid gray',margin:'0 20px'}}>
                      <img src='https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg' style={{height:'15vh',width:'10vw',marginTop:'10px',marginLeft:'35px'}}></img>
                      <h4 style={{marginLeft:'20px',marginTop:'10px'}}>Product: Tomato</h4>
                      <div style={{marginTop:'-15px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Category: Vegetables</h4></div>
                      <div style={{marginTop:'-12px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Price: 25</h4></div>
                      <div style={{marginTop:'-10px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Available: 50kg</h4></div>
              </div>
               <div className='vpbox' style={{width:'15vw',height:'40vh',border:'2px solid gray',margin:'0 20px'}}>
                      <img src='https://api.time.com/wp-content/uploads/2015/06/maggi-noodles.jpg' style={{height:'15vh',width:'10vw',marginTop:'10px',marginLeft:'35px'}}></img>
                      <h4 style={{marginLeft:'20px',marginTop:'10px'}}>Product: Maagi</h4>
                      <div style={{marginTop:'-15px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Category: Food</h4></div>
                      <div style={{marginTop:'-12px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Price: 20</h4></div>
                      <div style={{marginTop:'-10px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Available: 72 pkt</h4></div>
              </div>
               <div className='vpbox' style={{width:'15vw',height:'40vh',border:'2px solid gray',margin:'0 20px'}}>
                      <img src='https://m.media-amazon.com/images/I/61BYqhOPA2L.jpg' style={{height:'15vh',width:'10vw',marginTop:'10px',marginLeft:'35px'}}></img>
                      <h4 style={{marginLeft:'20px',marginTop:'10px'}}>Product: Vim Bar</h4>
                      <div style={{marginTop:'-15px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Category: Kitchen</h4></div>
                      <div style={{marginTop:'-12px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Price: 15</h4></div>
                      <div style={{marginTop:'-10px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Available: 50 pkt</h4></div>
              </div>
               <div className='vpbox' style={{width:'15vw',height:'40vh',border:'2px solid gray'}}>
                      <img src='https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=' style={{height:'15vh',width:'10vw',marginTop:'10px',marginLeft:'35px'}}></img>
                      <h4 style={{marginLeft:'20px',marginTop:'10px'}}>Product: Apple</h4>
                      <div style={{marginTop:'-15px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Category: Fruits</h4></div>
                      <div style={{marginTop:'-12px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Price: 125</h4></div>
                      <div style={{marginTop:'-10px'}}><h4 style={{marginLeft:'20px',marginTop:'5px'}}>Available: 0kg</h4></div>
              </div>
        </div>

      </div>
    </div>
    </div>
  )
}
