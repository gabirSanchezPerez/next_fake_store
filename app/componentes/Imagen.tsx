'use client'

import Image from 'next/image';

const loaderImage = ({src, w, q}) => {
    return `${src}?w=${w}&q=${q}`
}

const Imagen = ({v}) => {
    return (
        <>
            <Image
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