import React from 'react';
import InputRange from 'react-input-range';
import {Grid, Row, Col} from 'react-bootstrap';

class SliderFilters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ibu: {
                min: 30,
                max: 165,
            },
            abv: {
                min: 4,
                max: 40,
            }
            ,
            ebc: {
                min: 50,
                max: 330,
            }
        };
    };
    handleAbvClick = () => {
        this.props.clickAbvHandler(this.state.abv);
    };
    handleIbuClick = () => {
        this.props.clickIbuHandler(this.state.ibu);
    };
    handleEbcClick = () => {
        this.props.clickEbcHandler(this.state.ebc);
    };
    render() {

        return (
            <Grid>
                <Row className="show-grid">
                    <Col lg={2} xs={1}></Col>
                    <Col lg={8}>
                        <InputRange
                            maxValue={50}
                            minValue={0}
                            formatLabel={value => `${value} abv`}
                            value={this.state.abv}
                            onChange={value => this.setState({ abv: value })}
                            onChangeComplete={this.handleAbvClick} />

                        <InputRange
                            maxValue={250}
                            minValue={0}
                            formatLabel={value => `${value} ibu`}
                            value={this.state.ibu}
                            onChange={value => this.setState({ ibu: value })}
                            onChangeComplete={this.handleIbuClick} />
                        <InputRange
                            maxValue={500}
                            minValue={0}
                            formatLabel={value => `${value} ebc`}
                            value={this.state.ebc}
                            onChange={value => this.setState({ ebc: value })}
                            onChangeComplete={this.handleEbcClick} />
                    </Col>
                    <Col lg={2} xs={1}></Col>
                </Row>
            </Grid>
        );
    }
}

export default SliderFilters;