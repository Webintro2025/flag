import { locations } from '../../../marketplace';
import ContactForm from '@/components/ContactForm';
import React from 'react';

// Dynamic SEO metadata for each location page
export function generateMetadata({ params }) {
  const { slug } = params;
  // decode slug in case someone used percent-encoding (e.g. 'jammu%20and%20kashmir')
  const slugDecoded = typeof slug === 'string' ? decodeURIComponent(slug) : slug;
  // Resolve the raw location (from list or from slug) then format for display
  const rawLocation =
    locations.find((loc) => loc.toLowerCase().replace(/\s+/g, '-') === slugDecoded.toLowerCase()) ||
    slugDecoded.replace(/-/g, ' ');

  const formatDisplay = (str) =>
    String(str)
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

  const locationName = formatDisplay(rawLocation);
  const canonicalSlug = slugDecoded.replace(/\s+/g, '-').toLowerCase();
  const title = `T Flag Manufacturers in ${locationName} | Tiranga Army Store`;
  const description = `Need T Flag Manufacturers in ${locationName} Call Tiranga Army Store, National Flag Manufacturers in ${locationName}, Army Pagri Manufacturers in India.`;
    const keywords = [
      `T Flag Manufacturers in ${locationName}`,
      `National Flag Manufacturers in ${locationName}`,
      `Conical Flag Stand Manufacturers in ${locationName}`,
      `Regiment Embroidery Flag Manufacturers in ${locationName}`,
      `Army Pagri Manufacturers in ${locationName}`,
      `Shamiana Manufacturers in ${locationName}`,
      `T Flag Manufacturers in ${locationName}`,

      `Wall Banner Embroidery Manufacturers in ${locationName}`,
      `Tiranga Army Store - Your Trusted Partner for Quality Flags in ${locationName}`,
      ` Army Big Trophy Manufacturers in ${locationName}`,
      `Brass Board Manufacturers in ${locationName}`,
      ` Lancer Set Manufacturers in ${locationName}`,


    ].join(', ');

    return {
      title,
      description,
      keywords,
      alternates: {
  canonical: `https://majidstore.co.in/in/${canonicalSlug}`,
      },
      openGraph: {
        title,
        description,
  url: `https://majidstore.co.in/in/${canonicalSlug}`,
        siteName: 'APS Lab',
        images: [
          {
            url: '/logo.png',
            width: 400,
            height: 200,
            alt: 'APS Lab Logo',
          },
        ],
        locale: 'en_IN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        site: '@majidstoreco',
        images: [
          {
            url: '/logo.png',
            alt: 'majid Logo',
          },
        ],
      },
    };
  };


