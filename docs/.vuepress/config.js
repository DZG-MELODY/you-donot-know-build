const path = require("path");

module.exports = {
  base: "/you-donot-know-build/",
  title: "你不知道的前端构建",
  description: "换一个角度介绍你所不知道的前端构建",
  dest: path.resolve(__dirname, "../../dist/"),
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: "DZG-MELODY/you-donot-know-build",
    repoLabel: "GitHub",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "帮助我们改善此页面！",
    nav: [
      { text: "序言", link: "/preface/" },
      {
        text: "正文",
        items: [
          { text: "总体概述", link: "/general/" },
          { text: "webpack部分", link: "/webpack/" },
          { text: "rollup部分", link: "/rollup/" },
          { text: "babel部分", link: "/babel/" }
        ]
      },
      { text: "附录", link: "/appendix/" }
    ],
    sidebar: {
      "/general/": ["/general/", "/webpack/", "/rollup/", "/babel/"],
      "/webpack/": ["/general/", "/webpack/", "/rollup/", "/babel/"],
      "/rollup/": ["/general/", "/webpack/", "/rollup/", "/babel/"],
      "/babel/": ["/general/", "/webpack/", "/rollup/", "/babel/"]
    }
  }
};
