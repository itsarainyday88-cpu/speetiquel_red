import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    // 1. Base Configuration
    const siteUrl = "https://speetiquelred-bijou.com";
    const defaultTitle = "Speetiquel Red | 3-Step Scientific Luminous Solution (Red Ginseng Exosome)";
    const defaultDescription = "홍삼·어성초·병풀 유래 3종 엑소좀과 LNP(지질 나노입자) 기술의 결합. 스피티클 레드(Speetiquel Red)는 단순 케어를 넘어 피부 시스템을 리부트(Reboot)하는 전문가용 3-Step 사이언틱 루미너스 솔루션입니다.";

    // 2. Multilingual Keyword Strategy (6 Languages)
    const multiLingualKeywords = [
        // Brand & Core Tech
        "Speetiquel", "Speetiquel Red", "스피티클", "스피티클 레드",
        "BioBijou", "바이오비쥬", "LNP Technology", "Skin Reboot", "Aesthetic Solution",

        // Korean (KR)
        "홍삼", "엑소좀", "홍삼 엑소좀", "병풀 엑소좀", "어성초 엑소좀", "식물 엑소좀", "올인원 홈키트", "홈케어",

        // English (EN)
        "Red Ginseng", "Exosome", "Red Ginseng Exosome", "Cica Exosome", "Heartleaf Exosome", "Plant Exosome", "All-in-one Home Kit", "Home Care",

        // Japanese (JP)
        "スピティクル", "スピティクルレッド", "紅参", "エクソソーム", "紅参エクソソーム", "ツボクサエクソソーム", "ドクダミエクソソーム", "植物エクソソーム", "オールインワンホームキット", "ホームケア",

        // Thai (TH)
        "สปีติเคล", "สปีติเคล เรด", "โสมแดง", "เอ็กโซโซม", "เอ็กโซโซมโสมแดง", "เอ็กโซโซมใบบัวบก", "เอ็กโซโซมพลูคาว", "เอ็กโซโซมพืช", "ชุดดูแลผิวที่บ้านแบบออลอินวัน", "โฮมแคร์",

        // Vietnamese (VN)
        "Hồng sâm", "Exosome", "Exosome Hồng sâm", "Exosome Rau má", "Exosome Diếp cá", "Exosome Thực vật", "Bộ chăm sóc da tại nhà", "Chăm sóc tại nhà",

        // Arabic (AR)
        "سبيتيكل", "سبيتيكل ريد", "الجنسنج الأحمر", "إكسوسوم", "إكسوسوم الجنسنج الأحمر", "إكسوسوم سرة الأرض", "إكسوسوم النعناع السمكي", "إكسوسوم نباتي", "مجموعة العناية المنزلية المتكاملة", "العناية المنزلية"
    ].join(", ");

    // 3. Structured Data (JSON-LD)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Speetiquel Red',
        image: `${siteUrl}/assets/hero_vials.png`,
        description: '3-Step Scientific Luminous Solution combining Red Ginseng, Cica, Heartleaf Exosomes with LNP Technology.',
        brand: {
            '@type': 'Brand',
            name: 'BioBijou'
        },
        manufacturer: {
            '@type': 'Organization',
            name: 'BioBijou',
            url: 'https://biobijou.co.kr'
        },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'KRW',
            price: '0' // B2B / Clinic Product
        }
    };

    return (
        <Helmet>
            {/* Title & Meta */}
            <title>{title || defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || multiLingualKeywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href={siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:site_name" content="Speetiquel Red" />
            <meta property="og:locale" content="ko_KR" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />

            {/* Structured Data */}
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
    );
};

export default SEO;
