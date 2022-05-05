import React from "react";
import "./category.styles.scss";
import CollectionItem from '../../components/collectionItems/collectionItem.component'
import { connect } from "react-redux";
import { selectCollection } from "../../redux/collection-preview/collection-preview.selector";
const Category = ({ collectionsPreview }) => {
    const {title, items} = collectionsPreview;
    return(
        <div className="collection-page">  
            <h2 className="title">{title}</h2>
            <div className="items">
                 {
                     items.map(item => <CollectionItem key={item.id} item={item}/>)
                 }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collectionsPreview: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(Category);