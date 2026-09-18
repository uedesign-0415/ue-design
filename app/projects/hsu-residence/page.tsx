import Image from "next/image";
import Link from "next/link";

const images = {
  // LIVING
  livingMain: "/images/hsu-residence/_DSF4242客廳主畫面.jpg",
  tvWall: "/images/hsu-residence/_DSF4251-2客廳電視牆.jpg",
  windowDetail: "/images/hsu-residence/_DSF4258客廳窗花細節.jpg",

  // DINING & KITCHEN
  dining: "/images/hsu-residence/_DSF4263餐廳.jpg",
  kitchen: "/images/hsu-residence/_DSF4269廚房.jpg",
  island: "/images/hsu-residence/_DSF4273中島.jpg",
  diningStove: "/images/hsu-residence/_DSF4275餐廳瓦斯爐.jpg",
  kitchenMood:
    "/images/hsu-residence/台南市_中古屋翻修_復古風_廚房_寓易室內設計_1廚房氣氛照.jpg",

  // MATERIAL
  vintageBathroomDoor:
    "/images/hsu-residence/_DSF42770廁所復古門片.jpg",

  // MASTER BEDROOM
  masterBedroom: "/images/hsu-residence/_DSF4294主臥室.jpg",
  bedsideLamp: "/images/hsu-residence/_DSF4299主臥床頭燈.jpg",
  dressingRoom: "/images/hsu-residence/_DSF4307主臥更衣間.jpg",
  dressingDetail: "/images/hsu-residence/_DSF4313更衣間細部.jpg",
  dressingView: "/images/hsu-residence/_DSF4314更衣間往門口看.jpg",
  masterBedView: "/images/hsu-residence/_DSF4319主臥床頭視角A.jpg",

  // BATHROOM
  bathroom: "/images/hsu-residence/_DSF4326微水泥翻新浴室.jpg",

  // CHILDREN'S ROOM
  kidsRoom: "/images/hsu-residence/_DSF4329兒童房.jpg",

  // SECOND BEDROOM
  secondBedroom: "/images/hsu-residence/_DSF4334次臥.jpg",
  secondBedView: "/images/hsu-residence/_DSF4339次臥床頭視角A.jpg",
  secondBedroomPortrait: "/images/hsu-residence/_DSF4341次臥式直照.jpg",

  // GARAGE
  garageGlassRoof: "/images/hsu-residence/_DSF4353車庫玻璃採光罩.jpg",

  // AFTER MOVING IN
  afterLiving01:
    "/images/hsu-residence/IMG_2410_VSCO入住後生活照.JPG",
  afterLiving02:
    "/images/hsu-residence/IMG_2428_VSCO入住後生活照.JPG",
  newYearLiving:
    "/images/hsu-residence/IMG_2432_VSCO入住後過年春聯照.JPG",
  afterIsland:
    "/images/hsu-residence/IMG_2434入住後中島.JPG",
  afterIslandPortrait:
    "/images/hsu-residence/IMG_2435入住後中島直照.JPG",
  afterTvWall:
    "/images/hsu-residence/IMG_2438入住後電視牆照.JPG",
};
export default function HsuResidencePage() {
  return (
  <main className="project-page hsu-project">
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
  src="/images/hsu-residence/徐宅 - Converted with FlexClip.mp4"
  autoPlay
  muted
  loop
  playsInline
  controls
  preload="metadata"
      style={{
        display: "block",
        width: "100%",
        height: "auto",
        maxHeight: "82vh",
        objectFit: "contain",
        background: "#111",
      }}
    />
  </div>
</section>
      {/* HEADER */}
      <header className="project-header">
        <Link href="/" className="project-logo">
          U.E DESIGN
        </Link>

        <nav>
          <Link href="/#projects">PROJECTS</Link>
          <Link href="/#about">ABOUT</Link>
          <Link href="/#service">SERVICE</Link>
          <Link href="/#contact">CONTACT</Link>
        </nav>
      </header>

      {/* PROJECT INTRO */}
      <section className="project-intro">
        <p className="project-label">
          RESIDENTIAL · RENOVATION · TAINAN
        </p>

        <h1>徐宅</h1>

        <div className="project-intro-bottom">
          <p>HSU RESIDENCE</p>
          <p>2023</p>
        </div>
      </section>

      {/* HERO */}
      <section className="project-hero">
        <Image
          src={images.livingMain}
          alt="徐宅客廳主空間"
          width={1600}
          height={1067}
          priority
        />
      </section>

      {/* PROJECT INFORMATION */}
      <section className="project-information">

        <div className="project-meta">
          <div>
            <span>LOCATION</span>
            <p>台南市</p>
          </div>

          <div>
            <span>TYPE</span>
            <p>中古屋翻新</p>
          </div>

          <div>
            <span>AREA</span>
            <p>50 坪</p>
          </div>

          <div>
            <span>STYLE</span>
            <p>復古 × 工業</p>
          </div>
        </div>

        <div className="project-story">
          <p className="story-label">CONCEPT</p>

          <h2>
            讓時間留下痕跡，
            <br />
            也讓生活長出自己的樣子。
          </h2>

          <p className="story-text">
            20 年中古屋的重新整理，不只是翻新空間，
            而是重新梳理一家人的生活方式。
            屋主對自己的家有清楚的想像，也熱愛戶外活動。
            我們以溫潤木質作為空間基底，
            揉合金屬、玻璃、藤編與帶有年代感的家具燈飾，
            在復古與工業語彙之間取得平衡。
            從空間動線到實際使用習慣，
            為現在的生活找到位置，也為未來留下成長的餘地。
          </p>
        </div>

      </section>

      {/* 01 LIVING */}
      <section className="project-quote">
        <p>01 / LIVING</p>

        <h2>
          家不是一種風格，
          <br />
          而是生活慢慢留下的樣子。
        </h2>
      </section>

      <section className="project-full-image">
        <Image
          src={images.tvWall}
          alt="徐宅客廳電視牆"
          width={1600}
          height={1067}
        />
      </section>

      <section className="project-grid-two project-grid-entrance">
        <div className="project-image-portrait">
          <Image
            src={images.windowDetail}
            alt="徐宅客廳窗花細節"
            width={1000}
            height={1500}
          />
        </div>

        <div className="project-image-portrait">
          <Image
            src={images.livingMain}
            alt="徐宅客廳空間"
            width={1000}
            height={1500}
          />
        </div>
      </section>

{/* 02 DINING & KITCHEN */}
<section
  style={{
    width: "80vw",
    maxWidth: "1320px",
    margin: "180px auto",
  }}
>
  {/* TITLE */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "28% 72%",
      alignItems: "start",
      marginBottom: "90px",
    }}
  >
    <p
      style={{
        margin: "8px 0 0",
        fontSize: "12px",
        letterSpacing: "0.28em",
        color: "#766f67",
      }}
    >
      02 / DINING & KITCHEN
    </p>

    <h2
      style={{
        margin: 0,
        fontSize: "clamp(36px, 3.2vw, 58px)",
        fontWeight: 400,
        lineHeight: 1.45,
        letterSpacing: "-0.03em",
      }}
    >
      從料理到相聚，
      <br />
      讓日常成為家的中心。
    </h2>
  </div>

  {/* DINING — MAIN IMAGE */}
  <div
    style={{
      width: "88%",
      margin: "0 auto 90px",
    }}
  >
    <Image
      src={images.dining}
      alt="徐宅餐廳"
      width={1600}
      height={1200}
      style={{
        display: "block",
        width: "100%",
        height: "auto",
      }}
    />
  </div>

  {/* KITCHEN + KITCHEN MOOD */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "48% 30%",
      justifyContent: "space-between",
      alignItems: "start",
      marginBottom: "90px",
    }}
  >
    {/* KITCHEN */}
    <div>
      <Image
        src={images.kitchen}
        alt="徐宅廚房"
        width={1200}
        height={1600}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
        }}
      />
    </div>

    {/* KITCHEN MOOD — SMALL ATMOSPHERE IMAGE */}
    <div
      style={{
        marginTop: "70px",
      }}
    >
      <Image
        src={images.kitchenMood}
        alt="台南中古屋翻修復古風廚房"
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
          letterSpacing: "0.18em",
          color: "#817b74",
        }}
      >
        KITCHEN / MATERIAL & LIGHT
      </p>
    </div>
  </div>

  {/* ISLAND + DINING STOVE */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "34% 42%",
      justifyContent: "space-between",
      alignItems: "start",
    }}
  >
    <div
      style={{
        marginTop: "55px",
      }}
    >
      <Image
        src={images.island}
        alt="徐宅中島"
        width={1600}
        height={1200}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
        }}
      />
    </div>

    <div>
      <Image
        src={images.diningStove}
        alt="徐宅餐廳與瓦斯爐空間"
        width={1200}
        height={1600}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  </div>
