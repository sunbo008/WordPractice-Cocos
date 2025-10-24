# 常见问题 FAQ

## 📋 本文档内容

- 环境配置问题
- 开发过程问题
- 运行时错误
- 性能优化问题
- 部署发布问题

---

## 1️⃣ 环境配置问题

### Q1: Cocos Creator 无法启动？

**症状**：双击 Cocos Creator 图标没有反应，或启动后立即崩溃。

**可能原因**：
1. 系统不兼容
2. 缺少运行库
3. 防火墙拦截
4. 安装文件损坏

**解决方案**：

```bash
# 1. 检查系统要求
操作系统：Windows 10 (64位) 或更高
内存：至少 8GB
磁盘空间：至少 5GB

# 2. 安装 Visual C++ 运行库
下载并安装：
- Visual C++ 2015-2022 Redistributable (x64)
https://aka.ms/vs/17/release/vc_redist.x64.exe

# 3. 添加防火墙白名单
允许 Cocos Creator 程序通过防火墙

# 4. 重新安装
完全卸载后重新安装到不同目录
```

---

### Q2: TypeScript 编译报错？

**症状**：保存 TS 文件时提示编译错误。

**常见错误**：

#### 错误 1：找不到模块
```typescript
// ❌ 错误
import { Component } from 'cc';
// 提示：找不到模块 'cc'

// ✅ 解决方案
// 1. 检查 tsconfig.json 是否正确
// 2. 重启 Cocos Creator
// 3. 清理缓存：菜单 → 开发者 → 编译重新编译
```

#### 错误 2：装饰器语法错误
```typescript
// ❌ 错误
@ccclass
export class GameManager extends Component { }
// 提示：装饰器语法错误

// ✅ 解决方案
import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component { }
```

#### 错误 3：类型不匹配
```typescript
// ❌ 错误
node.position = [0, 0, 0];
// 提示：类型 number[] 不能赋值给 Vec3

// ✅ 解决方案
import { Vec3 } from 'cc';
node.position = new Vec3(0, 0, 0);
// 或
node.setPosition(0, 0, 0);
```

---

### Q3: VS Code 没有代码提示？

**解决方案**：

1. **安装 Cocos Creator Extension**
   ```
   VS Code 扩展市场搜索：
   "Cocos Creator Extension"
   ```

2. **配置 TypeScript SDK**
   ```json
   // .vscode/settings.json
   {
     "typescript.tsdk": "node_modules/typescript/lib"
   }
   ```

3. **重新加载窗口**
   ```
   Ctrl+Shift+P → "Reload Window"
   ```

---

## 2️⃣ 开发过程问题

### Q4: 节点无法显示？

**检查清单**：

```typescript
// 1. 节点是否激活？
node.active = true;

// 2. 节点是否在视野内？
console.log(node.getWorldPosition());

// 3. 节点是否有可见组件？
const sprite = node.getComponent(Sprite);
console.log('Sprite:', sprite);

// 4. Sprite 是否有 SpriteFrame？
console.log('SpriteFrame:', sprite.spriteFrame);

// 5. 层级是否正确？
console.log('z-index:', node.getSiblingIndex());

// 6. 透明度是否为0？
console.log('Opacity:', node.getComponent(UIOpacity)?.opacity);
```

---

### Q5: 资源加载失败？

**常见错误**：

#### 错误 1：路径错误
```typescript
// ❌ 错误：包含 resources 目录名
resources.load('resources/words/day01', JsonAsset);

// ✅ 正确：从 resources 目录下的相对路径
resources.load('words/day01', JsonAsset);

// ❌ 错误：包含文件扩展名
resources.load('words/day01.json', JsonAsset);

// ✅ 正确：不包含扩展名
resources.load('words/day01', JsonAsset);
```

#### 错误 2：资源类型错误
```typescript
// ❌ 错误：类型不匹配
resources.load('images/hello', JsonAsset);

// ✅ 正确：使用正确的类型
resources.load('images/hello', SpriteFrame);
```

