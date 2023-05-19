'use client'
//import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Ficha from "../componentes/Ficha";

const page = () => {
    const content = []; //useSelector(state => state?.misValores.categoria)
    /*const [content, setContent] = useState([])
    const getProducts = async () => {
        const API = process.env.NEXT_PUBLIC_URL_API
        const result = await fetch(`${API}products/category/${categoria}`)
        const data = await result.json()
        setContent(data)
    }
    useEffect(() => {
        getProducts()
    }, []);*/

    return (
        <>
            {content.length > 0 ? (
                <article className="tablero grid gap-4 grid-cols-5 px-4">
                    {content?.map((p, i) => (
                        <Ficha key={i} v={p} />
                    ))}
                </article>
            ) : (
                <div className="flex justify-center text-3xl font-black">
                    <h2 className=" inline-flex items-center">Cargando </h2>
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </div>
            )
            }
        </>
    );
};

export default page;