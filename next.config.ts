import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.imago-images.de",
        port: "",
        pathname: "/bild/**", // Allows any path starting with /bild
        search: "",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000", // Specify the port for local development
        pathname: "/api/imago-search/**", // Allows any path under /api/imago-search/
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);
