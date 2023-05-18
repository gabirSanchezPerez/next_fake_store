import FichaDetalle from "./FichaDetalle";

const loadData = async (id) => {
    const API = process.env.NEXT_PUBLIC_URL_API
    return await fetch(`${API}products/${id}`, {cache: 'no-store'})
    .then(resp => resp.json())
    .then(data => data)
    .catch(err => err)
}

const page = async ({ params }) => {
    const {id} = params;
    const product = await loadData(id);
    return (
        <article className="flex min-h-screen flex-col items-center justify-between p-24">
            <FichaDetalle v={product} />
        </article>
    );
};

export default page;
