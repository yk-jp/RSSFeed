/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/",
        destination: "/news/0",
        permanent: true,
      },
      {
        source: "/news",
        destination: "/news/0",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
