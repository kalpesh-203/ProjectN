const careers = {
  tech: [
    {
      name: "Software Developer",
      icon:"<i class='bi bi-code-slash career-icon'></i>",
      children: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Mobile App Developer", "Web Developer"],
      skills: ["Programming (Java, Python)", "Version Control (Git)", "Problem Solving"],
      entry: "₹4,00,000",
      exp: "₹15,00,000"
    },
    {
      name: "Frontend Developer",
      icon:"<i class='bi bi-layers career-icon'></i>",
      children: [],
      skills: ["HTML", "CSS", "JavaScript", "React"],
      entry: "₹3,50,000",
      exp: "₹13,00,000"
    },
    {
      name: "Backend Developer",
      icon:"<i class='bi bi-server career-icon'></i>",
      children: [],
      skills: ["Node.js", "Python", "SQL", "API Design"],
      entry: "₹4,00,000",
      exp: "₹14,00,000"
    },
    {
      name: "Full Stack Developer",
      icon:"<i class='bi bi-fullscreen career-icon'></i>",
      children: [],
      skills: ["HTML/CSS", "JavaScript", "Databases", "APIs"],
      entry: "₹5,00,000",
      exp: "₹16,00,000"
    },
    {
      name: "Mobile App Developer",
      icon:"<i class='bi bi-phone career-icon'></i>",
      children: [],
      skills: ["Android/iOS", "Kotlin/Swift", "UI/UX"],
      entry: "₹3,80,000",
      exp: "₹12,00,000"
    },
    {
      name: "Web Developer",
      icon:"<i class='bi bi-globe career-icon'></i>",
      children: [],
      skills: ["HTML", "CSS", "JavaScript", "SEO"],
      entry: "₹3,00,000",
      exp: "₹11,00,000"
    },
    {
      name: "DevOps Engineer",
      icon:"<i class='bi bi-cloud-upload career-icon'></i>",
      children: ["Cloud Engineer", "Cloud Architect"],
      skills: ["CI/CD", "Docker", "AWS", "Linux"],
      entry: "₹5,20,000",
      exp: "₹16,50,000"
    },
    {
      name: "Cloud Engineer",
      icon:"<i class='bi bi-cloud career-icon'></i>",
      children: [],
      skills: ["AWS/Azure", "Linux", "Terraform"],
      entry: "₹5,00,000",
      exp: "₹17,00,000"
    },
    {
      name: "Cloud Architect",
      icon:"<i class='bi bi-diagram-3 career-icon'></i>",
      children: [],
      skills: ["Cloud Design", "Cost Optimization", "Security"],
      entry: "₹6,00,000",
      exp: "₹22,00,000"
    },
    {
      name: "AI Engineer",
      icon:"<i class='bi bi-robot career-icon'></i>",
      children: ["Machine Learning Engineer", "Data Scientist"],
      skills: ["Python", "TensorFlow", "Deep Learning"],
      entry: "₹7,00,000",
      exp: "₹25,00,000"
    },
    {
      name: "Machine Learning Engineer",
      icon:"<i class='bi bi-lightbulb career-icon'></i>",
      children: [],
      skills: ["Python", "ML Algorithms", "Data Preprocessing"],
      entry: "₹6,50,000",
      exp: "₹21,00,000"
    },
    {
      name: "Data Scientist",
      icon:"<i class='bi bi-bar-chart-line career-icon'></i>",
      children: ["Data Analyst"],
      skills: ["Python", "R", "Machine Learning", "Statistics"],
      entry: "₹6,00,000",
      exp: "₹23,00,000"
    },
    {
      name: "Data Analyst",
      icon:"<i class='bi bi-pie-chart career-icon'></i>",
      children: [],
      skills: ["Excel", "SQL", "Visualization"],
      entry: "₹3,60,000",
      exp: "₹11,00,000"
    },
    {
      name: "Cybersecurity Specialist",
      icon:"<i class='bi bi-shield-lock career-icon'></i>",
      children: ["IT Security Professional"],
      skills: ["Network Security", "Pen testing", "Risk Assessment"],
      entry: "₹5,50,000",
      exp: "₹17,00,000"
    },
    {
      name: "IT Security Professional",
      icon:"<i class='bi bi-lock career-icon'></i>",
      children: [],
      skills: ["Firewalls", "Encryption", "Incident Response"],
      entry: "₹5,00,000",
      exp: "₹16,00,000"
    },
    {
      name: "Network Engineer",
      icon:"<i class='bi bi-diagram-2 career-icon'></i>",
      children: [],
      skills: ["TCP/IP", "Routing", "Firewall"],
      entry: "₹4,00,000",
      exp: "₹13,00,000"
    },
    {
      name: "Computer Systems Analyst",
      icon:"<i class='bi bi-cpu career-icon'></i>",
      children: [],
      skills: ["System Design", "Troubleshooting", "Analysis"],
      entry: "₹4,20,000",
      exp: "₹14,00,000"
    },
    {
      name: "Database Administrator",
      icon:"<i class='bi bi-database career-icon'></i>",
      children: [],
      skills: ["SQL", "Backup", "Performance Tuning"],
      entry: "₹4,70,000",
      exp: "₹15,00,000"
    },
    {
      name: "QA Engineer",
      icon:"<i class='bi bi-check-circle career-icon'></i>",
      children: [],
      skills: ["Testing", "Selenium", "Bug Tracking"],
      entry: "₹3,30,000",
      exp: "₹10,50,000"
    },
    {
      name: "UI/UX Designer",
      icon:"<i class='bi bi-bezier career-icon'></i>",
      children: [],
      skills: ["Wireframing", "Figma", "User Research"],
      entry: "₹4,00,000",
      exp: "₹12,00,000"
    },
    {
      name: "Solution Architect",
      icon:"<i class='bi bi-diagram-3 career-icon'></i>",
      children: [],
      skills: ["System Integration", "Design Patterns", "Leadership"],
      entry: "₹7,50,000",
      exp: "₹25,00,000"
    },
    {
      name: "System Administrator",
      icon:"<i class='bi bi-hdd network-icon'></i>",
      children: [],
      skills: ["Linux", "Windows Server", "Automation"],
      entry: "₹4,10,000",
      exp: "₹13,50,000"
    },
    {
      name: "Site Reliability Engineer",
      icon:"<i class='bi bi-activity career-icon'></i>",
      children: [],
      skills: ["Monitoring", "Incident Response", "Automation"],
      entry: "₹5,60,000",
      exp: "₹18,00,000"
    },
    {
      name: "Technical Support Engineer",
      icon:"<i class='bi bi-tools career-icon'></i>",
      children: [],
      skills: ["Troubleshooting", "Networking", "Customer Service"],
      entry: "₹3,20,000",
      exp: "₹8,50,000"
    },
    {
      name: "IT Project Manager",
      icon:"<i class='bi bi-clipboard-data career-icon'></i>",
      children: [],
      skills: ["Agile", "Scrum", "Stakeholder Management"],
      entry: "₹7,00,000",
      exp: "₹20,00,000"
    },
    {
      name: "Technical Program Manager",
      icon:"<i class='bi bi-people career-icon'></i>",
      children: [],
      skills: ["Planning", "Risk Management", "Leadership"],
      entry: "₹8,00,000",
      exp: "₹26,00,000"
    }
  ]
};

