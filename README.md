# Elis Antonio Perez

## First Next JS app.

Error: "Option '--resolveJsonModule' cannot be specified without 'node' module resolution strategy.ts"

How to solve this?
// Add the rule below
"moduleResolution": "node",

## Docker config:
- Add in package.json:
  "scripts": {
    "start": "next start `-p ${PORT:=3000}`",
  }

- Add in next.config.js file:
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    `output: 'standalone'`,
  };

module.exports = nextConfig;

### Docker commands:
- Create Docker Image: `docker build -t [tagImageName] .`
- RUN: user@computer-name ~ $ `docker run --name=[containerName] -p [hostPort]:[containerPort] [imageName]`