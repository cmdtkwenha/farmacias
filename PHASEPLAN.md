# PHASEPLAN.md

# Farmácias Angola

## Fase 0 — Fundação
- GitHub repo
- Next.js app
- Supabase/PostgreSQL
- Authentication
- Roles: Admin, Pharmacy, Customer
- Database structure
- Deployment to Vercel

## Fase 1 — Portal da Farmácia
- Pharmacy login
- Pharmacy profile
- Add product
- Edit price
- Edit stock
- Mark product available/unavailable
- See customer reservations

## Fase 2 — Pesquisa do Cliente
- Search medicine/product
- See list of pharmacies
- Filter by location, availability, price
- View pharmacy details
- Reserve product for collection

## Fase 3 — Reservas
- Reservation code
- Expiry time
- Pharmacy confirms reservation
- Customer receives confirmation
- Status: pending, confirmed, collected, cancelled, expired, customer_declined

## Fase 4 — Admin Control
- Approve pharmacies
- Manage medicine catalogue
- Merge duplicate products
- View reservations
- Suspend fake/inactive pharmacies
- Basic analytics

## Fase 5 — Excel Import
- Upload Excel/CSV stock list
- Match products to existing catalogue
- Create new products if missing
- Show import errors clearly

## Fase 6 — Maps + Location
- Google Maps integration
- Nearby pharmacies
- Distance to pharmacy
- Directions button
- “Available near me” search

## Fase 7 — Notifications
- Email confirmations
- WhatsApp/SMS later
- Pharmacy notification when booking arrives
- Customer reminder before reservation expires

## Fase 8 — Security Hardening
- Row Level Security
- Pharmacy can only see its own data
- Admin audit logs
- Rate limiting
- Backups
- 2FA for pharmacy/admin accounts

## Fase 9 — Pilot Launch
- Start with 10–20 pharmacies in Luanda
- Test stock updates
- Test reservations
- Test real collections
- Track most searched medicines

## Fase 10 — Scale
- Mobile app
- Distributor integrations
- Sponsored listings
- Premium pharmacy plans
- Delivery option
- Prescription upload only after legal review
