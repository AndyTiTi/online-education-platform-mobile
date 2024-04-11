# 在线教育平台

## 简介

本项目是一个基于 React 18、TypeScript、NestJS 和 GraphQL 技术的在线教育平台。它旨在提供一个用户友好的界面，用于在线学习、课程管理和教师与学生之间的互动。

## 技术栈

- **前端**: React 18 与 TypeScript 提供了强大的组件化和类型检查能力。
- **后端**: NestJS 作为服务器端的 Node.js 框架，提供了可扩展性和模块化的结构。
- **数据层**: GraphQL 用于高效的数据查询和操作，确保了数据传输的精确性和灵活性。

## 安装

在开始之前，请确保你已经安装了以下依赖：

- Node.js (推荐使用最新版本)
- pnpm 或 npm
- Docker (用于运行数据库)

### 克隆仓库

```bash
git clone https://github.com/AndyTiTi/online-education-platform-mobile.git
cd online-education-platform-mobile
```

### 安装依赖

```bash
pnpm install # 或者 npm install
```

## 运行

### 开发环境

```bash
pnpm start:dev # 或者 npm run start:dev
```

这将启动前端和后端的开发服务器。默认情况下，前端将在 `http://localhost:3000` 上运行，而后端将在 `http://localhost:3000/api` 上运行。

### 生产环境

```bash
pnpm build # 或者 npm run build
pnpm serve # 或者 npm run serve
```

这将构建应用程序并启动生产服务器。

## 数据库

数据库使用 Docker 进行管理。要启动数据库，请运行：

```bash
docker-compose up -d
```

## 目录结构

```
online-education-platform-mobile/
├── backend/              # NestJS 后端源代码
│   ├── src/                # 源代码目录
│   │   ├── main.ts        # 应用程序入口
│   │   ├── config/          # 配置文件
│   │   ├── modules/         # 模块目录
│   ├── Dockerfile          # Docker 配置文件
│   └── package.json
├── frontend/              # React 前端源代码
│   ├── public/             # 公共资源
│   │   └── index.html
│   ├── src/                # 源代码目录
│   │   ├── components/      # 组件目录
│   │   ├── pages/           # 页面目录
│   │   ├── App.tsx          # 应用程序主组件
│   ├── tailwind.config.js  # Tailwind CSS 配置
│   └── package.json
├── .env                    # 环境变量配置文件
├── .gitignore               # Git 忽略文件
├── docker-compose.yml       # Docker 配置文件
├── package.json             # 项目元数据和依赖
└── README.md                # 项目说明文件
```

## 贡献

如果你对本项目感兴趣并希望贡献，请先 Fork 本仓库，然后在你的本地分支上进行修改。完成后，提交 Pull Request 以便我们可以审查和合并你的更改。

## 许可证

本项目使用 [MIT 许可证](LICENSE)。