import React from "react";
import "./directory.styles.scss";
import MenuItems from "../menuItems/menuitems.component";
import { connect } from 'react-redux';
import selectDirectoryItems from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";


const Directory = ({ sections }) => {
        return(
            <div className="directory-menu">
                {sections.map(({ id, ...otherSectionProps }) => (
                  <MenuItems key={id} {...otherSectionProps} /> 
                ))}
            </div>
        )
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryItems
})
export default connect(mapStateToProps)(Directory);