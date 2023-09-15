
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
   [
   {nome: "Otavio Figueiredo",
   nivel_de_confianca:"medio para alto",
   profissao:"eletricista extremamente profissional",
   serventia:"auxiliar no sistema da estufa do bunker, ajudar a escolher melhores equipamentos elétricos Led e etc, e auxiliar na economia elétrica",
   laço_maior_de_contato:"Mateus",
   },
   {
    nome:"Alexandra Dias",
    nivel_de_confianca:"medio baixo",
    profissao: "Arquiteta Urbanista",
    serventia: "ajudar no projeto da fazenda afastada e no bunker, pode projetar e ajudar com consultoria dos materiais",
    laço_maior_de_contato:"Vinícius"
   },
   {
    nome:"Pedro Almeida",
    nivel_de_confianca: "Alta",
    profissão: "Desenvolvedor BackEnd",
    serventia: "Pai é Advogado Criminalista, podemos consultar dúvidas e talvez podemos ser clinetes caso haja alguma merda",
    laço_maior_de_contato:"Vinícius"
   },
   {
    nome: "Cara q vende cnh digital e conta mp +55 34 9981-8581",
    nivel_de_confianca: "nao tem como mensurar",
    profissao: "nao sei",
    serventia: "fornecer cnh digital e a conta mp e outros recursos talvez",
   }
  ]
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
  