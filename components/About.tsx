import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About: React.FC = () => {
  // Data matching the reference content
  const advantages = [
    { title: "短视频全流程", desc: "选题策划、脚本撰写、拍摄执行、剪辑制作、平台分发" },
    { title: "商业摄影", desc: "宣传片、活动摄影摄像、产品拍摄、婚礼跟拍、短视频拍摄" },
    { title: "数据运营", desc: "平台数据监测分析、内容优化迭代" }
  ];

  const skillSets = [
    { title: "软件技能", desc: "熟悉 Pr, FCPX, Ae, 剪映, Ps, Lr, DaVinci 使用" },
    { title: "硬件技能", desc: "熟悉索尼、佳能、富士主流相机使用及相机稳定器的操作与使用" },
    { title: "个人特质", desc: "有一定个人审美，懂用光；个人耐吃苦，热爱学习，对于新知识接受快" }
  ];

  return (
    <section id="about" className="py-24 bg-white text-stone-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">关于我</h2>
            <div className="w-16 h-1 bg-stone-900 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Bio Text */}
          <motion.div 
            className="lg:w-5/12 pt-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-light leading-normal text-stone-800 mb-8 text-justify">
              <span className="font-bold">全国连锁品牌短视频全流程经验。</span>从事过商业宣传片拍摄与后期、婚礼摄像与剪辑、活动摄像与剪辑、活动摄影与后期。个人耐吃苦，热爱学习。
            </h3>
            
            {/* Accent Line - Changed to Stone */}
            <div className="w-24 h-1.5 bg-stone-900 mb-8 rounded-full"></div>

            <p className="text-stone-600 text-lg leading-relaxed text-justify">
              拥有全国连锁品牌短视频全流程经验。从选题策划到后期分发，每一个环节都力求完美。同时具备丰富的商业摄影与婚礼影像经验，致力于通过镜头语言讲述动人的品牌与个人故事。
            </p>
          </motion.div>

          {/* Right Column: Skills Card */}
          <motion.div 
            className="lg:w-7/12 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <div className="bg-stone-50 p-8 md:p-12 rounded-xl border border-stone-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="p-2 bg-stone-200 rounded-full">
                        <User className="w-5 h-5 text-stone-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 tracking-wide">个人优势</h3>
                </div>

                {/* Advantages List */}
                <div className="space-y-8 mb-10">
                    {advantages.map((item, idx) => (
                        <div key={idx} className="border-l-2 border-stone-200 pl-4 hover:border-stone-900 transition-colors duration-300">
                            <h4 className="text-stone-900 font-bold mb-2 text-lg">{item.title}</h4>
                            <p className="text-stone-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="w-full h-px bg-stone-200 mb-10"></div>

                {/* Skills List */}
                <div className="space-y-8">
                     {skillSets.map((item, idx) => (
                        <div key={idx} className="group">
                             <h4 className="text-stone-900 font-bold mb-2 text-lg flex items-center gap-2">
                                {item.title}
                             </h4>
                             <p className="text-stone-600 leading-relaxed text-sm md:text-base group-hover:text-stone-900 transition-colors">
                                {item.desc}
                             </p>
                        </div>
                    ))}
                </div>

             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;