// Gratia Skills Framework - Simplified Application

// ===== DATA =====

// Analyst Levels with Specialization Requirements
const levels = {
    A1: {
        name: 'Apprentice Business Analyst',
        aqs: '70-80',
        subtitle: 'Building foundations',
        specRequirements: { expert: 0, proficient: 0, familiar: 0 },
        specNote: 'Building first specialization'
    },
    A2: {
        name: 'Associate Business Analyst',
        aqs: '80-90',
        subtitle: 'Independent contributor',
        specRequirements: { expert: 0, proficient: 1, familiar: 1 },
        specNote: '1+ Proficient required'
    },
    A3: {
        name: 'Business Analyst',
        aqs: '90-95',
        subtitle: 'Strategic problem-solver',
        specRequirements: { expert: 1, proficient: 2, familiar: 0 },
        specNote: '1+ Expert, 2+ Proficient required'
    },
    A4: {
        name: 'Senior Business Analyst',
        aqs: '95+',
        subtitle: 'Expert & trusted advisor',
        specRequirements: { expert: 2, proficient: 3, familiar: 0 },
        specNote: '2+ Expert, 3+ Proficient required'
    }
};

// Psychometric Profiles (from Principles Us assessment)
// Used for team forming and client-analyst fit - additional signal, not a hard filter
const psychometricDimensions = {
    workStyle: {
        name: 'Work Style',
        description: 'How they approach tasks and solve problems',
        spectrum: ['Methodical', 'Adaptive'],
        explanation: 'Methodical: Structured, follows process, thorough. Adaptive: Flexible, improvises, iterates quickly.'
    },
    communication: {
        name: 'Communication',
        description: 'How they prefer to interact and share information',
        spectrum: ['Direct', 'Diplomatic'],
        explanation: 'Direct: Gets to the point, values efficiency. Diplomatic: Builds context, considers feelings.'
    },
    decisionMaking: {
        name: 'Decision Making',
        description: 'How they process information and make choices',
        spectrum: ['Analytical', 'Intuitive'],
        explanation: 'Analytical: Data-driven, systematic evaluation. Intuitive: Pattern recognition, gut checks.'
    },
    collaboration: {
        name: 'Collaboration',
        description: 'How they work with others',
        spectrum: ['Independent', 'Collaborative'],
        explanation: 'Independent: Heads-down focus, async communication. Collaborative: Frequent check-ins, real-time discussion.'
    },
    riskTolerance: {
        name: 'Risk Tolerance',
        description: 'How they handle uncertainty and ambiguity',
        spectrum: ['Conservative', 'Bold'],
        explanation: 'Conservative: Validates assumptions, minimizes risk. Bold: Comfortable with uncertainty, moves fast.'
    },
    feedback: {
        name: 'Feedback Style',
        description: 'How they give and receive feedback',
        spectrum: ['Candid', 'Supportive'],
        explanation: 'Candid: Direct critique, focuses on improvement. Supportive: Encouraging, balances positive/negative.'
    }
};

// Pre-defined psychometric profiles for common client/project types
const clientProfileTemplates = {
    startup: {
        name: 'Startup / Fast-paced',
        preferences: {
            workStyle: 0.7,        // Lean adaptive
            communication: 0.4,    // Slightly direct
            decisionMaking: 0.6,   // Balanced, slight intuitive
            collaboration: 0.7,    // More collaborative
            riskTolerance: 0.8,    // Bold
            feedback: 0.4          // Candid
        }
    },
    enterprise: {
        name: 'Enterprise / Process-driven',
        preferences: {
            workStyle: 0.3,        // Methodical
            communication: 0.6,    // Diplomatic
            decisionMaking: 0.3,   // Analytical
            collaboration: 0.5,    // Balanced
            riskTolerance: 0.2,    // Conservative
            feedback: 0.6          // Supportive
        }
    },
    consulting: {
        name: 'Consulting firm',
        preferences: {
            workStyle: 0.4,        // Structured but flexible
            communication: 0.3,    // Direct
            decisionMaking: 0.3,   // Very analytical
            collaboration: 0.6,    // Collaborative
            riskTolerance: 0.4,    // Moderate
            feedback: 0.3          // Candid
        }
    },
    creative: {
        name: 'Creative / Agency',
        preferences: {
            workStyle: 0.8,        // Adaptive
            communication: 0.5,    // Balanced
            decisionMaking: 0.7,   // Intuitive
            collaboration: 0.8,    // Very collaborative
            riskTolerance: 0.7,    // Bold
            feedback: 0.5          // Balanced
        }
    }
};

// Underlying Skills (granular abilities that map to specializations)
const underlyingSkills = {
    quantitative: {
        id: 'quantitative',
        name: 'Quantitative Reasoning',
        icon: '🔢',
        description: 'Numbers, calculations, formulas, financial math'
    },
    dataAnalysis: {
        id: 'dataAnalysis',
        name: 'Data Analysis',
        icon: '📊',
        description: 'Interpreting data, finding patterns, statistical thinking'
    },
    storytelling: {
        id: 'storytelling',
        name: 'Storytelling & Narrative',
        icon: '📖',
        description: 'Crafting compelling narratives, logical flow, persuasion'
    },
    visualDesign: {
        id: 'visualDesign',
        name: 'Visual Design',
        icon: '🎨',
        description: 'Layouts, charts, aesthetics, visual hierarchy'
    },
    research: {
        id: 'research',
        name: 'Research & Synthesis',
        icon: '🔍',
        description: 'Finding information, evaluating sources, synthesizing insights'
    },
    technicalWriting: {
        id: 'technicalWriting',
        name: 'Technical Writing',
        icon: '✍️',
        description: 'Clear documentation, structured communication, precision'
    },
    strategicThinking: {
        id: 'strategicThinking',
        name: 'Strategic Thinking',
        icon: '🧭',
        description: 'Big picture, frameworks, connecting dots, business logic'
    },
    processDesign: {
        id: 'processDesign',
        name: 'Process & Systems',
        icon: '⚙️',
        description: 'Workflows, automation, efficiency, systematic thinking'
    },
    clientManagement: {
        id: 'clientManagement',
        name: 'Client Management',
        icon: '🤝',
        description: 'Relationship building, expectation setting, communication'
    },
    projectCoordination: {
        id: 'projectCoordination',
        name: 'Project Coordination',
        icon: '📋',
        description: 'Timelines, resources, tracking, stakeholder alignment'
    }
};

// Core Competencies (what A1-A4 levels are assessed on)
const competencies = [
    {
        id: 'decision',
        name: 'Decision Excellence',
        icon: '🎯',
        description: 'Analyze complex challenges, structure problems, and develop actionable solutions.',
        A1: 'Executes defined analyses with guidance',
        A2: 'Structures problems independently, delivers clear insights',
        A3: 'Diagnoses problems, designs approaches, anticipates needs',
        A4: 'Defines frameworks for novel problems, go-to for complex challenges'
    },
    {
        id: 'business',
        name: 'Business Acumen',
        icon: '💼',
        description: 'Understand business fundamentals, industry dynamics, and commercial implications.',
        A1: 'Basic understanding of business concepts',
        A2: 'Solid grasp of business models, connects analysis to outcomes',
        A3: 'Deep strategic thinking, advises on business logic',
        A4: 'Industry expert, consults at CEO/board level'
    },
    {
        id: 'execution',
        name: 'Execution Mastery',
        icon: '⚡',
        description: 'Deliver high-quality work through structured planning and execution control.',
        A1: 'Completes tasks with supervision, work needs review',
        A2: 'Delivers quality work on time, consistently passes AI review',
        A3: 'Reference-quality work, anticipates edge cases, rarely needs revision',
        A4: 'Every deliverable is exemplar, creates standards for others'
    },
    {
        id: 'stakeholder',
        name: 'Stakeholder Impact',
        icon: '🤝',
        description: 'Present insights effectively, influence decisions, and build strong relationships.',
        A1: 'Professional but needs coaching on tone',
        A2: 'Clear communicator, handles calls independently',
        A3: 'Leads client relationships, VP/C-suite presence',
        A4: 'Executive presence, board-level relationships'
    },
    {
        id: 'flexibility',
        name: 'Flexibility & Agility',
        icon: '🔄',
        description: 'Pivot strategies, absorb feedback, and remain effective amid change.',
        A1: 'Adapts with guidance, steep learning curve on new tools',
        A2: 'Adapts smoothly to changes, learns new tools quickly',
        A3: 'Thrives in ambiguity, self-corrects, takes initiative',
        A4: 'Operates in any domain, creates solutions where none exist'
    }
];

