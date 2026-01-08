import React, { useEffect, useState } from 'react';
import heroBg from '../../assets/hero_bg.png';
import heroVials from '../../assets/hero_vials.png';

const Hero = ({ lang }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const content = {
        en: {
            subtitle: "The 2-Step Skin Reboot Solution",
            title: <>Beyond Skin Reconstruction,<br /><span className="text-primary italic">Rebooting the Skin System.</span></>,
            desc: "A fundamental shift from repair to system activation. The first scientific luxury solution powered by Dualyn™ Technology."
        },
        kr: {
            subtitle: "2-스텝 피부 리부트 솔루션",
            title: <>피부 재구축을 넘어,<br /><span className="text-primary">피부 시스템을 리부트하다.</span></>,
            desc: "단순한 복구를 넘어선 시스템의 재가동. 듀알린™ 테크놀로지로 완성된 첫 번째 사이언티픽 럭셔리."
        },
        jp: {
            subtitle: "2ステップ肌リブートソリューション",
            title: <>肌の再構築を超えて,<br /><span className="text-primary">肌システムを再起動する。</span></>,
            desc: "修復からシステム活性化への根本的な転換。Dualyn™テクノロジーを搭載した初のサイエンティフィックラグジュアリー。"
        },
        ar: {
            subtitle: "حل إعادة تشغيل البشرة بخطوتين",
            title: <>ما وراء إعادة بناء البشرة،<br /><span className="text-primary">إعادة تشغيل نظام البشرة.</span></>,
            desc: "تحول جوهري من الإصلاح إلى تنشيط النظام. أول حل فاخر علمي مدعوم بتقنية Dualyn™."
        }
    };

    const text = content[lang] || content['en'];
    const isArabic = lang === 'ar';

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">

            {/* 1. Background Layer: Particles */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                    style={{ animation: 'pulse-slow 8s infinite alternate' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
            </div>

            {/* 2. Main Content Container */}
            <div className={`container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full pt-32 md:pt-20 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 1.5s ease-out', direction: isArabic ? 'rtl' : 'ltr' }}>

                {/* Text Side */}
                <div className={`text-center md:text-left ${loaded ? 'fade-up delay-300' : ''}`} style={{ transitionDelay: '0.3s' }}>
                    <span className="section-tag mb-4 text-silver border-b border-primary pb-2 inline-block">
                        {text.subtitle}
                    </span>

                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading leading-tight mb-8 text-white drop-shadow-xl">
                        {text.title}
                    </h1>

                    <p className="text-gray-400 text-sm md:text-lg max-w-lg mx-auto md:mx-0 font-body leading-relaxed font-light tracking-wide mb-10 border-l-2 border-primary pl-6">
                        {text.desc}
                    </p>
                </div>

                {/* Visual Side: Vials */}
                <div className={`relative flex justify-center items-center ${loaded ? 'fade-up delay-500' : ''}`} style={{ transitionDelay: '0.5s' }}>
                    {/* Glow Effect behind vials */}
                    <div className="absolute w-[300px] h-[300px] bg-primary rounded-full filter blur-[120px] opacity-30 animate-pulse"></div>

                    <img
                        src={heroVials}
                        alt="Spiticle Red Vials"
                        className="relative z-10 w-[90%] max-w-[600px] drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce">
                <span className="text-[10px] tracking-[0.2em] mb-2 text-gray-500 uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
