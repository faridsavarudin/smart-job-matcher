// Sample job requirements data
export const jobRequirements = {
  title: "Senior Backend Engineer - Banking Division",
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
  requiredIndustry: ["Banking", "Financial Services", "Fintech"],
  requiredLevel: "Senior",
  mustHaveManagerial: true,
  location: "Jakarta"
};

// Sample candidates data
export const candidates = [
  {
    id: 1,
    name: "Ahmad Rizky",
    email: "ahmad.rizky@email.com",
    yearsOfExperience: 6,
    currentLevel: "Senior",
    hasManagerialExp: true,
    industry: ["Banking", "Fintech"],
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
    industry: ["E-commerce", "Startup"],
    skills: ["Python", "Flask", "MySQL", "REST API", "Git"],
    lastPosition: "Backend Developer at Tokopedia",
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
    industry: ["Banking", "Insurance"],
    skills: ["Python", "Django", "PostgreSQL", "REST API", "Docker", "AWS", "Kubernetes", "Microservices"],
    lastPosition: "Tech Lead at BCA",
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
    industry: ["Banking", "Financial Services"],
    skills: ["Python", "Django", "MongoDB", "REST API", "Docker"],
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
    currentLevel: "Senior",
    hasManagerialExp: true,
    industry: ["Fintech", "Technology"],
    skills: ["Python", "Django", "PostgreSQL", "REST API", "Redis", "RabbitMQ"],
    lastPosition: "Backend Lead at Gojek",
    education: "S1 Informatics - UGM",
    isSpam: false,
    cvQuality: "high"
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

  // Spam detection
  const isLowQuality = candidate.isSpam || candidate.cvQuality === 'low';
  if (isLowQuality) {
    score = Math.min(score, 30); // Cap spam/low quality at 30%
  }

  return {
    score: Math.round(score),
    reasons,
    gaps,
    isSpam: candidate.isSpam,
    cvQuality: candidate.cvQuality
  };
}
