// import project_img_1 from "@/assets/images/project-overview-img-1.jpg"
// import project_img_2 from "@/assets/images/project-overview-img-2.jpg"
// import project_img_3 from "@/assets/images/project-overview-img-3.jpg"
// import project_img_4 from "@/assets/images/project-overview-img-4.jpg"

import project_img_1 from "@/assets/images/houses/calliope/3.jpg";
import project_img_4 from "@/assets/images/houses/calliope/4.jpg";
import project_img_2 from "@/assets/images/houses/thalia/4.jpg";
import project_img_3 from "@/assets/images/houses/thalia/5.jpg";

export const projectsData = [
  {
    id: 1,
    project_name: "Callope House",
    project_img: project_img_1,
    project_desc:
      "At the heart of the e+ project, made of natural anodised aluminium, glazing, sandstone and granite, the lobby  ...see more",
    client: "Sogeprom",
    area: "14,891 m²",
    project_year: "2020",
    project_type: "Interior design",

    location: "Sao Paulo, Brazil",
  },
  {
    id: 2,
    project_name: "Erato Fuente",
    project_img: project_img_2,
    project_desc:
      "At the heart of the e+ project, made of natural anodised aluminium, glazing, sandstone and granite, the lobby  ...see more",
    client: "Sogeprom",
    area: "14,891 m²",
    project_year: "2022",
    project_type: "Interior design",

    location: "US",
  },
  {
    id: 3,
    project_name: "Thalia House",
    project_img: project_img_3,
    project_desc:
      "At the heart of the e+ project, made of natural anodised aluminium, glazing, sandstone and granite, the lobby  ...see more",
    client: "Sogeprom",
    area: "14,891 m²",
    project_year: "2021",
    project_type: "Interior design",

    location: "UK",
  },
  {
    id: 4,
    project_name: "Polyhymnia Lakeside",
    project_img: project_img_4,
    project_desc:
      "At the heart of the e+ project, made of natural anodised aluminium, glazing, sandstone and granite, the lobby  ...see more",
    client: "Sogeprom",
    area: "14,891 m²",
    project_year: "2022",
    project_type: "Private House",

    location: "US",
  },
].map((project) => ({
  ...project,
  link: `/project-single/${project.id}`
}));
