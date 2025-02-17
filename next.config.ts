import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images:{remotePatterns:[
  {protocol:"https" , hostname:"cgassets-1d48b.kxcdn.com"},
  {protocol:"https",hostname:"m.media-amazon.com"}
 ]}
};

export default nextConfig;