#### 错误 3：资源不在 resources 目录
```typescript
// ❌ 错误：资源在 assets 根目录
resources.load('config', JsonAsset); // 无法加载

// ✅ 解决方案：移动到 resources 目录
// assets/config.json → assets/resources/config.json
```

---

### Q6: 事件监听不生效？

**检查清单**：

```typescript
// 1. 事件名称是否正确？
node.on('touch-start', callback); // ❌ 错误
node.on(Node.EventType.TOUCH_START, callback); // ✅ 正确

// 2. 监听器是否绑定 this？
node.on('custom-event', this.onEvent); // ❌ 可能丢失 this
node.on('custom-event', this.onEvent, this); // ✅ 正确

// 3. 事件发送节点和监听节点是否一致？
nodeA.emit('event'); // 发送
nodeB.on('event', callback); // 监听 - ❌ 无法接收

// 4. 组件是否被禁用？
component.enabled = true; // 确保启用

// 5. 节点是否被销毁？
if (node.isValid) {
    node.on('event', callback);
}
```

---

### Q7: 动画不流畅？

**优化方案**：

```typescript
// 1. 使用 deltaTime 而不是固定值
update(deltaTime: number) {
    // ❌ 不好：帧率波动时速度不稳定
    this.node.position.y += 1;
    
    // ✅ 好：与帧率无关
    this.node.position.y += this.speed * deltaTime * 60;
}

// 2. 使用 Tween 而不是手动更新
// ❌ 不好：每帧手动计算
update(dt) {
    this.alpha += 0.01;
    node.opacity = this.alpha * 255;
}

// ✅ 好：使用 Tween
tween(uiOpacity)
    .to(1, { opacity: 255 })
    .start();

// 3. 减少粒子数量
particleSystem.totalParticles = 50; // 从 200 减少到 50

// 4. 使用对象池
// ❌ 不好：频繁创建销毁
const bullet = instantiate(this.bulletPrefab);
bullet.destroy();

// ✅ 好：使用对象池
const bullet = this.pool.get();
this.pool.put(bullet);
```

---

## 3️⃣ 运行时错误

### Q8: Cannot read property 'xxx' of null?

**原因**：访问了未初始化的属性或组件。

**解决方案**：

```typescript
// 1. 检查属性是否拖拽赋值
@property(Node)
targetNode: Node = null;

protected start() {
    if (!this.targetNode) {
        console.error('targetNode 未设置！');
        return;
    }
    // 使用 targetNode
}

// 2. 检查组件是否存在
const sprite = node.getComponent(Sprite);
if (sprite) {
    sprite.color = Color.RED;
}

// 3. 使用可选链
const name = node?.getChildByName('Child')?.name;

// 4. 延迟访问（确保初始化完成）
protected start() {
    this.scheduleOnce(() => {
        // 在这里访问其他组件
    }, 0);
}
```

---

### Q9: Maximum call stack size exceeded?

**原因**：递归调用过深或无限循环。

**常见情况**：

```typescript
// ❌ 错误：无限递归
public setValue(value: number) {
    this.setValue(value); // 调用自己！
}

// ✅ 正确：
private _value: number = 0;

public setValue(value: number) {
    this._value = value;
}

// ❌ 错误：相互调用
classA.methodA() {
    classB.methodB();
}
classB.methodB() {
    classA.methodA();
}

// ✅ 正确：添加终止条件
classA.methodA(depth: number) {
    if (depth > 10) return; // 终止条件
    classB.methodB(depth + 1);
}
```

---

### Q10: 音频无法播放？

**问题排查**：

```typescript
// 1. 检查音频文件是否存在
resources.load('audio/test', AudioClip, (err, clip) => {
    if (err) {
        console.error('音频加载失败:', err);
        return;
    }
    console.log('音频加载成功:', clip);
});

// 2. 检查是否在用户交互后播放（移动端限制）
button.node.on(Button.EventType.CLICK, () => {
    // ✅ 在点击事件中播放
    audioEngine.play(clip, false, 1.0);
}, this);

// ❌ 不在用户交互中播放（可能被阻止）
protected start() {
    audioEngine.play(clip, false, 1.0);
}

// 3. 检查音量是否为0
const audioID = audioEngine.play(clip, false, 1.0);
console.log('Volume:', audioEngine.getVolume(audioID));

// 4. 检查音频格式
// 推荐：MP3（兼容性最好）
// 避免：WAV（文件太大）、OGG（兼容性差）
```

