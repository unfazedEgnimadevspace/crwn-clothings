import React from "react";
import "./shop.styles.scss";
import  { Route } from 'react-router-dom'
import CollectionOverviewComponent from "../../components/collection-overview/collection-overview.component";
import Category from "../category/category.component";
const ShopPage = ({ match }) =>{
    console.log(match.path)
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewComponent} />
                <Route path={`${match.path}/:collectionId`} component={Category} />
            </div>
        )
    
}


export default ShopPage
