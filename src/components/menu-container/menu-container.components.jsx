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
                  title: 'CHEST',
                  image: CHEST,
                  id: 1,
                  linkUrl: 'shop/chest'
                },
                {
                  title: 'BACK',
                  image: BACK,
                  id: 2,
                  linkUrl: 'shop/back'
                },
                {
                  title: 'LEGS',
                  image: LEGS,
                  id: 3,
                  linkUrl: 'shop/legs'
                },
                {
                  title: 'SHOULDER',
                  image: SHOULDER,
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/shoulder'
                },
                {
                  title: 'CORE',
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
                            image={section.image} />
                        )
                    })
                }
            </div>
        )
    }
}

export default MenuContainer;