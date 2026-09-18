import Image from "next/image";
import Link from "next/link";

const images = {
  storage:
    "/images/lin-residence/台南市_新成屋_圓弧系統櫃_奶油風_收納櫃體.jpg.jpg",

  bedroomWide:
    "/images/lin-residence/台南市_新成屋_奶油風_洗衣籃收納_小坪數 (9).jpg",

  surfboard:
    "/images/lin-residence/台南市_新成屋_奶油風_衝浪元素_室內設計客廳.jpg.jpg",

  dining:
    "/images/lin-residence/台南市_新成屋_奶油風室內設計_小坪數餐廳空間.jpg.jpg",

  livingWide:
    "/images/lin-residence/台南市_新成屋_室內設計_奶油風_小坪數客廳.jpg.jpg",

  surfFinDetail:
    "/images/lin-residence/台南市_新成屋_室內設計_木作展示櫃_衝浪收藏.jpg.jpg",

  hero:
    "/images/lin-residence/台南市_新成屋_小坪數_衝浪主題_奶油風客廳設計.jpg.jpg",

  livingDining:
    "/images/lin-residence/台南市_新成屋_小坪數室內設計_奶油風格_客廳餐廳整合.jpg.jpg",

  bedroomDetail:
    "/images/lin-residence/台南市_新成屋_臥室設計_仛寂風_木質感床頭燈.jpg.jpg",

  bedroomFront:
    "/images/lin-residence/台南市_新成屋_臥室設計_奶油風_床頭木作背板.jpg.jpg",
};

const imageStyle = {
  display: "block",
  width: "100%",
  height: "auto",
} as const;

const labelStyle = {
  margin: "0 0 24px",
  fontSize: "11px",
  letterSpacing: "0.28em",
  color: "#77716a",
} as const;

const paragraphStyle = {
  margin: 0,
  fontSize: "14px",
  lineHeight: 2.15,
  letterSpacing: "0.035em",
  color: "#625e59",
} as const;