// Specializations with complexity tiers
const specializations = {
    financial: {
        name: 'Financial Models & Consulting',
        icon: '📊',
        description: 'Build integrated financial models, valuations, and forecasting dashboards.',
        // Skills mapping: primary (essential) and secondary (helpful)
        skillsRequired: {
            primary: ['quantitative', 'dataAnalysis'],
            secondary: ['strategicThinking', 'technicalWriting']
        },
        methods: [
            'Business Planning & Financial Modeling',
            'Scenario & Forecasting Dashboards',
            'Company & Asset Valuation',
            'Advanced Financial Analysis'
        ],
        skills: [
            '3-Statement models (P&L, Balance Sheet, Cash Flow)',
            'DCF analysis (FCFF and FCFE)',
            'WACC calculation & cost of capital',
            'Comparable company analysis',
            'LBO and M&A modeling',
            'Monte Carlo simulation',
            'Sensitivity tables & data tables'
        ],
        deliverables: {
            basic: ['Budget templates', 'Simple forecasts', 'Revenue projections', 'Cost analysis'],
            intermediate: ['3-statement models', 'Scenario analysis', 'Cash flow modeling', 'Variance analysis'],
            advanced: ['DCF valuations', 'LBO models', 'M&A analysis', 'Monte Carlo simulations']
        }
    },
    pitch: {
        name: 'Pitch & Consulting Decks',
        icon: '📑',
        description: 'Create compelling investor presentations and strategic narratives.',
        skillsRequired: {
            primary: ['storytelling', 'visualDesign'],
            secondary: ['strategicThinking', 'clientManagement']
        },
        methods: [
            'Investor & Fundraising Pitch Decks',
            'Board Meeting Presentations',
            'Executive Strategy Decks',
            'Visual Communication Design'
        ],
        skills: [
            'Investment thesis development',
            'Financial projections presentation',
            'Strategic framework application',
            'Storyline development & narrative arc',
            'Slide layout & visual hierarchy',
            'Chart selection & data visualization'
        ],
        deliverables: {
            basic: ['Company overviews', 'Product decks', 'Team presentations', 'Progress updates'],
            intermediate: ['Investor pitch decks', 'Board updates', 'Competitive positioning', 'Market narratives'],
            advanced: ['Series B+ fundraising', 'M&A presentations', 'IPO roadshows', 'Strategic repositioning']
        }
    },
    research: {
        name: 'Market Research',
        icon: '🔍',
        description: 'Conduct systematic market analysis and competitive intelligence.',
        skillsRequired: {
            primary: ['research', 'dataAnalysis'],
            secondary: ['technicalWriting', 'strategicThinking']
        },
        deliverables: {
            basic: ['Competitor profiles', 'Industry overviews', 'Basic market sizing', 'News synthesis'],
            intermediate: ['TAM/SAM/SOM analysis', 'Customer segmentation', 'Pricing research', 'Survey design'],
            advanced: ['Market entry strategy', 'Competitive intelligence', 'M&A due diligence', 'Industry white papers']
        }
    },
    dashboards: {
        name: 'Dashboards',
        icon: '📈',
        description: 'Build data visualizations and business intelligence reporting.',
        skillsRequired: {
            primary: ['dataAnalysis', 'visualDesign'],
            secondary: ['quantitative', 'processDesign']
        },
        deliverables: {
            basic: ['Excel dashboards', 'Basic charts', 'Status reports', 'KPI tracking'],
            intermediate: ['Tableau/Power BI dashboards', 'Automated reporting', 'Data blending', 'Drill-down analysis'],
            advanced: ['Predictive analytics', 'Real-time dashboards', 'Data warehouse design', 'ML-powered insights']
        }
    },
    process: {
        name: 'Process Optimization',
        icon: '⚙️',
        description: 'Improve workflows, implement automation, and drive efficiency.',
        skillsRequired: {
            primary: ['processDesign', 'technicalWriting'],
            secondary: ['dataAnalysis', 'projectCoordination']
        },
        deliverables: {
            basic: ['Process documentation', 'Workflow diagrams', 'SOP creation', 'Checklist design'],
            intermediate: ['Process mapping', 'Bottleneck analysis', 'Zapier/Make automation', 'Efficiency metrics'],
            advanced: ['Digital transformation', 'Six Sigma projects', 'Enterprise automation', 'Change management']
        }
    },
    pm: {
        name: 'Project Management',
        icon: '📋',
        description: 'Plan, execute, and deliver complex business initiatives.',
        skillsRequired: {
            primary: ['projectCoordination', 'clientManagement'],
            secondary: ['processDesign', 'technicalWriting']
        },
        deliverables: {
            basic: ['Task lists', 'Meeting coordination', 'Status updates', 'Timeline tracking'],
            intermediate: ['Project plans', 'Risk registers', 'Resource allocation', 'Stakeholder management'],
            advanced: ['Program management', 'PMO setup', 'Portfolio optimization', 'Transformation programs']
        }
    },
    proposals: {
        name: 'Proposals',
        icon: '📝',
        description: 'Develop compelling proposals, business cases, and RFP responses.',
        skillsRequired: {
            primary: ['technicalWriting', 'storytelling'],
            secondary: ['quantitative', 'research']
        },
        deliverables: {
            basic: ['Proposal templates', 'Cost estimates', 'Scope documents', 'Vendor comparisons'],
            intermediate: ['RFP responses', 'Business cases', 'ROI analysis', 'Investment memos'],
            advanced: ['Enterprise RFPs', 'Strategic business cases', 'Board-level recommendations', 'M&A proposals']
        }
    },
    revops: {
        name: 'RevOps & GTM',
        icon: '🚀',
        description: 'Optimize sales processes, CRM systems, and go-to-market strategies.',
        skillsRequired: {
            primary: ['processDesign', 'dataAnalysis'],
            secondary: ['strategicThinking', 'clientManagement']
        },
        deliverables: {
            basic: ['CRM data cleanup', 'Pipeline reports', 'Lead lists', 'Sales collateral'],
            intermediate: ['Sales process design', 'CRM configuration', 'Pipeline optimization', 'Territory planning'],
            advanced: ['GTM strategy', 'Revenue modeling', 'Sales transformation', 'Channel strategy']
        }
    },
    strategy: {
        name: 'Business Strategy',
        icon: '🎯',
        description: 'Develop corporate strategy and organizational transformation plans.',
        skillsRequired: {
            primary: ['strategicThinking', 'research'],
            secondary: ['storytelling', 'clientManagement']
        },
        deliverables: {
            basic: ['SWOT analysis', 'Competitive overviews', 'Strategic summaries', 'Research synthesis'],
            intermediate: ['Strategic frameworks', 'Business model analysis', 'Growth planning', 'Risk assessment'],
            advanced: ['Corporate strategy', 'M&A strategy', 'Board advisory', 'Turnaround planning']
        }
    }
};

// Specialization Score calculation
// SS = Hours (40%) + Quality (40%) + Complexity (20%)
function calculateSpecScore(hours, avgReviewScore, avgRating, complexityMix) {
    // Hours component (40%) - normalized to 100 at 500 hours
    const hoursScore = Math.min(100, (hours / 500) * 100);

    // Quality component (40%) - AI review scores + client rating
    // avgReviewScore is stored as percentage (0-100) representing pass rate
    const qualityScore = (avgReviewScore * 0.6) + ((avgRating / 5) * 100 * 0.4);

    // Complexity component (20%) - weighted by deliverable tier
    // complexityMix: { basic: %, intermediate: %, advanced: % }
    const complexityScore = (complexityMix.basic * 0.3) + (complexityMix.intermediate * 0.6) + (complexityMix.advanced * 1.0);

    return Math.round((hoursScore * 0.4) + (qualityScore * 0.4) + (complexityScore * 100 * 0.2));
}

