export default function JournalPage() {
  const video =
    "/images/journal/寓易木工討論紀錄 - Converted with FlexClip.mp4";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3f1ec",
        color: "#202020",
        fontFamily:
          'Inter, "Noto Sans TC", "Microsoft JhengHei", sans-serif',
      }}
    >
      {/* INTRO */}
      <section
        style={{
          width: "92%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "140px 0 110px",
        }}
      >
        <p
          style={{
            margin: "0 0 42px",
            fontSize: "11px",
            letterSpacing: "0.22em",
          }}
        >
          U.E DESIGN / JOURNAL
        </p>

        <h1
          style={{
            margin: 0,
            maxWidth: "900px",
            fontSize: "clamp(32px, 3.8vw, 52px)",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            fontWeight: 400,
          }}
        >
          NOT ONLY THE FINISHED SPACE.
          <br />
          BUT HOW IT CAME TO BE.
        </h1>

        <p
          style={{
            margin: "55px 0 0 auto",
            maxWidth: "420px",
            fontSize: "14px",
            lineHeight: 2,
            letterSpacing: "0.05em",
          }}
        >
          不只記錄空間完成的樣子，
          <br />
          也記錄設計如何一步一步被實現。
        </p>
      </section>

      {/* LINE */}
      <div
        style={{
          width: "92%",
          maxWidth: "1440px",
          height: "1px",
          margin: "0 auto",
          background: "rgba(32,32,32,0.18)",
        }}
      />

      {/* SITE NOTES 001 */}
      <section
        style={{
          width: "92%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "100px 0 150px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "28% 1fr",
            gap: "8%",
            marginBottom: "65px",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 12px",
                fontSize: "11px",
                letterSpacing: "0.2em",
              }}
            >
              SITE NOTES 001
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "10px",
                lineHeight: 1.8,
                letterSpacing: "0.16em",
                color: "#77736d",
              }}
            >
              CARPENTRY
              <br />
              SITE DISCUSSION
            </p>
          </div>

          <div>
            <h2
              style={{
                margin: "0 0 34px",
                fontSize: "clamp(28px, 3vw, 44px)",
                lineHeight: 1.18,
                letterSpacing: "-0.025em",
                fontWeight: 400,
              }}
            >
              DESIGN DOESN&apos;T
              <br />
              END ON PAPER.
            </h2>

            <p
              style={{
                margin: 0,
                maxWidth: "520px",
                fontSize: "14px",
                lineHeight: 2.05,
                letterSpacing: "0.05em",
              }}
            >
              設計不只發生在圖面上。
              <br />
              現場的每一次確認、討論與調整，
              <br />
              都是讓設計真正落地的一部分。
            </p>
          </div>
        </div>

        {/* VIDEO */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
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
              display: "block",
              width: "100%",
              height: "auto",
              maxHeight: "78vh",
              objectFit: "contain",
              background: "#111",
            }}
          />
        </div>

        {/* VIDEO INFO */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "18px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(32,32,32,0.16)",
            fontSize: "10px",
            lineHeight: 1.8,
            letterSpacing: "0.16em",
            color: "#77736d",
          }}
        >
          <span>CARPENTRY / SITE DISCUSSION</span>
          <span>U.E DESIGN</span>
        </div>
      </section>

      {/* END */}
      <section
        style={{
          background: "#202020",
          color: "#f3f1ec",
          padding: "110px 4%",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              margin: "0 0 45px",
              fontSize: "10px",
              letterSpacing: "0.2em",
              opacity: 0.6,
            }}
          >
            MORE FROM THE SITE
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px, 3vw, 44px)",
              lineHeight: 1.2,
              fontWeight: 400,
              letterSpacing: "-0.025em",
            }}
          >
            MORE NOTES,
            <br />
            COMING SOON.
          </h2>
        </div>
      </section>
    </main>
  );
}