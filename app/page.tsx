import Image from "next/image";
import SearchInput from "./searchInput";

async function fetchImages(searchKey?: string) {
  const url = searchKey
    ? `http://127.0.0.1:8000/api/imago-search/?q=${searchKey}`
    : "http://127.0.0.1:8000/api/imago-search";

  const res = await fetch(url, {
    next: { revalidate: 60 }, // Enable ISR with revalidation
  });

  if (!res.ok) {
    throw new Error("Failed to fetch images");
  }

  return res.json();
}

export default async function Home() {
  const initialImages = await fetchImages(); // Fetch initial data

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-[32px] items-center sm:items-start">
          <h1 className="text-4xl font-bold text-center sm:text-left">
            Imago Gallery
          </h1>
          <p className="text-lg text-center sm:text-left">
            A gallery of images
          </p>
        </div>
        {/* Pass the initial images to the SearchInput component */}
        <SearchInput initialImages={initialImages} />
      </main>
    </div>
  );
}
