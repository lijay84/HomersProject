import React, { Component } from 'react';
import {Grid, Row, PageHeader} from 'react-bootstrap';
import SliderFilters from "../components/slideFilters";
import BeerElement from "../components/beerElement";
import PagerElement from "../components/pager";

import 'react-input-range/lib/css/index.css';
import './App.css';

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <BeerElement name={product.name} url={product.image_url} tagline={product.tagline}/>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const rows = [];

        this.props.products.forEach((product) => {
            rows.push(
                <ProductRow
                    product={product}
                    key={product.id} />
            );
        });

        return (
            <div>{rows}</div>
        );
    }
}

class FilterableProductTable extends React.Component {

    render() {
        return (
            <Grid>
                <PageHeader>
                    The Homer's project <small>...mmmm...beeer</small>
                </PageHeader>
                <Row className="show-grid">
                    <form className="form">
                    <SliderFilters/>
                    <ProductTable products={this.props.products} />
                    </form>
                </Row>
                <PagerElement/>
            </Grid>
        );
    }
}

class FetchBeerApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            ibu: {
                gt: 30,
                lt: 165,
            },
            abv: {
                gt: 4,
                lt: 40,
            }
            ,
            ebc: {
                gt: 50,
                lt: 330,
            }
        };
    }

    componentDidMount() {
        this.getdata()
    }
    getdata(){

        const suchFetch = (path, fetchOpts, params) => {
            var url = new URL('${BASE_URL}${path}')
            if (params != null) Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
            return fetch(url, fetchOpts)
                .then((res) => res.json())
                .catch((ex) => console.log("Fetch Exception", ex));
        };

        var url = new URL("https://api.punkapi.com/v2/beers"),
            params = {
                per_page:"21", abv_gt:this.state.abv.gt, abv_lt:this.state.abv.lt,ibu_gt:this.state.ibu.gt,ibu_lt:this.state.ibu.lt
            }
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        fetch(url)
            .then(function(response) { return response.json(); })
            .then(data => {
                console.log(data.data);

                this.setState({
                    posts:data
                })
            })
    };


    render() {
        return (

            <div>
                <FilterableProductTable products={this.state.posts}/>
            </div>
        );
    }
}

class App extends Component {

    render () {
        return (
        <FetchBeerApi/>
        )
    }
}
export default App;