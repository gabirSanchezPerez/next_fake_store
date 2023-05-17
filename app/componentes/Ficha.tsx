import Link from 'next/link';
import Imagen from './Imagen';

const Ficha = ({ v }) => {
    return (
        <>
            <div className='producto border-2 rounded-lg bg-slate-50'>
                <div className='imagen w-full'>
                    <Imagen v={v} />
                </div>
                <div className='name font-bold'>{v.title}</div>
                <div className='category'>{v.category}</div>
                <div className='precio'>{v.price}
                </div>
                <div className='more-info'>
                    <Link href="productos/{v.id}">Ver más</Link>
                </div>
            </div>
        </>
    );
};

export default Ficha;