</section>
      {/* 03 MATERIAL */}
      <section className="project-feature">

        <div className="project-feature-text">
          <p>03 / MATERIAL & DETAILS</p>

          <h2>
            新與舊之間，
            <br />
            留下屬於生活的痕跡。
          </h2>

          <p>
            木質、金屬與帶有紋理的玻璃交錯在空間之中，
            復古門片與屋主親自挑選的家具燈飾，
            不刻意追求一致，
            而是讓不同年代的質感自然共存。
          </p>
        </div>

        <div className="project-feature-image">
          <Image
            src={images.vintageBathroomDoor}
            alt="徐宅廁所復古門片"
            width={1600}
            height={1067}
          />
        </div>

      </section>

      {/* 04 MASTER BEDROOM */}
      <section className="private-space-heading">
        <p>04 / PRIVATE SPACE</p>

        <h2>
          從熱鬧的日常退一步，
          <br />
          回到安靜而溫暖的自己。
        </h2>
      </section>

      <section className="project-full-image">
        <Image
          src={images.masterBedroom}
          alt="徐宅主臥室"
          width={1600}
          height={1067}
        />
      </section>

      <section className="project-grid-two">
        <Image
          src={images.bedsideLamp}
          alt="徐宅主臥床頭燈"
          width={1000}
          height={1500}
        />

        <Image
          src={images.masterBedView}
          alt="徐宅主臥床頭視角"
          width={1000}
          height={1500}
        />
      </section>

     {/* 05 DRESSING ROOM */}