export default function LocationPage({ params }) {
  const { slug } = params;
  const slugDecoded = typeof slug === 'string' ? decodeURIComponent(slug) : slug;
  const rawLocation =
    locations.find((loc) => loc.toLowerCase().replace(/\s+/g, '-') === slugDecoded.toLowerCase()) ||
    slugDecoded.replace(/-/g, ' ');
  const formatDisplay = (str) =>
    String(str)
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  const locationName = formatDisplay(rawLocation);
  return (
    <main className="w-full ">
     



<div className="relative w-full bg-[#FCC870] h-[160px] xs:h-[260px] sm:h-[220px] md:h-[220px] lg:h-[320px] xl:h-[420px]">

  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
    <h1 className="text-white font-serif text-sm xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl leading-tight drop-shadow-md">
      T Flag Manufacturers in {locationName}
    </h1>
    <p className="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
      Welcome To <a href="https://www.majidstore.co.in/">Tiranga Army Store</a>, If You Are Looking For <strong>T Flag Manufacturers in {locationName}</strong>, We Are The Best Option For You. We Manufacture <strong>Best T Flag in {locationName}</strong>, National Flag Manufacturers in {locationName}, Conical Flag Stand Manufacturers in {locationName}, India.
    </p>
    <button
      className="mt-4 sm:mt-6 bg-red-600 hover:bg-red-700 text-white text-[10px] xs:text-xs sm:text-sm md:text-base font-normal py-1.5 xs:py-2 px-4 xs:px-6 rounded-full flex items-center space-x-2 shadow"
      type="button"
    >
      <span><a href="https://www.majidstore.co.in/contact">Contact Now</a></span>
      <i className="fas fa-arrow-right"></i>
    </button>
  </div>
</div>







<div className="bg-white px-10">
  <main className="w-full px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10">
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
      <section className="w-full md:w-1/2 text-black">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] font-semibold mb-3 sm:mb-4 md:mb-6 max-w-[600px]">
          T Flag Manufacturers in {locationName} – Tiranga Army Store
        </h2>
        <p className="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
          Founded in 2020, <strong>Tiranga Army Store</strong> has earned its reputation as one of the most trusted <strong>T Flag Manufacturers in {locationName}</strong>, offering unmatched craftsmanship, superior materials, and a legacy of excellence in military, ceremonial, and institutional supplies. Headquartered in Malerkotla, Sangrur, Punjab, we proudly serve defense organizations, government institutions, academies, and ceremonial groups across the nation.
          <br /><br />
          Our commitment to precision, durability, and national pride reflects in every flag we manufacture whether it’s a <strong>T Flag Manufacturers in {locationName}</strong>, Regiment Embroidery Flag, or <strong>National Flag Manufacturers in {locationName}</strong>. Each product is crafted under strict quality control standards, ensuring that our clients receive nothing less than perfection.
        </p>
      </section>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          alt={`T Flag Manufacturers in ${locationName}`}
          className="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto shadow"
          height={500}
          src="/National flag cotton.jpg"
          width={500}
        />
      </div>
    </div>
  </main>
</div>



<hr />




<div className="bg-white w-full px-16 xs:px-16 sm:px-16 py-6 sm:py-10 flex flex-col md:flex-row md:space-x-10 lg:space-x-20 ">
  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] mb-3 sm:mb-6 font-semibold">
      Leading T Flag Manufacturers in {locationName}
      <br className="hidden xs:block" />

    </h2>
    <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl">
      As a leading name among <strong>T Flag Manufacturers in {locationName} </strong>, Tiranga Army Store specializes in creating premium ceremonial T Flags that symbolize pride, discipline, and honor. Our T <a href="https://en.wikipedia.org/wiki/Flag">Flags</a> are crafted using superior-quality fabrics such as satin, polyester, or nylon, known for their vibrant colors, long-lasting shine, and weather resistance.
      <br /><br />
      Each T Flag undergoes expert stitching and embroidery, incorporating traditional techniques blended with modern precision machinery. Whether you require  <strong>National Flag Manufacturers in {locationName} </strong> for military parades, official ceremonies, or institutional use, our products maintain a perfect blend of elegance and durability.
    </p>
  </div>
  <div className="w-full md:w-1/3 bg-gray-200 rounded-xl p-4 sm:p-6 md:p-8 mt-8 md:mt-0 flex flex-col justify-center shadow-sm">
    <h2 className="text-base xs:text-lg sm:text-xl mb-4 sm:mb-6 text-center font-semibold">Get A Consultation</h2>
   <ContactForm />
  </div>
</div>










<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
 Tiranga Army Store – Our Product Range in {locationName}
  </h2>
<ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. T Flag Manufacturers in {locationName}</span><br />
      We are recognized as leading <strong>T Flag Manufacturers in {locationName}</strong>, producing high-quality T Flags widely used in regimental parades, official ceremonies, and institutional functions. Each T Flag is made using premium satin or polyester fabric, known for its rich shine, durability, and colorfastness. Flags can be customized with embroidery, insignias, or printed logos to represent specific units or institutions.
    </li>
    <li>
      <span className="font-bold">2. Lancer Set Manufacturers in {locationName}</span><br />
      Our Lancer Sets are designed to complement ceremonial events with elegance and prestige. They at <strong>Lancer Set Manufacturers in {locationName}</strong> include lances, decorative tassels, flag mounts, and finials made using brass, wood, and premium fabrics. Perfectly balanced and crafted, these sets are ideal for military parades, honor guards, and state functions.
    </li>
    <li>
      <span className="font-bold">3. Brass Board Manufacturers in {locationName}</span><br />
      We produce engraved <strong>Brass Board Manufacturers in {locationName}</strong> that exude authority and class. Ideal for institutional signage, memorial plaques, or name displays, our brass boards are polished to a mirror finish and engraved with precision lettering or laser marking. Options include enameled coatings, gold plating, or lacquer finishing for long-lasting shine.
    </li>
    <li>
      <span className="font-bold">4. Conical Flag Stand Manufacturers in {locationName}</span><br />
      The <strong>Conical Flag Stand Manufacturers in {locationName}</strong> by Tiranga Army Store are engineered for stability and durability. Available in brass, steel, aluminum, or powder-coated finishes, these stands suit table-top flags, office displays, or parade use. Each piece is finely balanced for a perfect upright display.
    </li>
    <li>
      <span className="font-bold">5. Shamiana Manufacturers in {locationName}</span><br />
      Our Shamiana tents are crafted from waterproof and fire-resistant canvas materials, designed for military camps, ceremonial gatherings, and outdoor institutional events. They at <strong>Shamiana Manufacturers in {locationName}</strong>come in various color combinations with border trims, linings, and embroidered crests to add a majestic ambiance.
    </li>
    <li>
      <span className="font-bold">6. National Flag Manufacturers in {locationName}</span><br />
      As proud manufacturers of the Indian National Flag, we strictly adhere to Bureau of Indian Standards (BIS) specifications. Available in Khadi cotton, polyester, and nylon, our <strong> National Flag Manufacturers in {locationName}</strong> are suitable for government buildings, schools, defense offices, and special national occasions.
    </li>
    <li>
      <span className="font-bold">7. Regiment Embroidery Flag Manufacturers in {locationName}</span><br />
      Our <strong>Regiment Embroidery Flags in {locationName}</strong> represent honor and legacy. Each flag is beautifully embroidered with golden zari, silk threads, and regimental insignias, showcasing intricate craftsmanship. Ideal for Army, Navy, and Air Force regiments, these flags are fully customizable in size, color, emblem, and border finishing.
    </li>
    <li>
      <span className="font-bold">8. Wall Banner Embroidery Manufacturers in {locationName}</span><br />
      Our Wall Banners are perfect for displaying regimental crests, mottos, or institutional emblems. Using premium velvet, satin, or felt fabrics, our embroidery team creates high-definition designs with multi-colored threads and gold laces for use in Army Messes, Schools, and Parade Halls.
    </li>
    <li>
      <span className="font-bold">9. Army Pagri Manufacturers in {locationName}</span><br />
      We manufacture Army Pagris that combine traditional design with superior comfort. Available in different styles, colors, and sizes, <strong>These Army Pagri Manufacturers in {locationName}</strong> NCC, and Police divisions during parades and ceremonial functions.
    </li>
    <li>
      <span className="font-bold">10. Army Big Trophy Manufacturers in {locationName}</span><br />
      Our Army Big Trophies are designed for recognition and achievement. Each trophy is made from premium-grade brass, metal alloys, or crystal, mounted on solid wood or marble bases. We provide <strong> Best  Army Big Trophy Manufacturers in {locationName}</strong> engraving and logo customization for regiments, academies, and institutions.
    </li>
  </ul>

  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">📞 Contact us today to discuss your requirements, request a quote, or place an order.</h3>
  <p className="text-xs xs:text-sm sm:text-base text-gray-800 mb-2 text-center">If you are looking for <strong>T Flag Manufacturers in {locationName}</strong>  who combine craftsmanship, quality, and tradition, your search ends here. Tiranga Army Store offers the widest range of military and ceremonial flags and accessories designed to meet your every requirement.

