module.exports = {
    title: "HTML, CSS y Bootstrap 5 (bluuweb)",
    dest: "docs",
    base: "/desarrollo-web-bluuweb/",
    description:
        "Curso presencial (Google Meet) de HTML, CSS y Bootstrap 5, Docente: Ignacio Gutiérrez (bluuweb)",
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
    ],
    themeConfig: {
        editLinks: false,
        editLinkText: "",
        lastUpdated: "Last Updated",
        smoothScroll: true,
        nav: [
            {
                text: "Guía",
                link: "/",
            },
            // { text: 'Guia', link: '/docs/' },
            {
                text: "Youtube",
                link: "https://youtube.com/bluuweb",
            },
            {
                text: "Curso Vue.js",
                link: "http://curso-vue-js-udemy.bluuweb.cl",
            },
            {
                text: "Curso React.js",
                link: "http://curso-react-js-udemy.bluuweb.cl",
            },
            {
                text: "Curso Bootstrap",
                link: "http://curso-bootstrap-4-udemy.bluuweb.cl",
            },
        ],
        sidebar: [
            "/",
            "/01-html/",
            "/02-html-intermedio/",
            "/03-css/",
            "/04-css-intermedio/",
            "/05-flexbox/",
            "/06-flexbox-practica/",
            "/07-bootstrap/",
            "/08-github/",
        ],
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};

{
    /* <img :src="$withBase('/img/beautify.PNG')" alt="foo"></img> */
}
