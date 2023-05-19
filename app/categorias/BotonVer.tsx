'use client'
import Imagen from "../componentes/Imagen";
import { useDispatch } from "react-redux";
import { guardarCategoria } from "@/store/mySlice";
import { useRouter } from "next/navigation";

const BotonVer = ({ prd }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const goCat = (cat) => {
        dispatch(guardarCategoria(cat))
        router.push('/portipo');
    }
    return (
        <section className="tablero hidden">
            <h2>Desde el cliente</h2>
            <section className="tablero flex justify-center gap-4 pb-12">
                {prd.map((v, i) => (
                    <article key={i} className="categoria border rounded-2xl border-gray-500 bg-white flex justify-between flex-col shadow-md shadow-slate-400" >
                        <div className="bg-black  p-4 text-white text-2xl rounded-t-2xl text-center font-bold">{v.title}</div>
                        <div className=" flex justify-center h-[200px] p-4">
                            <Imagen v={v} />
                        </div>
                        <button className="py-2 px-4 border-2 rounded-md border-green-800 hover:bg-green-800 bg-green-200 hover:text-white mx-4 mb-4" onClick={() => { goCat(v.title) }}>Ver</button>
                    </article>
                ))}
            </section>

        </section>
    );
};

export default BotonVer;