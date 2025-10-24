# Game.scene 场景搭建指南

> 本文档提供在 Cocos Creator 中创建主游戏场景的详细步骤

---

## 📋 准备工作

### 开始前确认

- ✅ 已安装 Cocos Creator 3.8.x
- ✅ 已打开 proj-cocos 项目
- ✅ 已阅读 [Game-Layout-Reference.md](./Game-Layout-Reference.md)

### 预计时间

- **首次创建**: 20-30 分钟
- **熟练后**: 10-15 分钟

---

## 🎯 场景整体结构

```
Game.scene
└── Canvas (根节点)
    ├── Camera (相机)
    │
    ├── Background (背景层)
    │   └── BgSprite
    │
    ├── GameLayer (游戏层 - zIndex: 0)
    │   ├── BufferZone (缓冲区)
    │   │   ├── TrafficLights (信号灯容器)
    │   │   │   ├── RedLight
    │   │   │   ├── YellowLight
    │   │   │   └── GreenLight
    │   │   └── NextWordLabel
    │   │
    │   ├── GameZone (游戏区域)
    │   │   ├── WordsContainer (单词容器)
    │   │   ├── StackZone (堆叠区)
    │   │   └── CannonPlaceholder (炮管占位)
    │   │
    │   ├── EffectsLayer (特效层 - zIndex: 10)
    │   │   ├── BulletsContainer
    │   │   ├── ExplosionsContainer
    │   │   └── ParticlesContainer
    │   │
    │   └── HighlightsLayer (高亮层 - zIndex: 20)
    │       ├── InputHighlight
    │       └── RedCrossMarks
    │
    └── UILayer (UI层 - zIndex: 100)
        ├── TopArea (顶部区域)
        │   ├── GameHeader (标题栏)
        │   ├── GameInfoBar (游戏信息栏)
        │   └── ExamStatsBar (考试统计栏)
        │
        ├── LeftPanel (左侧面板)
        │   ├── ImageShowcase (图片展示区)
        │   └── ControlPanel (控制面板)
        │
        └── Sidebar (右侧边栏)
            ├── BufferIndicator (缓冲区指示)
            ├── VocabularyBook (错词本)
            └── Instructions (游戏说明)
```

---

## 📝 详细创建步骤

### 第一步：创建场景文件

1. 在 Cocos Creator 中，找到 **资源管理器 (Assets)** 面板
2. 导航到 `assets/scenes/` 目录
3. 右键点击 `scenes` 文件夹
4. 选择 **创建 → Scene（场景）**
5. 命名为 `Game`
6. 双击打开场景

---

### 第二步：配置 Canvas 根节点

Canvas 节点是 Cocos Creator 自动创建的，我们需要配置它。

#### 2.1 选中 Canvas 节点

在 **层级管理器 (Hierarchy)** 中点击 Canvas 节点。

#### 2.2 配置 Canvas 组件

在 **属性检查器 (Inspector)** 中设置：

| 属性 | 值 | 说明 |
|-----|---|------|
| **ContentSize** | Width: 1920, Height: 1080 | 设计分辨率 |
| **FitHeight** | ✓ | 适配高度 |
| **FitWidth** | ✓ | 适配宽度 |

#### 2.3 添加 GameManager 组件

1. 在 Inspector 底部点击 **添加组件**
2. 选择 **自定义脚本 → GameManager**
3. 如果找不到，先保存场景，后续会添加

---

### 第三步：创建 Camera 节点

Camera 节点通常已存在，确认配置：

#### 3.1 选中 Camera 节点

#### 3.2 配置 Camera 组件

| 属性 | 值 | 说明 |
|-----|---|------|
| **ClearFlags** | SOLID_COLOR | 纯色背景 |
| **Color** | #0e1f3d (深蓝色) | 背景颜色 |
| **Visibility** | 所有层 | 渲染所有层 |

---

### 第四步：创建 Background（背景层）

#### 4.1 创建 Background 节点

1. 右键点击 Canvas
2. 选择 **创建 → 创建空节点**
3. 命名为 `Background`

#### 4.2 配置 Background 节点

