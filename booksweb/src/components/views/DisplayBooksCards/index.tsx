import Cards from "@/components/shared/Cards";

let url = "https://simple-books-api.glitch.me/books";

export default function DisplayBooksCards({data}:any) {
    if (!data) return <p>Loading...</p>
    return (
        <div className=" bg-white py-16 px-4">
            <a id="latest"></a>
            <h2 className="text-center text-2xl sm:text-4xl text-gray-800 font-semibold py-6">Latest Books</h2>
            <Cards dataToMap={data} />
        </div>
    )
}
          