import React from "react";
import "./shop.styles.scss";
import  { Route } from 'react-router-dom'
import CollectionOverviewComponent from "../../components/collection-overview/collection-overview.component";
import Category from "../category/category.component";
import { firestore, convertCollectionsSnapShotToMap } from '../../components/firebase/firebase.utils'
import { connect } from "react-redux";
import { updateCollections } from "../../redux/collection-preview/collection-preview.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverviewComponent);
const CollectionPageWithSpinner = WithSpinner(Category);

class ShopPage extends React.Component{
    state ={
        loading:true
    }
  unsubscribeFromSnapshot = null;

   componentDidMount(){
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')
  this.unsubscribeFromSnapshot =   collectionRef.onSnapshot(async snapshot => {
       const  collectionsMap = convertCollectionsSnapShotToMap(snapshot);
       updateCollections(collectionsMap)
       this.setState({
           loading:false
       })
    })
   }
       render(){
          const { match } = this.props
          const {loading} = this.state
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}  />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    

}}
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
