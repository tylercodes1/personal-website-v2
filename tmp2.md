# [SSR vs SSG][ssr vs ssg]

"The best way to start thinking about SSR is to talk about its history."

After 2010, SPA frameworks started showing up (React, Angular, Vue). Once loaded are "Fast". Helped build more complex applications, but did not have SEO. Content of page wasn't there. First time to interactive was slow. JS needed to be run before anything could be parsed on the page. Fastboot, next, nuxt all serve SSR/SEO Cabilities.

> **Server Side Rendering:** The ability to serve full HTML content to the initial request for a page and then hydrate the page to a full blown "single-page application" for clients who support Javascript while at the same time, allowing non-Javascript clients to interact without needing to load the SPA.

<b>Architecture needed to support SPA are not the same to support server side rendering</b>

In response to SSR, some people said `this is too complicated, let's get back to the basics.` and thus, SSG gained popularity.

> **Static Site Generation:**
>
> What does _static_ mean in this context? **Static** means data that is not near real-time. Does not mean data does not change. Gen 1 and 2 data is relatively slow and will not be managed by Hydrated SPA client. When generated content gets to browser, you will never change same content. Gen 3 solutions are given certain primitives or hooks that allow you to bring in data. That hook gets called on Server and client side. Write code once, and have certain data types that generated and managed on client side.
>
> **Gen 1** _(Jekyll, Hugo, Hexo)_ were frameworks that allowed for semi-static data (like a blog post) and inject it into a git repo in a timely manner, but `"only serving out HTML and CSS"` > **Gen 2** _(Gatsby, Gridsome, Vuepress)_ SSGs will hydrate into a SPA. Access to Component libraries. Get benefit of SG on build side, and browser/development side get the benefits of frameworks, components and hooks
>
> **Gen 3** _(Next, Nuxt)_ Described above. Global state management tools can be managed on both server and client sides.
>
> e.g. product catalog, based on what user is logged in and geography. Defer non statically generated item. Items need to be managed on client based on user and geography. Catalog is a big representation of what website is about. Why not generate catalog for a couple of areas, indiscriminate of user. If user comes in and has specific demographic, opportunity to take a wider range of data, and statically generate. Manage where appropriate.

## THE DUEL

| SSR                                                       | SSG                                        |
| --------------------------------------------------------- | ------------------------------------------ |
| SEO                                                       | SEO                                        |
| First Time to Interactive                                 | First Time to Interactive (may be faster)  |
| Non-JS users                                              | Non-JS Users                               |
| Respond to User-Agent (Server Detects Browser, Geography) | ~~Respond to User Agent~~                  |
| ~~KISS~~                                                  | KISS (Shipping Only Static Assets via CDN) |

**SSR granular architecture:**

![SSR Architecture Granular](https://personal-website-v2-topaz.vercel.app//SSRArchGranular.PNG)

**"Static" data** that you're trying to serve. Data could come from a database (headless cms, transactional store, data warehouse). Markdown Files that convert to HTML.

**Design Time** Template to the structure of the pages. HTML, PUG, Handlebars. Bunch of configuration is required.

**Build Process**

1. Left hand side - Basic transpilation (from js). Transpiling from source code written to something browser can run. Items
2. Right hand side - Hydration for SSR. All static content must be bundled into JS. Take all HTML Content from routes, put in JS Format. Server side can display HTML pages from "hydrated JS Object"

**Deploy**

1. Above is "client side". Content that gets put in CDN.
2. Bottom is Server side. A js file with resources.

**Run Time** Load HTML. Hydrate to SPA. Load client state. Cache info in server side.

**SSG granular architecture:**

![SSG Architecture Granular](https://personal-website-v2-topaz.vercel.app//SSGArchGranular.PNG)

**Static Data and Runtime sections are the same**

**Design Time** - Slightly different. Dynamic routes need to tell build system which dynamic routes will be generated. Blog post will generate without additional configuration. However, details of last 10 blog posts, you will need to specify ID of last 10. SSR processes on request, SSG will require it.

**Build System** - Right side different: 3 new items:

1. Generate SPA routes from Router config.
2. Generate Dynamic Dynamic Routes from data and config
3. Generate Static HTML from templates.

SSR logic embedded in server process. SSG logic embedded in HTML.

**Deploy** SSG does not require server. SSG Requires HTML for every route it knows about (static and dynamic routes)

-  SSG is faster, lower cost, and has less operational risk.
-  Both are more complex than SPA.

<details>
<summary><b>SPA Architecture Image</b></summary>

![SPA architecture](https://personal-website-v2-topaz.vercel.app/SPAArchitecture.PNG)

</details>
<details>
<summary><b>SSR Architecture Image</b></summary>

![SPA architecture](https://personal-website-v2-topaz.vercel.app/SSRArchitecture.PNG)

</details>
<!-- LINKS -->

[ssr vs ssg]: https://www.youtube.com/watch?v=YatDFsPPy0E
