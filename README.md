# Overview

Chooose technical assessment.

![](chooose_gif.gif)

## Getting Started

Ensure you are using Node.js version 18 or higher. Use the following commands to download the required packages:

```bash
npm install
# or
yarn install
```

Then,run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

This is a Next.js project bootstrapped with `create-next-app` and utilizes the following libraries:

- [Chakra UI](https://chakra-ui.com/) for UI components
- [Json Server](https://github.com/typicode/json-server) to simulate a REST API
- [Pluralize](https://github.com/plurals/pluralize) to keep a language consistency
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer) to create a fluid infinite scrolling
- [React Simple Star Rating](https://github.com/awran5/react-simple-star-rating) to display the star rating as we have in the prototype
- [Remix Icon](https://remixicon.com/) to add icons that are the most similar with what we have in the prototype

By default, Next.js automatically caches the returned values of fetch in the data cache on the server. This means that the data can be fetched at build time or request time, cached, and reused on each data request. That's the reason I didn't use any other cache tools in this project.

## Deploy on Vercel

The project was deployed on Vercel and you can check out [the result here:](https://chooose-steel.vercel.app/)
