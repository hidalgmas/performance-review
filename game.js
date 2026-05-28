// Data is embedded here for file:// compatibility.
// In a later phase, replace with fetch() calls when running a local server.

const SCENARIOS = [
  {
    id: "s001",
    text: "[PLACEHOLDER] A new company policy requires all employees to attend weekly 3-hour all-hands meetings. Your already stretched team is pushing back hard.",
    responses: {
      safe:      { label: "Agree to the policy and communicate it to your team", primaryStat: "morale" },
      knowledge: { label: "Request data on the policy's impact before deciding", primaryStat: "productivity", secondaryStat: "performance" },
      bold:      { label: "Push back directly to leadership and propose an alternative", primaryStat: "performance" }
    }
  },
  {
    id: "s002",
    text: "[PLACEHOLDER] The quarterly budget was cut by 20%. You must decide how to allocate reduced resources across your department before Friday.",
    responses: {
      safe:      { label: "Spread cuts evenly across all projects", primaryStat: "productivity" },
      knowledge: { label: "Analyze project ROI before reallocating budget", primaryStat: "performance", secondaryStat: "morale" },
      bold:      { label: "Eliminate low-impact projects entirely to protect top priorities", primaryStat: "productivity" }
    }
  },
  {
    id: "s003",
    text: "[PLACEHOLDER] A top-performing employee has asked for a promotion, but there is no budget approved for raises this quarter.",
    responses: {
      safe:      { label: "Explain the budget situation and promise to revisit next quarter", primaryStat: "morale" },
      knowledge: { label: "Research what non-monetary recognition options are available", primaryStat: "morale", secondaryStat: "productivity" },
      bold:      { label: "Go to bat with HR to create a special exception for this employee", primaryStat: "performance" }
    }
  }
];

