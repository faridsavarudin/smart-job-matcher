// Sample job requirements data for multiple companies
export const companies = [
  {
    id: "pintar",
    name: "Pintar",
    logo: "📚",
    description: "EdTech Platform",
    jobs: [
      {
        id: "pintar-1",
        title: "Senior Backend Engineer - Learning Platform",
        company: "Pintar",
        minExperience: 5,
        maxExperience: 8,
        requiredSkills: [
          { name: "Python", weight: 0.3 },
          { name: "Django", weight: 0.2 },
          { name: "PostgreSQL", weight: 0.15 },
          { name: "REST API", weight: 0.15 },
          { name: "Docker", weight: 0.1 },
          { name: "AWS", weight: 0.1 }
        ],
        requiredIndustry: ["EdTech", "Education", "E-learning", "Technology"],
        requiredLevel: "Senior",
        mustHaveManagerial: true,
        location: "Jakarta"
      },
      {
        id: "pintar-2",
        title: "Full Stack Engineer - Student Portal",
        company: "Pintar",
        minExperience: 3,
        maxExperience: 6,
        requiredSkills: [
          { name: "JavaScript", weight: 0.25 },
          { name: "React", weight: 0.25 },
          { name: "Node.js", weight: 0.2 },
          { name: "MongoDB", weight: 0.15 },
          { name: "REST API", weight: 0.15 }
        ],
        requiredIndustry: ["EdTech", "Education", "Technology"],
        requiredLevel: "Mid-Level",
        mustHaveManagerial: false,
        location: "Jakarta"
      }
    ]
  },
  {
    id: "mitsubishi",
    name: "Mitsubishi",
    logo: "🏭",
    description: "Automotive & Manufacturing",
    jobs: [
      {
        id: "mitsubishi-1",
        title: "Senior Software Engineer - Manufacturing Systems",
        company: "Mitsubishi",
        minExperience: 6,
        maxExperience: 10,
        requiredSkills: [
          { name: "Java", weight: 0.3 },
          { name: "Spring Boot", weight: 0.2 },
          { name: "PostgreSQL", weight: 0.15 },
          { name: "Microservices", weight: 0.15 },
          { name: "Docker", weight: 0.1 },
          { name: "Kubernetes", weight: 0.1 }
        ],
        requiredIndustry: ["Manufacturing", "Automotive", "Industrial"],
        requiredLevel: "Senior",
        mustHaveManagerial: true,
        location: "Jakarta"
      },
      {
        id: "mitsubishi-2",
        title: "IoT Engineer - Connected Vehicles",
        company: "Mitsubishi",
        minExperience: 4,
        maxExperience: 7,
        requiredSkills: [
          { name: "Python", weight: 0.25 },
          { name: "IoT", weight: 0.25 },
          { name: "MQTT", weight: 0.2 },
          { name: "AWS", weight: 0.15 },
          { name: "Docker", weight: 0.15 }
        ],
        requiredIndustry: ["Automotive", "Manufacturing", "IoT"],
        requiredLevel: "Mid-Level",
        mustHaveManagerial: false,
        location: "Jakarta"
      }
    ]
  },
  {
    id: "abm-investama",
    name: "ABM Investama",
    logo: "🏦",
    description: "Investment & Financial Services",
    jobs: [
      {
        id: "abm-1",
        title: "Senior Backend Engineer - Trading Platform",
        company: "ABM Investama",
        minExperience: 5,
        maxExperience: 8,
        requiredSkills: [
          { name: "Python", weight: 0.3 },
          { name: "Django", weight: 0.2 },
          { name: "PostgreSQL", weight: 0.15 },
          { name: "REST API", weight: 0.15 },
          { name: "Docker", weight: 0.1 },
          { name: "AWS", weight: 0.1 }
        ],
        requiredIndustry: ["Banking", "Financial Services", "Investment", "Fintech"],
        requiredLevel: "Senior",
        mustHaveManagerial: true,
        location: "Jakarta"
      },
      {
        id: "abm-2",
        title: "Data Engineer - Analytics Platform",
        company: "ABM Investama",
        minExperience: 4,
        maxExperience: 7,
        requiredSkills: [
          { name: "Python", weight: 0.3 },
          { name: "Spark", weight: 0.25 },
          { name: "SQL", weight: 0.2 },
          { name: "Airflow", weight: 0.15 },
          { name: "AWS", weight: 0.1 }
        ],
        requiredIndustry: ["Banking", "Financial Services", "Investment"],
        requiredLevel: "Mid-Level",
        mustHaveManagerial: false,
        location: "Jakarta"
      }
    ]
  }
];

export const jobRequirements = companies[0].jobs[0]; // Default to Pintar first job

