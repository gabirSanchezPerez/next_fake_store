import CategriaDetalle from "./CategriaDetalle";

const loadData = async (name) => {
    const API = process.env.NEXT_PUBLIC_URL_API
    return await fetch(`${API}products/category/${name}`, {cache: 'no-store'})
    .then(resp => resp.json())
    .then(data => data)
    .catch(err => err)
}

const page = async ({ params }) => {
    const {name} = params;
    const products = await loadData(name);
    return (
        <article className="flex min-h-screen flex-col items-center justify-between p-4">
            <CategriaDetalle v={products} />
        </article>
    );
};

export default page;