---

## 4️⃣ 性能优化问题

### Q11: 游戏卡顿，帧率低？

**性能分析**：

```typescript
// 1. 开启性能统计
if (DEBUG) {
    profiler.showStats();
}

// 2. 查看 Draw Call
// 菜单 → 开发者 → 开发者工具 → Profiler

// 3. 查看节点数量
console.log('节点总数:', director.getScene().children.length);

// 4. 查看内存使用
console.log('内存:', (performance.memory.usedJSHeapSize / 1048576).toFixed(2) + ' MB');
```

**优化方案**：

```typescript
// 1. 减少节点层级
// ❌ 不好：嵌套过深
Parent
└── Container1
    └── Container2
        └── Container3
            └── Sprite

// ✅ 好：扁平化
Parent
├── Sprite1
├── Sprite2
└── Sprite3

// 2. 使用对象池
private bulletPool: NodePool = new NodePool();

// 3. 合并 Sprite（使用 Atlas）
// 在编辑器中：
// 资源管理器 → 右键图片文件夹 → 创建 → Auto Atlas

// 4. 减少粒子数量
particleSystem.totalParticles = 30; // 从 100 减少

// 5. 禁用不可见节点
if (node.position.y < -1000) {
    node.active = false;
}
```

---

### Q12: 内存持续增长？

**内存泄漏排查**：

```typescript
// 1. 及时释放资源
resources.release('path/to/asset');

// 2. 清理事件监听
protected onDestroy() {
    node.off('custom-event', this.callback, this);
    systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
}

// 3. 清空定时器
protected onDestroy() {
    this.unscheduleAllCallbacks();
}

// 4. 清理对象池
this.bulletPool.clear();

// 5. 释放 Tween
tween(node).stop();

// 6. 清理 Blob URL
URL.revokeObjectURL(blobUrl);
```

---

## 5️⃣ 部署发布问题

### Q13: Web 版本构建失败？

**检查清单**：

```bash
# 1. 检查 Node.js 版本
node -v  # 应该 v16+ 或 v18+

# 2. 清理缓存
菜单 → 开发者 → 清除缓存

# 3. 清理构建目录
删除 build/ 目录

# 4. 重新构建
菜单 → 项目 → 构建发布
```

---

### Q14: 构建后资源加载失败？

**常见原因**：

```javascript
// 1. 路径大小写问题
// ❌ 错误：开发时是 Hello.png，构建后找不到 hello.png
resources.load('images/hello');

// ✅ 解决：统一使用小写
resources.load('images/hello');

// 2. 资源不在 resources 目录
// ❌ 错误：资源在 assets 根目录
// ✅ 解决：移动到 assets/resources/

// 3. 使用了绝对路径
// ❌ 错误：
const url = 'http://localhost:3000/assets/...';

// ✅ 解决：使用相对路径或配置
const url = this.getBaseURL() + '/assets/...';
```

---

### Q15: 移动端触摸不响应？

**解决方案**：

```typescript
// 1. 添加 Widget 组件对齐
const widget = node.addComponent(Widget);
widget.isAlignTop = true;
widget.isAlignLeft = true;

// 2. 设置节点大小
node.setContentSize(200, 100);

// 3. 添加 Button 组件（自动处理触摸）
const button = node.addComponent(Button);
button.node.on(Button.EventType.CLICK, this.onClick, this);

// 4. 手动添加触摸事件
node.on(Node.EventType.TOUCH_START, (event) => {
    console.log('触摸位置:', event.getLocation());
}, this);

// 5. 检查节点是否接收触摸
// 确保没有其他节点遮挡
```

