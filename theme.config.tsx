import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>0 -&gt; $</span>,
  // project: {
  //   link: "https://github.com/shuding/nextra-docs-template",
  // },
  // chat: {
  //   link: "test",
  // },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  search: {
    placeholder: "Search this book...",
  },
  footer: {
    text: (
      <div>
        How to make money online by coding. A book by{" "}
        <a href="https://vanvoorden.dev/" target="blank">
          Julius van Voorden
        </a>
      </div>
    ),
  },
  primaryHue: 172,
};

export default config;
