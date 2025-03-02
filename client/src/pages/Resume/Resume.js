import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function Resume() {
  return (
    <div className="border border-gray-700 py-5 px-5">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl="./resume.pdf" />
        <a href="./resume.pdf">Resume</a>
      </Worker>
    </div>
  );
}

export default Resume;
