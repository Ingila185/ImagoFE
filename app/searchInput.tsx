"use client";

import { useState } from "react";
import Image from "next/image";

export default function SearchInput({
  initialImages,
}: {
  initialImages: any[];
}) {
  const [images, setImages] = useState(initialImages); // Initialize with initial images
  const [loading, setLoading] = useState(false); // Track loading state
  const [searchKey, setSearchKey] = useState(""); // Track the input value

  const fetchImages = async (searchKey?: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!baseUrl) {
      throw new Error("API base URL is not defined. Check your .env file.");
    }

    const url = searchKey ? `${baseUrl}?q=${searchKey}` : baseUrl;

    if (!searchKey || searchKey.trim() === "") {
      setImages(initialImages);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(url);

      if (!res.ok) {
        const errorDetails = await res.text();
        throw new Error(
          `Failed to fetch images. Status: ${res.status}, Details: ${
            errorDetails || "No additional error details provided."
          }`
        );
      }

      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value); // Update the input value
  };

  const handleSearchClick = () => {
    fetchImages(searchKey); // Fetch images based on the current input value
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex items-center gap-2 w-full">
        <input
          type="text"
          value={searchKey}
          onChange={handleInputChange} // Update the input value on change
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for images"
        />

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleSearchClick} // Trigger search on button click
        >
          Search
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {images &&
            images.map((image: any, index: number) => {
              const fallbackImage = "/not-found.jpg";

              return (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={image.thumbnail_url || fallbackImage}
                    alt={image.alt || "Gallery Image"}
                    width={image.hoehe || 200}
                    height={image.breite || 200}
                    className="rounded-lg shadow-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImage;
                    }}
                  />
                  <h3 className="text-base font-semibold text-gray-600 mt-4 text-center sm:text-left">
                    Photographer: {image.fotografen || "Unknown"}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 text-center sm:text-left">
                    {image.suchtext || "No description available"}
                  </p>
                </div>
              );
            })}

          {images.length === 0 && (
            <p className="text-sm text-gray-400 mt-2 text-center sm:text-left">
              No Image found
            </p>
          )}
        </div>
      )}
    </div>
  );
}