const QUESTIONS = [
  {
    id: "q001", week: 1, difficulty: "hard", topic: "organizational_culture",
    text: "What are the three levels of organizational culture and which two levels affect the outward expression of culture?",
    choices: ["Artifacts, strategy, and structure; strategy and structure shape artifacts.", "Artifacts, values, and assumptions; values and assumptions shape artifacts.", "Norms, values, and beliefs; norms and beliefs shape values", "Artifacts, policies, and behaviors; policies and behaviors shape artifacts."],
    correctIndex: 1
  },
  {
    id: "q002", week: 1, difficulty: "medium", topic: "organizational_culture",
    text: "Nike is known for innovation, high performance, and a competitive environment focused on growth. Which characteristic is LEAST consistent with this culture?",
    choices: ["Innovation and risk taking", "Outcome orientation", "Aggressiveness", "Stability"],
    correctIndex: 3
  },
  {
    id: "q003", week: 1, difficulty: "medium", topic: "organizational_culture",
    text: "A company values strict rules and hierarchy, but one department encourages risk-taking and challenges authority. What form of culture does this BEST represent?",
    choices: ["Strong culture", "Subculture", "Counterculture", "Formalization"],
    correctIndex: 2
  },
  {
    id: "q004", week: 1, difficulty: "medium", topic: "levels_of_organizational_culture",
    text: "An applicant observes open workspaces, an open-door policy, and social events at a company and concludes the company values collaboration. What level of organizational culture is being observed, and what level is being inferred?",
    choices: ["Observing values, inferring artifacts", "Observing artifacts, inferring values", "Observing assumptions, inferring artifacts", "Observing values, inferring assumptions"],
    correctIndex: 1
  },
  {
    id: "q005", week: 1, difficulty: "easy", topic: "organizational_structure",
    text: "A company organizes its structure so that employees are grouped into departments such as marketing, finance, and human resources. What type of departmentalization is this?",
    choices: ["Functional", "Product", "Process", "Geographic"],
    correctIndex: 0
  },
  {
    id: "q006", week: 1, difficulty: "easy", topic: "organizational_culture",
    text: "Which aspect of organizational culture is demonstrated when a company regularly celebrates top employees with formal award ceremonies?",
    choices: ["Mission statement", "Rituals", "Physical layout", "Stories"],
    correctIndex: 1
  },
  {
    id: "q007", week: 1, difficulty: "easy", topic: "elements_of_organizational_structure",
    text: "Which of the following is NOT a benefit of using a high work specification?",
    choices: ["Employees struggle with burnout", "Easy tasks can be done by unskilled laborers", "It makes assembly much faster", "Employees can do one speific task well"],
    correctIndex: 0
  },
  {
    id: "q008", week: 1, difficulty: "easy", topic: "mechanistic_and_organic_structure",
    text: "A company wants to create a completely new technology line, with nothing that's even been done before. This company will likely use which of the following strategies?",
    choices: ["Cost Minimization", "Immitation", "Innovation", ""],
    correctIndex: 2
  },
  {
    id: "q009", week: 1, difficulty: "medium", topic: "matrix_organizations",
    text: "\"Cross between a traditional functional structure with a product structure\" is a definition for what?",
    choices: ["Assembly Line", "Matrix Organization", "An LLC", "Chain of Command"],
    correctIndex: 1
  },
  {
    id: "q010", week: 1, difficulty: "medium", topic: "elements_of_organizational_structure",
    text: "What are common ways for a company to departmentalize?",
    choices: ["People, place, pay, job and scale", "Mechanical, electrial, phsyical, financial, and powerful", "Function, product, geography, process, and customer", "Factory, sales, time, outlook, and department"],
    correctIndex: 2
  },
  {
    id: "q011", week: 1, difficulty: "easy", topic: "levels_of_organizational_culture",
    text: "What is the deepest level of organizational culture?",
    choices: ["Assumptions", "Artifacts", "Values", ""],
    correctIndex: 0
  },
  {
    id: "q012", week: 2, difficulty: "medium", topic: "job_performance_criteria",
    text: "Which two Major Performance Criteria are difficult to predict and have little stability?",
    choices: ["Production+Sales", "Accidents+Theft", "Counterproductive Work Behavior+Citzenship Behavior", "Absenteeism+Presenteeism"],
    correctIndex: 1
  },
  {
    id: "q013", week: 2, difficulty: "easy", topic: "job_satisfaction",
    text: "An employee is unhappy with their organization's lunchtime policies. They decide to write a complaint to their manager, and HR. Which option from the Job Dissatisfaction Framework did they use?",
    choices: ["Exit", "Loyalty", "Voice", "Neglect"],
    correctIndex: 2
  },
  {
    id: "q014", week: 2, difficulty: "easy", topic: "employee_engagement",
    text: "Employee Engagement has been described by some specialists as a sepctrum. What labels are on either side of that spectrum?",
    choices: ["Engagement and Burnout", "Happiness and Sadness", "Satisfaction and Complaints", "Vigor and Shutdown"],
    correctIndex: 0
  },
  {
    id: "q015", week: 2, difficulty: "medium", topic: "organizational_justice",
    text: "Which type of organizational justice is most closely related to organizational attitudes and behaviors?",
    choices: ["Distributive Justice", "Ineractional Justice", "Procedural Justice", ""],
    correctIndex: 2
  },
  {
    id: "q016", week: 2, difficulty: "medium", topic: "organizational_commitment",
    text: "Which of the following descriptions matches the definiton of affective commitment?",
    choices: ["An employee's emotional attactment and identification with their work", "The costs an employee associates with their work, such as pay or benefits", "An employee's feeling of obligation to remain loyal to their company", ""],
    correctIndex: 0
  },
  {
    id: "q017", week: 3, difficulty: "medium", topic: "challenges_of_diversity_management",
    text: "A white male CEO chooses a young white male protege in an organization that doesn't have assigned mentorship roles. What phenomenon does this display?",
    choices: ["Ethnocentrism Phenomenon", "Similarity-Attractive Phenomenon", "Machiavellianism Phenomenon", "Groupthink Phenomenon"],
    correctIndex: 1
  },
  {
    id: "q018", week: 3, difficulty: "easy", topic: "demographic_diversity",
    text: "Hiring discrimination has not decreased in the past 25 years for which race?",
    choices: ["Black Americans", "Asian Americans", "Hispanic Americans", "Native Americans+Pacific Islanders"],
    correctIndex: 0
  },
  {
    id: "q019", week: 3, difficulty: "hard", topic: "cultural_diversity",
    text: "If an American corporation vists a foreign country, and they ask some subordinates of the foreign country if they'd be willing to do their jobs differently for a week with looser rules as part of an experiment. The subordinates are very uncomforable with the situation and don't like the idea of not having strict rules. What cultural dimension does this country display.",
    choices: ["High Power Distance", "Low Individualsim", "Low Uncertainty Avoidance", "High Uncertainty Avoidance"],
    correctIndex: 3
  },
  {
    id: "q020", week: 3, difficulty: "easy", topic: "values",
    text: "Which of the following values is NOT an instrumental value?",
    choices: ["Honesty", "Prosperity", "Ambition", "Ethical"],
    correctIndex: 1
  },
  {
    id: "q021", week: 3, difficulty: "easy", topic: "big_five_personality_traits",
    text: "Somone in the workplace who is typically anxious, moody, unapproachable, and tempermental is likely high in which of the big five personalities?",
    choices: ["Conscientiousness", "Openness", "Neuroticisim", "Extraversion"],
    correctIndex: 2
  },
  {
    id: "q022", week: 4, difficulty: "medium", topic: "group_cohesiveness",
    text: "A manager builds a team of low performers for a project. Before assigning the project, he makes the group build cohesivness. His plan works, and the group is now comfortable with each other. However, when he assigns the project, there is low productivity. What should the manager have done before building cohesiveness?",
    choices: ["Incorporate peer evaluations", "Establish group norms", "Have a storming stage", "Assign a devil's advocate"],
    correctIndex: 1
  },
  {
    id: "q023", week: 4, difficulty: "easy", topic: "punctuated-equilibrium_model",
    text: "The punctuated-equilibrium model suggests that group productivity will have a massive leap in effort during which stage when approaching a deadline?",
    choices: ["The halfway point", "The beginning", "Right at the end", "There is a natural and constant effort throughout the timeline"],
    correctIndex: 0
  },
  {
    id: "q024", week: 4, difficulty: "medium", topic: "five-stage_model_of_group_development",
    text: "Which description fits the \"Storming\" stage in the model of group development",
    choices: ["The group meets and they're unsure of their purpose or structure", "Close relationships form between the group, a purpose is identified, and a set of behaviors is applied", "The group wraps up their tasks, celebrates, and mourns the loss of their team", "Intragroup conflict, members are resistant to the constraints of a group"],
    correctIndex: 3
  },
  {
    id: "q025", week: 4, difficulty: "medium", topic: "team_interdependence",
    text: "A group of highschoolers get together for a science fair project. The leader determines that Person A will do the reasearch. Perosn B will create the posterboard. Person C will create the experiment model. Person D will transport the project. Which type of team interdependence is this group displaying?",
    choices: ["Sequential Interdependence", "Outcome Interdependence", "Pooled Interdependence", "Reciprocal Interdependence"],
    correctIndex: 2
  },
  {
    id: "q026", week: 4, difficulty: "easy", topic: "process_gain_and_process_loss",
    text: "What is the tendency to occasionally perform tasks better/faster in the presence of others called?",
    choices: ["Social Facilitation", "Social Loafing", "Social Inhibition", "Groupthink"],
    correctIndex: 0
  },
  {
    id: "q027", week: 5, difficulty: "medium", topic: "decision_making_models",
    text: "The Rational-Decison-Making Model is a series of steps that leads an individual to the best decision they can make. However, people don't use it to make small, everyday decisions becasue this model typically leads to what?",
    choices: ["Implementing a decision", "Analysis Paralysis", "Satisfice", "Running through mental models"],
    correctIndex: 1
  },
  {
    id: "q028", week: 5, difficulty: "medium", topic: "attribution_theory",
    text: "You're at a coffee shop with your frined who ALWAYS orders a 16-oz iced vanilla latte, no matter what coffee shop they go to. Today, they ordered a 20-oz iced lavender chair. This break of behavior falls under which category of covariation information?",
    choices: ["Consistency", "Distinctivness", "Consensus", "Situational"],
    correctIndex: 0
  },
  {
    id: "q029", week: 5, difficulty: "medium", topic: "anchoring_heuristic",
    text: "Which of the folllowing is an example of anchoring being used in the business world?",
    choices: ["A manager asks a worker to spin a wheel to determine their bonus", "A car salesman acts extremely naively with customers to improve sales", "A marketing intern chooses specific colros and patterns for a new rebrand", "An interviewee states a number for their salary, and the interviewer adjusts from that number"],
    correctIndex: 3
  },
  {
    id: "q030", week: 5, difficulty: "easy", topic: "halo_and_horns_effect",
    text: "John takes consciousness very seriously, especially time management, he thinks being late is the worst thing in the world. There's a new hire named Patty that is five minutes late on her first day. John decides that Patty is incompetent, lazy, and isn't fit to work here. Which faulty decision-making did John use?",
    choices: ["Overconfidence Bias", "Hindsight Bias", "Horns Effect", "Escalation of Commitment"],
    correctIndex: 2
  },
  {
    id: "q031", week: 5, difficulty: "easy", topic: "group_decision_making",
    text: "Which of the following is NOT an advantage of group decision-making?",
    choices: ["Groupthink", "Diversity", "Easier Implementation", "More enjoyment for group members"],
    correctIndex: 0
  },
  {
    id: "q032", week: 6, difficulty: "medium", topic: "trait_theory_of_leadership",
    text: "Max is new to his job and believes that his manager, Jolene, was born to be a leader. He admires how Jolene is extremely conscientious, extroverted, and strives for a position of power. Max is operating under which theory of leadership?",
    choices: ["Behaviroal Approach", "Power+Influence Approach", "Trait Theory Approach", "Contingency Approach"],
    correctIndex: 2
  },
  {
    id: "q033", week: 6, difficulty: "easy", topic: "power_and_influence_approach",
    text: "Ivan is the leader of the accounting branch for a compnay. He has the ability to give his employees salary boosts, he's the most skilled at accounting, and he was recently promoted to CFO. Which of the five bases of power does Ivan NOT posses.",
    choices: ["Referent", "Reward", "Legitimate", "Expert"],
    correctIndex: 0
  },
  {
    id: "q034", week: 6, difficulty: "easy", topic: "leader-member_exchange_theory",
    text: "High-quality leader-member exchange relationships relate to which of the following?",
    choices: ["Dissociation", "High Turnover Rates", "Lower Financial Success", "Higher Job Satisfaction"],
    correctIndex: 3
  },
  {
    id: "q035", week: 6, difficulty: "hard", topic: "full-range_leadership_theory",
    text: "Which of the following scenarios lines up with the Transformational Leadership Theory?",
    choices: ["A CEO pays special attention to the employees only directly beneath him, making them feel special.", "A marketing manager pushes his team to go against the status quo for their next project, and wants everyone's creativity.", "A fast-food chain owner gives small bonuses to employees who arrive early and give more effort.", "A factory supervisor lets his employees do their job their own way and doesn't interfere."],
    correctIndex: 1
  },
  {
    id: "q036", week: 6, difficulty: "easy", topic: "substitutes_for_leadership_theory",
    text: "Sam has been hired at a new job, and all of her co-workers love how their manager is with them every step of the way. However, Sam gets disengaged when their manager is constantly around them, and she feels smothered. Sam would be better off with what style of leadership?",
    choices: ["Authentic Leadership", "Servant Leadership", "Transformational Leadership", "Self-Leadership"],
    correctIndex: 3
  },
  {
    id: "q037", week: 6, difficulty: "easy", topic: "contingency_theories_of_leadership",
    text: "In Fiedler’s contingency model, a leader who prioritizes relationships and team harmony would MOST likely have:",
    choices: ["A high LPC score", "A low LPC score", "High coercive power", "Passive leadership"],
    correctIndex: 0
  },
  {
    id: "q038", week: 6, difficulty: "easy", topic: "bases_of_power_in_leadership",
    text: "Which of the following BEST matches the topic of referent power?",
    choices: ["A manager gives employees bonuses for meeting sales goals", "Employees admire their leader and want that leader’s approval", "A supervisor threatens employees with punishment for poor performance", "A leader creates strict schedules and closely monitors tasks"],
    correctIndex: 1
  },
  {
    id: "q039", week: 6, difficulty: "medium", topic: "substitutes_for_leadership_theory",
    text: "According to substitutes for leadership theory, what can reduce the need for formal leadership?",
    choices: ["Structured jobs and self-managed teams", "Increased coercive power", "Passive leadership", "Low employee skill levels"],
    correctIndex: 0
  },
  {
    id: "q040", week: 6, difficulty: "medium", topic: "authentic_leadership",
    text: "Which authentic leadership component involves making ethical decisions based on strong internal values?",
    choices: ["Balanced processing", "Relational transparency", "Internalized moral perspective", "Intellectual stimulation"],
    correctIndex: 2
  },
  {
    id: "q041", week: 6, difficulty: "medium", topic: "servant_leadership",
    text: "Which of the following BEST matches the topic of servant leadership?",
    choices: ["A leader focuses mainly on punishments and rewards", "A leader avoids involvement and lets employees solve everything alone", "A leader puts followers needs and development ahead of personal success", "A leader gains influence through formal authority alone"],
    correctIndex: 2
  },
  {
    id: "q042", week: 2, difficulty: "medium", topic: "employee_performance_and_withdrawal_behaviors",
    text: "One employee comes to work sick, has low productivity, and may get others sick. Another employee often misses work, causing disruptions and extra work for coworkers. Which major performance criteria do these situations represent?",
    choices: ["Both are absenteeism", "First is absenteeism, second is presenteeism", "First is presenteeism, second is absenteeism", "Both are presenteeism"],
    correctIndex: 2
  },
  {
    id: "q043", week: 2, difficulty: "easy", topic: "workplace_revenge_and_emotions",
    text: "According to the “thermodynamics of revenge” framework, which of the following best describes the cooling down phase?",
    choices: ["The employee experiences anger after being treated unfairly", "The employee decides whether and how to respond to their anger", "The organization changes its rules to justify a decision", "The employee is publicly criticized or embarrassed"],
    correctIndex: 1
  },
  {
    id: "q044", week: 2, difficulty: "hard", topic: "responses_to_job_dissatisfaction",
    text: "An employee is experiencing job dissatisfaction but chooses to stay at their job while putting in less effort and ignoring responsibilities. According to the exit–voice–loyalty–neglect framework, which type of response is this?",
    choices: ["Voice (active, constructive", "Exit (active, destructive)", "Loyalty (passive, constructive)", "Neglect (passive, destructive)"],
    correctIndex: 3
  },
  {
    id: "q045", week: 2, difficulty: "hard", topic: "organizational_commitment",
    text: "Three employees are experiencing job dissatisfaction, but all remain with the organization for different reasons:\n\n- Employee A stays because they feel emotionally connected to the company.\n- Employee B stays because leaving would mean losing good pay and benefits.\n- Employee C stays because they feel they should remain loyal to the organization.\n\nWhich option correctly matches each employee to their type of organizational commitment?",
    choices: ["A = Normative, B = Affective, C = Continuance", "A = Affective, B = Continuance, C = Normative", "A = Continuance, B = Normative, C = Affective", "A = Affective, B = Normative, C = Continuance"],
    correctIndex: 1
  },
  {
    id: "q046", week: 2, difficulty: "hard", topic: "organizational_justice",
    text: "An employee feels their pay is unfair compared to others, but believes the decision process was fair and well explained.\n\nWhich type of organizational justice is MOST likely being violated?",
    choices: ["Procedural justice", "Distributive justice", "Interpersonal justice", "Informational justice"],
    correctIndex: 1
  },
  {
    id: "q047", week: 3, difficulty: "medium", topic: "diversity_in_organizations",
    text: "An employee’s personal beliefs, values, and attitudes become known only after working together for some time. These characteristics are examples of:",
    choices: ["Surface-level diversity", "Deep-level diversity", "Hidden diversity", "Identity groups"],
    correctIndex: 1
  },
  {
    id: "q048", week: 3, difficulty: "easy", topic: "group_decision-making_problems",
    text: "A team quickly agrees on a decision, and members avoid sharing different opinions to maintain agreement. This situation best represents:",
    choices: ["Inclusion", "Groupthink", "System flexibility", "Managing diversity"],
    correctIndex: 1
  },
  {
    id: "q049", week: 3, difficulty: "medium", topic: "benefits_of_workplace_diversity",
    text: "Which of the following best describes a benefit of diversity in which organizations gain insight into different customer preferences and improve their products?",
    choices: ["Cost advantages", "Resource acquisition", "Marketing", "System flexibility"],
    correctIndex: 2
  },
  {
    id: "q050", week: 3, difficulty: "medium", topic: "dark_personality_traits",
    text: "An employee believes that any tactic is acceptable if it helps them achieve their goals and manipulates others to get their way. This behavior reflects:",
    choices: ["Narcissism", "Machiavellianism", "Psychopathy", "Conscientiousness"],
    correctIndex: 1
  },
  {
    id: "q051", week: 3, difficulty: "hard", topic: "big_five_personality_traits",
    text: "Hailey prefers working independently, avoids large social gatherings, and rarely speaks up in meetings. They are not anxious or stressed and simply prefer minimal social interaction. Which personality trait is Hailey most likely low in?",
    choices: ["Agreeableness", "Neuroticism", "Conscientiousness", "Extraversion"],
    correctIndex: 3
  },
  {
    id: "q052", week: 4, difficulty: "medium", topic: "types_of_team_interdependence",
    text: "A team works together on every section of a project, constantly sharing ideas and giving feedback at each stage. What type of interdependence is this?",
    choices: ["Pooled", "Sequential", "Reciprocal", "Outcome"],
    correctIndex: 2
  },
  {
    id: "q053", week: 4, difficulty: "hard", topic: "process_gain_and_process_loss",
    text: "What is an example of process loss?",
    choices: ["A team performs better than expected", "A group works faster because of competition", "A group makes poor decisions despite skilled members", "Individuals become more motivated in a group"],
    correctIndex: 2
  },
  {
    id: "q054", week: 4, difficulty: "hard", topic: "outcome_interdependence_and_team_rewards",
    text: "A company gives bonuses based on overall team performance instead of individual results. What concept does this represent?",
    choices: ["Reciprocal interdependence", "Outcome interdependence", "Social facilitation", "Resource allocation norm"],
    correctIndex: 1
  },
  {
    id: "q055", week: 4, difficulty: "medium", topic: "stages_of_group_development",
    text: "Which of the following situations BEST represents the performing stage?",
    choices: ["Members are unsure about roles and goals", "Members argue over leadership and responsibilities", "Members work efficiently toward goals", "Members celebrate completing the project"],
    correctIndex: 2
  },
  {
    id: "q056", week: 4, difficulty: "hard", topic: "group_decision-making_problems",
    text: "A highly skilled team makes a poor decision because members didn’t speak up and just agreed with each other. What is this an example of?",
    choices: ["Process gain", "Social facilitation", "Process loss", "High cohesiveness success"],
    correctIndex: 2
  },
  {
    id: "q057", week: 5, difficulty: "medium", topic: "decision_making_models",
    text: "A student chooses the first college that meets their basic needs instead of searching for the best possible option. This reflects:",
    choices: ["Rational decision making", "Intuitive decision making", "Bounded rationality", "Escalation"],
    correctIndex: 2
  },
  {
    id: "q058", week: 5, difficulty: "hard", topic: "attribution_theory",
    text: "Which of the following is the BEST example of a situational attribution?",
    choices: ["“He failed because he’s lazy.”", "“She’s late because traffic was terrible.", "“He’s rude because that’s his personality.”", "“She’s smart because she studies a lot.”"],
    correctIndex: 1
  },
  {
    id: "q059", week: 5, difficulty: "medium", topic: "perceptual_biases_and_errors",
    text: "Which of the following statements about the halo effect is TRUE?",
    choices: ["It occurs when people rely too heavily on the first piece of information they receive", "It occurs when a single positive trait influences overall judgment about a person or object", "It occurs when people believe they predicted an outcome after it happened", ". It occurs when individuals continue investing in a failing decision"],
    correctIndex: 1
  },
  {
    id: "q060", week: 5, difficulty: "medium", topic: "group_decision_making",
    text: "During a meeting, one member raises concerns, but others pressure them to stay quiet and support the group’s decision. This is:",
    choices: ["Consensus", "Rational decision making", "Groupthink", "Intuition"],
    correctIndex: 2
  },
  {
    id: "q061", week: 5, difficulty: "hard", topic: "decision-making_biases_and_errors",
    text: "A manager keeps investing money into a project even after clear evidence shows it will fail, because they don’t want to waste the resources already spent. This is:",
    choices: ["Overconfidence bias", "Anchoring heuristic", "Escalation of commitment", "Hindsight bias"],
    correctIndex: 2
  },
  {
    id: "q062", week: 7, difficulty: "medium", topic: "negotiation_and_conflict_management",
    text: "Which of the following BEST describes distributive bargaining?",
    choices: ["Both parties work together for a win-win solution", "One party gains only if the other loses something", "Conflict is avoided completely", "Both parties give up all interests equally"],
    correctIndex: 1
  },
  {
    id: "q063", week: 7, difficulty: "medium", topic: "conflict_process_and_emotions",
    text: "An employee becomes emotionally frustrated and hostile during a disagreement. This BEST describes:",
    choices: ["Perceived conflict", "Felt conflict", "Collaborating", "Clarification and justification"],
    correctIndex: 1
  },
  {
    id: "q064", week: 7, difficulty: "hard", topic: "functional_conflict_in_organizations",
    text: "Two coworkers disagree about the best way to complete a project, and the discussion leads to a better final result. According to the interactionist view, this can be functional conflict.",
    choices: ["TRUE", "FALSE", "", ""],
    correctIndex: 0
  },
  {
    id: "q065", week: 7, difficulty: "hard", topic: "cross-cultural_communication",
    text: "A manager clearly explains instructions, repeats key points, and sends written notes afterward to avoid confusion. This is MOST common in a:",
    choices: ["High-context culture", "Compromising culture", "Low-context culture", "Filtering process"],
    correctIndex: 2
  },
  {
    id: "q066", week: 7, difficulty: "medium", topic: "barriers_to_communication",
    text: "A team member only notices comments in a meeting that support their own opinion while ignoring opposing ideas. This is an example of:",
    choices: ["Filtering", "Information overload", "Selective perception", "Communication apprehension"],
    correctIndex: 2
  },
  {
    id: "q067", week: 7, difficulty: "medium", topic: "the_importance_of_context",
    text: "A foreign manager sits in on a meeting where the presenter gives very explicit instructions over and over again, not just verbally, but also on a slideshow. The presenter even hands out post meeting notes to make sure everyone understood the meeting. The foreign manager is offended that they're being treated like a child, and thought the meeting wasted time. The foreign manager is likely from which kind of culture?",
    choices: ["High Context Culture", "Low Context Culture", "Negotiation Culture", "Communication Culture"],
    correctIndex: 0
  },
  {
    id: "q068", week: 7, difficulty: "medium", topic: "barriers_to_communication",
    text: "Which barrier to effective communication fits the following description? \"Filtering what we see and hear to suit our own needs, often unconciously.\"",
    choices: ["Filtering", "Communication Apprehension", "Selective Perception", "Lying"],
    correctIndex: 2
  },
  {
    id: "q069", week: 7, difficulty: "easy", topic: "views_of_conflict",
    text: "Which type of conflict is alwasy dysfunctional?",
    choices: ["Task Conflict", "Interpersonal Conflict", "Process Conflict", "Managed Conflict"],
    correctIndex: 1
  },
  {
    id: "q070", week: 7, difficulty: "medium", topic: "the_conflict_process",
    text: "Joan and Sal are at a bakery and agree to buy one item to split. In their heads, Joan wants a chocolate croissant and Sal wants a lemon bar. Sal states that she wants a lemon bar and Joan immediately decides to agree to a lemon bar because she didn't care about it much and wants to make Sal happy. What conflict handling intention did Joan use?",
    choices: ["Competing", "Avoiding", "Collaborating", "Accommodating"],
    correctIndex: 3
  },
  {
    id: "q071", week: 7, difficulty: "medium", topic: "five_phases_of_negotiation",
    text: "When a concession is made during a negotiation, it usually shows what?",
    choices: ["Weakness and Depression", "Aggressiveness and Moving Backwards", "Cooperation and Moving Forwards", "Politeness and Good Sportsmanship"],
    correctIndex: 2
  },
  {
    id: "q072", week: 8, difficulty: "hard", topic: "motivation_overview",
    text: "A student continues studying for a difficult course throughout the semester despite doing poorly on earlier exams because they still want to succeed in the class. Which component of motivation does this BEST represent?",
    choices: ["Direction", "Intensity", "Persistence", "Extrinsic motivation"],
    correctIndex: 2
  },
  {
    id: "q073", week: 8, difficulty: "medium", topic: "maslow's_hierarchy_of_needs",
    text: "According to Maslow’s hierarchy of needs, which needs are considered the most basic?",
    choices: ["Esteem and self-actualization", "Love, belonging, and respect", "Physiological needs and safety/security needs", "Creativity and personal growth"],
    correctIndex: 2
  },
  {
    id: "q074", week: 8, difficulty: "hard", topic: "flow_theory",
    text: "According to flow theory, which situation is MOST likely to produce a state of flow?",
    choices: ["A highly skilled employee performing repetitive and easy work", "A worker completing unclear tasks with delayed feedback", "A person performing a challenging task that matches their skill level and provides immediate feedback", "An employee attempting a task far beyond their current abilities"],
    correctIndex: 2
  },
  {
    id: "q075", week: 8, difficulty: "easy", topic: "two-factor_theory",
    text: "According to two-factor theory, which of the following is considered a motivator factor?",
    choices: ["Pay", "Work conditions", "Recognition", "Supervision"],
    correctIndex: 2
  },
  {
    id: "q076", week: 8, difficulty: "medium", topic: "self-determination_theory",
    text: "According to self-determination theory, which of the following basic needs is fulfilled when employees feel they have control and choice over how they complete their work?",
    choices: ["Competence", "Relatedness", "Autonomy", "Persistence"],
    correctIndex: 2
  },
  {
    id: "q077", week: 8, difficulty: "hard", topic: "equity_theory",
    text: "According to equity theory, if an employee believes a coworker with the same experience and workload receives higher pay, the employee is MOST likely experiencing:",
    choices: ["Intrinsic motivation", "Equity sensitivity", "Perceived inequity", "Self-actualization"],
    correctIndex: 2
  },
  {
    id: "q078", week: 8, difficulty: "medium", topic: "expectancy_theory",
    text: "In expectancy theory, what term describes an employee’s belief that strong performance will lead to rewards or outcomes?",
    choices: ["Valence", "Expectancy", "Instrumentality", "Motivational force"],
    correctIndex: 2
  },
  {
    id: "q079", week: 8, difficulty: "hard", topic: "goal-setting_theory",
    text: "According to goal-setting theory, which type of goal is MOST likely to produce the highest level of motivation and performance?",
    choices: ["Easy and vague goals", "Difficult but attainable goals", "Simple \"do your best\" instructions", "Goals assigned without feedback"],
    correctIndex: 1
  },
  {
    id: "q080", week: 8, difficulty: "medium", topic: "self-efficacy",
    text: "According to the material, which method of increasing self-efficacy involves observing similar others successfully complete a task?",
    choices: ["Performance accomplishments", "Persuasion", "Vicarious experience", "Arousal"],
    correctIndex: 2
  },
  {
    id: "q081", week: 8, difficulty: "easy", topic: "job_characteristics_model",
    text: "According to the Job Characteristics Model, which core job dimension refers to the degree of freedom and independence employees have in scheduling and performing their work?",
    choices: ["Task Identity", "Skill variety", "Autonomy", "Task significance"],
    correctIndex: 2
  },
  {
    id: "q082", week: 9, difficulty: "hard", topic: "affect,_mood,_&_emotion",
    text: "Which of the following BEST distinguishes emotions from moods according to the material?",
    choices: ["Emotions are long-lasting and not directed at a target", "Moods are short-term reactions to specific events", "Emotions are discrete, short-duration feelings directed at a particular target", "Moods are always either positive or negative, while emotions are not"],
    correctIndex: 2
  },
  {
    id: "q083", week: 9, difficulty: "medium", topic: "anger_at_work",
    text: "According to the dual threshold model of workplace anger, what occurs when anger is expressed in a way that is considered inappropriate?",
    choices: ["Suppressed anger", "Expressed anger", "Deviant anger", "Functional anger"],
    correctIndex: 2
  },
  {
    id: "q084", week: 9, difficulty: "easy", topic: "happiness_at_work",
    text: "According to the material, happier employees are generally associated with:",
    choices: ["Higher turnover intentions and more absences", "Lower organizational commitment and weaker performance", "Greater cooperation, stronger performance, and fewer absences", "Increased counterproductive workplace behaviors"],
    correctIndex: 2
  },
  {
    id: "q085", week: 9, difficulty: "hard", topic: "emotional_labor",
    text: "Which of the following BEST describes the difference between surface acting and deep acting in emotional labor?",
    choices: ["Surface acting changes internal emotions, while deep acting fakes emotions externally", "Surface acting only occurs in service jobs, while deep acting occurs in management roles", "Surface acting involves faking emotional expressions, while deep acting involves trying to genuinely feel the required emotions", "Surface acting is always less stressful than deep acting"],
    correctIndex: 2
  },
  {
    id: "q086", week: 9, difficulty: "medium", topic: "emotional_contagion",
    text: "Emotional contagion refers to:",
    choices: ["The ability to hide emotions during workplace interactions", "The tendency for people to synchronize with and take on others’ emotions", "The formal display rules employees must follow in customer service roles", "The process of replacing negative emotions with positive ones"],
    correctIndex: 1
  },
  {
    id: "q087", week: 9, difficulty: "hard", topic: "stress_and_stressors",
    text: "A company-wide merger causes employees stress because of major organizational changes and uncertainty. Which category of work stressor does this BEST represent?",
    choices: ["Role stressor", "Career-related stressor", "Stressful change process", "Task-related stressor"],
    correctIndex: 2
  },
  {
    id: "q088", week: 9, difficulty: "medium", topic: "shift_work_as_a_stressor",
    text: "According to the material, why can rotating shift work create physiological problems for employees?",
    choices: ["It reduces employees’ need for overtime", "It disrupts circadian rhythms and makes adjustment more difficult", "It eliminates social interaction at work", "It makes employees less likely to work weekends"],
    correctIndex: 1
  },
  {
    id: "q089", week: 9, difficulty: "hard", topic: "felxible_work_arrangments",
    text: "Which statement BEST captures the tradeoff of flexible work arrangements described in the material?",
    choices: ["Flexible work arrangements consistently reduce stress and improve productivity without major drawbacks", "Flexible work arrangements can increase autonomy and satisfaction, but may also blur work-home boundaries and reduce social interaction", "Flexible work arrangements are mostly useful for low-skill workers because they create more predictable schedules", "Flexible work arrangements improve team functioning because everyone works on individualized schedules"],
    correctIndex: 1
  },
  {
    id: "q090", week: 9, difficulty: "medium", topic: "work-family_conflict",
    text: "Work-family conflict is based on the scarcity hypothesis, which suggests that:",
    choices: ["Employees become more productive when work and family demands compete", "Individuals have limited resources such as time, energy, and attention", "Family responsibilities are always more stressful than work responsibilities", "Organizations can eliminate conflict by offering higher pay"],
    correctIndex: 1
  },
  {
    id: "q091", week: 9, difficulty: "easy", topic: "the_stigma_of_dirty_work",
    text: "Which type of taint occurs when workers have direct contact with dirty or dangerous environments?",
    choices: ["Social taint", "Moral taint", "Physical taint", "Emotional taint"],
    correctIndex: 2
  },
  {
    id: "q092", week: 8, difficulty: "medium", topic: "motivation_overview",
    text: "Which part of motivation refers to how much effort someone chooses to expend?",
    choices: ["Direction", "Intensity", "Persistence", "Ability"],
    correctIndex: 1
  },
  {
    id: "q093", week: 8, difficulty: "hard", topic: "maslow’s_hierarchy_of_needs",
    text: "Which statement BEST reflects a major criticism of Maslow’s hierarchy?",
    choices: ["It focuses too much on external rewards", "It assumes motivation is always based on punishment avoidance", "It lacks strong empirical support for the strict ordering of needs", "It ignores physiological needs entirely"],
    correctIndex: 2
  },
  {
    id: "q094", week: 8, difficulty: "easy", topic: "flow_theory",
    text: "Flow is most closely associated with which experience?",
    choices: ["Feeling bored by an easy task", "Being “in the zone” and fully immersed in an activity", "Avoiding difficult work because of anxiety", "Working only for external rewards"],
    correctIndex: 1
  },
  {
    id: "q095", week: 8, difficulty: "medium", topic: "two-factor_theory",
    text: "According to two-factor theory, improving hygiene factors mainly helps employees:",
    choices: ["Become self-actualized", "Avoid dissatisfaction", "Develop stronger emotional contagion", "Increase task identity"],
    correctIndex: 1
  },
  {
    id: "q096", week: 8, difficulty: "hard", topic: "self-determination_theory",
    text: "Which of the following situations would MOST likely undermine intrinsic motivation?",
    choices: ["Giving employees autonomy over how they complete their work", "Helping employees feel competent through skill development", "Forcing someone to perform an enjoyable task only to avoid punishment", "Connecting work to employees’ personal values"],
    correctIndex: 2
  },
  {
    id: "q097", week: 8, difficulty: "medium", topic: "equity_theory",
    text: "In equity theory, employees compare their own input/outcome ratio to:",
    choices: ["Their supervisor’s personality traits", "The organization’s mission statement", "Another person’s input/outcome ratio", "The difficulty of the task itself"],
    correctIndex: 2
  },
  {
    id: "q098", week: 8, difficulty: "easy", topic: "expectancy_theory",
    text: "In expectancy theory, “valence” refers to:",
    choices: ["Whether effort leads to performance", "Whether performance leads to outcomes", "How valuable or attractive an outcome is to the employee", "How much feedback a person receives"],
    correctIndex: 2
  },
  {
    id: "q099", week: 8, difficulty: "medium", topic: "job_characteristics_model",
    text: "Which core job dimension refers to completing a whole, identifiable piece of work from beginning to end?",
    choices: ["Skill variety", "Task identity", "Task significance", "Task feedback"],
    correctIndex: 1
  },
  {
    id: "q100", week: 9, difficulty: "hard", topic: "work-family_conflict",
    text: "Why does the origin of work-family conflict matter when predicting outcomes?",
    choices: ["Because family-to-work conflict always causes turnover", "Because people tend to blame the domain they see as causing the conflict", "Because work-to-family conflict only affects physical health", "Because the scarcity hypothesis applies only to family responsibilities"],
    correctIndex: 1
  }
];

