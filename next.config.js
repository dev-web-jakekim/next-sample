/** @type {import('next').NextConfig} */

// TODO proxy

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return [
      {
        // Next FrameWork는 자체적으로 Route 를 하여 Page를 읽기 때문에, api 관련 url 에 대하여, proxy만 적용시키도록 해야한다.
        source: '/api/v1/:path*',
        destination: 'https://kongmeta.dev/api/v1/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
