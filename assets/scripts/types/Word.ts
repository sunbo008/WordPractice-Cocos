/**
 * 单词数据接口
 * 对应原 proj/src/core/WordTetrisGame.js 中的单词对象结构
 */
export interface WordData {
    /** 单词文本 */
    word: string;
    
    /** 音标 */
    phonetic: string;
    
    /** 中文释义 */
    meaning: string;
    
    /** 难度等级 (1-3) */
    difficulty: number;
    
    /** 缺失字母数量 */
    missingCount: number;
    
    /** 缺失字母的位置索引数组 */
    missingIndices: number[];
    
    /** 重音位置索引数组 */
    stressPositions: number[];
    
    /** 显示文本（带下划线的缺失字母） */
    display: string;
    
    /** 图片路径（可选） */
    image?: string;
}

/**
 * 下降中的单词实体
 * 对应游戏场景中的单词节点
 */
export interface FallingWord extends WordData {
    /** X 坐标 */
    x: number;
    
    /** Y 坐标 */
    y: number;
    
    /** 单词宽度 */
    width: number;
    
    /** 单词高度 */
    height: number;
    
    /** 下降速度 */
    speed: number;
    
    /** 玩家输入的文本 */
    userInput: string;
    
    /** 实时显示文本（带有输入反馈） */
    realTimeDisplay?: string;
    
    /** 输入是否正确 */
    inputCorrect?: boolean;
    
    /** 错误标记位置 */
    errorMarkers?: number[];
    
    /** 是否已完成输入 */
    isComplete: boolean;
    
    /** 是否被射击 */
    isShot?: boolean;
}

/**
 * 堆叠的单词
 * 对应堆叠区的单词
 */
export interface StackedWord extends WordData {
    /** X 坐标 */
    x: number;
    
    /** Y 坐标 */
    y: number;
    
    /** 单词宽度 */
    width: number;
    
    /** 单词高度 */
    height: number;
    
    /** 堆叠类型 */
    stackType: 'giveup' | 'failed';
    
    /** 玩家输入的文本（如果有） */
    userInput?: string;
}

/**
 * 词库配置接口
 */
export interface VocabularyConfig {
    /** 词库 ID */
    id: string;
    
    /** 词库名称 */
    name: string;
    
    /** 词库描述 */
    description: string;
    
    /** 等级 */
    level: string;
    
    /** 单词列表 */
    words: WordData[];
}

/**
 * 词库元数据
 */
export interface VocabularyMeta {
    /** 词库 ID */
    id: string;
    
    /** 词库名称 */
    name: string;
    
    /** 词库描述 */
    description: string;
    
    /** 等级 */
    level: string;
    
    /** 单词数量 */
    wordCount: number;
    
    /** 文件路径 */
    filePath: string;
}

