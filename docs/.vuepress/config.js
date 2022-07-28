
module.exports = {
    title: '前端技术学园',
    description: '学前端的最佳实践.',
    plugins: {
        '@vuepress/search': {
            search: true, //默认false
            searchMaxSuggestions: 10 // 默认是5
        }
    },
    themeConfig: {
        logo: "/logo.png",
        contributors: false,
        contributorsText: '贡献者',
        lastUpdatedText: '上次更新',
        notFound: ['这就戳碰到我知识的盲点了'],
        editLinkText: "编辑页面",
        editLinks: true,
        docsRepo: "https://github.com/yanwydxf/learn-fe",
        docsBranch: "main",
        docsDir: "docs",
        nav: [
            {
                text: '常用工具',
                items: [
                    { text: '正则可视化', link: "https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24" },
                    { text: '图片压缩工具', link: "https://tinypng.com/" },
                    { text: '图表绘制工具', link: "https://whimsical.com" },
                    { text: '图片清除背景', link: "https://remove.bg/" },
                    { text: '简洁开源的网页白板', link: "https://www.tldraw.com" },
                    { text: '数据结构/算法动态可视化', link: "https://visualgo.net/zh" },
                    { text: '在线图表制作工具', link: "https://chartcube.alipay.com" },
                    { text: '制作漂亮代码块图片', link: "https://carbon.now.sh" },
                    { text: 'GIF 动图录制工具', link: "https://www.cockos.com/licecap" },
                    { text: '开源视频录制和直播工具', link: "https://obsproject.com" },
                    { text: '出色的截图 + 贴图工具', link: "https://zh.snipaste.com" },
                    { text: '大文件匿名快传', link: "https://cowtransfer.com" }
                ]
            },
            {
                text: '摸鱼必备',
                items: [
                    { text: "在线街机", link: "https://www.yikm.net/" },
                    { text: "假装更新系统", link: "https://fakeupdate.net/" },
                    { text: "在线看大熊猫", link: "http://live.ipanda.com/xmcd/" },
                    { text: "云旅游", link: "https://livechina.cctv.com/mlzg/index.shtml?spm=0.PiHRJ12Bw7m4.EVbEpxjQVGbO.4" },
                    { text: '云游故宫', link: "https://www.dpm.org.cn/yygg.html" },
                ]
            },
            {
                text: '组队交流',
                link: "https://github.com/yanwydxf/learn-fe/discussions"
            },
            {
                text: 'Github',
                link: "https://github.com/yanwydxf/learn-fe"
            },

        ],
        sidebar: [
            '/',
            "/fepro",
            {
                title: '基础入门',
                collapsable: false,
                children: [
                    '/base/html',
                    '/base/javascript'
                ]
            },
        ]
    }
}