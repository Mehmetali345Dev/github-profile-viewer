const description =
  "See short information about github users."

export default {
  title: "Github Profile Viewer",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    /* Twitter */
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@AnakinS07677978",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@AnakinS07677978",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "github-profile-viewer-six.vercel.app",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: "/icon.png",
    },
    /* Open-Graph */
    {
      hid: "og:title",
      name:"og:title",
      content:"Github Profile Viewer",
    },
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "github-profile-viewer-six.vercel.app",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    /* Others */
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#991b1b",
    },
  ].map((i) => {
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
}
