import type { NextConfig } from "next";

const wordpressUrl = process.env.WORDPRESS_URL;
const wordpressHostname =
  process.env.WORDPRESS_HOSTNAME ??
  (wordpressUrl ? new URL(wordpressUrl).hostname : undefined);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: wordpressHostname
      ? [
          {
            protocol: "https",
            hostname: wordpressHostname,
            port: "",
            pathname: "/**",
          },
        ]
      : [],
  },
  async redirects() {
    if (!wordpressUrl) {
      return [];
    }
    return [
      {
        source: "/admin",
        destination: `${wordpressUrl}/wp-admin`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
