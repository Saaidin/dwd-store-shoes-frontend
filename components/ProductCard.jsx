import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { MdRemove, MdOutlineAdd } from "react-icons/md"

const ProductCard = ({ data: { attributes: p, id } }) => {
  const [count, setCount] = useState(1)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div>
      <div
        className="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {/* images */}
        <Link
          href={`/product/${p.slug}`}
          className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
          <Image
            width={500}
            height={750}
            src={`http://localhost:1337${p?.image?.data?.attributes?.formats?.medium?.url}`}
            alt={p.name}
            className="h-[500px]"
          />
        </Link>
        {/* add to cart */}
        <div
          className="absolute bottom-[20%] left-0 w-full py-0 px-[5%]"
          display={isHovered ? "block" : "none"}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center bg-neutral-100 rounded-[5px] p-2 gap-x-2 cursor-pointer">
              <div
                className="border-2 border-black/[0.1]"
                onClick={() => setCount(Math.max(count - 1, 1))}
              >
                <MdRemove />
              </div>
              <div className="text-primary-300">{count}</div>
              <div
                className="border-2 border-black/[0.1]"
                onClick={() => setCount(count + 1)}
              >
                <MdOutlineAdd />
              </div>
            </div>
            <button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }))
              }}
              className="bg-primary-300 text-white p-2 uppercase rounded-[5px]"
            >
              Add to Cart
            </button>
          </div>
        </div>
        {/* category/title/price */}
        <div className="mt-[3px]">
          <div className="text-neutral-700">{p.category}</div>
          <div>{p.name}</div>
          <div className="font-bold">${p.price}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
