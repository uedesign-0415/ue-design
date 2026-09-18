import Image from "next/image";
import Link from "next/link";

const images = {
  hero: "/images/shi-residence/DSC07476.jpg",
  living: "/images/shi-residence/DSC07506.jpg",
  kitchen: "/images/shi-residence/DSC07474.jpg",
  entrance: "/images/shi-residence/DSC07427.jpg",
  entrance02: "/images/shi-residence/DSC07468.jpg",
  tv: "/images/shi-residence/DSC07499.jpg",
  detail01: "/images/shi-residence/DSC07514.jpg",
  detail02: "/images/shi-residence/DSC07532.jpg",
  catSpace: "/images/shi-residence/DSC07554.jpg",
  catDoor: "/images/shi-residence/DSC07555.jpg",
  bedroom01: "/images/shi-residence/DSC07584.jpg",
  bedroom02: "/images/shi-residence/DSC07586.jpg",
  detail03: "/images/shi-residence/DSC07589.jpg",
  study: "/images/shi-residence/DSC07595.jpg",
};

export default function ShiResidencePage() {
  return (
    <main className="project-page">

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
          RESIDENTIAL · NEW TAIPEI
        </p>

        <h1>施宅</h1>

        <div className="project-intro-bottom">
          <p>SHI RESIDENCE</p>
          <p>2026</p>
        </div>
      </section>

      {/* HERO */}
      <section className="project-hero">
        <Image
          src={images.hero}
          alt="施宅客餐廳空間"
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
            <p>新北市金山區</p>
          </div>

          <div>
            <span>TYPE</span>
            <p>新成屋</p>
          </div>

          <div>
            <span>AREA</span>
            <p>24 坪</p>
          </div>

          <div>
            <span>STYLE</span>
            <p>簡約 × 日式</p>
          </div>

        </div>

        <div className="project-story">
          <p className="story-label">CONCEPT</p>

          <h2>
            每個角落，
            <br />
            都藏著讓生活更好的小巧思。
          </h2>

          <p className="story-text">
            從幾何把手、隱藏收納，到為貓咪留下的專屬動線，
            空間不只是被設計，而是回應居住者每天真實的生活。
            在簡潔的線條與溫潤材質之間，
            讓人與貓都能找到屬於自己的位置。
          </p>
        </div>

      </section>

      {/* ENTRANCE */}
      <section className="project-grid-two project-grid-entrance">

        <div className="project-image-portrait">
          <Image
            src={images.entrance}
            alt="施宅玄關收納"
            width={1000}
            height={1500}
          />
        </div>

        <div className="project-image-portrait">
          <Image
            src={images.entrance02}
            alt="施宅玄關玻璃拉門"
            width={1000}
            height={1500}
          />
        </div>

      </section>

      {/* LIVING INTRO */}
      <section className="project-quote">
        <p>01 / LIVING</p>

        <h2>
          留白不是空白，
          <br />
          而是讓生活自然發生。
        </h2>
      </section>

      {/* LARGE LIVING */}
      <section className="project-full-image">
        <Image
          src={images.living}
          alt="施宅客餐廳全景"
          width={1600}
          height={1067}
        />
      </section>

      {/* KITCHEN + TV */}
      <section className="project-editorial-pair">

        <div className="editorial-image editorial-image-small">
          <Image
            src={images.kitchen}
            alt="施宅餐廚空間"
            width={1000}
            height={1500}
          />
        </div>

        <div className="editorial-image editorial-image-large">
          <Image
            src={images.tv}
            alt="施宅客廳電視牆"
            width={1200}
            height={1600}
          />
        </div>

      </section>

      {/* DETAILS */}
      <section className="project-detail-section">

        <div className="project-section-heading">
          <p>02 / DETAILS</p>

          <h2>
            機能被藏進細節，
            <br />
            生活成為空間的一部分。
          </h2>
        </div>

        <div className="project-detail-grid">

          <Image
            src={images.detail01}
            alt="施宅餐廳與展示空間"
            width={1000}
            height={1500}
          />

          <Image
            src={images.detail02}
            alt="施宅展示櫃細節"
            width={1000}
            height={1500}
          />

        </div>

      </section>

      {/* CAT FEATURE */}
      <section className="project-feature">

        <div className="project-feature-text">
          <p>03 / LIVING WITH CATS</p>

          <h2>
            為生活設計，
            <br />
            也為牠們留一條路。
          </h2>

          <p>
            將貓咪的活動路徑自然藏入櫃體，
            小小的圓洞與拱門成為空間中的趣味細節，
            讓機能與日常產生更自然的連結。
          </p>
        </div>

        <div className="project-feature-image">
          <Image
            src={images.catSpace}
            alt="施宅寵物友善設計"
            width={1600}
            height={1067}
          />
        </div>

      </section>

      {/* CAT DETAIL */}
      <section className="project-cat-detail">

        <div>
          <Image
            src={images.catDoor}
            alt="施宅貓咪專屬入口"
            width={1200}
            height={800}
          />
        </div>

        <div>
          <Image
            src={images.detail03}
            alt="施宅貓咪生活細節"
            width={1200}
            height={800}
          />
        </div>

      </section>

      {/* PRIVATE SPACE */}
      <section className="project-quote project-private-heading">
        <p>04 / PRIVATE SPACE</p>

        <h2>
          在安靜的材質裡，
          <br />
          留下屬於自己的節奏。
        </h2>
      </section>

      {/* BEDROOM */}
      <section className="project-grid-two">

        <Image
          src={images.bedroom01}
          alt="施宅主臥空間"
          width={1000}
          height={1500}
        />

        <Image
          src={images.bedroom02}
          alt="施宅主臥收納"
          width={1000}
          height={1500}
        />

      </section>

      {/* STUDY */}
      <section className="project-full-image project-study">
        <Image
          src={images.study}
          alt="施宅工作空間"
          width={1600}
          height={1067}
        />
      </section>

      {/* END */}
      <section className="project-end">

        <p>SHI RESIDENCE</p>

        <h2>
          A HOME FOR
          <br />
          EVERYDAY LIFE.
        </h2>

        <div className="project-end-meta">
          <p>NEW TAIPEI · 24 坪</p>
          <p>U.E DESIGN · 2026</p>
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