// Get specialization tier based on SS
function getSpecTier(specScore) {
    if (specScore >= 85) return { tier: 'expert', label: 'Expert', color: 'tier-3' };
    if (specScore >= 70) return { tier: 'proficient', label: 'Proficient', color: 'tier-2' };
    if (specScore >= 50) return { tier: 'familiar', label: 'Familiar', color: 'tier-1' };
    return { tier: 'learning', label: 'Learning', color: 'tier-0' };
}

// ===== QUALITY ASSESSMENT SYSTEM =====
// Specialization-specific assessment dimensions (Option A + C)

const assessmentDimensions = {
    // Universal dimensions (apply to all)
    universal: [
        { id: 'completeness', name: 'Completeness', description: 'All brief requirements addressed' },
        { id: 'accuracy', name: 'Accuracy', description: 'Data, facts, and calculations verified' },
        { id: 'presentation', name: 'Presentation', description: 'Professional, clear, audience-appropriate' },
        { id: 'timeliness', name: 'Timeliness', description: 'Delivered on schedule with proper communication' }
    ],

    // Specialization-specific dimensions
    financial: [
        { id: 'formula_integrity', name: 'Formula Integrity', description: 'Formulas are correct, auditable, no circular refs' },
        { id: 'model_structure', name: 'Model Structure', description: 'Logical layout, clear assumptions, easy to navigate' },
        { id: 'scenario_coverage', name: 'Scenario Coverage', description: 'Appropriate sensitivity analysis and cases' },
        { id: 'assumption_documentation', name: 'Assumption Documentation', description: 'All assumptions clearly stated and sourced' }
    ],

    pitch: [
        { id: 'narrative_flow', name: 'Narrative Flow', description: 'Logical story arc, compelling progression' },
        { id: 'visual_design', name: 'Visual Design', description: 'Professional aesthetics, consistent branding' },
        { id: 'message_clarity', name: 'Key Message Clarity', description: 'Core points are unmistakable and memorable' },
        { id: 'data_visualization', name: 'Data Visualization', description: 'Charts support the narrative, easy to understand' }
    ],

    research: [
        { id: 'source_quality', name: 'Source Quality', description: 'Credible, recent, properly cited sources' },
        { id: 'methodology_rigor', name: 'Methodology Rigor', description: 'Appropriate research methods for the question' },
        { id: 'sample_validity', name: 'Sample Validity', description: 'Representative data, adequate sample size' },
        { id: 'insight_depth', name: 'Insight Depth', description: 'Beyond obvious conclusions, actionable findings' }
    ],

    dashboards: [
        { id: 'data_integrity', name: 'Data Integrity', description: 'Accurate data connections, proper refresh logic' },
        { id: 'visualization_clarity', name: 'Visualization Clarity', description: 'Right chart types, clear labels, no clutter' },
        { id: 'interactivity', name: 'Interactivity', description: 'Useful filters, drill-downs work correctly' },
        { id: 'performance', name: 'Performance', description: 'Loads quickly, handles data volume well' }
    ],

    process: [
        { id: 'current_state_accuracy', name: 'Current State Accuracy', description: 'Existing process correctly documented' },
        { id: 'gap_identification', name: 'Gap Identification', description: 'Bottlenecks and inefficiencies clearly identified' },
        { id: 'solution_feasibility', name: 'Solution Feasibility', description: 'Recommendations are practical and implementable' },
        { id: 'change_impact', name: 'Change Impact Assessment', description: 'Risks and dependencies properly considered' }
    ],

    pm: [
        { id: 'scope_definition', name: 'Scope Definition', description: 'Clear boundaries, deliverables well-defined' },
        { id: 'timeline_realism', name: 'Timeline Realism', description: 'Achievable milestones, dependencies mapped' },
        { id: 'risk_identification', name: 'Risk Identification', description: 'Potential issues anticipated with mitigations' },
        { id: 'stakeholder_alignment', name: 'Stakeholder Alignment', description: 'Right people informed, RACI clear' }
    ],

    proposals: [
        { id: 'problem_framing', name: 'Problem Framing', description: 'Issue clearly articulated, stakes established' },
        { id: 'solution_logic', name: 'Solution Logic', description: 'Recommendation follows from analysis' },
        { id: 'roi_substantiation', name: 'ROI Substantiation', description: 'Benefits quantified with credible assumptions' },
        { id: 'objection_handling', name: 'Objection Handling', description: 'Potential concerns preemptively addressed' }
    ],

    revops: [
        { id: 'process_alignment', name: 'Process Alignment', description: 'Sales stages match buyer journey' },
        { id: 'data_quality', name: 'Data Quality', description: 'CRM data is clean, consistent, complete' },
        { id: 'automation_logic', name: 'Automation Logic', description: 'Workflows trigger correctly, no gaps' },
        { id: 'metric_validity', name: 'Metric Validity', description: 'KPIs measure what matters, no vanity metrics' }
    ],

    strategy: [
        { id: 'framework_application', name: 'Framework Application', description: 'Strategic tools used appropriately' },
        { id: 'evidence_base', name: 'Evidence Base', description: 'Conclusions supported by data and analysis' },
        { id: 'strategic_coherence', name: 'Strategic Coherence', description: 'Recommendations align and reinforce each other' },
        { id: 'implementation_path', name: 'Implementation Path', description: 'Clear next steps, not just theory' }
    ]
};

// Get all dimensions for a specialization (universal + specific)
function getAssessmentDimensions(specKey) {
    return [
        ...assessmentDimensions.universal,
        ...(assessmentDimensions[specKey] || [])
    ];
}

// Sample deliverable assessment (what AI would produce)
function assessDeliverable(specKey, scores) {
    const dimensions = getAssessmentDimensions(specKey);
    const results = dimensions.map(dim => ({
        ...dim,
        score: scores[dim.id] || 0,
        passed: (scores[dim.id] || 0) >= 3
    }));

    const avgScore = results.reduce((sum, r) => sum + r.score, 0) / results.length;
    const failedDimensions = results.filter(r => !r.passed);

    return {
        dimensions: results,
        averageScore: avgScore,
        passed: avgScore >= 3 && failedDimensions.length <= 1,
        failedDimensions,
        recommendation: avgScore >= 4.5 ? 'exceeded' :
                       avgScore >= 3.5 ? 'passed' :
                       avgScore >= 2.5 ? 'revise' : 'restart'
    };
}

// ===== ANALYST FEEDBACK TRACKING =====
// Track dimension scores over time for upskilling insights

function analyzeWeaknesses(analyst, recentDeliverables = 10) {
    // This would aggregate scores from recent deliverables
    // and identify patterns of weakness
    const weaknesses = {};

    // Simulated analysis - in production this would query actual data
    // Returns dimensions where avg score < 3.5 across recent work
    return {
        patterns: [
            // Example output structure:
            // { dimension: 'sample_validity', avgScore: 2.8, occurrences: 4, trend: 'declining' },
            // { dimension: 'assumption_documentation', avgScore: 3.1, occurrences: 3, trend: 'stable' }
        ],
        recommendations: [
            // { skill: 'Research Methodology', priority: 'high', resources: [...] }
        ]
    };
}

// Check if analyst meets specialization requirements for a level
function meetsSpecRequirements(analyst, targetLevel) {
    const requirements = levels[targetLevel].specRequirements;
    const specCounts = { expert: 0, proficient: 0, familiar: 0 };

    Object.keys(analyst.specializations).forEach(specKey => {
        const score = getAnalystSpecScore(analyst, specKey);
        const tier = getSpecTier(score);
        if (tier.tier === 'expert') specCounts.expert++;
        else if (tier.tier === 'proficient') specCounts.proficient++;
        else if (tier.tier === 'familiar') specCounts.familiar++;
    });

    return {
        meets: specCounts.expert >= requirements.expert &&
               (specCounts.expert + specCounts.proficient) >= (requirements.expert + requirements.proficient),
        current: specCounts,
        required: requirements,
        gaps: {
            expert: Math.max(0, requirements.expert - specCounts.expert),
            proficient: Math.max(0, requirements.proficient - specCounts.proficient)
        }
    };
}

