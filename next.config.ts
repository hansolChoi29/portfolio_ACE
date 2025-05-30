import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn-icons-png.flaticon.com"], //외부 이미지 호스트에서 이미지를 사용할 때 도메인을 next.config.js에 명시적으로 추가해야 하는 이유는 보안과 최적화 때문
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
