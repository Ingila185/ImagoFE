# Imago Gallery

Imago Gallery is a Next.js-based web application that allows users to search and view images dynamically. The application fetches images from an API and supports features like search functionality, fallback images, and server-side rendering.

## Features

- **Dynamic Image Search**: Users can search for images using a search bar.
- **Server-Side Rendering (SSR)**: Initial images are fetched on the server for better SEO and performance.
- **Fallback Images**: Displays a fallback image when a thumbnail is not available.
- **Loading Spinner**: Shows a spinner while images are being fetched.
- **Environment Configuration**: API URLs are configurable via environment variables.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd imago-gallery
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the root directory and add the following:

```bash
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000/api/imago-search
NEXT_PUBLIC_THUMBNAIL_URL=https://www.imago-images.de/bild/st/
```

4. Start the development server:

```
npm run dev
```

5. Open the application in your browser:
   `http://localhost:3000`

Here’s a `README.md` file for your project:

---

````markdown
# Imago Gallery

Imago Gallery is a Next.js-based web application that allows users to search and view images dynamically. The application fetches images from an API and supports features like search functionality, fallback images, and server-side rendering.

## Features

- **Dynamic Image Search**: Users can search for images using a search bar.
- **Server-Side Rendering (SSR)**: Initial images are fetched on the server for better SEO and performance.
- **Fallback Images**: Displays a fallback image when a thumbnail is not available.
- **Loading Spinner**: Shows a spinner while images are being fetched.
- **Environment Configuration**: API URLs are configurable via environment variables.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd imago-gallery
   ```
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000/api/imago-search
   NEXT_PUBLIC_THUMBNAIL_URL=https://www.imago-images.de/bild/st/
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Configuration

### Environment Variables

- `NEXT_PUBLIC_API_BASE_URL`: The base URL for the API used to fetch images.
- `NEXT_PUBLIC_THUMBNAIL_URL`: The base URL for fetching image thumbnails.

### Next.js Configuration

Ensure the following `remotePatterns` are added to your `next.config.ts` to allow external image loading:

```typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "www.imago-images.de",
      pathname: "/bild/st/**",
    },
    {
      protocol: "http",
      hostname: "127.0.0.1",
      port: "8000",
      pathname: "/api/imago-search/**",
    },
  ],
},
```

## Project Structure

```
imago-gallery/
├── app/
│   ├── page.tsx          # Main page component
│   ├── searchInput.tsx   # Search input component with dynamic image fetching
├── public/
│   ├── not-found.jpg     # Fallback image for missing thumbnails
├── .env                  # Environment variables
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies and scripts
```

## Components

### `page.tsx`

- Fetches initial images on the server using `fetchImages`.
- Passes the initial images to the `SearchInput` component.

### `searchInput.tsx`

- Handles dynamic image fetching based on user input.
- Displays a loading spinner while fetching images.
- Handles fallback images for missing thumbnails.

## Development

### Running the Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Starting the Production Server

```bash
npm start
```

## Troubleshooting

### Common Issues

1. **CORS Errors**:

   - Ensure the backend API allows requests from `http://localhost:3000`.

2. **Invalid Image Source**:

   - Ensure `remotePatterns` in `next.config.ts` includes all required domains.

3. **Environment Variables Not Loaded**:
   - Restart the development server after modifying the `.env` file.

## License

This project is licensed under the MIT License.

```

---

### How to Use:
1. Copy the above content into a `README.md` file in the root of your project.
2. Replace `<repository-url>` with the actual URL of your repository.
3. Update any additional details specific to your project.

This `README.md` provides a comprehensive overview of your project, including installation, configuration, and usage instructions.
```
