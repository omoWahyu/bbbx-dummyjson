import useProducts from '../hooks/useProducts'

import StoreLayout from '../layouts/StoreLayout';

interface Product {
    id: number
    title: string
    images: string[]
}

export default function Home() {
    const { data, error, isLoading } = useProducts();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error</div>

    return <>
        <StoreLayout>
            {data?.map((product: Product) => (
                <div key={product.id}>{product.title}
                    <div className="flex justify-center items-center w-40 h-40 border-2 rounded-lg border-[#8c8c8c">
                        <img className="w-auto h-full" loading='lazy' height={"10px"} src={product.images[0]} alt="" />
                    </div>
                    {/* {product.images?.map((image: string) => (
            <img className='' width={100} src={image} alt="" />
          ))} */}
                </div>
            ))}
        </StoreLayout>
    </>;
}