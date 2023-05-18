'use client'
import Imagen from '@/app/componentes/Imagen';
import Link from 'next/link';
import React from 'react';

const FichaDetalle = ({ v }) => {
    return (
        <>
            <div className='producto border-2 rounded-2xl border-gray-500 bg-white p-4 flex flex-row shadow-md shadow-slate-400'>
                <div className='imagen flex justify-center w-3/6'>
                    <Imagen v={v} />
                </div>
                <div className='flex flex-col justify-between'>
                    <div>
                    <h2 className='name font-bold mt-4 text-center'>{v.title}</h2>
                    <div className='category text-sm italic text-right decoration-violet-500 underline font-bold hover:text-lg '>{v.category}</div>
                    <p>{v.description}</p>
                    </div>
                    <div>
                        <hr className='my-4' />
                        <div className='precio float-left'>${v.price}</div>
                        <div className='more-info float-right py-2 px-4 border-2 rounded-md hover:bg-slate-400'>
                            <Link href={`productos`} >Volver</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FichaDetalle;