// Sample candidates data
export const candidates = [
  {
    id: 1,
    name: "Ahmad Rizky",
    email: "ahmad.rizky@email.com",
    yearsOfExperience: 6,
    currentLevel: "Senior",
    hasManagerialExp: true,
    industry: ["Banking", "Fintech", "EdTech"],
    skills: ["Python", "Django", "PostgreSQL", "REST API", "Docker", "AWS", "Redis"],
    lastPosition: "Senior Backend Engineer at Bank Mandiri",
    education: "S1 Computer Science - UI",
    isSpam: false,
    cvQuality: "high"
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    email: "siti.n@email.com",
    yearsOfExperience: 4,
    currentLevel: "Mid-Level",
    hasManagerialExp: false,
    industry: ["E-commerce", "Startup", "EdTech"],
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "REST API", "Git"],
    lastPosition: "Full Stack Developer at Tokopedia",
    education: "S1 Information Systems - Binus",
    isSpam: false,
    cvQuality: "medium"
  },
  {
    id: 3,
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    yearsOfExperience: 8,
    currentLevel: "Senior",
    hasManagerialExp: true,
    industry: ["Manufacturing", "Automotive", "Industrial"],
    skills: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "Docker", "Kubernetes", "AWS"],
    lastPosition: "Tech Lead at Toyota Manufacturing",
    education: "S2 Computer Science - ITB",
    isSpam: false,
    cvQuality: "high"
  },
  {
    id: 4,
    name: "John Doe",
    email: "john.doe123@gmail.com",
    yearsOfExperience: 1,
    currentLevel: "Junior",
    hasManagerialExp: false,
    industry: ["Freelance"],
    skills: ["HTML", "CSS", "JavaScript"],
    lastPosition: "Freelance Web Developer",
    education: "SMK Multimedia",
    isSpam: true,
    cvQuality: "low"
  },
  {
    id: 5,
    name: "Dewi Lestari",
    email: "dewi.lestari@email.com",
    yearsOfExperience: 7,
    currentLevel: "Senior",
    hasManagerialExp: false,
    industry: ["Banking", "Financial Services", "Investment"],
    skills: ["Python", "Django", "PostgreSQL", "REST API", "Docker", "AWS"],
    lastPosition: "Senior Software Engineer at Maybank",
    education: "S1 Computer Engineering - ITS",
    isSpam: false,
    cvQuality: "high"
  },
  {
    id: 6,
    name: "Spam User ABC",
    email: "spamuser@fake.com",
    yearsOfExperience: 0,
    currentLevel: "Entry",
    hasManagerialExp: false,
    industry: [],
    skills: ["Microsoft Office", "Email"],
    lastPosition: "Looking for any job",
    education: "High School",
    isSpam: true,
    cvQuality: "low"
  },
  {
    id: 7,
    name: "Rina Wijaya",
    email: "rina.wijaya@email.com",
    yearsOfExperience: 5,
    currentLevel: "Mid-Level",
    hasManagerialExp: false,
    industry: ["Fintech", "Technology", "E-learning"],
    skills: ["Python", "Django", "PostgreSQL", "REST API", "Redis", "RabbitMQ"],
    lastPosition: "Backend Engineer at Gojek",
    education: "S1 Informatics - UGM",
    isSpam: false,
    cvQuality: "high"
  },
  {
    id: 8,
    name: "Agus Wijaya",
    email: "agus.w@email.com",
    yearsOfExperience: 5,
    currentLevel: "Mid-Level",
    hasManagerialExp: false,
    industry: ["Automotive", "IoT"],
    skills: ["Python", "IoT", "MQTT", "AWS", "Docker", "Raspberry Pi"],
    lastPosition: "IoT Engineer at Grab",
    education: "S1 Electrical Engineering - ITB",
    isSpam: false,
    cvQuality: "high"
  },
  {
    id: 9,
    name: "Linda Kusuma",
    email: "linda.k@email.com",
    yearsOfExperience: 5,
    currentLevel: "Mid-Level",
    hasManagerialExp: false,
    industry: ["Banking", "Financial Services"],
    skills: ["Python", "Spark", "SQL", "Airflow", "AWS", "ETL"],
    lastPosition: "Data Engineer at OVO",
    education: "S1 Statistics - IPB",
    isSpam: false,
    cvQuality: "high"
  },
  {
    id: 10,
    name: "Michael Chen [FLAGGED]",
    email: "michael.superdev@yahoo.com",
    yearsOfExperience: 7,
    currentLevel: "Senior",
    hasManagerialExp: true,
    industry: ["EdTech", "Education", "Technology"],
    skills: ["Python", "Django", "PostgreSQL", "REST API", "Docker", "AWS", "Redis", "Kubernetes"],
    lastPosition: "Tech Lead at Ruangguru",
    education: "S2 Computer Science - Stanford (Online)",
    isSpam: true,
    cvQuality: "suspicious",
    spamReason: "Multiple applications with slightly different names"
  },
  {
    id: 11,
    name: "Sarah Johnson [FLAGGED]",
    email: "sarahjohnson999@gmail.com",
    yearsOfExperience: 6,
    currentLevel: "Senior",
    hasManagerialExp: true,
    industry: ["Manufacturing", "Automotive", "Industrial"],
    skills: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "Docker", "Kubernetes", "AWS", "Jenkins"],
    lastPosition: "Senior Software Engineer at Astra International",
    education: "S1 Computer Engineering - ITB",
    isSpam: true,
    cvQuality: "suspicious",
    spamReason: "Generic email pattern, bulk submission detected"
  },
  {
    id: 12,
    name: "Ricky Tan [FLAGGED]",
    email: "rickytandev@hotmail.com",
    yearsOfExperience: 5,
    currentLevel: "Senior",
    hasManagerialExp: true,
    industry: ["Banking", "Financial Services", "Investment", "Fintech"],
    skills: ["Python", "Django", "PostgreSQL", "REST API", "Docker", "AWS", "Redis", "Celery"],
    lastPosition: "Senior Backend Engineer at BCA Digital",
    education: "S1 Computer Science - Binus",
    isSpam: true,
    cvQuality: "suspicious",
    spamReason: "Same IP address as 15+ other applications"
  }
];

