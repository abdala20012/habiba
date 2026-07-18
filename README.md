# 💖 موقع حبيبة — Love Website

موقع رومانسي عصري بـ React + Vite + Framer Motion.

---

## 🚀 طريقة التشغيل (خطوة بخطوة)

### الخطوة 1: تثبيت Node.js
لازم يكون عندك **Node.js** على جهازك. لو مش متثبت:
- نزّليه من: https://nodejs.org (اختاري نسخة LTS)

### الخطوة 2: فتح المشروع في VS Code
```bash
code .
```
أو افتحي VS Code → File → Open Folder → اختاري مجلد `sara-love-website`

### الخطوة 3: تثبيت المكتبات
افتحي الترمنال في VS Code (Ctrl + `) واكتبي:
```bash
npm install
```
استني شوية لحد ما يخلص (هياخد دقيقة أو اتنين أول مرة).

### الخطوة 4: تشغيل الموقع
```bash
npm run dev
```
هيفتح الموقع تلقائياً على: **http://localhost:3000**

---

## 🔑 الباسورد

الباسورد هو أهم تاريخ في حياتكوا: **14/7/2025**
(بيقبل أي صيغة زي 1472025 أو 14/7/2025 — يتغيّر من `CORRECT_PASSWORD` في `PasswordGate.jsx`)

الموقع من غير صور خالص — كل حاجة كلام وتصميم بس.

---

## 🎵 إضافة الموسيقى

1. حطّي ملف الأغنية (mp3) في: `src/assets/music/`
2. افتحي ملف: `src/components/MusicPlayer.jsx`
3. شيلي التعليق من السطر:
   ```jsx
   import song from '../assets/music/our-song.mp3'
   ```
4. غيّري السطر:
   ```jsx
   const songSrc = null
   ```
   إلى:
   ```jsx
   const songSrc = song
   ```

---

## ✏️ تخصيص الكلام والمحتوى

| الملف | المحتوى |
|------|---------|
| `HeroSection.jsx` | الاسم الكبير + الجملة الأولى |
| `LoveCardsSection.jsx` | الكروت التفاعلية ورسايلها |
| `ReasonsSection.jsx` | أسباب بحبها |
| `PromiseSection.jsx` | الوعد وكلام طول العمر |
| `MessageSection.jsx` | الرسالة الكبيرة |
| `MusicPlayer.jsx` | اسم الأغنية |

---

## 🎨 تخصيص الألوان

افتحي أي ملف CSS وغيّري الألوان دي:
- `#ec4899` → الوردي الأساسي
- `#a855f7` → البنفسجي
- `#f472b6` → الوردي الفاتح
- `#0a0a14` → خلفية سوداء غامقة

---

## 📦 رفع الموقع على الإنترنت

```bash
npm run build
```
هيظهرلك مجلد `dist/` ارفعيه على:
- **Netlify** (مجاني): اسحبي مجلد `dist` في netlify.com
- **Vercel** (مجاني): vercel.com
- **GitHub Pages** (مجاني)

---

ربنا يخليكوا لبعض ♥
