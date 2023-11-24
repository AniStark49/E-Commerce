import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis minima ex beatae mollitia provident neque labore doloremque cupiditate earum molestiae reiciendis quibusdam temporibus asperiores assumenda veritatis expedita, deleniti laboriosam repellat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta in voluptas vitae quod rem impedit sunt tenetur neque nam, sit ut eligendi modi, rerum distinctio libero accusantium fugit laboriosam alias?</p>
        </div>
    </div>
  )
}

export default DescriptionBox