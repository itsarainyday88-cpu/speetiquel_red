import React from 'react';

const ProblemSolution = ({ lang }) => {

    const content = {
        en: {
            quote: "Damaged skin cannot be fully restored merely by filling the structure.",
            question: <>Is it possible to <span className="text-primary italic">REBOOT</span> the fundamental regeneration system?</>,
            answer: "The Answer Is"
        },
        kr: {
            quote: "손상된 피부는 단순히 구조를 채우는 것만으로 완벽히 회복되지 않습니다.",
            question: <>근본적인 재생 시스템을 <span className="text-primary italic">리부트(Reboot)</span>하여 피부 스스로 최적의 기능을 되찾을 수는 없을까?</>,
            answer: "해답은 바로"
        },
        jp: {
            quote: "損傷した肌は、単に構造を満たすだけでは完全には回復しません。",
            question: <>根本的な再生システムを<span className="text-primary italic">再起動（Reboot）</span>できないだろうか？</>,
            answer: "その答えは"
        },
        ar: {
            quote: "لا يمكن استعادة البشرة المتضررة بالكامل بمجرد ملء الهيكل فقط.",
            question: <>هل من الممكن <span className="text-primary italic">إعادة تشغيل (Reboot)</span> نظام التجديد الأساسي؟</>,
            answer: "الإجابة هي"
        }
    };

    const text = content[lang] || content['en'];
    const isArabic = lang === 'ar';

    return (
        <section className="section bg-white text-black min-h-[80vh] flex items-center justify-center"
            style={{ direction: isArabic ? 'rtl' : 'ltr' }}>

            <div className="container max-w-4xl text-center">

                {/* 1. The Limitation (Quote) */}
                <div className="fade-up mb-24">
                    <p className="text-xl md:text-2xl text-gray-500 font-heading leading-relaxed">
                        "{text.quote}"
                    </p>
                    <div className="w-12 h-[1px] bg-primary mx-auto mt-8"></div>
                </div>

                {/* 2. The Question (Paradigm Shift) */}
                <div className="fade-up delay-300 relative py-12 px-8 border-y border-gray-100">
                    <h2 className="text-3xl md:text-5xl font-heading leading-tight mb-8">
                        {text.question}
                    </h2>

                    <div className="flex flex-col items-center justify-center gap-4 mt-12 bg-gray-50 p-8 rounded-full w-64 h-64 mx-auto border border-gray-200 shadow-inner">
                        <span className="text-xs tracking-[0.3em] uppercase text-gray-400">
                            {text.answer}
                        </span>
                        <span className="text-2xl font-bold tracking-[0.2em] font-heading text-primary">
                            SPEETIQUEL<br />RED
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProblemSolution;