---

## 6️⃣ Cocos 特有问题

### Q16: 坐标系转换问题？

**坐标系说明**：

```typescript
// 1. 本地坐标 vs 世界坐标
const localPos = node.position; // 相对父节点
const worldPos = node.getWorldPosition(); // 相对场景

// 2. 锚点影响位置
node.getComponent(UITransform).anchorX = 0.5; // 中心点（默认）
node.getComponent(UITransform).anchorX = 0;   // 左边
node.getComponent(UITransform).anchorX = 1;   // 右边

// 3. 坐标转换
// 世界坐标 → 本地坐标
const localPos = node.parent.getComponent(UITransform)
    .convertToNodeSpaceAR(worldPos);

// 本地坐标 → 世界坐标
const worldPos = node.parent.getComponent(UITransform)
    .convertToWorldSpaceAR(localPos);

// 4. 屏幕坐标 → 世界坐标
const camera = Camera.main;
const worldPos = camera.screenToWorld(new Vec3(screenX, screenY, 0));
```

---

### Q17: Widget 对齐不生效？

**解决方案**：

```typescript
// 1. 确保父节点有 UITransform 组件
parent.addComponent(UITransform);

// 2. 设置 Widget 对齐
const widget = node.addComponent(Widget);
widget.isAlignTop = true;
widget.top = 10;
widget.updateAlignment();

// 3. 立即更新对齐
widget.updateAlignment();

// 4. 检查父节点大小
console.log('父节点大小:', parent.getComponent(UITransform).contentSize);
```

---

### Q18: Layout 布局错乱？

**解决方案**：

```typescript
// 1. 设置 Layout 属性
const layout = node.getComponent(Layout);
layout.type = Layout.Type.VERTICAL;
layout.spacingY = 10;

// 2. 添加 LayoutElement（可选，用于控制子节点大小）
const child = node.children[0];
const layoutElement = child.addComponent(LayoutElement);
layoutElement.preferredHeight = 50;

// 3. 强制更新布局
layout.updateLayout();

// 4. 延迟更新（确保所有子节点都添加完成）
this.scheduleOnce(() => {
    layout.updateLayout();
}, 0);
```

---

## 7️⃣ 调试技巧

### 实用调试方法

```typescript
// 1. 节点可视化调试
// 在 Scene 视图中选中节点，可以看到边界框

// 2. 日志分组
console.group('GameManager');
console.log('初始化');
console.log('状态:', this.state);
console.groupEnd();

// 3. 条件日志
if (DEBUG) {
    console.log('调试信息');
}

// 4. 断点调试
// 在 Chrome DevTools 中设置断点
debugger;

// 5. 性能监控
console.time('操作名称');
// 执行操作
console.timeEnd('操作名称');

// 6. 内存快照
// Chrome DevTools → Memory → Take Snapshot
```

---

## 8️⃣ 快速参考

### 常用检查命令

```typescript
// 检查节点状态
console.log('Active:', node.active);
console.log('Position:', node.position);
console.log('Scale:', node.scale);
console.log('Children:', node.children.length);

// 检查组件
console.log('Components:', node.components.map(c => c.constructor.name));

// 检查资源
resources.getDirWithPath('words', (err, dir) => {
    console.log('单词库文件:', dir.map(asset => asset.path));
});

// 检查性能
console.log('FPS:', director.getAnimationInterval());
console.log('Nodes:', director.getScene()._renderingNode.children.length);
```

---

## 📞 寻求帮助

### 官方资源

- [Cocos Creator 论坛](https://forum.cocos.org/)
- [Cocos Creator API 文档](https://docs.cocos.com/creator/3.8/api/zh/)
- [Cocos Creator 手册](https://docs.cocos.com/creator/3.8/manual/zh/)

### 社区资源

- Stack Overflow (标签: cocos-creator)
- GitHub Issues
- Cocos 中文社区

---

**常见问题 FAQ 完成！** ✅

**全部 10 个迁移文档已完成！** 🎉

返回：[文档目录](./README.md)




