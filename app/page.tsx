"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [showOpening, setShowOpening] = useState(false);
  const [openingReady, setOpeningReady] = useState(false);
  const [openingIndex, setOpeningIndex] = useState(0);
  const [openingLeaving, setOpeningLeaving] = useState(false);

  const openingImages = [
    "/images/shi-residence/DSC07476.jpg",
    "/images/hsu-residence/_DSF4242客廳主畫面.jpg",
    "/images/asarise-commercial space/11E2F0E1-9A94-4BD7-9789-2F5D2CC6B29D.jpg",
    "/images/xu-residence/1B6BC5BC-2F32-42FA-B1A1-9290325E6341.jpg",
    "/images/kung-residence/Gemini_Generated_Image_1agmmr1agmmr1agm.jpg",
    "/images/lin-residence/台南市_新成屋_小坪數室內設計_奶油風格_客廳餐廳整合.jpg.jpg",
    "/images/liu-residence/01_台南室內設計_新成屋裝潢_奶油風客廳.jpg.jpg",

    "/images/shi-residence/DSC07468.jpg",
    "/images/hsu-residence/_DSF4263餐廳.jpg",
    "/images/kung-residence/living-wide.jpg",
    "/images/lin-residence/台南市_新成屋_奶油風室內設計_小坪數餐廳空間.jpg.jpg",
    "/images/liu-residence/06_台南新成屋裝潢_小坪數_餐廳設計.jpg.jpg",

    "/images/shi-residence/DSC07532.jpg",
    "/images/hsu-residence/_DSF4269廚房.jpg",
    "/images/kung-residence/bedroom-wide.jpg",
    "/images/lin-residence/台南市_新成屋_臥室設計_奶油風_床頭木作背板.jpg.jpg",
    "/images/liu-residence/15_台南住宅設計_更衣間規劃_居家設計.jpg.jpg",

    "/images/shi-residence/DSC07584.jpg",
    "/images/hsu-residence/_DSF4294主臥室.jpg",
    "/images/liu-residence/23_台南室內設計_詫寂風_小坪數住宅.jpg.jpg",
  ];

  useEffect(() => {
    const entered = window.sessionStorage.getItem("ue-opening-entered");
    if (!entered) setShowOpening(true);
    setOpeningReady(true);
  }, []);

  useEffect(() => {
    if (!showOpening) return;

    const timer = window.setInterval(() => {
      setOpeningIndex((current) => (current + 1) % openingImages.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [showOpening, openingImages.length]);

  function enterSite() {
    window.sessionStorage.setItem("ue-opening-entered", "1");
    setOpeningLeaving(true);

    window.setTimeout(() => {
      setShowOpening(false);
      setOpeningLeaving(false);
    }, 900);
  }

  const projects = [
    {
      no: "01",
      name: "SHI RESIDENCE",
      zh: "施宅",
      meta: "新成屋 · 24坪 · 極簡 × 日系",
      href: "/projects/shi-residence",
      image: "/images/shi-residence/DSC07476.jpg",
    },
    {
      no: "02",
      name: "HSU RESIDENCE",
      zh: "徐宅",
      meta: "中古屋翻新 · 50坪 · 復古 × 工業",
      href: "/projects/hsu-residence",
      image: "/images/hsu-residence/_DSF4242客廳主畫面.jpg",
    },
    {
      no: "03",
      name: "ASARISE",
      zh: "ASARISE 專業肌膚管理",
      meta: "商業空間 · 25坪 · 侘寂 × 奶油",
      href: "/projects/asarise",
      image:
        "/images/asarise-commercial space/11E2F0E1-9A94-4BD7-9789-2F5D2CC6B29D.jpg",
    },
    {
      no: "04",
      name: "XU RESIDENCE",
      zh: "許宅",
      meta: "中古屋翻新 · 52坪 · 無印 × 原木",
      href: "/projects/xu-residence",
      image:
        "/images/xu-residence/1B6BC5BC-2F32-42FA-B1A1-9290325E6341.jpg",
    },
    {
      no: "05",
      name: "KUNG RESIDENCE",
      zh: "龔宅",
      meta: "新成屋 · 15坪 · 極簡 × 都會",
      href: "/projects/kung-residence",
      image:
        "/images/kung-residence/Gemini_Generated_Image_1agmmr1agmmr1agm.jpg",
    },
    {
      no: "06",
      name: "LIN RESIDENCE",
      zh: "林宅",
      meta: "新成屋 · 17坪 · 北歐 × 奶油",
      href: "/projects/lin-residence",
      image:
        "/images/lin-residence/台南市_新成屋_小坪數室內設計_奶油風格_客廳餐廳整合.jpg.jpg",
    },
    {
      no: "07",
      name: "LIU RESIDENCE",
      zh: "劉宅",
      meta: "新成屋 · 18坪 · 簡約 × 日系侘寂",
      href: "/projects/liu-residence",
      image:
        "/images/liu-residence/01_台南室內設計_新成屋裝潢_奶油風客廳.jpg.jpg",
    },
  ];

  return (
    <main
      style={{
        margin: 0,
        background: "#f4f2ed",
        color: "#171717",
        fontFamily:
          'Inter, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif',
      }}
    >
      {openingReady && showOpening && (
        <div
          className={`ue-opening ${openingLeaving ? "ue-opening-leaving" : ""}`}
          role="dialog"
          aria-label="U.E Design opening"
        >
          <div className="ue-opening-images" aria-hidden="true">
            {openingImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt=""
                className={`ue-opening-image ${
                  index === openingIndex ? "is-active" : ""
                }`}
              />
            ))}
          </div>

          <div className="ue-opening-shade" aria-hidden="true" />

          <div className="ue-opening-center">
            <img
              src="/images/logo.png"
              alt="U.E Design"
              className="ue-opening-logo"
            />

            <p className="ue-opening-line">MAKING HOME, EFFORTLESSLY.</p>

            <button
              type="button"
              className="ue-opening-enter"
              onClick={enterSite}
            >
              ENTER <span aria-hidden="true">↗</span>
            </button>
          </div>

          <p className="ue-opening-caption">
            INTERIOR DESIGN · TAINAN
          </p>
        </div>
      )}

      {/* ================= HEADER ================= */}
<header
  className="ue-header"
  style={{
          width: "92%",
          maxWidth: "1500px",
          margin: "0 auto",
          minHeight: "120px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <Link href="/" style={{ display: "block" }}>
<img
  className="ue-logo"
  src="/images/logo.png"
            alt="寓易空間設計 U.E Interior Design"
            style={{
              display: "block",
              width: "118px",
              height: "82px",
              objectFit: "contain",
            }}
          />
        </Link>

<nav
  className="ue-nav"
  style={{
            display: "flex",
            gap: "clamp(22px, 3vw, 52px)",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            fontSize: "12px",
            letterSpacing: "0.18em",
          }}
        >
          <a href="#projects" style={navStyle}>
            PROJECTS
          </a>
          <a href="#about" style={navStyle}>
            ABOUT
          </a>
          <a href="#service" style={navStyle}>
            SERVICE
          </a>
          <Link href="/journal" style={navStyle}>
            JOURNAL
          </Link>
          <a href="#contact" style={navStyle}>
            CONTACT
          </a>
        </nav>
      </header>

      {/* ================= HERO ================= */}
<section
  className="ue-hero"
  style={{
          width: "92%",
          maxWidth: "1500px",
          margin: "0 auto",
          minHeight: "calc(100vh - 120px)",
          padding: "80px 0 70px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            margin: "0 0 38px",
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: "#77736c",
          }}
        >
          INTERIOR DESIGN · TAINAN
        </p>

<h1
  className="ue-hero-title"
  style={{
            margin: 0,
            maxWidth: "1100px",
            fontSize: "clamp(50px, 6.2vw, 88px)",
            lineHeight: 0.98,
            letterSpacing: "-0.055em",
            fontWeight: 400,
          }}
        >
          MAKING HOME,
          <br />
          EFFORTLESSLY.
        </h1>

<div
  className="ue-hero-bottom"
  style={{
    marginTop: "58px",
    display: "grid",
    gridTemplateColumns: "1fr minmax(280px, 430px)",
    gap: "60px",
    alignItems: "end",
  }}
>
          <div>
<p
  className="ue-hero-cn"
  style={{
    margin: "0 0 55px",
    fontSize: "18px",
    letterSpacing: "0.08em",
  }}
>
  讓成家，變得容易。
</p>

            <a
              href="#projects"
              style={{
                ...navStyle,
                fontSize: "11px",
                letterSpacing: "0.18em",
              }}
            >
              VIEW PROJECTS ↓
            </a>
          </div>

          <p
            className="ue-hero-meta"
            style={{
              margin: 0,
              textAlign: "right",
              fontSize: "10px",
              lineHeight: 2,
              letterSpacing: "0.16em",
              color: "#77736c",
            }}
          >
            RESIDENTIAL · RENOVATION · STYLING
            <br />
            TAIWAN
          </p>
        </div>
      </section>

     {/* ================= PROJECTS ================= */}
<section
  id="projects"
  className="ue-projects"
  style={{
          background: "#1d1d1b",
          color: "#f4f2ed",
          padding: "120px 0 150px",
        }}
      >
 <div
  className="ue-projects-inner"
  style={{
    width: "92%",
    maxWidth: "1500px",
    margin: "0 auto",
  }}
>
<div
  className="ue-projects-heading"
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
              gap: "40px",
              marginBottom: "85px",
            }}
          >
            <div>
              <p style={sectionLabelLight}>SELECTED WORKS / 2023—2026</p>

              <h2 style={sectionTitleLight}>
                SELECTED
                <br />
                PROJECTS.
              </h2>
            </div>

            <p
              className="ue-projects-intro"
              style={{
                margin: 0,
                maxWidth: "360px",
                fontSize: "13px",
                lineHeight: 2,
                letterSpacing: "0.05em",
                opacity: 0.7,
              }}
            >
              每一個空間，都從不同的生活開始。
              <br />
              從住宅到商業空間，尋找屬於使用者的答案。
            </p>
          </div>

          {projects.map((project, index) => (
            <Link
              href={project.href}
              key={project.href}
              className="ue-project-item"
              style={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                marginBottom: index === projects.length - 1 ? 0 : "120px",
              }}
            >
<div
  className="ue-project-grid"
  style={{
    display: "grid",
    gridTemplateColumns:
      index % 2 === 0 ? "62% 1fr" : "1fr 62%",
    gap: "5%",
    alignItems: "end",
  }}
>
<div
  className="ue-project-image"
  style={{
    order: index % 2 === 0 ? 0 : 1,
  }}
>
                  <img
                    src={project.image}
                    alt={`${project.zh} ${project.name}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "72vh",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                </div>

<div
  className="ue-project-info"
  style={{
    order: index % 2 === 0 ? 1 : 0,
    paddingBottom: "10px",
  }}
>
                  <p
                    style={{
                      margin: "0 0 28px",
                      fontSize: "10px",
                      letterSpacing: "0.18em",
                      opacity: 0.55,
                    }}
                  >
                    {project.no}
                  </p>

                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontSize: "clamp(24px, 2.4vw, 36px)",
                      fontWeight: 400,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {project.name}
                  </h3>

                  <p
                    style={{
                      margin: "0 0 30px",
                      fontSize: "14px",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {project.zh}
                  </p>

                  <p
                    style={{
                      margin: "0 0 40px",
                      fontSize: "11px",
                      lineHeight: 1.8,
                      letterSpacing: "0.08em",
                      opacity: 0.6,
                    }}
                  >
                    {project.meta}
                  </p>

                  <span
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.18em",
                    }}
                  >
                    VIEW PROJECT ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
<section
  id="about"
  className="ue-about"
  style={{
          width: "92%",
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "150px 0",
        }}
      >
        <p style={sectionLabel}>ABOUT / U.E DESIGN</p>

<div
  className="ue-about-grid"
  style={{
    display: "grid",
            gridTemplateColumns: "42% 1fr",
            gap: "10%",
          }}
        >
          <h2 style={sectionTitle}>
            SPACE BEGINS
            <br />
            WITH LIFE.
          </h2>

          <div>
            <p
              style={{
                margin: "0 0 65px",
                maxWidth: "620px",
                fontSize: "17px",
                lineHeight: 2,
                letterSpacing: "0.06em",
              }}
            >
              「寓易」取自寓意，也代表我們對家的想像——
              <br />
              讓成家這件事，變得容易。
              <br />
              <br />
              我們從人的生活開始思考空間，
              不急著定義風格，而是理解居住者真正需要什麼，
              再讓設計、施工與生活慢慢成為同一件事。
            </p>

            <div
              style={{
                borderTop: "1px solid rgba(23,23,23,0.18)",
              }}
            >
              <Person
                name="I LU/呂易"
                role="SOFT FURNISHING / SPATIAL STYLING"
              />
              <Person
                name="CHIA CHUN HSU/ 徐嘉駿"
                role="INTERIOR DESIGNER / PROJECT DIRECTOR"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE ================= */}
<section
  id="service"
  className="ue-service"
  style={{
          borderTop: "1px solid rgba(23,23,23,0.18)",
          padding: "135px 0 150px",
        }}
      >
<div
  className="ue-service-inner"
  style={{
    width: "92%",
    maxWidth: "1500px",
    margin: "0 auto",
          }}
        >
          <p style={sectionLabel}>WHAT WE DO / SERVICE</p>

<div
  className="ue-service-grid"
  style={{
    display: "grid",
              gridTemplateColumns: "34% 1fr",
              gap: "10%",
            }}
          >
<h2 className="ue-service-title" style={sectionTitle}>
              FROM IDEA
              <br />
              TO LIVING.
            </h2>

            <div>
              <Service
                no="01"
                en="INTERIOR DESIGN"
                zh="室內設計"
                text="從平面配置、材質、色彩到空間細節，建立完整的居住方向。"
              />

              <Service
                no="02"
                en="RENOVATION"
                zh="中古屋 / 老屋翻修"
                text="重新整理格局、機能與基礎工程，讓既有空間重新適應現在的生活。"
              />

              <Service
                no="03"
                en="CONSTRUCTION"
                zh="工程施工"
                text="從設計圖面走進施工現場，協調工序、材料與細節，讓設計真正落地。"
              />

              <Service
                no="04"
                en="SPATIAL STYLING"
                zh="軟裝配置"
                text="以家具、燈具、布料、藝術與物件，完成空間最後的生活層次。"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOURNAL ================= */}
<section
  className="ue-journal"
  style={{
          background: "#ddd9d0",
          padding: "135px 0 150px",
        }}
      >
<div
  className="ue-journal-inner"
  style={{
    width: "92%",
    maxWidth: "1500px",
    margin: "0 auto",
          }}
        >
<div
  className="ue-journal-heading"
  style={{
    display: "grid",
              gridTemplateColumns: "35% 1fr",
              gap: "8%",
              marginBottom: "65px",
            }}
          >
            <div>
              <p style={sectionLabel}>JOURNAL / SITE NOTES</p>

              <h2 
              className="ue-service-title"
              style={sectionTitle}>
                BEYOND THE
                <br />
                FINISHED SPACE.
              </h2>
            </div>

<div
  className="ue-journal-copy"
  style={{
                alignSelf: "end",
                maxWidth: "500px",
              }}
            >
              <p
                style={{
                  margin: "0 0 35px",
                  fontSize: "15px",
                  lineHeight: 2,
                  letterSpacing: "0.05em",
                }}
              >
                設計不只存在於完工照裡。
                <br />
                我們也記錄工地、材料、討論，
                以及空間從圖面走向生活的過程。
              </p>

              <Link href="/journal" style={textLink}>
                VIEW JOURNAL ↗
              </Link>
            </div>
          </div>

          <Link
            href="/journal"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <video
              src="/images/journal/寓易木工討論紀錄 - Converted with FlexClip.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                maxHeight: "70vh",
                objectFit: "contain",
                background: "#171717",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "30px",
                paddingTop: "18px",
                fontSize: "10px",
                letterSpacing: "0.16em",
              }}
            >
              <span>SITE NOTES 001 / CARPENTRY DISCUSSION</span>
              <span>U.E DESIGN ↗</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <footer
        id="contact"
        style={{
          background: "#1d1d1b",
          color: "#f4f2ed",
          padding: "140px 0 65px",
        }}
      >
        <div
          style={{
            width: "92%",
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          <p style={sectionLabelLight}>CONTACT / START A PROJECT</p>

          <h2
            style={{
              margin: "0 0 85px",
              maxWidth: "850px",
              fontSize: "clamp(36px, 5vw, 68px)",
              lineHeight: 1.05,
              fontWeight: 400,
              letterSpacing: "-0.04em",
            }}
          >
            LET&apos;S MAKE
            <br />
            HOME HAPPEN.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10%",
              paddingTop: "45px",
              borderTop: "1px solid rgba(244,242,237,0.25)",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 45px",
                  fontSize: "15px",
                  lineHeight: 2,
                  letterSpacing: "0.06em",
                }}
              >
                讓成家的想像，
                <br />
                從一次對話開始。
              </p>

              <p style={contactPerson}>
                I LU/呂易
                <br />
                <span style={contactRole}>
                  SOFT FURNISHING / SPATIAL STYLING
                </span>
              </p>

              <p style={contactPerson}>
                CHIA CHUN HSU/ 徐嘉駿
                <br />
                <span style={contactRole}>
                  INTERIOR DESIGNER / PROJECT DIRECTOR
                </span>
              </p>
            </div>

            <div>
              <p
                style={{
                  margin: "0 0 28px",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  opacity: 0.55,
                }}
              >
                FOLLOW / CONTACT
              </p>

              <div
                style={{
                  borderTop: "1px solid rgba(244,242,237,0.2)",
                }}
              >
                <SocialLink
                  name="INSTAGRAM"
                  href="https://www.instagram.com/u.e.design/"
                />
                <SocialLink
                  name="FACEBOOK"
                  href="https://www.facebook.com/profile.php?id=61556670884520"
                />
                <SocialLink name="LINE" href="https://lin.ee/ocOsF2h" />
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "120px",
              paddingTop: "25px",
              borderTop: "1px solid rgba(244,242,237,0.15)",
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
              flexWrap: "wrap",
              fontSize: "9px",
              letterSpacing: "0.16em",
              opacity: 0.5,
            }}
          >
            <span>U.E INTERIOR DESIGN</span>
            <span>TAINAN · TAIWAN</span>
          </div>
        </div>
      </footer>

      <style>{`
        .ue-opening {
          position: fixed;
          inset: 0;
          z-index: 9999;
          overflow: hidden;
          background: #171717;
          opacity: 1;
          visibility: visible;
          transition:
            opacity .9s cubic-bezier(.22,.61,.36,1),
            visibility .9s step-end;
        }

        .ue-opening-leaving {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .ue-opening-images,
        .ue-opening-shade {
          position: absolute;
          inset: 0;
        }

        .ue-opening-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.035);
          transition:
            opacity 1.25s ease,
            transform 6s ease;
        }

        .ue-opening-image.is-active {
          opacity: 1;
          transform: scale(1);
        }

        .ue-opening-shade {
          background:
            linear-gradient(
              180deg,
              rgba(20, 20, 18, .24) 0%,
              rgba(20, 20, 18, .10) 48%,
              rgba(20, 20, 18, .30) 100%
            );
        }

        .ue-opening-center {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 2;
          width: min(520px, 82vw);
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #f4f2ed;
        }

        .ue-opening-logo {
          display: block;
          width: clamp(150px, 17vw, 245px);
          height: auto;
          max-height: 150px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          animation: ueOpeningLogo 1.2s ease both;
        }

        .ue-opening-line {
          margin: 28px 0 0;
          font-size: 10px;
          line-height: 1.5;
          letter-spacing: .28em;
          animation: ueOpeningFade 1.1s .25s ease both;
        }

        .ue-opening-enter {
          appearance: none;
          width: 88px;
          height: 88px;
          border: 1px solid rgba(244, 242, 237, .82);
          border-radius: 50%;
          margin-top: 46px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: rgba(244, 242, 237, .06);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          color: #f4f2ed;
          font: inherit;
          font-size: 9px;
          letter-spacing: .18em;
          cursor: pointer;
          transition:
            background .4s ease,
            color .4s ease,
            border-color .4s ease,
            transform .4s ease;
          animation: ueOpeningFade 1.1s .45s ease both;
        }

        .ue-opening-enter span {
          font-size: 11px;
          letter-spacing: 0;
          transform: translateY(-1px);
        }

        .ue-opening-enter:hover {
          background: #f4f2ed;
          color: #202020;
          border-color: #f4f2ed;
          transform: scale(1.08);
        }

        .ue-opening-caption {
          position: absolute;
          left: 4vw;
          bottom: 34px;
          z-index: 2;
          margin: 0;
          color: rgba(244, 242, 237, .72);
          font-size: 9px;
          letter-spacing: .22em;
        }

        @keyframes ueOpeningLogo {
          from {
            opacity: 0;
            transform: translateY(10px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes ueOpeningFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .ue-opening-center {
            width: calc(100% - 56px);
          }

          .ue-opening-logo {
            width: 150px;
            max-height: 110px;
          }

          .ue-opening-line {
            margin-top: 24px;
            font-size: 9px;
            letter-spacing: .22em;
          }

          .ue-opening-enter {
            width: 82px;
            height: 82px;
            margin-top: 40px;
          }

          .ue-opening-caption {
            left: 20px;
            bottom: 22px;
            font-size: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ue-opening,
          .ue-opening-image,
          .ue-opening-logo,
          .ue-opening-line,
          .ue-opening-enter {
            animation: none !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function Person({ name, role }: { name: string; role: string }) {
  return (
    <div
      style={{
        padding: "28px 0",
        borderBottom: "1px solid rgba(23,23,23,0.18)",
        display: "flex",
        justifyContent: "space-between",
        gap: "30px",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: "14px",
          letterSpacing: "0.06em",
        }}
      >
        {name}
      </span>

      <span
        style={{
          fontSize: "9px",
          letterSpacing: "0.15em",
          color: "#77736c",
          textAlign: "right",
        }}
      >
        {role}
      </span>
    </div>
  );
}

function Service({
  no,
  en,
  zh,
  text,
}: {
  no: string;
  en: string;
  zh: string;
  text: string;
}) {
  return (
<div
  className="ue-service-row"
  style={{
    display: "grid",
        gridTemplateColumns: "55px minmax(190px, 0.8fr) 1fr",
        gap: "25px",
        padding: "34px 0",
        borderTop: "1px solid rgba(23,23,23,0.18)",
      }}
    >
      <span
        style={{
          fontSize: "10px",
          letterSpacing: "0.15em",
          color: "#77736c",
        }}
      >
        {no}
      </span>

      <div>
        <div
          style={{
            fontSize: "15px",
            letterSpacing: "0.08em",
            marginBottom: "8px",
          }}
        >
          {en}
        </div>

        <div
          style={{
            fontSize: "12px",
            letterSpacing: "0.08em",
            color: "#77736c",
          }}
        >
          {zh}
        </div>
      </div>

<p
  className="ue-service-description"
  style={{
    margin: 0,
          fontSize: "13px",
          lineHeight: 1.9,
          letterSpacing: "0.04em",
          color: "#5f5c57",
        }}
      >
        {text}
      </p>
    </div>
  );
}

function SocialLink({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "inherit",
        textDecoration: "none",
        padding: "23px 0",
        borderBottom: "1px solid rgba(244,242,237,0.2)",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "13px",
        letterSpacing: "0.14em",
      }}
    >
      <span>{name}</span>
      <span>↗</span>
    </a>
  );
}

/* =========================================================
   SHARED INLINE STYLES
========================================================= */

const navStyle = {
  color: "inherit",
  textDecoration: "none",
};

const textLink = {
  color: "inherit",
  textDecoration: "none",
  fontSize: "10px",
  letterSpacing: "0.18em",
};

const sectionLabel = {
  margin: "0 0 48px",
  fontSize: "10px",
  letterSpacing: "0.2em",
  color: "#77736c",
};

const sectionLabelLight = {
  margin: "0 0 48px",
  fontSize: "10px",
  letterSpacing: "0.2em",
  opacity: 0.55,
};

const sectionTitle = {
  margin: 0,
  fontSize: "clamp(30px, 3.2vw, 46px)",
  lineHeight: 1.12,
  fontWeight: 400,
  letterSpacing: "-0.03em",
};

const sectionTitleLight = {
  margin: 0,
  fontSize: "clamp(30px, 3.2vw, 46px)",
  lineHeight: 1.12,
  fontWeight: 400,
  letterSpacing: "-0.03em",
};

const contactPerson = {
  margin: "0 0 28px",
  fontSize: "13px",
  lineHeight: 1.8,
  letterSpacing: "0.08em",
};

const contactRole = {
  fontSize: "9px",
  letterSpacing: "0.14em",
  opacity: 0.55,
};