module.exports = {
    title: 'SunShine',
    description: '小安眼睛里有光Buling~',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签
      ],
    themeConfig: {
        nextLinks: false,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: false,

        searchMaxSuggestions: 5,
        sidebar: 'auto',
        logo: '/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            // { text: 'External', link: 'https://google.com', target: '_self', rel: '' },
            // { text: 'Guide', link: '/guide/', target: '_blank' },
            {
                text: '魔法箱',
                ariaLabel: '魔法箱 Menu',
                items: [
                    { text: '小安的狗窝', link: 'https://froan.cn/' },
                    { text: '安看视频', link: 'https://froan.gitee.io/video/' },
                    { text: '安爱跑步', link: 'https://froan.gitee.io/misport/' }
                ]
            }
        ]
    }
}