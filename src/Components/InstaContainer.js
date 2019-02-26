import React, {Component} from 'react';
import axios from 'axios';
import {Carousel, Image} from 'react-bootstrap';

class InstaContainer extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
    this.state = {
        items: [],
        index: 0,
        direction: null
     }
   }
    componentDidMount(){
        axios.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=1575675725.7884846.dc59284ffc014984837da29901e99087")
        .then(res => {
            console.log(res)
           this.setState({
               items: res.data.data.slice(0, 9)
           })
        })
    }

    handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }
    render() {
        const {items} = this.state;
        const { index, direction } = this.state;
        const itemList = items.length ? (
            items.map(item => {
                return (
                        <Carousel.Item key={item.id}>
                            <Image className="d-block w-100" src={item.images.standard_resolution.url} alt="First slide" id="insta-img" thumbnail rounded/>
                        </Carousel.Item>  
                )      
            })
        ) : (
           <div>no posts</div>
        )

        return (
            <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} id="insta">
                        {itemList}
            </Carousel>
            
        )
       
    }
}

export default InstaContainer;