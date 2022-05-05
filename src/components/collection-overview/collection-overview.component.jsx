import React from 'react';
import "./collection-overview.styles.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview} from '../../redux/collection-preview/collection-preview.selector';
import CollectionPreview from '../collection-preview/collection.preview.component';

const CollectionOverview = ({ collections }) => {
    return(
        <div className='collections-overview'>
          {collections.map(({id, ...OtherCollectionProps}) => (
              <CollectionPreview  key={id} {...OtherCollectionProps}/>
          ))}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections:selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionOverview)