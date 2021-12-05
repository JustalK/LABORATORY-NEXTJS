# LABORATORY - NEXTJS - MODES

This project is a really simple tutorial for explaining the differences between the differents way of serving the page on `Next.js`.
There are 4 ways of building our pages :

- **ssg:** Static Site Generation
- **ssr:** Server Side Rendering
- **isr:** Incremental Static Regeneration
- **csr:** Client side rendering

## Plan of the presentation

I explain with all the details how I build the project and my way of working.

- [Installation](#installation)
- [Documentation](#documentation)
- [SSG](#ssg)
- [SSR](#ssr)
- [ISR](#isr)
- [CSR](#csr)
- [Running](#running)
- [Commands](#commands)
- [Links](#links)

## Installation

For installing the project, a simple command is enough :

```bash
$ npm install
```

## Documentation
#### jsdoc

The jsdoc can be generated locally with the following command :

```bash
$ npm run build:docs
```

## SSG

The *static site generation* is quite simple to understand. The HTML page will be built when we are compiling our code using the command `npm run build`.
Once the page is built, the page will never be rebuild. We will always served to the user the same page with the same data. It can be achieved by using the function `getStaticProps`.
In this function, you will be fetching the data and give it to your react component.

#### Pros

The good thing about SSG is the page will be load on the user really fast since it's like just giving him a HTML page.

#### Cons

The problem is it can only work with data that wont change over time. You can only user that for page such as a contact page, a show page where data generally dont change often or dont change at all over time.

## SSR

The *Server Side Rendering* is the opposite of SSG. The HTML page will be built at every request. Everytime a client will try to access the page, the server will recreate the HTML page and give it to the user.
It can be achieved by using the function `getServerSideProps`. Same as the function for the SSG, you will also be fetching the data and give it to your react component. The only difference is when it will happen.

#### Pros

The nice thing about SSR is you are sure that the data which will be shown to your user are the last one in date. It will always show the most recent data.

#### Cons

The cons is the server will have to recreate the page everytime. If there are a lot of user, it can be quite violent for the server.

## ISR

The *Incremental Static Regeneration* is a hybrid mode. The HTML of the page will be built when we are compiling the website using `npm run build`. This page will be the one served to our user. However, the page will be built again from time to time under some condition. Generally, it's time condition but it could be something else. In my example, the page will be built again or revalidating, for using the right word, if the page has been rendered more than 10s after the previous built. It can be achieved by using the function `getStaticProps` with a `revalidating` time.

#### Pros

With ISR, we are able to get at the same time the power of the SSG and SSR. The page will load fast and the data will be close of the one on the server.

#### Cons

The problem is the data are not exactly the same as the one in the database. It's not necessary reflecting the lastest data. You cannot use this mode for showing the remaining of a bank account but for showing something such as a the number of like on the article, it can be quite useful. If the number of like does not reflect the latest number, it's not too much a problem, so we can just built the page again from time to time.

## CSR

The *Client side rendering* is also a hybrid mode. In this mode, the page will be built when we are using the command `npm run build`. This is the page that will be served to our user and it will never be rebuilt on the server. However, the data will be fetch on the client side and populating our page. It's use for pre-rendering the page to the user. The first thing the user will see is always the same page with the same data. Then the page will be refresh with the latest data once the call to the api is done. It can be achieved by using the function `getStaticProps` and using the hook `useSWR` for making the call to the api on the client side.

#### Pros

Same as ISR, we are taking advantages from both SSG and SSR. The good thing is the data served to the client will always be as fast as the SSG mode and after few seconds, the user will get the last data from the server.

#### Cons

The problem is the data for the first rendering can be pretty far from the one in the database and the gap might grow over time is the data change often. The second problem is if the call is slow, it can take quite some time for the user to get is data refresh. This mode is quite powerful having something like a skeleton to show for the user and then fill up with the real data.

## Running

```bash
$ npm run build
$ npm run start
```

## Commands

- **npm run dev**: Run the project in development mode
- **npm run start**: Run the build project
- **npm run lint**: Run the linter and fix the errors of coding style (if possible)
- **npm run build**: Build the project
- **npm run build:doc**: Build the documentation from the comments in the code
- **npm run check-update**:  Check if the package are up to date

## Links

#### API

https://randomuser.me/

#### SWR

https://swr.vercel.app/docs/with-nextjs
https://swr.vercel.app/docs/global-configuration

#### Tutorials for inspiration

https://www.youtube.com/watch?v=O2s_LvqQQgM
https://spacejelly.dev/posts/how-to-create-pages-in-next-js-with-static-dynamic-data/
https://www.youtube.com/watch?v=eMwTEo6AjDc
