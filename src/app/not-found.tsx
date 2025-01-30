// app/not-found.js

import Link from "next/link";


export default function NotFound() {
    return (
        <div
        style={{
        //   fontFamily: roboto.style.fontFamily,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            animation: "fadeIn 1.5s ease-out",
          }}
        >
          We're Under Maintenance
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            lineHeight: "1.6",
            marginBottom: "2rem",
            animation: "fadeIn 1.5s ease-out 0.5s both",
          }}
        >
          We're working hard to improve our website and we'll be back soon. Thank you for your patience!
        </p>

     
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "5px solid rgba(255, 255, 255, 0.3)",
            borderTop: "5px solid white",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>


<button style={{ marginTop:"20px"}}  >
          <Link href="/">
          go to home page
          </Link>
        </button>
     
      </div>
    );
  }
  