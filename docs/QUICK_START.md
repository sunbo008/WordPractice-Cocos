# Word Tetris - Cocos Creator 版本快速开始指南

> 本文档帮助你快速了解项目结构和继续开发

## 📁 当前项目结构

```
proj-cocos/
├── assets/                          # 资源目录（主要开发区域）
│   │
│   ├── scenes/                      # 场景文件（待创建）
│   │   └── Game-Layout-Reference.md # ✅ UI 布局参考文档
│   │
│   ├── scripts/                     # TypeScript 脚本
│   │   ├── core/                    # 核心游戏逻辑
│   │   │   └── GameManager.ts      # ✅ 游戏主控制器（框架）
│   │   ├── systems/                 # 游戏系统（空）
│   │   ├── entities/                # 游戏实体（空）
│   │   ├── ui/                      # UI 组件（空）
│   │   ├── utils/                   # 工具类（空）
│   │   ├── config/                  # 配置文件
│   │   │   └── GameConfig.ts       # ✅ 游戏配置常量
│   │   └── types/                   # TypeScript 类型定义
│   │       ├── Word.ts             # ✅ 单词相关类型
│   │       └── GameState.ts        # ✅ 游戏状态类型
│   │
│   ├── prefabs/                     # 预制体目录（空）
│   ├── resources/                   # 动态加载资源（空）
│   ├── textures/                    # 纹理资源（空）
│   └── animations/                  # 动画资源（空）
│
├── docs/                            # 文档目录
│   ├── 01_迁移总览.md
│   ├── 02_环境准备.md
│   ├── 03_项目结构设计.md
│   ├── 04_资源迁移指南.md
│   ├── 05_核心逻辑迁移.md
│   ├── 06_渲染系统改造.md
│   ├── 07_UI系统重建.md
│   ├── 08_音频系统适配.md
│   ├── 09_测试验证清单.md
│   ├── 10_常见问题FAQ.md
│   ├── README.md
│   └── 快速参考.md
│
├── MIGRATION_PROGRESS.md            # ✅ 迁移进度文档
├── QUICK_START.md                   # 本文件
├── README.md
├── package.json
└── tsconfig.json
```

## ✅ 已完成工作

### 1. 项目初始化
- ✅ 创建完整的目录结构
- ✅ 配置 TypeScript
- ✅ 配置 Cocos Creator 项目

### 2. 核心文件

#### GameManager.ts - 游戏主控制器
**位置**: `assets/scripts/core/GameManager.ts`

**功能**:
- 游戏状态管理（停止、进行、暂停、结束）
- 生命周期管理（onLoad, start, update）
- 游戏流程控制（开始、暂停、重置、升级、结束）
- 分数和连击管理
- 错词管理接口

**状态**: 框架完成 ✅

#### GameConfig.ts - 游戏配置
**位置**: `assets/scripts/config/GameConfig.ts`

**包含配置**:
- 游戏区域尺寸（600x500）
- 单词下降速度（基础 0.2 像素/帧）
- 分数系统（每字母 1 分，射击奖励 2 分）
- 等级阈值（100, 200, 300...）
- 炮管、炮弹、爆炸等视觉效果参数
- 音频、词库、R2 存储配置

**状态**: 完成 ✅

#### Word.ts - 单词类型定义
**位置**: `assets/scripts/types/Word.ts`

**类型定义**:
- `WordData` - 单词数据接口
- `FallingWord` - 下降中的单词实体
- `StackedWord` - 堆叠的单词
- `VocabularyConfig` - 词库配置
- `VocabularyMeta` - 词库元数据

**状态**: 完成 ✅

#### GameState.ts - 游戏状态类型
**位置**: `assets/scripts/types/GameState.ts`

**类型定义**:
- `GameState` - 游戏状态枚举
- `GameMode` - 游戏模式枚举
- `BufferState` - 缓冲区状态枚举
- `GameStats` - 游戏统计数据
- `ScoreData` - 评分数据
- `BufferLights` - 缓冲区灯光状态

**状态**: 完成 ✅

### 3. 参考文档

#### Game-Layout-Reference.md - UI 布局参考
**位置**: `assets/scenes/Game-Layout-Reference.md`

**内容**:
- 完整的 UI 布局 ASCII 图
- 各区域详细设计说明
- Cocos Creator 节点层级建议
- 尺寸和颜色参考表
- 对应原 `proj/index.html` 的布局映射

**状态**: 完成 ✅

#### MIGRATION_PROGRESS.md - 迁移进度
**位置**: `proj-cocos/MIGRATION_PROGRESS.md`

**内容**:
- 已完成工作清单
- 待完成任务列表
- 完成度统计（约 10%）
- 下一步计划
- JavaScript 到 TypeScript 转换指南
- 参考文档链接

**状态**: 完成 ✅

## 📋 下一步待办事项

### 优先级 1 - 核心模块（立即）

1. **WordManager.ts** - 单词管理器
   - 单词库加载
   - 单词生成逻辑
   - 单词移动更新
   - 单词碰撞检测

2. **CannonSystem.ts** - 炮管系统
   - 炮管渲染
   - 瞄准计算
   - 射击逻辑
   - 后坐力动画

3. **WordEntity.ts** - 单词实体
   - 单词显示
   - 输入处理
   - 高亮反馈
   - 下降逻辑