// Sample analysts with richer specialization data
// Each specialization includes: hours, gatePassRate, avgRating, complexityMix
const analysts = [
    {
        id: 1,
        name: 'Sarah Mitchell',
        initials: 'SM',
        level: 'A3',
        aqs: 92,
        availability: 'available',
        timezone: 'EST (UTC-5)',
        strengths: ['DCF & valuation expert', 'Fast turnaround', 'Strong client communication'],
        considerations: ['Prefers longer engagements', 'Limited availability in Q4'],
        recentWork: 'Series B financial model for fintech startup',
        // Psychometric profile (0 = left of spectrum, 1 = right)
        psychometrics: {
            workStyle: 0.35,       // Methodical-leaning
            communication: 0.4,    // Slightly direct
            decisionMaking: 0.25,  // Analytical
            collaboration: 0.6,    // Balanced, slight collaborative
            riskTolerance: 0.5,    // Balanced
            feedback: 0.35         // Candid-leaning
        },
        specializations: {
            financial: { hours: 620, gatePass: 94, rating: 4.7, complexity: { basic: 0.1, intermediate: 0.4, advanced: 0.5 } },
            pitch: { hours: 310, gatePass: 91, rating: 4.5, complexity: { basic: 0.2, intermediate: 0.5, advanced: 0.3 } },
            research: { hours: 240, gatePass: 88, rating: 4.4, complexity: { basic: 0.3, intermediate: 0.5, advanced: 0.2 } },
            dashboards: { hours: 85, gatePass: 85, rating: 4.2, complexity: { basic: 0.4, intermediate: 0.5, advanced: 0.1 } },
            process: { hours: 60, gatePass: 82, rating: 4.0, complexity: { basic: 0.5, intermediate: 0.4, advanced: 0.1 } },
            pm: { hours: 15, gatePass: 80, rating: 4.0, complexity: { basic: 0.8, intermediate: 0.2, advanced: 0 } },
            proposals: { hours: 95, gatePass: 88, rating: 4.3, complexity: { basic: 0.3, intermediate: 0.5, advanced: 0.2 } },
            revops: { hours: 10, gatePass: 75, rating: 3.8, complexity: { basic: 0.9, intermediate: 0.1, advanced: 0 } },
            strategy: { hours: 90, gatePass: 86, rating: 4.2, complexity: { basic: 0.4, intermediate: 0.4, advanced: 0.2 } }
        }
    },
    {
        id: 2,
        name: 'James Kim',
        initials: 'JK',
        level: 'A2',
        aqs: 84,
        availability: 'available',
        timezone: 'PST (UTC-8)',
        strengths: ['Dashboard wizard', 'SQL & data modeling', 'Detail-oriented'],
        considerations: ['Needs clear briefs', 'Less experience with investor-facing work'],
        recentWork: 'KPI dashboard for e-commerce platform',
        psychometrics: {
            workStyle: 0.2,        // Very methodical
            communication: 0.5,    // Balanced
            decisionMaking: 0.2,   // Very analytical
            collaboration: 0.3,    // Independent-leaning
            riskTolerance: 0.25,   // Conservative
            feedback: 0.5          // Balanced
        },
        specializations: {
            financial: { hours: 280, gatePass: 82, rating: 4.1, complexity: { basic: 0.3, intermediate: 0.5, advanced: 0.2 } },
            pitch: { hours: 95, gatePass: 78, rating: 3.9, complexity: { basic: 0.5, intermediate: 0.4, advanced: 0.1 } },
            research: { hours: 120, gatePass: 80, rating: 4.0, complexity: { basic: 0.4, intermediate: 0.5, advanced: 0.1 } },
            dashboards: { hours: 210, gatePass: 85, rating: 4.3, complexity: { basic: 0.2, intermediate: 0.6, advanced: 0.2 } },
            process: { hours: 25, gatePass: 75, rating: 3.8, complexity: { basic: 0.7, intermediate: 0.3, advanced: 0 } },
            pm: { hours: 65, gatePass: 78, rating: 3.9, complexity: { basic: 0.5, intermediate: 0.4, advanced: 0.1 } },
            proposals: { hours: 40, gatePass: 76, rating: 3.8, complexity: { basic: 0.6, intermediate: 0.4, advanced: 0 } },
            revops: { hours: 55, gatePass: 80, rating: 4.0, complexity: { basic: 0.5, intermediate: 0.4, advanced: 0.1 } },
            strategy: { hours: 30, gatePass: 74, rating: 3.7, complexity: { basic: 0.7, intermediate: 0.3, advanced: 0 } }
        }
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        initials: 'ER',
        level: 'A3',
        aqs: 91,
        availability: 'limited',
        timezone: 'CET (UTC+1)',
        strengths: ['Exceptional storytelling', 'Board-level presentations', 'Strategic thinker'],
        considerations: ['Currently on retainer (15hrs/wk available)', 'Premium rate'],
        recentWork: 'GTM strategy for enterprise SaaS expansion',
        psychometrics: {
            workStyle: 0.7,        // Adaptive
            communication: 0.65,   // Diplomatic-leaning
            decisionMaking: 0.6,   // Balanced, slight intuitive
            collaboration: 0.75,   // Collaborative
            riskTolerance: 0.6,    // Moderate-bold
            feedback: 0.7          // Supportive-leaning
        },
        specializations: {
            financial: { hours: 85, gatePass: 84, rating: 4.2, complexity: { basic: 0.4, intermediate: 0.5, advanced: 0.1 } },
            pitch: { hours: 520, gatePass: 93, rating: 4.6, complexity: { basic: 0.1, intermediate: 0.4, advanced: 0.5 } },
            research: { hours: 480, gatePass: 91, rating: 4.5, complexity: { basic: 0.2, intermediate: 0.4, advanced: 0.4 } },
            dashboards: { hours: 75, gatePass: 82, rating: 4.1, complexity: { basic: 0.5, intermediate: 0.4, advanced: 0.1 } },
            process: { hours: 195, gatePass: 87, rating: 4.3, complexity: { basic: 0.3, intermediate: 0.5, advanced: 0.2 } },
            pm: { hours: 220, gatePass: 89, rating: 4.4, complexity: { basic: 0.2, intermediate: 0.5, advanced: 0.3 } },
            proposals: { hours: 180, gatePass: 88, rating: 4.3, complexity: { basic: 0.3, intermediate: 0.5, advanced: 0.2 } },
            revops: { hours: 450, gatePass: 90, rating: 4.5, complexity: { basic: 0.2, intermediate: 0.4, advanced: 0.4 } },
            strategy: { hours: 260, gatePass: 89, rating: 4.4, complexity: { basic: 0.3, intermediate: 0.4, advanced: 0.3 } }
        }
    },
    {
        id: 4,
        name: 'Michael Chen',
        initials: 'MC',
        level: 'A1',
        aqs: 75,
        availability: 'available',
        timezone: 'EST (UTC-5)',
        strengths: ['Eager learner', 'Strong Excel fundamentals', 'Responsive'],
        considerations: ['Requires supervision', 'Best for well-defined tasks', 'Still building portfolio'],
        recentWork: 'Budget template for seed-stage startup',
        psychometrics: {
            workStyle: 0.4,        // Slightly methodical
            communication: 0.5,    // Balanced
            decisionMaking: 0.4,   // Slightly analytical
            collaboration: 0.65,   // Collaborative-leaning
            riskTolerance: 0.35,   // Conservative-leaning
            feedback: 0.6          // Balanced, open to input
        },
        specializations: {
            financial: { hours: 35, gatePass: 68, rating: 3.5, complexity: { basic: 0.8, intermediate: 0.2, advanced: 0 } },
            pitch: { hours: 20, gatePass: 65, rating: 3.4, complexity: { basic: 0.9, intermediate: 0.1, advanced: 0 } },
            research: { hours: 55, gatePass: 72, rating: 3.7, complexity: { basic: 0.7, intermediate: 0.3, advanced: 0 } },
            dashboards: { hours: 80, gatePass: 75, rating: 3.8, complexity: { basic: 0.6, intermediate: 0.4, advanced: 0 } },
            process: { hours: 15, gatePass: 65, rating: 3.4, complexity: { basic: 0.9, intermediate: 0.1, advanced: 0 } },
            pm: { hours: 10, gatePass: 62, rating: 3.3, complexity: { basic: 1.0, intermediate: 0, advanced: 0 } },
            proposals: { hours: 5, gatePass: 60, rating: 3.2, complexity: { basic: 1.0, intermediate: 0, advanced: 0 } },
            revops: { hours: 8, gatePass: 64, rating: 3.4, complexity: { basic: 1.0, intermediate: 0, advanced: 0 } },
            strategy: { hours: 12, gatePass: 66, rating: 3.5, complexity: { basic: 0.9, intermediate: 0.1, advanced: 0 } }
        }
    },
    {
        id: 5,
        name: 'Aisha Thompson',
        initials: 'AT',
        level: 'A4',
        aqs: 96,
        availability: 'available',
        timezone: 'GMT (UTC+0)',
        strengths: ['Top-tier across all specializations', 'C-suite experience', 'Can mentor junior analysts'],
        considerations: ['Premium rate tier', 'High demand - book early', 'Best for strategic engagements'],
        recentWork: 'M&A due diligence for PE acquisition',
        psychometrics: {
            workStyle: 0.5,        // Balanced - can adapt to client
            communication: 0.45,   // Balanced, slightly direct
            decisionMaking: 0.4,   // Analytical-leaning
            collaboration: 0.55,   // Balanced
            riskTolerance: 0.55,   // Balanced
            feedback: 0.4          // Candid-leaning
        },
        specializations: {
            financial: { hours: 850, gatePass: 97, rating: 4.9, complexity: { basic: 0.05, intermediate: 0.25, advanced: 0.7 } },
            pitch: { hours: 720, gatePass: 96, rating: 4.8, complexity: { basic: 0.1, intermediate: 0.3, advanced: 0.6 } },
            research: { hours: 680, gatePass: 95, rating: 4.8, complexity: { basic: 0.1, intermediate: 0.3, advanced: 0.6 } },
            dashboards: { hours: 280, gatePass: 92, rating: 4.6, complexity: { basic: 0.2, intermediate: 0.4, advanced: 0.4 } },
            process: { hours: 510, gatePass: 94, rating: 4.7, complexity: { basic: 0.1, intermediate: 0.4, advanced: 0.5 } },
            pm: { hours: 620, gatePass: 95, rating: 4.8, complexity: { basic: 0.1, intermediate: 0.3, advanced: 0.6 } },
            proposals: { hours: 350, gatePass: 93, rating: 4.6, complexity: { basic: 0.15, intermediate: 0.4, advanced: 0.45 } },
            revops: { hours: 290, gatePass: 91, rating: 4.5, complexity: { basic: 0.2, intermediate: 0.4, advanced: 0.4 } },
            strategy: { hours: 780, gatePass: 96, rating: 4.9, complexity: { basic: 0.05, intermediate: 0.25, advanced: 0.7 } }
        }
    }
];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMobileMenu();
    initOverviewLinks();
    initAssessmentTabs();
    initAQSCalculator();
    initQualityReview();
    initSimulator();
    initStaffing();

    renderCompetencies();
    renderSpecializations();
});

