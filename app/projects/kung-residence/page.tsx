import Image from "next/image";
import Link from "next/link";

const images = {
  hero: "/images/kung-residence/Gemini_Generated_Image_1agmmr1agmmr1agm.jpg",

  bedroom:
    "/images/kung-residence/Gemini_Generated_Image_e7svy1e7svy1e7sv.jpg",

  dining:
    "/images/kung-residence/Gemini_Generated_Image_pk8wzupk8wzupk8w(1).jpg",

  tv:
    "/images/kung-residence/Gemini_Generated_Image_t6e23jt6e23jt6e2(1).jpg",

  living:
    "/images/kung-residence/Gemini_Generated_Image_vne403vne403vne4.jpg",

  livingWide: "/images/kung-residence/living-wide.jpg",
  bedroomDetail: "/images/kung-residence/bedroom-detail.jpg",
  bedroomWide: "/images/kung-residence/bedroom-wide.jpg",
  livingOverview: "/images/kung-residence/living-overview.jpg",
  tvWallDetail: "/images/kung-residence/tv-wall-detail.jpg",
};

const imageStyle = {
  display: "block",
  width: "100%",
  height: "auto",
} as const;

const sectionLabel = {
  margin: "0 0 24px",
  fontSize: "11px",
  letterSpacing: "0.28em",
  color: "#77716a",
} as const;

export default function KungResidencePage() {
  return (
    <main
      className="kung-project"
      style={{
        minHeight: "100vh",
        background: "#f4f2ed",
        color: "#1f1f1d",
      }}
    >
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

      {/* HERO */}
      <section
        className="kung-hero"
        style={{
          width: "84vw",
          maxWidth: "1360px",
          margin: "90px auto 150px",
        }}
      >
        <p style={sectionLabel}>RESIDENTIAL · NEW BUILD · TAINAN</p>

        <h1
          style={{
            margin: "0 0 34px",
            fontSize: "clamp(52px, 7vw, 108px)",
            lineHeight: 0.95,
            fontWeight: 400,
            letterSpacing: "-0.045em",
          }}
        >
          KUNG
          <br />
          RESIDENCE
        </h1>

        <p
          style={{
            margin: "0 0 70px",
            fontSize: "14px",
            letterSpacing: "0.16em",
            color: "#6e6963",
          }}
        >
          龔宅
        </p>

        <div
          className="kung-hero-image"
          style={{
            width: "76%",
            maxWidth: "1050px",
            marginLeft: "auto",
          }}
        >
          <Image
            src={images.hero}
            alt="龔宅餐廳與玄關空間"
            width={1536}
            height={1024}
            priority
            style={imageStyle}
          />
        </div>
      </section>

      {/* 01 PROJECT */}
      <section
        className="kung-project-info"
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto 160px",
          display: "grid",
          gridTemplateColumns: "32% 62%",
          gap: "6%",
          alignItems: "start",
        }}
      >
        <div className="kung-project-meta">
          <p style={sectionLabel}>01 / PROJECT</p>

          <div
            style={{
              fontSize: "12px",
              lineHeight: 2.2,
              letterSpacing: "0.08em",
              color: "#69645e",
            }}
          >
            <p>LOCATION　台南市</p>
            <p>TYPE　新成屋</p>
            <p>AREA　15 坪</p>
            <p>STYLE　極簡 × 都會</p>
            <p>PROGRAM　RESIDENCE</p>
          </div>
        </div>

        <div className="kung-project-concept">
          <h2
            style={{
              margin: "0 0 48px",
              fontSize: "clamp(34px, 3.5vw, 58px)",
              lineHeight: 1.5,
              fontWeight: 400,
              letterSpacing: "-0.025em",
            }}
          >
            在極簡之中，
            <br />
            讓深色成為空間的深度。
          </h2>

          <div
            style={{
              maxWidth: "680px",
              fontSize: "15px",
              lineHeight: 2.15,
              letterSpacing: "0.04em",
              color: "#57534e",
            }}
          >
            <p>
              15
              坪的新成屋，以極簡的線條與深色材質，建立沉穩而安靜的居住氛圍。
            </p>

            <p>
              空間大量運用黑、灰與木質調，透過黑鏡的反射延伸視覺尺度，
              在有限坪數中增加空間的深度，同時減輕深色材質可能帶來的壓迫感。
            </p>

            <p>
              線性燈光沿著天花與櫃體展開，以簡潔而連續的光線重新描繪空間輪廓；
              新增的冰箱櫃與中島整合日常機能，皮革紋理板材則在低調的色彩中，
              增加細膩而內斂的質感。
            </p>
          </div>
        </div>
      </section>

      {/* 02 LIVING */}
      <section
        className="kung-living"
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto 170px",
        }}
      >