// Mirrored from data/events.json for file:// compatibility
const EVENTS = [
  {
    id: "e001",
    title: "Merger Announced",
    description: "All players lose 1 Morale as uncertainty spreads through the organization.",
    effect: { type: "all_players", stat: "morale", change: -1 }
  },
  {
    id: "e002",
    title: "Employee of the Quarter",
    description: "The current top performer earns a bonus recognition — +1 Performance.",
    effect: { type: "leader_only", stat: "performance", change: 1 }
  },
  {
    id: "e003",
    title: "Underdog Spotlight",
    description: "The player falling furthest behind gets a morale boost to help them catch up.",
    effect: { type: "lowest_only", stat: "morale", change: 2 }
  },
  {
    id: "e004",
    title: "Mandatory Compliance Training",
    description: "Everyone except the top performer loses 1 Productivity from the all-day training session.",
    effect: { type: "all_except_leader", stat: "productivity", change: -1 }
  },
  {
    id: "e005",
    title: "Budget Surplus",
    description: "A surprise windfall at the end of the fiscal quarter — all players gain 1 Productivity.",
    effect: { type: "all_players", stat: "productivity", change: 1 }
  }
];

const COLORS = ["red", "blue", "green", "yellow", "purple"];
const MAX_ROUNDS = 10;
const EVENT_ROUNDS = new Set([4, 7, 10]);

