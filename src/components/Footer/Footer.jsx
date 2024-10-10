import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* <div className="app-store-play">
        <div className="icon-footer appstore">
          <div className="img d_flex logo-text">
            <i className="fa-brands fa-google-play"></i>
            <span>Google Play Store</span>
          </div>
          <div className="img d_flex logo-text">
            <i className="fa-brands fa-app-store-ios"></i>
            <span>Apple App Store</span>
          </div>
        </div>
      </div> */}
      <div className="">
        <h2>Customer Care</h2>
        <ul>
          <li>Help Center</li>
          <li>How To Buy</li>
          <li>Track Your Order</li>
          <li>Corporate & Bulk Purchasing</li>
          <li>Returns & Refunds</li>
        </ul>
      </div>

      <div className="">
        <h2>About Us</h2>
        <ul>
          <li>Careers</li>
          <li>Our Stories</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="instagram-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
  <h2>Gallery</h2>
  <div className="b-img" style={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '100%' }}>
    <a href="#"><img src="/assets/flash-deals/1/1.jpg" className="img-fluid" alt="gallery 1" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} /></a>
  </div>
  <div className="b-img" style={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '100%' }}>
    <a href="#"><img src="/assets/flash-deals/2/1.jpg" className="img-fluid" alt="gallery 2" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} /></a>
  </div>
  <div className="b-img" style={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '100%' }}>
    <a href="#"><img src="/assets/flash-deals/3/1.jpg" className="img-fluid" alt="gallery 3" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} /></a>
  </div>
  <div className="b-img" style={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '100%' }}>
    <a href="#"><img src="/assets/flash-deals/4/1.jpg" className="img-fluid" alt="gallery 4" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} /></a>
  </div>
</div>

    </footer>
  );
};

export default Footer;
