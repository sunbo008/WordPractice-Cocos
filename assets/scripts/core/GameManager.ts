import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 游戏状态枚举
 */
export enum GameState {
    Ready = 'ready',
    Playing = 'playing',
    Paused = 'paused',
    LevelUp = 'levelup',
    GameOver = 'gameover'
}

/**
 * 游戏主控制器
 * 负责游戏流程控制、状态管理、模块协调
 * 
 * 对应原 proj/src/core/WordTetrisGame.js 的功能
 */
@ccclass('GameManager')
export class GameManager extends Component {
    // ===== UI 引用 =====
    @property(Node)
    leftPanel: Node = null; // 左侧面板（图片展示区+控制区）
    
    @property(Node)
    gameCanvas: Node = null; // 游戏画布区域
    
    @property(Node)
    sidebar: Node = null; // 右侧边栏
    
    @property(Node)
    topBar: Node = null; // 顶部信息栏
    
    @property(Node)
    examStats: Node = null; // 考试统计栏
    
    // ===== 游戏管理器引用 =====
    // @property(WordManager)
    // wordManager: WordManager = null;
    
    // @property(ScoreManager)
    // scoreManager: ScoreManager = null;
    
    // @property(InputManager)
    // inputManager: InputManager = null;
    
    // @property(BufferManager)
    // bufferManager: BufferManager = null;
    
    // ===== 游戏状态 =====
    private gameState: GameState = GameState.Ready;
    private isPaused: boolean = false;
    private startTime: number = 0;
    private elapsedTime: number = 0;
    
    // ===== 统计数据 =====
    private score: number = 0;
    private level: number = 1;
    private combo: number = 0;
    private vocabularyCount: number = 0;
    
    /**
     * 生命周期：加载
     */
    protected onLoad(): void {
        console.log('🎮 GameManager 加载');
        this.initializeGame();
    }

    /**
     * 生命周期：启动
     */
    protected start(): void {
        console.log('🎮 GameManager 启动');
        this.setupEventListeners();
    }

    /**
     * 生命周期：更新
     */
    protected update(dt: number): void {
        if (this.gameState === GameState.Playing && !this.isPaused) {
            this.updateGameLogic(dt);
            this.updateTimer(dt);
        }
    }
    
    /**
     * 初始化游戏
     */
    private initializeGame(): void {
        console.log('🔧 初始化游戏系统...');
        
        // TODO: 初始化各个管理器
        // TODO: 加载配置
        // TODO: 加载词库
    }
    
    /**
     * 设置事件监听
     */
    private setupEventListeners(): void {
        console.log('📡 设置事件监听...');
        
        // TODO: 监听键盘事件
        // TODO: 监听按钮事件
    }
    
    /**
     * 更新游戏逻辑
     */
    private updateGameLogic(dt: number): void {
        // TODO: 更新单词位置
        // TODO: 检测碰撞
        // TODO: 更新炮管瞄准
    }
    
    /**
     * 更新计时器
     */
    private updateTimer(dt: number): void {
        this.elapsedTime += dt;
        // TODO: 更新 UI 显示
    }
    
    // ===== 公共接口 =====
    
    /**
     * 开始游戏
     */
    public startGame(): void {
        console.log('▶️ 开始游戏');
        this.gameState = GameState.Playing;
        this.startTime = Date.now();
        this.elapsedTime = 0;
        
        // TODO: 开始生成单词
        // TODO: 启用输入
    }
    
    /**
     * 暂停游戏
     */
    public pauseGame(): void {
        console.log('⏸️ 暂停游戏');
        this.isPaused = true;
        
        // TODO: 显示暂停界面
    }
    
    /**
     * 恢复游戏
     */
    public resumeGame(): void {
        console.log('▶️ 恢复游戏');
        this.isPaused = false;
    }
    
    /**
     * 重置游戏
     */
    public resetGame(): void {
        console.log('🔄 重置游戏');
        this.gameState = GameState.Ready;
        this.isPaused = false;
        this.score = 0;
        this.level = 1;
        this.combo = 0;
        this.vocabularyCount = 0;
        this.elapsedTime = 0;
        
        // TODO: 清除所有单词
        // TODO: 重置所有管理器
        // TODO: 重置 UI
    }
    
    /**
     * 等级提升
     */
    public levelUp(): void {
        console.log('🎉 等级提升！');
        this.level++;
        this.gameState = GameState.LevelUp;
        
        // TODO: 显示等级提升弹窗
        // TODO: 增加难度
    }
    
    /**
     * 游戏结束
     */
    public gameOver(): void {
        console.log('❌ 游戏结束');
        this.gameState = GameState.GameOver;
        
        // TODO: 显示游戏结束弹窗
        // TODO: 保存统计数据
    }
    
    /**
     * 添加分数
     */
    public addScore(points: number): void {
        this.score += points;
        // TODO: 更新 UI
        // TODO: 检查是否升级
    }
    
    /**
     * 增加连击
     */
    public incrementCombo(): void {
        this.combo++;
        // TODO: 更新 UI
    }
    
    /**
     * 重置连击
     */
    public resetCombo(): void {
        this.combo = 0;
        // TODO: 更新 UI
    }
    
    /**
     * 添加错词
     */
    public addMissedWord(word: string): void {
        this.vocabularyCount++;
        // TODO: 更新错词本
        // TODO: 更新 UI
    }
}