// ─── Audit configuration — tune during playtesting ────────────────────────────
// Audits are "use it or lose it" — they RESET (not accumulate) on reset rounds.
// AUDIT_INITIAL_COUNT — audits each player starts with at game start
// AUDIT_RESET_ROUNDS  — rounds where every player's audit count is RESET to
//                       AUDIT_RESET_VALUE, overwriting whatever they had
//                       (use an empty array [] for no resets)
// AUDIT_RESET_VALUE   — what audit count gets set to on a reset round
//
// Examples:
//   1 audit, no reset:              AUDIT_INITIAL_COUNT = 1, AUDIT_RESET_ROUNDS = []
//   1 per half, midpoint reset:     AUDIT_INITIAL_COUNT = 1, AUDIT_RESET_ROUNDS = [6],      AUDIT_RESET_VALUE = 1
//   Reset every 3 rounds:           AUDIT_INITIAL_COUNT = 1, AUDIT_RESET_ROUNDS = [4, 7, 10], AUDIT_RESET_VALUE = 1
//   More aggressive (2 per window): AUDIT_INITIAL_COUNT = 2, AUDIT_RESET_ROUNDS = [6],      AUDIT_RESET_VALUE = 2
const AUDIT_INITIAL_COUNT = 1;
const AUDIT_RESET_ROUNDS  = [6];  // audit count is reset to AUDIT_RESET_VALUE at the start of round 6
const AUDIT_RESET_VALUE   = 1;    // value players are reset to on each reset round