// Calculate match score
export function calculateMatchScore(candidate, jobReq) {
  let score = 0;
  let reasons = [];
  let gaps = [];

  // Experience matching (25%)
  const expDiff = candidate.yearsOfExperience - jobReq.minExperience;
  if (expDiff >= 0 && candidate.yearsOfExperience <= jobReq.maxExperience) {
    score += 25;
    reasons.push(`✓ Experience: ${candidate.yearsOfExperience} years (requirement: ${jobReq.minExperience}-${jobReq.maxExperience})`);
  } else if (expDiff < 0) {
    const partialScore = Math.max(0, 25 * (candidate.yearsOfExperience / jobReq.minExperience));
    score += partialScore;
    gaps.push(`✗ Experience Gap: Has ${candidate.yearsOfExperience} years, needs ${jobReq.minExperience} years (${Math.abs(expDiff)} years short)`);
  }

  // Skills matching (40%)
  const candidateSkills = candidate.skills.map(s => s.toLowerCase());
  let skillScore = 0;
  let matchedSkills = [];
  let missingSkills = [];
  
  jobReq.requiredSkills.forEach(reqSkill => {
    if (candidateSkills.includes(reqSkill.name.toLowerCase())) {
      skillScore += reqSkill.weight * 40;
      matchedSkills.push(reqSkill.name);
    } else {
      missingSkills.push(reqSkill.name);
    }
  });
  
  score += skillScore;
  if (matchedSkills.length > 0) {
    reasons.push(`✓ Skills Match: ${matchedSkills.join(', ')}`);
  }
  if (missingSkills.length > 0) {
    gaps.push(`✗ Missing Skills: ${missingSkills.join(', ')}`);
  }

  // Industry matching (20%)
  const hasIndustryMatch = candidate.industry.some(ind => 
    jobReq.requiredIndustry.some(req => req.toLowerCase() === ind.toLowerCase())
  );
  if (hasIndustryMatch) {
    score += 20;
    const matchedIndustries = candidate.industry.filter(ind => 
      jobReq.requiredIndustry.some(req => req.toLowerCase() === ind.toLowerCase())
    );
    reasons.push(`✓ Industry Experience: ${matchedIndustries.join(', ')}`);
  } else {
    gaps.push(`✗ No ${jobReq.requiredIndustry.join('/')} industry experience`);
  }

  // Seniority level (10%)
  if (candidate.currentLevel === jobReq.requiredLevel) {
    score += 10;
    reasons.push(`✓ Seniority Level: ${candidate.currentLevel}`);
  } else {
    gaps.push(`✗ Level: Currently ${candidate.currentLevel}, needs ${jobReq.requiredLevel}`);
  }

  // Managerial experience (5%)
  if (candidate.hasManagerialExp === jobReq.mustHaveManagerial) {
    score += 5;
    if (candidate.hasManagerialExp) {
      reasons.push(`✓ Has Managerial Experience`);
    }
  } else if (jobReq.mustHaveManagerial && !candidate.hasManagerialExp) {
    gaps.push(`✗ Missing Managerial Experience`);
  }

  // Spam detection - don't cap score to show excellent match potential
  // but keep the spam flag for filtering
  const isLowQuality = candidate.cvQuality === 'low';
  if (isLowQuality) {
    score = Math.min(score, 30); // Cap only truly low quality at 30%
  }

  return {
    score: Math.round(score),
    reasons,
    gaps,
    isSpam: candidate.isSpam,
    cvQuality: candidate.cvQuality
  };
}
