import Image from "next/image";

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
  return (
    <main
      style={{
        background: "#f3f0e9",
        color: "#181818",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* VIDEO HERO */}
      <section
        style={{
          width: "100%",
          padding: "24px 4vw 0",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "82vh",
              objectFit: "contain",
              display: "block",
              background: "#111",
            }}
          />
        </div>
      </section>

      {/* TITLE */}
      <section
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "100px 6vw 130px",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            margin: "0 0 26px",
            fontSize: "12px",
            letterSpacing: "0.28em",
            color: "#777168",
          }}
        >
          RESIDENTIAL · NEW BUILD · TAINAN
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(52px, 8vw, 118px)",
                fontWeight: 400,
                lineHeight: 0.92,
                letterSpacing: "-0.055em",
              }}
            >
              劉宅
            </h1>

            <p
              style={{
                margin: "20px 0 0",
                fontSize: "14px",
                letterSpacing: "0.2em",
              }}
            >
              LIU RESIDENCE
            </p>
          </div>

          <p
            style={{
              margin: 0,
              maxWidth: "590px",
              fontSize: "clamp(28px, 3.3vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.45,
              letterSpacing: "0.02em",
            }}
          >
            讓木質延續，
            <br />
            讓生活自然流動。
          </p>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 6vw 150px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            borderTop: "1px solid rgba(0,0,0,.18)",
            paddingTop: "32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "34px",
          }}
        >
          {[
            ["LOCATION", "台南市安南區"],
            ["TYPE", "新成屋"],
            ["AREA", "18 坪"],
            ["STYLE", "簡約 × 日系侘寂"],
            ["PHOTOGRAPHY", "無著色工作室"],
          ].map(([label, value]) => (
            <div key={label}>
              <p
                style={{
                  margin: "0 0 10px",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "#898279",
                }}
              >
                {label}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: 1.7,
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONCEPT */}
      <section
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "20px 6vw 170px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(220px, .75fr) minmax(300px, 1.25fr)",
            gap: "clamp(50px, 10vw, 180px)",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 34px",
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "#777168",
              }}
            >
              01 / PROJECT CONCEPT
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(28px, 3vw, 44px)",
                lineHeight: 1.55,
                fontWeight: 300,
                letterSpacing: "0.01em",
              }}
            >
              以連續木質，
              <br />
              梳理生活的節奏。
            </h2>
          </div>

          <div
            style={{
              maxWidth: "610px",
              paddingTop: "42px",
            }}
          >
            <p
              style={{
                margin: "0 0 26px",
                fontSize: "16px",
                lineHeight: 2.15,
                color: "#5d5852",
              }}
            >
              在有限尺度的開放式場域裡，我們以「連續木質」作為空間的主軸，
              梳理從玄關、廚房、餐區一路延伸至客廳的生活動線。
            </p>

            <p
              style={{
                margin: "0 0 26px",
                fontSize: "16px",
                lineHeight: 2.15,
                color: "#5d5852",
              }}
            >
              木質櫃體不只是收納，也成為串聯不同機能的空間界面。
              深淺材質、留白與光線彼此交錯，在有限的尺度裡建立安定而連續的視覺節奏。
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: 2.15,
                color: "#5d5852",
              }}
            >
              兩盞如滿月般的吊燈落在餐桌上方，柔化木質量體的秩序感，
              也成為空間裡最溫柔的節點。
            </p>
          </div>
        </div>
      </section>

      {/* 02 CONTINUOUS SPACE */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 5vw 180px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginBottom: "70px" }}>
          <p
            style={{
              margin: "0 0 22px",
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#777168",
            }}
          >
            02 / CONTINUOUS SPACE
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px, 3.2vw, 46px)",
              lineHeight: 1.5,
              fontWeight: 300,
            }}
          >
            一道連續的木質語彙，
            <br />
            串起家的日常。
          </h2>
        </div>

        <div style={{ marginBottom: "36px" }}>
          <ProjectImage
            src={images.living04}
            alt="劉宅開放式客餐廳空間"
            priority
          />
        </div>

        <div
          style={{
            width: "82%",
            marginLeft: "auto",
            marginBottom: "110px",
          }}
        >
          <ProjectImage
            src={images.living05}
            alt="劉宅客餐廳與木質空間"
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "start",
          }}
        >
          <ProjectImage
            src={images.living03}
            alt="劉宅客廳收納設計"
          />
          <ProjectImage
            src={images.living06}
            alt="劉宅奶油風客餐廳"
          />
        </div>
      </section>

      {/* 03 DINING */}
      <section
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "20px 6vw 190px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: ".8fr 1.2fr",
            gap: "clamp(45px, 9vw, 150px)",
            alignItems: "end",
            marginBottom: "80px",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 26px",
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "#777168",
              }}
            >
              03 / DINING & STORAGE
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(28px, 3.2vw, 46px)",
                lineHeight: 1.5,
                fontWeight: 300,
              }}
            >
              讓收納成為
              <br />
              空間的一部分。
            </h2>
          </div>

          <p
            style={{
              margin: 0,
              maxWidth: "530px",
              fontSize: "15px",
              lineHeight: 2,
              color: "#625d57",
            }}
          >
            櫃體沿著公共空間展開，透過開放展示、封閉收納與材質轉折，
            將日常物件自然地收進空間之中。
          </p>
        </div>

        <div style={{ width: "92%", margin: "0 auto 34px" }}>
          <ProjectImage
            src={images.dining03}
            alt="劉宅餐廳與木質櫃體"
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr .78fr",
            gap: "32px",
            alignItems: "start",
            marginBottom: "110px",
          }}
        >
          <ProjectImage
            src={images.dining02}
            alt="劉宅餐桌與滿月吊燈"
          />

          <div style={{ paddingTop: "80px" }}>
            <ProjectImage
              src={images.dining01}
              alt="劉宅餐廳空間"
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: ".72fr 1.28fr",
            gap: "34px",
            alignItems: "center",
            marginBottom: "100px",
          }}
        >
          <ProjectImage
            src={images.storage03}
            alt="劉宅圓弧木質細節"
          />
          <ProjectImage
            src={images.storage02}
            alt="劉宅木質收納櫃"
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "start",
          }}
        >
          <ProjectImage
            src={images.storage01}
            alt="劉宅系統櫃收納"
          />
          <ProjectImage
            src={images.storage05}
            alt="劉宅木質櫃體設計"
          />
        </div>
      </section>

      {/* 04 DETAILS */}
      <section
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 7vw 190px",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            margin: "0 0 25px",
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "#777168",
          }}
        >
          04 / LIGHT & DETAILS
        </p>

        <h2
          style={{
            margin: "0 0 80px",
            fontSize: "clamp(28px, 3.2vw, 46px)",
            fontWeight: 300,
            lineHeight: 1.5,
          }}
        >
          光落在木質之間，
          <br />
          留下柔和的層次。
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: ".72fr 1.28fr",
            gap: "50px",
            alignItems: "start",
            marginBottom: "110px",
          }}
        >
          <div style={{ width: "88%" }}>
            <ProjectImage
              src={images.detail01}
              alt="劉宅木質展示與細節"
            />
          </div>

          <div style={{ paddingTop: "100px" }}>
            <ProjectImage
              src={images.storage04}
              alt="劉宅間接照明設計"
            />
          </div>
        </div>

        <div style={{ width: "82%", marginLeft: "auto" }}>
          <ProjectImage
            src={images.storage06}
            alt="劉宅系統櫃與空間細節"
          />
        </div>
      </section>

      {/* 05 LIVING */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 5vw 190px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "50px",
            flexWrap: "wrap",
            marginBottom: "75px",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 25px",
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "#777168",
              }}
            >
              05 / LIVING
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(28px, 3.2vw, 46px)",
                fontWeight: 300,
                lineHeight: 1.5,
              }}
            >
              留白之中，
              <br />
              放進真正的生活。
            </h2>
          </div>
        </div>

        <div style={{ marginBottom: "35px" }}>
          <ProjectImage
            src={images.living01}
            alt="劉宅客廳全景"
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: ".72fr 1.28fr",
            gap: "34px",
            alignItems: "start",
            marginBottom: "110px",
          }}
        >
          <ProjectImage
            src={images.tv01}
            alt="劉宅電視牆"
          />

          <div style={{ paddingTop: "90px" }}>
            <ProjectImage
              src={images.living02}
              alt="劉宅電視櫃設計"
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: ".7fr 1.3fr",
            gap: "45px",
            alignItems: "center",
          }}
        >
          <ProjectImage
            src={images.surf02}
            alt="劉宅展示收藏設計"
          />

          <ProjectImage
            src={images.surf01}
            alt="劉宅生活收藏與空間"
          />
        </div>
      </section>

      {/* 06 PRIVATE SPACE */}
      <section
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 6vw 190px",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            margin: "0 0 24px",
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "#777168",
          }}
        >
          06 / PRIVATE SPACE
        </p>

        <h2
          style={{
            margin: "0 0 80px",
            fontSize: "clamp(28px, 3.2vw, 46px)",
            fontWeight: 300,
            lineHeight: 1.5,
          }}
        >
          從公共空間的連續，
          <br />
          回到屬於自己的安靜。
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr .85fr",
            gap: "36px",
            alignItems: "start",
            marginBottom: "120px",
          }}
        >
          <ProjectImage
            src={images.bedroom01}
            alt="劉宅臥室"
          />

          <div style={{ paddingTop: "90px" }}>
            <ProjectImage
              src={images.bedroom02}
              alt="劉宅臥室細節"
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: ".82fr 1.18fr",
            gap: "38px",
            alignItems: "center",
          }}
        >
          <ProjectImage
            src={images.dressing01}
            alt="劉宅更衣間"
          />
          <ProjectImage
            src={images.dressing02}
            alt="劉宅訂製更衣室"
          />
        </div>
      </section>

      {/* END */}
      <section
        style={{
          padding: "80px 6vw 120px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            margin: "0 0 22px",
            fontSize: "10px",
            letterSpacing: "0.32em",
            color: "#777168",
          }}
        >
          LIU RESIDENCE
        </p>

        <h2
          style={{
            margin: 0,
            fontSize: "clamp(38px, 6vw, 82px)",
            fontWeight: 300,
            lineHeight: 1.3,
          }}
        >
          HOME,
          <br />
          IN CONTINUITY.
        </h2>
      </section>
    </main>
  );
}