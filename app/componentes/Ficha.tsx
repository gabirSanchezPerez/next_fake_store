import Link from 'next/link';
import Imagen from './Imagen';

const Ficha = ({ v }) => {
    return (
        <>
            <div className='producto border-2 rounded-2xl border-gray-500 bg-white p-4 flex justify-between flex-col shadow-md shadow-slate-400'>
                <div className='imagen flex justify-center h-[200px]'>
                    <Imagen v={v} />
                </div>
                <div>
                    <h2 className='name font-bold mt-4 truncate'>{v.title}</h2>
                    <div className='category text-sm italic text-right'>{v.category}</div>
                    <hr className='my-4' />
                    <div className='precio'>${v.price}
                    </div>
                    <div className='more-info float-right'>
                        <Link href={`productos/${v.id}`} >Ver más</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ficha;