import Ficha from "@/app/componentes/Ficha";

const loadData = async () => {
    const API = process.env.NEXT_PUBLIC_URL_API
    return await fetch(`${API}products`, {cache: 'no-store'})
    .then(resp => resp.json())
    .then(data => data)
    .catch(err => console.log(err))
}

const page = async () => {
    const data = await loadData();
    return (
        <section className="tablero grid gap-4 grid-cols-5 p-4">
            {data?.map( (v) => (
                <Ficha key={v.id} v={v} />
            ))}
        </section>
    );
};

export default page;