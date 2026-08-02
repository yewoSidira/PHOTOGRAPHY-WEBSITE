
// Import your images from the gallery folder
import Photo2 from '../assets/images/gallery/photo2.jpg';
import Photo3 from '../assets/images/gallery/photo3.jpg';
import Photo10 from '../assets/images/gallery/photo10.jpg';
import Photo12 from '../assets/images/gallery/photo12.jpg';
import omarHakeem from '../assets/images/gallery/omar-hakeem-tXUZt640l1A-unsplash.jpg';

export const galleryImages = [
  {
    id: 1,
    src: Photo2,
    alt: "Beautiful photography moment captured in Malawi",
    category: "Portraits"
  },
  {
    id: 2,
    src: Photo3,
    alt: "Stunning visual storytelling through photography",
    category: "Creative"
  },
  {
    id: 3,
    src: Photo10,
    alt: "Capturing authentic moments in Malawi",
    category: "Lifestyle"
  },
  {
    id: 4,
    src: Photo12,
    alt: "Artistic photography showcasing beauty",
    category: "Artistic"
  },
  {
    id: 5,
    src: omarHakeem,
    alt: "Professional photography session",
    category: "Professional"
  }
];

// Optional: If you want to add more images later, just:
// 1. Add the import at the top
// 2. Add a new object to the array above