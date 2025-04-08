import img_1 from "@/assets/images/gallery-image-1.jpg"
import img_2 from "@/assets/images/gallery-image-2.jpg"
import img_3 from "@/assets/images/gallery-image-3.jpg"
import img_4 from "@/assets/images/gallery-image-1.jpg"
import img_5 from "@/assets/images/gallery-image-4.jpg"

export const galleryData = [
    {
        id: "1",
        img_title: "Cozy Living Room",
        img_desc: " A warm, inviting space that combines comfort with cutting-edge design, creating the perfect ambiance for relaxation",
        img: img_1,
    },
    {
        id: "2",
        img_title: "Luxurious Living Room",
        img_desc: "An opulent setting that exudes grandeur, seamlessly integrating lavish aesthetics with intelligent functionality",
        img: img_3,
       
    },
    {
        id: "3",
        img_title: "Elegant Bedroom",
        img_desc: "A tranquil haven designed for rest and rejuvenation, with sophisticated elements that soothe and inspire",
        img: img_2,
    },
    {
        id: "4",
        img_title: "Rustic Comfort",
        img_desc: "A charming blend of rustic textures and modern amenities, offering a cozy retreat that feels both timeless and contemporary",
        img: img_4,
    },
    {
        id: "5",
        img_title: "Urban Living Space",
        img_desc: "A chic, metropolitan environment that captures the essence of city living, infused with smart features and stylish design",
        img: img_5,

    },
]
.map(project => ({
    ...project,
    link: `/project-single/${project.id}`
}));