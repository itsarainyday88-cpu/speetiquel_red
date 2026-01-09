import "./globals.css";

export const metadata = {
    title: "Speetiquel Red | 3-Step Scientific Luminous Solution",
    description:
        "홍삼·어성초·병풀 유래 3종 엑소좀과 LNP(지질 나노입자) 기술의 결합. 스피티클 레드(Speetiquel Red)는 단순 케어를 넘어 피부 시스템을 리부트(Reboot)하는 전문가용 3-Step 사이언틱 루미너스 솔루션입니다.",
    keywords:
        "Speetiquel Red, 스피티클 레드, BioBijou, 바이오비쥬, Exosome Skin Booster, 엑소좀 스킨부스터, LNP Technology, Red Ginseng Exosome, Cica Exosome, Skin Reboot, Aesthetic Solution, 홍삼 엑소좀, 병풀 엑소좀, 어성초 엑소좀",
    openGraph: {
        title: "Speetiquel Red - 피부 시스템 리부트 솔루션",
        description:
            "홍삼·어성초·병풀 3종 엑소좀 x LNP 기술. 피부 본연의 힘을 깨우는 3-Step 사이언틱 루미너스 솔루션을 확인하세요.",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