const state = {
  players: [],
  currentPlayerIndex: 0,
  currentRound: 1,
  currentScenario: null,
  usedQuestionIds: new Set(),
  usedEventIds: new Set(),
  auditContext: null,
  modalTimer: null
};

// ─── Setup ───────────────────────────────────────────────────────────────────

function initSetup() {
  addPlayerRow();
  addPlayerRow();
  document.getElementById("add-player-btn").addEventListener("click", addPlayerRow);
  document.getElementById("start-game-btn").addEventListener("click", startGame);
}

function addPlayerRow() {
  const container = document.getElementById("player-inputs");
  const index = container.querySelectorAll(".player-row").length;
  if (index >= 5) return;

  const div = document.createElement("div");
  div.className = "player-row";
  div.innerHTML = `
    <label>Player ${index + 1}:</label>
    <input type="text" class="player-name" placeholder="Enter name" maxlength="20">
    <select class="player-color">
      ${COLORS.map((c, i) => `<option value="${c}" ${i === index ? "selected" : ""}>${c[0].toUpperCase() + c.slice(1)}</option>`).join("")}
    </select>
    <button class="btn-remove-player" type="button">✕</button>
  `;
  container.appendChild(div);
  div.querySelector('.player-name').addEventListener('input', function() {
    const pos = this.selectionStart;
    this.value = this.value.toUpperCase();
    this.setSelectionRange(pos, pos);
  });
  div.querySelector('.btn-remove-player').addEventListener('click', () => removePlayerRow(div));
  document.getElementById("add-player-btn").disabled = container.querySelectorAll(".player-row").length >= 5;
  updateRemoveButtons();
}

function removePlayerRow(rowEl) {
  const container = document.getElementById("player-inputs");
  if (container.querySelectorAll(".player-row").length <= 2) return;
  rowEl.remove();
  container.querySelectorAll(".player-row").forEach((row, i) => {
    row.querySelector("label").textContent = `Player ${i + 1}:`;
  });
  document.getElementById("add-player-btn").disabled = container.querySelectorAll(".player-row").length >= 5;
  updateRemoveButtons();
}

function updateRemoveButtons() {
  const container = document.getElementById("player-inputs");
  const rows = container.querySelectorAll(".player-row");
  const showRemove = rows.length > 2;
  rows.forEach(row => {
    const btn = row.querySelector(".btn-remove-player");
    if (btn) btn.classList.toggle("hidden", !showRemove);
  });
}

function startGame() {
  const rows = document.querySelectorAll(".player-row");
  const errorEl = document.getElementById("setup-error");
  errorEl.textContent = "";

  const players = [];
  const usedColors = new Set();

  for (let i = 0; i < rows.length; i++) {
    const name = rows[i].querySelector(".player-name").value.trim().toUpperCase();
    const color = rows[i].querySelector(".player-color").value;
    if (!name) { errorEl.textContent = `Player ${i + 1} needs a name.`; return; }
    if (usedColors.has(color)) { errorEl.textContent = `Two players can't share the same color. Check Player ${i + 1}.`; return; }
    usedColors.add(color);
    players.push({
      name,
      color,
      stats: { Morale: 7, Productivity: 7, Performance: 7 },
      auditsRemaining: AUDIT_INITIAL_COUNT
    });
  }

  state.players = players;
  state.currentPlayerIndex = 0;
  state.currentRound = 1;
  state.usedQuestionIds = new Set();
  state.usedEventIds = new Set();
  state.auditContext = null;

  showScreen("game");
  renderGameScreen();
}

