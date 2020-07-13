import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import './menu-container.styles.scss';

import MenuItem from '../menu-item/menu-item.components';

const MenuContainer = (props) => {
  return (
      <div className="menu-container">
          {
              props.sections.map(section => {
                  return (
                      <MenuItem 
                        key={section.id} 
                        title={section.title} 
                        image={section.image}
                        size={section.size}
                        linkUrl={section.linkUrl} />
                  )
              })
          }
      </div>
  )
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(MenuContainer);