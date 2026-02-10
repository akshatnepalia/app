# Product Requirements Document (PRD)
## Vividh India Solutions - B2B Manufacturing Website

**Last Updated:** February 10, 2025

---

## Original Problem Statement

Build a high-value, high-conversion professional B2B website for Vividh India Solutions - a manufacturer, wholesaler, and distributor of medical sharp containers, paper products, and cleaning supplies established in 2015 in Jaipur, Rajasthan.

**Target Audience:** Distributors, wholesalers, retailers, factories, hotels, hospitals, food businesses, and bulk buyers across India

**Business Goals:**
- Generate qualified B2B leads (calls, WhatsApp, enquiry forms)
- Build trust, credibility, and authority
- Clearly communicate quality, affordability, and timely delivery
- Encourage bulk enquiries and repeat buyers

---

## Company Information

- **Company Name:** Vividh India Solutions
- **Established:** 2015
- **CEO:** Shirish Rawat
- **Business Type:** Sole Proprietorship - Wholesaler/Distributor
- **GST:** 08ALSPR1706R1Z7 (Registered since July 1, 2017)
- **Location:** 2-Ta-11, Jawahar Nagar, Jaipur-302004, Rajasthan, India
- **Contact:** +91 8875355666
- **Email:** vividhindiasolution@gmail.com
- **Employees:** Up to 10 People

---

## Product Catalog

### 1. Sharp Containers
- Biomedical Waste Sharp Containers (3L, 7.5L, 12L, 26L)
- Polypropylene material
- WHO compliant
- Target: Hospitals, Clinics, Diagnostic Centers

### 2. Paper Products
- Toilet Paper Rolls (2-Ply, 3-Ply)
- M-Fold Paper Towels (200-300 sheets)
- Target: Hotels, Hospitals, Offices, Malls

### 3. Cleaning Supplies
- Wet & Dry Mops (Acrylic, Microfiber)
- Target: Commercial spaces, Hotels, Hospitals

### 4. Liquid Soap
- Mystairs Premium Liquid Soap
- Antibacterial formula
- Available in 500ml, 1L, 5L

### 5. Patient Care
- Patient ID Bands (Adult, Pediatric)
- Waterproof, tear-resistant

---

## What's Been Implemented (Phase 1 - Frontend with Mock Data)

**Date Completed:** February 10, 2025

### Pages Created:
1. **Home Page** - Hero section, product showcase, why choose us, industries served, testimonials, contact form, CTA banners
2. **About Us** - Company overview, values, journey timeline, leadership, stats
3. **Products** - Full product catalog with search/filter, detailed product cards
4. **Why Choose Us** - Competitive advantages, comparison table, trust indicators
5. **Quality Assurance** - Quality process, testing parameters, certifications
6. **Contact** - Contact form, contact methods, office information, map

### Components:
- Header with navigation and top bar (phone, email, GST)
- Footer with company info, quick links, products, contact
- Floating CTA buttons (WhatsApp & Call) - desktop and mobile
- Mobile-responsive sticky bottom bar

### Features:
- Click-to-call functionality
- Click-to-WhatsApp with pre-filled messages
- Contact forms (mock submission with toast notifications)
- Responsive design for all screen sizes
- Professional image integration
- Trust badges and social proof
- Industry-specific sections

### Design Implementation:
- Color scheme: Navy Blue/Dark Grey/White with Orange accents
- Professional B2B aesthetic
- High-quality stock images for products and sections
- Smooth animations and transitions
- Mobile-first responsive design

---

## Tech Stack

### Frontend:
- React 19.0.0
- React Router DOM 7.5.1
- Tailwind CSS
- Shadcn UI components
- Lucide React icons
- Axios for API calls
- React Hook Form & Zod for validation

### Backend (Not Yet Implemented):
- FastAPI (Python)
- MongoDB with Motor (async driver)
- Pydantic for validation

---

## Prioritized Backlog

### P0 (High Priority - Next Phase):
1. **Backend Development**
   - Create MongoDB collections for enquiries
   - Build enquiry submission API endpoints
   - Integrate Resend email service for notifications
   - Connect frontend forms to backend APIs
   - Remove mock data and implement real data flow

