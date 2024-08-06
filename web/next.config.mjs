/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/",
        destination: "/news/1",
        permanent: true,
      },
      {
        source: "/news",
        destination: "/news/1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
