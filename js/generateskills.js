
  const skills = [
    { iconClass: "fab fa-html5", title: "HTML" },
    { iconClass: "fab fa-css3", title: "CSS" },
    { iconClass: "fab fa-js", title: "JS" },
    { iconClass: "fab fa-react", title: "React.js" },
    { iconClass: "fab fa-node", title: "Node.js" },
    { iconClass: "fab fa-sass", title: "Sass" },
    { iconClass: "fab fa-python", title: "Python" },
    { iconClass: "bx bxl-git", title: "Git" },
    { iconClass: "bx bxl-figma", title: "Figma" },
    { iconClass: "next-js", title: "Next.js", isImage: true },
    { iconClass: "far fa-file-excel", title: "Excel" },
    { iconClass: "mdi mdi-language-typescript", title: "TypeScript" }
  ];
  
  const container = document.getElementById("containerSkills");
  
  skills.forEach(skill => {
    const div = document.createElement("div");
  
    if (skill.isImage) {
      const img = document.createElement("img");
      img.src = `./img/icons/${skill.iconClass}.svg`;
      img.alt = `Ícone do ${skill.title}`;
      div.appendChild(img);
    } else {
      const i = document.createElement("i");
      i.className = skill.iconClass;
      div.appendChild(i);
    }
  
    const h3 = document.createElement("h3");
    h3.textContent = skill.title;
    div.appendChild(h3);
  
    container.appendChild(div);
  });
  