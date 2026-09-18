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
      style={{
        minHeight: "100vh",
        background: "#f4f2ed",
        color: "#1f1f1d",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          width: "88vw",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "34px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            color: "inherit",
            textDecoration: "none",
            fontSize: "14px",
            letterSpacing: "0.18em",
          }}
        >
          U.E DESIGN
        </Link>

        <Link
          href="/#projects"
          style={{
            color: "inherit",
            textDecoration: "none",
            fontSize: "11px",
            letterSpacing: "0.18em",
          }}
        >
          PROJECTS
        </Link>
      </header>

      {/* HERO */}
      <section
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
        <div>
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

        <div>
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
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto 170px",
        }}
      >
<div
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
      </section>

      {/* 03 DINING */}
      <section
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto 170px",
        }}
      >
        <div
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
        style={{
          width: "76vw",
          maxWidth: "1180px",
          margin: "0 auto 180px",
        }}
      >
        <div
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
      </section>

      {/* 05 BEDROOM */}
      <section
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
        <div>
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
      </section>

      {/* END */}
      <section
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