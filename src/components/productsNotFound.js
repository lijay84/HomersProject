import * as React from 'react';
import {Col} from 'react-bootstrap';

class ProductNotFoundElement extends React.Component {
    render() {
        return (
            <Col lg={4} md={4} sm={6} xs={12} className="product">
                <div style={{fontSize:20, fontWeight:800}}>Hai finito l'intero catalogo!</div>
                <div><p>Se sei indeciso contattaci!</p></div>
            </Col>
        );
    }
}

export default ProductNotFoundElement;