'use client';

import { useState } from 'react';
import { candidates, companies, calculateMatchScore } from '../lib/matchingEngine';

export default function Home() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [selectedJob, setSelectedJob] = useState(companies[0].jobs[0]);
  const [sortBy, setSortBy] = useState('score');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilter, setSearchFilter] = useState('all'); // all, skills, experience, industry

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setSelectedJob(company.jobs[0]); // Select first job of the company
    setSelectedCandidate(null); // Reset selected candidate
    setSearchQuery(''); // Reset search
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setSelectedCandidate(null); // Reset selected candidate
  };

  // Calculate scores for all candidates
  const candidatesWithScores = candidates.map(candidate => ({
    ...candidate,
    matchData: calculateMatchScore(candidate, selectedJob)
  }));

  // Filter candidates based on search
  const filteredCandidates = candidatesWithScores.filter(candidate => {
    if (!searchQuery.trim()) return true;
    
    const query = searchQuery.toLowerCase();
    
    if (searchFilter === 'all') {
      return (
        candidate.name.toLowerCase().includes(query) ||
        candidate.lastPosition.toLowerCase().includes(query) ||
        candidate.skills.some(skill => skill.toLowerCase().includes(query)) ||
        candidate.industry.some(ind => ind.toLowerCase().includes(query)) ||
        candidate.yearsOfExperience.toString().includes(query) ||
        candidate.currentLevel.toLowerCase().includes(query)
      );
    }
    
    if (searchFilter === 'skills') {
      return candidate.skills.some(skill => skill.toLowerCase().includes(query));
    }
    
    if (searchFilter === 'experience') {
      return (
        candidate.yearsOfExperience.toString().includes(query) ||
        candidate.currentLevel.toLowerCase().includes(query) ||
        candidate.lastPosition.toLowerCase().includes(query)
      );
    }
    
    if (searchFilter === 'industry') {
      return candidate.industry.some(ind => ind.toLowerCase().includes(query));
    }
    
    return true;
  });

  // Sort candidates
  const sortedCandidates = [...filteredCandidates].sort((a, b) => {
    if (sortBy === 'score') return b.matchData.score - a.matchData.score;
    if (sortBy === 'experience') return b.yearsOfExperience - a.yearsOfExperience;
    return 0;
  });

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getScoreBadge = (score) => {
    if (score >= 80) return 'Excellent Match';
    if (score >= 60) return 'Good Match';
    if (score >= 40) return 'Fair Match';
    return 'Low Match';
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-900">Smart Job Matcher</h1>
            <div className="text-sm text-gray-500">ASTRNT - The Relevance Engine</div>
          </div>
          <p className="text-gray-600">CV Parsing & Smart Match for High-Volume Hiring</p>
        </div>

        {/* Company Selector */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">🏢 Select Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {companies.map(company => (
              <button
                key={company.id}
                onClick={() => handleCompanyClick(company)}
                className={`text-left p-4 rounded-lg border-2 transition-all ${
                  selectedCompany.id === company.id
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{company.logo}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{company.name}</div>
                    <div className="text-xs text-gray-500">{company.description}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-600">
                  {company.jobs.length} open position{company.jobs.length > 1 ? 's' : ''}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        {selectedCompany && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              📋 Open Positions at {selectedCompany.name}
            </h2>
            <div className="space-y-2">
              {selectedCompany.jobs.map(job => (
                <button
                  key={job.id}
                  onClick={() => handleJobClick(job)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedJob.id === job.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div className="font-medium text-gray-900 mb-1">{job.title}</div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>📅 {job.minExperience}-{job.maxExperience} years</span>
                    <span>🏢 {job.requiredIndustry.slice(0, 2).join(', ')}</span>
                    <span>📍 {job.location}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search & Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search candidates by name, skills, experience, industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Search All</option>
              <option value="skills">Skills Only</option>
              <option value="experience">Experience Only</option>
              <option value="industry">Industry Only</option>
            </select>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="score">Sort by Match Score</option>
              <option value="experience">Sort by Experience</option>
            </select>
          </div>
          
          {searchQuery && (
            <div className="mt-2 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Found {sortedCandidates.length} candidate{sortedCandidates.length !== 1 ? 's' : ''} matching "{searchQuery}"
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Quick Search Tips */}
        {!searchQuery && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <div className="text-sm text-blue-900">
              💡 <strong>Quick Search Examples:</strong> Try "Python", "5 years", "Banking", "Senior", "Django"
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Candidates List */}
          <div className="space-y-3">
            {sortedCandidates.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <div className="text-gray-400 text-4xl mb-2">🔍</div>
                <p className="text-gray-500 text-lg mb-1">No candidates found</p>
                <p className="text-gray-400 text-sm">Try different search terms or clear the search</p>
              </div>
            ) : (
              sortedCandidates.map((candidate) => (
              <div
                key={candidate.id}
                onClick={() => setSelectedCandidate(candidate)}
                className={`bg-white rounded-lg shadow-sm border-2 p-4 cursor-pointer transition-all hover:shadow-md ${
                  selectedCandidate?.id === candidate.id ? 'border-blue-500' : 'border-gray-200'
                } ${candidate.matchData.isSpam ? 'opacity-60' : ''}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                      {candidate.matchData.isSpam && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded">
                          🚫 SPAM
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{candidate.lastPosition}</p>
                  </div>
                  <div className={`text-right ${getScoreColor(candidate.matchData.score)} px-3 py-1 rounded-md border font-semibold`}>
                    <div className="text-2xl">{candidate.matchData.score}%</div>
                    <div className="text-xs">{getScoreBadge(candidate.matchData.score)}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>📅 {candidate.yearsOfExperience} yrs exp</span>
                  <span>🏢 {candidate.industry.join(', ')}</span>
                  {candidate.hasManagerialExp && <span>👥 Manager</span>}
                </div>

                {/* Match Reason Summary */}
                {candidate.matchData.score > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="text-xs font-medium text-gray-700 mb-1">
                      💡 Match {candidate.matchData.score}% because:
                    </div>
                    <div className="space-y-1">
                      {candidate.matchData.reasons.slice(0, 2).map((reason, idx) => (
                        <div key={idx} className="text-xs text-green-600 flex items-start">
                          <span className="mr-1">•</span>
                          <span>{reason}</span>
                        </div>
                      ))}
                      {candidate.matchData.reasons.length > 2 && (
                        <div className="text-xs text-gray-500 italic">
                          +{candidate.matchData.reasons.length - 2} more reason{candidate.matchData.reasons.length - 2 > 1 ? 's' : ''}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {candidate.matchData.gaps.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <div className="text-xs text-red-600">
                      ⚠️ {candidate.matchData.gaps.length} gap(s) found
                    </div>
                  </div>
                )}
              </div>
              ))
            )}
          </div>

          {/* Detailed View */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            {selectedCandidate ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      {selectedCandidate.name}
                    </h2>
                    <p className="text-sm text-gray-600">{selectedCandidate.email}</p>
                  </div>
                  {selectedCandidate.matchData.isSpam && (
                    <span className="px-3 py-1 text-sm font-medium bg-red-100 text-red-700 rounded-md">
                      🚫 SPAM PROFILE
                    </span>
                  )}
                </div>

                {/* Match Score Section */}
                <div className={`rounded-lg p-4 mb-6 border-2 ${getScoreColor(selectedCandidate.matchData.score)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Match Quality Score</span>
                    <span className="text-3xl font-bold">{selectedCandidate.matchData.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        selectedCandidate.matchData.score >= 80 ? 'bg-green-600' :
                        selectedCandidate.matchData.score >= 60 ? 'bg-yellow-600' : 'bg-red-600'
                      }`}
                      style={{ width: `${selectedCandidate.matchData.score}%` }}
                    />
                  </div>
                </div>

                {/* AHA! Moment - Match Explanation */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">💡 Match Explanation</h3>
                  <div className="space-y-2">
                    {selectedCandidate.matchData.reasons.map((reason, idx) => (
                      <div key={idx} className="text-sm text-green-700 bg-green-50 px-3 py-2 rounded">
                        {reason}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gap Analysis */}
                {selectedCandidate.matchData.gaps.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">📊 Gap Analysis</h3>
                    <div className="space-y-2">
                      {selectedCandidate.matchData.gaps.map((gap, idx) => (
                        <div key={idx} className="text-sm text-red-700 bg-red-50 px-3 py-2 rounded">
                          {gap}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Side-by-Side Comparison */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">🔄 Side-by-Side Comparison</h3>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 rounded p-3">
                      <div className="font-medium text-blue-900 mb-2">Job Requirements</div>
                      <div className="space-y-1 text-blue-800">
                        <div>• {selectedJob.minExperience}-{selectedJob.maxExperience} years exp</div>
                        <div>• {selectedJob.requiredLevel} level</div>
                        <div>• {selectedJob.requiredIndustry.join('/')}</div>
                        <div>• Managerial: {selectedJob.mustHaveManagerial ? 'Required' : 'Optional'}</div>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded p-3">
                      <div className="font-medium text-purple-900 mb-2">Candidate Profile</div>
                      <div className="space-y-1 text-purple-800">
                        <div>• {selectedCandidate.yearsOfExperience} years exp</div>
                        <div>• {selectedCandidate.currentLevel} level</div>
                        <div>• {selectedCandidate.industry.join('/')}</div>
                        <div>• Managerial: {selectedCandidate.hasManagerialExp ? 'Yes' : 'No'}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="font-medium text-gray-900 mb-2">Skills Comparison</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Required</div>
                        <div className="flex flex-wrap gap-1">
                          {selectedJob.requiredSkills.map(skill => (
                            <span key={skill.name} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Candidate Has</div>
                        <div className="flex flex-wrap gap-1">
                          {selectedCandidate.skills.map(skill => {
                            const isRequired = selectedJob.requiredSkills.some(
                              req => req.name.toLowerCase() === skill.toLowerCase()
                            );
                            return (
                              <span 
                                key={skill} 
                                className={`px-2 py-1 text-xs rounded ${
                                  isRequired ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                }`}
                              >
                                {skill}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <div className="text-gray-400 text-lg mb-2">👈</div>
                <p className="text-gray-500">Select a candidate to view detailed match analysis</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
