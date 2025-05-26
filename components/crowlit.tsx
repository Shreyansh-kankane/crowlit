"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    CrowlitApp?: (container: HTMLElement) => void;
  }
}

const Crowlit: React.FC = () => {
  useEffect(() => {
    const loadCrowlit = () => {
      // Load CSS if not already present
      if (!document.getElementById("crowlit-style")) {
        const link = document.createElement("link");
        link.id = "crowlit-style";
        link.rel = "stylesheet";
        link.href =
          "https://crowlit-client.netlify.app/assets/index-C_myOl8C.css"; // <-- CSS URL
        document.head.appendChild(link);
      }

      // Load JS if not already present
      if (!document.getElementById("crowlit-script")) {
        const script = document.createElement("script");
        script.id = "crowlit-script";
        script.src =
          "https://crowlit-client.netlify.app/assets/index-yk_4wE0A.js"; // <-- JS URL
        script.async = true;

        script.onload = () => {
          const container = document.getElementById("crowlit-container");
          if (window.CrowlitApp && container) {
            window.CrowlitApp(container); // Pass the DOM container
          } else {
            console.warn("CrowlitApp not found or container missing");
          }
        };

        script.onerror = () => {
          console.error("Failed to load Crowlit script.");
        };

        document.body.appendChild(script);
      }
    };

    loadCrowlit();
  }, []);

  return (
    <div
      id="crowlit-container"
      style={{
        display: "block",
        opacity: 1,
        visibility: "visible",
      }}
    >
      {/* Crowlit will render here directly */}
    </div>
  );
};

export default Crowlit;

// 'use client';
// import { useEffect, useRef } from "react";

// 'use client';
// import { useEffect, useRef } from "react";

// declare global {
//   interface Window {
//     CrowlitApp?: (container: HTMLElement) => void;
//   }
// }

// const Crowlit: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const host = containerRef.current;
//     if (!host) return;

//     // ✅ Prevent multiple shadow roots
//     if (host.shadowRoot) {
//       console.warn("Shadow root already exists, skipping attachShadow.");
//       return;
//     }

//     const shadowRoot = host.attachShadow({ mode: "open" });

//     // ✅ Add CSS
//     const link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href = "https://crowlit-client.netlify.app/assets/index-LARgKfvY.css";
//     shadowRoot.appendChild(link);

//     // ✅ Add container for React
//     const reactRoot = document.createElement("div");
//     reactRoot.id = "crowlit-react-root";
//     shadowRoot.appendChild(reactRoot);

//     // ✅ Add JS script
//     const script = document.createElement("script");
//     script.src = "https://crowlit-client.netlify.app/assets/index-C5YfBURw.js";
//     script.type = "module";
//     script.async = true;

//     script.onload = () => {
//       if (window.CrowlitApp) {
//         window.CrowlitApp(reactRoot);
//       } else {
//         console.warn("CrowlitApp not found");
//       }
//     };

//     script.onerror = () => {
//       console.error("Failed to load Crowlit script.");
//     };

//     shadowRoot.appendChild(script);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         width: "100%",
//         minHeight: "300px",
//         display: "block",
//         opacity: 1,
//         visibility: "visible"
//       }}
//     />
//   );
// };

// export default Crowlit;
