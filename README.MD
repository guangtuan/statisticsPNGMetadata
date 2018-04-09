### usage

```bash
node index.js path/to/pngFilesFolder
```

### demo

#### input
```bash
$ node index 'E:\workspace\nodejs\testFolder'
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