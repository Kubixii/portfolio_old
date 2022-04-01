import './Links.css'
import './Links-mobile.css'

import React, { useContext } from 'react';

import Link from './link/Link';
import { StoreContext } from '../../store/StoreProvider';

const Links = () => {

    const { languageText: { links } } = useContext(StoreContext);

    const importImages = (r) => {
        let images = {};
        r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importImages(require.context('../../resources/links', false, /\.(png|jpe?g|svg)$/));

    const listOfLinks = links.map(link => {
        const imageURL = images[link.imageURL]
        return <Link key={link.name} name={link.name} URL={link.URL} imageURL={imageURL} />
    })
    return (
        <div className='links panel'>
            <div className='linksWrapper'>
                {listOfLinks}
            </div>
        </div>
    );
}

export default Links;