import React from 'react';

const Evolution = ({ lang }) => {

    const content = {
        en: {
            title: "Proving Evolution",
            sub: "Quantitative Verification of Efficacy",
            stats: [
                { val: "+18%", label: "Skin Density", desc: "Dermal Density Improvement" },
                { val: "+24%", label: "Elasticity", desc: "Elasticity Recovery Rate" },
                { val: "3.3x", label: "Penetration", desc: "Compared to Liposomes" }
            ]
        },
        kr: {
            title: "진화의 증명",
            sub: "효능에 대한 정량적 검증",
            stats: [
                { val: "+18%", label: "피부 치밀도", desc: "진피 치밀도 개선" },
                { val: "+24%", label: "탄력 복원력", desc: "피부 탄력 증가율" },
                { val: "3.3x", label: "흡수율", desc: "리포좀 대비 침투력" }
            ]
        },
        jp: {
            title: "進化の証明",
            sub: "有効性の定量的検証",
            stats: [
                { val: "+18%", label: "皮膚密度", desc: "真皮の緻密度改善" },
                { val: "+24%", label: "弾力回復", desc: "弾力回復率" },
                { val: "3.3x", label: "浸透率", desc: "リポソーム比" }
            ]
        },
        ar: {
            title: "إثبات التطور",
            sub: "التحقق الكمي من الفعالية",
            stats: [
                { val: "+18%", label: "كثافة الجلد", desc: "تحسن كثافة الأدمة" },
                { val: "+24%", label: "المرونة", desc: "معدل استعادة المرونة" },
                { val: "3.3x", label: "الامتصاص", desc: "مقارنة بالجسيمات الشحمية" }
            ]
        }
    };

    const text = content[lang] || content['en'];
    const isArabic = lang === 'ar';

    return (
        <section className="section bg-[#1a1a1a] text-white border-t border-gray-900" style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
            <div className="container">
                <div className="text-center mb-16 fade-up">
                    <span className="section-tag bg-white/10 text-white px-4 py-1 rounded-full border border-white/20">Data Verification</span>
                    <h2 className="section-title mt-4">{text.title}</h2>
                    <p className="text-gray-400 font-light">{text.sub}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {text.stats.map((stat, i) => (
                        <div key={i} className={`p-10 border border-gray-800 bg-[#111] hover:bg-[#222] transition-colors rounded-none flex flex-col items-center justify-center text-center fade-up delay-${(i * 200) + 100}`}>
                            <div className="w-40 h-40 rounded-full border border-gray-700 flex items-center justify-center mb-8 relative">
                                <div className="absolute inset-2 border border-gray-600 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                <span className="text-4xl font-heading text-white">{stat.val}</span>
                            </div>
                            <h3 className="text-lg uppercase tracking-widest text-primary mb-2 font-bold">{stat.label}</h3>
                            <p className="text-sm text-gray-500 font-light">{stat.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Evolution;
