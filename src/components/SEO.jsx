import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    // Default metadata values as per specification
    const defaultTitle = "Speetiquel Red | 3-Plant Exosomes & LNP 3-Step Skin Reboot";
    const defaultDescription = "3종 식물 유래 엑소좀과 LNP 기술이 결합된 전문가용 3단계 솔루션. 피부 시스템의 근본적인 재부팅을 경험하십시오.";
    const defaultKeywords = "GrDENs, Ginseng Exosome, LNP Delivery, Skin Reboot, BioBijou";

    return (
        <Helmet>
            {/* Title */}
            <title>{title || defaultTitle}</title>

            {/* Standard Metadata */}
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />

            {/* Optional Chaining Safety Check (Implicit in React props, but conceptual alignment) */}
        </Helmet>
    );
};

export default SEO;
