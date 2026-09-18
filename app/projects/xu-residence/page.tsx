import Image from "next/image";
import Link from "next/link";

const images = {
  // EXTERIOR
  exteriorMain:
    "/images/xu-residence/53F508F1-A857-4331-B707-7CDC1C949AF6.jpg",
  garageFront:
    "/images/xu-residence/C8EF6285-D3D4-494A-8EC5-053A266038D8.jpg",
  exteriorDoor:
    "/images/xu-residence/227C8D92-D49F-44CD-AB01-3C3F240FB80F.jpg",
  entranceWide:
    "/images/xu-residence/1B6BC5BC-2F32-42FA-B1A1-9290325E6341.jpg",

  // ENTRANCE
  entranceDoor:
    "/images/xu-residence/CF8180B5-6D4D-4B52-AAC7-6604DB47A339.jpg",
  entranceView:
    "/images/xu-residence/7853680B-23DC-4648-8E6D-B1CF5BE7F906.jpg",
  entranceStorage:
    "/images/xu-residence/66BF5760-69DE-4B12-8982-0805A77B62A4.jpg",

  // LIVING
  livingMain:
    "/images/xu-residence/1E0C14CF-6F38-4A9E-A568-8F741FE5DFBC.jpg",
  living02:
    "/images/xu-residence/F92ABEEC-FD34-4EFE-BB52-061C43A4276B.jpg",
  living03:
    "/images/xu-residence/AFB891AD-A5F7-4316-983A-07D980739660.jpg",
  ceilingDetail:
    "/images/xu-residence/3DFF454A-0026-439A-84E4-6678F28DF639.jpg",

  // DINING & KITCHEN
  diningMain:
    "/images/xu-residence/2D5B2615-01FB-43FC-8EAF-4044F25FB10D.jpg",
  diningKitchen:
    "/images/xu-residence/279C16F4-B388-4F23-8129-F88E3F7169A2.jpg",
  kitchenMain:
    "/images/xu-residence/F98AF4D4-3148-4B77-92E4-7A393E582D72.jpg",

  // BEDROOM
  bedroomStorage:
    "/images/xu-residence/BBEE2CA8-C6F5-43EE-8B83-D62EBBDC9FC8.jpg",
  bedroomMain:
    "/images/xu-residence/C8244B1D-63B1-4608-8E56-5927DB426E5E.jpg",

  // BATHROOM
  bathroomAfter:
    "/images/xu-residence/FA8298BB-8D92-4636-B9AD-FD1B29AE84D2.jpg",
  bathroomBefore:
    "/images/xu-residence/FC98DE08-91C6-4162-89B1-5D572471B048.jpg",

  // GIF
  exteriorGif: "/images/xu-residence/許宅外觀GIF.gif",
  entranceGif: "/images/xu-residence/許宅玄關GIF.gif",
  kitchenGif: "/images/xu-residence/許宅廚房GIF.gif",
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

const sectionTitle = {
  margin: 0,
  fontSize: "clamp(28px, 2.5vw, 42px)",
  lineHeight: 1.55,
  fontWeight: 400,
  letterSpacing: "-0.02em",
} as const;

export default function XuResidencePage() {
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
            fontSize: "15px",
            letterSpacing: "0.16em",
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
            letterSpacing: "0.2em",
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
        <p
          style={{
            margin: "0 0 28px",
            fontSize: "11px",
            letterSpacing: "0.28em",
            color: "#77716a",
          }}
        >
          RESIDENTIAL · RENOVATION · TAINAN
        </p>

        <h1
          style={{
            margin: "0 0 70px",
            fontSize: "clamp(48px, 7vw, 108px)",
            lineHeight: 0.95,
            fontWeight: 400,
            letterSpacing: "-0.055em",
          }}
        >
          XU
          <br />
          RESIDENCE
        </h1>

        <div
          style={{
            width: "72%",
            maxWidth: "980px",
            marginLeft: "auto",
          }}
        >
          <Image
            src={images.livingMain}
            alt="許宅客廳"
            width={1800}
            height={1200}
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
          margin: "0 auto 170px",
          display: "grid",
          gridTemplateColumns: "30% 64%",
          gap: "6%",
          alignItems: "start",
        }}
      >
        <div>
          <p style={sectionLabel}>01 / PROJECT</p>

          <div
            style={{
              marginTop: "70px",
              fontSize: "12px",
              lineHeight: 2.1,
              color: "#625f5a",
            }}
          >
            <p style={{ margin: 0 }}>LOCATION　台南市</p>
            <p style={{ margin: 0 }}>TYPE　中古屋翻新</p>
            <p style={{ margin: 0 }}>AREA　52 坪</p>
            <p style={{ margin: 0 }}>STYLE　無印 × 原木</p>
            <p style={{ margin: 0 }}>PROGRAM　FAMILY RESIDENCE</p>
          </div>
        </div>

        <div>
          <h2 style={sectionTitle}>
            為現在的生活而設計，
            <br />
            也為未來的成長留下空間。
          </h2>

          <div
            style={{
              maxWidth: "720px",
              marginTop: "50px",
              fontSize: "15px",
              lineHeight: 2.15,
              color: "#514e49",
            }}
          >
            <p>
              這是一個為新生家庭重新整理的家。面對孩子出生後不斷變化的生活需求，
              我們從安全、收納與日常動線出發，在滿足現階段使用的同時，
              也為孩子不同成長階段保留調整的彈性。
            </p>

            <p>
              以溫潤原木與柔和的淺色調作為空間基底，減少不必要的裝飾，
              讓收納自然融入空間，也讓生活中的物件有各自安放的位置。
            </p>

            <p>
              我們希望家不只是被整理得乾淨，而是在繁忙而瑣碎的日常之後，
              回到這裡，可以慢慢安靜下來。
            </p>

            <p>
              隨著孩子長大、生活改變，空間也能陪著一家人一起成長。
            </p>
          </div>
        </div>
      </section>

      {/* 02 TRANSFORMATION */}
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
            gridTemplateColumns: "34% 66%",
            marginBottom: "60px",
          }}
        >
          <p style={sectionLabel}>02 / TRANSFORMATION</p>

          <h2 style={sectionTitle}>
            從原有的生活痕跡，
            <br />
            重新整理家的樣子。
          </h2>
        </div>

        {/* 外觀 GIF + 完工外觀 */}
        <div
          style={{
            width: "98%",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            alignItems: "start",
          }}
        >
          <img
            src={images.exteriorGif}
            alt="許宅外觀改造前後"
            style={imageStyle}
          />

          <Image
            src={images.exteriorMain}
            alt="許宅翻新後外觀"
            width={1600}
            height={1067}
            style={imageStyle}
          />
        </div>

        {/* 車庫 */}
        <div
          style={{
            width: "68%",
            maxWidth: "920px",
            margin: "55px auto 0",
          }}
        >
          <Image
            src={images.garageFront}
            alt="許宅車庫與入口"
            width={1600}
            height={1067}
            style={imageStyle}
          />
        </div>

        {/* 大門 + 入戶 */}
        <div
          style={{
            width: "82%",
            margin: "55px auto 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            alignItems: "start",
          }}
        >
          <Image
            src={images.exteriorDoor}
            alt="許宅入口外觀"
            width={1200}
            height={1600}
            style={imageStyle}
          />

          <Image
            src={images.entranceWide}
            alt="許宅入口空間"
            width={1200}
            height={1600}
            style={imageStyle}
          />
        </div>
      </section>

      {/* 03 ENTRANCE */}
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
            gridTemplateColumns: "36% 64%",
            marginBottom: "60px",
          }}
        >
          <p style={sectionLabel}>03 / ENTRANCE</p>

          <h2 style={sectionTitle}>
            從進門開始，
            <br />
            為一家人的日常建立秩序。
          </h2>
        </div>

        {/* 玄關門 + 玄關 GIF */}
        <div
          style={{
            width: "96%",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            alignItems: "start",
          }}
        >
          <Image
            src={images.entranceDoor}
            alt="許宅玄關"
            width={1600}
            height={1067}
            style={imageStyle}
          />

          <img
            src={images.entranceGif}
            alt="許宅玄關改造過程"
            style={imageStyle}
          />
        </div>

