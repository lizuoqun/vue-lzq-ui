module.exports = {
    title:'Lzq-UI',
    // base:'./vue-lzq-ui/',
    base:'./',
    head: [
        ['link', {
            rel: 'icon',
            href: `/yangsuo.png`
        }]
    ],
    port: 8888,
    themeConfig: {
        sidebar: [
            '/',
            './componentsDocs/demo-text'
        ],
        nav: [
            { text: 'Home', link: '/' },
            { text: 'GitHub', link: 'https://github.com/lizuoqun/vue-lzq-ui/tree/master' },
            { text: 'Npm', link: 'https://www.npmjs.com/package/vue-lzq-ui' },
          ]
    }
}