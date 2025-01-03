// Load project data and dynamically create project cards
document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("projects.json");
    const projects = await response.json();
  
    const container = document.querySelector("main");
    container.innerHTML = projects
      .map((project) => {
        return `
          <div 
            class="card p-6 rounded-lg shadow-md hover:shadow-xl"
            data-aos="fade-up"
          >
            <img 
              src="${project.image}" 
              alt="${project.projectName}" 
              class="w-full h-64 object-cover rounded-md"
            >
            <div class="mt-4">
              <h3 class="text-2xl font-bold">${project.projectName}</h3>
              <a 
                href="#" 
                class="text-blue-400 mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        `;
      })
      .join("");
  
    // Initialize AOS animations
    AOS.init();
  });
  
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  