<div
  className="kung-living-heading"
  style={{
    display: "grid",
    gridTemplateColumns: "42% 52%",
    gap: "6%",
    alignItems: "start",
    marginBottom: "60px",
  }}
>
<div
  style={{
    paddingTop: "0",
  }}
>
  <p style={sectionLabel}>02 / LIVING</p>

  <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 48px)",
                lineHeight: 1.55,
                fontWeight: 400,
              }}
            >
              讓線條延伸，
              <br />
              讓空間安靜下來。
            </h2>
          </div>

          <p
            style={{
              margin: 0,
              maxWidth: "520px",
              fontSize: "14px",
              lineHeight: 2,
              color: "#625e59",
            }}
          >
            減少多餘裝飾，以灰階、木質與俐落的線性燈光建立空間秩序，
            讓客廳在深色基調之中，仍保有舒適而放鬆的尺度。
          </p>
        </div>

        <div
          className="kung-living-image"
          style={{
            width: "82%",
            maxWidth: "1080px",
            marginLeft: "auto",
          }}
        >
          <Image
            src={images.living}
            alt="龔宅客廳"
            width={1536}
            height={1024}
            style={imageStyle}
          />
        </div>

        <div
          className="kung-living-wide"
          style={{
            width: "68%",
            maxWidth: "920px",
            margin: "70px auto 0",
          }}
        >
          <Image
            src={images.livingWide}
            alt="龔宅客餐廳空間"
            width={1024}
            height={1536}
            style={imageStyle}
          />
        </div>
      </section>

      {/* LIVING OVERVIEW */}
      <section
        className="kung-living-overview"
        style={{
          width: "84vw",
          maxWidth: "1360px",
          margin: "0 auto 180px",
        }}
      >
        <Image
          src={images.livingOverview}
          alt="龔宅客餐廳全景"
          width={1536}
          height={1024}
          style={imageStyle}
        />
      </section>

      {/* 03 DINING */}
      <section
        className="kung-dining"
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto 170px",
        }}
      >
        <div
          className="kung-dining-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "62% 30%",
            gap: "8%",
            alignItems: "center",
          }}
        >
          <div>
            <Image
              src={images.dining}
              alt="龔宅餐廳與餐櫃"
              width={1536}
              height={1024}
              style={imageStyle}
            />
          </div>

          <div>
            <p style={sectionLabel}>03 / DINING</p>

            <h2
              style={{
                margin: "0 0 32px",
                fontSize: "clamp(30px, 3vw, 48px)",
                lineHeight: 1.5,
                fontWeight: 400,
              }}
            >
              深色材質，
              <br />
              不代表沉重。
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: 2.1,
                color: "#625e59",
              }}
            >
              黑色櫃體與溫潤木質彼此交錯，
              透過材質、反射與燈光的層次，
              在深色空間中留下適度的呼吸感。
            </p>
          </div>
        </div>
      </section>

      {/* 04 MATERIAL & REFLECTION */}
      <section
        className="kung-material"
        style={{
          width: "76vw",
          maxWidth: "1180px",
          margin: "0 auto 180px",
        }}
      >
        <div
          className="kung-material-heading"
          style={{
            marginBottom: "55px",
            maxWidth: "620px",
          }}
        >
          <p style={sectionLabel}>04 / MATERIAL & REFLECTION</p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(32px, 3.2vw, 50px)",
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            以反射，
            <br />
            延伸有限的尺度。
          </h2>
        </div>

        <div
          className="kung-material-image"
          style={{
            width: "78%",
            maxWidth: "980px",
            marginLeft: "auto",
          }}
        >
          <Image
            src={images.tv}
            alt="龔宅電視牆與展示櫃"
            width={1536}
            height={1024}
            style={imageStyle}
          />
        </div>

        <p
          className="kung-material-copy"
          style={{
            width: "48%",
            maxWidth: "540px",
            margin: "40px 0 0 auto",
            fontSize: "14px",
            lineHeight: 2.1,
            color: "#625e59",
          }}
        >
          黑鏡將光線與空間重新映照，
          在視覺上拉開深度。石紋、木質與深灰材質則透過細微的質感差異，
          讓極簡的畫面保有層次。
        </p>

        <div
          className="kung-tv-detail"
          style={{
            width: "86%",
            maxWidth: "1080px",
            margin: "75px auto 0",
          }}
        >
          <Image
            src={images.tvWallDetail}
            alt="龔宅電視牆材質細節"
            width={1536}
            height={1024}
            style={imageStyle}
          />
        </div>
      </section>

      {/* 05 BEDROOM */}
      <section
        className="kung-bedroom"
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto 190px",
          display: "grid",
          gridTemplateColumns: "34% 50%",
          gap: "12%",
          alignItems: "center",
        }}
      >
        <div className="kung-bedroom-text">
          <p style={sectionLabel}>05 / BEDROOM</p>

          <h2
            style={{
              margin: "0 0 36px",
              fontSize: "clamp(32px, 3.2vw, 52px)",
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            在靜謐之中，
            <br />
            留下一點光。
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "14px",
              lineHeight: 2.15,
              color: "#625e59",
            }}
          >
            主臥延續公共空間沉靜的色彩，
            將床頭牆簡化為俐落的深色水平線條。
            一盞柔和的吊燈成為空間裡唯一明確的視覺焦點，
            讓深色不只有沉穩，也多了一層屬於家的溫度。
          </p>
        </div>

        <div
          className="kung-bedroom-image"
          style={{
            width: "88%",
            maxWidth: "650px",
            margin: "0 auto",
          }}
        >
          <Image
            src={images.bedroom}
            alt="龔宅主臥"
            width={1024}
            height={1536}
            style={imageStyle}
          />
        </div>

        <div
          className="kung-bedroom-detail"
          style={{
            width: "58%",
            maxWidth: "720px",
            margin: "90px 0 0 auto",
          }}
        >
          <Image
            src={images.bedroomDetail}
            alt="龔宅主臥吊燈與床頭細節"
            width={1024}
            height={1536}
            style={imageStyle}
          />
        </div>

        <div
          className="kung-bedroom-wide"
          style={{
            width: "100%",
            margin: "90px auto 0",
          }}
        >
          <Image
            src={images.bedroomWide}
            alt="龔宅主臥全景"
            width={1536}
            height={1024}
            style={imageStyle}
          />
        </div>
      </section>

      {/* END */}
      <section
        className="kung-end"
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "130px 0 150px",
          borderTop: "1px solid rgba(31,31,29,0.18)",
        }}
      >
        <p style={sectionLabel}>KUNG RESIDENCE · TAINAN</p>

        <h2
          style={{
            margin: "0 0 70px",
            maxWidth: "900px",
            fontSize: "clamp(42px, 5.5vw, 82px)",
            lineHeight: 1.15,
            fontWeight: 400,
            letterSpacing: "-0.035em",
          }}
        >
          Quiet in tone.
          <br />
          Precise in detail.
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Link
            href="/#projects"
            style={{
              color: "inherit",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "0.18em",
            }}
          >
            ← ALL PROJECTS
          </Link>

          <p
            style={{
              margin: 0,
              fontSize: "11px",
              letterSpacing: "0.16em",
              color: "#77716a",
            }}
          >
            U.E DESIGN · TAINAN
          </p>
        </div>
      </section>
    </main>
  );
}