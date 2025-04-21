import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["127.0.0.1", "www.imago-images.de"], // Add your allowed domains here

    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.imago-images.de",
        port: "",
        pathname: "/bild/st/**", // Allows any path starting with /bild/st/
        search: "",
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);
