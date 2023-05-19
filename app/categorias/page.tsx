import Link from "next/link";
import Imagen from "../componentes/Imagen";
import BotonVer from "./BotonVer";

const API = process.env.NEXT_PUBLIC_URL_API

const loadData = async () => {
    return await fetch(`${API}products/categories`)
        .then(resp => resp.json())
        .then(data => data)
        .catch(err => console.log(err))
}

const page = async () => {
    const cats = await loadData();
    const prd = await Promise.all(
        cats.map(async cat => {
            const p = await fetch(`${API}products/category/${cat}?limit=1`)
                .then(resp => resp.json())
            return {
                image: p[0].image,
                title: cat
            }
        })
    )
    
    return (
        <section className="tablero flex justify-center gap-4 flex-wrap pb-12">
            {prd.map((v, i) => (
                <Link key={i} href={`/categorias/${v.title}`} >
                    <article className="categoria border rounded-2xl border-gray-500 bg-white flex justify-between flex-col shadow-md shadow-slate-400" >
                        <div className="bg-black  p-4 text-white text-2xl rounded-t-2xl text-center font-bold first-letter:uppercase">{v.title}</div>
                        <div className=" flex justify-center h-[200px] p-4">
                            <Imagen v={v} />
                        </div>
                    </article>
                </Link>
            ))}
            <BotonVer prd={prd}/>
        </section>
    );
};

export default page;