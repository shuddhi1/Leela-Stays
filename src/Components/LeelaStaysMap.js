import React from 'react'

function LeelaStaysMap() {
  return (
      <div className="map-section">

    <h3 className="map-title">Find Us Here</h3>
    <p className="map-description">Located in the heart of nature, Leela Stays offers easy accessibility with stunning mountain views</p>
    
    <div className="map-wrapper" style={{padding:"20px"}}>
      <div className="map-container">
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4079.7457163231657!2d78.0603172!3d30.454620799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d10003e27045%3A0x22bce633d7459b5e!2sLeela%20Stays!5e1!3m2!1sen!2snl!4v1754462065018!5m2!1sen!2snl" title="Leela Says Map" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
      </div>
      
      <div className="location-details">
        <div className="detail-item">
          <span className="icon">🏔️</span>
          <div>
            <h5>Mountain Location</h5>
            <p>Nestled in scenic mountain surroundings</p>
          </div>
        </div>
        <div className="detail-item">
          <span className="icon">🚗</span>
          <div>
            <h5>Easy Access</h5>
            <p>Well-connected by road with parking available</p>
          </div>
        </div>
        <div className="detail-item">
          <span className="icon">🌲</span>
          <div>
            <h5>Natural Setting</h5>
            <p>Surrounded by lush greenery and fresh air</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LeelaStaysMap