import React from 'react';
import Person from './pexels-photo-1239291.jpeg'
import './Webbpage.css'
import ReactStars from 'react-rating-stars-component';
import image1 from './2.jpg'
  import image2 from "./download.jpg"
  import image3 from "./images.jpg"

export default function Webpage() {
  
  return (
    <div className='container'>
        <div className='text-center fs-1 fw-bold'>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More</div>
        <div  className="text-secondary fs-5 fw-bold">Multi-Day Course <i className="bi bi-question-circle"></i></div>
        <div className="row my-5 mx-1">
    <div className="col  fs-5 fw-bold">
      In this 5 day class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.
     <div className='my-4 mx-4'>
        
        <a href=".">
        <img className="img-thumbnail rounded-circle" style={{width:"50px"}} src={Person} alt="person"/>
       {" "} Kimberly R Moseler</a>
       <i className="fa fa-star-half" aria-hidden="true"></i>
       
       </div> 
       <div className="mx-4 fs-6 text-secondary">
       <ReactStars
    count={5}
    onChange={()=>console.log("rating changed")}
    size={24}
    activeColor="#ffd700"
  />407 total reviews for this teacher
       </div>
       <div className="mx-4 fs-6 text-secondary">
       <ReactStars
    count={5}
    onChange={()=>console.log("rating changed")}
    size={24}
    activeColor="#ffd700"
  />5 reviews for this class
       </div>

       <div className="mx-5 my-3"><button className='btn fw-bold' style={{color: 'white',backgroundColor:"#301eb0",borderRadius: '50px'}}>See Class Schedule<i class="bi bi-chevron-right"></i></button>
       {" "}
       <button className='btn fw-bold' style={{color: '#301eb0',backgroundColor: 'white',borderRadius: '50px'}}><i class="bi bi-heart"></i>{" "}Save</button>
       {" "}
       <button className='btn fw-bold' style={{color: '#301eb0',backgroundColor: 'white',borderRadius: '50px'}}><i class="bi bi-share"></i>{" "}Share</button>
       </div>
       
      </div>

    <div className="col">
      <div className='row'>
        <div className='col'>
        <img className="img-thumbnail" style={{height:"400px",width:"100%"}}  src={image1}  alt="Share" />
        </div>
        <div className='col'>
          <div> <img className="img-thumbnail" style={{height:"200px",width:"200px"}} src={image2} alt="Shareshare2" /></div>
         <div><img className="img-thumbnail" style={{height:"200px",width:"200px"}} src={image3} alt="share3" /></div>
        </div>

      </div>
    </div>
  </div>
    </div>
  )
}
