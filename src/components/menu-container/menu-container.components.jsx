import React from 'react';

import './menu-container.styles.scss';

import MenuItem from '../menu-item/menu-item.components';

class MenuContainer extends React.Component {
    constructor() {
        super();
        
        this.state = {
            sections: [
                {
                  title: 'CHEST',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/chest'
                },
                {
                  title: 'BACK',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/back'
                },
                {
                  title: 'LEGS',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/legs'
                },
                {
                  title: 'SHOULDER',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/shoulder'
                },
                {
                  title: 'CORE',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
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
                        return <MenuItem id={section.id} title={section.title} />
                    })
                }
            </div>
        )
    }
}

export default MenuContainer;