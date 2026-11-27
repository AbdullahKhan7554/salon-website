const s = (name, price, desc, img, alt) => ({ name, price, desc, img: `/services/${img}`, alt });

export const GROUPS = [
  {
    id: "hair",
    no: "01",
    title: "Hair",
    intro: "Cuts, colour and styling, from classic to modern fades.",
    items: [
      s("Hair Cut", "80", "Classic, fade or modern styles crafted by an experienced barber.", "hair.jpg", "Men's haircut in Dubai"),
      s("Hair Trimming", "80", "Maintain your look with a clean, precise trim.", "hairtriming.jpg", "Men's hair trim"),
      s("Kids Hair Cut", "80", "Gentle and stylish cuts for kids of all ages.", "kid.jpg", "Kids haircut in Dubai"),
      s("Hair Dye", "100", "Vibrant colour using safe and lasting formulas.", "dye.jpg", "Men's hair dye"),
      s("Hair Colouring", "100", "Customised colouring for a new, fresh look.", "hair-color.jpg", "Men's hair colouring"),
      s("Hair Straightening", "130", "Sleek, smooth styles with long-lasting results.", "straightening.jpg", "Men's hair straightening"),
      s("Hair Wash & Blow Dry", "80", "A fresh wash followed by expert blow drying and styling.", "blowdry.jpg", "Hair wash and blow dry"),
    ],
  },
  {
    id: "beard",
    no: "02",
    title: "Beard & shave",
    intro: "Sharp lines and smooth shaves with premium tools.",
    items: [
      s("Shaving / Trimming", "80", "A smooth shave or a neat trim using premium tools.", "shave.jpg", "Beard shave and trim"),
      s("Beard Styling with Scissors", "130", "Detailed beard sculpting using professional techniques.", "beardstyling.jpg", "Beard styling with scissors"),
      s("Beard Colouring", "100", "Custom beard shades to match your style.", "beard-color.jpg", "Beard colouring"),
    ],
  },
  {
    id: "face",
    no: "03",
    title: "Face & skin",
    intro: "Facials, masks and clean, precise hair removal.",
    items: [
      s("Facial", "140", "Deep cleansing and hydration for healthy skin.", "facial.jpg", "Men's facial in Dubai"),
      s("Facial (No Steam)", "130", "A gentle facial without steam for sensitive skin.", "facial-no-steam.jpg", "Facial without steam"),
      s("Facial Mask", "80", "Skin-rejuvenating masks for a fresh glow.", "facial-mask.jpg", "Men's facial mask"),
      s("Nose Mask", "60", "A cleansing mask for a clear, blackhead-free nose.", "nose-mask.jpg", "Nose mask treatment"),
      s("Nose Wax", "60", "Quick hair removal for a clean look.", "nose-wax.jpg", "Nose wax hair removal"),
      s("Sticky Hair Removal", "60", "Effective sticky wax for smooth skin.", "sticky-wax.jpg", "Sticky wax hair removal"),
    ],
  },
];
