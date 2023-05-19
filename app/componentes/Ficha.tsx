import Link from 'next/link';
import Imagen from './Imagen';

const Ficha = ({ v }) => {
    return (
        <>
            <div className='producto border rounded-2xl border-gray-500 bg-white p-4 flex justify-between flex-col shadow-md shadow-slate-400'>
                <div className='imagen flex justify-center h-[200px]'>
                    <Imagen v={v} />
                </div>
                <div>
                    <h2 className='name font-bold mt-4 truncate'>{v.title}</h2>
                    <div className='category text-sm italic text-right'><Link href={`/products/category/${v.category}`} >{v.category}</Link></div>
                    <hr className='my-4' />
                    <div className='precio float-left py-2 px-4'>${v.price}
                    </div>
                    <div className='more-info float-right py-2 px-4 border-2 rounded-md hover:bg-slate-700 hover:text-white'>
                        <Link href={`productos/${v.id}`} >Ver más</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ficha;