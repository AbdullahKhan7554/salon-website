const i = (name, price) => ({ name, price });

export const PRICE_GROUPS = [
  {
    id: "hair",
    title: "Hair",
    items: [
      i("Hair Cut", "80"),
      i("Hair Trimming", "80"),
      i("Kids Hair Cut", "80"),
      i("Hair Dye", "100"),
      i("Hair Colouring", "100"),
      i("Hair Straightening", "130"),
      i("Hair Wash & Blow Dry", "80"),
    ],
  },
  {
    id: "beard",
    title: "Beard & Shave",
    items: [
      i("Shaving", "60"),
      i("Shaving / Trimming", "80"),
      i("Beard Colouring", "100"),
      i("Beard Styling with Scissors", "130"),
    ],
  },
  {
    id: "face",
    title: "Face & Skin",
    items: [
      i("Nose Wax", "60"),
      i("Sticky Hair Removal", "60"),
      i("Nose Mask", "60"),
      i("Facial Mask", "80"),
      i("Facial (No Steam Cleaning)", "130"),
      i("Facial", "140"),
    ],
  },
];

export const HOME_VISIT_URL =
  "https://wa.me/971501374524?text=Hi%2C%20I%20would%20like%20to%20book%20a%20home%20visit.";
