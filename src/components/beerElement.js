import * as React from 'react';
import {Col,Image} from 'react-bootstrap';

class BeerElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display:"none",
        };
        this.showInfoProduct = this.showInfoProduct.bind(this);
        this.hiddenInfoProduct = this.hiddenInfoProduct.bind(this);

    }
    showInfoProduct(i){
        let newState = this.state.display === 'none' ? 'block' : 'none';
        this.setState({ display: newState });
    }
    hiddenInfoProduct(i){
        let newState = this.state.display === 'none' ? 'block' : 'none';
        this.setState({ display: newState });
    }
    render() {
        return (

            <Col lg={3} md={4} sm={6} xs={12} className="product" onMouseEnter={this.showInfoProduct.bind(this)} onMouseLeave={this.hiddenInfoProduct.bind(this)}>
                <div className="overlay" style={{display:this.state.display}} >
                    <div>{this.props.product.brewers_tips}</div>
                </div>
                <center>
                    <div style={{fontSize:20, fontWeight:800}}>{this.props.product.name}</div>
                    <div><Image src={this.props.product.image_url}  responsive style ={{maxHeight:150}}></Image></div>
                    <div><p>{this.props.product.tagline}</p></div>
                </center>
            </Col>
        );
    }
}

export default BeerElement;