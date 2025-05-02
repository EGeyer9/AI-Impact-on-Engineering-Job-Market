const jobs = [
  {
    title: "Mechanical Engineer",
    traditional: "Designs mechanical systems including engines, HVAC, and robotics using CAD and simulation.",
    aiIntegration: "Uses AI tools like generative design in Fusion 360 to automatically generate optimized part shapes based on performance goals, drastically reducing time-to-prototype."
  },
  {
    title: "Civil Engineer",
    traditional: "Plans and supervises construction projects such as bridges, highways, and buildings.",
    aiIntegration: "Works with AI traffic and structural simulation software (e.g., CityFormLab) to predict load behavior and urban flow under different infrastructure layouts."
  },
  {
    title: "Electrical Engineer",
    traditional: "Designs and tests electrical systems and circuits for power, communication, and embedded systems.",
    aiIntegration: "Collaborates with AI layout optimizers like Synopsys DSO.ai to speed up PCB design, improve component layout, and reduce power usage."
  },
  {
    title: "Aerospace Engineer",
    traditional: "Designs aircraft and spacecraft, and runs simulations on aerodynamics and structural performance.",
    aiIntegration: "Trains AI systems to monitor spacecraft sensor data for anomaly detection and predictive maintenance (used by NASA and SpaceX)."
  },
  {
    title: "Environmental Engineer",
    traditional: "Addresses pollution, water quality, and sustainability issues.",
    aiIntegration: "Deploys AI-driven sensors in urban environments to detect air and water pollution in real-time and uses machine learning to model and mitigate environmental impact."
  },
  {
    title: "Software Engineer",
    traditional: "Develops applications, systems, and web platforms through code, debugging, and deployment.",
    aiIntegration: "Uses GitHub Copilot or Amazon CodeWhisperer to autocomplete functions, refactor code, and increase testing efficiency, freeing up engineers to focus on system architecture."
  },
  {
    title: "Biomedical Engineer",
    traditional: "Creates devices like pacemakers, prosthetics, and diagnostic tools.",
    aiIntegration: "Collaborates with AI to create adaptive prosthetics that learn user behavior, improving fit and function over time (e.g., Brain-Computer Interface prosthetics)."
  },
  {
    title: "Chemical Engineer",
    traditional: "Designs chemical processes for materials, energy, and drug manufacturing.",
    aiIntegration: "Uses AI models (like DeepMind's AlphaFold) to simulate protein folding and chemical reactions, enabling faster and safer drug discovery workflows."
  },
  {
    title: "Industrial Engineer",
    traditional: "Improves production efficiency through workflow design, supply chain analysis, and time studies.",
    aiIntegration: "Implements AI tools to optimize factory layouts, predict machine failures, and manage inventory via predictive analytics in real-time."
  },
  {
    title: "Materials Engineer",
    traditional: "Develops and tests new materials for use in construction, electronics, and aerospace.",
    aiIntegration: "Uses machine learning to analyze material properties and suggest new composite blends with enhanced strength, flexibility, or weight reduction."
  },
  {
    title: "Automotive Engineer",
    traditional: "Designs vehicles and systems such as drivetrains, safety features, and suspension.",
    aiIntegration: "Works with AI simulators to test crash response and collaborate on autonomous driving systems using AI vision (like Tesla or Waymo’s sensor fusion)."
  },
  {
    title: "Nuclear Engineer",
    traditional: "Designs and maintains systems involving nuclear energy and radiation safety.",
    aiIntegration: "Applies AI to monitor reactor core conditions in real-time, enabling predictive safety mechanisms and reducing human oversight risks in critical systems."
  }
];

const container = document.getElementById("jobs");

jobs.forEach((job, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.animationDelay = `${index * 0.08}s`;

  const title = document.createElement("h2");
  title.textContent = job.title;

  const traditional = document.createElement("section");
  traditional.innerHTML = `<span>Traditional Role</span>${job.traditional}`;

  const ai = document.createElement("section");
  ai.innerHTML = `<span>Human + AI Integration</span>${job.aiIntegration}`;

  card.appendChild(title);
  card.appendChild(traditional);
  card.appendChild(ai);
  container.appendChild(card);
});
