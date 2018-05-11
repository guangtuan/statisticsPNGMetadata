分析某个文件夹下 png 文件的 metadata，起初目的是
- 项目采用 tinypng 压缩 png 文件，但是不知道哪一些被遗漏了。
- tinypng 压缩会对 metadata 做处理，所以 metadata 可以看做一个特征，由此分析哪些文件被遗漏。

### usage

```bash
git clone https://github.com/guangtuan/statisticsPNGMetadata.git
cd statisticsPNGMetadata
npm install
npm start path/to/pngFilesFolder
```

### demo

#### input
```bash
npm start 'E:\workspace\nodejs\testFolder'
```

#### output
```json
[
    {
        "number": 2,
        "metadataNames": [
            "IDAT",
            "IEND",
            "IHDR",
            "pHYs"
        ],
        "filePaths": [
            "E:\\workspace\\nodejs\\testFolder\\one\\icon_login_down.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\switch_account_delete.png"
        ]
    },
    {
        "number": 28,
        "metadataNames": [
            "IDAT",
            "IEND",
            "IHDR",
            "PLTE",
            "tRNS"
        ],
        "filePaths": [
            "E:\\workspace\\nodejs\\testFolder\\two\\address_addto.png",
            "E:\\workspace\\nodejs\\testFolder\\two\\address_delete.png",
            "E:\\workspace\\nodejs\\testFolder\\two\\address_edit.png",
            "E:\\workspace\\nodejs\\testFolder\\two\\cashback_tag.png",
            "E:\\workspace\\nodejs\\testFolder\\two\\cb_selected.png",
            "E:\\workspace\\nodejs\\testFolder\\two\\cb_unselected.png",
            "E:\\workspace\\nodejs\\testFolder\\two\\chat.png",
            "E:\\workspace\\nodejs\\testFolder\\two\\collect.png",
            "E:\\workspace\\nodejs\\testFolder\\two\\favorite.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\favorite_red.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\goods_detail_cart.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\icon_add_account.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\icon_all.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\icon_gh.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\icon_in.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\icon_login_up.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\icon_mem_edit.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\icon_ug.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\img_discount.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\img_flashsale.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\img_quicksale.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\member_arrow.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\num_add.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\num_reduce.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\package_offer.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\search_ico.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\sku_close.png",
            "E:\\workspace\\nodejs\\testFolder\\one\\store.png"
        ]
    }
]
```