<section className="dressing-section">

  <div className="dressing-heading">
    <p>05 / DRESSING ROOM</p>

    <h2>
      收納不只是藏起物件，
      <br />
      也是整理生活的方式。
    </h2>
  </div>

  <div className="dressing-images">

    <div className="dressing-image-main">
      <Image
        src={images.dressingRoom}
        alt="徐宅主臥更衣間"
        width={1200}
        height={1600}
      />
    </div>

    <div className="dressing-image-detail">
      <Image
        src={images.dressingDetail}
        alt="徐宅更衣間細部"
        width={1000}
        height={1500}
      />
    </div>

  </div>

<div
  className="dressing-view-final"
  style={{
    width: "760px",
    maxWidth: "75vw",
    margin: "100px auto",
  }}
>
  <Image
    src={images.dressingView}
    alt="徐宅更衣間往門口視角"
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

{/* 06 BEDROOMS */}
<section
  style={{
    width: "80vw",
    maxWidth: "1320px",
    margin: "150px auto 80px",
    display: "grid",
    gridTemplateColumns: "28% 72%",
    alignItems: "start",
  }}
>
  <p
    style={{
      margin: "8px 0 0",
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: "0.28em",
      color: "#766f67",
    }}
  >
    06 / BEDROOMS
  </p>

  <h2
    style={{
      margin: 0,
      maxWidth: "850px",
      fontSize: "clamp(36px, 3.2vw, 58px)",
      fontWeight: 400,
      lineHeight: 1.45,
      letterSpacing: "-0.03em",
    }}
  >
    不同的房間，
    <br />
    留給不同階段的生活。
  </h2>
</section>
      <section className="project-full-image">
        <Image
          src={images.secondBedroom}
          alt="徐宅次臥"
          width={1600}
          height={1067}
        />
      </section>

      <section className="project-grid-two">
        <Image
          src={images.secondBedView}
          alt="徐宅次臥床頭視角"
          width={1000}
          height={1500}
        />

        <Image
          src={images.secondBedroomPortrait}
          alt="徐宅次臥直向空間"
          width={1000}
          height={1500}
        />
      </section>

      <section className="project-full-image project-study">
        <Image
          src={images.kidsRoom}
          alt="徐宅兒童房"
          width={1600}
          height={1067}
        />
      </section>

{/* 07 BATHROOM */}
<section
  style={{
    width: "86vw",
    maxWidth: "1400px",
    margin: "180px auto",
  }}
