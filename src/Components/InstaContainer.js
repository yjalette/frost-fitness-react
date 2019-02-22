import React, {Component} from 'react';
import axios from 'axios';

class InstaContainer extends Component{
    state = {
        items: []
    }
    componentDidMount(){
        axios.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=1575675725.7884846.dc59284ffc014984837da29901e99087")
        .then(res => {
            console.log(res)
           this.setState({
               items: res.data.data.slice(0, 5)
           })
        })
    }
    render() {
        const {items} = this.state;
        const itemList = items.length ? (
            items.map(item => {
                return (
                    <div key={item.id}>
                        <img src={item.images.standard_resolution.url} alt="instagram" />
                    </div>
                )      
            })
        ) : (
           <div>no posts</div>
        )

        return (
            <div id="insta">{itemList}</div>
        )
       
    }
}

export default InstaContainer;