// Non-Tech careers
careers.nontech = [
  { name: "Accountant", icon:"<i class='bi bi-cash-stack career-icon'></i>", children: ["Auditor", "Tax Consultant"], skills: ["Bookkeeping", "Taxation", "Financial Reporting"], entry: "₹3,00,000", exp: "₹10,00,000" },
  { name: "HR Manager", icon:"<i class='bi bi-person-gear career-icon'></i>", children: ["HR Generalist"], skills: ["Recruitment", "Onboarding", "Employee Relations"], entry: "₹4,00,000", exp: "₹12,00,000" },
  { name: "Marketing Specialist", icon:"<i class='bi bi-megaphone career-icon'></i>", children: ["Digital Marketer"], skills: ["SEO", "Content", "Campaigns"], entry: "₹3,50,000", exp: "₹11,00,000" },
  { name: "Sales Executive", icon:"<i class='bi bi-bar-chart career-icon'></i>", children: ["Sales Manager"], skills: ["Lead Generation", "Negotiation", "CRM"], entry: "₹3,20,000", exp: "₹10,50,000" },
  { name: "Teacher", icon:"<i class='bi bi-journal-bookmark career-icon'></i>", children: ["Principal"], skills: ["Lesson Planning", "Classroom Management", "Assessment"], entry: "₹2,80,000", exp: "₹8,00,000" },
  { name: "Nurse", icon:"<i class='bi bi-heart-pulse career-icon'></i>", children: ["Head Nurse"], skills: ["Patient Care", "IV/Medications", "Monitoring"], entry: "₹3,00,000", exp: "₹9,50,000" },
  { name: "Lawyer", icon:"<i class='bi bi-hammer career-icon'></i>", children: ["Corporate Lawyer"], skills: ["Legal Research", "Drafting", "Litigation"], entry: "₹4,50,000", exp: "₹18,00,000" },
  { name: "Journalist", icon:"<i class='bi bi-newspaper career-icon'></i>", children: ["Editor"], skills: ["Reporting", "Editing", "Fact-checking"], entry: "₹3,20,000", exp: "₹11,50,000" },
  { name: "Graphic Designer", icon:"<i class='bi bi-brush career-icon'></i>", children: ["Art Director"], skills: ["Branding", "Illustration", "Layout"], entry: "₹3,00,000", exp: "₹10,00,000" },
  { name: "Financial Analyst", icon:"<i class='bi bi-graph-up-arrow career-icon'></i>", children: ["Investment Analyst"], skills: ["Excel Modeling", "Valuation", "Reporting"], entry: "₹4,20,000", exp: "₹14,00,000" }
];

