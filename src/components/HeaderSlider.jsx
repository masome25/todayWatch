import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay, modules} from 'swiper'
import HeaderBottom from './HeaderBottom';

function HeaderSlider () {
    return (
      <div className= 'headerSlider' >
 <Swiper
       modules = {[Autoplay]}
       
       spaceBetween = {0}
       slidesPerView={1}
       autoplay={{delay: 2000}}
       loop
         >
         
        <SwiperSlide><img src='/image/top-gun-mav.jpg' />
        <div className="imgSliderInfo">
                  
                    <h1>Top Gun: Maverick</h1>
                    <ul>
                      <li>HD</li>
                      <li>
                      <i className="fa fa-star"></i>
                        8.6
                      </li>
                      <li>171 min</li>
                      <li>
                        <span>Action</span>
                        <span>/Adventure</span>
                      </li>
                    </ul>
                    <HeaderBottom />
                </div>
        </SwiperSlide>

        <SwiperSlide><img src='/image/venom-2.jpg' />
        <div className="imgSliderInfo">
                    <h1>venom</h1>

                    <ul>
                      <li>HD</li>
                      <li>
                      <i className="fa fa-star"></i>
                        6.6
                      </li>
                      <li>112 min</li>
                      <li>
                        <span>Action</span>
                        <span>/Sci-fi</span>
                      </li>
                    </ul>
                    <HeaderBottom />
                  </div>
              
        </SwiperSlide>


        <SwiperSlide><img src='/image/cp-winter-2.jpg' />
        <div className="imgSliderInfo">
                    <h1>Captain America: Winter soldier</h1>

                    <ul>
                      <li>HD</li>
                      <li>
                      <i className="fa fa-star"></i>
                        8.6
                      </li>
                      <li>130 min</li>
                      <li>
                        <span>Action</span>
                        <span>/Sci-fi</span>
                      </li>
                    </ul>
                    <HeaderBottom />
                  </div>
                
        </SwiperSlide>


        <SwiperSlide><img src='/image/legend.jpg' />
        <div className="imgSliderInfo">
      
                    <h1>Legend</h1>

                    <ul>
                      <li>HD</li>
                      <li>
                      <i className="fa fa-star"></i>
                        8.6
                      </li>
                      <li>130 min</li>
                      <li>
                        <span>Action</span>
                        <span>/Sci-fi</span>
                      </li>
                    </ul>
                    <HeaderBottom />
                  </div>
                
        </SwiperSlide>

       </Swiper>
      </div>
      
    )
}

export default HeaderSlider