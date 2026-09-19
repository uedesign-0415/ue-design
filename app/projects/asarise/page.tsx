import Image from "next/image";
import Link from "next/link";

const base = "/images/asarise-commercial space";

const images = {
  detail: `${base}/4ACE945D-C359-4D95-B031-EA060492E692.jpg`,
  corridor01: `${base}/4F8A9ACF-9B47-4725-8341-780A8217E91F.jpg`,
  corridor02: `${base}/11E2F0E1-9A94-4BD7-9789-2F5D2CC6B29D.jpg`,
  treatment: `${base}/12DF5857-E134-47DD-AD66-5A057FF99C38.jpg`,
  waiting: `${base}/59E6A5C5-C882-489E-A1AB-D6BA6D5FC265.jpg`,
  reception: `${base}/935CB990-3858-4296-B18E-C273E1D1CF37.jpg`,
  hero: `${base}/4809E75A-A843-4D81-955C-06967258D55E.jpg`,
  logo: `${base}/CB96D569-A0B6-4A85-9475-1832F9BE6E95.jpg`,
  transformation01: `${base}/台南室內設計_寓易設計_中古屋翻新_侘寂風_美容院.jpg.png`,
  transformation02: `${base}/台南室內設計_寓易設計_中古屋翻新_侘寂風_美容院2.png`,
};

export default function AsarisePage() {
  return (
    <main
      className="asarise-project"
      style={{
        background: "#f5f3ef",
        color: "#25231f",
        minHeight: "100vh",
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
        className="asarise-hero"
        style={{
          width: "72vw",
          maxWidth: "1160px",
          margin: "100px auto 150px",
        }}
      >
        <p
          style={{
            margin: "0 0 35px",
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: "#77716a",
          }}
        >
          COMMERCIAL · RENOVATION · TAIPEI
        </p>

        <h1
          style={{
            margin: "0 0 18px",
            fontSize: "clamp(52px, 7vw, 108px)",
            lineHeight: 0.95,
            fontWeight: 400,
            letterSpacing: "-0.055em",
          }}
        >
          ASARISE
        </h1>

        <p
          style={{
            margin: "0 0 75px",
            fontSize: "13px",
            letterSpacing: "0.16em",
          }}
        >
          專業肌膚管理
        </p>

        <div
          className="asarise-hero-image"
          style={{
            width: "52%",
            marginLeft: "auto",
          }}
        >
          <Image
            src={images.hero}
            alt="ASARISE 專業肌膚管理空間"
            width={1600}
            height={1067}
            priority
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>

      {/* PROJECT INFO */}
      <section
        className="asarise-info"
        style={{
          width: "72vw",
          maxWidth: "1160px",
          margin: "0 auto 160px",
          display: "grid",
          gridTemplateColumns: "34% 66%",
          alignItems: "start",
        }}
      >
        <div
          className="asarise-meta"
          style={{
            fontSize: "11px",
            lineHeight: 2.2,
            letterSpacing: "0.08em",
            color: "#68635d",
          }}
        >
          <p>LOCATION　台北市</p>
          <p>TYPE　中古屋翻新 · 商業空間</p>
          <p>AREA　25 坪</p>
          <p>STYLE　侘寂 × 奶油</p>
          <p>PROGRAM　SKIN MANAGEMENT</p>
        </div>

        <div className="asarise-concept">
          <h2
            style={{
              margin: "0 0 45px",
              maxWidth: "760px",
              fontSize: "clamp(34px, 3.3vw, 56px)",
              lineHeight: 1.5,
              fontWeight: 400,
              letterSpacing: "-0.035em",
            }}
          >
            讓空間慢下來，
            <br />
            成為城市裡一段安靜的停留。
          </h2>

          <p
            style={{
              margin: 0,
              maxWidth: "580px",
              fontSize: "13px",
              lineHeight: 2.1,
              color: "#66615b",
            }}
          >
            原為住辦合一的中古屋，我們重新梳理既有格局與動線，
            將 25 坪空間轉化為專業肌膚管理中心。
            <br />
            <br />
            以柔和純淨的色調為基底，透過圓弧線條、自然材質與柔和光源，
            降低商業空間常見的距離感。從接待、等候、廊道到獨立療程空間，
            讓光線與材質逐步引導情緒，在進入療程之前，先讓感受慢下來。
          </p>
        </div>
      </section>

      {/* 01 ARRIVAL */}
      <section
        className="asarise-arrival"
        style={{
          width: "72vw",
          maxWidth: "1160px",
          margin: "0 auto 130px",
        }}
      >
        <div
          className="asarise-section-heading"
          style={{
            display: "grid",
            gridTemplateColumns: "28% 72%",
            marginBottom: "70px",
          }}
        >
          <p
            style={{
              margin: "8px 0 0",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "#77716a",
            }}
          >
            01 / ARRIVAL
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px, 3vw, 52px)",
              lineHeight: 1.5,
              fontWeight: 400,
              letterSpacing: "-0.035em",
            }}
          >
            從踏入空間開始，
            <br />
            讓城市的節奏慢慢退去。
          </h2>
        </div>

        <div
          className="asarise-arrival-image"
          style={{
            width: "60%",
            margin: "0 auto",
          }}
        >
          <Image
            src={images.corridor01}
            alt="ASARISE 肌膚管理中心廊道"
            width={1600}
            height={1067}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>

      {/* 02 RECEPTION */}
      <section
        className="asarise-reception"
        style={{
          width: "72vw",
          maxWidth: "1160px",
          margin: "0 auto 130px",
        }}
      >
        <div
          className="asarise-reception-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "start",
          }}
        >
          <div>
            <Image
              src={images.logo}
              alt="ASARISE 品牌接待櫃台"
              width={1600}
              height={1067}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />

            <p
              style={{
                margin: "18px 0 0",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "#77716a",
              }}
            >
              02 / RECEPTION
            </p>
          </div>

          <div

          >
            <Image
              src={images.reception}
              alt="ASARISE 專業肌膚管理接待區"
              width={1000}
              height={1500}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>

      {/* 03 LIGHT & CURVE */}
      <section
        className="asarise-light"
        style={{
          width: "72vw",
          maxWidth: "1160px",
          margin: "0 auto 130px",
        }}
      >
        <div
          className="asarise-light-heading"
          style={{
            width: "60%",
            marginLeft: "auto",
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              margin: "0 0 25px",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "#77716a",
            }}
          >
            03 / LIGHT & CURVE
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px, 3vw, 52px)",
              lineHeight: 1.5,
              fontWeight: 400,
              letterSpacing: "-0.035em",
            }}
          >
            光線沿著弧形界面延伸，
            <br />
            讓行走也成為情緒的轉換。
          </h2>
        </div>

        <div
          className="asarise-light-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "55% 43%",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <div
            style={{
              marginTop: "80px",
            }}
          >
            <Image
              src={images.corridor02}
              alt="ASARISE 弧形廊道設計"
              width={1000}
              height={1500}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <Image
            src={images.hero}
            alt="ASARISE 光影與弧形空間"
            width={1600}
            height={1067}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>

      {/* 04 TREATMENT */}
