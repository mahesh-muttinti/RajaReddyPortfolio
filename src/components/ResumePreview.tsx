"use client";
import React, { useEffect, useRef } from "react";

export default function ResumePreview() {
  const viewer = useRef(null);

  useEffect(() => {
    import("@pdftron/webviewer").then(() =>
      WebViewer(
        {
          path: "/webviewer/lib",
          initialDoc: "/Raja Latest Resume.pdf",
        },
        viewer.current
      ).then((instance) => {})
    );
  }, []);

  return (
    <div className="">
      <div className="container" ref={viewer} style={pdfViewStyle}></div>
    </div>
  );
}

const pdfViewStyle = { height: "100vh", width: "50vw" };
