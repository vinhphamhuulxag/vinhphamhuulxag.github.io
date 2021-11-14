const listThemes = [
    {
        type: 'Chủ đề',
        themes: [
            {
                name: 'Zing Music Awards',
                image: './asset/img/theme1.jpg'
               
            },
            {
                name: 'Lon Don',
                image: './asset/img/london.png'
            },
        ]
    },
    {
        type: 'Nghệ Sĩ',
        themes: [
            {
                name: 'Rosé',
                image: './asset/img/rose.jpg'
            },
            {
                name: 'IU',
                image: './asset/img/iu.jpg'
            },
            {
                name: 'Ji Chang Wook',
                image: './asset/img/ji-chang-wook.jpg'
            },
            {
                name: 'Lisa',
                image: './asset/img/lisa.jpg'
            },
            {
                name: 'Jennie Kim',
                image: './asset/img/jennie.jpg'
            },
            {
                name: 'Jisoo',
                image: './asset/img/jisoo.jpg'
            },
        ]
    },
    {
        type: 'Màu Tối',
        themes: [
            {
                name: 'Tối',
                image: './asset/img/dark.jpg'
            },
            {
                name: 'Tím',
                image: './asset/img/tím.jpg'
            },
            {
                name: 'Xanh Đậm',
                image: './asset/img/blue.jpg'
            },
            {
                name: 'Xanh Biển',
                image: './asset/img/blue-light.jpg'
            },
            {
                name: 'Xanh Lá',
                image: './asset/img/green.jpg'
            },
            {
                name: 'Nâu',
                image: './asset/img/brown.jpg'
            },
            {
                name: 'Hồng',
                image: './asset/img/pink.jpg'
            },
            {
                name: 'Đỏ',
                image: './asset/img/red.jpg'
            },
        ]
    },
    {
        type: 'Màu Sáng',
        themes: [
            {
                name: 'Sáng',
                image: './asset/img/light.jpg'
            },
            {
                name: 'Xám',
                image: './asset/img/gray.jpg'
            },
            {
                name: 'Xanh Nhạt',
                image: './asset/img/green-light.jpg'
            },
            {
                name: 'Hồng Cánh Sen',
                image: './asset/img/pink-light.jpg'
            },
        ]
    },
]


const THEME_LIST_STORAGE_KEY = 'PHV_THEME_LIST';

localStorage.setItem(THEME_LIST_STORAGE_KEY, JSON.stringify(listThemes))
