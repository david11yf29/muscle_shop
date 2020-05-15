import React from 'react';

import './menu-container.styles.scss';

import MenuItem from '../menu-item/menu-item.components';

import CHEST from '../../assets/pics/chest.jpg';
import BACK from '../../assets/pics/back.jpg';
import LEGS from '../../assets/pics/legs.jpg';
import SHOULDER from '../../assets/pics/shoulder.jpg';
import CORE from '../../assets/pics/core.jpg';

class MenuContainer extends React.Component {
    constructor() {
        super();
        
        this.state = {
            sections: [
                {
                  title: 'chest',
                  image: CHEST,
                  id: 1,
                  linkUrl: 'shop/chest'
                },
                {
                  title: 'back',
                  image: BACK,
                  id: 2,
                  linkUrl: 'shop/back'
                },
                {
                  title: 'legs',
                  image: LEGS,
                  id: 3,
                  linkUrl: 'shop/legs'
                },
                {
                  title: 'shoulder',
                  image: SHOULDER,
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/shoulder'
                },
                {
                  title: 'core',
                  image: CORE,
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/core'
                }
              ]
        }
    }

    render() {
        return (
            <div className="menu-container">
                {
                    this.state.sections.map(section => {
                        return (
                            <MenuItem 
                            id={section.id} 
                            title={section.title} 
                            image={section.image}
                            size={section.size} />
                        )
                    })
                }
            </div>
        )
    }
}

export default MenuContainer;