4. **Game.scene** - 主游戏场景
   - 创建场景文件
   - 按照 `Game-Layout-Reference.md` 搭建节点
   - 配置组件引用

### 优先级 2 - 系统模块（短期）

1. **ExplosionSystem.ts** - 爆炸系统
2. **GameRenderer.ts** - 渲染系统
3. **ScoreManager.ts** - 分数管理器
4. **InputManager.ts** - 输入管理器
5. **BufferManager.ts** - 缓冲区管理器

### 优先级 3 - UI 模块（中期）

1. **GameUI.ts** - 游戏主界面
2. **LeftPanelUI.ts** - 左侧面板
3. **SidebarUI.ts** - 右侧边栏
4. **ModalUI.ts** - 弹窗

### 优先级 4 - 工具类和资源（长期）

1. 迁移工具类（TTSService, AudioCache 等）
2. 迁移单词库资源
3. 迁移音频资源（可能使用 R2）
4. 迁移图片资源（可能使用 R2）

## 🔧 开发建议

### 1. 按照顺序开发

**建议开发顺序**:
```
1. 创建 Game.scene（场景框架）
   ↓
2. 实现 WordManager（单词管理）
   ↓
3. 实现 WordEntity（单词显示）
   ↓
4. 实现 InputManager（输入处理）
   ↓
5. 测试基础游戏循环（单词下降+输入）
   ↓
6. 实现 CannonSystem（炮管系统）
   ↓
7. 实现 ExplosionSystem（爆炸系统）
   ↓
8. 测试完整游戏流程
   ↓
9. 实现 UI 模块
   ↓
10. 迁移资源文件
   ↓
11. 完整测试和优化
```

### 2. 参考原代码

**原项目位置**: `../proj/`

**重要文件映射**:
```
原文件                              →  新文件
proj/src/core/WordTetrisGame.js    →  assets/scripts/core/GameManager.ts
proj/src/systems/CannonSystem.js   →  assets/scripts/systems/CannonSystem.ts
proj/src/systems/ExplosionSystem.js →  assets/scripts/systems/ExplosionSystem.ts
proj/src/systems/GameRenderer.js   →  assets/scripts/systems/GameRenderer.ts
proj/index.html                     →  assets/scenes/Game.scene
```

### 3. 使用类型定义

**示例**:
```typescript
import { WordData, FallingWord } from '../types/Word';
import { GameState, GameStats } from '../types/GameState';
import { GameConfig } from '../config/GameConfig';

// 使用类型
const word: WordData = {
    word: 'hello',
    phonetic: '/həˈloʊ/',
    meaning: '你好',
    difficulty: 1,
    // ...
};

// 使用配置
const speed = GameConfig.BASE_FALL_SPEED;
```

### 4. 遵循 Cocos Creator 规范

**组件示例**:
```typescript
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MyComponent')
export class MyComponent extends Component {
    @property(Node)
    targetNode: Node = null;
    
    protected onLoad(): void {
        // 初始化
    }
    
    protected start(): void {
        // 启动
    }
    
    protected update(dt: number): void {
        // 每帧更新
    }
}
```

## 📚 参考资源

### 项目文档
- **项目设计**: `../../word_tetris_game_design.md`（唯一权威）
- **迁移指南**: `README.md`
- **快速参考**: `快速参考.md`
- **项目结构**: `03_项目结构设计.md`

### 外部资源
- [Cocos Creator 官方文档](https://docs.cocos.com/creator/manual/zh/)
- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
- [TypeScript 中文文档](https://www.tslang.cn/docs/home.html)

## ⚙️ 开发环境

### 必需软件
- Cocos Creator 3.x
- Node.js 16+
- Visual Studio Code（推荐）

### VSCode 推荐扩展
- Cocos Creator Extension
- TypeScript Extension
- ESLint
- Prettier

## 🎯 关键注意事项

### 1. 严格遵循设计文档

⚠️ **重要**: 所有实现必须 100% 遵循 `word_tetris_game_design.md`

**示例**:
- ✅ 设计说"炮管" → 必须实现完整的炮管视觉系统
- ✅ 设计说"中文翻译爆炸动画" → 必须实现放大动画
- ✅ 设计说"血色红叉" → 必须是 X 形状，不能只是红色边框

### 2. 保持代码质量

- 使用 TypeScript 类型检查
- 添加注释说明复杂逻辑
- 保持代码整洁和可读性
- 遵循 Cocos Creator 最佳实践

### 3. 逐步迁移，持续测试

- 每完成一个模块就测试
- 不要一次性迁移所有代码
- 保持小步快跑的开发节奏

## 🚀 开始开发

### 方法 1: 打开 Cocos Creator

```bash
# 在 Cocos Creator 中打开项目
# 文件 → 打开项目 → 选择 proj-cocos 目录
```

### 方法 2: 从命令行启动

```bash
cd proj-cocos
# 使用 Cocos Creator 打开项目
```

### 下一步建议

1. 阅读 `docs/Game-Layout-Reference.md`
2. 在 Cocos Creator 中创建 `Game.scene`
3. 按照布局参考搭建基础节点结构
4. 开始实现 `WordManager.ts`

---

**祝开发顺利！** 🎉

如有问题，请参考：
- `docs/MIGRATION_PROGRESS.md` - 查看进度和计划
- `docs/快速参考.md` - 快速查找 API
- `docs/10_常见问题FAQ.md` - 解决常见问题

