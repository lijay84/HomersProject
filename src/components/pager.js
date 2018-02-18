import * as React from 'react';
import {Pager} from 'react-bootstrap';

class PagerElement extends React.Component {

    render() {
        return (
            <Pager>
                <Pager.Item href="#">Previous</Pager.Item>{' '}
                <Pager.Item href="#">Next</Pager.Item>
            </Pager>
        );
    }
}

export default PagerElement;