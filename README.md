---
title: 'Jobhunter Frontend Documentation'
disqus: ayungavis
---

Jobhunter Frontend Documentation
===
![version](https://img.shields.io/npm/v/react.svg) ![license](https://img.shields.io/npm/l/react.svg)

Jobhunter adalah platform pencarian kerja yang diperuntukan untuk Fresh Graduate. Jobhunter dibangun menggunakan [NextJS](https://nextjs.org) dan [Redux](https://react-redux.js.org/). Sedangkan untuk User Interface dibangun menggunakan [Ant Design](https://ant.design/).

## Table of Contents

[TOC]

## System Requirement

Berikut spesifikasi sistem yang dibutuhkan:

* `npm > 6.5.0`
* `node > 10.*`

## Installation

Silahkan mengikuti panduan di bawah ini untuk instalasi:

1. `git clone https://gitlab.com/ayungavis/jobhunter-frontend.git`
2. `cd jobhunter-frontend`
3. `npm install`
4. `npm run dev`

## Available Scripts

Di dalam direktori proyek, kamu dapat menjalankan:

### `npm run dev`

Menjalankan applikasi di mode pengembangan.
Buka [http://localhost:3000](http://localhost:3000) di browser.

Halaman otomatis akan refresh ulang jika kamu melakukan beberapa perubahan pada code.
Kamu juga akan melihat banyak error di console.

### `npm run build`

Membangun aplikasi di mode produksi yang berada pada folder `.next`
Ini dapat mengoptimalkan aplikasi untuk kinerja terbaik.

### `npm run start`

Menjalankan aplikasi di mode produksi. Aplikasi seharusnya dibuild terlebih dahulu dengan \`next build\`.

Lihat di dokumentasi Next tentang [deployment](https://github.com/zeit/next.js/wiki/Deployment) untuk informasi lebih lanjut.

## Folder Structure

Setelah `clone` aplikasi jobhunter, seharusnya akan terlihat seperti ini:

```
.
├── components
├── config
├── node_modules
│   ├── [...]
├── pages
├── redux
├── static
└── utils
```

Folder `components` berisi mengenai komponen yang digunakan dalam aplikasi.

Folder `config` berisi mengenai konfigurasi server API.

Folder `node_modules` berisi package/modul yang dipakai.

Folder `pages` berisi daftar halaman.

Folder `redux` berisi konfigurasi redux.

Folder `static` berisi file statis seperti gambar, css, icon, dll.

Baca selengkapnya mengenai [Next's Routing](https://github.com/zeit/next.js#routing)

## Appendix and FAQ

:::info
**Dokumentasi masih belum lengkap?** Silahkan hubungi saya di [instagram.com](https://instagram.com/ayungavis)!
:::

###### tags: `Jobhunter` `Frontend` `Documentation`
