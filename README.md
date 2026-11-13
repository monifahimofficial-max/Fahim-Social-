# Fahim Social — ধাপ ২
1. `schema.sql` (ধাপ ১) Supabase-এ চালান।
2. `cp .env.example .env.local` এবং URL/anon key বসান।
3. `npm install && npm run dev`
4. Supabase → Auth → URL Configuration: Site URL = http://localhost:3000, Redirect URLs-এ `http://localhost:3000/auth/callback` যোগ করুন।

## ধাপ ৩ যোগ হয়েছে
ফিড, পোস্ট (লেখা/ছবি/ভিডিও), রিঅ্যাকশন, কমেন্ট/রিপ্লাই, শেয়ার, এডিট/ডিলিট, ইনফিনিট স্ক্রল। ধাপ ১-এর `schema.sql` ও `post-media` বাকেট আগে থেকে থাকতে হবে।

## ধাপ ৪ (ও ৫ আংশিক) — যোগ হয়েছে
প্রোফাইল (ছবি/কভার/এডিট/প্রাইভেসি), বন্ধু/ফলো/ব্লক/রিপোর্ট, মেসেঞ্জার (রিয়েলটাইম, টাইপিং, অনলাইন, রিড রিসিপ্ট, গ্রুপ চ্যাট, ফাইল), নোটিফিকেশন, সার্চ ও ট্রেন্ডিং হ্যাশট্যাগ।
**আগে `schema.sql`, তারপর `schema_step4.sql` Supabase SQL Editor-এ চালান।**