</p> <br/> 
      <ul className="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base text-gray-700 mb-2">
      <li>👉 <strong>Call Now:</strong> +91-7888309215</li>
      <li>👉 <strong>Visit Our Website</strong> <a href="https://www.majidstore.co.in/">www.majidstore.co.in</a></li>
      <li>👉 <strong>Our Email Address</strong> Majidmilitarystore@gmail.com </li>
    </ul>
  </div>
</div>

``




<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
  Why Choose Tiranga Army Store – The Trusted T Flag Manufacturer in {locationName}?
  </h2>
  <p className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
  When it comes to <strong>T Flag Manufacturers in {locationName}</strong>, <strong>Tiranga Army Store</strong> stands out for our commitment to quality, integrity, and customer satisfaction . Here’s why clients nationwide trust us:
  </p>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Premium-Grade Materials</span><br />
      We use only high-quality fabrics, metals, and accessories  sourced from reliable vendors to ensure our products meet the highest standards of durability and finish.
    </li>
    <li>
      <span className="font-bold">2. Skilled Craftsmanship</span><br />
      Our products are handcrafted by experienced artisans and embroidery specialists , ensuring each item reflects flawless design and attention to detail.
    </li>
    <li>
      <span className="font-bold">3. Customization and Precision</span><br />
      Every order can be customized  to meet specific requirements—whether in size, fabric, embroidery design, or color scheme—ensuring perfect alignment with client needs.
    </li>
    <li>
      <span className="font-bold">4. Nationwide Delivery</span><br />
      With a robust supply network, we deliver across India , ensuring timely dispatch and safe packaging for all orders—big or small.
    </li>
    <li>
      <span className="font-bold">5. Competitive Pricing</span><br />
      We offer premium ceremonial and military supplies at competitive prices , maintaining excellent value for money without compromising on quality.
    </li>
  </ul>
</div>





<hr />
<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion</h2>
  <p className="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed mb-4">
    At <strong>Tiranga Army Store</strong>, we take immense pride in being recognized as one of the most trusted <strong>T Flag Manufacturers in {locationName}</strong>, delivering products that reflect patriotism, craftsmanship, and excellence. Each flag, uniform, or ceremonial accessory we produce is a symbol of honor and tradition, crafted with precision and passion.
       With years of experience, modern production facilities, and a team of skilled artisans, we ensure unmatched quality, customization, and timely delivery for every order. Whether you represent a defense regiment, NCC unit, government institution, or educational academy, Tiranga Army Store is your trusted partner for military and ceremonial supplies that stand for heritage and honor.
  </p>
 
 
 
</div>

    </main>
  );
}