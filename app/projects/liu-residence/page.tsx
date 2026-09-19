import Image from "next/image";
import Link from "next/link";

const base = "/images/liu-residence/";

const images = {
  bedroom01: base + "01_台南室內設計_新成屋裝潢_奶油風客廳.jpg.jpg",
  bedroom02: base + "02_台南室內設計_小坪數住宅_客餐廳設計.jpg.jpg",

  surf01: base + "03_台南新成屋設計_衝浪板收納_奶油風住宅.jpg.jpg",
  surf02: base + "04_台南室內設計_衝浪元素_展示牆設計.jpg.jpg",

  tv01: base + "05_台南室內設計_奶油風_客廳電視牆.jpg.jpg",

  dining01: base + "06_台南新成屋裝潢_小坪數_餐廳設計.jpg.jpg",
  dining02: base + "07_台南室內設計_奶油風_餐桌空間.jpg.jpg",
  dining03: base + "08_台南小坪數設計_客餐廳一體_空間規劃.jpg.jpg",

  storage01: base + "09_台南室內設計_新成屋_系統櫃收納.jpg.jpg",
  storage02: base + "10_台南新成屋設計_奶油風_收納櫃體.jpg.jpg",
  storage03: base + "11_台南室內設計_圓弧設計_奶油風住宅.jpg.jpg",
  storage04: base + "12_台南室內設計_間接照明_客廳設計.jpg.jpg",
  storage05: base + "13_台南新成屋裝潢_木質調_奶油風設計.jpg.jpg",
  storage06: base + "14_台南室內設計_小坪數收納_系統櫃.jpg.jpg",

  dressing01: base + "15_台南住宅設計_更衣間規劃_居家設計.jpg.jpg",
  dressing02: base + "16_台南室內設計_更衣室_訂製更衣室.jpg.jpg",

  living01: base + "17_台南新成屋設計_無印風_住宅空間.jpg.jpg",
  living02: base + "18_台南室內設計_奶油風_電視櫃設計.jpg.jpg",
  living03: base + "19_台南小坪數住宅_客廳收納_室內設計.jpg.jpg",
  living04: base + "20_台南室內裝修_新成屋_客餐廳規劃.jpg.jpg",
  living05: base + "21_台南室內設計_奶茶色_住宅設計.jpg.jpg",
  living06: base + "22_台南新成屋裝潢_小坪數_奶油風設計.jpg.jpg",

  detail01: base + "23_台南室內設計_詫寂風_小坪數住宅.jpg.jpg",
};

const video =
  base + "50秒帶你看劉宅 - Converted with FlexClip.mp4";

function ProjectImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1800}
      height={1200}
      priority={priority}
      style={{
        display: "block",
        width: "100%",
        height: "auto",
      }}
    />
  );
}

