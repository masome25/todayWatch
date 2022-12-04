

import React from "react";

 function Footer () {
  return (
    <section id="about us" className="aboutUs">
          <div className="footer">
          <div className="footerLeft">
          <h3>about us</h3>
            <p>
              <strong>TodayWatch</strong> is top of{" "}
              <strong>free streaming website</strong>, where to watch movies
              online free without registration required. With a big database and
              great features, we're confident TodayWatch is the best free movies
              online website in the space that you can't simply miss! TodayWatch
              movies, TodayWatch tv shows, TodayWatch online, TodayWatch movies
              online
            </p>
          </div>
            <div className="footerRight">
                <div>
                    <i className="fa fa-crown"></i>
                    High qulity
                </div>
                <div>
                  <i className="fa-solid fa-closed-captioning"></i>
                    Multi Subtitle  
                </div>
                <div>
                    <i className="fa fa-play"></i>
                    Free Forever
                </div>
                <div>
                    <i className="fa fa-bolt"></i>
                    Fast Load
                </div>
            </div>
          </div>
          <hr/>
          <div className='footerLinks'>
             <ul>
                 <li><i className="fa fa-facebook"></i></li>
                 <li><i className="fa fa-twitter"></i></li>
                 <li><i className="fa fa-google-plus"></i></li>
                 <li><i className="fa fa-youtube-play"></i></li> 
              </ul>
          </div>
    </section>
    

  );
};

export default Footer;