{/* 主臥收納細節 */}
<div
  style={{
    width: "62%",
    maxWidth: "820px",
    margin: "55px 0 0 auto",
  }}
>

</div>

        {/* 玄關往客廳 */}
        <div
          style={{
            width: "72%",
            maxWidth: "960px",
            margin: "55px auto 0",
          }}
        >
          <Image
            src={images.entranceView}
            alt="從玄關看向客廳"
            width={1600}
            height={1067}
            style={imageStyle}
          />
        </div>
      </section>

      {/* 04 LIVING */}
      <section
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto 170px",
        }}
      >
        <div
          style={{
            width: "66%",
            marginLeft: "auto",
            marginBottom: "60px",
          }}
        >
          <p style={sectionLabel}>04 / LIVING</p>

          <h2 style={sectionTitle}>
            留下足夠的空白，
            <br />
            讓家的樣子隨生活慢慢形成。
          </h2>
        </div>

        <div
          style={{
            width: "82%",
            maxWidth: "1080px",
            margin: "0 auto",
          }}
        >
          <Image
            src={images.living02}
            alt="許宅客廳空間"
            width={1800}
            height={1200}
            style={imageStyle}
          />
        </div>

        <div
          style={{
            width: "92%",
            margin: "18px auto 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            alignItems: "start",
          }}
        >
          <Image
            src={images.living03}
            alt="許宅客廳沙發區"
            width={1600}
            height={1067}
            style={imageStyle}
          />

          <Image
            src={images.ceilingDetail}
            alt="許宅木質弧形天花細節"
            width={1600}
            height={1067}
            style={imageStyle}
          />
        </div>
      </section>

{/* 05 DINING & KITCHEN */}
<section
  style={{
    width: "82vw",
    maxWidth: "1320px",
    margin: "0 auto 150px",
  }}
