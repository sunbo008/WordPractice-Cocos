/**
 * 游戏配置
 * 对应原 proj/src/core/WordTetrisGame.js 中的配置常量
 */
export class GameConfig {
    // ===== 游戏区域尺寸 =====
    static readonly CANVAS_WIDTH = 600;
    static readonly CANVAS_HEIGHT = 500;
    
    // ===== 单词下降速度 =====
    static readonly BASE_FALL_SPEED = 0.2; // 像素/帧（60fps下约12像素/秒）
    static readonly SPEED_INCREMENT = 0.05; // 每级增加的速度
    static readonly MAX_FALL_SPEED = 1.0; // 最大下降速度
    
    // ===== 分数配置 =====
    static readonly SCORE_PER_LETTER = 1; // 每个字母基础分
    static readonly SHOOT_BONUS = 2; // 射击奖励（额外）
    static readonly SPEED_BONUS_MULTIPLIER = 1.5; // 速度奖励倍数
    static readonly COMBO_BONUS = 1; // 连击奖励（每次连击+1分）
    
    // ===== 等级配置 =====
    static readonly LEVEL_THRESHOLDS = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
    
    // ===== 缓冲区配置 =====
    static readonly BUFFER_COUNTDOWN_TIME = 3000; // 毫秒（3秒）
    static readonly LIGHT_DURATION = 1000; // 每个灯持续时间（1秒）
    static readonly BUFFER_HEIGHT = 80; // 缓冲区高度
    
    // ===== 堆叠区配置 =====
    static readonly STACK_ZONE_HEIGHT = 100; // 堆叠区高度
    static readonly MAX_STACK_HEIGHT = 80; // 最大堆叠高度（游戏结束线）
    
    // ===== 单词配置 =====
    static readonly WORD_PADDING = 10; // 单词内边距
    static readonly LETTER_SPACING = 8; // 字母间距
    static readonly WORD_BORDER_WIDTH = 2; // 单词边框宽度
    static readonly WORD_BORDER_COLOR = '#FFD700'; // 金色边框
    
    // ===== 炮管配置 =====
    static readonly CANNON_Y = 480; // 炮管 Y 坐标
    static readonly CANNON_BASE_WIDTH = 80; // 炮台基座宽度
    static readonly CANNON_BASE_HEIGHT = 40; // 炮台基座高度
    static readonly CANNON_BARREL_LENGTH = 60; // 炮管长度
    static readonly CANNON_BARREL_WIDTH = 20; // 炮管宽度
    static readonly CANNON_AIM_SPEED = 0.1; // 炮管瞄准速度（插值系数）
    static readonly CANNON_RECOIL_DISTANCE = 8; // 后坐力距离
    static readonly CANNON_RECOIL_RECOVERY = 0.3; // 后坐力恢复速度
    
    // ===== 炮弹配置 =====
    static readonly BULLET_SPEED = 15; // 炮弹速度（像素/帧）
    static readonly BULLET_RADIUS = 8; // 炮弹半径
    static readonly BULLET_TRAIL_LENGTH = 30; // 火焰尾迹长度
    
    // ===== 爆炸配置 =====
    static readonly EXPLOSION_PARTICLE_COUNT = 30; // 粒子数量
    static readonly EXPLOSION_PARTICLE_SPEED = 5; // 粒子初始速度
    static readonly EXPLOSION_PARTICLE_GRAVITY = 0.3; // 重力加速度
    static readonly EXPLOSION_PARTICLE_DECAY = 0.03; // 粒子衰减速度
    static readonly EXPLOSION_PARTICLE_COLORS = [
        '#FF6B6B', // 红色
        '#4ECDC4', // 青色
        '#45B7D1', // 蓝色
        '#FFA07A', // 浅橙色
        '#98D8C8', // 薄荷绿
        '#FFD93D'  // 黄色
    ];
    
    // ===== 中文翻译爆炸动画配置 =====
    static readonly MEANING_EXPLOSION_SCALE_FROM = 0.5; // 初始缩放
    static readonly MEANING_EXPLOSION_SCALE_TO = 2.5; // 最大缩放
    static readonly MEANING_EXPLOSION_DURATION = 1500; // 持续时间（毫秒）
    static readonly MEANING_EXPLOSION_FADE_START = 500; // 开始淡出时间
    
    // ===== 红叉标记配置 =====
    static readonly RED_CROSS_SIZE = 20; // 红叉大小
    static readonly RED_CROSS_BLINK_INTERVAL = 100; // 闪烁间隔（毫秒，10Hz）
    static readonly RED_CROSS_DURATION = 300; // 红叉显示时长
    
    // ===== 输入高亮配置 =====
    static readonly HIGHLIGHT_COLOR_CORRECT = '#90EE90'; // 正确输入 - 浅绿色
    static readonly HIGHLIGHT_COLOR_WRONG = '#FFB6C1'; // 错误输入 - 浅红色
    
    // ===== 分数飞行动画配置 =====
    static readonly SCORE_FLY_DISTANCE = 120; // 上升距离
    static readonly SCORE_FLY_DURATION = 1000; // 持续时间
    static readonly SCORE_FLY_SCALE_MAX = 1.2; // 最大缩放
    static readonly SCORE_FLY_SCALE_MIN = 0.8; // 最小缩放
    
    // ===== 引信配置 =====
    static readonly FUSE_LENGTH = 40; // 引信长度
    static readonly FUSE_SWING_AMPLITUDE = 0.2; // 摆动幅度（弧度）
    static readonly FUSE_SWING_FREQUENCY = 2.0; // 摆动频率
    static readonly FUSE_PARTICLE_RATE = 5; // 粒子生成速率（每秒）
    
    // ===== 音频配置 =====
    static readonly BGM_VOLUME = 0.3; // 背景音乐音量
    static readonly SFX_VOLUME = 0.5; // 音效音量
    static readonly TTS_VOLUME = 1.0; // TTS 音量
    
    // ===== 词库配置 =====
    static readonly DEFAULT_LIBRARIES = [
        'day01', 'day02', 'day03', 'day04', 'day05',
        'day06', 'day07', 'day08', 'day09', 'day10'
    ];
    static readonly WORDS_BASE_PATH = 'resources/words/'; // 词库基础路径
    
    // ===== R2 配置 =====
    static readonly R2_BUCKET_URL = 'https://pub-38e49db1551f40e08da8dc41dc8cfd8e.r2.dev';
    static readonly R2_AUDIO_PATH = 'audio/';
    static readonly R2_IMAGE_PATH = 'images/';
    
    // ===== 调试配置 =====
    static readonly DEBUG_MODE = true; // 开启调试模式
    static readonly SHOW_COLLISION_BOXES = false; // 显示碰撞框
    static readonly LOG_LEVEL = 'info'; // 日志级别：debug, info, warn, error
}




