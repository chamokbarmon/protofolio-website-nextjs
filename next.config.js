/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    swcMinify:true,
   images:{
     remotePatterns:[
         {
            protocol:"https",
            hostname:"i.ibb.co"

         },
         {
            protocol:"https",
            hostname:"*.google.com"
         },
         {
            protocol:"https",
            hostname:"www.remove.bg"
         },
         {
            protocol:"https",
            hostname:"images.pexels.com"
         },
         {
            protocol:"https",
            hostname:"www.computerhope.com"
         },
         {
            protocol:"https",
            hostname:"miro.medium.com"
         },
         {
            protocol:"https",
            hostname:"cdn-icons-png.flaticon.com"
         },
         {
            protocol:"https",
            hostname:"upload.wikimedia.org"
         },
         {
            protocol:"https",
            hostname:"logos-world.net"
         },
         {
            protocol:"https",
            hostname:"www.quanle.me"
         }
        ]
   }


}

module.exports = nextConfig
