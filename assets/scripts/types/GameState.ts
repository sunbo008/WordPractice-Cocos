/**
 * 游戏状态枚举
 */
export enum GameState {
    /** 停止状态（未开始） */
    Stopped = 'stopped',
    
    /** 准备状态 */
    Ready = 'ready',
    
    /** 游戏中 */
    Playing = 'playing',
    
    /** 暂停 */
    Paused = 'paused',
    
    /** 等级提升 */
    LevelUp = 'levelup',
    
    /** 游戏结束 */
    GameOver = 'gameover',
    
    /** 复习模式 */
    Review = 'review'
}

/**
 * 游戏模式
 */
export enum GameMode {
    /** 休闲模式 */
    Casual = 'casual',
    
    /** 挑战模式 */
    Challenge = 'challenge'
}

/**
 * 缓冲区状态
 */
export enum BufferState {
    /** 空闲 */
    Idle = 'idle',
    
    /** 倒计时中 */
    Countdown = 'countdown',
    
    /** 准备就绪 */
    Ready = 'ready'
}

/**
 * 游戏统计数据
 */
export interface GameStats {
    /** 分数 */
    score: number;
    
    /** 等级 */
    level: number;
    
    /** 连击数 */
    combo: number;
    
    /** 目标分数 */
    targetScore: number;
    
    /** 游戏时间（秒） */
    gameTime: number;
    
    /** 错词数量 */
    vocabularyCount: number;
    
    /** 总单词数 */
    totalWords: number;
    
    /** 正确命中的单词数（去重） */
    hitWords: number;
    
    /** 下落的单词数（去重） */
    fallenWords: number;
    
    /** 命中率 (%) */
    hitPercentage: number;
    
    /** 覆盖率 (%) */
    coveragePercentage: number;
}

/**
 * 评分数据
 */
export interface ScoreData {
    /** 基础分 */
    baseScore: number;
    
    /** 速度奖励 */
    speedBonus: number;
    
    /** 连击奖励 */
    comboBonus: number;
    
    /** 射击奖励 */
    shootBonus: number;
    
    /** 总分 */
    totalScore: number;
}

/**
 * 缓冲区灯光状态
 */
export interface BufferLights {
    /** 红灯 */
    red: boolean;
    
    /** 黄灯 */
    yellow: boolean;
    
    /** 绿灯 */
    green: boolean;
}




