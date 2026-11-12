# 开发者命令手册

日常开发常用命令速查手册，基于 [Astro Starlight](https://starlight.astro.build/) 构建。

**在线访问：** [https://dev.webyt.com.cn](https://dev.webyt.com.cn)

## 内容范围

- **.NET 命令**：NuGet 打包、推送、源管理等实操命令
- 后续可继续补充 Git、Docker、数据库等命令页

文档源文件位于 `src/content/docs/`，按目录自动生成侧边栏（如 `dotnet/` →「NET 命令」）。

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:4321`。

| 命令 | 说明 |
| :--- | :--- |
| `npm run dev` | 本地开发服务 |
| `npm run build` | 构建生产站点到 `./dist/` |
| `npm run preview` | 预览构建结果 |

## 目录结构

```
.
├── public/                 # 静态资源
├── src/
│   ├── assets/             # 图片等资源
│   ├── content/
│   │   └── docs/           # 文档内容（.md / .mdx）
│   │       └── dotnet/     # .NET 相关命令
│   └── content.config.ts
├── astro.config.mjs        # 站点与侧边栏配置
└── package.json
```

新增文档：在对应目录下添加 `.md` / `.mdx`，必要时在 `astro.config.mjs` 的 `sidebar` 中挂载目录。