**Transform 组件**：
| 属性 | 值 |
|-----|---|
| Position | (0, 0, 0) |
| ContentSize | (600, 500) |

**UITransform 组件**（添加）：
| 属性 | 值 |
|-----|---|
| Anchor | (0.5, 0.5) |

#### 4.3 创建 BgSprite 子节点

1. 右键 Background → **创建 → 创建渲染节点 → Sprite**
2. 命名为 `BgSprite`

**Sprite 组件**：
| 属性 | 值 |
|-----|---|
| Type | SIMPLE |
| Color | #0e1f3d |
| ContentSize | (600, 500) |

---

### 第五步：创建 GameLayer（游戏层）

#### 5.1 创建 GameLayer 节点

1. 右键 Canvas → **创建 → 创建空节点**
2. 命名为 `GameLayer`

#### 5.2 配置 GameLayer

**Transform**：
| 属性 | 值 |
|-----|---|
| Position | (0, 0, 0) |
| ContentSize | (600, 500) |

**UITransform**（添加）：
| 属性 | 值 |
|-----|---|
| Anchor | (0.5, 0.5) |

---

### 第六步：创建 BufferZone（缓冲区）

#### 6.1 创建 BufferZone 节点

1. 右键 GameLayer → **创建 → 创建空节点**
2. 命名为 `BufferZone`

#### 6.2 配置 BufferZone

**Transform**：
| 属性 | 值 |
|-----|---|
| Position | (0, 210, 0) | 顶部位置 |
| ContentSize | (600, 80) |

#### 6.3 添加背景色（可选）

添加 **Sprite** 组件：
| 属性 | 值 |
|-----|---|
| Color | rgba(255, 215, 0, 26) | 半透明金色 |

---

### 第七步：创建 TrafficLights（信号灯容器）

#### 7.1 创建 TrafficLights 节点

1. 右键 BufferZone → **创建 → 创建空节点**
2. 命名为 `TrafficLights`

#### 7.2 配置 TrafficLights

**Transform**：
| 属性 | 值 |
|-----|---|
| Position | (0, 20, 0) |
| ContentSize | (100, 30) |

#### 7.3 创建三个灯光节点

**RedLight**：
1. 右键 TrafficLights → **创建 → 创建渲染节点 → Sprite**
2. 命名为 `RedLight`
3. Position: (-40, 0, 0)
4. ContentSize: (20, 20)
5. 添加 **Graphics** 组件绘制圆形：
   - fillColor: #ff0000
   - circle(0, 0, 10)

**YellowLight**：
1. 同上，命名为 `YellowLight`
2. Position: (0, 0, 0)
3. fillColor: #ffff00

**GreenLight**：
1. 同上，命名为 `GreenLight`
2. Position: (40, 0, 0)
3. fillColor: #00ff00

---

### 第八步：创建 NextWordLabel（下一个单词显示）

#### 8.1 创建 NextWordLabel 节点

1. 右键 BufferZone → **创建 → 创建渲染节点 → Label**
2. 命名为 `NextWordLabel`

#### 8.2 配置 Label 组件

| 属性 | 值 |
|-----|---|
| String | "准备中..." |
| Font Size | 28 |
| Color | #ffffff |
| Horizontal Align | CENTER |
| Vertical Align | CENTER |
| Position | (0, -10, 0) |

---

### 第九步：创建 GameZone（游戏区域）

#### 9.1 创建 GameZone 节点

1. 右键 GameLayer → **创建 → 创建空节点**
2. 命名为 `GameZone`

#### 9.2 配置 GameZone

**Transform**：
| 属性 | 值 |
|-----|---|
| Position | (0, 0, 0) |
| ContentSize | (600, 320) |

---

### 第十步：创建容器节点

在 GameZone 下创建三个容器：

#### 10.1 WordsContainer（单词容器）

1. 右键 GameZone → **创建 → 创建空节点**
2. 命名为 `WordsContainer`
3. Position: (0, 0, 0)
4. 说明：用于动态生成单词节点

#### 10.2 StackZone（堆叠区）

1. 右键 GameZone → **创建 → 创建空节点**
2. 命名为 `StackZone`
3. Position: (0, -200, 0)
4. ContentSize: (600, 100)

