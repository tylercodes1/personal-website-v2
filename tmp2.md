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

![SSR Architecture Granular](https://personal-website-v2-topaz.vercel.app//SSRArchGranular.PNG)

<details>
<summary><b>SPA Architecture Image</b></summary>
![SPA architecture](https://personal-website-v2-topaz.vercel.app//SPAArchitecture.PNG)
</details>
<details>
<summary><b>SSR Architecture Image</b></summary>
![SPA architecture](https://personal-website-v2-topaz.vercel.app//SSRArchitecture.PNG)
</details>
<!-- LINKS -->

[ssr vs ssg]: https://www.youtube.com/watch?v=YatDFsPPy0E
