import React from 'react'
import { Carousel} from 'react-bootstrap'

export default function LoginCarousel() {
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="h-100 w-100"
        src="https://pbs.twimg.com/card_img/1500598536374820869/c_lXBkQ5?format=jpg&name=medium"
        alt="soccer"
      />
  
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="h-100 w-100 "
        src="https://cdn.vox-cdn.com/thumbor/gi5U6WOTQpfmHg9iW_q642UqAH4=/0x0:3117x2190/920x613/filters:focal(698x242:1196x740):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70190319/1354725238.0.jpg"
        alt="football"
      />
   
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="h-100 w-100"
        src="https://cdn.vox-cdn.com/thumbor/fo2CStdLKifviqeCW1Xb15s3owo=/0x0:4423x2948/920x613/filters:focal(1859x1121:2565x1827):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63702612/1143868748.jpg.0.jpg"
        alt="baseball"
      />
      
    </Carousel.Item>
  </Carousel>
  )
}
