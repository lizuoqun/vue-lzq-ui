module.exports = {
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
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://www.baidu.com' },
          ]
    }
}