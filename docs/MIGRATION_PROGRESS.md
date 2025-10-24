# Word Tetris 迁移进度

> 从原 HTML/JavaScript 项目 (`proj/`) 迁移到 Cocos Creator 项目 (`proj-cocos/`)

## ✅ 已完成

### 1. 项目结构搭建

#### 目录结构 ✅
```
proj-cocos/assets/
├── scenes/                     # 场景文件目录
│   └── Game-Layout-Reference.md  # UI 布局参考文档
├── scripts/                    # TypeScript 脚本
│   ├── core/                   # 核心逻辑
│   │   └── GameManager.ts     # 游戏主控制器（框架）
│   ├── systems/                # 游戏系统（待创建）
│   ├── entities/               # 游戏实体（待创建）
│   ├── ui/                     # UI 组件（待创建）
│   ├── utils/                  # 工具类（待创建）
│   ├── config/                 # 配置文件
│   │   └── GameConfig.ts      # 游戏配置常量
│   └── types/                  # TypeScript 类型定义
│       ├── Word.ts            # 单词相关类型
│       └── GameState.ts       # 游戏状态类型
├── prefabs/                    # 预制体目录
│   ├── entities/               # 实体预制体
│   ├── ui/                     # UI 预制体
│   └── effects/                # 特效预制体
├── resources/                  # 动态加载资源
│   ├── words/                  # 单词库
│   ├── audio/                  # 音频文件
│   ├── images/                 # 图片资源
│   └── fonts/                  # 字体文件
├── textures/                   # 纹理资源
│   ├── ui/
│   ├── sprites/
│   └── particles/
└── animations/                 # 动画资源
    ├── cannon/
    ├── word/
    └── ui/
```

### 2. 核心脚本框架

#### GameManager.ts ✅
- 游戏状态管理
- 生命周期方法（onLoad, start, update）
- 公共接口（startGame, pauseGame, resetGame, levelUp, gameOver）
- 分数和连击管理
- 错词管理接口
- **状态**: 框架完成，待填充实现细节

#### GameConfig.ts ✅
- 游戏区域尺寸配置
- 单词下降速度配置
- 分数系统配置
- 等级配置
- 缓冲区配置
- 堆叠区配置
- 单词样式配置
- 炮管系统配置
- 炮弹配置
- 爆炸特效配置
- 中文翻译爆炸动画配置
- 红叉标记配置
- 输入高亮配置
- 分数飞行动画配置
- 引信配置
- 音频配置
- 词库配置
- R2 配置
- 调试配置

### 3. 类型定义

#### Word.ts ✅
- `WordData`: 单词数据接口
- `FallingWord`: 下降中的单词实体
- `StackedWord`: 堆叠的单词
- `VocabularyConfig`: 词库配置
- `VocabularyMeta`: 词库元数据

#### GameState.ts ✅
- `GameState`: 游戏状态枚举
- `GameMode`: 游戏模式枚举
- `BufferState`: 缓冲区状态枚举
- `GameStats`: 游戏统计数据
- `ScoreData`: 评分数据
- `BufferLights`: 缓冲区灯光状态

### 4. 参考文档

#### Game-Layout-Reference.md ✅
- 完整的 UI 布局说明
- 各区域详细设计
- Cocos Creator 节点层级建议
- 尺寸和颜色参考
- 对应原 `proj/index.html` 的布局

---

## 🔄 进行中

### 核心脚本实现
- [ ] WordManager.ts - 单词管理器
- [ ] ScoreManager.ts - 分数管理器
- [ ] InputManager.ts - 输入管理器
- [ ] BufferManager.ts - 缓冲区管理器

---

## 📋 待完成

### 1. 系统模块（systems/）

#### 需要创建的脚本：
- [ ] **CannonSystem.ts** - 炮管系统
  - 炮管渲染
  - 瞄准计算
  - 射击逻辑
  - 后坐力动画
  - 引信物理摆动
  - 对应原文件: `proj/src/systems/CannonSystem.js`

- [ ] **ExplosionSystem.ts** - 爆炸系统
  - 粒子爆炸效果
  - 中文翻译爆炸动画
  - 炮口火花效果
  - 对应原文件: `proj/src/systems/ExplosionSystem.js`

- [ ] **GameRenderer.ts** - 渲染系统
  - 背景渲染
  - 缓冲区渲染
  - 单词渲染
  - UI 信息显示
  - 对应原文件: `proj/src/systems/GameRenderer.js`