export default function LiuResidencePage() {
  const SectionTitle = ({
    number,
    en,
    title,
    text,
  }: {
    number: string;
    en: string;
    title: React.ReactNode;
    text?: React.ReactNode;
  }) => (
    <div className="liu-section-head">
      <div>
        <p className="liu-kicker">{number} / {en}</p>
        <h2>{title}</h2>
      </div>
      {text && <div className="liu-section-copy">{text}</div>}
    </div>
  );

  return (
    <main className="liu-project">
      {/* SITE NAVIGATION */}
      <header className="ue-sub-header">
        <Link href="/" className="ue-sub-logo">
          U.E DESIGN
        </Link>

        <nav className="ue-sub-nav" aria-label="Main navigation">
          <Link href="/#projects">PROJECTS</Link>
          <Link href="/#about">ABOUT</Link>
          <Link href="/#service">SERVICE</Link>
          <Link href="/journal">JOURNAL</Link>
          <Link href="/#contact">CONTACT</Link>
        </nav>
      </header>
      <div className="ue-sub-header-spacer" aria-hidden="true" />

      <style>{`
        .ue-sub-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          width: 100%;
          max-width: none;
          margin: 0;
          padding: 22px 6vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          box-sizing: border-box;
          background: rgba(244, 242, 237, .88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(31, 31, 29, .08);
        }

        .ue-sub-header-spacer {
          height: 68px;
        }

        .ue-sub-logo,
        .ue-sub-nav a {
          color: inherit;
          text-decoration: none;
        }

        .ue-sub-logo {
          flex: 0 0 auto;
          font-size: 13px;
          letter-spacing: .18em;
          white-space: nowrap;
        }

        .ue-sub-nav {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(18px, 2.6vw, 42px);
          font-size: 10px;
          letter-spacing: .16em;
          white-space: nowrap;
        }

        .ue-sub-logo,
        .ue-sub-nav a {
          transition: opacity .25s ease;
        }

        .ue-sub-logo:hover,
        .ue-sub-nav a:hover {
          opacity: .5;
        }

        @media (max-width: 700px) {
          .ue-sub-header-spacer {
            height: 92px;
          }

          .ue-sub-header {
            width: 100%;
            padding: 18px 20px 12px;
            display: block;
          }

          .ue-sub-logo {
            display: inline-block;
            margin-bottom: 20px;
            font-size: 12px;
          }

          .ue-sub-nav {
            width: 100%;
            justify-content: flex-start;
            gap: 20px;
            overflow-x: auto;
            padding-bottom: 6px;
            font-size: 9px;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }

          .ue-sub-nav::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
      {/* HERO VIDEO */}
      <section className="liu-video-wrap">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          className="liu-video"
        />
      </section>

      {/* TITLE */}
      <section className="liu-title">
        <p className="liu-eyebrow">RESIDENTIAL · NEW BUILD · TAINAN</p>
        <div className="liu-title-grid">
          <div>
            <h1>劉宅</h1>
            <p className="liu-en-name">LIU RESIDENCE</p>
          </div>
          <p className="liu-tagline">
            讓木質延續，
            <br />
            讓生活自然流動。
          </p>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section className="liu-info">
        {[
          ["LOCATION", "台南市安南區"],
          ["TYPE", "新成屋"],
          ["AREA", "18 坪"],
          ["STYLE", "簡約 × 日系侘寂"],
          ["PHOTOGRAPHY", "無著色工作室"],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="liu-meta-label">{label}</p>
            <p className="liu-meta-value">{value}</p>
          </div>
        ))}
      </section>

      {/* 01 CONCEPT */}
      <section className="liu-section liu-concept">
        <SectionTitle
          number="01"
          en="PROJECT CONCEPT"
          title={<>以連續木質，<br />梳理生活的節奏。</>}
          text={
            <>
              <p>
                在有限尺度的開放式場域裡，我們以「連續木質」作為空間的主軸，
                梳理從玄關、廚房、餐區一路延伸至客廳的生活動線。
              </p>
              <p>
                木質櫃體不只是收納，也成為串聯不同機能的空間界面。
                深淺材質、留白與光線彼此交錯，在有限的尺度裡建立安定而連續的視覺節奏。
              </p>
            </>
          }
        />

        <div className="liu-concept-images">
          <div>
            <ProjectImage
              src={images.living04}
              alt="劉宅公共空間與連續木質設計"
            />
          </div>
          <div>
            <ProjectImage
              src={images.storage03}
              alt="劉宅木質櫃體與圓弧細節"
            />
          </div>
        </div>
      </section>

      {/* 02 LIVING */}
      <section className="liu-section">
        <SectionTitle
          number="02"
          en="LIVING"
          title={<>留白之中，<br />放進真正的生活。</>}
          text={
            <p>
              客廳以低彩度留白承接深色木質，讓光線、家具與日常活動自然成為空間主角。
              收納沿牆整合，維持視線的乾淨與連續。
            </p>
          }
        />

        <div className="liu-gallery liu-gallery-living">
          <div className="liu-full"><ProjectImage src={images.living01} alt="劉宅客廳全景" priority /></div>
          <div><ProjectImage src={images.living02} alt="劉宅客廳電視櫃設計" /></div>
          <div><ProjectImage src={images.tv01} alt="劉宅客廳電視牆" /></div>
          <div><ProjectImage src={images.living03} alt="劉宅客廳收納" /></div>
          <div><ProjectImage src={images.living06} alt="劉宅客廳與公共空間" /></div>
        </div>
      </section>

      {/* 03 DINING */}
      <section className="liu-section">
        <SectionTitle
          number="03"
          en="DINING"
          title={<>餐桌串起，<br />一家人的日常。</>}
          text={
            <p>
              餐區位在公共空間中央，木質餐桌與柔和吊燈形成家的重心，
              也讓客廳、餐廳與廚房保持自然的交流。
            </p>
          }
        />

        <div className="liu-gallery liu-gallery-dining">
          <div className="liu-full"><ProjectImage src={images.dining03} alt="劉宅餐廳全景" /></div>
          <div><ProjectImage src={images.dining02} alt="劉宅餐桌與吊燈" /></div>
          <div><ProjectImage src={images.dining01} alt="劉宅餐廳空間" /></div>
          <div className="liu-full"><ProjectImage src={images.living05} alt="劉宅餐廳與公共空間關係" /></div>
        </div>
      </section>

      {/* 04 KITCHEN */}
      <section className="liu-section">
        <SectionTitle
          number="04"
          en="KITCHEN"
          title={<>木質延續，<br />讓機能藏進日常。</>}
          text={
            <p>
              廚房延續公共空間的木質語彙，將櫃體、設備與收納整合成乾淨的立面，
              在有限尺度裡保留完整機能，也維持空間的秩序感。
            </p>
          }
        />

        <div className="liu-gallery liu-gallery-kitchen">
          <div className="liu-full"><ProjectImage src={images.storage06} alt="劉宅廚房與木質櫃體" /></div>
          <div><ProjectImage src={images.storage01} alt="劉宅廚房系統櫃" /></div>
          <div><ProjectImage src={images.storage05} alt="劉宅廚房木質櫃體" /></div>
          <div><ProjectImage src={images.storage04} alt="劉宅廚房間接照明" /></div>
          <div><ProjectImage src={images.detail01} alt="劉宅廚房材質細節" /></div>
        </div>
      </section>

      {/* 05 ENTRANCE */}
      <section className="liu-section">
        <SectionTitle
          number="05"
          en="ENTRANCE"
          title={<>從進門開始，<br />收好生活的第一幕。</>}
          text={
            <p>
              玄關透過木質櫃體、展示與收納建立回家的轉場。
              收藏與日常用品各有位置，也讓入口自然銜接後方的公共空間。
            </p>
          }
        />

        <div className="liu-gallery liu-gallery-entrance">
          <div><ProjectImage src={images.storage02} alt="劉宅玄關木質收納櫃" /></div>
          <div><ProjectImage src={images.storage03} alt="劉宅玄關圓弧細節" /></div>
          <div><ProjectImage src={images.surf02} alt="劉宅玄關展示收納" /></div>
          <div><ProjectImage src={images.surf01} alt="劉宅玄關收藏展示" /></div>
        </div>
      </section>

      {/* 06 DRESSING ROOM */}
      <section className="liu-section">
        <SectionTitle
          number="06"
          en="DRESSING ROOM"
          title={<>把收納整理好，<br />也把日常留得從容。</>}
          text={
            <p>
              更衣室將開放吊掛與訂製收納集中配置，
              讓衣物與生活用品清楚歸位，同時保留輕盈、好使用的活動尺度。
            </p>
          }
        />

        <div className="liu-gallery liu-gallery-dressing">
          <div><ProjectImage src={images.dressing01} alt="劉宅更衣室全景" /></div>
          <div><ProjectImage src={images.dressing02} alt="劉宅訂製更衣室收納" /></div>
        </div>
      </section>

      {/* 07 BEDROOM */}
      <section className="liu-section">
        <SectionTitle
          number="07"
          en="BEDROOM"
          title={<>回到房間，<br />讓一天慢慢安靜下來。</>}
          text={
            <p>
              私領域收斂公共空間的材質與色彩，以更安靜的留白與木質細節，
              留下休息需要的純粹與鬆弛。
            </p>
          }
        />

        <div className="liu-gallery liu-gallery-bedroom">
          <div><ProjectImage src={images.bedroom01} alt="劉宅臥室全景" /></div>
          <div><ProjectImage src={images.bedroom02} alt="劉宅臥室細節" /></div>
        </div>
      </section>

      {/* END */}
      <section className="liu-end">
        <p>LIU RESIDENCE</p>
        <h2>HOME,<br />IN CONTINUITY.</h2>
      </section>

      <style>{`
        .liu-project {
          background: #f3f0e9;
          color: #181818;
          min-height: 100vh;
          overflow: hidden;
        }

        .liu-video-wrap {
          width: 100%;
          padding: 24px 4vw 0;
          box-sizing: border-box;
        }

        .liu-video {
          display: block;
          width: 100%;
          max-width: 1500px;
          max-height: 82vh;
          height: auto;
          object-fit: contain;
          margin: 0 auto;
          background: #111;
        }

        .liu-title,
        .liu-section {
          width: min(88%, 1360px);
          margin: 0 auto;
        }

        .liu-title {
          padding: 100px 0 120px;
        }

        .liu-eyebrow,
        .liu-kicker {
          margin: 0;
          font-size: 11px;
          letter-spacing: .3em;
          color: #777168;
        }

        .liu-title-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 80px;
          align-items: end;
          margin-top: 28px;
        }

        .liu-title h1 {
          margin: 0;
          font-size: clamp(52px, 8vw, 118px);
          font-weight: 400;
          line-height: .92;
          letter-spacing: -.055em;
        }

        .liu-en-name {
          margin: 22px 0 0;
          font-size: 14px;
          letter-spacing: .2em;
        }

        .liu-tagline {
          margin: 0;
          font-size: clamp(28px, 3.3vw, 48px);
          font-weight: 300;
          line-height: 1.45;
        }

        .liu-info {
          width: min(88%, 1360px);
          margin: 0 auto 160px;
          padding-top: 32px;
          border-top: 1px solid rgba(0,0,0,.18);
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 34px;
        }

        .liu-meta-label {
          margin: 0 0 10px;
          font-size: 10px;
          letter-spacing: .2em;
          color: #898279;
        }

        .liu-meta-value {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
        }

        .liu-section {
          padding-bottom: 180px;
        }

        .liu-section-head {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: clamp(55px, 9vw, 150px);
          align-items: start;
          margin-bottom: 70px;
        }

        .liu-section-head h2 {
          margin: 28px 0 0;
          font-size: clamp(28px, 3.2vw, 46px);
          line-height: 1.5;
          font-weight: 300;
        }

        .liu-section-copy {
          max-width: 560px;
          padding-top: 40px;
          font-size: 15px;
          line-height: 2.05;
          color: #625d57;
        }

        .liu-section-copy p {
          margin: 0 0 24px;
        }

        .liu-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 34px;
          align-items: start;
        }

        .liu-gallery > div {
          width: 100%;
        }

        .liu-gallery .liu-full {
          grid-column: 1 / -1;
          width: 92%;
          margin: 0 auto;
        }

        .liu-gallery-living > div:nth-child(2),
        .liu-gallery-kitchen > div:nth-child(2),
        .liu-gallery-entrance > div:nth-child(2) {
          width: 82%;
          justify-self: end;
        }

        .liu-gallery-living > div:nth-child(3),
        .liu-gallery-kitchen > div:nth-child(3),
        .liu-gallery-entrance > div:nth-child(3) {
          width: 88%;
          margin-top: 80px;
        }

        .liu-gallery-dining .liu-full:last-child {
          margin-top: 55px;
        }

        .liu-gallery-dressing {
          width: 86%;
          margin: 0 auto;
        }

        .liu-gallery-bedroom {
          width: 88%;
          margin: 0 auto;
          align-items: center;
        }

        .liu-end {
          padding: 70px 6vw 120px;
          text-align: center;
        }

        .liu-end p {
          margin: 0 0 22px;
          font-size: 10px;
          letter-spacing: .32em;
          color: #777168;
        }

        .liu-end h2 {
          margin: 0;
          font-size: clamp(38px, 6vw, 82px);
          font-weight: 300;
          line-height: 1.3;
        }


        .liu-concept-images {
          width: 92%;
          margin: 75px auto 0;
          display: grid;
          grid-template-columns: 1.25fr .75fr;
          gap: 34px;
          align-items: start;
        }

        .liu-concept-images > div:last-child {
          margin-top: 90px;
        }

        @media (max-width: 768px) {
          .liu-concept-images {
            width: 100%;
            margin: 50px auto 0;
            display: block;
          }

          .liu-concept-images > div {
            width: 92%;
            margin: 0 auto 24px !important;
          }

          .liu-concept-images img {
            width: 100% !important;
            height: auto !important;
            object-fit: contain !important;
          }

          .liu-video-wrap {
            padding: 12px 0 0;
          }

          .liu-title,
          .liu-section,
          .liu-info {
            width: calc(100% - 40px);
          }

          .liu-title {
            padding: 70px 0 85px;
          }

          .liu-title-grid {
            display: block;
            margin-top: 24px;
          }

          .liu-title h1 {
            font-size: 58px;
            line-height: 1;
          }

          .liu-tagline {
            margin-top: 60px;
            font-size: 30px;
            line-height: 1.55;
          }

          .liu-info {
            margin-bottom: 100px;
            grid-template-columns: 1fr 1fr;
            gap: 34px 22px;
          }

          .liu-info > div:last-child {
            grid-column: 1 / -1;
          }

          .liu-section {
            padding-bottom: 105px;
          }

          .liu-section-head {
            display: block;
            margin-bottom: 46px;
          }

          .liu-section-head h2 {
            margin-top: 20px;
            font-size: 30px;
            line-height: 1.55;
          }

          .liu-section-copy {
            padding-top: 28px;
            max-width: none;
            font-size: 15px;
            line-height: 1.95;
          }

          .liu-gallery,
          .liu-gallery-dressing,
          .liu-gallery-bedroom {
            display: block;
            width: 100%;
            margin: 0;
          }

          .liu-gallery > div,
          .liu-gallery .liu-full,
          .liu-gallery-living > div:nth-child(2),
          .liu-gallery-living > div:nth-child(3),
          .liu-gallery-kitchen > div:nth-child(2),
          .liu-gallery-kitchen > div:nth-child(3),
          .liu-gallery-entrance > div:nth-child(2),
          .liu-gallery-entrance > div:nth-child(3) {
            width: 92%;
            margin: 0 auto 24px;
          }

          .liu-gallery img {
            width: 100% !important;
            height: auto !important;
            object-fit: contain !important;
          }

          .liu-gallery-dining .liu-full:last-child {
            margin-top: 0;
          }

          .liu-end {
            padding: 45px 20px 85px;
          }

          .liu-end h2 {
            font-size: 42px;
          }
        }
      `}</style>
    </main>
  );
}