function playAgain() {
  state.players = [];
  state.currentPlayerIndex = 0;
  state.currentRound = 1;
  state.currentScenario = null;
  state.usedQuestionIds = new Set();
  state.usedEventIds = new Set();
  state.auditContext = null;

  const container = document.getElementById("player-inputs");
  container.innerHTML = "";
  document.getElementById("add-player-btn").disabled = false;
  document.getElementById("setup-error").textContent = "";
  addPlayerRow();
  addPlayerRow();

  showScreen("setup");
}

// ─── Game Screen ──────────────────────────────────────────────────────────────

function renderGameScreen(floatTargets = []) {
  const player = state.players[state.currentPlayerIndex];
  document.getElementById("round-display").textContent = `Round ${state.currentRound} / ${MAX_ROUNDS}`;
  document.getElementById("turn-display").textContent = `${player.name}'s Turn`;
  document.getElementById("turn-display").style.color = player.color;

  renderStats(floatTargets);

  const auditBtn = document.getElementById("audit-btn");
  const auditCount = player.auditsRemaining;
  auditBtn.textContent = auditCount === 0 ? "AUDIT (USED)" : `AUDIT (${auditCount} LEFT)`;
  auditBtn.disabled = auditCount === 0;

  document.getElementById("action-buttons").style.display = "flex";
  document.getElementById("scenario-display").style.display = "none";
}

function renderStats(floatTargets = []) {
  const panel = document.getElementById("stats-panel");
  panel.dataset.playerCount = state.players.length;

  panel.innerHTML = state.players.map((p, idx) => {
    const isActive = idx === state.currentPlayerIndex;
    return `
    <div class="player-stat-card${isActive ? " active-player" : ""}">
      <div class="crt-bezel">
        <div class="crt-bezel-top">
          <div class="crt-power-led" style="background:${displayColor(p.color)}"></div>
        </div>
        <div class="crt-screen">
          <span class="player-name-label" style="color:${displayColor(p.color)}">${p.name}</span>
          ${Object.entries(p.stats).map(([k, v]) => {
            const ft = floatTargets.find(f => f.playerIdx === idx && f.stat === k);
            const flashClass = ft ? (ft.delta > 0 ? " stat-flash-gain" : " stat-flash-loss") : "";
            return `
            <div class="stat-row">
              <span class="stat-label">${k}</span>
              <div class="stat-bar-track">
                <div class="stat-bar-fill stat-bar-${k.toLowerCase()}" style="width:${(v / 15 * 100).toFixed(1)}%"></div>
              </div>
              <span class="stat-value${flashClass}" data-stat="${k}">${v}</span>
            </div>`;
          }).join("")}
        </div>
      </div>
    </div>`;
  }).join("");

  // Spawn floating delta indicators after DOM is built
  // Walk up from span to .player-stat-card to get correct absolute top offset
  const cards = panel.querySelectorAll(".player-stat-card");
  for (const { playerIdx, stat, delta } of floatTargets) {
    const card = cards[playerIdx];
    if (!card) continue;
    const span = card.querySelector(`[data-stat="${stat}"]`);
    if (!span) continue;
    let topOffset = 0;
    let el = span;
    while (el && el !== card) {
      topOffset += el.offsetTop;
      el = el.offsetParent;
    }
    const float = document.createElement("span");
    float.className = `stat-float ${delta > 0 ? "gain" : "loss"}`;
    float.textContent = (delta > 0 ? "+" : "") + delta;
    float.style.top = topOffset + "px";
    card.appendChild(float);
    setTimeout(() => float.remove(), 1900);
  }
}

function drawScenario() {
  const scenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
  state.currentScenario = scenario;
  const player = state.players[state.currentPlayerIndex];

  document.getElementById("scenario-text").textContent = scenario.text.replace('[PLACEHOLDER]', '').trim();

  document.querySelectorAll(".response-btn").forEach(btn => {
    const choice = btn.dataset.choice;
    const key = choice.toLowerCase();
    const r = scenario.responses[key];
    btn.innerHTML = `<span class="response-type">${choice}</span><span class="response-label">${r.label}</span>${buildResponseStatLines(choice, scenario, player)}`;
  });

  document.getElementById("action-buttons").style.display = "none";
  document.getElementById("scenario-display").style.display = "block";
}

function buildResponseStatLines(type, scenario, player) {
  const r = scenario.responses[type.toLowerCase()];
  const primary = toStatKey(r.primaryStat);

  function seg(delta, statName) {
    const val = player.stats[statName];
    let cls = '';
    if (delta > 0 && val === 15) cls = ' seg-maxed';
    else if (delta < 0 && val === 0) cls = ' seg-min';
    const amtStr = delta > 0 ? `+${delta}` : `${delta}`;
    return `<span class="stat-seg${cls}">${amtStr} ${statName}</span>`;
  }

  if (type === 'SAFE') {
    return `<span class="response-stat-line stat-gain">✓ ${seg(1, primary)}</span>`;
  }
  if (type === 'KNOWLEDGE') {
    const secondary = r.secondaryStat ? toStatKey(r.secondaryStat) : null;
    const correctPart = secondary
      ? `${seg(2, primary)} / ${seg(1, secondary)}`
      : seg(2, primary);
    return `<span class="response-stat-line stat-gain">✓ ${correctPart}</span>` +
           `<span class="response-stat-line stat-loss">✗ ${seg(-1, primary)}</span>`;
  }
  return `<span class="response-stat-line stat-gain">✓ ${seg(3, primary)}</span>` +
         `<span class="response-stat-line stat-loss">✗ ${seg(-2, primary)}</span>`;
}

// ─── Response Handling ────────────────────────────────────────────────────────

function handleResponse(choice) {
  let difficulty, timeLimit;
  if (choice === "SAFE") {
    difficulty = "easy";
    timeLimit  = 30;
  } else if (choice === "KNOWLEDGE") {
    difficulty = "medium";
    timeLimit  = 20;
  } else {
    difficulty = "hard";
    timeLimit  = 15;
  }
  const question = pickQuestion(difficulty);
  showQuestionModal(question, timeLimit, choice);
}

function pickQuestion(difficulty) {
  let pool = QUESTIONS.filter(q => q.difficulty === difficulty && !state.usedQuestionIds.has(q.id));
  if (pool.length === 0) {
    console.warn(`[Performance Review] Question pool exhausted for "${difficulty}". Reshuffling.`);
    QUESTIONS.filter(q => q.difficulty === difficulty).forEach(q => state.usedQuestionIds.delete(q.id));
    pool = QUESTIONS.filter(q => q.difficulty === difficulty);
  }
  const question = pool[Math.floor(Math.random() * pool.length)];
  state.usedQuestionIds.add(question.id);
  return question;
}

// ─── Question Modal ───────────────────────────────────────────────────────────

function showQuestionModal(question, timeLimit, type, auditTargetName) {
  const timerRing = document.getElementById("modal-timer-ring");
  const timerText = document.getElementById("modal-timer-text");
  const badge     = document.getElementById("modal-difficulty-badge");
  const qText     = document.getElementById("modal-question-text");
  const choicesEl = document.getElementById("modal-choices");
  const feedback  = document.getElementById("modal-feedback");

  if (type === "AUDIT") {
    badge.textContent = `AUDIT: ${auditTargetName} must answer`;
    badge.className = "audit";
  } else if (type === "BOLD") {
    badge.textContent = "Bold Question";
    badge.className = "bold";
  } else if (type === "SAFE") {
    badge.textContent = "Safe Question — No Penalty";
    badge.className = "safe";
  } else {
    badge.textContent = "Knowledge Question";
    badge.className = "knowledge";
  }

  qText.textContent = question.text;
  feedback.textContent = "";
  feedback.className   = "modal-feedback";
  timerRing.className  = "";

  let timeLeft = timeLimit;
  timerText.textContent = timeLeft;

  const timerBarFill = document.getElementById("modal-timer-bar-fill");
  if (timerBarFill) {
    timerBarFill.style.transition = "none";
    timerBarFill.style.width = "100%";
    timerBarFill.classList.remove("urgent");
    // Double rAF: first frame commits the reset, second frame starts the drain transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        timerBarFill.style.transition = `width ${timeLimit}s linear, background 0.3s`;
        timerBarFill.style.width = "0%";
      });
    });
  }

  // Shuffle choices independently each time the question is shown
  const order = [0, 1, 2, 3];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const displayQ = {
    choices: order.map(i => question.choices[i]),
    correctIndex: order.indexOf(question.correctIndex)
  };

  choicesEl.innerHTML = displayQ.choices.map((c, i) =>
    `<button class="choice-btn" data-index="${i}">
      <span class="choice-key">${String.fromCharCode(65 + i)}</span>
      <span class="choice-text">${c}</span>
    </button>`
  ).join("");

  document.getElementById("question-modal").classList.add("active");

  choicesEl.querySelectorAll(".choice-btn").forEach(btn => {
    btn.addEventListener("click", () => handleAnswer(parseInt(btn.dataset.index), displayQ, type));
  });

  state.modalTimer = setInterval(() => {
    timeLeft--;
    timerText.textContent = timeLeft;
    if (timeLeft <= 5) {
      timerRing.classList.add("urgent");
      const fill = document.getElementById("modal-timer-bar-fill");
      if (fill) fill.classList.add("urgent");
    }
    if (timeLeft <= 0) {
      clearModalTimer();
      handleAnswer(-1, displayQ, type);
    }
  }, 1000);
}

