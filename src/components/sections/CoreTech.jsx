import React from 'react';
import schematic from '../../assets/core_tech_schematic.png';

const CoreTech = ({ lang }) => {

    const content = {
        en: {
            tag: "Core Technology",
            title: "Triple Synergy System",
            subTitle: "Scientific Precision: LNP × Exosomes × Peptides",
            lnp: { title: "LNP Engine", desc: "Nano-delivery system penetrating the skin barrier.", detail: "3.3x Penetration" },
            exo: { title: "Plant Exosomes", desc: "Awakening cellular signals in the dermis.", detail: "Signal Activation" },
            pep: { title: "Peptides", desc: "Rebuilding the structural foundation.", detail: "Collagen Synthesis" }
        },
        kr: {
            tag: "핵심 기술",
            title: "트리플 시너지 시스템",
            subTitle: "과학적 정밀함: LNP × 엑소좀 × 펩타이드",
            lnp: { title: "LNP 엔진", desc: "피부 장벽을 투과하는 나노 전달 시스템", detail: "3.3배 침투율" },
            exo: { title: "식물 유래 엑소좀", desc: "진피층의 세포 신호를 깨우는 활성 인자", detail: "신호 활성화" },
            pep: { title: "고기능성 펩타이드", desc: "피부 구조의 기초를 다시 세우는 힘", detail: "콜라겐 합성" }
        },
        jp: {
            tag: "コアテクノロジー",
            title: "トリプルシナジーシステム",
            subTitle: "科学的精密さ: LNP × エクソソーム × ペプチド",
            lnp: { title: "LNPエンジン", desc: "皮膚バリアを透過するナノデリバリーシステム", detail: "浸透率3.3倍" },
            exo: { title: "植物由来エクソソーム", desc: "真皮層の細胞シグナルを目覚めさせる", detail: "シグナル活性化" },
            pep: { title: "高機能ペプチド", desc: "皮膚構造の基礎を再構築する力", detail: "コラーゲン生成" }
        },
        ar: {
            tag: "التكنولوجيا الأساسية",
            title: "نظام التآزر الثلاثي",
            subTitle: "الدقة العلمية: LNP × الإكسوزومات × الببتيدات",
            lnp: { title: "محرك LNP", desc: "نظام توصيل نانوي يخترق حاجز الجلد", detail: "معدل اختراق 3.3x" },
            exo: { title: "إكسوزومات نباتية", desc: "إيقاظ الإشارات الخلوية في الأدمة", detail: "تنشيط الإشارة" },
            pep: { title: "ببتيدات عالية الأداء", desc: "قوة إعادة بناء الأساس الهيكلي للبشرة", detail: "تخليق الكولاجين" }
        }
    };

    const text = content[lang] || content['en'];
    const isArabic = lang === 'ar';

    return (
        <section className="section bg-[#111] text-white overflow-hidden" style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
            <div className="container">
                <div className="text-center mb-20 fade-up">
                    <span className="section-tag">{text.tag}</span>
                    <h2 className="section-title text-white">{text.title}</h2>
                    <p className="text-gray-400 font-light">{text.subTitle}</p>
                </div>

                {/* Schematic Layout */}
                <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">

                    {/* Left Column (LNP) */}
                    <div className="w-full lg:w-1/4 flex flex-col gap-16 text-center lg:text-right fade-up delay-300">
                        <div className="group p-6 border border-white/10 rounded-xl hover:border-primary/50 transition-colors">
                            <h4 className="text-2xl font-heading text-primary mb-3">LNP Engine</h4>
                            <p className="text-sm text-gray-400 mb-4">{text.lnp.desc}</p>
                            <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold border border-primary/30 rounded">
                                {text.lnp.detail}
                            </div>
                        </div>
                    </div>

                    {/* Center Visual (3D Schematic) */}
                    <div className="w-full lg:w-1/2 relative bg-black rounded-full aspect-square flex items-center justify-center overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(161,29,51,0.2)] fade-up delay-100">
                        <img src={schematic} alt="Skin Schematic" className="w-full md:w-[110%] h-full md:h-[110%] object-cover opacity-90 hover:scale-105 transition-transform duration-1000" />

                        {/* Overlay Data Points */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-primary rounded-full animate-ping"></div>
                            <div className="absolute bottom-[40%] right-[30%] w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Right Column (Exosomes & Peptides) */}
                    <div className="w-full lg:w-1/4 flex flex-col gap-16 text-center lg:text-left fade-up delay-500">
                        <div className="group p-6 border border-white/10 rounded-xl hover:border-primary/50 transition-colors">
                            <h4 className="text-2xl font-heading text-primary mb-3">Exosomes</h4>
                            <p className="text-sm text-gray-400 mb-4">{text.exo.desc}</p>
                            <div className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-bold border border-white/20 rounded">
                                {text.exo.detail}
                            </div>
                        </div>

                        <div className="group p-6 border border-white/10 rounded-xl hover:border-primary/50 transition-colors">
                            <h4 className="text-2xl font-heading text-primary mb-3">Peptides</h4>
                            <p className="text-sm text-gray-400 mb-4">{text.pep.desc}</p>
                            <div className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-bold border border-white/20 rounded">
                                {text.pep.detail}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CoreTech;
