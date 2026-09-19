export default function JournalPage() {
  const video =
    "/images/journal/寓易木工討論紀錄 - Converted with FlexClip.mp4";

  return (
    <main className="journal-page">
      {/* INTRO */}
      <section className="journal-intro">
        <p className="journal-eyebrow">U.E DESIGN / JOURNAL</p>

        <h1>
          NOT ONLY THE FINISHED SPACE.
          <br />
          BUT HOW IT CAME TO BE.
        </h1>

        <p className="journal-intro-copy">
          不只記錄空間完成的樣子，
          <br />
          也記錄設計如何一步一步被實現。
        </p>
      </section>

      <div className="journal-line" />

      {/* SITE NOTES 001 */}
      <section className="journal-notes">
        <div className="journal-notes-head">
          <div className="journal-note-meta">
            <p>SITE NOTES 001</p>
            <span>
              CARPENTRY
              <br />
              SITE DISCUSSION
            </span>
          </div>

          <div className="journal-note-copy">
            <h2>
              DESIGN DOESN&apos;T
              <br />
              END ON PAPER.
            </h2>

            <p>
              設計不只發生在圖面上。
              <br />
              現場的每一次確認、討論與調整，
              <br />
              都是讓設計真正落地的一部分。
            </p>
          </div>
        </div>

        <div className="journal-video">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
          />
        </div>

        <div className="journal-video-info">
          <span>CARPENTRY / SITE DISCUSSION</span>
          <span>U.E DESIGN</span>
        </div>
      </section>

      {/* END */}
      <section className="journal-end">
        <div>
          <p>MORE FROM THE SITE</p>
          <h2>
            MORE NOTES,
            <br />
            COMING SOON.
          </h2>
        </div>
      </section>

      <style>{`
        .journal-page {
          min-height: 100vh;
          background: #f3f1ec;
          color: #202020;
          font-family: Inter, "Noto Sans TC", "Microsoft JhengHei", sans-serif;
        }

        .journal-intro,
        .journal-notes,
        .journal-line {
          width: 92%;
          max-width: 1440px;
          margin-left: auto;
          margin-right: auto;
        }

        .journal-intro {
          padding: 140px 0 110px;
        }

        .journal-eyebrow {
          margin: 0 0 42px;
          font-size: 11px;
          letter-spacing: .22em;
        }

        .journal-intro h1 {
          margin: 0;
          max-width: 900px;
          font-size: clamp(32px, 3.8vw, 52px);
          line-height: 1.15;
          letter-spacing: -.03em;
          font-weight: 400;
        }

        .journal-intro-copy {
          margin: 55px 0 0 auto;
          max-width: 420px;
          font-size: 14px;
          line-height: 2;
          letter-spacing: .05em;
        }

        .journal-line {
          height: 1px;
          background: rgba(32,32,32,.18);
        }

        .journal-notes {
          padding: 100px 0 150px;
        }

        .journal-notes-head {
          display: grid;
          grid-template-columns: 28% 1fr;
          gap: 8%;
          margin-bottom: 65px;
        }

        .journal-note-meta p {
          margin: 0 0 12px;
          font-size: 11px;
          letter-spacing: .2em;
        }

        .journal-note-meta span {
          font-size: 10px;
          line-height: 1.8;
          letter-spacing: .16em;
          color: #77736d;
        }

        .journal-note-copy h2 {
          margin: 0 0 34px;
          font-size: clamp(28px, 3vw, 44px);
          line-height: 1.18;
          letter-spacing: -.025em;
          font-weight: 400;
        }

        .journal-note-copy p {
          margin: 0;
          max-width: 520px;
          font-size: 14px;
          line-height: 2.05;
          letter-spacing: .05em;
        }

        .journal-video {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .journal-video video {
          display: block;
          width: 100%;
          height: auto;
          max-height: 78vh;
          object-fit: contain;
          background: #111;
        }

        .journal-video-info {
          display: flex;
          justify-content: space-between;
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid rgba(32,32,32,.16);
          font-size: 10px;
          line-height: 1.8;
          letter-spacing: .16em;
          color: #77736d;
        }

        .journal-end {
          background: #202020;
          color: #f3f1ec;
          padding: 110px 4%;
        }

        .journal-end > div {
          max-width: 1440px;
          margin: 0 auto;
        }

        .journal-end p {
          margin: 0 0 45px;
          font-size: 10px;
          letter-spacing: .2em;
          opacity: .6;
        }

        .journal-end h2 {
          margin: 0;
          font-size: clamp(28px, 3vw, 44px);
          line-height: 1.2;
          font-weight: 400;
          letter-spacing: -.025em;
        }

        @media (max-width: 768px) {
          .journal-intro,
          .journal-notes,
          .journal-line {
            width: calc(100% - 40px);
          }

          .journal-intro {
            padding: 72px 0 82px;
          }

          .journal-eyebrow {
            margin-bottom: 42px;
            font-size: 10px;
          }

          .journal-intro h1 {
            max-width: 100%;
            font-size: 34px;
            line-height: 1.12;
            letter-spacing: -.035em;
          }

          .journal-intro-copy {
            margin: 62px 0 0;
            max-width: none;
            font-size: 14px;
            line-height: 2;
          }

          .journal-notes {
            padding: 72px 0 90px;
          }

          .journal-notes-head {
            display: block;
            margin-bottom: 52px;
          }

          .journal-note-meta {
            margin-bottom: 42px;
          }

          .journal-note-meta p {
            font-size: 10px;
            margin-bottom: 10px;
          }

          .journal-note-copy h2 {
            margin-bottom: 28px;
            font-size: 31px;
            line-height: 1.18;
          }

          .journal-note-copy p {
            max-width: none;
            font-size: 14px;
            line-height: 2;
          }

          .journal-video {
            width: 100%;
            margin: 0 auto;
          }

          .journal-video video {
            width: 100%;
            max-height: none;
          }

          .journal-video-info {
            margin-top: 16px;
            padding-top: 14px;
            gap: 18px;
            font-size: 9px;
            letter-spacing: .14em;
          }

          .journal-video-info span:last-child {
            text-align: right;
            white-space: nowrap;
          }

          .journal-end {
            padding: 90px 20px 105px;
          }

          .journal-end p {
            margin-bottom: 55px;
            font-size: 9px;
          }

          .journal-end h2 {
            font-size: 31px;
            line-height: 1.22;
          }
        }

        @media (max-width: 420px) {
          .journal-intro h1 {
            font-size: 31px;
          }

          .journal-note-copy h2,
          .journal-end h2 {
            font-size: 29px;
          }
        }
      `}</style>
    </main>
  );
}