function showTree(type) {
  document.getElementById("choice-screen").classList.add("d-none");
  document.getElementById("tree-section").classList.remove("d-none");

  document.getElementById("tree-title").innerText = type === 'nontech' ? "Non-Tech Careers" : "Tech Careers";
  const container = document.getElementById("tree-container");
  container.innerHTML = "";

  careers[type].forEach((career, idx) => {
    // Create Career Box
    const div = document.createElement("div");
    div.classList.add("career-box");
    div.setAttribute("data-career-index", String(idx));
    div.setAttribute("data-career-name", career.name);
    div.innerHTML = career.icon + career.name;

    // Click to open overlay
    div.onclick = () => openCareerOverlay(career);

    const hasChildren = career.children && career.children.length;
    if (hasChildren) {
      div.title = `Paths: ${career.children.join(', ')}`;
    }

    container.appendChild(div);
  });
}

function backToChoice() {
  document.getElementById("tree-section").classList.add("d-none");
  document.getElementById("choice-screen").classList.remove("d-none");
}

// Tree branches code (retained but not shown on hover)
function showBranches(idx, career) {
  removeBranches();
  const container = document.getElementById("tree-container");
  const thisBox = container.children[idx];

  career.children.forEach(childName => {
    const childIdx = careers.tech.findIndex(c => c.name === childName);
    if (childIdx !== -1) {
      const sx = thisBox.offsetLeft + thisBox.offsetWidth / 2;
      const sy = thisBox.offsetTop + thisBox.offsetHeight;
      const ex = container.children[childIdx].offsetLeft + container.children[childIdx].offsetWidth / 2;
      const ey = container.children[childIdx].offsetTop;

      const branch = document.createElement("div");
      branch.className = "tree-branch show-branch";
      branch.style.left = `${sx}px`;
      branch.style.top = `${sy}px`;
      branch.style.width = `${ex - sx}px`;
      branch.style.height = `5px`;
      branch.style.position = "absolute";
      branch.style.background = "linear-gradient(90deg,#74b9ff,#6362ec,#4bcffa)";
      branch.style.borderRadius = "4px";
      branch.style.zIndex = 1;
      container.appendChild(branch);
    }
  });
}

function removeBranches() {
  document.querySelectorAll('.tree-branch').forEach(el => el.remove());
}

// Overlay logic
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('career-overlay');
  const closeBtn = document.getElementById('overlay-close');
  if (closeBtn) closeBtn.addEventListener('click', closeCareerOverlay);
  if (overlay) {
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeCareerOverlay(); });
  }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCareerOverlay(); });
});

function openCareerOverlay(career) {
  const overlay = document.getElementById('career-overlay');
  const title = document.getElementById('overlay-title');
  const body = document.getElementById('overlay-body');
  const salaryContent = document.getElementById('overlay-salary-content');
  if (!overlay || !title || !body || !salaryContent) return;

  title.textContent = career.name;

  const selectId = 'overlay-skill-select';
  const skillsOptions = career.skills.map(s => `<option value="${s}">${s}</option>`).join('');
  body.innerHTML = `
    <label class='form-label' for='${selectId}'>Skills</label>
    <select id='${selectId}' class='form-select mb-3'>
      <option value='' selected disabled>Select a skill</option>
      ${skillsOptions}
    </select>
    ${career.children && career.children.length ? `<div class='small text-muted'>Paths: ${career.children.join(', ')}</div>` : ''}
  `;

  salaryContent.innerHTML = 'Select a skill to view salary.';
  overlay.classList.remove('d-none');
  document.body.style.overflow = 'hidden';

  const select = document.getElementById(selectId);
  if (select) {
    select.addEventListener('change', () => {
      updateOverlaySalary(career);
    });
  }
}

function closeCareerOverlay() {
  const overlay = document.getElementById('career-overlay');
  if (overlay) overlay.classList.add('d-none');
  document.body.style.overflow = '';
}

function updateOverlaySalary(career) {
  const salaryContent = document.getElementById('overlay-salary-content');
  if (!salaryContent) return;
  salaryContent.innerHTML = `
    <div>Entry: <b>${career.entry}</b></div>
    <div>Experienced: <b>${career.exp}</b></div>
  `;
}