// ===== NAVIGATION =====
function initNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');

    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const viewId = tab.dataset.view;
            navigateTo(viewId);
        });
    });
}

function navigateTo(viewId) {
    const navTabs = document.querySelectorAll('.nav-tab');
    const views = document.querySelectorAll('.view');

    navTabs.forEach(t => t.classList.remove('active'));
    document.querySelector(`.nav-tab[data-view="${viewId}"]`)?.classList.add('active');

    views.forEach(view => view.classList.remove('active'));
    document.getElementById(`${viewId}-view`)?.classList.add('active');

    // Close mobile menu if open
    document.getElementById('navTabs')?.classList.remove('open');
}

function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const navTabs = document.getElementById('navTabs');
    if (btn && navTabs) {
        btn.addEventListener('click', () => navTabs.classList.toggle('open'));
    }
}

function initOverviewLinks() {
    document.querySelectorAll('[data-nav]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.nav);
        });
    });
}

// ===== COMPETENCIES =====
function renderCompetencies() {
    const container = document.getElementById('competenciesGrid');
    if (!container) return;

    container.innerHTML = competencies.map(comp => `
        <div class="competency-card">
            <div class="competency-header">
                <span class="competency-icon">${comp.icon}</span>
                <h3>${comp.name}</h3>
            </div>
            <p class="competency-desc">${comp.description}</p>
            <div class="competency-levels">
                <div class="comp-level"><span class="level-tag a1">A1</span>${comp.A1}</div>
                <div class="comp-level"><span class="level-tag a2">A2</span>${comp.A2}</div>
                <div class="comp-level"><span class="level-tag a3">A3</span>${comp.A3}</div>
                <div class="comp-level"><span class="level-tag a4">A4</span>${comp.A4}</div>
            </div>
        </div>
    `).join('');
}