<section
  className="asarise-treatment"
  style={{
    width: "76vw",
    maxWidth: "1220px",
    margin: "0 auto 130px",
    display: "grid",
    gridTemplateColumns: "42% 48%",
    gap: "6%",
    alignItems: "center",
  }}
>
<div
  className="asarise-treatment-text"
  style={{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  }}
>
  <p
    style={{
      margin: "0 0 26px",
      padding: 0,
      fontSize: "11px",
      fontWeight: 500,
      letterSpacing: "0.25em",
      color: "#77716a",
    }}
  >
    04 / TREATMENT
  </p>

  <h2
    style={{
      width: "100%",
      margin: "0 0 32px",
      padding: 0,
      fontSize: "clamp(30px, 2.7vw, 46px)",
      lineHeight: 1.5,
      fontWeight: 400,
      letterSpacing: "-0.03em",
    }}
  >
    把療程需要的安定感，
    <br />
    留在最純粹的空間裡。
  </h2>

  <p
    style={{
      width: "100%",
      maxWidth: "330px",
      margin: 0,
      padding: 0,
      fontSize: "12px",
      lineHeight: 2,
      letterSpacing: "0.03em",
      color: "#6e6963",
    }}
  >
    柔和的光線與低彩度材質降低視覺干擾，
    讓每一間療程空間保持安靜、舒適而專注。
  </p>
