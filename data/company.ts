// Central place for company details that change over time.
// Update values here — the rest of the site reads from this file,
// so a new phone number, social link, or address updates everywhere at once.

export const company = {
  name: "Truly Asia Global Trade",
  shortName: "Truly Asia",
  tagline: "Connecting Asian Supply with Local Markets.",
  founded: "2025",
  city: "Peshawar, Pakistan",
  address: "Aliyan Plaza, Opposite Northern Bypass, Dalazak Road, Peshawar, Pakistan",
  email: "trulyasiatrade@outlook.com",

  // Add or edit offices here — the About page's "Our Offices" section is
  // generated from this list, so a new location just needs a new entry.
  offices: [
    {
      country: "Pakistan",
      label: "Peshawar Office",
      address:
        "Aliyan Plaza, Opposite Northern Bypass, Dalazak Road, Peshawar, Pakistan",
    },
    {
      country: "Indonesia",
      label: "Jakarta Office",
      address:
        "Roxy Square Lt LG Blok C2 Nomor 01, Desa/Kelurahan Tomang, Kec. Grogol Petamburan, Kota Adm. Jakarta Barat, Provinsi DKI Jakarta, Kode Pos: 11440",
    },
  ],

  // Leave PHONE_NUMBER empty until a landline/mobile number is available.
  // As soon as a real number is added here (e.g. "+92 91 1234567"),
  // the call button will appear automatically across the site.
  PHONE_NUMBER: "",

  // WhatsApp numbers, in international format with no leading zeros or symbols
  // other than the country code, used to build wa.me links.
  whatsapp: [
    {
      label: "Indonesia",
      display: "+62 858-8808-8409",
      international: "6285888088409",
    },
    {
      label: "Pakistan",
      display: "+92 327 9085980",
      international: "923279085980",
    },
  ],

  // Add real URLs here as accounts go live. Any entry left as an empty
  // string is automatically hidden from the navbar and footer.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
};

export const defaultWhatsAppMessage =
  "Hello Truly Asia Global Trade, I am interested in learning more about your wholesale products.";

export function buildWhatsAppUrl(international: string, message: string) {
  return `https://wa.me/${international}?text=${encodeURIComponent(message)}`;
}
