import React from 'react';
import postProc from '../../assets/rec_post_proc.png';
import damagedBarrier from '../../assets/rec_damaged_barrier.png';
import aging from '../../assets/rec_aging.png';

const RecommendedFor = ({ lang }) => {

    const content = {
        en: {
            title: "Recommended For",
            cards: [
                { num: "01", title: "Post-Procedure", desc: "Intensive recovery after Laser/MTS" },
                { num: "02", title: "Damaged Barrier", desc: "Skin collapsed by repetitive damage" },
                { num: "03", title: "Aging Signs", desc: "Slow regeneration cycle" }
            ]
        },
        kr: {
            title: "Recommended For",
            cards: [
                { num: "01", title: "시술 후 케어", desc: "레이저, MTS 후 집중 회복" },
                { num: "02", title: "무너진 장벽", desc: "반복적인 손상으로 약해진 피부" },
                { num: "03", title: "노화 징후", desc: "재생 주기가 급격히 느려진 피부" }
            ]
        },
        jp: {
            title: "Recommended For",
            cards: [
                { num: "01", title: "施術後ケア", desc: "レーザー、MTS後の集中回復" },
                { num: "02", title: "バリア機能低下", desc: "繰り返すダメージで弱った肌" },
                { num: "03", title: "エイジングサイン", desc: "再生サイクルが遅くなった肌" }
            ]
        },
        ar: {
            title: "موصى به لـ",
            cards: [
                { num: "01", title: "بعد الإجراء", desc: "التعافي المكثف بعد الليزر/MTS" },
                { num: "02", title: "الحاجز المتضرر", desc: "انهيار الجلد بسبب الضرر المتكرر" },
                { num: "03", title: "علامات الشيخوخة", desc: "دورة تجديد بطيئة" }
            ]
        }
    };

    const text = content[lang] || content['en'];
    const isArabic = lang === 'ar';

    return (
        <section className="section bg-[#111] text-white" style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
            <div className="container">
                <h2 className="section-title text-center mb-16 fade-up">{text.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {text.cards.map((card, i) => (
                        <div key={i} className={`h-80 md:h-96 relative group overflow-hidden fade-up delay-${i * 200}`}>
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={[postProc, damagedBarrier, aging][i]}
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8 relative z-10">
                                <span className="text-4xl text-gray-500 font-heading mb-4 group-hover:text-primary transition-colors">{card.num}</span>
                                <h3 className="text-2xl font-bold mb-2 text-white">{card.title}</h3>
                                <p className="text-gray-300 font-light group-hover:text-white transition-colors">{card.desc}</p>
                            </div>

                            <div className="absolute top-0 right-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecommendedFor;