2. **Email Integration**
   - Setup Resend API for email notifications
   - Send enquiry emails to vividhindiasolution@gmail.com
   - Email templates for enquiry confirmations

### P1 (Medium Priority):
1. Admin dashboard to view enquiries
2. Product management system
3. Google Analytics integration
4. SEO optimization (meta tags, structured data)
5. Performance optimization (image compression, lazy loading)

### P2 (Low Priority):
1. Newsletter subscription
2. Blog section for SEO
3. Testimonial submission form
4. Chat integration (beyond WhatsApp)
5. Multi-language support

---

## API Contracts (To Be Implemented)

### POST /api/enquiries
**Purpose:** Submit contact/enquiry form

**Request Body:**
```json
{
  "name": "string (required)",
  "phone": "string (required)",
  "email": "string (optional)",
  "company": "string (optional)",
  "product": "string (optional)",
  "subject": "string (optional)",
  "message": "string (optional)",
  "enquiry_type": "contact | bulk_quote | product_enquiry"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Enquiry submitted successfully",
  "enquiry_id": "string"
}
```

### GET /api/enquiries (Admin only)
**Purpose:** Fetch all enquiries for admin dashboard

**Response:**
```json
{
  "enquiries": [
    {
      "id": "string",
      "name": "string",
      "phone": "string",
      "email": "string",
      "company": "string",
      "product": "string",
      "message": "string",
      "created_at": "timestamp"
    }
  ],
  "total": "number"
}
```

---

## Mock Data Location

All mock data is currently stored in: `/app/frontend/src/mockData.js`

This file contains:
- Company information
- Hero content
- Products catalog
- Why choose us features
- Industries served
- Testimonials
- Quality assurance info
- Stats

**Note:** This mock data needs to be replaced with backend APIs in Phase 2.

---

## Next Action Items

1. ✅ Get confirmation from user to proceed with backend development
2. Build backend API endpoints for enquiry submission
3. Setup Resend email integration with API key
4. Integrate frontend forms with backend APIs
5. Test end-to-end enquiry flow
6. Deploy to production

---

## Integration Requirements

### Email Service (Resend)
- **Purpose:** Send enquiry notifications
- **Required:** API Key from https://resend.com
- **Recipient:** vividhindiasolution@gmail.com
- **Status:** Playbook received, awaiting implementation

### WhatsApp Integration
- **Type:** Simple click-to-chat (No API required)
- **Number:** +91 8875355666
- **Status:** ✅ Implemented

---

## User Personas

### Primary Persona: Bulk Buyer (Hospital Procurement Manager)
- **Age:** 35-50
- **Role:** Purchase Manager/Procurement Head
- **Goals:** Find reliable supplier with quality products at competitive prices
- **Pain Points:** Inconsistent quality, delayed delivery, high prices
- **Needs:** Bulk discounts, timely delivery, quality assurance, GST invoices

### Secondary Persona: Hotel Manager
- **Age:** 30-45
- **Role:** Operations Manager
- **Goals:** Regular supply of hygiene and cleaning products
- **Pain Points:** Stock shortages, quality issues
- **Needs:** Consistent quality, on-time delivery, competitive pricing

### Tertiary Persona: Distributor/Reseller
- **Age:** 28-55
- **Role:** Business Owner
- **Goals:** Find manufacturer for good margins
- **Pain Points:** High dealer margins, limited product range
- **Needs:** Direct manufacturer pricing, flexible payment terms, variety

---

## Success Metrics (To Be Tracked)

1. **Lead Generation:**
   - Enquiry form submissions per week
   - Phone calls received
   - WhatsApp messages

2. **Engagement:**
   - Average time on site
   - Pages per session
   - Bounce rate

3. **Conversion:**
   - Enquiry to quote conversion
   - Quote to order conversion

---

## Notes

- Website is currently frontend-only with mock data
- All interactive elements (forms, buttons) work with mock responses
- Design follows B2B conversion best practices
- Mobile-responsive and optimized for all devices
- Ready for backend integration

