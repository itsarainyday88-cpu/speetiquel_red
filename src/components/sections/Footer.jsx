import React from 'react';

const Footer = ({ lang }) => {
    const content = {
        kr: { inquiry: '글로벌 파트너십 문의', btn: '공식 홈페이지 문의하기', brochure: '브로슈어' },
        en: { inquiry: 'Global Partnership Inquiry', btn: 'Contact via Official Website', brochure: 'Brochure' },
        th: { inquiry: 'ติดต่อความร่วมมือทางธุรกิจ', btn: 'ติดต่อผ่านเว็บไซต์ทางการ', brochure: 'โบรชัวร์' },
        ar: { inquiry: 'استفسار عن الشراكة العالمية', btn: 'تواصل عبر الموقع الرسمي', brochure: 'الكتيب' },
        vn: { inquiry: 'Yêu cầu Đối tác Toàn cầu', btn: 'Liên hệ qua Website Chính thức', brochure: 'Tài liệu' },
        jp: { inquiry: 'グローバルパートナーシップのお問い合わせ', btn: '公式サイトから問い合わせる', brochure: 'パンフレット' }
    };
    const text = content[lang] || content.en;

    return (
        <footer style={{ background: '#111111', color: 'white', padding: '80px 0', textAlign: 'center', borderTop: '1px solid #333' }}>
            <div className="container mx-auto px-4">
                <h2 style={{ color: 'white', marginBottom: '20px', fontFamily: 'var(--font-heading)' }} className="text-2xl tracking-widest">SPEETIQUEL RED</h2>
                <p style={{ opacity: 0.7, marginBottom: '40px', fontFamily: 'var(--font-body)' }}>
                    {text.inquiry}
                </p>
                {/* Action Buttons Container */}
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {/* Inquiry Button */}
                    <a href="http://biobijou.co.kr/sub4/inquiry.php" target="_blank" rel="noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '16px 40px',
                            background: 'transparent',
                            border: '1px solid white', /* Outlined initially */
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1rem',
                            borderRadius: '9999px', /* Full Pill */
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            letterSpacing: '0.05em',
                            fontFamily: 'var(--font-body)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.color = '#A11D33'; // var(--color-primary)
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'white';
                        }}
                    >
                        {text.btn}
                    </a>

                    {/* Brochure Download Button */}
                    <a href="/brochure.pdf" download
                        style={{
                            display: 'inline-block',
                            padding: '16px 40px',
                            background: 'white',
                            border: '1px solid white',
                            color: '#A11D33', // var(--color-primary)
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1rem',
                            borderRadius: '9999px',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            letterSpacing: '0.05em',
                            fontFamily: 'var(--font-body)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.color = '#A11D33';
                        }}
                    >
                        {text.brochure}
                    </a>
                </div>

                <div style={{ marginTop: '60px', fontSize: '0.8rem', opacity: 0.5, fontFamily: 'var(--font-body)' }}>
                    © 2026 BIOBIJOU. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