function handleAnswer(selectedIndex, question, type) {
  clearModalTimer();

  const choicesEl = document.getElementById("modal-choices");
  const feedback  = document.getElementById("modal-feedback");

  choicesEl.querySelectorAll(".choice-btn").forEach(btn => { btn.disabled = true; });

  const isCorrect = selectedIndex === question.correctIndex;

  if (selectedIndex >= 0) {
    choicesEl.querySelector(`[data-index="${selectedIndex}"]`).classList.add(isCorrect ? "correct" : "incorrect");
  }
  if (!isCorrect) {
    choicesEl.querySelector(`[data-index="${question.correctIndex}"]`).classList.add("correct");
  }

  feedback.textContent = selectedIndex === -1 ? "Time's up!" : (isCorrect ? "Correct!" : "Incorrect");
  feedback.className = `modal-feedback ${isCorrect ? "correct" : "incorrect"}`;

  setTimeout(() => {
    closeModal();

    if (type === "AUDIT") {
      const { auditorIdx, targetIdx } = state.auditContext;
      const changeList = isCorrect
        ? [{ playerIdx: targetIdx, stat: "Performance", delta: 1 }, { playerIdx: auditorIdx, stat: "Performance", delta: -1 }]
        : [{ playerIdx: auditorIdx, stat: "Performance", delta: 1 }, { playerIdx: targetIdx, stat: "Performance", delta: -1 }];
      state.players[auditorIdx].auditsRemaining = Math.max(0, state.players[auditorIdx].auditsRemaining - 1);
      state.auditContext = null;
      const floatTargets = applyMultiStatChanges(changeList);
      advanceTurn(floatTargets);
    } else {
      const scenario  = state.currentScenario;
      const playerIdx = state.currentPlayerIndex;
      const changes   = buildStatChanges(type, scenario, isCorrect);
      const floatTargets = applyStatChanges(playerIdx, changes);
      advanceTurn(floatTargets);
    }
  }, 2000);
}

function buildStatChanges(type, scenario, isCorrect) {
  if (type === "SAFE") {
    if (isCorrect) {
      const primary = toStatKey(scenario.responses.safe.primaryStat);
      return [{ stat: primary, delta: 1 }];
    }
    return [];
  }
  if (type === "KNOWLEDGE") {
    const primary   = toStatKey(scenario.responses.knowledge.primaryStat);
    const secondary = scenario.responses.knowledge.secondaryStat
      ? toStatKey(scenario.responses.knowledge.secondaryStat)
      : null;
    if (isCorrect) {
      const changes = [{ stat: primary, delta: 2 }];
      if (secondary) changes.push({ stat: secondary, delta: 1 });
      return changes;
    }
    return [{ stat: primary, delta: -1 }];
  }
  // BOLD
  const primary = toStatKey(scenario.responses.bold.primaryStat);
  return [{ stat: primary, delta: isCorrect ? 3 : -2 }];
}

function applyStatChanges(playerIdx, changes) {
  return applyMultiStatChanges(changes.map(c => ({ playerIdx, ...c })));
}

function applyMultiStatChanges(changeList) {
  const floatTargets = [];
  for (const { playerIdx, stat, delta } of changeList) {
    const player = state.players[playerIdx];
    const before = player.stats[stat];
    player.stats[stat] = Math.min(15, Math.max(0, player.stats[stat] + delta));
    const actual = player.stats[stat] - before;
    if (actual !== 0) floatTargets.push({ playerIdx, stat, delta: actual });
  }
  return floatTargets;
}

function closeModal() {
  document.getElementById("question-modal").classList.remove("active");
}

function clearModalTimer() {
  if (state.modalTimer) {
    clearInterval(state.modalTimer);
    state.modalTimer = null;
  }
}

// ─── Audit ────────────────────────────────────────────────────────────────────

function handleAuditClick() {
  const player = state.players[state.currentPlayerIndex];
  if (player.auditsRemaining <= 0) return;

  document.getElementById("action-buttons").style.display = "none";
  showAuditTargetModal();
}

function showAuditTargetModal() {
  const auditorIdx = state.currentPlayerIndex;
  const modal = document.getElementById("audit-target-modal");
  const btnsEl = document.getElementById("audit-target-buttons");

  btnsEl.innerHTML = state.players
    .map((p, i) => ({ p, i }))
    .filter(({ i }) => i !== auditorIdx)
    .map(({ p, i }) =>
      `<button class="audit-target-btn" data-target="${i}">
        <span class="audit-color-swatch" style="background:${p.color}"></span>
        <span class="audit-player-name">${p.name}</span>
      </button>`
    ).join("");

  modal.classList.add("active");

  btnsEl.querySelectorAll(".audit-target-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetIdx = parseInt(btn.dataset.target);
      modal.classList.remove("active");
      startAudit(auditorIdx, targetIdx);
    });
  });
}

function startAudit(auditorIdx, targetIdx) {
  state.auditContext = { auditorIdx, targetIdx };
  const target = state.players[targetIdx];
  const question = pickQuestion("medium");
  showQuestionModal(question, 15, "AUDIT", target.name);
}

// ─── Event Cards ──────────────────────────────────────────────────────────────

function fireEventCard() {
  const pool = EVENTS.filter(e => !state.usedEventIds.has(e.id));
  if (pool.length === 0) {
    renderGameScreen();
    return;
  }

  const event = pool[Math.floor(Math.random() * pool.length)];
  state.usedEventIds.add(event.id);

  const affectedIndices = getAffectedPlayerIndices(event.effect.type);

  showEventModal(event, affectedIndices, () => {
    const stat = toStatKey(event.effect.stat);
    const changeList = affectedIndices.map(idx => ({ playerIdx: idx, stat, delta: event.effect.change }));
    const floatTargets = applyMultiStatChanges(changeList);
    renderGameScreen(floatTargets);
  });
}

function getAffectedPlayerIndices(effectType) {
  const leaderIdx = getLeaderIdx();
  const lowestIdx = getLowestIdx();
  switch (effectType) {
    case "all_players":       return state.players.map((_, i) => i);
    case "leader_only":       return [leaderIdx];
    case "lowest_only":       return [lowestIdx];
    case "all_except_leader": return state.players.map((_, i) => i).filter(i => i !== leaderIdx);
    default:                  return [];
  }
}

function showEventModal(event, affectedIndices, onClose) {
  document.getElementById("event-title").textContent = event.title;
  document.getElementById("event-description").textContent = event.description;

  const affectedEl = document.getElementById("event-affected");
  if (affectedIndices.length === 0) {
    affectedEl.textContent = "No players affected.";
  } else {
    const names = affectedIndices.map(i => state.players[i].name).join(", ");
    const statName = toStatKey(event.effect.stat);
    const change = event.effect.change;
    const changeStr = change > 0 ? `+${change}` : `${change}`;
    affectedEl.innerHTML = `Affected: <strong>${names}</strong><br>${statName} ${changeStr}`;
  }

  document.getElementById("event-modal").classList.add("active");

  const closeBtn = document.getElementById("event-close-btn");
  const handler = () => {
    closeBtn.removeEventListener("click", handler);
    document.getElementById("event-modal").classList.remove("active");
    onClose();
  };
  closeBtn.addEventListener("click", handler);
}

// ─── Turn Advancement ─────────────────────────────────────────────────────────

function advanceTurn(floatTargets = []) {
  state.currentPlayerIndex++;
  if (state.currentPlayerIndex >= state.players.length) {
    state.currentPlayerIndex = 0;
    state.currentRound++;
  }

  if (state.currentRound > MAX_ROUNDS) {
    showGameOver();
    return;
  }

  handleRoundStart(floatTargets);
}

// Handles ordered round-start effects for the first player of each round:
// (a) audit recharge  →  (b) event card  →  (c) render game screen
function handleRoundStart(floatTargets) {
  if (state.currentPlayerIndex !== 0) {
    renderGameScreen(floatTargets);
    return;
  }

  const shouldReset     = AUDIT_RESET_ROUNDS.includes(state.currentRound);
  const shouldFireEvent = EVENT_ROUNDS.has(state.currentRound);

  if (shouldReset) {
    state.players.forEach(p => { p.auditsRemaining = AUDIT_RESET_VALUE; });
    showAuditResetNotification(() => {
      if (shouldFireEvent) {
        fireEventCard();
      } else {
        renderGameScreen(floatTargets);
      }
    });
  } else if (shouldFireEvent) {
    fireEventCard();
  } else {
    renderGameScreen(floatTargets);
  }
}

