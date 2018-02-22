import React, { Component } from 'react';
import {Grid, Row} from 'react-bootstrap';
import SliderFilters from "../components/slideFilters";
import BeerElement from "../components/beerElement";
import ProductNotFoundElement from "../components/productsNotFound";
import PagerElement from "../components/pager";
import Header from "../containers/header";

import 'react-input-range/lib/css/index.css';
import './App.css';

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <BeerElement product={product}/>
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
        if(rows.length>0) {
            return (
                <div>{rows}</div>
            );
        }else{
            return (
               <ProductNotFoundElement/>
            );
        }
    }
}

class FilterableProductTable extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <ProductTable products={this.props.products} />
                </Row>
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
            },
            page: 1,
        };
    }
    handleAbvClick = (abvStatus) => {
        this.setState({
            abv: {
                gt: abvStatus.min,
                lt: abvStatus.max,
            },
            page: 1,
        });
        this.getData()
    };
    handleIbuClick = (ibuStatus) => {
        this.setState({
            ibu: {
                gt: ibuStatus.min,
                lt: ibuStatus.max,
            },
            page:1,
        });
        this.getData()
    };
    handleEbcClick = (ebcStatus) => {
        this.setState({
            ebc: {
                gt: ebcStatus.min,
                lt: ebcStatus.max,
            },
            page:1,
        });
        this.getData()
    };
    handlePaginationClick = (pagStatus) => {
        this.setState({page: pagStatus}, function () {
            this.getData()
        });
    };

   componentDidMount() {
        this.getData()
    }
    getData(){
            let params = {
                per_page:"24",
                page:this.state.page,
                abv_gt:this.state.abv.gt,
                abv_lt:this.state.abv.lt,
                ibu_gt:this.state.ibu.gt,
                ibu_lt:this.state.ibu.lt,
                ebc_gt:this.state.ebc.gt,
                ebc_lt:this.state.ebc.lt
            };
        let url = new URL("https://api.punkapi.com/v2/beers");

        if (params !== null)
            Object.keys(params).forEach(key => (url.searchParams).append(key, params[key]));
        fetch(url)
            .then(function(response) {return response.json()})
            .then(data => {
                this.setState({
                    posts:data
                })
            }).then(function(data) {

        });

    };

    render() {

        return (

            <div>
                <Header/>
                <SliderFilters clickAbvHandler={this.handleAbvClick} clickIbuHandler={this.handleIbuClick} clickEbcHandler={this.handleEbcClick}/>
                <FilterableProductTable products={this.state.posts} />
                <PagerElement totElements={this.state.posts.length} clickPageHandler={this.handlePaginationClick}/>
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