>
  {/* 標題：與照片左側對齊 */}
  <div
    style={{
      width: "420px",
      marginLeft: "auto",
      marginRight: "7vw",
      marginBottom: "55px",
    }}
  >
    <p
      style={{
        margin: "0 0 28px",
        fontSize: "12px",
        letterSpacing: "0.28em",
      }}
    >
      07 / BATHROOM
    </p>

    <h2
      style={{
        margin: 0,
        fontSize: "38px",
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: "-0.03em",
      }}
    >
      減去多餘裝飾，
      <br />
      讓材質回到最純粹的狀態。
    </h2>
  </div>

  {/* 下方：左文字 / 右照片 */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 420px",
      columnGap: "100px",
      alignItems: "center",
    }}
  >
    <div
      style={{
        justifySelf: "center",
        width: "260px",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "13px",
          lineHeight: 2,
          letterSpacing: "0.04em",
        }}
      >
        以微水泥重新整理浴室表情，保留
        <br />
        材質本身細微而自然的紋理，讓光
        <br />
        線、色澤與使用痕跡，成為空間裡
        <br />
        最安靜的細節。
      </p>
    </div>

    <div
      style={{
        width: "420px",
      }}
    >
      <Image
        src={images.bathroom}
        alt="徐宅微水泥翻新浴室"
        width={1600}
        height={1067}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  </div>
</section>

      {/* 08 GARAGE */}
      <section className="project-feature">

        <div className="project-feature-text">
          <p>08 / GARAGE</p>

          <h2>
            光線穿過玻璃，
            <br />
            也重新整理家的邊界。
          </h2>

          <p>
            從室內延伸至車庫，
            玻璃採光罩將自然光帶入原有空間，
            在機能之外，也讓老屋擁有更輕盈的光線與尺度。
          </p>
        </div>

        <div className="project-feature-image">
          <Image
            src={images.garageGlassRoof}
            alt="徐宅車庫玻璃採光罩"
            width={1600}
            height={1067}
          />
        </div>

      </section>

{/* 09 AFTER MOVING IN */}
<section className="private-space-heading">
  <p>09 / AFTER MOVING IN</p>
  <h2>
    空間完成之後，
    <br />
    生活才真正開始。
  </h2>
</section>

{/* 入住後主視覺 */}
<section
  style={{
    width: "72vw",
    maxWidth: "1180px",
    margin: "0 auto 90px",
  }}
>
  <Image
    src={images.afterLiving01}
    alt="徐宅入住後的家庭生活"
    width={1600}
    height={1067}
    style={{
      display: "block",
      width: "100%",
      height: "auto",
    }}
  />
</section>

{/* 機車＋春聯：生活痕跡 */}
<section
  style={{
    width: "76vw",
    maxWidth: "1240px",
    margin: "0 auto 100px",
    display: "grid",
    gridTemplateColumns: "34% 48%",
    justifyContent: "space-between",
    alignItems: "start",
  }}
>
  <div
    style={{
      marginTop: "70px",
    }}
  >
    <Image
      src={images.afterLiving02}
      alt="徐宅從室內望向戶外的生活景象"
      width={1000}
      height={1500}
      style={{
        display: "block",
        width: "100%",
        height: "auto",
      }}
    />
  </div>

  <div>
    <Image
      src={images.newYearLiving}
      alt="徐宅入住後的春節生活紀錄"
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

{/* 中島生活 */}
<section
  style={{
    width: "76vw",
    maxWidth: "1240px",
    margin: "0 auto 100px",
    display: "grid",
    gridTemplateColumns: "46% 32%",
    justifyContent: "space-between",
    alignItems: "start",
  }}
>
  <div>
    <Image
      src={images.afterIsland}
      alt="徐宅入住後中島與咖啡區"
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
    style={{
      marginTop: "65px",
    }}
  >
    <Image
      src={images.afterIslandPortrait}
      alt="徐宅入住後中島生活"
      width={1000}
      height={1500}
      style={{
        display: "block",
        width: "100%",
        height: "auto",
      }}
    />
  </div>
</section>

{/* 最後一張生活細節 */}
<section
  style={{
    width: "46vw",
    maxWidth: "720px",
    margin: "0 auto 150px",
  }}
>
  <Image
    src={images.afterTvWall}
    alt="徐宅入住後客廳電視牆"
    width={1000}
    height={1500}
    style={{
      display: "block",
      width: "100%",
      height: "auto",
    }}
  />
</section>
      <section className="project-end">

        <p>HSU RESIDENCE</p>

        <h2>
          A HOME THAT
          <br />
          GROWS WITH LIFE.
        </h2>

        <div className="project-end-meta">
          <p>TAINAN · 50 坪</p>
          <p>U.E DESIGN · 2023</p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="project-footer">

        <Link href="/#projects">
          ← ALL PROJECTS
        </Link>

        <p>U.E DESIGN</p>

      </footer>

    </main>
  );
}