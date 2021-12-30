# [SSR vs SSG][ssr vs ssg]

"The best way to start thinking about SSR is to talk about its history."

After 2010, SPA frameworks started showing up (React, Angular, Vue). Once loaded are "Fast". Helped build more complex applications, but did not have SEO. Content of page wasn't there. First time to interactive was slow. JS needed to be run before anything could be parsed on the page. Fastboot, next, nuxt all serve SSR/SEO Cabilities.

> **Server Side Rendering:** The ability to serve full HTML content to the initial request for a page and then hydrate the page to a full blown "single-page application" for clients who support Javascript while at the same time, allowing non-Javascript clients to interact without needing to load the SPA.

<b>Architecture needed to support SPA are not the same to support server side rendering</b>

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
