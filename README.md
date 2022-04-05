# CKEditor 5 Plugin for Typecho

用 CKEditor 5 替换 Typecho 默认的文章和页面编辑器。

## 安装方式

1. 下载仓库
2. 将仓库中 CKEditor 目录复制到 `/usr/plugins/` 目录下
3. 登录 Typecho 控制台，在插件配置中启用 CKEditor 插件。

## 已知问题

- 代码块使用的编程语言必须在 [languages](https://ckeditor.com/docs/ckeditor5/latest/features/code-blocks.html#configuring-code-block-languages) 配置中，否则会被重置为 plaintext。
- 不保留 HTML 元素，需加白名单 [keepHtml](https://ckeditor.com/docs/ckeditor5/latest/api/module_markdown-gfm_gfmdataprocessor-GFMDataProcessor.html#function-keepHtml)。
- 预览文章页面布局问题，不过 WYSIWYG 编辑器一般也不需要预览。
