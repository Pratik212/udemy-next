/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    mongodb_username : '',
    mongodb_password: '',
    mongodb_clustername: '',
    mongodb_database:''
  },
  reactStrictMode: true,
}

module.exports = nextConfig
