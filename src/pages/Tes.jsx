// File: Tes.jsx (Diperbarui)

import React from 'react';
import '../style.css';

export default function Tes() {
  // 1. Buat objek style untuk clip-path di sini
  const blobSectionStyle = {
    clipPath: 'url(#blobShape)',
  };

  return (
    <div className="app-container">
      {/* SVG untuk mendefinisikan bentuk blob (tidak berubah) */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="blobShape" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.85 C0.75,1 0.25,1 0,0.85 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Bagian Atas (Hijau dengan bentuk blob) */}
      {/* 2. Terapkan style object di sini menggunakan atribut 'style' */}
      <section className="top-section-blob" style={blobSectionStyle}>
        <h1 className="title">MY PROJECT</h1>
        <div className="projects-grid">
          <div className="project-card">Photography</div>
          <div className="project-card">Videography</div>
          <div className="project-card">Animation</div>
        </div>
      </section>

      {/* Bagian Bawah (Konten) */}
      <section className="bottom-section">
        <div className="contact-info">
          <h4>PUTRA ANDONI</h4>
          <p>
            <strong>Contact Me At</strong>
            <br />
            putraandoni22@gmail.com
            <br />
            Dsn. Keboh RT.3 RW.1
            <br />
            Ds. Kebonsari Kec. Sukodadi
            <br />
            Lamongan
          </p>
        </div>
        <div className="links">
          <h4>Tautan</h4>
          <p>
            Home
            <br />
            About
            <br />
            Project
            <br />
            Contact
          </p>
        </div>
      </section>
      
      <footer className="footer">
        <p>"Less flair, more achievements."</p>
        <p>@Copyright2024</p>
      </footer>
    </div>
  );
}