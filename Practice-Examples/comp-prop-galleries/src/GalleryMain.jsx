import React from 'react'
import GalleryTemp from './GalleryTemp'
import { galleryDetails } from './data'


function GalleryMain()
{


    return (
        <div>
            <GalleryTemp x = {galleryDetails[0]}></GalleryTemp>
            <GalleryTemp x = {galleryDetails[1]}></GalleryTemp>
        </div>
    )
}

export default GalleryMain