import * as React from 'react';
import InputRange from 'react-input-range';

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
    }
    render() {
        return (
            <div>
                <InputRange
                    maxValue={50}
                    minValue={0}
                    formatLabel={value => `${value} abv`}
                    value={this.state.abv}
                    onChange={value => this.setState({ abv: value })}
                    onChangeComplete={value => console.log(value)} />

                <InputRange
                    maxValue={250}
                    minValue={0}
                    formatLabel={value => `${value} ibu`}
                    value={this.state.ibu}
                    onChange={value => this.setState({ ibu: value })}
                    onChangeComplete={value => console.log(value)} />
                <InputRange
                    maxValue={500}
                    minValue={0}
                    formatLabel={value => `${value} ebc`}
                    value={this.state.ebc}
                    onChange={value => this.setState({ ebc: value })}
                    onChangeComplete={value => console.log(value)} />
            </div>
        );
    }
}

export default SliderFilters;