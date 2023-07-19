
const updateScreen = () => {
  generateItems();
}

const handleTypeSelection = (event) => {
  const selectedType = event.target.getAttribute('data-type');
  localStorage.setItem('projectType', selectedType);
  const updateEvent = new Event('projectTypeChanged');
  window.dispatchEvent(updateEvent);
  updateScreen(); 
}
const generateItems = () => {
  const selectedType = localStorage.getItem('projectType') || 'All';
    const items = [
      {
        imageSrc: "img/E-manager.png",
        year: "2022",
        title: "E-Manager",
        description: "Um sistema web de gerenciamento de projetos.",
        technologies: ["React.js", "Javascript", "JSON server", "Css"],
        websiteLink: "",
        githubLink: "https://github.com/viniciusmarquesvaz/E-manager",
        role: 'FrontEnd'
      },
      {
        imageSrc: "img/rdp-connection.jpg",
        year: "2021",
        title: "RDP connection Shell",
        description: "Conexão Rdp para diversos setores de uma empresa em um código.",
        technologies: ["Windows server", "raspberry pi", "Shell Script"],
        websiteLink: "",
        githubLink: "https://github.com/viniciusmarquesvaz/TerminalConnection",
        role: 'BackEnd'
      },
      {
        imageSrc: "img/First-intranet.png",
        year: "2021",
        title: "Intranet Farid",
        description: "Tela simples de intranet feita no adobe XD e depois migrada para web(meu primeiro projeto).",
        technologies: ["Html", "Javascript", "Css", "Figma"],
        websiteLink: "",
        githubLink: "https://github.com/viniciusmarquesvaz/Intranet_Farid",
        role: 'FrontEnd'
      },
      {
        imageSrc: "img/waitter-api.png",
        year: "2022",
        title: "Waiter api",
        description: "Api para garçons controlarem os pedidos dos clientes",
        technologies: ["Typescript", "Node.js", "Express.js", "Mongo.db"],
        websiteLink: "",
        githubLink: "https://github.com/viniciusmarquesvaz/WaiterApp-API",
        role:'BackEnd'
      },
      {
        imageSrc: "https://user-images.githubusercontent.com/80642632/143502870-bc4746c8-e90c-4b85-9f99-e2542eded152.gif",
        year: "2021",
        title: "Simple Portifolio",
        description: "Primeiro modelo de Portifólio web",
        technologies: ["Bulma", "Html", "Css", "Javascript"],
        websiteLink: "",
        githubLink: "https://github.com/viniciusmarquesvaz/Simple_Portifolio_Layout",
        role:'FrontEnd'
      },
      {
        imageSrc: "img/animais-fantasticos.png",
        year: "2021",
        title: "Animais Fantasticos",
        description: "Site feito de estudo no curso da origamid",
        technologies: ["Html", "Css", "Javascript"],
        websiteLink: "",
        githubLink: "https://github.com/viniciusmarquesvaz/animais-fant-sticos",
        role:'FrontEnd'
      },
      {
        imageSrc: "img/tangram.gif",
        year: "2022",
        title: "Tangram",
        description: "Projeto desenvolvido em equipe de uma plataforma que usa quiz para aparender matemática financeira",
        technologies: ["Html", "Css", "Javascript", "Python","PostgreSQL"],
        websiteLink: "",
        githubLink: "https://github.com/Skuld-Corp/App-Tangram",
        role:'FrontEnd'
      }
      
    ];
    let filteredItems = items;
    if (selectedType !== 'All') {
      filteredItems = items.filter(item => item.role === selectedType);
    }
  
    const container = document.querySelector("#containerProject");
    container.innerHTML = ''; 
 
    filteredItems.forEach(item => {
      const divItem = document.createElement("div");
      divItem.className = "item";
  
      const divCard = document.createElement("div");
      divCard.className = "card";
  
      const img = document.createElement("img");
      img.src = item.imageSrc;
      img.alt = "Agenda Digital";
  
      const small = document.createElement("small");
      small.className = "card--year";
      small.textContent = item.year;
  
      const h2Title = document.createElement("h2");
      h2Title.className = "card--title";
      h2Title.textContent = item.title;
  
      const divDescription = document.createElement("div");
      divDescription.className = "card--description";
  
      const h2Description = document.createElement("h2");
      h2Description.textContent = "Descrição";
  
      const pDescription = document.createElement("p");
      pDescription.textContent = item.description;
  
      const divTechnologies = document.createElement("div");
      divTechnologies.className = "tecnologie_container";
  
      item.technologies.forEach(tech => {
        const spanTech = document.createElement("span");
        spanTech.className = "tecnologie";
        spanTech.textContent = tech;
        divTechnologies.appendChild(spanTech);
      });
  
      const divButtonsGroup = document.createElement("div");
      divButtonsGroup.className = "buttons-group";
  
      // const aWebsite = document.createElement("a");
      // aWebsite.href = item.websiteLink;
      // aWebsite.className = "website";
      // aWebsite.target = "_blank";
  
      const iWebsite = document.createElement("i");
      iWebsite.className = "bx bx-link";
  
      const aGithub = document.createElement("a");
      aGithub.href = item.githubLink;
      aGithub.className = "website";
      aGithub.target = "_blank";
  
      const iGithub = document.createElement("i");
      iGithub.className = "bx bxl-github";
  
      // aWebsite.appendChild(iWebsite);
      // aWebsite.appendChild(document.createTextNode(" Website"));
      aGithub.appendChild(iGithub);
      aGithub.appendChild(document.createTextNode(" Github"));
  
      // divButtonsGroup.appendChild(aWebsite);
      divButtonsGroup.appendChild(aGithub);
  
      divDescription.appendChild(h2Description);
      divDescription.appendChild(pDescription);
      divDescription.appendChild(divTechnologies);
  
      divCard.appendChild(img);
      divCard.appendChild(small);
      divCard.appendChild(h2Title);
      divCard.appendChild(divDescription);
      divCard.appendChild(divButtonsGroup);
  
      divItem.appendChild(divCard);
  
      container.appendChild(divItem);
    });
  }
  window.addEventListener('projectTypeChanged', updateScreen);
  
  generateItems();
  
  const typeListItems = document.querySelectorAll('.type-list li');
  typeListItems.forEach(item => {
    item.addEventListener('click', handleTypeSelection);
  });
  