function showAuditResetNotification(callback) {
  const nextReset = AUDIT_RESET_ROUNDS.find(r => r > state.currentRound);
  const deadline  = nextReset ? `round ${nextReset}` : "game end";

  document.getElementById("event-title").textContent = "Audits Refreshed";
  document.getElementById("event-description").textContent =
    `All players' audits have been reset to ${AUDIT_RESET_VALUE}. Use them before ${deadline}!`;
  document.getElementById("event-affected").textContent = "";

  const modal = document.getElementById("event-modal");
  modal.classList.add("active");

  const closeBtn = document.getElementById("event-close-btn");
  let dismissed = false;

  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    clearTimeout(autoTimer);
    closeBtn.removeEventListener("click", dismiss);
    modal.classList.remove("active");
    callback();
  };

  closeBtn.addEventListener("click", dismiss);
  const autoTimer = setTimeout(dismiss, 3500);
}

// ─── Game Over ────────────────────────────────────────────────────────────────

function showGameOver() {
  showScreen("gameover");

  const sorted = [...state.players].sort((a, b) => {
    const totalA = totalStats(a), totalB = totalStats(b);
    if (totalB !== totalA) return totalB - totalA;
    if (b.stats.Performance !== a.stats.Performance) return b.stats.Performance - a.stats.Performance;
    return b.stats.Morale - a.stats.Morale;
  });

  // ── Winner detection (logic unchanged) ───────────────────────────
  const maxTotal = Math.max(...state.players.map(totalStats));
  let contenders = state.players.filter(p => totalStats(p) === maxTotal);
  let winnerPlayer = null, tiebreakLabel = '';

  if (contenders.length === 1) {
    winnerPlayer = contenders[0];
  } else {
    const maxPerf = Math.max(...contenders.map(p => p.stats.Performance));
    contenders = contenders.filter(p => p.stats.Performance === maxPerf);
    if (contenders.length === 1) {
      winnerPlayer = contenders[0];
      tiebreakLabel = 'PERF TIEBREAK';
    } else {
      const maxMorale = Math.max(...contenders.map(p => p.stats.Morale));
      contenders = contenders.filter(p => p.stats.Morale === maxMorale);
      if (contenders.length === 1) {
        winnerPlayer = contenders[0];
        tiebreakLabel = 'MORALE TIEBREAK';
      }
      // else: true tie, winnerPlayer stays null
    }
  }

  // ── Podium card builder ───────────────────────────────────────────
  const placeLabels = ['', '1ST', '2ND', '3RD'];

  function podiumStatRows(p) {
    return Object.entries(p.stats).map(([k, v]) => `
      <div class="stat-row">
        <span class="stat-label">${k}</span>
        <div class="stat-bar-track">
          <div class="stat-bar-fill stat-bar-${k.toLowerCase()}" style="width:${(v / 15 * 100).toFixed(1)}%"></div>
        </div>
        <span class="stat-value">${v}</span>
      </div>`).join('');
  }

  function makePodiumSlot(p, place) {
    if (!p) return `<div class="podium-slot podium-slot-empty"></div>`;
    const isFirst = place === 1;
    const crownEmoji = winnerPlayer ? '👑' : '🤝';
    const crownHtml  = isFirst ? `<div class="podium-crown">${crownEmoji}</div>` : '';
    const tieHtml    = isFirst && !winnerPlayer ? `<div class="podium-tie-note">IT'S A TIE!</div>` : '';
    const tbHtml     = isFirst && tiebreakLabel ? `<div class="podium-tie-note">${tiebreakLabel}</div>` : '';
    return `
      <div class="podium-slot">
        <div class="podium-card podium-place-${place}">
          ${crownHtml}
          <div class="podium-player-name" style="color:${p.color}">${p.name}</div>
          ${tieHtml}${tbHtml}
          <div class="podium-player-stats">${podiumStatRows(p)}</div>
          <div class="podium-total">TOTAL: ${totalStats(p)}</div>
        </div>
        <div class="podium-platform podium-platform-${place}">${placeLabels[place]}</div>
      </div>`;
  }

  // Display order: 2nd left, 1st center, 3rd right
  const podiumHtml = `<div class="podium-row">
    ${makePodiumSlot(sorted[1] || null, 2)}
    ${makePodiumSlot(sorted[0], 1)}
    ${makePodiumSlot(sorted[2] || null, 3)}
  </div>`;

  const restPlayers = sorted.slice(3);
  const restLabels  = ['4TH', '5TH'];
  const restHtml = restPlayers.length ? `
    <div class="podium-rest">
      ${restPlayers.map((p, i) => `
        <div class="podium-rest-item" style="border-color:${p.color}">
          <span class="podium-rest-place">${restLabels[i]}</span>
          <span class="podium-rest-name" style="color:${p.color}">${p.name}</span>
          <span class="podium-rest-total">TOTAL: ${totalStats(p)}</span>
          <span class="podium-rest-stats">${Object.entries(p.stats).map(([k,v]) => `${k.slice(0,4)}: ${v}`).join(' | ')}</span>
        </div>`).join('')}
    </div>` : '';

  document.getElementById("final-stats").innerHTML = podiumHtml + restHtml;
}

// ─── Navigation & Modals ─────────────────────────────────────────────────────

function returnToTitle() {
  clearModalTimer();
  state.players = [];
  state.currentPlayerIndex = 0;
  state.currentRound = 1;
  state.currentScenario = null;
  state.usedQuestionIds = new Set();
  state.usedEventIds = new Set();
  state.auditContext = null;

  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));

  const container = document.getElementById("player-inputs");
  container.innerHTML = "";
  document.getElementById("add-player-btn").disabled = false;
  document.getElementById("setup-error").textContent = "";
  addPlayerRow();
  addPlayerRow();

  showScreen("setup");
}

function showConfirm(message, onConfirm) {
  document.getElementById("confirm-message").textContent = message;
  document.getElementById("confirm-modal").classList.add("active");

  const okBtn = document.getElementById("confirm-ok-btn");
  const handler = () => {
    okBtn.removeEventListener("click", handler);
    document.getElementById("confirm-modal").classList.remove("active");
    onConfirm();
  };
  okBtn.addEventListener("click", handler);
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function totalStats(player) {
  return Object.values(player.stats).reduce((a, b) => a + b, 0);
}

function getLeaderIdx() {
  return state.players.reduce((best, p, i) =>
    totalStats(p) > totalStats(state.players[best]) ? i : best, 0);
}

function getLowestIdx() {
  return state.players.reduce((lowest, p, i) =>
    totalStats(p) < totalStats(state.players[lowest]) ? i : lowest, 0);
}

function toStatKey(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

// CSS named colors that are too dark to read on the CRT screen background
const SCREEN_COLORS = {
  blue:   '#5BAAEE',
  purple: '#B468D4',
  green:  '#4EC94E',
};
function displayColor(c) { return SCREEN_COLORS[c] || c; }

function showScreen(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(`screen-${name}`).classList.add("active");
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  initSetup();

  document.getElementById("draw-scenario-btn").addEventListener("click", drawScenario);
  document.getElementById("audit-btn").addEventListener("click", handleAuditClick);
  document.getElementById("play-again-btn").addEventListener("click", playAgain);

  document.querySelectorAll(".response-btn").forEach(btn => {
    btn.addEventListener("click", () => handleResponse(btn.dataset.choice));
  });

  // HOW TO PLAY (title screen)
  document.getElementById("howtoplay-open-btn").addEventListener("click", () => {
    document.getElementById("howtoplay-modal").classList.add("active");
  });
  document.getElementById("howtoplay-close-btn").addEventListener("click", () => {
    document.getElementById("howtoplay-modal").classList.remove("active");
  });

  // Quick Reference (in-game "?" button)
  document.getElementById("rules-quick-btn").addEventListener("click", () => {
    document.getElementById("quickref-modal").classList.add("active");
  });
  document.getElementById("quickref-close-btn").addEventListener("click", () => {
    document.getElementById("quickref-modal").classList.remove("active");
  });

  // In-game menu
  document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("menu-modal").classList.add("active");
  });
  document.getElementById("menu-resume-btn").addEventListener("click", () => {
    document.getElementById("menu-modal").classList.remove("active");
  });
  document.getElementById("menu-restart-btn").addEventListener("click", () => {
    showConfirm("Restart game? All progress will be lost.", () => {
      document.getElementById("menu-modal").classList.remove("active");
      playAgain();
    });
  });
  document.getElementById("menu-title-btn").addEventListener("click", () => {
    showConfirm("Return to title? All progress will be lost.", () => {
      document.getElementById("menu-modal").classList.remove("active");
      returnToTitle();
    });
  });

  // Game Over — Return to Title
  document.getElementById("gameover-title-btn").addEventListener("click", returnToTitle);

  // Confirm modal — cancel button
  document.getElementById("confirm-cancel-btn").addEventListener("click", () => {
    document.getElementById("confirm-modal").classList.remove("active");
  });
});
