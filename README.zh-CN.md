<div align="center">

[Português (Brasil)](README.md) | [English](README.en.md) | [Español](README.es.md) | [简体中文](README.zh-CN.md) | [Tiếng Việt](README.vi.md) | [日本語](README.ja.md)

# 🪁 Manga Garden

### 在浏览器中直接阅读任意语言的漫画
**无需 Python • 无需自建服务器 • 在浏览器中使用 AI 翻译**

🌐 **[访问 Manga Garden 网站](https://manga-garden-translator.pages.dev/)**

<br/>

[![Manga Garden Hero Banner](./README_images/Gemini_Generated_Image_f7lh52f7lh52f7lh.jpeg)](./README_images/Gemini_Generated_Image_f7lh52f7lh52f7lh.jpeg)

</div>

<div align="center">
  <p><strong>特别感谢项目 <a href="https://github.com/Unheat/Kites">Kites</a>、<a href="https://github.com/Unheat">Unheat 团队</a>及所有贡献者。</strong><br />Kites 的开源成果为 Manga Garden 奠定了基础；谨以此向原项目的启发和贡献致谢。</p>
</div>

---

## 💡 为什么选择 Manga Garden？

传统的漫画翻译工具往往需要安装复杂的 Python 运行环境、数以 GB 计的 CUDA 依赖包，或者需要将你的私人阅读记录上传到第三方云端服务器。

**Manga Garden 彻底改变了这一切。** 它是一个轻量级的 Chrome 扩展插件，通过 **WebGPU 直接调用显卡算力**，在浏览器内部本地运行最前沿的视觉与大语言模型。

- ⚡ **安装简单：** 安装扩展即可开始阅读。从源代码运行项目，请按照下方安装指南操作。
- 🔒 **尽可能在本地处理：** OCR 和背景清理在设备上运行。图片不会发送给翻译提供商；识别出的文本可能会发送给你选择的翻译服务。
- 🎨 **智能修复背景：** AI 修复可去除原文，同时保留线条、网点和纹理。
- ✍️ **自然排版：** 测量对话气泡、平衡换行，并调整字体大小和颜色。
- 🗨️ **智能气泡适配：** 启发式算法和神经网络 YOLO 可扩展狭窄阅读区域，避免文字过小。
- 📜 **支持长条 Webtoon：** 在不降低原始分辨率的情况下，通过内存分块处理翻译超过 14,000 px 的长图。
- 🛠️ **集成 Studio：** 修正译文、调整气泡大小和排版。

---

## 🖼️ 效果展示

### 日文 → 葡萄牙文
> *来源：[Pixiv 插画 #144884723](https://www.pixiv.net/en/artworks/144884723)*

<div align="center">
<table>
  <tr><th width="50%" align="center">日文原图</th><th width="50%" align="center">Manga Garden 翻译结果</th></tr>
  <tr>
    <td align="center"><img src="./site/assets/demo8-imput.png" alt="日文漫画原图" width="100%" /></td>
    <td align="center"><img src="./site/assets/demo8-thumb.png" alt="Manga Garden 葡萄牙语翻译" width="100%" /></td>
  </tr>
</table>
</div>

### 日文 → 英文 (Japanese → English)
> *作品: 佐藤さんは知っていた by [@09ra_19ra](https://x.com/09ra_19ra)*

<div align="center">
<table>
  <tr>
    <th width="50%" align="center">原始日文 (Original Japanese)</th>
    <th width="50%" align="center">Manga Garden 翻译效果 (Manga Garden Translated)</th>
  </tr>
  <tr>
    <td align="center">
      <img src="./README_images/input/demo2.jpeg" alt="Original Japanese Manga" width="100%" />
    </td>
    <td align="center">
      <img src="./README_images/result/demo2_result.png" alt="Manga Garden English Translation" width="100%" />
    </td>
  </tr>
</table>
</div>

### 日文 → 越南文 (Japanese → Vietnamese)
> *出处: [Pixiv Artwork #145272482](https://www.pixiv.net/en/artworks/145272482)*

<div align="center">
<table>
  <tr>
    <th width="50%" align="center">原始日文 (Original Japanese)</th>
    <th width="50%" align="center">Manga Garden 翻译效果 (Manga Garden Translated)</th>
  </tr>
  <tr>
    <td align="center">
      <img src="./README_images/input/demo7.jpg" alt="Original Japanese Manga" width="100%" />
    </td>
    <td align="center">
      <img src="./README_images/result/demo7_result.png" alt="Manga Garden Vietnamese Translation" width="100%" />
    </td>
  </tr>
</table>
</div>

---

## 🖱️ 页面内即时翻译

在 Twitter/X、Pixiv 或漫画网站上，将鼠标悬停在漫画图片上，图片旁会显示一个轻巧的按钮。点击即可直接在页面中翻译对话，无需复制粘贴。

<div align="center">
  <img src="./README_images/UI-feature/hover-inplace-preview.png" alt="Manga Garden In-Page Hover Translation Button" width="620px" />
</div>

- 🖱️ **悬停翻译 (Hover)：** 鼠标悬停任意分镜或漫画插图即可一键即时翻译。
- 📌 **常驻模式 (Persistent)：** 让翻译徽标常驻显示在页面中的所有漫画图片上。
- 🚀 **自动翻译 (Auto-Translate)：** 随着页面向下滚动，自动检测并翻译视野中新加载的漫画分镜。
- ✂️ **屏幕截屏选区翻译 (Screen Crop)：** 通过右键菜单或快捷键 `Ctrl/Alt + Shift + X`，自由截屏框选翻译受保护的 Canvas 画布、WebGL 网页游戏或任意局部画面。
- ⚡ **阅读快捷键：** 按 `F` 键瞬间对比/偷看原始生肉画面；按 `Ctrl/Alt + Shift + Z` 立即翻译当前鼠标悬停的图片；按 `Ctrl/Alt + Shift + M` 快速打开章节阅读器。
- 🎯 **右键菜单翻译：** 通过浏览器右键上下文菜单，随时翻译网络上的任意图像。

---

## 📖 章节阅读器与极速扫描

在一个专注无干扰的独立视图中阅读整话漫画或 Webtoon：支持自动批量扫描、无缝垂直滚动漫条模式、多页并行翻译与离线 ZIP 归档导出：

[![Manga Garden Chapter Reader](./README_images/UI-feature/reader.jpg)](./README_images/UI-feature/reader.png)

- **极速扫描 (Fast Scan)：** 自动向下滚动页面并捕获章节中所有懒加载的漫画分镜，智能加入排队队列。
- **灵活阅读模式：** 自由切换 Webtoon 连续垂直长条卷轴、单页模式与双页对开展开布局。
- **整话批量翻译：** 一键翻译整话漫画，配备实时进度追踪与离线缓存保留机制。
- **一键打包 ZIP 导出：** 将整话翻译完成的页面按序号打包为结构清晰的 ZIP 压缩包，完全在本地处理，便于离线保存与归档，零服务器上传风险。

---

## 🛠️ 内置 Manga Garden Studio 工作室

想要校对润色熟肉译文，或者微调排版效果？可直接从插件一键启动全屏 **Manga Garden Studio** 嵌字修图工作台。

[![Manga Garden Studio](./README_images/UI-feature/kite_studio_editing.jpg)](./README_images/UI-feature/studio-editor.png)

- **直接行内双击编辑：** 双击任意文本气泡即可在原位置直接修改译文内容，支持亚像素垂直居中与实时排版重排。
- **交互式气泡画布：** 支持 8 点缩放控制手柄，自由拖拽移动或调整对话气泡大小。
- **局部 AI 修复画笔 (Inpaint Brush)：** 像素级画笔精准涂白擦除画面瑕疵、对话气泡或未被翻译的拟声词 (SFX)。
- **多视图实时对比：** 一键在生肉原图、涂白修图层与排版嵌字层之间无缝切换比对。
- **精细排版控制：** 实时调整字体字号、文字颜色、对齐方式、描边效果与行高间距。
- **一键原图导出：** 以原始无损分辨率导出干净的翻译成品图像。

---

## 🎛️ 插件控制与预设设置

通过简洁优雅的弹出面板自定义目标语言、神经网络 OCR 模型以及背景修复算法：

<div align="center">
<table>
  <tr>
    <th width="33%" align="center">快捷控制面板 (Quick Control)</th>
    <th width="33%" align="center">章节阅读与扫描 (Reader &amp; Scanner)</th>
    <th width="34%" align="center">引擎与算法设置 (Engine Settings)</th>
  </tr>
  <tr>
    <td align="center">
      <img src="./README_images/UI-feature/main-panel.jpg" alt="Manga Garden Main Popup" width="95%" />
    </td>
    <td align="center">
      <img src="./README_images/UI-feature/reader-panel.jpg" alt="Manga Garden Chapter Reader and Scanner Panel" width="95%" />
    </td>
    <td align="center">
      <img src="./README_images/UI-feature/setting-panel.jpg" alt="Manga Garden Settings Panel" width="95%" />
    </td>
  </tr>
</table>
</div>

- **自定义术语表 (Custom Glossary)：** 预设角色姓名、专属称谓与专业术语，精准引导本地与云端 LLM 的翻译用词。
- **站点域名规则：** 针对特定网站域名自定义元素选择器，或单独启用/禁用翻译功能。

---

## 🧠 现代 AI 技术驱动

| 核心模块 | 可选方案 | 详细描述 |
| :--- | :--- | :--- |
| **翻译** | **WebLLM** *(本地 WebGPU)*<br/>**云端共享池** *(每日100次)*<br/>**Google 翻译**<br/>**自定义 API** *(OpenAI, Claude, Gemini)* | 运行本地模型（Qwen 3.5、Qwen 3、Gemma 3、Llama 3.2）、使用 Google 翻译、访问共享池或连接自己的 API 密钥。 |
| **图像修复 (Inpainting)** | **LaMa Manga** *(神经修复)*<br/>**AOT-GAN** *(超快神经模型)*<br/>**Telea Diffusion** *(即时传统算法)*<br/>**简单背景填充 (Simple Fill)** | 严格在文字边缘轮廓内擦除原文，最大程度保留原本线稿与网点质感。 |
| **OCR** | **PaddleOCR v3 – v6** | 检测和识别多语言文本，包括长条 Webtoon。 |
| **气泡调整** | **神经网络 YOLO** *(WebGPU)*<br/>**启发式算法** *(即时)*<br/>**经典 MST** | 扩展气泡中的对话空间，避免文字过小。 |

---

### 方式 2：ZIP 文件

1. Manga Garden 发布新版本后，从[代码仓库的发布页面](https://github.com/jacosncesar/manga-garden/releases/latest)下载 ZIP 文件。
2. 解压 `.zip`，然后在 Chrome 打开 `chrome://extensions/` > **开发者模式** > **加载已解压的扩展程序**。

### 方式 3：从源代码构建

```bash
# 1. 克隆代码仓库
git clone https://github.com/jacosncesar/MangaLumeTwo.git manga-garden
cd manga-garden

# 2. 安装依赖并构建扩展
npm ci
npm run build
```

1. 在 Chrome 中打开 `chrome://extensions/`。
2. 开启右上角的 **开发者模式** 开关。
3. 点击 **加载已解压的扩展程序** 并选择项目生成的 `dist/` 目录。
4. 将 **Manga Garden** 固定至工具栏，即可开始调试与阅读！

---

## 🤝 参与贡献与开发文档

我们热烈欢迎开发者、翻译人员和漫画爱好者的积极参与和贡献！

- 📖 **[开发文档中心](docs/README.md)** — 架构图解、处理管线规范与运行时契约。
- 📐 **[交互式管线流程图](docs/workflow.html)** — 独立交互式网页，直观展示 Manga Garden 的文本检测、背景修图与排版算法全流程。
- 🛠️ **[贡献指南](CONTRIBUTING.md)** — 如何搭建本地开发环境、运行测试用例及提交 PR。

---

## 📜 许可证与致谢

本项目依据 **[GNU 通用公共许可证第 3 版或任何后续版本](LICENSE)** 发布。

Manga Garden 是基于 [Unheat](https://github.com/Unheat) 团队开发的 [Kites](https://github.com/Unheat/Kites) 进行修改的独立项目。Manga Garden 与 Unheat 无关联、未获赞助或认可。项目名称、视觉标识、界面和修改内容均与原项目不同。

**修改声明：** Manga Garden 的公开开发历史自 **2026-07-08** 起有记录。各版本的具体修改记录在代码仓库历史和对应标签中。

**已发布版本的源代码：**
- [v1.2.5 — 对应源代码](https://github.com/jacosncesar/manga-garden/tree/v1.2.5)（于 2026-11-12 UTC 发布）。ZIP 包含 `LICENSE`、`THIRD_PARTY_NOTICES.md` 和 `NOTICE.txt`。
- [v1.2.4 — 对应源代码](https://github.com/jacosncesar/manga-garden/tree/v1.2.4)（于 2026-11-12 UTC 发布）。该版本 ZIP 包含 `LICENSE` 和 `NOTICE.txt`，但未包含 `THIRD_PARTY_NOTICES.md`；此遗漏已在 v1.2.5 中修正。
- [v1.2.3 — 对应源代码](https://github.com/jacosncesar/manga-garden/tree/v1.2.3)（于 2026-11-11 发布）。该版本 ZIP 发布时尚未加入 `LICENSE` 和 `NOTICE.txt`，现已被后续版本取代。

上述标签可用于查看和下载对应版本的源代码。后续版本应同时发布源代码标签，并在 ZIP 中包含相关许可证声明。

感谢帮助本项目成为可能的开源项目：
- **[manga-image-translator (Cotrans)](https://github.com/zyddnys/manga-image-translator)：** 空间文本分组和排版算法。
- **[xianscan-rust](https://github.com/ArbenApura/xianscan-rust)：** 动态补丁修复架构和 OCR 噪声过滤器。
- **[PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)：** 高速文本检测模型。
- **[@mlc-ai/web-llm](https://github.com/mlc-ai/web-llm)：** 浏览器原生的大语言模型 WebGPU 运行环境。
- 特别感谢 [**Unheat** 与 An Dang](https://github.com/Unheat)。

---

<div align="center">
  <sub>用 ❤️ 为喜爱漫画与条漫的读者制作。</sub>
</div>