export default function LinResidencePage() {
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
          margin: "90px auto 160px",
        }}
      >
        <p style={labelStyle}>
          RESIDENTIAL · NEW BUILD · TAINAN
        </p>

        <h1
          style={{
            margin: "0 0 30px",
            fontSize: "clamp(52px, 7vw, 108px)",
            lineHeight: 0.95,
            fontWeight: 400,
            letterSpacing: "-0.045em",
          }}
        >
          LIN
          <br />
          RESIDENCE
        </h1>

        <p
          style={{
            margin: "0 0 68px",
            fontSize: "14px",
            letterSpacing: "0.16em",
            color: "#6e6963",
          }}
        >
          林宅
        </p>

        <div
          style={{
            width: "78%",
            maxWidth: "1080px",
            marginLeft: "auto",
          }}
        >
          <Image
            src={images.hero}
            alt="林宅客餐廳"
            width={2000}
            height={1333}
            priority
            style={imageStyle}
          />
        </div>
      </section>

      {/* 01 PROJECT CONCEPT */}
      <section
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto 180px",
          display: "grid",
          gridTemplateColumns: "30% 64%",
          gap: "6%",
          alignItems: "start",
        }}
      >
        <div>
          <p style={labelStyle}>01 / PROJECT</p>

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
            <p>AREA　17 坪</p>
            <p>STYLE　北歐 × 奶油</p>
            <p>PROGRAM　RESIDENCE</p>
          </div>
        </div>

        <div>
          <h2
            style={{
              margin: "0 0 46px",
              fontSize: "clamp(34px, 3.5vw, 58px)",
              lineHeight: 1.5,
              fontWeight: 400,
              letterSpacing: "-0.025em",
            }}
          >
            把喜歡的生活，
            <br />
            放進家的日常。
          </h2>

          <div
            style={{
              maxWidth: "690px",
              fontSize: "15px",
              lineHeight: 2.15,
              letterSpacing: "0.04em",
              color: "#57534e",
            }}
          >
            <p>
              對熱愛衝浪的屋主而言，家不只是休息的地方，
              也應該保留屬於自己的生活痕跡。
            </p>

            <p>
              我們將北歐風格的清爽與奶油色調的柔和感結合，
              以淺木色、暖白與流暢的曲線作為空間基底，
              讓 17 坪的居住尺度維持明亮、自然與放鬆。
            </p>

            <p>
              開放式客餐廳讓光線在空間中自由流動，
              而屋主最喜愛的衝浪收藏，也不再只是被收起來的興趣，
              而是成為這個家最鮮明的生活表情。
            </p>
          </div>
        </div>
      </section>

      {/* 02 LIVING */}
      <section
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto 180px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "42% 52%",
            gap: "6%",
            alignItems: "start",
            marginBottom: "58px",
          }}
        >
          <div>
            <p style={labelStyle}>02 / LIVING & DINING</p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 48px)",
                lineHeight: 1.55,
                fontWeight: 400,
                whiteSpace: "nowrap",
              }}
            >
              讓光線進來，
              <br />
              也讓生活自由展開。
            </h2>
          </div>

          <p style={paragraphStyle}>
            開放式的客餐廳減少空間之間的阻隔，
            讓自然光與視線能夠延伸至每一處角落。
            木質、奶茶色與柔和的白色彼此交疊，
            在有限坪數裡建立輕盈而舒適的生活尺度。
          </p>
        </div>

        <div
          style={{
            width: "84%",
            maxWidth: "1080px",
            marginLeft: "auto",
          }}
        >
          <Image
            src={images.livingWide}
            alt="林宅開放式客餐廳"
            width={2000}
            height={1333}
            style={imageStyle}
          />
        </div>

        <div
          style={{
            width: "66%",
            maxWidth: "850px",
            marginTop: "42px",
          }}
        >
          <Image
            src={images.livingDining}
            alt="林宅客餐廳另一視角"
            width={2000}
            height={1333}
            style={imageStyle}
          />
        </div>
      </section>

      {/* 03 SURF */}
      <section
        style={{
          width: "78vw",
          maxWidth: "1220px",
          margin: "0 auto 190px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "38% 48%",
            gap: "14%",
            alignItems: "center",
          }}
        >
          <div>
            <p style={labelStyle}>03 / SURF & LIFE</p>

            <h2
              style={{
                margin: "0 0 38px",
                fontSize: "clamp(32px, 3.2vw, 52px)",
                lineHeight: 1.5,
                fontWeight: 400,
              }}
            >
              292 公分，
              <br />
              與空間相差 5 公分。
            </h2>

            <p style={paragraphStyle}>
              大樓室內高度 297 公分，而屋主的衝浪板高度達到 292 公分。
              僅僅五公分的差距，成為設計過程中最有趣的挑戰之一。
            </p>

            <p
              style={{
                ...paragraphStyle,
                marginTop: "22px",
              }}
            >
              最後，我們沒有選擇把它收起來。
              而是將衝浪板與屏風機能結合，
              讓興趣直接成為空間的一部分。
            </p>
          </div>

          <div
            style={{
              width: "88%",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <Image
              src={images.surfboard}
              alt="林宅衝浪板屏風"
              width={1200}
              height={1800}
              style={imageStyle}
            />
          </div>
        </div>
      </section>

      {/* 04 COLLECTION */}
      <section
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto 180px",
        }}
      >
        <div
          style={{
            marginBottom: "54px",
            maxWidth: "700px",
          }}
        >
          <p style={labelStyle}>04 / COLLECTION</p>

          <h2
            style={{
              margin: "0 0 30px",
              fontSize: "clamp(32px, 3.2vw, 52px)",
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            收藏不是裝飾，
            <br />
            而是生活留下的軌跡。
          </h2>

          <p
            style={{
              ...paragraphStyle,
              maxWidth: "560px",
            }}
          >
            將不同時期累積的衝浪魚鰭轉化為牆面的展示，
            讓原本容易被收進櫃體的收藏，
            成為每天回家都能看見的生活風景。
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "38% 54%",
            gap: "8%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "88%",
            }}
          >
            <Image
              src={images.surfFinDetail}
              alt="林宅衝浪魚鰭收藏展示"
              width={1200}
              height={1800}
              style={imageStyle}
            />
          </div>

          <div>
            <Image
              src={images.storage}
              alt="林宅衝浪收藏與空間細節"
              width={1200}
              height={1800}
              style={imageStyle}
            />
          </div>
        </div>
      </section>

      {/* 05 DINING & STORAGE */}
      <section
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto 190px",
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
              alt="林宅餐廳與收納空間"
              width={2000}
              height={1333}
              style={imageStyle}
            />
          </div>

          <div>
            <p style={labelStyle}>05 / DINING & STORAGE</p>

            <h2
              style={{
                margin: "0 0 32px",
                fontSize: "clamp(30px, 3vw, 48px)",
                lineHeight: 1.55,
                fontWeight: 400,
              }}
            >
              收納退後，
              <br />
              生活向前。
            </h2>

            <p style={paragraphStyle}>
              沿牆整合的大面收納，
              將日常物件安靜地收進空間之中。
              櫃體以淺色木紋、暖白與圓弧收邊降低量體感，
              讓機能存在，卻不成為視覺負擔。
            </p>
          </div>
        </div>
      </section>

      {/* 06 DETAILS */}
      <section
        style={{
          width: "74vw",
          maxWidth: "1120px",
          margin: "0 auto 190px",
        }}
      >
        <p style={labelStyle}>06 / DETAILS</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "44% 48%",
            gap: "8%",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                margin: "0 0 38px",
                fontSize: "clamp(32px, 3.2vw, 50px)",
                lineHeight: 1.55,
                fontWeight: 400,
              }}
            >
              用曲線，
              <br />
              柔化小宅的邊界。
            </h2>

            <p
              style={{
                ...paragraphStyle,
                maxWidth: "440px",
              }}
            >
              從天花燈帶到櫃體轉角，
              圓弧語彙持續出現在空間裡，
              在簡潔的北歐基調中增加柔和感，
              也讓行走於小坪數空間中的感受更加流暢。
            </p>
          </div>

          <div>
            <Image
              src={images.storage}
              alt="林宅圓弧系統櫃細節"
              width={1200}
              height={1800}
              style={imageStyle}
            />
          </div>
        </div>
      </section>

      {/* 07 BEDROOM */}
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
            gridTemplateColumns: "30% 64%",
            gap: "6%",
            alignItems: "end",
            marginBottom: "58px",
          }}
        >
          <div>
            <p style={labelStyle}>07 / BEDROOM</p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(32px, 3.2vw, 50px)",
                lineHeight: 1.55,
                fontWeight: 400,
              }}
            >
              回到房間，
              <br />
              慢慢安靜下來。
            </h2>
          </div>

          <p
            style={{
              ...paragraphStyle,
              maxWidth: "520px",
            }}
          >
            主臥將公共空間的淺色調轉化為更沉靜的木質語彙。
            溫潤的床頭木作、間接光源與自然材質，
            讓休息成為一天生活真正放慢的時刻。
          </p>
        </div>

        <div
          style={{
            width: "82%",
            maxWidth: "1050px",
            marginLeft: "auto",
          }}
        >
          <Image
            src={images.bedroomWide}
            alt="林宅主臥"
            width={2000}
            height={1333}
            style={imageStyle}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "58% 30%",
            gap: "8%",
            alignItems: "start",
            marginTop: "46px",
          }}
        >
          <div>
            <Image
              src={images.bedroomFront}
              alt="林宅主臥床頭設計"
              width={2000}
              height={1333}
              style={imageStyle}
            />
          </div>

          <div
            style={{
              width: "90%",
              marginLeft: "auto",
            }}
          >
            <Image
              src={images.bedroomDetail}
              alt="林宅床頭吊燈細節"
              width={1200}
              height={1800}
              style={imageStyle}
            />
          </div>
        </div>
      </section>

      {/* FINAL LIVING IMAGE */}
      <section
        style={{
          width: "72vw",
          maxWidth: "1080px",
          margin: "0 auto 190px",
        }}
      >
        <Image
          src={images.livingDining}
          alt="林宅日常生活空間"
          width={2000}
          height={1333}
          style={imageStyle}
        />
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
        <p style={labelStyle}>LIN RESIDENCE · TAINAN</p>

        <h2
          style={{
            margin: "0 0 70px",
            maxWidth: "950px",
            fontSize: "clamp(42px, 5.5vw, 82px)",
            lineHeight: 1.15,
            fontWeight: 400,
            letterSpacing: "-0.035em",
          }}
        >
          A home shaped
          <br />
          around what you love.
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