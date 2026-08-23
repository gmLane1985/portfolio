const projects = [
  {
    title: 'Memory Game',
    description: 'A simple recreation of a classic memory game',
    image: 'memory game.png',
    imageAlt: 'Memory Game screenshot',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/gmLane1985/memory-game',
    demoUrl: 'https://gmlane1985.github.io/memory-game/',
  },
  {
    title: 'TinDog',
    description: 'A dating app for you beloved dog.',
    image: 'tindog.png',
    imageAlt: 'TinDog screenshot',
    technologies: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/gmLane1985/tindog',
    demoUrl: 'https://gmlane1985.github.io/tindog/',
  },
  {
    title: 'Move It',
    description: 'A landing page for a moving company.',
    image: 'moveit.png',
    imageAlt: 'Move It screenshot',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    githubUrl: 'https://github.com/gmLane1985/move-it-moving-company',
    demoUrl: 'https://gmlane1985.github.io/move-it-moving-company/',
  },
  {
    title: 'Tiny Time Travel Inc.',
    description: 'Landing Page for a Time Travel Agency',
    image: 'timetravel.png',
    imageAlt: 'Project screenshot',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/gmLane1985/tiny-time-travel-inc',
    demoUrl: 'https://gmlane1985.github.io/tiny-time-travel-inc/',
  },
];

const projectImagePath = (image) => {
  const prefix = window.location.pathname.endsWith('/projects.html')
    ? '../'
    : './';

  return `${prefix}assets/images/${image}`;
};

const createProjectMarkup = (project) => `
  <img
    src="${projectImagePath(project.image)}"
    alt="${project.imageAlt}"
    class="project-image"
    loading="lazy"
  />
  <div class="project-content">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-badges">
      ${project.technologies.map((technology) => `<span class="badge">${technology}</span>`).join('')}
    </div>
    <div class="project-actions">
      <a
        href="${project.githubUrl}"
        class="link-button"
        target="_blank"
        rel="noopener noreferrer"
      >GitHub</a>
      <a
        href="${project.demoUrl}"
        class="cta-button"
        target="_blank"
        rel="noopener noreferrer"
      >Live Demo</a>
    </div>
  </div>
`;

const renderProjects = () => {
  const projectsGrid = document.querySelector('.projects-grid');

  if (projectsGrid) {
    projectsGrid.innerHTML = projects
      .map(
        (project) =>
          `<div class="project-card">${createProjectMarkup(project)}</div>`,
      )
      .join('');
  }

  const featuredGrid = document.querySelector('.featured-grid');

  if (featuredGrid) {
    const currentWeek = Math.floor(
      Date.UTC(
        new Date().getUTCFullYear(),
        new Date().getUTCMonth(),
        new Date().getUTCDate(),
      ) /
        (7 * 24 * 60 * 60 * 1000),
    );
    const featuredProject = projects[currentWeek % projects.length];

    featuredGrid.innerHTML = createProjectMarkup(featuredProject);
    featuredGrid.querySelector('.project-image').className = 'featured-image';
    featuredGrid.querySelector('.project-content').className = 'featured-text';
    featuredGrid.querySelector('.project-badges').className = 'featured-meta';
  }
};

renderProjects();