// ===== SPECIALIZATIONS =====
function renderSpecializations() {
    const container = document.getElementById('specializationsGrid');
    if (!container) return;

    container.innerHTML = Object.entries(specializations).map(([key, spec]) => `
        <div class="spec-card">
            <div class="spec-header">
                <span class="spec-icon">${spec.icon}</span>
                <h3>${spec.name}</h3>
            </div>
            <p class="spec-desc">${spec.description}</p>

            ${spec.methods ? `
            <div class="spec-methods">
                <h4>Key Methods</h4>
                <ul>
                    ${spec.methods.map(m => `<li>${m}</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            ${spec.skills ? `
            <div class="spec-skills">
                <h4>Core Skills</h4>
                <div class="skills-tags">
                    ${spec.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
                </div>
            </div>
            ` : ''}

            ${spec.skillsRequired ? `
            <div class="spec-skills-required">
                <h4>Underlying Skills</h4>
                <div class="skills-mapping">
                    <div class="skills-group primary-skills">
                        <span class="skills-group-label">Essential</span>
                        <div class="skills-list">
                            ${spec.skillsRequired.primary.map(skillId => {
                                const skill = underlyingSkills[skillId];
                                return skill ? `<span class="underlying-skill primary" title="${skill.description}">${skill.icon} ${skill.name}</span>` : '';
                            }).join('')}
                        </div>
                    </div>
                    <div class="skills-group secondary-skills">
                        <span class="skills-group-label">Helpful</span>
                        <div class="skills-list">
                            ${spec.skillsRequired.secondary.map(skillId => {
                                const skill = underlyingSkills[skillId];
                                return skill ? `<span class="underlying-skill secondary" title="${skill.description}">${skill.icon} ${skill.name}</span>` : '';
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
            ` : ''}

            <div class="spec-deliverables-tiers">
                <h4>Deliverables by Complexity</h4>
                <div class="deliverables-grid">
                    <div class="deliverable-tier">
                        <h5 class="tier-label basic">Basic</h5>
                        <ul>
                            ${spec.deliverables.basic.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="deliverable-tier">
                        <h5 class="tier-label intermediate">Intermediate</h5>
                        <ul>
                            ${spec.deliverables.intermediate.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="deliverable-tier">
                        <h5 class="tier-label advanced">Advanced</h5>
                        <ul>
                            ${spec.deliverables.advanced.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== ASSESSMENT =====
function initAssessmentTabs() {
    const tabs = document.querySelectorAll('.assessment-tab');
    const panels = document.querySelectorAll('.assessment-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.assess;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            panels.forEach(p => p.classList.remove('active'));
            document.getElementById(`${target}-panel`)?.classList.add('active');
        });
    });
}

// ===== AQS CALCULATOR =====
function initAQSCalculator() {
    const inputs = [
        { id: 'firstSubmissionScore', suffix: '' },
        { id: 'zeroRevisionRate', suffix: '%' },
        { id: 'avgRevisions', suffix: '' },
        { id: 'onTimeRate', suffix: '%' },
        { id: 'clientFeedback', suffix: '' },
        { id: 'pmFeedback', suffix: '' },
        { id: 'peerFeedback', suffix: '' },
        { id: 'timeLogging', suffix: '%' },
        { id: 'dailyUpdates', suffix: '%' },
        { id: 'processAdherence', suffix: '%' }
    ];

    inputs.forEach(input => {
        const el = document.getElementById(input.id);
        if (el) {
            el.addEventListener('input', () => {
                document.getElementById(`${input.id}Value`).textContent = el.value + input.suffix;
                calculateAQS();
            });
        }
    });

    calculateAQS();
}

function calculateAQS() {
    // Work Quality inputs (35%) - AI-assessed
    const firstSubmission = parseFloat(document.getElementById('firstSubmissionScore')?.value) || 0;
    const zeroRevisionRate = parseFloat(document.getElementById('zeroRevisionRate')?.value) || 0;
    const avgRevisions = parseFloat(document.getElementById('avgRevisions')?.value) || 0;

    // Delivery inputs (20%) - PM input
    const onTime = parseFloat(document.getElementById('onTimeRate')?.value) || 0;

    // Satisfaction inputs (25%) - Human input
    const client = parseFloat(document.getElementById('clientFeedback')?.value) || 0;
    const pm = parseFloat(document.getElementById('pmFeedback')?.value) || 0;
    const peer = parseFloat(document.getElementById('peerFeedback')?.value) || 0;

    // Gratia Standards inputs (20%) - System data
    const timeLogging = parseFloat(document.getElementById('timeLogging')?.value) || 0;
    const dailyUpdates = parseFloat(document.getElementById('dailyUpdates')?.value) || 0;
    const processAdherence = parseFloat(document.getElementById('processAdherence')?.value) || 0;

    // Work Quality (35%): First-submission score (50%) + Zero-revision rate (30%) + Low avg revisions (20%)
    const revisionPenalty = Math.max(0, 100 - (avgRevisions * 40)); // 0 revisions = 100, 2.5 revisions = 0
    const quality = ((firstSubmission / 5) * 100 * 0.5) + (zeroRevisionRate * 0.3) + (revisionPenalty * 0.2);

    // Delivery (20%): Just on-time rate
    const delivery = onTime;

    // Satisfaction (25%): Client (50%) + PM (35%) + Peer (15%)
    const satisfaction = ((client / 5) * 100 * 0.5) + ((pm / 5) * 100 * 0.35) + ((peer / 5) * 100 * 0.15);

    // Gratia Standards (20%): Time logging (40%) + Daily updates (30%) + Process (30%)
    const standards = (timeLogging * 0.4) + (dailyUpdates * 0.3) + (processAdherence * 0.3);

    // Final AQS: Quality (35%) + Delivery (20%) + Satisfaction (25%) + Standards (20%)
    const aqs = Math.round((quality * 0.35) + (delivery * 0.20) + (satisfaction * 0.25) + (standards * 0.20));

    // Update display
    const aqsEl = document.getElementById('aqsScore');
    if (aqsEl) aqsEl.textContent = aqs;

    // Update gauge
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (aqs / 100) * circumference;
    const progressEl = document.getElementById('aqsProgress');
    if (progressEl) progressEl.style.strokeDashoffset = offset;

    // Update level indicator
    let level = 'Below A1';
    let range = 'Below 70';
    if (aqs >= 95) { level = 'A4 Level'; range = '95+ range'; }
    else if (aqs >= 90) { level = 'A3 Level'; range = '90-95 range'; }
    else if (aqs >= 80) { level = 'A2 Level'; range = '80-90 range'; }
    else if (aqs >= 70) { level = 'A1 Level'; range = '70-80 range'; }

    const levelEl = document.getElementById('aqsLevelIndicator');
    const rangeEl = document.getElementById('aqsLevelRange');
    if (levelEl) levelEl.textContent = level;
    if (rangeEl) rangeEl.textContent = range;

    // Update breakdown
    const qualVal = document.getElementById('breakdownQualityValue');
    const delVal = document.getElementById('breakdownDeliveryValue');
    const satVal = document.getElementById('breakdownSatisfactionValue');
    const stdVal = document.getElementById('breakdownStandardsValue');
    if (qualVal) qualVal.textContent = Math.round(quality * 0.35);
    if (delVal) delVal.textContent = Math.round(delivery * 0.20);
    if (satVal) satVal.textContent = Math.round(satisfaction * 0.25);
    if (stdVal) stdVal.textContent = Math.round(standards * 0.20);
}

// ===== QUALITY REVIEW =====
function initQualityReview() {
    const specSelect = document.getElementById('qualitySpecSelect');
    if (specSelect) {
        specSelect.addEventListener('change', (e) => renderQualityDimensions(e.target.value));
        renderQualityDimensions('financial');
    }
}

function renderQualityDimensions(specKey) {
    const universalContainer = document.getElementById('universalDimensions');
    const specificContainer = document.getElementById('specificDimensions');

    if (!universalContainer || !specificContainer) return;

    // Render universal dimensions
    universalContainer.innerHTML = assessmentDimensions.universal.map(dim => `
        <div class="dimension-card">
            <div class="dimension-name">${dim.name}</div>
            <div class="dimension-desc">${dim.description}</div>
        </div>
    `).join('');

    // Render specialization-specific dimensions
    const specDimensions = assessmentDimensions[specKey] || [];
    specificContainer.innerHTML = specDimensions.map(dim => `
        <div class="dimension-card specific">
            <div class="dimension-name">${dim.name}</div>
            <div class="dimension-desc">${dim.description}</div>
        </div>
    `).join('');
}

// ===== SIMULATOR =====
let simProjects = [];

function initSimulator() {
    // Name input
    const nameEl = document.getElementById('simName');
    if (nameEl) {
        nameEl.addEventListener('input', (e) => {
            const initials = e.target.value.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
            document.getElementById('simAvatar').textContent = initials || 'NA';
        });
    }

    // Hours inputs
    renderSimHoursInputs();

    // Buttons
    document.getElementById('randomizeProjects')?.addEventListener('click', generateProjects);
    document.getElementById('runSimulation')?.addEventListener('click', runSimulation);

    generateProjects();
    runSimulation();
}

function renderSimHoursInputs() {
    const container = document.getElementById('simHoursInputs');
    if (!container) return;

    const topSpecs = ['financial', 'research', 'pitch'];
    container.innerHTML = topSpecs.map(key => `
        <div class="hours-row">
            <label>${specializations[key].name}</label>
            <input type="number" id="hours-${key}" value="${Math.floor(Math.random() * 300) + 50}" class="form-input-small">
        </div>
    `).join('');
}

function generateProjects() {
    const level = document.getElementById('simLevel')?.value || 'A2';
    const rates = {
        A1: { avgScore: 3.2, passRate: 0.55, onTime: 0.70 },
        A2: { avgScore: 3.8, passRate: 0.75, onTime: 0.85 },
        A3: { avgScore: 4.3, passRate: 0.90, onTime: 0.95 },
        A4: { avgScore: 4.7, passRate: 0.95, onTime: 0.99 }
    }[level];

    const projectTypes = [
        { name: 'DCF Valuation', spec: 'financial' },
        { name: 'Investor Pitch Deck', spec: 'pitch' },
        { name: 'Market Size Analysis', spec: 'research' },
        { name: 'KPI Dashboard', spec: 'dashboards' },
        { name: 'Process Mapping', spec: 'process' }
    ];

    simProjects = [];
    for (let i = 0; i < 6; i++) {
        const type = projectTypes[Math.floor(Math.random() * projectTypes.length)];
        // Generate review score with some variance around level average
        const variance = (Math.random() - 0.5) * 1.5;
        const reviewScore = Math.max(1, Math.min(5, rates.avgScore + variance));
        const passed = reviewScore >= 3.5;
        const exceeded = reviewScore >= 4.5;
        const onTime = Math.random() < rates.onTime;
        const clientRating = passed ? (3.5 + Math.random() * 1.5).toFixed(1) : (2.5 + Math.random() * 1.5).toFixed(1);

        simProjects.push({
            name: type.name,
            spec: type.spec,
            reviewScore: parseFloat(reviewScore.toFixed(1)),
            passed,
            exceeded,
            onTime,
            clientRating: parseFloat(clientRating)
        });
    }

    renderProjects();
    updateProjectStats();
}

function renderProjects() {
    const container = document.getElementById('simProjectList');
    if (!container) return;

    container.innerHTML = simProjects.map(p => {
        const status = p.exceeded ? 'pass' : (p.passed ? 'partial' : 'fail');
        const outcomeLabel = p.exceeded ? 'Exceeded' : (p.passed ? 'Passed' : 'Revise');
        return `
            <div class="sim-project-item">
                <div class="project-status ${status}"></div>
                <div class="project-info">
                    <span class="project-name">${p.name}</span>
                </div>
                <div class="project-meta">
                    <span class="review-score">${p.reviewScore}</span>
                    <span class="${p.passed ? 'pass' : 'fail'}">${outcomeLabel}</span>
                    <span>${p.onTime ? '✓' : 'Late'}</span>
                    <span>⭐${p.clientRating}</span>
                </div>
            </div>
        `;
    }).join('');
}

function updateProjectStats() {
    if (simProjects.length === 0) return;

    const avgReviewScore = (simProjects.reduce((s, p) => s + p.reviewScore, 0) / simProjects.length).toFixed(1);
    const passRate = Math.round((simProjects.filter(p => p.passed).length / simProjects.length) * 100);
    const onTimeRate = Math.round((simProjects.filter(p => p.onTime).length / simProjects.length) * 100);
    const avgClientRating = (simProjects.reduce((s, p) => s + p.clientRating, 0) / simProjects.length).toFixed(1);

    document.getElementById('simAvgReview').textContent = avgReviewScore;
    document.getElementById('simPassRate').textContent = passRate + '%';
    document.getElementById('simOnTimeRate').textContent = onTimeRate + '%';
    document.getElementById('simAvgRating').textContent = avgClientRating;
}

function runSimulation() {
    if (simProjects.length === 0) return;

    const level = document.getElementById('simLevel')?.value || 'A2';

    const avgReviewScore = simProjects.reduce((s, p) => s + p.reviewScore, 0) / simProjects.length;
    const passRate = simProjects.filter(p => p.passed).length / simProjects.length;
    const exceededRate = simProjects.filter(p => p.exceeded).length / simProjects.length;
    const onTimeRate = simProjects.filter(p => p.onTime).length / simProjects.length;
    const avgClientRating = simProjects.reduce((s, p) => s + p.clientRating, 0) / simProjects.length;

    // Work Quality (35%): Avg score (50%) + Pass rate (30%) + Exceeded rate (20%)
    const quality = ((avgReviewScore / 5) * 100 * 0.5) + (passRate * 100 * 0.3) + (exceededRate * 100 * 0.2);

    // Delivery (25%): On-time (60%) + Low-revision (40%)
    const revisionRate = 1 - passRate; // Projects needing revision
    const delivery = (onTimeRate * 100 * 0.6) + ((1 - revisionRate) * 100 * 0.4);

    // Professionalism (25%): Client feedback
    const professionalism = (avgClientRating / 5) * 100;

    // Gratia Standards (15%): Simulated at 90% for demo
    const standards = 90;

    const aqs = Math.round((quality * 0.35) + (delivery * 0.25) + (professionalism * 0.25) + (standards * 0.15));

    document.getElementById('simAQS').textContent = aqs;

    let perfLevel = 'Below A1';
    if (aqs >= 95) perfLevel = 'A4';
    else if (aqs >= 90) perfLevel = 'A3';
    else if (aqs >= 80) perfLevel = 'A2';
    else if (aqs >= 70) perfLevel = 'A1';

    document.getElementById('simPerfLevel').textContent = perfLevel;

    const nextLevel = { A1: 'A2', A2: 'A3', A3: 'A4', A4: 'A4' }[level];
    document.getElementById('simNextLevel').textContent = nextLevel;

    // Calculate promotion progress
    const targetAQS = { A1: 80, A2: 90, A3: 95, A4: 100 }[level];
    const progress = Math.min(100, Math.round((aqs / targetAQS) * 100));
    document.getElementById('simPromoFill').style.width = progress + '%';

    // Render requirements
    const reqs = getPromoRequirements(level, aqs, avgClientRating);
    const reqsEl = document.getElementById('simPromoReqs');
    if (reqsEl) {
        reqsEl.innerHTML = reqs.map(r => `
            <div class="promo-req ${r.met ? 'met' : 'unmet'}">
                <span>${r.met ? '✓' : '○'}</span>
                <span>${r.label}</span>
            </div>
        `).join('');
    }
}

function getPromoRequirements(level, aqs, avgClientRating) {
    const passRate = simProjects.filter(p => p.passed).length / simProjects.length;
    const exceededCount = simProjects.filter(p => p.exceeded).length;

    const requirements = {
        A1: [
            { label: 'AQS 80+', met: aqs >= 80 },
            { label: '4+ client rating', met: avgClientRating >= 4 },
            { label: '70%+ pass rate', met: passRate >= 0.7 }
        ],
        A2: [
            { label: 'AQS 90+', met: aqs >= 90 },
            { label: '4.5+ client rating', met: avgClientRating >= 4.5 },
            { label: '3+ exceeded reviews', met: exceededCount >= 3 }
        ],
        A3: [
            { label: 'AQS 95+', met: aqs >= 95 },
            { label: '4.8+ client rating', met: avgClientRating >= 4.8 },
            { label: 'Consistent exceeded', met: exceededCount >= 5 }
        ],
        A4: [
            { label: 'Maximum level achieved', met: true }
        ]
    };
    return requirements[level] || [];
}

// ===== STAFFING =====
function initStaffing() {
    document.getElementById('findAnalysts')?.addEventListener('click', findAnalysts);
    findAnalysts();
}

// Calculate psychometric fit between analyst and client profile
// Returns 0-100 score and breakdown
function calculatePsychometricFit(analyst, clientProfileKey) {
    if (!analyst.psychometrics) return { score: null, breakdown: [], label: 'No profile' };

    const clientProfile = clientProfileTemplates[clientProfileKey];
    if (!clientProfile) return { score: null, breakdown: [], label: 'No client profile' };

    const breakdown = [];
    let totalDiff = 0;
    let dimensions = 0;

    Object.entries(psychometricDimensions).forEach(([key, dim]) => {
        const analystVal = analyst.psychometrics[key];
        const clientPref = clientProfile.preferences[key];

        if (analystVal !== undefined && clientPref !== undefined) {
            // Calculate absolute difference (0 = perfect match, 1 = opposite ends)
            const diff = Math.abs(analystVal - clientPref);
            totalDiff += diff;
            dimensions++;

            // Determine alignment
            let alignment = 'good';
            if (diff > 0.4) alignment = 'mismatch';
            else if (diff > 0.25) alignment = 'moderate';

            breakdown.push({
                dimension: dim.name,
                analystPosition: analystVal,
                clientPreference: clientPref,
                diff,
                alignment,
                spectrum: dim.spectrum
            });
        }
    });

    // Convert average diff to 0-100 score (lower diff = higher score)
    const avgDiff = dimensions > 0 ? totalDiff / dimensions : 0.5;
    const score = Math.round((1 - avgDiff) * 100);

    // Determine overall label
    let label = 'Good Fit';
    let level = 'good';
    if (score >= 80) { label = 'Excellent Fit'; level = 'excellent'; }
    else if (score < 60) { label = 'May Need Alignment'; level = 'caution'; }

    return { score, breakdown, label, level };
}

// Get psychometric summary for display
function getPsychometricSummary(analyst) {
    if (!analyst.psychometrics) return [];

    const summary = [];
    Object.entries(psychometricDimensions).forEach(([key, dim]) => {
        const val = analyst.psychometrics[key];
        if (val !== undefined) {
            // Determine which end of spectrum they lean toward
            const position = val < 0.4 ? dim.spectrum[0] :
                            val > 0.6 ? dim.spectrum[1] : 'Balanced';
            summary.push({ dimension: dim.name, position, value: val });
        }
    });
    return summary;
}

function getAnalystSpecScore(analyst, specKey) {
    const specData = analyst.specializations[specKey];
    if (!specData) return 0;
    return calculateSpecScore(specData.hours, specData.gatePass, specData.rating, specData.complexity);
}

function findAnalysts() {
    const spec = document.getElementById('staffing-spec')?.value || 'financial';
    const minTier = document.getElementById('staffing-tier')?.value || 'proficient';
    const minLevel = document.getElementById('staffing-level')?.value || 'A2';
    const clientProfile = document.getElementById('staffing-client-profile')?.value || '';

    const levelOrder = { A1: 1, A2: 2, A3: 3, A4: 4 };
    const tierThresholds = { familiar: 50, proficient: 70, expert: 85 };
    const minLevelNum = levelOrder[minLevel];
    const minScore = tierThresholds[minTier];

    const matches = analysts
        .map(a => {
            const psychoFit = clientProfile ? calculatePsychometricFit(a, clientProfile) : null;
            return {
                ...a,
                specScore: getAnalystSpecScore(a, spec),
                specData: a.specializations[spec],
                psychoFit
            };
        })
        .filter(a => {
            const levelNum = levelOrder[a.level];
            return a.specScore >= minScore && levelNum >= minLevelNum;
        })
        .sort((a, b) => b.specScore - a.specScore);

    renderStaffingResults(matches, spec, clientProfile);
}

function renderStaffingResults(matches, spec, clientProfile) {
    const container = document.getElementById('staffingResults');
    if (!container) return;

    if (matches.length === 0) {
        container.innerHTML = `<div class="no-results">No analysts match the criteria. Try adjusting your filters.</div>`;
        return;
    }

    // Calculate match confidence based on spec score relative to requirements
    const getMatchConfidence = (specScore, tier) => {
        const thresholds = { familiar: 50, proficient: 70, expert: 85 };
        const minRequired = thresholds[tier] || 70;
        const excess = specScore - minRequired;
        if (excess >= 20) return { level: 'excellent', label: 'Excellent Match', color: 'var(--success)' };
        if (excess >= 10) return { level: 'good', label: 'Good Match', color: 'var(--primary)' };
        return { level: 'meets', label: 'Meets Requirements', color: 'var(--warning)' };
    };

    const minTier = document.getElementById('staffing-tier')?.value || 'proficient';

    container.innerHTML = matches.map(a => {
        const tierInfo = getSpecTier(a.specScore);
        const advancedPct = Math.round(a.specData.complexity.advanced * 100);
        const matchConf = getMatchConfidence(a.specScore, minTier);
        const availabilityClass = a.availability === 'available' ? 'available' : 'limited';

        // Psychometric fit rendering
        const psychoSection = a.psychoFit && a.psychoFit.score !== null ? `
            <div class="analyst-psycho">
                <div class="psycho-header">
                    <span class="psycho-label">Work Style Fit</span>
                    <span class="psycho-score fit-${a.psychoFit.level}">${a.psychoFit.score}% · ${a.psychoFit.label}</span>
                </div>
                <div class="psycho-traits">
                    ${getPsychometricSummary(a).slice(0, 4).map(t => `
                        <span class="trait-tag">${t.position}</span>
                    `).join('')}
                </div>
            </div>
        ` : (clientProfile ? `
            <div class="analyst-psycho no-profile">
                <span class="psycho-label">Work Style Fit</span>
                <span class="psycho-na">No profile on file</span>
            </div>
        ` : '');

        return `
            <div class="analyst-card match-${matchConf.level}">
                <div class="analyst-card-header">
                    <div class="analyst-avatar">${a.initials}</div>
                    <div class="analyst-info">
                        <h4>${a.name}</h4>
                        <span class="analyst-level">${a.level} · ${levels[a.level].name}</span>
                        <span class="analyst-availability ${availabilityClass}">${a.availability === 'available' ? '● Available' : '◐ Limited'}</span>
                    </div>
                    <div class="match-confidence">
                        <span class="match-badge" style="background: ${matchConf.color}">${matchConf.label}</span>
                        <span class="spec-score">SS ${a.specScore}</span>
                    </div>
                </div>
                <div class="analyst-meta">
                    <div class="meta-item">
                        <span class="meta-label">Spec Tier</span>
                        <span class="meta-value spec-${tierInfo.tier}">${tierInfo.label}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Hours</span>
                        <span class="meta-value">${a.specData.hours}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Rating</span>
                        <span class="meta-value">${a.specData.rating.toFixed(1)}/5</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Advanced</span>
                        <span class="meta-value">${advancedPct}%</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Timezone</span>
                        <span class="meta-value">${a.timezone || 'N/A'}</span>
                    </div>
                </div>
                ${psychoSection}
                <div class="analyst-notes">
                    <div class="notes-section strengths">
                        <span class="notes-label">Strengths</span>
                        <ul>${a.strengths?.map(s => `<li>${s}</li>`).join('') || ''}</ul>
                    </div>
                    <div class="notes-section considerations">
                        <span class="notes-label">Considerations</span>
                        <ul>${a.considerations?.map(c => `<li>${c}</li>`).join('') || ''}</ul>
                    </div>
                </div>
                <div class="analyst-recent">
                    <span class="recent-label">Recent work:</span>
                    <span class="recent-value">${a.recentWork || 'N/A'}</span>
                </div>
            </div>
        `;
    }).join('');
}

// ===== CLIENT VIEW =====
function initClientView() {
    const selector = document.getElementById('clientAnalystSelect');
    if (selector) {
        selector.addEventListener('change', (e) => {
            const analyst = analysts.find(a => a.id === parseInt(e.target.value));
            if (analyst) renderClientProfile(analyst);
        });
    }
    renderClientProfile(analysts[0]);
}

function renderClientProfile(analyst) {
    document.getElementById('clientAvatar').textContent = analyst.initials;
    document.getElementById('clientName').textContent = analyst.name;
    document.getElementById('clientLevel').textContent = `${analyst.level} · ${levels[analyst.level].name}`;

    const totalHours = Object.entries(analyst.specializations).reduce((sum, [_, s]) => sum + s.hours, 0);
    const projectCount = Math.floor(totalHours / 30);
    const avgRating = Object.values(analyst.specializations).reduce((sum, s) => sum + s.rating, 0) / 9;

    document.getElementById('clientProjects').textContent = projectCount + '+';
    document.getElementById('clientRating').textContent = avgRating.toFixed(1);
    document.getElementById('clientOnTime').textContent = Math.round(analyst.aqs * 1.02) + '%';

    // Render specializations with Spec Scores
    const specsWithScores = Object.entries(analyst.specializations)
        .map(([key, data]) => ({
            key,
            data,
            score: calculateSpecScore(data.hours, data.gatePass, data.rating, data.complexity)
        }))
        .filter(s => s.score >= 50)
        .sort((a, b) => b.score - a.score)
        .slice(0, 4);

    const specsEl = document.getElementById('clientSpecs');
    if (specsEl) {
        specsEl.innerHTML = specsWithScores.map(s => {
            const tierInfo = getSpecTier(s.score);
            return `<span class="spec-tag ${tierInfo.tier}">${specializations[s.key]?.name || s.key} · ${tierInfo.label}</span>`;
        }).join('');
    }

    // Render deliverables based on complexity mix of top specialization
    const topSpec = specsWithScores[0];
    const deliverablesEl = document.getElementById('clientDeliverables');
    if (deliverablesEl && topSpec) {
        const spec = specializations[topSpec.key];
        const deliverables = [];
        // Show deliverables based on what complexity they've done
        if (topSpec.data.complexity.advanced > 0.2) {
            deliverables.push(...spec.deliverables.advanced.slice(0, 2));
        }
        if (topSpec.data.complexity.intermediate > 0.2) {
            deliverables.push(...spec.deliverables.intermediate.slice(0, 2));
        }
        if (deliverables.length < 4) {
            deliverables.push(...spec.deliverables.basic.slice(0, 4 - deliverables.length));
        }
        deliverablesEl.innerHTML = deliverables.slice(0, 4).map(d => `<li>${d}</li>`).join('');
    }
}