#### 10.3 CannonPlaceholder（炮管占位）

1. 右键 GameZone → **创建 → 创建空节点**
2. 命名为 `CannonPlaceholder`
3. Position: (0, -230, 0)
4. 说明：炮管预制体的挂载点

---

### 第十一步：创建 EffectsLayer（特效层）

#### 11.1 创建 EffectsLayer 节点

1. 右键 GameLayer → **创建 → 创建空节点**
2. 命名为 `EffectsLayer`

#### 11.2 配置 zIndex

在 **UITransform** 组件中：
- 添加 **UITransform** 组件
- 设置自定义属性（通过脚本）：zIndex = 10

#### 11.3 创建容器

创建三个子容器：
- **BulletsContainer** - 炮弹容器
- **ExplosionsContainer** - 爆炸容器
- **ParticlesContainer** - 粒子容器

---

### 第十二步：创建 HighlightsLayer（高亮层）

#### 12.1 创建 HighlightsLayer 节点

1. 右键 GameLayer → **创建 → 创建空节点**
2. 命名为 `HighlightsLayer`
3. zIndex = 20（更高层级）

#### 12.2 创建容器

创建两个子容器：
- **InputHighlight** - 输入高亮容器
- **RedCrossMarks** - 红叉标记容器

---

### 第十三步：创建 UILayer（UI层）

#### 13.1 创建 UILayer 节点

1. 右键 Canvas → **创建 → 创建 UI 节点 → Widget**
2. 命名为 `UILayer`

#### 13.2 配置 Widget

| 属性 | 值 |
|-----|---|
| Align Mode | 所有边对齐 |
| Left/Right/Top/Bottom | 0 |

#### 13.3 设置 zIndex

在 UITransform 中设置 zIndex = 100

---

### 第十四步：创建 TopArea（顶部区域）

#### 14.1 创建 TopArea 节点

1. 右键 UILayer → **创建 → 创建 UI 节点 → Widget**
2. 命名为 `TopArea`

#### 14.2 配置 Widget

| 属性 | 值 |
|-----|---|
| Align | TOP |
| Top | 0 |
| ContentSize | (1920, 200) |

#### 14.3 创建子节点

**GameHeader**（标题栏）：
1. 右键 TopArea → **创建 → 创建渲染节点 → Label**
2. 命名为 `GameHeader`
3. String: "Word Tetris"
4. Font Size: 36
5. Position: (0, -30, 0)

**GameInfoBar**（游戏信息栏）：
1. 右键 TopArea → **创建 → 创建空节点**
2. 命名为 `GameInfoBar`
3. Position: (0, -80, 0)
4. 使用 **Layout** 组件：Horizontal

在 GameInfoBar 下创建 Label 节点：
- ScoreLabel: "分数: 0"
- LevelLabel: "等级: 1"
- TimeLabel: "时间: 00:00"
- ComboLabel: "连击: 0"

**ExamStatsBar**（考试统计栏）：
1. 类似 GameInfoBar
2. Position: (0, -130, 0)
3. 创建统计标签

---

### 第十五步：创建 LeftPanel（左侧面板）

#### 15.1 创建 LeftPanel 节点

1. 右键 UILayer → **创建 → 创建 UI 节点 → Widget**
2. 命名为 `LeftPanel`

#### 15.2 配置 Widget

| 属性 | 值 |
|-----|---|
| Align | LEFT + VERTICAL_CENTER |
| Left | 20 |
| ContentSize | (250, 800) |

#### 15.3 创建子组件

**ImageShowcase**（图片展示区）：
1. 创建空节点
2. 添加子节点：
   - WordImage (Sprite)
   - WordLabel (Label)
   - PhoneticLabel (Label)
   - MeaningLabel (Label)

**ControlPanel**（控制面板）：
1. 创建空节点
2. 添加按钮：
   - StartBtn
   - PauseBtn
   - ResetBtn
   - SettingsBtn

---

### 第十六步：创建 Sidebar（右侧边栏）

#### 16.1 创建 Sidebar 节点

1. 右键 UILayer → **创建 → 创建 UI 节点 → Widget**
2. 命名为 `Sidebar`