- [ ] **CollisionSystem.ts** - 碰撞检测系统
  - 炮弹与单词碰撞
  - 单词与堆叠区碰撞

### 2. 实体模块（entities/）

#### 需要创建的脚本：
- [ ] **WordEntity.ts** - 单词实体
  - 单词显示
  - 输入处理
  - 高亮反馈
  - 错误标记
  - 下降逻辑

- [ ] **CannonEntity.ts** - 炮管实体
  - 炮管组件
  - 旋转控制
  - 视觉效果

- [ ] **BulletEntity.ts** - 炮弹实体
  - 炮弹移动
  - 火焰特效
  - 尾迹渲染

- [ ] **FuseEntity.ts** - 引信实体
  - 物理摆动
  - 火焰粒子
  - 发光效果

### 3. UI 模块（ui/）

#### 需要创建的脚本：
- [ ] **GameUI.ts** - 游戏主界面
  - 顶部信息栏
  - 考试统计栏
  - 实时更新

- [ ] **LeftPanelUI.ts** - 左侧面板
  - 图片展示区
  - 控制面板
  - 输入框
  - 按钮组

- [ ] **SidebarUI.ts** - 右侧边栏
  - 单词准备区
  - 错词本
  - 游戏说明
  - 调试面板

- [ ] **ModalUI.ts** - 弹窗
  - 游戏结束弹窗
  - 等级提升弹窗
  - 设置弹窗

- [ ] **ImageShowcase.ts** - 图片展示组件
  - 单词图片显示
  - 单词信息显示

- [ ] **DebugPanel.ts** - 调试面板
  - 日志显示
  - 日志导出
  - 日志控制

### 4. 工具类（utils/）

#### 需要迁移的工具类：
- [ ] **TTSService.ts** - TTS 语音服务
  - 对应: `proj/src/utils/TTSService.js`

- [ ] **AudioCacheManager.ts** - 音频缓存管理
  - 对应: `proj/src/utils/AudioCacheManager.js`

- [ ] **MissedWordsManager.ts** - 错词管理
  - 对应: `proj/src/utils/MissedWordsManager.js`

- [ ] **PhoneticFormatter.ts** - 音标格式化
  - 对应: `proj/src/utils/PhoneticFormatter.js`

- [ ] **DebugLogger.ts** - 调试日志
  - 对应: `proj/src/utils/DebugLogger-standalone.js`

- [ ] **CanvasHelper.ts** - 画布辅助工具
  - 对应: `proj/src/utils/CanvasHelper.js`

### 5. 配置模块（config/）

#### 需要迁移的配置：
- [ ] **R2Config.ts** - R2 存储配置
  - 对应: `proj/src/config/r2-config.js`

- [ ] **VocabularyConfig.ts** - 词库配置
  - 对应: `proj/src/core/vocabulary-config-loader.js`

### 6. 核心逻辑（core/）

#### 需要迁移的核心模块：
- [ ] **VocabularyManager.ts** - 词库管理器
  - 对应: `proj/src/core/vocabulary-manager-v2.js`

- [ ] **GameSettingsIntegration.ts** - 游戏设置集成
  - 对应: `proj/src/core/game-settings-integration.js`

### 7. 场景和预制体

#### 场景文件：
- [ ] **Game.scene** - 主游戏场景
  - 按照 `Game-Layout-Reference.md` 创建节点层级
  - 配置组件和引用关系

- [ ] **Settings.scene** - 设置场景（可选）

#### 预制体：
- [ ] **Word.prefab** - 单词预制体
- [ ] **Cannon.prefab** - 炮管预制体
- [ ] **Bullet.prefab** - 炮弹预制体
- [ ] **Explosion.prefab** - 爆炸预制体
- [ ] **Particle.prefab** - 粒子预制体
- [ ] **RedCross.prefab** - 红叉标记预制体
- [ ] **Modal.prefab** - 弹窗预制体

### 8. 资源迁移

#### 需要迁移的资源：
- [ ] **单词库（words/）**
  - 从 `proj/words/` 复制到 `proj-cocos/assets/resources/words/`
  - 约 90+ JSON 文件

- [ ] **音频文件（audio/）**
  - 从 `proj/audio/` 复制到 `proj-cocos/assets/resources/audio/`
  - 约 660+ MP3 文件
  - 注意：可能需要使用 R2 云存储

