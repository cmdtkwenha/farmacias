# DATABASE.md

## Core Tables

users
- id
- full_name
- email
- phone
- role
- created_at

pharmacies
- id
- owner_id
- name
- phone
- email
- province
- municipality
- address
- latitude
- longitude
- verified
- status
- created_at

medicine_catalogue
- id
- generic_name
- brand_name
- active_ingredient
- strength
- dosage_form
- category
- requires_prescription
- source
- created_at

pharmacy_products
- id
- pharmacy_id
- medicine_id
- product_name
- price_kz
- stock_quantity
- available
- expiry_date
- created_at
- updated_at

reservations
- id
- customer_id
- pharmacy_id
- product_id
- reservation_code
- quantity
- status
- expires_at
- collected_at
- created_at

audit_logs
- id
- user_id
- action
- table_name
- record_id
- created_at
