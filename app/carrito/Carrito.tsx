'use client'
import { useSelector, useDispatch } from "react-redux";
import Imagen from "../componentes/Imagen";
import { useMemo, useState } from "react";
import { devolver } from "@/store/mySlice";
const Carrito = () => {
    const [total, setTotal] = useState(0)
    const productCarrito = useSelector(state => state?.misValores.miCarrito)
    console.log(productCarrito)
    const dispatch = useDispatch()
    const eliminar = (id) => {
        dispatch( devolver(id))
    }
    const getTotal = useMemo(() => setTotal( productCarrito.reduce((acumula, valorActual) => acumula + valorActual.price, 0)), [productCarrito])
    
    return (
        <>
          {productCarrito.map(v => (
            <div key={v.productId} className="prdCar relative bg-white mr-1 rounded-lg">
                <div className='imagen flex justify-center h-[200px]'>
                    <Imagen v={v} />
                </div>
                <button className='more-info float-right py-1 px-2 border rounded-md border-red-800 hover:bg-red-800 bg-red-500 text-white absolute bottom-1 right-1 text-sm' onClick={() => eliminar(v.productId)}>Quitar</button>
            </div>
          ))} 
          <div>$ {total}</div> 
        </>
    );
};

export default Carrito;