</div>

        <Image
          src={images.treatment}
          alt="ASARISE 獨立肌膚療程空間"
          width={1600}
          height={1067}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
      </section>

      {/* 05 WAITING */}
      <section
        className="asarise-waiting"
        style={{
          width: "72vw",
          maxWidth: "1160px",
          margin: "0 auto 130px",
        }}
      >
        <div
          className="asarise-waiting-image"
          style={{
            width: "58%",
            margin: "0 auto",
          }}
        >
          <Image
            src={images.waiting}
            alt="ASARISE 弧形沙發等候空間"
            width={1600}
            height={1067}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        <div
          className="asarise-waiting-text"
          style={{
            width: "58%",
            margin: "35px auto 0",
          }}
        >
          <p
            style={{
              margin: "0 0 20px",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "#77716a",
            }}
          >
            05 / WAITING
          </p>

          <p
            style={{
              margin: 0,
              fontSize: "13px",
              lineHeight: 2,
            }}
          >
            留下一段不被催促的等待，
            讓服務開始以前，先有片刻的平靜。
          </p>
        </div>
      </section>

   {/* 06 DETAILS */}
<section
  className="asarise-details"
  style={{
    width: "80vw",
    maxWidth: "1320px",
    margin: "0 auto 130px",
    display: "grid",
    gridTemplateColumns: "46% 46%",
    gap: "8%",
    alignItems: "center",
  }}
>
  <Image
    src={images.detail}
    alt="ASARISE 洗手台與收納細節"
    width={1600}
    height={1067}
    style={{
      display: "block",
      width: "100%",
      height: "auto",
    }}
  />

  <div
    className="asarise-details-text"
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }}
  >
    <p
      style={{
        margin: "0 0 28px",
        padding: 0,
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.25em",
        color: "#77716a",
      }}
    >
      06 / DETAILS
    </p>

    <h2
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
        fontSize: "clamp(30px, 2.35vw, 42px)",
        lineHeight: 1.5,
        fontWeight: 400,
        letterSpacing: "-0.03em",
      }}
    >
      將機能收進純淨的立面，
      <br />
      讓細節回到使用本身。
    </h2>
  </div>
</section>
      {/* 07 TRANSFORMATION */}
      <section
        className="asarise-transformation"
        style={{
          width: "72vw",
          maxWidth: "1160px",
          margin: "0 auto 170px",
        }}
      >
        <div
          className="asarise-transformation-heading"
          style={{
            marginBottom: "70px",
          }}
        >
          <p
            style={{
              margin: "0 0 25px",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "#77716a",
            }}
          >
            07 / TRANSFORMATION
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(36px, 3.3vw, 56px)",
              lineHeight: 1.45,
              fontWeight: 400,
            }}
          >
            FROM RESIDENTIAL
            <br />
            TO A PLACE OF REST.
          </h2>
        </div>

        <div
          className="asarise-transformation-image-one"
          style={{
            width: "82%",
            margin: "0 auto 60px",
          }}
        >
          <Image
            src={images.transformation02}
            alt="ASARISE 廊道翻修前施工中與完工比較"
            width={1600}
            height={1067}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        <div
          className="asarise-transformation-image-two"
          style={{
            width: "68%",
            margin: "0 auto",
          }}
        >
          <Image
            src={images.transformation01}
            alt="ASARISE 療程空間翻修前施工中與完工比較"
            width={1600}
            height={1067}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>

      {/* END */}
      <section
        className="asarise-end"
        style={{
          width: "72vw",
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "150px 0",
          borderTop: "1px solid #d6d1ca",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.25em",
          }}
        >
          ASARISE · TAIPEI
        </p>

        <h2
          style={{
            margin: "35px 0 90px",
            fontSize: "clamp(46px, 6vw, 92px)",
            lineHeight: 1,
            fontWeight: 400,
            letterSpacing: "-0.05em",
          }}
        >
          A QUIET PLACE
          <br />
          WITHIN THE CITY.
        </h2>

        <Link
          href="/#projects"
          style={{
            color: "inherit",
            textDecoration: "none",
            fontSize: "11px",
            letterSpacing: "0.18em",
          }}
        >
          ← ALL PROJECTS
        </Link>
      </section>
    </main>
  );
}