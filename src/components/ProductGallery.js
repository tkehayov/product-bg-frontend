import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function ProductGallery({images}) {
    const settings = {
        showPlayButton: false,
        showFullscreenButton: false,
        showNav: false,
        thumbnailPosition: 'left'
    }

    return (
        <div>
            <ImageGallery
                showPlayButton={settings.showPlayButton} showNav={settings.showNav}
                showFullscreenButton={settings.showFullscreenButton}
                thumbnailPosition={settings.thumbnailPosition}
                items={images}
            />
        </div>
    )
}

export default ProductGallery
