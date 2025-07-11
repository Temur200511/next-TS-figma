import Image from "next/image";

const Products = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/mens-watches"
  );
  const data = await response.json();

  return (
    <section className="w-full flex justify-center items-center my-10">
      <main className="w-[90%] max-w-7xl flex flex-col items-center text-center">
        <p className="text-[#3858D6] text-sm sm:text-base mb-2">
          Find your favourite smart watch.
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our Latest Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 w-full">
          {data.products?.map((watch) => (
            <div
              key={watch.id}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
            >
              <div className="relative w-full h-64 bg-[#F6F6F6] rounded-xl overflow-hidden mb-4">
                <Image
                  src={watch.thumbnail}
                  alt={watch.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h2 className="font-semibold text-lg text-gray-700 mb-1">
                {watch.title}
              </h2>
              <p className="text-xl font-bold text-[#3858D6]">
                ${watch.price}
              </p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Products;
