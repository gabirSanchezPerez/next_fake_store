'use client'

import Imagen from '@/app/componentes/Imagen';
import { comprar } from '@/store/mySlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

const FichaDetalle = ({ v }) => {
    const dispatch = useDispatch()
    const adquirir = (v) => {
        dispatch(comprar({
            productId: v.id,
            price: v.price,
            image: v.image,
            title: v.title
        }));
    }
    return (
        <>
            <div className='producto border rounded-2xl border-gray-500 bg-white p-4 flex flex-row shadow-md shadow-slate-400'>
                <div className='imagen flex justify-center w-3/6'>
                    <Imagen v={v} />
                </div>
                <div className='flex flex-col justify-between px-8'>
                    <div>
                    <h2 className='name font-bold mt-4 text-center text-2xl'>{v.title}</h2>
                    <div className='category text-sm italic text-right decoration-violet-500 underline hover:font-bold  '><Link href={`/products/category/${v.category}`} >{v.category}</Link></div>
                    <p className='mt-4'>{v.description}</p>
                    </div>
                    <div>
                        <hr className='my-4' />
                        <div className='precio float-left'>${v.price}</div>
                        <button className='more-info float-right py-2 px-4 border-2 rounded-md border-blue-800 hover:bg-blue-800 bg-blue-400 hover:text-white hidden' onClick={() => adquirir(v)}>
                            Comprar
                        </button>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default FichaDetalle;