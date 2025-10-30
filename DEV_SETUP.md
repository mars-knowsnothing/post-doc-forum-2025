# 开发环境设置指南

## PKU + THU Joint Postdoc Forum 2025

本文档说明如何启动开发服务器并解决常见的端口占用问题。

## 快速开始

### 方法1: 使用启动脚本 (推荐)

#### macOS/Linux:
```bash
# 直接运行启动脚本
./start-dev.sh

# 或者使用bash
bash start-dev.sh
```

#### Windows:
```cmd
# 双击运行或在命令行中执行
start-dev.bat
```

### 方法2: 手动启动

#### 1. 安装依赖
```bash
npm install
```

#### 2. 启动开发服务器
```bash
npm run dev
```

## 启动脚本功能

### 🔧 自动化功能
- ✅ **端口清理**: 自动检测并清理端口3000上的进程
- ✅ **依赖检查**: 自动安装缺失的依赖包
- ✅ **项目验证**: 确认在正确的项目目录中运行
- ✅ **优雅退出**: Ctrl+C时自动清理进程

### 📱 应用访问地址
启动成功后，可以通过以下地址访问应用：

- **本地访问**: http://localhost:3000
- **英文版本**: http://localhost:3000/en
- **中文版本**: http://localhost:3000/zh

## 手动端口清理

如果启动脚本无法自动清理端口，可以手动执行：

### macOS/Linux:
```bash
# 查找占用端口3000的进程
lsof -ti:3000

# 强制杀死占用端口的进程
lsof -ti:3000 | xargs kill -9
```

### Windows:
```cmd
# 查找占用端口3000的进程
netstat -ano | findstr :3000

# 杀死指定PID的进程
taskkill /f /pid <PID>
```

## 环境变量配置

可以通过环境变量自定义端口：

```bash
# 使用自定义端口
PORT=8080 ./start-dev.sh
```

或者创建 `.env.local` 文件：
```
PORT=8080
```

## 故障排除

### 问题1: 端口3000被占用
**解决方案**:
- 运行 `./start-dev.sh` 脚本会自动清理
- 或手动清理端口后重新启动

### 问题2: 权限错误 (macOS/Linux)
**解决方案**:
```bash
chmod +x start-dev.sh
```

### 问题3: Node.js/npm 未安装
**解决方案**:
- 安装 Node.js (推荐版本 18+): https://nodejs.org/
- 验证安装: `node --version && npm --version`

### 问题4: 依赖安装失败
**解决方案**:
```bash
# 清理npm缓存
npm cache clean --force

# 删除node_modules重新安装
rm -rf node_modules package-lock.json
npm install
```

## 开发功能特性

### 🌍 国际化支持
- **双语支持**: 英文/中文
- **自动语言检测**: 基于URL路径
- **动态切换**: 语言切换按钮

### ⚡ 开发体验
- **热重载**: 代码变更自动刷新
- **Turbopack**: Next.js 16 快速构建
- **响应式设计**: 适配各种设备尺寸

### 🎨 技术栈
- **框架**: Next.js 16 with App Router
- **语言**: TypeScript
- **样式**: TailwindCSS 4
- **国际化**: next-intl 4.4
- **构建工具**: Turbopack

## 脚本文件说明

- `start-dev.sh`: macOS/Linux启动脚本
- `start-dev.bat`: Windows启动脚本
- 两个脚本功能相同，自动选择使用对应操作系统的版本

## 更多信息

- **项目文档**: 查看 `README.md`
- **代码规范**: 运行 `npm run lint`
- **构建部署**: 运行 `npm run build`

---

💡 **提示**: 首次运行建议使用启动脚本，它会自动处理常见的环境问题。