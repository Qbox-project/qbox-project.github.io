import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

// https://github.com/overextended/overextended.github.io/blob/main/theme.config.tsx#L6-L37
function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://qbox-docs.vercel.app${asPath}`;
  const description = frontMatter.description || "Documentation for the Qbox Project";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/qbox-duck.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, " ").split("/");
  const category = (arr[1][0] !== "#" && arr[1]) || "Qbox";
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : "%s";

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? "Documentation" : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: "50px",
        lineHeight: "38px",
        background: "url(/qbox-duck.png) no-repeat left",
        backgroundSize: "38px",
        fontWeight: 550,
      }}
    >
      Qbox
    </div>
  ),
  project: {
    link: "https://github.com/Qbox-project",
  },
  chat: {
    link: "https://discord.gg/qbox",
  },
  docsRepositoryBase: "https://github.com/Qbox-project/qbox-docs",
  footer: {
    text: "Qbox Project",
  },
  primaryHue: { dark: 200, light: 200 },
  head: useHead,
  useNextSeoProps: useNextSeoProps,
};

export default config;