>
  {/* 標題 */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "34% 66%",
      marginBottom: "55px",
    }}
  >
    <p
      style={{
        margin: 0,
        fontSize: "11px",
        letterSpacing: "0.28em",
        color: "#77716a",
      }}
    >
      05 / DINING & KITCHEN
    </p>

    <h2
      style={{
        margin: 0,
        fontSize: "clamp(28px, 2.6vw, 44px)",
        lineHeight: 1.5,
        fontWeight: 400,
      }}
    >
      讓餐桌與廚房，
      <br />
      成為日常自然相遇的地方。
    </h2>
  </div>

  {/* 第一排：餐桌 + 餐廚空間 */}
 {/* 第一排：餐桌 + 餐廚空間 */}
<div
  style={{
    width: "92%",
    margin: "0 auto 26px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    alignItems: "start",
  }}
>
  <Image
    src={images.diningMain}
    alt="許宅餐桌"
    width={1200}
    height={1600}
    style={{
      display: "block",
      width: "100%",
      height: "auto",
    }}
  />

  <Image
    src={images.diningKitchen}
    alt="許宅餐廚空間"
    width={1200}
    height={1600}
    style={{
      display: "block",
      width: "100%",
      height: "auto",
    }}
  />
</div>

  {/* 第二排：廚房正面 + 廚房 GIF */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px",
      alignItems: "center",
    }}
  >
    <Image
      src={images.kitchenMain}
      alt="許宅廚房"
      width={1600}
      height={1067}
      style={{
        display: "block",
        width: "100%",
        height: "auto",
        maxHeight: "68vh",
        objectFit: "contain",
      }}
    />

    <img
      src={images.kitchenGif}
      alt="許宅廚房改造前後"
      style={{
        display: "block",
        width: "100%",
        height: "auto",
        maxHeight: "68vh",
        objectFit: "contain",
      }}
    />
  </div>
</section>
      {/* 06 BEDROOM */}
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
            gridTemplateColumns: "38% 62%",
            marginBottom: "60px",
          }}
        >
          <p style={sectionLabel}>06 / BEDROOM</p>

          <h2 style={sectionTitle}>
            收納融入空間，
            <br />
            讓休息回到簡單與安定。
          </h2>
        </div>

        <div
          style={{
            width: "92%",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            alignItems: "start",
          }}
        >
          <Image
            src={images.bedroomStorage}
            alt="許宅臥室收納"
            width={1600}
            height={1067}
            style={imageStyle}
          />

          <Image
            src={images.bedroomMain}
            alt="許宅主臥"
            width={1600}
            height={1067}
            style={imageStyle}
          />
        </div>
        {/* 主臥掛衣收納 */}
<div
  style={{
    width: "42%",
    maxWidth: "820px",
    margin: "55px 0 0 auto",
  }}
>
  <Image
    src={images.entranceStorage}
    alt="許宅主臥掛衣與收納"
    width={1600}
    height={1067}
    style={imageStyle}
  />
</div>
      </section>

      {/* 07 BATHROOM */}
      <section
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto 190px",
        }}
      >
        <div
          style={{
            width: "66%",
            marginLeft: "auto",
            marginBottom: "60px",
          }}
        >
          <p style={sectionLabel}>07 / BATHROOM</p>

          <h2 style={sectionTitle}>
            在日常機能之中，
            <br />
            留下乾淨而安靜的使用感受。
          </h2>
        </div>

        {/* BEFORE / AFTER */}
        <div
          style={{
            width: "82%",
            maxWidth: "1060px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 12px",
                fontSize: "10px",
                letterSpacing: "0.24em",
                color: "#77716a",
              }}
            >
              BEFORE
            </p>

            <Image
              src={images.bathroomBefore}
              alt="許宅浴室翻新前"
              width={1200}
              height={1600}
              style={imageStyle}
            />
          </div>

          <div>
            <p
              style={{
                margin: "0 0 12px",
                fontSize: "10px",
                letterSpacing: "0.24em",
                color: "#77716a",
              }}
            >
              AFTER
            </p>

            <Image
              src={images.bathroomAfter}
              alt="許宅浴室翻新後"
              width={1200}
              height={1600}
              style={imageStyle}
            />
          </div>
        </div>
      </section>

      {/* END */}
      <section
        style={{
          width: "80vw",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "30px 0 150px",
          borderTop: "1px solid rgba(31,31,29,0.18)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "40px",
          }}
        >
          <div>
            <p style={sectionLabel}>XU RESIDENCE</p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(34px, 4vw, 64px)",
                lineHeight: 1.3,
                fontWeight: 400,
              }}
            >
              隨著生活改變，
              <br />
              家也一起成長。
            </h2>
          </div>

          <Link
            href="/#projects"
            style={{
              color: "inherit",
              textDecoration: "none",
              fontSize: "11px",
              letterSpacing: "0.2em",
              whiteSpace: "nowrap",
            }}
          >
            BACK TO PROJECTS ↗
          </Link>
        </div>
      </section>
    </main>
  );
}