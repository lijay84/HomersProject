import React from 'react';
import {Pager} from 'react-bootstrap';

class PagerElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page:1,
            firstDisabled:true,
            lastDisabled:false
        };

    }
    handleClick (newPage)  {

        if(this.props.totElements<=20){
            this.setState({lastDisabled: true})
        }else {
            this.setState({lastDisabled: false})
        }

        if(this.state.page>1){
            this.setState({firstDisabled: false})
        }else {
            this.setState({firstDisabled: true})
        }
        this.setState({page: newPage}, function () {
            this.props.clickPageHandler(this.state.page);
        });
    };


    render() {

        return (
            <Pager>
                <Pager.Item disabled={this.state.firstDisabled} onClick={(e) => this.handleClick(this.state.page - 1)}>Previous</Pager.Item>
                <Pager.Item disabled={this.state.lastDisabled}  onClick={(e) => this.handleClick(this.state.page + 1)}>Next</Pager.Item>
            </Pager>
        );

    }
}

export default PagerElement;