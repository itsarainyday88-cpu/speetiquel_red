import React from 'react';
import mixing from '../../assets/mechanism_mixing.png';

const Mechanism = ({ lang }) => {

    const content = {
        en: {
            tag: "The Mechanism",
            title: "Scientific Definition of Dual Formulation",
            step1: { title: "STEP 01. Wake Up", desc: "High-Purity Exosomes awaken dormant skin signals." },
            step2: { title: "STEP 02. Rebuild", desc: "LNP Peptides execute solid structural reconstruction." }
        },
        kr: {
            tag: "메커니즘",
            title: "이중 제형의 과학적 정의",
            step1: { title: "STEP 01. Wake Up", desc: "고순도 엑소좀이 잠든 피부의 재생 신호를 깨웁니다." },
            step2: { title: "STEP 02. Rebuild", desc: "LNP 펩타이드가 견고하게 피부 구조를 재건합니다." }
        },
        jp: {
            tag: "メカニズム",
            title: "二重製剤の科学的定義",
            step1: { title: "STEP 01. Wake Up", desc: "高純度エクソソームが眠っている肌の再生シグナルを目覚めさせます。" },
            step2: { title: "STEP 02. Rebuild", desc: "LNPペプチドが肌の構造を強固に再構築します。" }
        },
        ar: {
            tag: "الآلية",
            title: "التعريف العلمي للتركيبة المزدوجة",
            step1: { title: "STEP 01. Wake Up", desc: "تعمل الإكسوزومات عالية النقاء على إيقاظ إشارات الجلد الخاملة." },
            step2: { title: "STEP 02. Rebuild", desc: "تنفذ ببتيدات LNP إعادة بناء هيكلية صلبة." }
        }
    };

    const text = content[lang] || content['en'];
    const isArabic = lang === 'ar';

    return (
        <section className="section bg-white text-black" style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
            <div className="container">
                <div className="text-center mb-16 fade-up">
                    <span className="section-tag">{text.tag}</span>
                    <h2 className="section-title text-black">{text.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    {/* Step 1 */}
                    <div className="p-8 bg-gray-50 border border-gray-100 rounded-2xl md:text-right fade-up delay-100">
                        <h3 className="text-2xl font-heading text-primary mb-4">{text.step1.title}</h3>
                        <p className="text-gray-600 leading-relaxed font-light">{text.step1.desc}</p>
                    </div>

                    {/* Center Visual (Mixing) */}
                    <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-gray-100 shadow-2xl fade-up delay-300">
                        <img src={mixing} alt="Mixing Mechanism" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Step 2 */}
                    <div className="p-8 bg-gray-50 border border-gray-100 rounded-2xl md:text-left fade-up delay-500">
                        <h3 className="text-2xl font-heading text-primary mb-4">{text.step2.title}</h3>
                        <p className="text-gray-600 leading-relaxed font-light">{text.step2.desc}</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Mechanism;
