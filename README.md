# 🌸 Sakura Bridge Consultancy — Nepal–Japan Consultancy Website

A full-stack Next.js website for a Nepal–Japan consultancy, with a contact form backend powered by Nodemailer.

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your SMTP credentials:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_app_password   # Gmail App Password
EMAIL_TO=info@yourdomain.com   # Where contact form emails go
```

**Gmail App Password**: Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) → create an app password for "Mail".

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── globals.css         # Global styles + custom fonts
│   ├── page.tsx            # Homepage (Hero, Services, Testimonials)
│   ├── about/page.tsx      # About page (Team, Values, Timeline)
│   ├── services/page.tsx   # Services page (all 6 service categories)
│   ├── contact/page.tsx    # Contact page with form (client-side)
│   └── api/
│       └── contact/
│           └── route.ts    # ← BACKEND: handles form submission
├── components/
│   ├── Navbar.tsx          # Responsive sticky navbar
│   ├── Footer.tsx          # Footer with links + contact info
│   └── ScrollReveal.tsx    # Scroll animation wrapper
├── .env.example            # Environment variable template
└── README.md
```

---

## 🔌 Contact Form Backend (`/api/contact`)

**Endpoint**: `POST /api/contact`

**Request body:**
```json
{
  "name": "Priya Shrestha",
  "email": "priya@example.com",
  "phone": "+977-981234567",
  "service": "Student Visa",
  "message": "I'm interested in studying Japanese..."
}
```

**What it does:**
1. Validates required fields (name, email, service, message)
2. Sends a **detailed email** to the business (`EMAIL_TO`)
3. Sends an **auto-reply** to the client
4. Returns `{ success: true }` or `{ error: "..." }`

---

## 🎨 Design System

- **Fonts**: Playfair Display (headings) + DM Sans (body) + Noto Serif JP (Japanese accents)
- **Colors**: Deep crimson (`#dc2626`), ink black (`#0f0f0f`), antique gold (`#d4af37`), cream (`#faf7f2`)
- **Aesthetic**: Japan-meets-Nepal — torii gate motifs, wave patterns, Himalayan silhouettes

---

## 🌍 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, services grid, testimonials, CTA |
| About | `/about` | Story, values, team, timeline |
| Services | `/services` | 6 detailed service cards with inclusions |
| Contact | `/contact` | Contact form + office info |

---

## ✅ Deployment

Compatible with **Vercel** (recommended), **Netlify**, or any Node.js host.

For Vercel: set environment variables in the Vercel dashboard under **Settings → Environment Variables**.