- [ ] **图片文件（images/）**
  - 从 `proj/images/` 复制到 `proj-cocos/assets/resources/images/`
  - 约 690+ JPG 文件
  - 注意：可能需要使用 R2 云存储

### 9. 测试和验证

- [ ] 单元测试
- [ ] 集成测试
- [ ] 功能验证
- [ ] 性能测试
- [ ] 兼容性测试

---

## 📊 完成度统计

| 类别 | 完成 | 总计 | 百分比 |
|------|------|------|--------|
| 目录结构 | ✅ | 1 | 100% |
| 核心框架 | 🔄 1 | 5 | 20% |
| 类型定义 | ✅ 2 | 2 | 100% |
| 配置文件 | ✅ 1 | 3 | 33% |
| 系统模块 | ⏳ | 4 | 0% |
| 实体模块 | ⏳ | 4 | 0% |
| UI 模块 | ⏳ | 6 | 0% |
| 工具类 | ⏳ | 6 | 0% |
| 场景 | ⏳ | 1 | 0% |
| 预制体 | ⏳ | 7 | 0% |
| 资源迁移 | ⏳ | 3 | 0% |

**总进度**: 约 10% ✅

---

## 🎯 下一步计划

### 立即执行：
1. 创建 `WordManager.ts` - 单词管理器
2. 创建 `CannonSystem.ts` - 炮管系统
3. 创建 `ExplosionSystem.ts` - 爆炸系统
4. 创建 `WordEntity.ts` - 单词实体

### 短期目标：
1. 完成所有核心脚本框架
2. 创建基本场景和预制体
3. 实现基础游戏循环
4. 测试单词下降和输入功能

### 中期目标：
1. 迁移所有工具类
2. 实现炮管射击系统
3. 实现爆炸特效系统
4. 完成 UI 界面

### 长期目标：
1. 迁移所有资源
2. 完整功能测试
3. 性能优化
4. 打包发布

---

## 📝 注意事项

### 1. 从 JavaScript 到 TypeScript 的转换

#### 主要变化：
- 添加类型注解
- 使用接口（Interface）定义数据结构
- 使用枚举（Enum）定义状态
- 使用 `@ccclass` 和 `@property` 装饰器
- 使用 Cocos Creator 的组件系统

#### 示例对比：

**原 JavaScript (proj/):**
```javascript
class WordTetrisGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.score = 0;
        this.gameState = 'stopped';
    }
}
```

**新 TypeScript (proj-cocos/):**
```typescript
import { _decorator, Component, Canvas } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Canvas)
    canvas: Canvas = null;
    
    private score: number = 0;
    private gameState: GameState = GameState.Stopped;
    
    protected onLoad(): void {
        // 初始化
    }
}
```

### 2. 渲染方式的变化

#### 原方式（Canvas 2D）:
```javascript
this.ctx.fillStyle = '#0e1f3d';
this.ctx.fillRect(0, 0, width, height);
```

#### 新方式（Cocos Creator）:
```typescript
// 使用 Sprite 组件
const sprite = this.node.getComponent(Sprite);
sprite.color = new Color(14, 31, 61, 255);

// 或使用 Graphics 组件
const graphics = this.node.getComponent(Graphics);
graphics.fillColor = new Color(14, 31, 61, 255);
graphics.rect(0, 0, width, height);
graphics.fill();
```

### 3. 事件处理的变化

#### 原方式（DOM 事件）:
```javascript
document.addEventListener('keydown', (e) => {
    // 处理键盘事件
});
```

#### 新方式（Cocos Creator）:
```typescript
protected onLoad(): void {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
}

private onKeyDown(event: EventKeyboard): void {
    // 处理键盘事件
}
```

### 4. 资源加载的变化

#### 原方式（直接路径）:
```javascript
const img = new Image();
img.src = 'images/word/hello.jpg';
```

#### 新方式（Cocos Creator）:
```typescript
resources.load('images/word/hello', SpriteFrame, (err, spriteFrame) => {
    if (!err) {
        sprite.spriteFrame = spriteFrame;
    }
});
```

---

## 🔗 参考文档

- [Cocos Creator 官方文档](https://docs.cocos.com/creator/manual/zh/)
- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
- [原项目设计文档](../../word_tetris_game_design.md)
- [项目结构设计](03_项目结构设计.md)
- [UI 布局参考](Game-Layout-Reference.md)

---

**最后更新**: 2025-10-23

