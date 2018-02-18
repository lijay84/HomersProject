import * as React from 'react';
import {Col,Image} from 'react-bootstrap';

class BeerElement extends React.Component {

    render() {
        return (
            <Col md={4} xs={6} sm={4}>
                <center>
                <div style={{fontSize:20, fontWeight:800}}>{this.props.name}</div>
                <div><Image src={this.props.url} responsive style ={{maxHeight:150}}></Image></div>
                <div><p>{this.props.tagline}</p></div>
                </center>
            </Col>
        );
    }
}

export default BeerElement;