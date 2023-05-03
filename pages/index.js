import HeroBanner from "@/components/HeroBanner"
import ProductCard from "@/components/ProductCard"
import Wrapper from "@/components/Wrapper"
import { fetchDataFromApi } from "@/utils/api"

export default function Home({ products }) {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragraph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] uppercase">
          <h3 className="mb-5">
            Our Featured <span className="font-bold">Products</span>
          </h3>
          <div className="sm:flex sm:justify-center gap-10">
            <h5>ALL</h5>
            <h5>NEW ARRIVALS</h5>
            <h5>BEST SELLERS</h5>
            <h5>TOP RATED</h5>
          </div>
        </div>
        {/* heading and paragraph end */}

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
        {/* products grid end */}
      </Wrapper>
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/items?populate=image")
  const data = await res.json()
  // console.log(data)
  return {
    props: { products: data },
  }
}
