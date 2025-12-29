import { ExperienceItem, PortfolioItem, VideoItem, SkillItem, SoftwareTool } from './types';

export const PERSONAL_INFO = {
  name: "胡在鹏",
  role: "摄影 / 摄像师 / 短视频运营",
  email: "inghhzp@icloud.com",
  phone: "18537635216",
  location: "郑州",
  experience_years: "4年",
  intro: "拥有4年工作经验的视觉创作者。精通全国连锁品牌短视频全流程，擅长商业宣传片、婚礼纪实及活动摄影。具备扎实的后期剪辑能力与敏锐的镜头美学。",
  qrCode: "./wechat-qr.jpg" // Ensure you place the image named 'wechat-qr.jpg' in your public folder/root
};

export const SKILLS: SkillItem[] = [
  { name: "短视频全流程策划", level: 95 },
  { name: "商业摄影与布光", level: 90 },
  { name: "后期剪辑与调色", level: 92 },
  { name: "数据运营与分析", level: 85 },
];

export const SOFTWARE: SoftwareTool[] = [
  { name: "Premiere Pro", icon: "Pr" },
  { name: "Final Cut Pro", icon: "Fc" },
  { name: "After Effects", icon: "Ae" },
  { name: "Photoshop", icon: "Ps" },
  { name: "Lightroom", icon: "Lr" },
  { name: "剪映", icon: "Jy" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "1",
    company: "河南瞧享美容服务有限公司",
    role: "短视频运营主管",
    period: "2024.02 - 至今",
    description: [
      "**全案运营管理**：主导公司抖音、小红书等新媒体矩阵账号的从0到1搭建与运营，累计粉丝增长超过10W+。",
      "**内容策略制定**：根据品牌定位制定季度与月度内容规划，精准把控选题方向，确保内容产出与品牌调性高度一致。",
      "**数据驱动优化**：建立数据监测体系，每日复盘播放量、完播率及转化数据，通过A/B测试优化脚本结构，将爆款率提升30%。",
      "**团队协作与SOP**：独立组建视频拍摄小组，制定标准化的拍摄与剪辑SOP（标准作业程序），将单条视频制作周期缩短40%。",
      "**直播技术支持**：负责直播间的高级布光搭建与多机位推流设置，保障每场直播画面的专业质感与传输稳定性。"
    ],
    achievements: [
      "运营期间打造出3条百万播放量的现象级爆款视频，直接带动线下门店咨询量提升200%。",
      "成功搭建企业内部短视频知识库，降低了新员工培训成本。"
    ]
  },
  {
    id: "2",
    company: "郑州摩声传媒有限公司",
    role: "资深摄影师 / 剪辑师",
    period: "2022.11 - 2024.02",
    description: [
      "**高端婚礼纪实**：负责高端定制婚礼的全程跟拍与快剪（SDE），擅长捕捉情感流露的瞬间，交付成片满意度100%。",
      "**商业TVC制作**：参与多家本地知名企业的企业宣传片拍摄，负责分镜脚本设计、现场灯光指导及后期特效合成。",
      "**大型活动直播**：主导千人级商业峰会的照片直播与云摄影服务，实现拍摄后5分钟内修图上传，保障活动实时宣发。",
      "**后期色彩管理**：建立公司内部的色彩管理流程，统一不同机型的色彩科学，提升了团队整体成片的视觉统一性。"
    ],
    achievements: [
      "年度优秀员工，累计服务超过100对新人及20+企业客户，无一差评。",
      "通过优化剪辑工作流，将婚礼预告片的交付时间从48小时压缩至24小时以内。"
    ]
  },
  {
    id: "3",
    company: "郑州中酒银河有限公司",
    role: "视频拍摄与制作",
    period: "2022.05 - 2022.08",
    description: [
      "**产品短视频拍摄**：负责酒类产品的创意短视频拍摄，通过独特的布光技巧展现产品质感。",
      "**脚本创意落地**：与文案配合，将营销卖点转化为镜头语言，独立完成从分镜绘制到成片交付的全过程。",
      "**账号基础运营**：协助部门负责人进行账号的日常维护与评论区互动，收集用户反馈以反哺内容创作。"
    ]
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  // --- Commercial Photography (10 items) ---
  {
    id: "p_c_1",
    title: "品牌宣传片 - 城市光影",
    category: "Commercial",
    imageUrl: "https://picsum.photos/800/600?random=1",
    images: ["https://picsum.photos/1200/800?random=1", "https://picsum.photos/1200/800?random=101", "https://picsum.photos/800/1200?random=102"],
    client: "郑州城市规划局",
    date: "2023.10",
    description: "通过延时摄影与航拍结合，展现郑州CBD区域从清晨到日暮的光影变化，体现城市的现代化与活力。"
  },
  {
    id: "p_c_2",
    title: "产品静物 - 威士忌细节",
    category: "Commercial",
    imageUrl: "https://picsum.photos/800/800?random=3",
    images: ["https://picsum.photos/800/800?random=3", "https://picsum.photos/1000/1000?random=302"],
    client: "某知名酒类品牌",
    date: "2022.12",
    description: "商业静物摄影。使用三灯布光法，勾勒玻璃瓶身的轮廓光，展现产品的动感与质感。"
  },
  {
    id: "p_c_3",
    title: "大型活动记录 - 互联网峰会",
    category: "Commercial",
    imageUrl: "https://picsum.photos/800/500?random=5",
    images: ["https://picsum.photos/1200/800?random=5", "https://picsum.photos/1200/800?random=501"],
    client: "腾讯云",
    date: "2023.11",
    description: "千人规模的技术峰会现场记录。需要在复杂的现场光线下，快速捕捉演讲者神态。"
  },
  {
    id: "p_c_4",
    title: "高端酒店 - 空间摄影",
    category: "Commercial",
    imageUrl: "https://picsum.photos/800/600?random=40",
    images: ["https://picsum.photos/1200/800?random=40", "https://picsum.photos/800/1200?random=41"],
    client: "希尔顿酒店",
    date: "2023.09",
    description: "建筑与空间摄影，利用广角镜头和环境光平衡，展现酒店大堂的奢华与客房的温馨。"
  },
  {
    id: "p_c_5",
    title: "智能家居 - 生活美学",
    category: "Commercial",
    imageUrl: "https://picsum.photos/800/800?random=42",
    images: ["https://picsum.photos/1000/1000?random=42", "https://picsum.photos/800/600?random=43"],
    client: "小米生态链",
    date: "2023.07",
    description: "场景化产品摄影，将科技产品融入家居环境，营造舒适便捷的生活方式。"
  },
  {
    id: "p_c_6",
    title: "有机食品 - 自然之味",
    category: "Commercial",
    imageUrl: "https://picsum.photos/800/600?random=44",
    images: ["https://picsum.photos/1200/800?random=44", "https://picsum.photos/800/1200?random=45"],
    client: "好想你枣业",
    date: "2023.05",
    description: "美食摄影，通过自然光和色彩搭配，突出食材的新鲜与诱人色泽。"
  },
  {
    id: "p_c_7",
    title: "运动品牌 - 能量爆发",
    category: "Commercial",
    imageUrl: "https://picsum.photos/600/800?random=46",
    images: ["https://picsum.photos/800/1200?random=46", "https://picsum.photos/1200/800?random=47"],
    client: "安踏体育",
    date: "2023.03",
    description: "捕捉模特运动时的动态瞬间，展现产品的机能性与运动的张力。"
  },
  {
    id: "p_c_8",
    title: "时尚画册 - 春夏系列",
    category: "Commercial",
    imageUrl: "https://picsum.photos/600/900?random=48",
    images: ["https://picsum.photos/800/1200?random=48", "https://picsum.photos/800/1200?random=49"],
    client: "独立设计师品牌",
    date: "2023.02",
    description: "影棚时尚大片，通过硬朗的布光和独特的构图，诠释服装的设计理念。"
  },
  {
    id: "p_c_9",
    title: "地产样板间 - 现代简约",
    category: "Commercial",
    imageUrl: "https://picsum.photos/800/600?random=50",
    images: ["https://picsum.photos/1200/800?random=50", "https://picsum.photos/1200/800?random=51"],
    client: "建业地产",
    date: "2022.11",
    description: "地产摄影，精准控制垂直线条，还原空间透视，展现样板间的布局与采光。"
  },
  {
    id: "p_c_10",
    title: "企业形象 - 团队风采",
    category: "Commercial",
    imageUrl: "https://picsum.photos/800/500?random=52",
    images: ["https://picsum.photos/1200/800?random=52", "https://picsum.photos/1200/800?random=53"],
    client: "宇通客车",
    date: "2022.09",
    description: "企业团体照与工作场景抓拍，展现团队的专业素养与凝聚力。"
  },

  // --- Wedding Photography (10 items) ---
  {
    id: "p_w_1",
    title: "高端婚礼纪实 - 永恒瞬间",
    category: "Wedding",
    imageUrl: "https://picsum.photos/600/800?random=2",
    images: ["https://picsum.photos/800/1200?random=2", "https://picsum.photos/1200/800?random=201"],
    client: "私人客户",
    date: "2023.05",
    description: "户外草坪婚礼，采用自然光拍摄风格，保留胶片质感，营造温馨浪漫的氛围。"
  },
  {
    id: "p_w_2",
    title: "婚礼微电影 - 爱的誓言",
    category: "Wedding",
    imageUrl: "https://picsum.photos/800/600?random=6",
    images: ["https://picsum.photos/1200/800?random=6", "https://picsum.photos/1200/800?random=601"],
    client: "私人客户",
    date: "2024.01",
    description: "结合访谈与纪实画面的婚礼记录，讲述动人的爱情故事。"
  },
  {
    id: "p_w_3",
    title: "教堂婚礼 - 神圣誓言",
    category: "Wedding",
    imageUrl: "https://picsum.photos/600/800?random=60",
    images: ["https://picsum.photos/800/1200?random=60", "https://picsum.photos/1200/800?random=61"],
    client: "私人客户",
    date: "2023.12",
    description: "庄严肃穆的教堂仪式，重点捕捉光影下的仪式感与新人的虔诚神态。"
  },
  {
    id: "p_w_4",
    title: "海岛婚礼 - 落日余晖",
    category: "Wedding",
    imageUrl: "https://picsum.photos/800/600?random=62",
    images: ["https://picsum.photos/1200/800?random=62", "https://picsum.photos/1200/800?random=63"],
    client: "私人客户",
    date: "2023.10",
    description: "三亚目的地婚礼，利用日落前后的黄金时刻，拍摄唯美的逆光剪影。"
  },
  {
    id: "p_w_5",
    title: "中式婚礼 - 凤冠霞帔",
    category: "Wedding",
    imageUrl: "https://picsum.photos/800/800?random=64",
    images: ["https://picsum.photos/1000/1000?random=64", "https://picsum.photos/800/600?random=65"],
    client: "私人客户",
    date: "2023.08",
    description: "传统中式婚礼，注重色彩的浓郁与细节的刻画，展现东方婚俗之美。"
  },
  {
    id: "p_w_6",
    title: "First Look - 感动瞬间",
    category: "Wedding",
    imageUrl: "https://picsum.photos/600/800?random=66",
    images: ["https://picsum.photos/800/1200?random=66", "https://picsum.photos/800/1200?random=67"],
    client: "私人客户",
    date: "2023.06",
    description: "记录新郎第一次见到穿婚纱的新娘时的真实反应，情感充沛，令人动容。"
  },
  {
    id: "p_w_7",
    title: "新娘晨袍 - 细腻特写",
    category: "Wedding",
    imageUrl: "https://picsum.photos/600/800?random=68",
    images: ["https://picsum.photos/800/1200?random=68", "https://picsum.photos/1200/800?random=69"],
    client: "私人客户",
    date: "2023.04",
    description: "婚礼准备阶段的私房拍摄，展现新娘的柔美与期待，光影柔和。"
  },
  {
    id: "p_w_8",
    title: "晚宴派对 - 狂欢时刻",
    category: "Wedding",
    imageUrl: "https://picsum.photos/800/600?random=70",
    images: ["https://picsum.photos/1200/800?random=70", "https://picsum.photos/800/1200?random=71"],
    client: "私人客户",
    date: "2023.02",
    description: "婚礼晚宴的After Party，使用慢门闪光灯技巧，记录动态的舞姿与欢乐氛围。"
  },
  {
    id: "p_w_9",
    title: "婚纱旅拍 - 大理印象",
    category: "Wedding",
    imageUrl: "https://picsum.photos/800/600?random=72",
    images: ["https://picsum.photos/1200/800?random=72", "https://picsum.photos/1200/800?random=73"],
    client: "私人客户",
    date: "2022.12",
    description: "结合自然风光的婚纱旅拍，人景交融，风格清新自然。"
  },
  {
    id: "p_w_10",
    title: "森系婚礼 - 自然童话",
    category: "Wedding",
    imageUrl: "https://picsum.photos/600/800?random=74",
    images: ["https://picsum.photos/800/1200?random=74", "https://picsum.photos/800/1200?random=75"],
    client: "私人客户",
    date: "2022.10",
    description: "森林中的小型婚礼，捕捉绿植与阳光的交错，打造如童话般的视觉效果。"
  },

  // --- Portrait Photography (10 items) ---
  {
    id: "p_p_1",
    title: "人像写真 - 情绪",
    category: "Portrait",
    imageUrl: "https://picsum.photos/600/900?random=7",
    images: ["https://picsum.photos/800/1200?random=7", "https://picsum.photos/800/1200?random=701"],
    client: "个人约拍",
    date: "2023.08",
    description: "情绪主导的室内人像创作。利用窗户的自然光与阴影对比，展现内敛情绪。"
  },
  {
    id: "p_p_2",
    title: "赛博朋克 - 霓虹夜景",
    category: "Portrait",
    imageUrl: "https://picsum.photos/600/800?random=80",
    images: ["https://picsum.photos/800/1200?random=80", "https://picsum.photos/800/1200?random=81"],
    client: "个人约拍",
    date: "2023.11",
    description: "城市夜景人像，利用街头霓虹灯光，营造强烈的冷暖对比与未来感。"
  },
  {
    id: "p_p_3",
    title: "复古胶片 - 旧时光",
    category: "Portrait",
    imageUrl: "https://picsum.photos/600/800?random=82",
    images: ["https://picsum.photos/800/1200?random=82", "https://picsum.photos/800/1200?random=83"],
    client: "个人约拍",
    date: "2023.09",
    description: "使用胶片相机拍摄，颗粒感与独特的色彩倾向，还原90年代的复古风情。"
  },
  {
    id: "p_p_4",
    title: "商务肖像 - 职场精英",
    category: "Portrait",
    imageUrl: "https://picsum.photos/600/800?random=84",
    images: ["https://picsum.photos/800/1200?random=84", "https://picsum.photos/800/1200?random=85"],
    client: "企业高管",
    date: "2023.07",
    description: "专业商务形象照，布光考究，展现人物的自信、专业与亲和力。"
  },
  {
    id: "p_p_5",
    title: "亲子时光 - 温暖午后",
    category: "Portrait",
    imageUrl: "https://picsum.photos/800/600?random=86",
    images: ["https://picsum.photos/1200/800?random=86", "https://picsum.photos/1200/800?random=87"],
    client: "家庭纪实",
    date: "2023.06",
    description: "家庭日记录，抓拍父母与孩子互动的真实瞬间，充满爱与温情。"
  },
  {
    id: "p_p_6",
    title: "情侣写真 - 甜蜜日常",
    category: "Portrait",
    imageUrl: "https://picsum.photos/800/600?random=88",
    images: ["https://picsum.photos/1200/800?random=88", "https://picsum.photos/1200/800?random=89"],
    client: "情侣约拍",
    date: "2023.05",
    description: "居家风格的情侣写真，记录平凡生活中的甜蜜细节，松弛而自然。"
  },
  {
    id: "p_p_7",
    title: "毕业季 - 青春纪念",
    category: "Portrait",
    imageUrl: "https://picsum.photos/600/800?random=90",
    images: ["https://picsum.photos/800/1200?random=90", "https://picsum.photos/800/1200?random=91"],
    client: "毕业生",
    date: "2023.06",
    description: "校园风格写真，利用操场、教室等场景，定格青春最美好的模样。"
  },
  {
    id: "p_p_8",
    title: "时尚杂志 - 影棚大片",
    category: "Portrait",
    imageUrl: "https://picsum.photos/600/800?random=92",
    images: ["https://picsum.photos/800/1200?random=92", "https://picsum.photos/800/1200?random=93"],
    client: "模特卡拍摄",
    date: "2023.03",
    description: "高调风格的影棚人像，重点表现模特的表现力与面部骨骼感。"
  },
  {
    id: "p_p_9",
    title: "黑白人像 - 极致简约",
    category: "Portrait",
    imageUrl: "https://picsum.photos/600/800?random=94",
    images: ["https://picsum.photos/800/1200?random=94", "https://picsum.photos/800/1200?random=95"],
    client: "艺术家",
    date: "2023.02",
    description: "去繁就简的黑白摄影，通过光影层次表现人物的性格与故事感。"
  },
  {
    id: "p_p_10",
    title: "孕期写真 - 生命之美",
    category: "Portrait",
    imageUrl: "https://picsum.photos/600/800?random=96",
    images: ["https://picsum.photos/800/1200?random=96", "https://picsum.photos/800/1200?random=97"],
    client: "准妈妈",
    date: "2022.12",
    description: "唯美风格的孕期记录，展现母亲的温柔与对新生命的期待。"
  }
];

export const VIDEOS: VideoItem[] = [
  // --- Event Videos (10 items) ---
  {
    id: "v_e_1",
    title: "2023 互联网技术峰会全程回顾",
    category: "Event",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=20",
    duration: "05:12",
    views: "3.4k",
    role: "导播 / 剪辑",
    client: "腾讯云",
    description: "千人规模技术峰会。负责现场多机位统筹与后期快剪，24小时内输出回顾短片。"
  },
  {
    id: "v_e_2",
    title: "新品发布会 - 现场高光",
    category: "Event",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=21",
    duration: "02:30",
    views: "5k+",
    role: "摄影师",
    client: "某科技品牌",
    description: "记录发布会关键时刻，捕捉演讲者神态与观众反应，展现品牌的高端形象。"
  },
  {
    id: "v_e_3",
    title: "草莓音乐节 - 郑州站",
    category: "Event",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=22",
    duration: "03:45",
    views: "12w",
    role: "摄像 / 剪辑",
    client: "摩登天空",
    description: "音乐节现场Aftermovie。运用高帧率拍摄捕捉现场狂热氛围，剪辑节奏紧凑有力。"
  },
  {
    id: "v_e_4",
    title: "国际车展 - 豪车鉴赏",
    category: "Event",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=23",
    duration: "04:10",
    views: "8k",
    role: "摄影 / 剪辑",
    client: "宝马汽车",
    description: "车展现场记录，通过运镜展现车辆的流线美与现场的人气。"
  },
  {
    id: "v_e_5",
    title: "城市马拉松 - 奔跑时刻",
    category: "Event",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=24",
    duration: "03:20",
    views: "2w+",
    role: "跟拍车摄影",
    client: "体育局",
    description: "全程跟拍马拉松赛事，记录运动员的拼搏精神与城市的活力风貌。"
  },
  {
    id: "v_e_6",
    title: "企业年会 - 盛典之夜",
    category: "Event",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=25",
    duration: "06:00",
    views: "Internal",
    role: "导播",
    client: "大型国企",
    description: "多机位直播与录制，确保年会流程的完整记录与实时投屏。"
  },
  {
    id: "v_e_7",
    title: "艺术展幕 - 开展仪式",
    category: "Event",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=26",
    duration: "02:45",
    views: "1.5k",
    role: "摄影 / 剪辑",
    client: "美术馆",
    description: "沉浸式记录艺术展开幕，通过画面传递艺术品的质感与展览的格调。"
  },
  {
    id: "v_e_8",
    title: "电竞决赛 - 巅峰对决",
    category: "Event",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=27",
    duration: "04:30",
    views: "50w+",
    role: "现场摄像",
    client: "赛事主办方",
    description: "捕捉选手专注的操作神态与夺冠瞬间的激情爆发，极具感染力。"
  },
  {
    id: "v_e_9",
    title: "慈善晚宴 - 爱心传递",
    category: "Event",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=28",
    duration: "03:50",
    views: "3k",
    role: "摄影师",
    client: "慈善基金会",
    description: "记录晚宴的温馨时刻与拍卖环节，传递公益正能量。"
  },
  {
    id: "v_e_10",
    title: "购物中心 - 盛大开业",
    category: "Event",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=29",
    duration: "02:15",
    views: "10k+",
    role: "剪辑",
    client: "万达广场",
    description: "快节奏剪辑，展现开业当天的热闹客流与丰富活动，营造繁荣景象。"
  },

  // --- Commercial Videos (10 items) ---
  {
    id: "v_c_1",
    title: "城市形象宣传片 - 郑州",
    category: "Commercial",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=10",
    duration: "03:45",
    views: "1.2w",
    role: "导演 / 摄影 / 剪辑",
    client: "文旅集团",
    description: "运用了大量的大范围移动延时（Hyperlapse）技术，展现城市的宏大叙事与微观生活。"
  },
  {
    id: "v_c_2",
    title: "新能源汽车 - 极速体验",
    category: "Commercial",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=11",
    duration: "01:30",
    views: "8.5k",
    role: "摄影指导 (DP)",
    client: "比亚迪汽车",
    description: "该片侧重于表现车辆的操控性与流线型外观。使用车载摇臂进行动态跟拍。"
  },
  {
    id: "v_c_3",
    title: "企业年度回顾 TVC",
    category: "Commercial",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=12",
    duration: "04:20",
    views: "5.6k",
    role: "后期总监",
    client: "建业集团",
    description: "汇集了集团全年的重要时刻素材。通过剪辑节奏的把控，构建出激昂向上的情感曲线。"
  },
  {
    id: "v_c_4",
    title: "高端度假村 - 隐世之旅",
    category: "Commercial",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=30",
    duration: "02:50",
    views: "6k",
    role: "摄影 / 航拍",
    client: "文旅开发商",
    description: "通过航拍展现度假村的绝美环境，结合室内细节拍摄，传递避世度假的理念。"
  },
  {
    id: "v_c_5",
    title: "智能手表 - 科技生活",
    category: "Commercial",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=31",
    duration: "01:00",
    views: "20w+",
    role: "产品摄影",
    client: "科技品牌",
    description: "微距拍摄展现产品工艺，结合运动场景展示功能，快节奏剪辑适应社交媒体传播。"
  },
  {
    id: "v_c_6",
    title: "有机牧场 - 溯源之旅",
    category: "Commercial",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=32",
    duration: "03:10",
    views: "4k",
    role: "导演",
    client: "乳制品企业",
    description: "纪录片风格的品牌宣传片，深入牧场源头，讲述一杯好奶背后的故事。"
  },
  {
    id: "v_c_7",
    title: "能量饮料 - 突破极限",
    category: "Commercial",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=33",
    duration: "00:45",
    views: "15w",
    role: "剪辑 / 特效",
    client: "功能饮料",
    description: "高燃混剪，结合极限运动素材，通过视觉特效强化品牌充满能量的形象。"
  },
  {
    id: "v_c_8",
    title: "春季时装 - 潮流发布",
    category: "Commercial",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=34",
    duration: "01:20",
    views: "8k",
    role: "摄影师",
    client: "服装品牌",
    description: "艺术感十足的时装影片，运用特殊的灯光与运镜，展现服装的质感与设计感。"
  },
  {
    id: "v_c_9",
    title: "豪宅漫游 - 奢华定义",
    category: "Commercial",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=35",
    duration: "03:00",
    views: "Internal",
    role: "摄影 / 剪辑",
    client: "高端地产",
    description: "沉浸式看房视频，流畅的运镜与舒缓的配乐，带给观众身临其境的奢华体验。"
  },
  {
    id: "v_c_10",
    title: "高校招生 - 梦想起航",
    category: "Commercial",
    thumbnailUrl: "https://picsum.photos/1920/1080?random=36",
    duration: "04:00",
    views: "5w+",
    role: "执行导演",
    client: "某大学",
    description: "展现校园环境与师生风貌，通过真实的人物故事，激发学子对大学生活的向往。"
  },

  // --- Short Videos (10 items) ---
  {
    id: "v_s_1",
    title: "抖音剧情 - 职场逆袭",
    category: "Short Video",
    thumbnailUrl: "https://picsum.photos/1080/1920?random=13",
    duration: "01:15",
    views: "50w+",
    role: "编导 / 剪辑",
    description: "通过快节奏的剪辑和反转剧情，提高完播率。上线24小时播放量突破50万。"
  },
  {
    id: "v_s_2",
    title: "生活Vlog - 周末探店",
    category: "Short Video",
    thumbnailUrl: "https://picsum.photos/1080/1920?random=14",
    duration: "00:58",
    views: "4.2w",
    role: "摄影 / 剪辑",
    description: "不仅是探店，更是一种生活方式的传递。运用第一人称视角（POV）拍摄。"
  },
  {
    id: "v_s_3",
    title: "卡点变装挑战",
    category: "Short Video",
    thumbnailUrl: "https://picsum.photos/1080/1920?random=15",
    duration: "00:25",
    views: "30w+",
    role: "特效制作",
    description: "技术流卡点视频。使用After Effects制作无缝转场特效，极具传播性。"
  },
  {
    id: "v_s_4",
    title: "美妆护肤种草",
    category: "Short Video",
    thumbnailUrl: "https://picsum.photos/1080/1920?random=16",
    duration: "01:05",
    views: "12w",
    role: "策划 / 拍摄",
    description: "口播+产品展示形式。重点在于对肤质的微距拍摄和布光。"
  },
  {
    id: "v_s_5",
    title: "旅行Vlog - 京都散策",
    category: "Short Video",
    thumbnailUrl: "https://picsum.photos/1080/1920?random=90",
    duration: "01:30",
    views: "8w",
    role: "摄影 / 剪辑",
    description: "治愈系旅行短片，收录了京都的街道声音与美景，色彩清新。"
  },
  {
    id: "v_s_6",
    title: "美食教程 - 15分钟快手菜",
    category: "Short Video",
    thumbnailUrl: "https://picsum.photos/1080/1920?random=91",
    duration: "01:00",
    views: "25w",
    role: "拍摄 / 剪辑",
    description: "俯拍视角的美食制作过程，强调食材的处理声效（ASMR），令人食欲大增。"
  },
  {
    id: "v_s_7",
    title: "数码开箱 - 最新旗舰",
    category: "Short Video",
    thumbnailUrl: "https://picsum.photos/1080/1920?random=92",
    duration: "01:45",
    views: "15w",
    role: "博主",
    description: "真实客观的数码产品体验，详细展示外观细节与核心功能。"
  },
  {
    id: "v_s_8",
    title: "健身打卡 - 燃脂训练",
    category: "Short Video",
    thumbnailUrl: "https://picsum.photos/1080/1920?random=93",
    duration: "00:45",
    views: "6w",
    role: "拍摄",
    description: "记录健身过程，配合动感的音乐，激励观众一起运动。"
  },
  {
    id: "v_s_9",
    title: "萌宠日常 - 治愈瞬间",
    category: "Short Video",
    thumbnailUrl: "https://picsum.photos/1080/1920?random=94",
    duration: "00:30",
    views: "100w+",
    role: "抓拍",
    description: "记录宠物的可爱瞬间，无需复杂剪辑，凭借内容本身的趣味性获得高流量。"
  },
  {
    id: "v_s_10",
    title: "街头摄影 - 第一人称POV",
    category: "Short Video",
    thumbnailUrl: "https://picsum.photos/1080/1920?random=95",
    duration: "01:10",
    views: "9w",
    role: "摄影",
    description: "佩戴运动相机拍摄街头摄影的全过程，带给观众沉浸式的创作体验。"
  }
];

export const EDUCATION = {
  school: "郑州职业技术学院",
  degree: "虚拟现实应用技术 (大专)",
  period: "2020 - 2023",
  award: "2022年全省高校公益广告类作品二等奖"
};