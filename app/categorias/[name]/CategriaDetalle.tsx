import Ficha from "@/app/componentes/Ficha";

const CategriaDetalle = ({v}) => {
    return (
        <article className="tablero grid gap-4 grid-cols-5 px-4">
            {v.map( (p, i) => (
                <Ficha key={i} v={p} />
            ))}
        </article>
    );
};

export default CategriaDetalle;