#### 16.2 配置 Widget

| 属性 | 值 |
|-----|---|
| Align | RIGHT + VERTICAL_CENTER |
| Right | 20 |
| ContentSize | (250, 800) |

#### 16.3 创建子组件

**BufferIndicator**（缓冲区指示）：
- 创建 Label 显示下一个单词

**VocabularyBook**（错词本）：
- 创建 ScrollView
- 添加 Content 容器

**Instructions**（游戏说明）：
- 创建 Label 显示规则

---

### 第十七步：关联 GameManager 组件

#### 17.1 选中 Canvas 节点

#### 17.2 配置 GameManager 属性

在 Inspector 中的 GameManager 组件：

| 属性 | 拖拽节点 |
|-----|---------|
| leftPanel | LeftPanel 节点 |
| gameCanvas | GameZone 节点 |
| sidebar | Sidebar 节点 |
| topBar | TopArea 节点 |
| examStats | ExamStatsBar 节点 |

---

### 第十八步：保存场景

1. 按 **Ctrl + S** 保存场景
2. 检查场景文件：`assets/scenes/Game.scene`
3. 确认生成了对应的 `.meta` 文件

---

## ✅ 验证清单

创建完成后，检查以下内容：

### 基础结构

- [ ] Canvas 节点存在
- [ ] Camera 配置正确
- [ ] GameLayer 和 UILayer 分离
- [ ] 所有容器节点已创建

### 游戏区域

- [ ] BufferZone 位置正确（顶部）
- [ ] TrafficLights 三个灯都存在
- [ ] GameZone 居中
- [ ] WordsContainer 准备就绪
- [ ] StackZone 在底部
- [ ] CannonPlaceholder 位置正确

### UI 区域

- [ ] TopArea 在顶部
- [ ] LeftPanel 在左侧
- [ ] Sidebar 在右侧
- [ ] 所有 Label 显示正常
- [ ] Widget 对齐正确

### 组件关联

- [ ] GameManager 已添加到 Canvas
- [ ] 所有引用都已拖拽关联
- [ ] 无红色警告

---

## 🎨 美化建议（可选）

### 1. 添加背景渐变

使用 Sprite 或 Graphics 组件创建渐变背景。

### 2. 添加分隔线

在区域之间添加细线分隔。

### 3. 添加阴影

为面板添加阴影效果，增强层次感。

### 4. 使用字体资源

导入自定义字体，替换默认字体。

---

## 🐛 常见问题

### Q1: 节点位置不对怎么办？

**A**: 检查：
1. Anchor Point 是否正确（默认 0.5, 0.5）
2. Position 是相对于父节点的
3. UITransform 的 ContentSize 是否设置

### Q2: UI 显示不全或超出屏幕？

**A**: 检查：
1. Canvas 的适配模式
2. Widget 的对齐设置
3. 设计分辨率是否合适

### Q3: 组件找不到？

**A**: 
1. 确保脚本已编译（保存后等待）
2. 检查脚本文件命名和类名是否一致
3. 重启 Cocos Creator

### Q4: 节点层级混乱？

**A**: 
1. 使用 zIndex 控制层级
2. 调整节点在层级管理器中的顺序
3. 检查 UITransform 组件

---

## 📚 后续步骤

场景创建完成后：

1. **测试场景** - 点击预览按钮，查看效果
2. **创建预制体** - Word.prefab, Cannon.prefab 等
3. **实现逻辑** - 完善 GameManager 和其他脚本
4. **添加资源** - 导入图片、音频等

---

## 🔗 相关文档

- [Game-Layout-Reference.md](./Game-Layout-Reference.md) - UI 布局参考
- [03_项目结构设计.md](./03_项目结构设计.md) - 项目结构
- [QUICK_START.md](./QUICK_START.md) - 快速开始

---

## 💡 提示

- 使用 **Ctrl + D** 快速复制节点
- 使用 **Ctrl + Z** 撤销操作
- 善用 **层级管理器** 的搜索功能
- 定期保存场景（Ctrl + S）

---

**场景搭建完成后，记得截图分享！** 📸

**最后更新**: 2025-10-23

