# Word Tetris - Cocos Creator 版本

## 🎮 项目简介

这是 Word Tetris（单词俄罗斯方块）游戏的 Cocos Creator 版本，从原始的 HTML5 Canvas 版本迁移而来。

**原始项目位置**：`../proj/`  
**设计文档**：`../word_tetris_game_design.md`

---

## 📋 项目状态

### 当前阶段：文档完成 ✅

- ✅ 环境准备完成
- ✅ 项目结构规划完成
- ✅ 资源迁移方案完成
- ✅ 核心逻辑迁移方案完成
- 🔄 渲染系统迁移（待实现）
- 🔄 UI 系统重建（待实现）
- 🔄 音频系统适配（待实现）
- 🔄 测试与优化（待实现）

---

## 📚 文档导航

完整的迁移文档位于 `docs/` 目录：

### 必读文档
1. **[迁移总览](./docs/01_迁移总览.md)** - 从这里开始！
2. **[环境准备](./docs/02_环境准备.md)** - Cocos Creator 安装配置
3. **[项目结构设计](./docs/03_项目结构设计.md)** - 目录组织和场景设计
4. **[资源迁移指南](./docs/04_资源迁移指南.md)** - 单词库、音频、图片迁移
5. **[核心逻辑迁移](./docs/05_核心逻辑迁移.md)** - 游戏代码迁移

### 辅助文档
- **[README](./docs/README.md)** - 文档索引
- **[快速参考](./docs/快速参考.md)** - 常用代码和API速查

---

## 🚀 快速开始

### 前置要求

- **Cocos Creator**: 3.8.3 或更高版本
- **Node.js**: v16 或更高版本
- **TypeScript**: 项目自带配置
- **操作系统**: Windows 10/11, macOS, Linux

### 安装步骤

1. **安装 Cocos Creator**
   ```bash
   # 下载并安装 Cocos Dashboard
   # https://www.cocos.com/creator-download
   ```

2. **打开项目**
   ```bash
   # 在 Cocos Creator 中打开本项目
   # 文件 → 打开项目 → 选择此目录
   ```

3. **安装依赖**
   ```bash
   cd proj-cocos
   npm install
   ```

4. **运行测试**
   ```bash
   # 在 Cocos Creator 中点击"预览"按钮
   # 或使用快捷键 Ctrl+P
   ```

---

## 📁 目录结构

```
proj-cocos/
├── assets/                  # 资源目录
│   ├── scenes/             # 场景文件
│   ├── scripts/            # TypeScript 脚本
│   ├── prefabs/            # 预制体
│   ├── resources/          # 动态加载资源
│   ├── textures/           # 纹理资源
│   └── animations/         # 动画资源
│
├── build/                  # 构建输出（自动生成）
├── library/                # 编译缓存（自动生成）
├── temp/                   # 临时文件（自动生成）
│
├── docs/                   # 迁移文档
│   ├── 01_迁移总览.md
│   ├── 02_环境准备.md
│   ├── 03_项目结构设计.md
│   ├── 04_资源迁移指南.md
│   ├── 05_核心逻辑迁移.md
│   ├── README.md
│   └── 快速参考.md
│
├── package.json            # npm 依赖配置
├── tsconfig.json           # TypeScript 配置
├── project.json            # Cocos 项目配置
├── .gitignore             # Git 忽略配置
└── README.md              # 本文件
```

---

## 🎯 功能特性

### 游戏核心功能
- ✅ 单词顺序下降系统
- ✅ 缓冲区倒计时（红黄绿信号灯）
- ✅ 字母缺失和实时输入验证
- ✅ 炮管自动瞄准和射击
- ✅ 爆炸粒子效果
- ✅ 中文翻译爆炸动画
- ✅ 堆叠区管理
- ✅ 分数和等级系统

### 教育功能
- ✅ 三级层级化词库（按天/专项/年级）
- ✅ TTS 语音朗读（多提供商降级）
- ✅ 单词图片展示（视觉记忆）
- ✅ 重音音节高亮（发音学习）
- ✅ 生词本管理
- ✅ 考试统计系统

### 游戏模式
- ✅ 休闲模式（有字母提示）
- ✅ 挑战模式（无提示）

---

## 🔧 开发指南

### 推荐开发工具

1. **Cocos Creator 3.8.3** - 主要开发工具
2. **Visual Studio Code** - 代码编辑器
3. **Chrome** - 调试浏览器

### VS Code 扩展推荐

- Cocos Creator Extension
- ESLint
- Prettier
- TypeScript Importer
- GitLens

### 代码规范

- 使用 TypeScript
- 遵循 ESLint 规则
- 组件类使用 `@ccclass` 装饰器
- 属性使用 `@property` 装饰器
- 遵循 Cocos Creator 生命周期

---

## 📦 构建发布

### Web 平台

```bash
# 在 Cocos Creator 中
# 菜单 → 项目 → 构建发布
# 选择平台：Web Mobile/Desktop
# 点击"构建"
```

### Android 平台

```bash
# 需要安装 Android Studio 和 SDK
# 构建平台选择：Android
```

### iOS 平台

```bash
# 需要 macOS 和 Xcode
# 构建平台选择：iOS
```

---

## 🐛 故障排查

### 常见问题

1. **项目无法打开**
   - 检查 Cocos Creator 版本（需要 3.8.x）
   - 删除 `library/` 和 `temp/` 目录后重新打开

2. **预览白屏**
   - 打开浏览器控制台查看错误
   - 检查场景中是否有 Canvas 节点

3. **TypeScript 编译错误**
   - 检查 `tsconfig.json` 配置
   - 运行 `npm install` 安装依赖

4. **资源加载失败**
   - 检查资源路径是否正确
   - 确认资源在 `resources/` 目录下

更多问题请查看 [文档 FAQ](./docs/10_常见问题FAQ.md)（待完成）

---

## 📖 学习资源

- [Cocos Creator 官方文档](https://docs.cocos.com/creator/manual/zh/)
- [Cocos Creator API 参考](https://docs.cocos.com/creator/3.8/api/zh/)
- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
- [原始设计文档](../word_tetris_game_design.md)

---

## 🤝 贡献指南

### 参与开发

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 代码审查

- 确保所有功能符合设计文档
- 遵循代码规范
- 添加必要的注释
- 通过所有测试

---

## 📄 许可证

本项目继承原项目的许可证。

---

## 📞 联系方式

如有问题或建议，请：

- 提交 Issue
- 发起 Discussion
- 查看文档

---

## 🎉 致谢

感谢所有为 Word Tetris 项目做出贡献的开发者！

---

## 📝 更新日志

### 2025-10-22
- ✅ 创建 Cocos Creator 项目
- ✅ 完成迁移文档编写
- 🔄 开始代码迁移工作

---

**开始你的 Cocos Creator 开发之旅！** 🚀

📖 从这里开始：[docs/01_迁移总览.md](./docs/01_迁移总览.md)
