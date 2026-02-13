

const links = document.querySelectorAll(".nav-link");
const currentPath = window.location.pathname;

links.forEach(link => {
  const linkPath = new URL(link.href).pathname;

  // handle homepage cases
  if (
    linkPath === currentPath ||
    (currentPath === "/" && linkPath.endsWith("index.html"))
  ) {
    link.classList.add("active");
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    history: {
      title: "Echoes of History",
      description: "Echoes of History is an educational and visually immersive website focused on ancient civilizations. It presents historical timelines, cultural insights, and iconic landmarks in a structured and engaging way, making history easy to explore for students and enthusiasts alike.",
      image: "./Assets/Echoesofhistory.png",
      live: "https://echoes-of-history-pesonal-website.netlify.app/",
      github: "https://github.com/web-crafterr",
      technologies: ["Figma", "HTML", "CSS", "JavaScript", "Netlify", "GitHub"],
      features: [
        "Static pages presenting ancient civilizations in detail", "Historical timelines explaining major events clearly", "Cultural, architectural, and landmark-focused sections", "Visually themed layouts inspired by history", "Simple and easy-to-follow navigation structure"
      ]
    },


       harvest: {
      title: "Hope Harvest",
      description: "Harvest Hope Food Bank is a static non-profit website designed to communicate the organization’s mission, impact, and community efforts through clear and meaningful content.",
      image: "../Assets/Harvesthope.png",
      live: "https://harvest-hope-production-test.netlify.app/",
      github: "https://github.com/web-crafterr",
      technologies: ["Figma", "HTML", "CSS", "JavaScript", "Netlify", "GitHub"],
      features: [
        "Mission and vision pages explaining community goals", "Donation and volunteer information sections", "Content highlighting community impact and outreach", "Clear call-to-action elements for engagement", "Simple static layout for easy access to information"
      ]
    },

    WanderEscape: {
      title: "Wander Escape",
      description: "WanderEscape is a static travel website created to showcase destinations and travel inspiration. It focuses on visual presentation and structured content to highlight travel experiences.",
      image: "../Assets/Wanderscape.png",
      live: "https://studio7287.wordpress.com/",
      github: "https://github.com/web-crafterr",
      technologies: ["Figma", "WordPress"],
      features: [
        "Destination-focused pages showcasing travel locations", "Detailed travel descriptions and highlights", "Image-driven layouts for visual appeal", "Organized static page structure", "Straightforward navigation for users"
      ]
    },
    // dental: {
    //   title: "Dental Clinic",
    //   description: "A Responsive dental website designed to present clinic information, services, and contact details. The site focuses on clarity, trust, and professional presentation without dynamic functionality.",
    //   image: "https://picsum.photos/600/400?random=3",
    //   live: "https://github.com/web-crafterr",
    //   github: "https://github.com/web-crafterr",
    //   technologies: ["Figma", "HTML", "CSS", "JavaScript", "Netlify", "GitHub"],
    //   features: [
    //     "Responsive pages describing dental services and treatments", "Clear clinic overview with professional branding", "Contact and location information for patients", "Clean and trustworthy visual design style", "Well-structured content for easy readability"
    //   ]
    // },
 figma: {
      title: "Figma Designs",
      description: "A collection of static UI/UX design projects created in Figma, showcasing layout design, visual hierarchy, and interface concepts for web and mobile applications.",
      image: "../Assets/figma.png",
      live: "https://drive.google.com/drive/folders/1cbe9yWwqB2ruyj9wC7lDmUBLhdlLC-qV?usp=sharing",
      github: "https://github.com/web-crafterr",
      technologies: ["Figma", "UI/UX Design"],
      features: [
        "High-fidelity UI mockups and wireframe designs", "Reusable components and layout systems", "Color palettes and typography exploration", "Design concepts for web and mobile interfaces", "Structured presentation of static design work"
      ]
    },
    gis: {
      title: "GIS Project",
      description: "This GIS project involves analyzing and visualizing geographic data to study spatial patterns and relationships. It focuses on map creation, data interpretation, and presenting analytical results rather than web development.",
      image: "../Assets/Gis.png",
      live: "https://arcg.is/1GimOK1",
      github: "https://github.com/web-crafterr",
      technologies: ["ARC-Gis"],
      features: [
        "Geographic data collection and spatial analysis", "Map creation to visualize spatial relationships", "Buffer and proximity analysis for location insights", "Attribute-based querying of spatial datasets", "Interpretation of geographic patterns and results"
      ]
    }
    
  };

  const techIcons = {
    "JavaScript": "./Assets/icon-js.png",
    "CSS": "./Assets/icon-css.png",
    "HTML": "./Assets/icon-html.png",
    "Figma": "./Assets/icons8-figma-50.png",
    "GitHub": "./Assets/icon-github.png",
    "ARC-Gis": "./Assets/icons8-gis-50.png",
    "UI/UX Design": "./Assets/icons8-ui-50.png",
    "Netlify": "./Assets/icon-netlify.png",
    "WordPress": "./Assets/icon-wordpress.png",
  };


  const detailsSection = document.getElementById("project-details");
  const overlay = document.querySelector(".detail-projects-container");
  const titleEl = document.getElementById("project-title");
  const descEl = document.getElementById("project-description");
  const imageEl = document.getElementById("project-image");
  const techCountEl = document.getElementById("tech-count");
  const featureCountEl = document.getElementById("feature-count");
  const techContainer = document.getElementById("tech-tags");
  const featureList = document.getElementById("feature-list");
  const liveLink = document.getElementById("live-link");
  const githubLink = document.getElementById("github-link");
  const closeBtn = document.querySelector(".close-btn");
  const prevBtn = document.querySelector(".prev-circle");
  const nextBtn = document.querySelector(".next-circle");

  const projectKeys = Object.keys(projects);
  let currentIndex = 0;

  // Prevent modal clicks from closing
  detailsSection.addEventListener("click", e => e.stopPropagation());
  overlay.addEventListener("click", () => overlay.classList.remove("active"));
  closeBtn.addEventListener("click", () => overlay.classList.remove("active"));



  function showProjectDetailsByIndex(index) {
    currentIndex = index;
    const project = projects[projectKeys[index]];
    console.log("showProjectDetailsByIndex called", index);

    titleEl.textContent = project.title;
    descEl.textContent = project.description;
    imageEl.src = project.image;
liveLink.href = project.live;
githubLink.href = project.github;
console.log("IMAGE SRC USED:", project.image);


    // Clear everything before rendering
    // Inside showProjectDetailsByIndex
    techContainer.innerHTML = ""; // clear container first

    const uniqueTechs = [...new Set(project.technologies)];

    uniqueTechs.forEach(tech => {
      // create the pill container
      const tag = document.createElement("span");
      tag.className = "tech-tag";

      // only add icon if it exists
      if (techIcons[tech]) {
        const icon = document.createElement("img");
        icon.src = techIcons[tech];
        icon.alt = tech;
        tag.appendChild(icon);
      }

      // always add the text inside the same pill
      const text = document.createElement("span");
      text.textContent = tech;
      tag.appendChild(text);

      // append the pill to container
      techContainer.appendChild(tag);
    });



    featureList.innerHTML = "";
    project.features.forEach(feature => {
      const li = document.createElement("li");
      li.textContent = feature;
      featureList.appendChild(li);
    });

    techCountEl.textContent = project.technologies.length;
    featureCountEl.textContent = project.features.length;

    overlay.classList.add("active");
    updateNavState();
  }

  function updateNavState() {
    prevBtn.classList.toggle("disabled", currentIndex === 0);
    nextBtn.classList.toggle("disabled", currentIndex === projectKeys.length - 1);
  }

  document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const id = btn.dataset.project;
      const index = projectKeys.indexOf(id);
      if (index !== -1) showProjectDetailsByIndex(index);
    });
  });

  nextBtn.addEventListener("click", () => { if (currentIndex < projectKeys.length - 1) showProjectDetailsByIndex(currentIndex + 1); });
  prevBtn.addEventListener("click", () => { if (currentIndex > 0) showProjectDetailsByIndex(currentIndex - 1); });
});



// ================= FAQ ACCORDION JS =================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    // Close other active items
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".faq-answer").style.height = "0";
      }
    });

    // Toggle current item
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      answer.style.height = answer.scrollHeight + "px"; // expand to fit content
    } else {
      answer.style.height = "0";
    }
  });
});









