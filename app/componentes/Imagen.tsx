'use client'

import Image from 'next/image';

const loaderImage = ({src, width, quality}) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const Imagen = ({v}) => {
    return (
        <>
            <Image className=' object-contain'
            loader={loaderImage}
            loading='lazy'
            width={150}
            height={200}
            src={v.image}
            alt={v.title} />
        </>
    );
};

export default Imagen;