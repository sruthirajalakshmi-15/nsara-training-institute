// src/lib/course-data.ts

// This file centralizes all your course data for easy management and static generation.

import {
  Code,             // General IT/Software
  Database,         // Data Science, Data Analysis
  BrainCircuit,     // AI
  Globe,            // Digital Marketing
  FlaskConical,     // Business & Management (general icon)
  HardHat,          // Safety & Environment
  Sprout,           // Green Building & Sustainability
  Languages,        // Language & Soft Skills
  LayoutGrid,       // Engineering & Design (general icon)
  HeartPulse,       // Healthcare & Life Sciences (general icon)
  Rocket,           // Aerospace & Defense
  Award,           // Certifications & Professional Development
  Monitor,          // Includes: video hours, online learning
  Briefcase,        // Includes: projects, career
  UserCheck,        // Includes: mentorship
  Trophy,           // Includes: certification, job placement
  BookOpen,         // Includes: modules, learning materials
  Clock,            // Includes: duration
  BarChart3,        // Course level/analytics
  FileText,         // Curriculum/documentation
  Check,            // Requirements
  Users,            // Instructors
  Star,             // Testimonials/Rating
  BookText,         // For PMP (Project Mgmt specific)
  Building,         // For CFM/BIM/LEED (Facilities/Building specific)
  PencilRuler,      // For AutoCAD/SketchUp/3ds Max (Design specific)
  Stethoscope,      // For Medical Coding
  Table,            // For Excel
  Presentation,     // For PowerPoint
  MessageSquareText, // For Spoken English
  Smartphone,       // For Mobile Dev
  Zap,              // For Cloud Architecture
  ShieldCheck,      // For Cybersecurity
  Puzzle,           // For Blockchain
  Hammer,           // For Mechanical Design
  Settings,         // For Automation
  Palette,          // For Photoshop
  LifeBuoy          // For Emergency Medical Technician / First Aid
} from 'lucide-react'; // Ensure all used icons are imported from lucide-react


// Define types for consistency and type-safety
export type SubCourseItem = {
  name: string; // Short name, e.g., "Python Programming"
  slug: string; // Unique URL slug, e.g., "python-programming"
  fullTitle?: string; // Longer, more descriptive title for course page
  description?: string; // Short marketing description for listings
  details?: { // Detailed content for the individual course page ([slug])
    subtitle?: string; // Subtitle for hero section
    overview?: string; // Long overview paragraph
    whatYouWillLearn?: string[]; // Key learning outcomes (bullet points)
    requirements?: string[]; // Prerequisites (bullet points)
    curriculum?: { title: string; modules: string[] }[]; // Module-based curriculum
    instructors?: { name: string; role: string; image: string }[]; // List of instructors
    testimonials?: { name: string; role: string; image: string; content: string; rating: number }[]; // Testimonials
    faq?: { q: string; a: string }[]; // FAQs
    price?: string;
    duration?: string;
    level?: string; // e.g., "Beginner", "Advanced"
    tags?: string[]; // Keywords/technologies
    certification?: string; // Certification name (e.g., "PMI-Aligned")
    includes?: { icon: any; text: string }[]; // Features included (e.g., "120+ hours of video")
    softwareCovered?: string[]; // Specific software used
  };
};

export type CourseGroup = {
  name: string; // e.g., "Programming Languages"
  slug: string;
  subcourses: SubCourseItem[]; // Array of specific courses within this group
};

export type CourseCategory = {
  name: string; // e.g., "Information Technology & Software"
  slug: string;
  icon: any; // LucideReact icon component for the category
  courses: CourseGroup[];
};

// Main Course Data Structure
export const allCourseCategories: CourseCategory[] = [
  {
    name: "Information Technology & Software",
    slug: "information-technology-software",
    icon: Code,
    courses: [
      {
        name: "Programming Languages",
        slug: "programming-languages",
        subcourses: [
          {
            name: "Python Programming",
            slug: "python-programming",
            fullTitle: "Python Programming",
            description: "Master the versatile Python language for various applications, from web development to data analysis.",
            details: {
              overview: "This course is designed to provide a comprehensive understanding of Python, from basic syntax to advanced concepts, enabling you to write efficient and scalable code.",
              whatYouWillLearn: [
                "Fundamental Python syntax and data structures",
                "Object-Oriented Programming (OOP) in Python",
                "File I/O and exception handling",
                "Working with popular Python libraries",
                "Developing practical applications with Python",
              ],
              requirements: ["Basic computer literacy."],
              curriculum: [
                { title: "Module 1: Python Basics", modules: ["Introduction to Python", "Variables and Data Types", "Operators", "Control Flow (if/else, loops)"] },
                { title: "Module 2: Data Structures", modules: ["Lists, Tuples, Sets, Dictionaries", "Strings and String Manipulation"] },
                { title: "Module 3: Functions and Modules", modules: ["Defining Functions", "Lambda Functions", "Modules and Packages"] },
                { title: "Module 4: Object-Oriented Python", modules: ["Classes and Objects", "Inheritance and Polymorphism"] },
                { title: "Module 5: File Handling & Exceptions", modules: ["Reading and Writing Files", "Error Handling"] },
                { title: "Module 6: Advanced Topics & Libraries", modules: ["Working with NumPy, Pandas (intro)", "Web Scraping (intro)", "Database Interaction (intro)"] },
                { title: "Module 7: Project Work", modules: ["Build a practical Python application"] },
              ],
              duration: "6 weeks",
              level: "Beginner to Intermediate",
              tags: ["Python", "Programming", "Scripting"],
              includes: [{ icon: BookOpen, text: "Practical Exercises" }],
            }
          },
          {
            name: "Java Programming",
            slug: "java-programming",
            fullTitle: "Java Programming",
            description: "Build robust, scalable applications with Java, the enterprise standard for software development.",
            details: {
              overview: "This course covers core Java concepts, object-oriented programming, and essential libraries for building robust and scalable applications.",
              whatYouWillLearn: [
                "Master Java syntax and fundamental constructs",
                "Implement Object-Oriented Programming (OOP) principles",
                "Handle exceptions and manage files efficiently",
                "Work with Java Collections Framework",
                "Build multi-threaded applications",
                "Develop database-driven applications using JDBC"
              ],
              requirements: ["Basic programming concepts beneficial."],
              curriculum: [
                { title: "Module 1: Core Java Basics", modules: ["Introduction to Java", "Data Types & Operators", "Control Statements"] },
                { title: "Module 2: Object-Oriented Programming", modules: ["Classes, Objects, Methods", "Constructors, Inheritance, Polymorphism"] },
                { title: "Module 3: Packages & Interfaces", modules: ["Abstract Classes", "Interfaces & Inner Classes"] },
                { title: "Module 4: Exception Handling & I/O", modules: ["Try-Catch, Finally", "File Input/Output"] },
                { title: "Module 5: Collections & Generics", modules: ["ArrayList, LinkedList, HashMap", "Generic Classes & Methods"] },
                { title: "Module 6: Multi-threading & JDBC", modules: ["Thread Creation & Synchronization", "Database Connectivity"] },
              ],
              duration: "8 weeks",
              level: "Beginner to Intermediate",
              tags: ["Java", "OOP", "Enterprise"],
              includes: [{ icon: Briefcase, text: "Hands-on projects" }]
            }
          },
          {
            name: "C/C++ Programming",
            slug: "c-cpp-programming",
            fullTitle: "C / C++ Programming",
            description: "Deep dive into system-level programming and high-performance applications with C and C++.",
            details: {
              overview: "This course provides a strong foundation in C and C++, essential for competitive programming, system development, and game development.",
              whatYouWillLearn: [
                "Understand procedural programming in C",
                "Master Object-Oriented Programming (OOP) with C++",
                "Work with pointers, arrays, and data structures",
                "Implement efficient algorithms",
                "Develop memory-efficient applications"
              ],
              requirements: ["Basic logical thinking."],
              curriculum: [
                { title: "Module 1: C Programming Fundamentals", modules: ["Introduction to C", "Variables, Operators, Control Flow", "Functions, Arrays, Pointers"] },
                { title: "Module 2: Data Structures in C", modules: ["Structs, Unions", "File I/O"] },
                { title: "Module 3: Introduction to C++", modules: ["C++ Basics", "Classes and Objects", "Constructors, Destructors"] },
                { title: "Module 4: OOP in C++", modules: ["Inheritance, Polymorphism", "Virtual Functions, Templates"] },
                { title: "Module 5: Standard Template Library (STL)", modules: ["Containers, Algorithms, Iterators"] },
                { title: "Module 6: Advanced C++ Topics", modules: ["Exception Handling", "File Streams"] },
              ],
              duration: "10 weeks",
              level: "Beginner to Intermediate",
              tags: ["C", "C++", "System Programming"],
              certification: "C/C++ Programmer",
              includes: [{ icon: Code, text: "Coding Challenges" }]
            }
          },
        ],
      },
      {
        name: "Web Development",
        slug: "web-development",
        subcourses: [
          {
            name: "Web Development (HTML, CSS, JavaScript, React, Node.js)",
            slug: "web-development-fullstack",
            fullTitle: "Full Stack Web Development Mastery",
            description: "Master modern web development with React, Node.js, and cloud technologies to build and deploy real-world applications.",
            details: {
              subtitle: "From Code to Cloud: Build and Deploy Real-World Web Applications",
              overview: "Our Full Stack Development Mastery program is an immersive journey into the world of modern web applications. This course is designed to take you from the fundamentals of frontend development with React and Next.js to the complexities of backend engineering with Node.js, Express, and databases. You'll learn how to build, test, and deploy robust, scalable applications, culminating in a portfolio of projects that will impress any employer.",
              whatYouWillLearn: [
                "Structure HTML pages with semantic tags and accessibility basics",
                "Style web pages responsively using CSS (Flexbox, Grid, Media Queries)",
                "Implement interactive features with JavaScript (ES6+)",
                "Build dynamic user interfaces with React (Components, Hooks, State Management)",
                "Develop robust RESTful APIs with Node.js and Express.js",
                "Master version control with Git & GitHub",
                "Connect to databases (MongoDB or PostgreSQL) and perform CRUD operations",
                "Deploy full-stack applications (Static site hosting, CI/CD basics)"
              ],
              requirements: [
                "Basic computer literacy and internet navigation skills.",
                "No prior programming experience required; foundational concepts are covered."
              ],
              curriculum: [
                {
                  title: "Module 1: Introduction to Web Development",
                  modules: ["What is web development?", "Frontend vs Backend vs Full Stack", "Overview of web technologies", "Web development tools and workflow", "Code editors (VS Code, Sublime)", "Browsers and DevTools", "Version control (Git & GitHub)"]
                },
                {
                  title: "Module 2: HTML (HyperText Markup Language)",
                  modules: ["Structure of an HTML page", "Elements and tags", "Headings, paragraphs, links, images", "Lists, tables, forms", "Semantic HTML5 elements", "Accessibility basics (a11y)"]
                },
                {
                  title: "Module 3: CSS (Cascading Style Sheets)",
                  modules: ["Styling text, layout, and spacing", "Selectors, properties, and values", "Box model", "Flexbox and Grid layout", "Media queries & Responsive Design", "CSS animations and transitions", "Preprocessors (SASS - optional)"]
                },
                {
                  title: "Module 4: JavaScript (Client-side Programming)",
                  modules: ["Variables, data types, operators", "Control structures (if, loops)", "Functions and scope", "Events and DOM manipulation", "Forms and validation", "Fetch API & working with JSON", "ES6+ features (let/const, arrow functions, etc.)"]
                },
                {
                  title: "Module 5: Version Control with Git & GitHub",
                  modules: ["Git basics: clone, commit, push, pull", "Branching and merging", "Creating and managing GitHub repositories", "Collaboration and pull requests"]
                },
                {
                  title: "Module 6: Web Hosting and Deployment",
                  modules: ["Static site hosting (GitHub Pages, Netlify)", "Intro to domain names and DNS", "Environment configuration and deployment workflow"]
                },
                {
                  title: "Module 7: Advanced Frontend Topics",
                  modules: ["Introduction to JavaScript frameworks (React or Vue)", "Components, props, and state", "Routing (React Router or Vue Router)", "Hooks (if React)", "State management (Redux, Context API, or Vuex)"]
                },
                {
                  title: "Module 8: Backend Development Basics",
                  modules: ["Introduction to servers and databases", "Node.js and Express.js", "REST APIs and CRUD operations", "Middleware and routing", "Connecting to a database (MongoDB or PostgreSQL)"]
                },
                {
                  title: "Module 9: Full Stack Web Development",
                  modules: ["MERN stack overview (MongoDB, Express, React, Node)", "Full-stack application structure", "Authentication (JWT, sessions)", "API security and error handling"]
                },
                {
                  title: "Module 10: Final Projects and Portfolio",
                  modules: ["Build 2-3 real-world projects: Blog, E-commerce site, Chat app or social media clone", "Code reviews and peer feedback", "Building a portfolio website", "Resume tips and preparing for job interviews"]
                },
                {
                  title: "Bonus Topics (Optional/Advanced)",
                  modules: ["TypeScript", "GraphQL", "CI/CD basics (e.g., GitHub Actions)", "Testing (Jest, Cypress)", "Progressive Web Apps (PWA)"]
                }
              ],
              duration: "6 months",
              level: "Beginner to Advanced",
              tags: ["React", "Node.js", "MongoDB", "AWS", "Frontend", "Backend", "Full Stack"],
              certification: "Full Stack Development Mastery Certificate",
              includes: [
                { icon: Monitor, text: "Comprehensive Video Lectures" },
                { icon: Briefcase, text: "Multiple Real-World Projects" },
                { icon: UserCheck, text: "Dedicated Mentorship" },
                { icon: Trophy, text: "Certification of Completion" },
              ]
            }
          },
        ],
      },
      {
        name: "Data & AI",
        slug: "data-ai",
        subcourses: [
          {
            name: "Data Science", // Changed to Data Science from broader "Data Science & Machine Learning" based on your featured list
            slug: "data-science", // New slug
            fullTitle: "Data Science Professional",
            description: "Learn Python, data visualization, machine learning, and statistical analysis in this industry-ready program. Build your own projects and get hands-on with tools like Pandas, NumPy, and Scikit-learn.",
            details: {
              subtitle: "Master the art of data analysis, interpretation, and prediction.",
              overview: "This industry-ready program covers Python programming, essential data manipulation techniques, statistical analysis, machine learning algorithms, and data visualization. You will build your own projects and gain hands-on experience with leading tools and libraries.",
              whatYouWillLearn: [
                "Master data analysis and manipulation using Python (Pandas, NumPy).",
                "Perform statistical analysis and hypothesis testing.",
                "Build and evaluate machine learning models (Supervised & Unsupervised).",
                "Create compelling data visualizations (Matplotlib, Seaborn, Tableau).",
                "Learn SQL for data extraction and database interaction.",
                "Understand reporting and communication of data insights."
              ],
              requirements: ["Basic computer literacy and analytical thinking."],
              curriculum: [
                {
                  title: "Module 1: Introduction to Data Analysis",
                  modules: ["What is Data Analysis?", "The Data Analysis Process (Ask, Prepare, Process, Analyze, Share, Act)", "Types of Data: Structured vs. Unstructured", "Descriptive, Diagnostic, Predictive, and Prescriptive Analytics", "Tools of the Trade: Excel, SQL, Python, R, Power BI, Tableau"]
                },
                {
                  title: "Module 2: Data Collection & Cleaning",
                  modules: ["Data Sources: APIs, Web Scraping, Surveys, Databases", "Importing Data (CSV, Excel, JSON, SQL, etc.)", "Data Quality Issues", "Handling Missing Data", "Data Cleaning Techniques", "Data Wrangling with: Excel (Formulas, Power Query), Pandas in Python, dplyr in R"]
                },
                {
                  title: "Module 3: Exploratory Data Analysis (EDA)",
                  modules: ["Descriptive Statistics: Mean, Median, Mode, Variance, Std Dev", "Data Visualization for EDA", "Outliers and Anomalies", "Correlation Analysis", "Grouping and Aggregation"]
                },
                {
                  title: "Module 4: Data Visualization",
                  modules: ["Principles of Good Data Visualization", "Charts and Graphs: Bar, Line, Scatter, Pie, Histogram, Boxplots, Heatmaps", "Tools: Matplotlib / Seaborn / Plotly (Python), ggplot2 (R), Tableau / Power BI"]
                },
                {
                  title: "Module 5: Statistical Analysis",
                  modules: ["Probability Fundamentals", "Distributions: Normal, Binomial, Poisson", "Hypothesis Testing", "Confidence Intervals", "Chi-square, t-tests, ANOVA", "Regression Analysis (Linear, Logistic)"]
                },
                {
                  title: "Module 6: Data Analysis with SQL",
                  modules: ["Introduction to Relational Databases", "SELECT, WHERE, GROUP BY, JOINS", "Aggregation and Subqueries", "Window Functions", "Data Manipulation with SQL"]
                },
                {
                  title: "Module 7: Data Analysis with Python (or R)",
                  modules: ["Data Types and Structures", "Libraries: Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn", "Data Cleaning and Transformation", "EDA using Pandas and Seaborn", "Basic Machine Learning (optional extension)"]
                },
                {
                  title: "Module 8: Reporting & Communication",
                  modules: ["Creating Dashboards (Tableau, Power BI)", "Storytelling with Data", "Report Writing and Presentation Skills", "Sharing Insights with Stakeholders"]
                },
                {
                  title: "Module 9: Capstone Project",
                  modules: ["Choose a Dataset (Kaggle, public sources)", "End-to-End Analysis", "Report and Presentation", "Peer Review / Instructor Feedback"]
                },
                {
                  title: "Module 10: Bonus Modules (Optional)",
                  modules: ["Time Series Analysis", "Introduction to Machine Learning", "A/B Testing", "Big Data Tools (Spark, Hadoop basics)", "Ethics in Data Analysis"]
                }
              ],
              duration: "3 months",
              level: "Intermediate",
              tags: ["Python", "SQL", "Machine Learning", "Data Visualization", "Pandas", "NumPy", "Scikit-learn"],
              certification: "Data Science Professional Certificate",
              includes: [
                { icon: Database, text: "Capstone Project" },
                { icon: BarChart3, text: "Statistical Analysis" },
              ],
              softwareCovered: ["Python", "R", "SQL", "Excel", "Power BI", "Tableau"]
            }
          },
          {
            name: "Artificial Intelligence",
            slug: "artificial-intelligence",
            fullTitle: "Artificial Intelligence Course Content",
            description: "Unlock the future with our AI course, designed for beginners and professionals, covering machine learning, neural networks, and real-world applications.",
            details: {
              subtitle: "Master intelligent systems, machine learning, and deep learning techniques.",
              overview: "This comprehensive AI course takes you from foundational concepts to advanced topics like deep learning and ethical AI. You'll learn to build intelligent agents, apply various machine learning algorithms, and work with modern AI frameworks.",
              whatYouWillLearn: [
                "Understand the core concepts and history of AI.",
                "Master problem-solving and search algorithms.",
                "Grasp knowledge representation and reasoning techniques.",
                "Learn fundamental and advanced machine learning algorithms.",
                "Dive into Deep Learning with Neural Networks (ANN, CNN, RNN).",
                "Explore Natural Language Processing (NLP) and Reinforcement Learning.",
                "Gain practical experience building and deploying AI models.",
                "Understand the ethics and future trends of AI."
              ],
              requirements: ["Basic programming knowledge recommended (preferably Python)."],
              curriculum: [
                { title: "Module 1: Introduction to Artificial Intelligence", modules: ["Definition and History of AI", "Applications of AI (Healthcare, Finance, Transportation, etc.)", "AI vs. Machine Learning vs. Deep Learning", "Ethical and Social Implications of AI"] },
                { title: "Module 2: Problem Solving and Search", modules: ["Intelligent Agents and Environments", "Uninformed Search Strategies (BFS, DFS)", "Informed Search (A*, Greedy)", "Game Playing (Minimax, Alpha-Beta Pruning)"] },
                { title: "Module 3: Knowledge Representation and Reasoning", modules: ["Logic (Propositional & Predicate Logic)", "Rule-based Systems", "Semantic Networks and Ontologies", "Reasoning under Uncertainty (Bayesian Networks)"] },
                { title: "Module 4: Machine Learning Basics", modules: ["Supervised, Unsupervised, and Reinforcement Learning", "Classification (k-NN, Decision Trees, SVM)", "Regression Techniques", "Clustering (k-Means, Hierarchical)", "Model Evaluation (Precision, Recall, F1-Score, ROC)"] },
                { title: "Module 5: Deep Learning", modules: ["Neural Networks (ANN, CNN, RNN)", "Backpropagation and Gradient Descent", "Transfer Learning", "Natural Language Processing (NLP) with Deep Learning", "Frameworks: TensorFlow, PyTorch"] },
                { title: "Module 6: Natural Language Processing (NLP)", modules: ["Text Preprocessing and Vectorization (TF-IDF, Word2Vec)", "Language Models and Transformers", "Chatbots and Dialogue Systems", "Sentiment Analysis and Text Classification"] },
                { title: "Module 7: Reinforcement Learning", modules: ["Markov Decision Processes (MDPs)", "Q-Learning and Deep Q-Networks (DQNs)", "Policy Gaps", "Applications: Robotics, Game AI"] }, // Corrected 'Policy Gradients' to 'Policy Gaps' based on one of the outlines
                { title: "Module 8: AI in Practice", modules: ["AI Tools and Libraries: scikit-learn, OpenAI Gym, HuggingFace", "Building and Deploying AI Models", "Case Studies and Industry Applications", "AI in Cloud Platforms (AWS, Azure, Google Cloud AI)"] },
                { title: "Module 9: Ethics and Future of AI", modules: ["Bias and Fairness in AI", "AI Governance and Regulation", "AI Safety and Alignment", "The Future of Work and AI"] },
                { title: "Module 10: Capstone Project", modules: ["Define and Develop a Real-World AI Project", "Dataset Collection and Preprocessing", "Model Training, Evaluation, and Deployment", "Final Presentation"] },
                { title: "Optional Add-ons or Specializations", modules: ["Computer Vision", "Robotics and Autonomous Systems", "Generative AI and LLMs (e.g., GPT, Stable Diffusion)", "AI for IoT and Edge Devices"] }
              ],
              duration: "8–12 weeks",
              level: "Beginner to Advanced",
              tags: ["AI", "Machine Learning", "Deep Learning", "Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
              certification: "Artificial Intelligence Specialist",
              includes: [
                { icon: BrainCircuit, text: "Projects + Case Studies" },
                { icon: Code, text: "Hands-on coding" }
              ],
              softwareCovered: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "OpenAI Gym", "HuggingFace"]
            }
          },
        ],
      },
      {
        name: "Cybersecurity & Cloud",
        slug: "cybersecurity-cloud",
        subcourses: [
          {
            name: "Cybersecurity",
            slug: "cybersecurity",
            fullTitle: "Cybersecurity Essentials",
            description: "Protect digital assets and networks from evolving threats with comprehensive cybersecurity training.",
            details: {
              overview: "This course covers fundamental cybersecurity principles, common threats, and defensive strategies to secure information systems and networks. You'll learn about network security, cryptography, and risk management.",
              whatYouWillLearn: [
                "Understand common cyber threats and vulnerabilities.",
                "Implement network security protocols and tools.",
                "Learn about data encryption and digital forensics.",
                "Develop strategies for incident response and disaster recovery.",
                "Comply with cybersecurity regulations and standards."
              ],
              requirements: ["Basic computer knowledge."],
              curriculum: [
                { title: "Module 1: Introduction to Cybersecurity", modules: ["Cybersecurity Concepts", "Threat Landscape", "Security Principles"] },
                { title: "Module 2: Network Security", modules: ["Firewalls", "IDS/IPS", "VPNs"] },
                { title: "Module 3: Cryptography", modules: ["Symmetric/Asymmetric Encryption", "Hashing"] },
                { title: "Module 4: Endpoint Security", modules: ["Malware Protection", "Patch Management"] },
                { title: "Module 5: Security Operations", modules: ["Incident Response", "Vulnerability Management"] },
              ],
              duration: "6 weeks",
              level: "Beginner",
              tags: ["Security", "Network", "Threats"],
              certification: "Cybersecurity Fundamentals Certificate",
              includes: [{ icon: ShieldCheck, text: "Practical labs" }]
            }
          },
          {
            name: "Cloud Computing (AWS, Azure, Google Cloud)",
            slug: "cloud-computing",
            fullTitle: "Cloud Computing Professional",
            description: "Master leading cloud platforms like AWS, Azure, and Google Cloud Platform for building scalable and resilient infrastructure.",
            details: {
              overview: "This course provides an in-depth understanding of cloud computing concepts and practical skills across major cloud providers. Learn to deploy, manage, and scale applications in the cloud.",
              whatYouWillLearn: [
                "Understand cloud service models (IaaS, PaaS, SaaS).",
                "Work with compute, storage, and networking services on AWS, Azure, GCP.",
                "Implement cloud security best practices.",
                "Deploy serverless applications.",
                "Manage containerized workloads with Docker and Kubernetes."
              ],
              requirements: ["Basic IT knowledge."],
              curriculum: [
                { title: "Module 1: Cloud Fundamentals", modules: ["Cloud Concepts", "Deployment Models", "Service Models"] },
                { title: "Module 2: AWS Services", modules: ["EC2, S3, RDS", "Lambda, API Gateway"] },
                { title: "Module 3: Azure Services", modules: ["Virtual Machines, Storage Accounts", "Azure Functions"] },
                { title: "Module 4: Google Cloud Platform", modules: ["Compute Engine, Cloud Storage", "Cloud Functions"] },
                { title: "Module 5: Cloud Security & Best Practices", modules: ["IAM, Network Security Groups", "Compliance"] },
              ],
              duration: "10 weeks",
              level: "Intermediate",
              tags: ["Cloud", "AWS", "Azure", "GCP", "DevOps"],
              certification: "Cloud Architect Certificate",
              includes: [{ icon: Zap, text: "Hands-on cloud labs" }]
            }
          },
          {
            name: "Ethical Hacking",
            slug: "ethical-hacking",
            fullTitle: "Certified Ethical Hacker (CEH) Training",
            description: "Learn ethical hacking techniques and penetration testing to identify and mitigate vulnerabilities in systems and networks.",
            details: {
              overview: "This course trains you in advanced ethical hacking concepts and techniques. You will learn to think like a hacker to identify vulnerabilities and strengthen security postures.",
              whatYouWillLearn: [
                "Understand hacking methodologies and phases.",
                "Perform reconnaissance and scanning.",
                "Identify system vulnerabilities and exploit them ethically.",
                "Learn about web application and wireless hacking.",
                "Implement countermeasures and security best practices."
              ],
              requirements: ["Basic networking and Linux knowledge."],
              curriculum: [
                { title: "Module 1: Introduction to Ethical Hacking", modules: ["Ethical Hacking Concepts", "Footprinting & Reconnaissance"] },
                { title: "Module 2: Network & System Hacking", modules: ["Scanning Networks", "Enumeration", "Vulnerability Analysis"] },
                { title: "Module 3: Web Application Hacking", modules: ["SQL Injection", "XSS", "CSRF"] },
                { title: "Module 4: Wireless & Mobile Hacking", modules: ["Wi-Fi Cracking", "Mobile Device Attacks"] },
                { title: "Module 5: Cloud & IoT Hacking", modules: ["Cloud Security Threats", "IoT Vulnerabilities"] },
              ],
              duration: "8 weeks",
              level: "Intermediate to Advanced",
              tags: ["Hacking", "Penetration Testing", "Security"],
              certification: "CEH Preparation",
              includes: [{ icon: Code, text: "Hands-on labs" }]
            }
          }
        ],
      },
      {
        name: "Mobile & Blockchain",
        slug: "mobile-blockchain",
        subcourses: [
          {
            name: "Mobile App Development (Android / iOS)",
            slug: "mobile-app-development",
            fullTitle: "Mobile App Development",
            description: "Build native and cross-platform mobile apps for Android and iOS using modern frameworks like React Native or Flutter.",
            details: {
              overview: "This course guides you through the process of building robust and engaging mobile applications for both Android and iOS platforms. Choose between native development or cross-platform frameworks to create apps that stand out.",
              whatYouWillLearn: [
                "Understand mobile app architecture and design principles.",
                "Develop user interfaces for various screen sizes.",
                "Integrate with APIs and handle data persistence.",
                "Deploy applications to app stores.",
                "Learn platform-specific features (e.g., camera, location)."
              ],
              requirements: ["Basic programming logic."],
              curriculum: [
                { title: "Module 1: Introduction to Mobile Development", modules: ["Mobile Ecosystems (Android/iOS)", "Native vs. Cross-Platform", "Development Tools"] },
                { title: "Module 2: UI/UX Design for Mobile", modules: ["Layouts", "Navigation", "Responsive Design"] },
                { title: "Module 3: Data Management", modules: ["API Integration", "Local Storage"] },
                { title: "Module 4: Cross-Platform (React Native/Flutter)", modules: ["Component-based UI", "State Management", "Platform-specific Code"] },
                { title: "Module 5: Testing & Deployment", modules: ["Debugging", "App Store Submission"] },
              ],
              duration: "12 weeks",
              level: "Beginner to Intermediate",
              tags: ["Mobile", "Android", "iOS", "React Native", "Flutter"],
              certification: "Mobile App Developer",
              includes: [{ icon: Smartphone, text: "Portfolio Project" }]
            }
          },
          {
            name: "Blockchain Technology",
            slug: "blockchain-technology",
            fullTitle: "Blockchain Technology & Applications",
            description: "Explore the decentralized world of blockchain, cryptocurrencies, and smart contracts, and understand their real-world applications.",
            details: {
              overview: "This course demystifies blockchain technology, covering its underlying principles, consensus mechanisms, and various applications beyond cryptocurrencies. You'll gain insights into smart contracts, decentralized applications (dApps), and blockchain platforms.",
              whatYouWillLearn: [
                "Understand the core concepts of blockchain and distributed ledger technology.",
                "Learn about different types of blockchains (public, private, consortium).",
                "Explore cryptocurrencies (Bitcoin, Ethereum) and their mechanics.",
                "Develop basic smart contracts using Solidity.",
                "Understand the fundamentals of decentralized applications (dApps).",
                "Identify real-world use cases for blockchain in various industries."
              ],
              requirements: ["Basic programming knowledge beneficial."],
              curriculum: [
                { title: "Module 1: Introduction to Blockchain", modules: ["What is Blockchain?", "Distributed Ledger Technology", "Consensus Mechanisms"] },
                { title: "Module 2: Cryptocurrencies", modules: ["Bitcoin & Cryptography", "Ethereum & Smart Contracts"] },
                { title: "Module 3: Blockchain Platforms", modules: ["Ethereum", "Hyperledger", "Corda"] },
                { title: "Module 4: Smart Contracts & dApps", modules: ["Solidity Basics", "Decentralized Applications"] },
                { title: "Module 5: Blockchain Use Cases", modules: ["Supply Chain", "Finance", "Healthcare"] },
              ],
              duration: "8 weeks",
              level: "Beginner",
              tags: ["Blockchain", "Cryptocurrency", "Smart Contracts", "Web3"],
              certification: "Blockchain Professional",
              includes: [{ icon: Puzzle, text: "Practical Demos" }]
            }
          },
        ],
      },
    ],
  },
  {
    name: "Engineering & Design",
    slug: "engineering-design",
    icon: LayoutGrid, // General icon for Engineering & Design
    courses: [
      {
        name: "CAD & BIM",
        slug: "cad-bim",
        subcourses: [
          {
            name: "AutoCAD",
            slug: "autocad",
            fullTitle: "AutoCAD Course Content",
            description: "Master 2D and 3D drafting with AutoCAD, the industry standard for design in engineering, architecture, and construction.",
            details: {
              subtitle: "Industry Standard 2D & 3D Design Software",
              overview: "This hands-on AutoCAD course is perfect for civil, mechanical, and architectural professionals. You will learn to create precise 2D drawings and detailed 3D models, manage layers, add annotations, and prepare layouts for plotting.",
              whatYouWillLearn: [
                "Overview of AutoCAD interface and applications.",
                "Master basic drawing tools (Line, Polyline, Circle, Arc, etc.).",
                "Efficiently use editing tools (Move, Copy, Trim, Extend, etc.).",
                "Manage object properties and layers for organized drawings.",
                "Add annotations, dimensions, and text effectively.",
                "Create and work with Blocks and Attributes.",
                "Utilize advanced drawing techniques and parametric design.",
                "Prepare layouts and plot drawings to various formats.",
                "Introduction to 3D modeling within AutoCAD (Optional)."
              ],
              requirements: ["Basic computer skills."],
              curriculum: [
                { title: "Module 1: Introduction to AutoCAD", modules: ["Overview of AutoCAD and its applications", "Understanding the interface: Ribbon, command line, toolbars", "Units and drawing limits", "Navigating the workspace: Pan, Zoom, View controls", "File management: New, Open, Save, Export, DWG format"] },
                { title: "Module 2: Basic Drawing Tools", modules: ["Line, Polyline, Circle, Arc, Rectangle, Ellipse", "Object snaps (OSNAP)", "Polar tracking and Ortho mode", "Grids and snaps"] },
                { title: "Module 3: Editing Tools", modules: ["Move, Copy, Rotate, Mirror", "Trim, Extend, Fillet, Chamfer", "Offset, Array (Rectangular & Polar)", "Scale and Stretch", "Undo and Redo"] },
                { title: "Module 4: Object Properties & Layers", modules: ["Properties palette (color, line type, line weight)", "Using and managing layers", "Layer properties manager", "Freezing, locking, isolating layers"] },
                { title: "Module 5: Annotation and Text", modules: ["Adding and editing single-line & multi-line text", "Text styles and justification", "Hatching and gradient fills", "Working with dimensions (linear, aligned, angular, radius, diameter)", "Dimension styles and settings", "Leaders and multileaders"] },
                { title: "Module 6: Blocks and Attributes", modules: ["Creating and inserting blocks", "Dynamic blocks", "Working with attributes", "Using DesignCenter and Tool Palettes"] },
                { title: "Module 7: Advanced Drawing Techniques", modules: ["Working with external references (Xrefs)", "Working with groups", "Using constraints (geometric & dimensional)", "Parametric drawing"] },
                { title: "Module 8: Layouts and Plotting", modules: ["Model space vs Paper space", "Creating viewports", "Plot styles and page setup", "Plotting to PDF or printer", "Title blocks and scales"] },
                { title: "Module 9: 3D Modeling (Optional or Advanced Module)", modules: ["3D modeling basics: UCS, ViewCube, Navigation bar", "Creating 3D objects (extrude, revolve, loft, sweep)", "Modifying 3D solids", "Visual styles and rendering", "Section and camera views"] },
                { title: "Module 10: Practice Projects & Industry Applications", modules: ["2D Floor plan drawing", "Mechanical part drafting", "Electrical and piping diagrams", "Site layout / civil plans", "Annotation and dimensioning exercises", "Real-world plotting and printing tasks"] },
                { title: "Bonus (Optional)", modules: ["AutoLISP basics or macros", "CAD standards and templates", "Collaboration and file sharing tools (eTransmit, Sheet Sets)", "Integration with other software (e.g., Revit, SketchUp)"] }
              ],
              duration: "4 weeks",
              level: "Beginner to Advanced",
              tags: ["AutoCAD", "CAD", "Drafting", "2D", "3D", "Architecture", "Engineering"],
              certification: "AutoCAD Certified User",
              includes: [{ icon: PencilRuler, text: "Hands-on projects" }],
              softwareCovered: ["AutoCAD"]
            }
          },
          {
            name: "SolidWorks",
            slug: "solidworks",
            fullTitle: "SolidWorks Design",
            description: "Design robust 3D models and assemblies with SolidWorks, a leading software for mechanical design and engineering.",
            details: {
              overview: "This course teaches you to create parametric models, assemblies, and detailed drawings using SolidWorks. Ideal for mechanical engineers, product designers, and anyone involved in product development.",
              whatYouWillLearn: [
                "Master part modeling, assembly creation, and drafting.",
                "Understand parametric design principles.",
                "Perform basic simulations and analysis.",
                "Generate Bill of Materials (BOM) and technical drawings.",
                "Use advanced surfacing and sheet metal tools."
              ],
              requirements: ["Basic engineering or design concepts beneficial."],
              curriculum: [
                { title: "Module 1: SolidWorks Interface & Sketching", modules: ["User Interface", "2D Sketching Tools", "Relations & Dimensions"] },
                { title: "Module 2: Part Modeling", modules: ["Extrude, Revolve, Sweep", "Features & Patterns"] },
                { title: "Module 3: Assembly Design", modules: ["Component Insertion", "Mates & Sub-assemblies"] },
                { title: "Module 4: Drawings & Detailing", modules: ["Standard Views", "Annotations", "BOM"] },
                { title: "Module 5: Advanced Topics", modules: ["Surfacing", "Sheet Metal", "Basic Simulation"] },
              ],
              duration: "6 weeks",
              level: "Intermediate",
              tags: ["SolidWorks", "CAD", "Mechanical Design", "3D Modeling"],
              certification: "SolidWorks Associate",
              includes: [{ icon: PencilRuler, text: "Practical Design Projects" }],
              softwareCovered: ["SolidWorks"]
            }
          },
          {
            name: "Revit Architecture",
            slug: "revit-architecture",
            fullTitle: "Revit Architecture for BIM",
            description: "Master Revit for comprehensive BIM, architectural design, and documentation, a powerful tool for building information modeling.",
            details: {
              overview: "This course covers Revit Architecture from basic modeling to advanced documentation and collaboration. Learn to create intelligent 3D models for architectural design and construction documentation.",
              whatYouWillLearn: [
                "Navigate the Revit interface and project setup.",
                "Create architectural elements: walls, floors, roofs, windows, doors.",
                "Develop detailed construction documentation.",
                "Understand BIM principles and workflows.",
                "Collaborate effectively in a BIM environment."
              ],
              requirements: ["Basic understanding of architectural concepts."],
              curriculum: [
                { title: "Module 1: Revit Basics", modules: ["Interface, Project Setup", "Grids, Levels"] },
                { title: "Module 2: Modeling Elements", modules: ["Walls, Doors, Windows", "Floors, Roofs, Ceilings"] },
                { title: "Module 3: Components & Families", modules: ["Loading & Creating Families", "Groups"] },
                { title: "Module 4: Documentation", modules: ["Schedules, Sheets", "Annotations, Dimensions"] },
                { title: "Module 5: Collaboration & Advanced", modules: ["Worksharing", "Phasing", "Rendering (intro)"] },
              ],
              duration: "8 weeks",
              level: "Intermediate",
              tags: ["Revit", "BIM", "Architecture", "Design"],
              certification: "Revit Certified Professional",
              includes: [{ icon: Building, text: "Design Projects" }],
              softwareCovered: ["Revit"]
            }
          },
          {
            name: "BIM – Building Information Modeling",
            slug: "bim-building-information-modeling",
            fullTitle: "BIM – Building Information Modeling",
            description: "Learn how to digitally plan, design, and manage building projects using BIM tools, enhancing collaboration and efficiency.",
            details: {
              subtitle: "Comprehensive Digital Building Project Management",
              overview: "This course teaches digital planning, design, and management of building projects using BIM tools. Ideal for architects, engineers, and construction professionals looking to upgrade their tech skills in a collaborative environment.",
              whatYouWillLearn: [
                "Understand BIM principles and its lifecycle.",
                "Utilize BIM tools for conceptual design and detailed modeling.",
                "Enhance project coordination and clash detection.",
                "Manage building data and information effectively.",
                "Apply BIM for construction scheduling and cost estimation."
              ],
              requirements: ["Familiarity with design or construction processes."],
              curriculum: [
                { title: "Module 1: Introduction to BIM", modules: ["What is BIM?", "BIM Dimensions (3D, 4D, 5D, 6D, 7D)", "BIM Benefits"] },
                { title: "Module 2: BIM Software Overview", modules: ["Revit", "Navisworks", "AutoCAD Civil 3D (overview)"] },
                { title: "Module 3: BIM Workflow & Collaboration", modules: ["Model Coordination", "Clash Detection", "Information Exchange"] },
                { title: "Module 4: BIM for Project Lifecycle", modules: ["Design Authoring", "Analysis & Simulation", "Construction Planning", "Facilities Management"] },
                { title: "Module 5: BIM Standards & Implementation", modules: ["Industry Standards", "Case Studies"] },
              ],
              duration: "6 weeks",
              level: "Practical-based",
              tags: ["BIM", "Revit", "Navisworks", "Construction", "Architecture", "Engineering"],
              certification: "BIM Professional",
              includes: [{ icon: Building, text: "Software Covered: Revit, Navisworks" }],
              softwareCovered: ["Revit", "Navisworks"]
            }
          },
          {
            name: "SketchUp",
            slug: "sketchup",
            fullTitle: "SketchUp Course Content Outline",
            description: "Create 3D models with ease for various design purposes, from architectural visualization to interior design.",
            details: {
              subtitle: "Intuitive 3D Modeling for Design & Visualization",
              overview: "This course teaches you to quickly and easily create, view, and modify 3D ideas with SketchUp. It covers everything from basic navigation to advanced modeling techniques, materials, and rendering, perfect for architects, interior designers, and hobbyists.",
              whatYouWillLearn: [
                "Understand the SketchUp interface and navigation.",
                "Master basic drawing and modeling tools (Line, Push/Pull).",
                "Organize models using groups, components, and layers.",
                "Apply materials and styles to models for realistic visuals.",
                "Achieve precision in modeling and drafting.",
                "Utilize advanced tools and plugins for enhanced capabilities.",
                "Create 2D plans and presentations from 3D models using LayOut (Pro users).",
                "Complete a comprehensive final project applying all learned skills."
              ],
              requirements: ["Basic computer literacy."],
              curriculum: [
                { title: "Module 1: Introduction to SketchUp", modules: ["Objectives: Understand the SketchUp interface, Learn navigation and basic tools", "Topics: Installing SketchUp & choosing the right version (Free, Pro, Web), Toolbars and interface overview, Orbit, Pan, and Zoom tools, Mouse controls and keyboard shortcuts", "Exercise: Create a simple box and navigate around it"] },
                { title: "Module 2: Drawing Basics", modules: ["Objectives: Learn to draw basic shapes and lines", "Topics: Line, Rectangle, Circle, Arc tools, The Inference system, Push/Pull tool, Eraser and Select tools", "Exercise: Model a simple table or stool"] },
                { title: "Module 3: Modifying Geometry", modules: ["Objectives: Edit and manipulate geometry with transformation tools", "Topics: Move, Rotate, Scale, Offset tools, Follow Me tool, Using guidelines and tape measure", "Exercise: Create a flower pot using Follow Me"] },
                { title: "Module 4: Groups, Components & Layers (Tags)", modules: ["Objectives: Organize models using groups and components", "Topics: Difference between Groups and Components, Creating and editing components, Using Tags (Layers) for organization", "Exercise: Create a chair with repeatable legs as components"] },
                { title: "Module 5: Working with Materials & Styles", modules: ["Objectives: Apply materials and styles to models", "Topics: Paint Bucket tool, Creating and editing materials, Using Style settings (edges, backgrounds, shadows)", "Exercise: Design and texture a room interior"] },
                { title: "Module 6: Precision Modeling & Drafting", modules: ["Objectives: Model accurately using dimensions and guides", "Topics: Inputting exact dimensions, Measuring and annotating, Using the Protractor and Tape Measure", "Exercise: Create a dimensioned floor plan"] },
                { title: "Module 7: Advanced Tools & Plugins", modules: ["Objectives: Enhance SketchUp with advanced modeling techniques", "Topics: Sandbox tools (terrain), Solid tools (for Pro users), Extension Warehouse overview, Common plugins (e.g., Fredo6, Joint Push Pull)", "Exercise: Create a landscaped terrain with a house model"] },
                { title: "Module 8: Layout & Documentation (for Pro users)", modules: ["Objectives: Create 2D plans and presentations from 3D models", "Topics: Introduction to LayOut, Creating scenes, Exporting views and plans, Annotating and dimensioning in LayOut", "Exercise: Create a construction document set"] },
                { title: "Module 9: Final Project", modules: ["Objectives: Apply all learned skills in a comprehensive project", "Topics: Project Ideas: Model a tiny house, Design a piece of furniture, Create an office or retail interior", "Exercise: Deliverables: Model file, scenes, and exported images or documentation"] },
                { title: "Bonus Modules (Optional)", modules: ["Topics: SketchUp for Interior Design, SketchUp for Architecture, Rendering Basics (using V-Ray, Enscape, etc.), SketchUp for 3D Printing"] }
              ],
              duration: "6 weeks", // From your featured list, original doc said "Practical-based"
              level: "Beginner to Advanced",
              tags: ["SketchUp", "3D Modeling", "Architecture", "Interior Design", "Rendering"],
              certification: "SketchUp Modeler",
              includes: [{ icon: PencilRuler, text: "Practical-based learning" }],
              softwareCovered: ["SketchUp"]
            }
          },
        ],
      },
      {
        name: "Visualization & Animation",
        slug: "visualization-animation",
        subcourses: [
          {
            name: "Lumion Rendering",
            slug: "lumion-rendering",
            fullTitle: "Lumion Rendering Course",
            description: "Produce stunning architectural visualizations and renders with Lumion, transforming models into captivating scenes.",
            details: {
              overview: "This course focuses on creating high-quality architectural renders and animations using Lumion. You will learn to import models, add materials, lighting, and environmental effects to bring your designs to life.",
              whatYouWillLearn: [
                "Import models from SketchUp, Revit, etc.",
                "Apply realistic materials and textures.",
                "Set up dynamic lighting and weather effects.",
                "Create engaging animated walkthroughs.",
                "Render high-resolution images and videos."
              ],
              requirements: ["Basic 3D modeling knowledge (e.g., SketchUp or Revit basics)."],
              curriculum: [
                { title: "Module 1: Lumion Interface & Importing", modules: ["Interface Overview", "Importing Models", "Scenes & Layers"] },
                { title: "Module 2: Materials & Textures", modules: ["Applying Materials", "Custom Textures", "Material Editor"] },
                { title: "Module 3: Lighting & Weather", modules: ["Natural Light", "Artificial Lights", "Rain, Snow, Clouds"] },
                { title: "Module 4: Objects & Environment", modules: ["Placing Objects", "Nature & Landscape", "Foliage"] },
                { title: "Module 5: Animation & Effects", modules: ["Camera Animation", "Movie Mode", "Special Effects"] },
                { title: "Module 6: Rendering & Export", modules: ["Image & Video Output", "Render Settings", "Post-processing"] },
              ],
              duration: "4 weeks",
              level: "Intermediate",
              tags: ["Lumion", "Rendering", "Visualization", "Architecture", "Animation"],
              certification: "Lumion Visualization Specialist",
              includes: [{ icon: Monitor, text: "Hands-on rendering projects" }],
              softwareCovered: ["Lumion"]
            }
          },
          {
            name: "3D Animation & VFX",
            slug: "3d-animation-vfx",
            fullTitle: "3ds Max Course Content",
            description: "Dive into the world of visual effects and 3D animation using industry-standard software like 3ds Max.",
            details: {
              subtitle: "Comprehensive 3D Modeling, Animation & Rendering",
              overview: "This comprehensive course guides you through 3ds Max, a leading software for 3D modeling, animation, and rendering. You'll master creating complex 3D scenes, characters, and animations for various applications, from architectural visualization to game asset development.",
              whatYouWillLearn: [
                "Understand the 3ds Max interface and project management.",
                "Master 2D & 3D modeling techniques (Parametric, Poly, Spline, NURBS).",
                "Apply materials and textures for realistic rendering.",
                "Set up advanced lighting and camera compositions.",
                "Create keyframe animations and object transformations.",
                "Explore dynamics, effects, and particle systems.",
                "Perform high-quality rendering and final export.",
                "Complete real-world projects to build a strong portfolio."
              ],
              requirements: ["Basic computer literacy, artistic inclination beneficial."],
              curriculum: [
                { title: "Module 1: Introduction to 3ds Max", modules: ["Overview of 3ds Max interface", "Viewport navigation and layout customization", "Understanding file formats (.max, .obj, .fbx)", "Creating and managing projects"] },
                { title: "Module 2: 3D Modeling Basics", modules: ["Parametric objects (primitives, splines)", "Editable Poly and Editable Mesh", "Transformations: Move, Rotate, Scale", "Working with modifiers (Bend, Taper, TurboSmooth, etc.)", "Booleans and compound objects", "Precision modeling using snapping and alignment"] },
                { title: "Module 3: Advanced Modeling Techniques", modules: ["Spline modeling and lofting", "NURBS modeling", "Polygonal modeling (subdivision surface modeling)", "Hard surface modeling (furniture, vehicles, mechanical parts)", "Organic modeling (characters, creatures - intro level)"] },
                { title: "Module 4: Materials and Texturing", modules: ["Introduction to Material Editor (Standard & Slate)", "Using PBR materials and V-Ray/Arnold shaders", "UVW Mapping and Unwrapping", "Texture baking and normal maps", "Applying bump, specular, and displacement maps"] },
                { title: "Module 5: Lighting Techniques", modules: ["Types of lights (Omni, Target Spot, Target Direct, Skylight, Photometric)", "Interior and exterior lighting setups", "Daylight system and HDRI lighting", "Global Illumination (GI) basics", "Lighting for realism (with Arnold or V-Ray)"] },
                { title: "Module 6: Cameras and Composition", modules: ["Creating and using cameras", "Perspective and orthographic views", "Camera animation and walkthroughs", "Rule of thirds and composition basics"] },
                { title: "Module 7: Animation Basics", modules: ["Keyframe animation", "Timeline and curve editor", "Object animation (position, rotation, scale)", "Path constraints and linking", "Basic character animation concepts"] },
                { title: "Module 8: Dynamics and Effects (Optional)", modules: ["Introduction to Particle Systems", "Basic Cloth and Hair simulations", "Rigid body dynamics with MassFX", "Environmental effects (fog, fire, water)"] },
                { title: "Module 9: Rendering", modules: ["Render setup basics (Arnold, V-Ray, Scanline)", "Output resolution and file formats", "Batch rendering", "Ambient occlusion and depth of field", "Render Elements and compositing basics"] },
                { title: "Module 10: Real-World Projects", modules: ["Interior visualization project", "Exterior architectural walkthrough", "Product rendering showcase", "Animated logo or short animation project", "Portfolio development tips"] },
                { title: "Bonus Modules (Optional Add-ons)", modules: ["Integration with Photoshop and After Effects", "3ds Max + Unreal Engine or Unity workflow", "Introduction to scripting with MAXScript", "Using 3ds Max for game asset development"] }
              ],
              duration: "12 weeks",
              level: "Intermediate to Advanced",
              tags: ["3ds Max", "3D Modeling", "Animation", "VFX", "Rendering", "Game Art"],
              certification: "3ds Max Professional",
              includes: [{ icon: Monitor, text: "Extensive project work" }],
              softwareCovered: ["3ds Max", "V-Ray", "Arnold"]
            }
          },
        ],
      },
      {
        name: "Mechanical Design",
        slug: "mechanical-design",
        subcourses: [
          {
            name: "Mechanical Design",
            slug: "mechanical-design",
            fullTitle: "Mechanical Design Engineering",
            description: "Fundamentals of mechanical engineering design principles, covering CAD tools, analysis, and manufacturing processes.",
            details: {
              overview: "This course covers the principles and practices of mechanical design, from conceptualization to manufacturing. You'll learn industry-standard CAD software and analysis techniques to design functional components and systems.",
              whatYouWillLearn: [
                "Understand design processes and methodologies.",
                "Master CAD software for 2D and 3D modeling.",
                "Apply engineering principles to design components.",
                "Perform basic stress and motion analysis.",
                "Understand manufacturing processes and material selection."
              ],
              requirements: ["Basic engineering knowledge."],
              curriculum: [
                { title: "Module 1: Design Principles", modules: ["Design Process", "Material Selection", "Tolerance & Fits"] },
                { title: "Module 2: CAD Software (e.g., SolidWorks/Fusion 360)", modules: ["Sketching", "Part Modeling", "Assembly Design", "Drafting"] },
                { title: "Module 3: Engineering Mechanics", modules: ["Stress & Strain", "Statics & Dynamics (intro)"] },
                { title: "Module 4: Manufacturing Processes", modules: ["Machining", "Casting", "Additive Manufacturing (intro)"] },
                { title: "Module 5: Project Work", modules: ["Design and analyze a mechanical component"] },
              ],
              duration: "10 weeks",
              level: "Intermediate",
              tags: ["Mechanical", "CAD", "Engineering", "Design"],
              certification: "Mechanical Design Specialist",
              includes: [{ icon: Hammer, text: "Design Projects" }]
            }
          },
        ],
      },
      {
        name: "Automation",
        slug: "automation",
        subcourses: [
          {
            name: "Automation Fundamentals and Applications",
            slug: "automation-fundamentals-applications",
            fullTitle: "Automation Fundamentals and Applications",
            description: "Learn the core concepts of automation, including industrial automation, RPA, and test automation, with real-world applications.",
            details: {
              subtitle: "Mastering Industrial, IT, and Robotic Process Automation",
              overview: "This course provides a comprehensive introduction to automation, covering its history, benefits, and various types, including Industrial Automation, IT Automation, Robotic Process Automation (RPA), and Test Automation. You'll learn control systems, sensors, actuators, and how to implement real-world automation projects.",
              whatYouWillLearn: [
                "Understand the fundamentals, benefits, and types of automation.",
                "Grasp control systems basics including sensors and actuators.",
                "Learn about Programmable Logic Controllers (PLC) and SCADA.",
                "Explore IT process automation tools and scripting.",
                "Master Robotic Process Automation (RPA) concepts and tools.",
                "Understand manual vs. automated testing frameworks.",
                "Learn about the automation project lifecycle, safety, security, and compliance.",
                "Develop real-world automation projects and gain career guidance."
              ],
              requirements: ["Basic computer literacy."],
              curriculum: [
                { title: "Module 1: Introduction to Automation", modules: ["What is Automation?", "History and evolution of automation", "Benefits of automation", "Types of automation: Industrial Automation, Process Automation, IT Automation, Robotic Process Automation (RPA), Test Automation"] },
                { title: "Module 2: Control Systems Basics", modules: ["Open-loop vs Closed-loop control systems", "Components of control systems: Sensors, Actuators, Controllers", "Introduction to PID controllers", "Basic electrical & electronic concepts (voltage, current, relays, switches)"] },
                { title: "Module 3: Industrial Automation", modules: ["Programmable Logic Controllers (PLC)", "Architecture & Working", "Ladder Logic Programming", "Human Machine Interface (HMI)", "Supervisory Control and Data Acquisition (SCADA)", "Distributed Control Systems (DCS)"] },
                { title: "Module 4: Sensors and Actuators", modules: ["Types of sensors: Proximity, Temperature, Pressure, etc.", "Actuators: Hydraulic, Pneumatic, Electric", "Sensor interfacing and signal conditioning"] },
                { title: "Module 5: IT Process Automation", modules: ["Automation tools overview (e.g., Ansible, Jenkins, Puppet, Chef)", "Scripting with Python or Bash for automation", "Infrastructure as Code (IaC)", "Scheduling tasks and workflows (e.g., Cron jobs, Airflow)"] },
                { title: "Module 6: Robotic Process Automation (RPA)", modules: ["Introduction to RPA", "RPA vs Traditional automation", "Use cases", "Tools: UiPath, Automation Anywhere, Blue Prism", "Creating bots and automating workflows"] },
                { title: "Module 7: Test Automation", modules: ["Manual vs Automated testing", "Test automation frameworks (Selenium, Cypress, Robot Framework)", "Writing test scripts (Python/Java/JavaScript)", "Continuous Integration/Continuous Deployment (CI/CD) basics"] },
                { title: "Module 8: Automation Project Lifecycle", modules: ["Requirement analysis", "Tool selection", "Design & development", "Testing & validation", "Maintenance"] },
                { title: "Module 9: Safety, Security & Compliance", modules: ["Safety standards in automation (e.g., IEC 61508)", "Cybersecurity in automation systems", "Risk assessment and mitigation"] },
                { title: "Module 10: Real-world Projects & Case Studies", modules: ["Industrial automation project using PLC + SCADA", "IT automation using Python and Ansible", "RPA bot for invoice processing", "Web testing project using Selenium"] },
                { title: "Optional: Certifications and Career Guidance", modules: ["Recommended certifications (e.g., ISA, UiPath, ISTQB Automation, etc.)", "Building a portfolio", "Resume tips for automation roles", "Interview preparation"] }
              ],
              duration: "10-14 weeks",
              level: "Beginner to Advanced",
              tags: ["Automation", "RPA", "PLC", "SCADA", "IT Automation", "Test Automation"],
              certification: "Automation Specialist",
              includes: [{ icon: Settings, text: "Real-world projects & case studies" }],
            }
          },
        ],
      },
      {
        name: "Graphic Design",
        slug: "graphic-design",
        subcourses: [
          {
            name: "Adobe Photoshop",
            slug: "adobe-photoshop",
            fullTitle: "Adobe Photoshop Course Content",
            description: "Master image editing, graphic design, and photo manipulation with Adobe Photoshop, the industry-leading software.",
            details: {
              subtitle: "From Beginner to Professional Photo Editor & Designer",
              overview: "This comprehensive Adobe Photoshop course covers everything from the basics of image editing to advanced graphic design and photo manipulation techniques. You'll learn to work with layers, masks, selections, colors, brushes, and create stunning visual projects.",
              whatYouWillLearn: [
                "Understand the Photoshop interface and essential tools.",
                "Master layers, masks, and selections for precise editing.",
                "Work with colors, brushes, and image manipulation techniques.",
                "Perform photo retouching and enhancement.",
                "Create stunning typography and text effects.",
                "Combine multiple images and apply compositing effects.",
                "Design various graphic projects like social media graphics and mockups.",
                "Learn best practices for exporting and finalizing your work."
              ],
              requirements: ["Basic computer literacy."],
              curriculum: [
                { title: "Module 1: Introduction to Photoshop", modules: ["What is Adobe Photoshop?", "Overview of Photoshop interface", "Understanding raster vs. vector graphics", "Setting up your workspace", "Opening, creating, and saving documents"] },
                { title: "Module 2: Basic Tools and Navigation", modules: ["Move, Marquee, Lasso tools", "Crop & Slice tools", "Zoom, Hand, and Navigation techniques", "Undo history and keyboard shortcuts"] },
                { title: "Module 3: Working with Colors and Brushes", modules: ["Foreground vs. background color", "Color modes (RGB, CMYK, Grayscale)", "Swatches and gradients", "Brush tool and settings", "Using the Eyedropper"] },
                { title: "Module 4: Layers and Masks", modules: ["Understanding layers and layer panels", "Layer styles and blending options", "Adjustment layers", "Layer masks and clipping masks", "Grouping and linking layers"] },
                { title: "Module 5: Selections and Image Manipulation", modules: ["Selection tools: Marquee, Lasso, Quick Selection, Magic Wand", "Modify, refine, and feather selections", "Content-Aware Fill", "Transforming objects (scale, rotate, skew)", "Smart Objects and linked files"] },
                { title: "Module 6: Retouching and Enhancing Photos", modules: ["Healing Brush, Patch Tool, Clone Stamp", "Spot Healing and Red Eye Tool", "Dodge, Burn, and Sponge Tools", "Sharpening and blurring images", "Noise reduction and image enhancement"] },
                { title: "Module 7: Typography and Text Effects", modules: ["Adding and formatting text", "Type layers and text styles", "Warping text", "Creating text effects (glow, shadow, emboss)", "Using text in design projects"] },
                { title: "Module 8: Compositing and Effects", modules: ["Combining multiple images", "Blending techniques", "Using filters and filter gallery", "Adjustment layers (levels, curves, hue/saturation)", "Creating double exposure or surreal effects"] },
                { title: "Module 9: Design Projects", modules: ["Creating social media graphics", "Designing a poster or flyer", "Photo montage and banners", "Web design mockups", "Business card or logo design"] },
                { title: "Module 10: Exporting and Finalizing", modules: ["Exporting for print and web", "File types: PSD, JPG, PNG, TIFF, PDF", "Exporting artboards and slices", "Working with Adobe Bridge and Lightroom"] },
                { title: "Bonus Topics (Optional)", modules: ["Introduction to Adobe Camera Raw", "Basic animation and frame-by-frame GIFs", "Using Photoshop with Illustrator", "Mockups and smart mockup applications", "Best practices for non-destructive editing"] }
              ],
              duration: "8-10 weeks",
              level: "Beginner to Intermediate",
              tags: ["Photoshop", "Graphic Design", "Image Editing", "Photo Manipulation", "Design"],
              certification: "Adobe Photoshop Specialist",
              includes: [{ icon: Palette, text: "Practical design projects" }],
              softwareCovered: ["Adobe Photoshop"]
            }
          },
        ],
      }
    ],
  },
  {
    name: "Business & Management",
    slug: "business-management",
    icon: FlaskConical, // Or Briefcase, PieChart, etc.
    courses: [
      {
        name: "Project Management",
        slug: "project-management",
        subcourses: [
          {
            name: "PMP – Project Management Professional",
            slug: "pmp-project-management-professional",
            fullTitle: "PMP – Project Management Professional",
            description: "Master project planning, execution, and leadership for PMP certification, a globally recognized credential by PMI.",
            details: {
              subtitle: "Globally Recognized Project Leadership Certification",
              overview: "Master project planning, execution, and leadership with our PMP Certification Course. Ideal for project managers and professionals aiming to manage complex projects successfully, this globally recognized certification boosts your credibility and career potential.",
              whatYouWillLearn: [
                "Understand PMP certification and PMI framework.",
                "Master project lifecycle and phases.",
                "Lead and build high-performing teams.",
                "Execute projects with urgency and discipline.",
                "Manage communications, risks, and procurement.",
                "Apply Agile and Hybrid project approaches.",
                "Prepare thoroughly for the PMP exam."
              ],
              requirements: ["Project management experience as per PMI guidelines (check PMI website for latest eligibility)."],
              curriculum: [
                { title: "Module 1: Introduction to PMP and Project Management", modules: ["What is PMP certification?", "PMI and PMBOK® Guide overview", "Project vs. operations", "Project life cycle and phases", "Project management vs. product management", "Role of the project manager"] },
                { title: "Module 2: Project Management Framework", modules: ["PMBOK® structure: 12 principles of project management", "Performance domains: 1. Stakeholders, 2. Team, 3. Development Approach and Lifecycle, 4. Planning, 5. Project Work, 6. Delivery, 7. Measurement, 8. Uncertainty/Risk"] },
                { title: "Module 3: People (Leadership & Teams)", modules: ["Build a high-performing team", "Define team ground rules", "Negotiate project agreements", "Empower team members", "Support team performance", "Manage conflicts", "Lead a team (traditional vs. agile)", "Collaborate with stakeholders", "Emotional intelligence for leaders"] },
                { title: "Module 4: Process (Technical PM Skills)", modules: ["Execute project with urgency and discipline", "Manage communications", "Assess and manage risks", "Engage stakeholders", "Budget and cost control", "Schedule and resource management", "Procurement and vendor management", "Quality management", "Change control", "Use of project artifacts (plans, registers, logs)", "Earned Value Management (EVM)"] },
                { title: "Module 5: Business Environment", modules: ["Support organizational change", "Ensure project benefits realization", "Align project with business goals", "Regulatory compliance and governance", "Sustainability and long-term value"] },
                { title: "Module 6: Agile and Hybrid Approaches", modules: ["Agile manifesto and principles", "Agile vs. traditional (waterfall) vs. hybrid", "Scrum, Kanban, Lean basics", "Backlogs, sprints, velocity", "Agile roles (Scrum Master, Product Owner)", "Servant leadership in Agile", "When and how to apply hybrid approaches"] },
                { title: "Module 7: PMP Exam Preparation", modules: ["PMP exam format: 180 questions, 230 minutes", "Types of questions (scenario-based, matching, multiple response)", "Exam domains and weightage", "Tips for study and time management", "Sample questions and mock exams", "Application and audit process", "Maintaining your certification (PDU requirements)"] },
                { title: "Course Duration & Format (from document)", modules: ["Full Course: 35 Hours (fulfills PMI requirement)", "Formats: 4-week (weekend), 5-day bootcamp, or self-paced online"] }
              ],
              duration: "4–6 weeks",
              level: "Advanced",
              tags: ["PMP", "Project Management", "PMI", "Agile", "Scrum"],
              certification: "PMI-Aligned PMP Preparation",
              includes: [{ icon: BookText, text: "Mode: Online/Offline" }]
            }
          },
          {
            name: "Six Sigma (Green Belt / Black Belt)",
            slug: "six-sigma",
            fullTitle: "Six Sigma Green Belt / Black Belt",
            description: "Achieve process improvement expertise with Six Sigma methodologies for quality management and efficiency.",
            details: {
              overview: "This course provides a deep dive into Six Sigma methodologies, teaching you how to analyze and improve business processes to reduce defects and enhance efficiency. Choose between Green Belt for basic implementation or Black Belt for advanced leadership.",
              whatYouWillLearn: [
                "Understand DMAIC (Define, Measure, Analyze, Improve, Control) methodology.",
                "Apply statistical tools for process analysis.",
                "Lead process improvement projects.",
                "Reduce defects and variability in processes.",
                "Enhance operational efficiency and customer satisfaction."
              ],
              requirements: ["Basic statistical knowledge beneficial."],
              curriculum: [
                { title: "Module 1: Define Phase", modules: ["Project Charter", "Voice of the Customer", "SIPOC"] },
                { title: "Module 2: Measure Phase", modules: ["Data Collection", "Basic Statistics", "Process Capability"] },
                { title: "Module 3: Analyze Phase", modules: ["Root Cause Analysis", "Hypothesis Testing", "Correlation/Regression"] },
                { title: "Module 4: Improve Phase", modules: ["Solution Generation", "Pilot Studies", "Implementation Planning"] },
                { title: "Module 5: Control Phase", modules: ["Control Charts", "Sustainment Plan"] },
              ],
              duration: "8-12 weeks",
              level: "Intermediate to Advanced",
              tags: ["Six Sigma", "Quality", "Process Improvement"],
              certification: "Lean Six Sigma",
              includes: [{ icon: FlaskConical, text: "Case Studies" }]
            }
          },
          {
            name: "SAP MM (Materials Management)",
            slug: "sap-mm",
            fullTitle: "SAP MM (Materials Management) Course Content",
            description: "Master SAP MM for efficient materials management, procurement, inventory, and supply chain operations within an enterprise.",
            details: {
              subtitle: "Comprehensive Training in SAP Materials Management Module",
              overview: "This course provides in-depth knowledge of SAP Materials Management (MM) module, covering essential processes like procurement, inventory management, material valuation, and integration with other SAP modules. It's ideal for aspiring SAP consultants and end-users.",
              whatYouWillLearn: [
                "Understand the overview and organizational structure of SAP MM.",
                "Master material and vendor master data management.",
                "Learn the complete procurement process (PR to PO).",
                "Manage inventory effectively (Goods Receipt, Goods Issue, Transfers).",
                "Perform invoice verification and resolve discrepancies.",
                "Understand material valuation and account determination.",
                "Explore special procurement processes and pricing procedures.",
                "Learn reporting, analytics, and integration with other SAP modules.",
                "Gain practical experience with real-time scenarios and practice projects."
              ],
              requirements: ["Basic understanding of business processes or supply chain management."],
              curriculum: [
                { title: "Module 1: Introduction to SAP and SAP MM", modules: ["Overview of SAP ERP system", "SAP modules overview", "Role and importance of SAP MM", "Navigation in SAP GUI", "Organizational structure in SAP MM: Company Code, Plant, Storage Location, Purchasing Organization, Purchasing Group"] },
                { title: "Module 2: Master Data in SAP MM", modules: ["Material Master: Views and fields in material master, Material types", "Vendor Master: Vendor account groups, Central, purchasing, and accounting views", "Purchase Info Record", "Source List", "Quota Arrangement"] },
                { title: "Module 3: Procurement Process", modules: ["Basics of procurement cycle", "Purchase Requisition (PR)", "Request for Quotation (RFQ)", "Quotation and comparison", "Purchase Order (PO)", "Outline Agreements (Contracts, Scheduling Agreements)"] },
                { title: "Module 4: Inventory Management", modules: ["Goods Receipt (GR) for PO", "Goods Issue (GI) for production, cost center, etc.", "Transfer postings", "Stock transfers (within and between plants)", "Physical inventory process"] },
                { title: "Module 5: Invoice Verification", modules: ["Logistics Invoice Verification (LIV)", "Invoice blocking reasons", "Credit memos and subsequent debit/credit", "Automatic vs manual postings"] },
                { title: "Module 6: Valuation and Account Determination", modules: ["Material Valuation Types (Standard, Moving Average)", "Account determination process", "Configuration of automatic postings (OBYC)"] },
                { title: "Module 7: Special Procurement Processes", modules: ["Consignment", "Subcontracting", "Stock Transport Orders (STO)", "Pipeline Handling", "Return deliveries"] },
                { title: "Module 8: Pricing Procedure in MM", modules: ["Pricing schema and conditions", "Access sequence", "Condition types", "Calculation schema"] },
                { title: "Module 9: Release Procedures", modules: ["PR and PO release strategy", "Classification vs without classification", "Workflow integration (basic)"] },
                { title: "Module 10: Reporting and Analytics", modules: ["Standard MM reports", "ME2N, MB52, MB5T, etc.", "Custom report basics"] },
                { title: "Module 11: Integration with Other Modules", modules: ["MM-FI Integration (GR/IR, Inventory valuation)", "MM-SD Integration (Third-party processing)", "MM-PP Integration (Material requirements planning)"] },
                { title: "Module 12: Configuration (SPRO) Overview", modules: ["Enterprise structure configuration", "Master data setup", "Purchasing and inventory configuration", "Pricing and release strategy config"] },
                { title: "Module 13: Real-Time Scenarios & Practice", modules: ["End-to-end procurement scenario (PR to Payment)", "Real-time case studies", "Common errors and troubleshooting"] },
                { title: "Module 14: SAP MM S/4HANA (Optional Add-on)", modules: ["Differences between ECC and S/4HANA MM", "Fiori apps for MM", "Business Partner approach", "New inventory tables and simplification"] }
              ],
              duration: "12-16 weeks", // Estimated based on content
              level: "Intermediate to Advanced",
              tags: ["SAP", "MM", "ERP", "Supply Chain", "Procurement", "Inventory"],
              certification: "SAP MM Consultant",
              includes: [{ icon: Database, text: "Practical SAP exercises" }],
              softwareCovered: ["SAP ECC", "SAP S/4HANA"]
            }
          },
        ],
      },
      {
        name: "Marketing & Analytics",
        slug: "marketing-analytics",
        subcourses: [
          {
            name: "Digital Marketing (SEO, SEM, Social Media Marketing)",
            slug: "digital-marketing",
            fullTitle: "Digital Marketing Mastery Course Content",
            description: "Complete digital marketing course covering SEO, PPC, social media, content strategy, and analytics for online success.",
            details: {
              subtitle: "Master SEO, Social Media, Content, and Analytics for Online Success",
              overview: "This comprehensive digital marketing course covers all essential aspects of online marketing, including Search Engine Optimization (SEO), Search Engine Marketing (SEM/Google Ads), Social Media Marketing (SMM), Content Marketing, Email Marketing, Web Analytics, Affiliate Marketing, Influencer Marketing, and E-commerce. You'll gain practical skills to drive traffic, leads, and sales.",
              whatYouWillLearn: [
                "Understand the digital marketing landscape and career scope.",
                "Plan and develop effective website strategies.",
                "Master SEO (On-page, Off-page, Technical) and keyword research.",
                "Run successful Google Ads (SEM) campaigns.",
                "Develop and execute social media marketing strategies.",
                "Create compelling content and email marketing campaigns.",
                "Analyze web performance using Google Analytics 4.",
                "Explore affiliate marketing, influencer marketing, and e-commerce strategies.",
                "Build a digital marketing portfolio and prepare for career opportunities."
              ],
              requirements: ["Basic computer and internet usage skills."],
              curriculum: [
                { title: "Module 1: Introduction to Digital Marketing", modules: ["What is Digital Marketing?", "Traditional vs. Digital Marketing", "The Digital Marketing Funnel", "Key Performance Indicators (KPIs)", "Career Scope in Digital Marketing"] },
                { title: "Module 2: Website Planning and Development", modules: ["Importance of a Website in Digital Marketing", "Domain, Hosting, and CMS (WordPress introduction)", "Website Structure and UX Design Basics", "Landing Pages and Conversion Optimization"] },
                { title: "Module 3: Search Engine Optimization (SEO)", modules: ["Basics of Search Engines", "Types of SEO: On-Page, Off-Page, Technical", "Keyword Research Tools (Google Keyword Planner, SEMrush)", "On-Page Optimization (Title Tags, Meta Descriptions, URLs)", "Link Building Strategies", "Local SEO & Google My Business", "SEO Analytics and Reporting"] },
                { title: "Module 4: Search Engine Marketing (SEM) / Google Ads", modules: ["Introduction to Paid Search", "Google Ads Account Setup", "Types of Ads: Search, Display, Video, Shopping", "Keyword Match Types and Bidding Strategies", "Quality Score & Ad Rank", "Conversion Tracking & Remarketing"] },
                { title: "Module 5: Social Media Marketing (SMM)", modules: ["Platforms Overview: Facebook, Instagram, LinkedIn, Twitter, YouTube", "Social Media Strategy & Planning", "Paid Social Media Advertising (Meta Ads, LinkedIn Ads)", "Content Calendar Creation", "Social Media Analytics (Meta Insights, LinkedIn Analytics)"] },
                { title: "Module 6: Content Marketing", modules: ["Importance of Content in Digital Marketing", "Content Strategy and Planning", "Blogging, Articles, and Infographics", "Content Optimization for SEO", "Tools: Grammarly, Canva, BuzzSumo"] },
                { title: "Module 7: Email Marketing", modules: ["Email List Building and Segmentation", "Email Campaign Design and Tools (Mailchimp, ConvertKit)", "Automation and Drip Campaigns", "A/B Testing", "Email Metrics and Analysis"] },
                { title: "Module 8: Web Analytics (Google Analytics 4)", modules: ["Understanding Google Analytics Interface", "Real-Time, Audience, Acquisition, Behavior Reports", "Events and Conversions", "UTM Parameters", "Setting up GA4 and Google Tag Manager Basics"] },
                { title: "Module 9: Affiliate Marketing", modules: ["What is Affiliate Marketing?", "Networks: Amazon Associates, ClickBank, CJ", "Choosing Products and Niches", "Setting Up Affiliate Links and Tracking", "Ethical and Legal Considerations"] },
                { title: "Module 10: Influencer & Video Marketing", modules: ["Rise of Influencer Marketing", "Choosing the Right Influencer", "YouTube Channel Setup & Optimization", "Video Content Strategy", "Live Streaming and Shorts/Reels"] },
                { title: "Module 11: Online Reputation Management (ORM)", modules: ["What is ORM?", "Tools: Google Alerts, Mention, Social Listening Tools", "Managing Reviews (Google, Yelp, etc.)", "Crisis Management on Digital Platforms"] },
                { title: "Module 12: Marketing Automation & Tools", modules: ["Overview of Automation Platforms (HubSpot, Zapier)", "CRM Integration", "Lead Nurturing & Lifecycle Campaigns", "Chatbots (ManyChat, Tidio)"] },
                { title: "Module 13: E-Commerce & Dropshipping Marketing", modules: ["E-Commerce Platforms Overview (Shopify, WooCommerce)", "Product Page Optimization", "Abandoned Cart Emails", "E-Commerce SEO and Ads"] },
                { title: "Module 14: Freelancing & Career Building", modules: ["Building a Digital Marketing Portfolio", "Freelancing Platforms (Upwork, Fiverr)", "Personal Branding", "Resume & Interview Preparation"] },
                { title: "Optional Bonus Modules", modules: ["App Store Optimization (ASO)", "WhatsApp Marketing", "Voice Search Optimization", "AI in Digital Marketing (ChatGPT, Jasper)"] }
              ],
              duration: "14-16 weeks",
              level: "Beginner",
              tags: ["SEO", "SEM", "Social Media", "Content", "Email Marketing", "Analytics"],
              certification: "Digital Marketing Professional",
              includes: [{ icon: Globe, text: "Practical Campaigns" }]
            }
          },
          {
            name: "Business Analytics",
            slug: "business-analytics",
            fullTitle: "Business Analytics Professional",
            description: "Leverage data for strategic decision-making in business, covering tools like Excel, SQL, and Power BI.",
            details: {
              overview: "This course equips you with the skills to analyze business data, identify trends, and make informed decisions. You'll learn essential tools and techniques for data visualization, statistical analysis, and reporting.",
              whatYouWillLearn: [
                "Understand business intelligence concepts.",
                "Use Excel for advanced data analysis and modeling.",
                "Query databases with SQL to extract insights.",
                "Create interactive dashboards with Power BI or Tableau.",
                "Perform statistical analysis for business problems."
              ],
              requirements: ["Basic computer literacy."],
              curriculum: [
                { title: "Module 1: Introduction to Business Analytics", modules: ["What is Business Analytics?", "Types of Analytics", "Role of a Business Analyst"] },
                { title: "Module 2: Excel for Business Analysis", modules: ["Advanced Formulas", "Advanced Charts", "Pivot Tables", "Data Validation", "What-If Analysis"] }, // Added Advanced Charts to Modules
                { title: "Module 3: SQL for Data Extraction", modules: ["Basic Queries", "Joins", "Subqueries"] },
                { title: "Module 4: Data Visualization & Reporting", modules: ["Power BI/Tableau Basics", "Dashboard Design", "Storytelling with Data"] },
                { title: "Module 5: Statistical Methods in Business", modules: ["Regression Analysis", "Forecasting", "Hypothesis Testing"] },
              ],
              duration: "8 weeks",
              level: "Intermediate",
              tags: ["Business", "Analytics", "Excel", "SQL", "Power BI"],
              certification: "Business Analytics Specialist",
              includes: [{ icon: FlaskConical, text: "Business Case Studies" }]
            }
          },
          {
            name: "Excel & PowerPoint",
            slug: "excel-powerpoint",
            fullTitle: "Microsoft Excel & PowerPoint Course: Basic to Advanced",
            description: "Become an office productivity expert. Learn data analysis, automation using formulas, charts, pivot tables, and create impactful presentations.",
            details: {
              subtitle: "Master Data Analysis and Professional Presentation Skills",
              overview: "This combined course empowers you to become an office productivity expert. You'll master data analysis, automation with formulas and pivot tables in Excel, and learn to create impactful, professional presentations using PowerPoint.",
              whatYouWillLearn: [
                "Master Excel interface, basic operations, and formulas.",
                "Perform intermediate and advanced data management (sorting, filtering, validation).",
                "Utilize advanced Excel formulas and functions (VLOOKUP, XLOOKUP, Array Formulas).",
                "Create and modify Pivot Tables and Pivot Charts for data analysis.",
                "Work with Power Query and Power Pivot for advanced data modeling.",
                "Build interactive dashboards and automate tasks with VBA (Macros).",
                "Understand PowerPoint interface, slides, and layouts.",
                "Insert and format text, shapes, images, media, and charts in PowerPoint.",
                "Apply design principles, animations, and transitions for engaging presentations.",
                "Learn collaboration features and best practices for delivery."
              ],
              requirements: ["Basic computer literacy."],
              curriculum: [
                { title: "Module 1: Introduction to Excel (Beginner Level)", modules: ["1.1 Excel Interface: Workbook vs Worksheet, Ribbon and Tabs, Cells, Rows, Columns, and Ranges", "1.2 Basic Operations: Data Entry and Editing, Formatting, AutoFill and Flash Fill, Saving and Opening Files", "1.3 Basic Formulas and Functions: Mathematical Operators, Basic Functions (SUM, AVERAGE, MIN, MAX, COUNT), Cell Referencing", "1.4 Working with Worksheets: Insert, Rename, Delete Sheets, Copying and Moving Data Between Sheets"] },
                { title: "Module 2: Intermediate Excel", modules: ["2.1 Data Management: Sorting and Filtering, Conditional Formatting, Data Validation, Find and Replace, Go To Special", "2.2 Intermediate Formulas: Logical Functions (IF, AND, OR, IFERROR), Lookup Functions (VLOOKUP, HLOOKUP, INDEX, MATCH), Text Functions (LEFT, RIGHT, MID, LEN, TRIM, CONCATENATE, TEXTJOIN), Date & Time Functions (TODAY, NOW, DATEDIF, TEXT, EDATE)", "2.3 Charts and Visualization: Creating Charts (Bar, Line, Pie, Column, etc.), Chart Formatting and Design Tools, Sparklines"] },
                { title: "Module 3: Advanced Excel", modules: ["3.1 Advanced Formulas and Functions: Nested Functions, Array Formulas and Dynamic Arrays (SEQUENCE, SORT, FILTER, UNIQUE), Advanced Lookup Techniques (e.g. XLOOKUP)", "3.2 Pivot Tables and Pivot Charts: Creating and Modifying Pivot Tables, Slicers and Timelines, Pivot Charts for Data Analysis", "3.3 Data Tools: What-If Analysis (Goal Seek, Data Tables, Scenario Manager), Grouping and Subtotals, Consolidating Data, Removing Duplicates"] },
                { title: "Module 4: Excel for Data Analysis", modules: ["4.1 Power Query (Get & Transform): Importing Data from External Sources, Data Cleaning and Shaping, Append and Merge Queries", "4.2 Power Pivot: Data Model Creation, DAX Formulas, Relationships and Measures", "4.3 Dashboards: Creating Interactive Dashboards, Using Form Controls (sliders, buttons), Linking Charts and Filters"] },
                { title: "Module 5: Excel Automation with VBA (Macros)", modules: ["5.1 Introduction to Macros: Recording Macros, Running and Editing Recorded Macros", "5.2 VBA Programming Basics: The VBA Editor Interface, Variables, Data Types, and Operators, Control Structures: If, For, Do While", "5.3 Working with Objects: Range, Workbook, Worksheet Objects, Events and Procedures", "5.4 Advanced VBA: UserForms, Error Handling, Automating Reports, Creating Custom Functions (UDFs)"] },
                { title: "Bonus Topics (Optional Add-Ons for Excel)", modules: ["Excel for Financial Modeling", "Collaboration and Sharing", "Excel Integration with Power BI", "Excel Online vs Desktop Differences"] },
                { title: "Module 6: Introduction to PowerPoint", modules: ["What is PowerPoint?", "Overview of the PowerPoint Interface", "Creating, Opening & Saving Presentations", "Understanding Slides, Layouts, and Placeholders"] }, // Renumbered PowerPoint modules
                { title: "Module 7: Working with Slides", modules: ["Adding & Deleting Slides", "Slide Layouts & Themes", "Using Slide Master for Consistent Design", "Organizing Slides with Sections"] },
                { title: "Module 8: Text and Shapes", modules: ["Inserting & Formatting Text Boxes", "Using SmartArt Graphics", "Drawing & Formatting Shapes", "Grouping, Aligning, and Layering Objects"] },
                { title: "Module 9: Images, Media & Charts", modules: ["Inserting Images & Icons", "Using Online Pictures & 3D Models", "Adding Audio and Video", "Creating & Customizing Charts"] },
                { title: "Module 10: Design & Animation", modules: ["Using Design Ideas & Themes", "Customizing Backgrounds", "Applying Transitions Between Slides", "Adding & Customizing Animations"] },
                { title: "Module 11: Advanced Features", modules: ["Custom Slide Shows", "Hyperlinks & Action Buttons", "Embedding Excel Data", "Using Zoom for Interactive Presentations"] },
                { title: "Module 12: Collaboration & Delivery", modules: ["Comments & Co-authoring", "Comparing and Merging Presentations", "Presenter View and Printing Slides", "Exporting to PDF or Video"] },
                { title: "Module 13: Best Practices & Tips", modules: ["Presentation Design Principles (CRAP: Contrast, Repetition, Alignment, Proximity)", "Using Colors and Fonts Effectively", "Avoiding Common Mistakes", "Tips for Engaging Storytelling with Slides"] },
                { title: "Optional Add-ons (for PowerPoint)", modules: ["PowerPoint for Business Reports", "PowerPoint for Education & Teaching", "Designing Infographics in PowerPoint", "PowerPoint with AI (Designer, Copilot, etc.)"] }
              ],
              duration: "3 weeks",
              level: "Beginner to Advanced",
              tags: ["Excel", "PowerPoint", "Productivity", "Data Analysis", "Presentations", "VBA"],
              certification: "Office Productivity Expert",
              includes: [
                { icon: Table, text: "Advanced Excel Functions" },
                { icon: Presentation, text: "Impactful Presentations" }
              ],
              softwareCovered: ["Microsoft Excel", "Microsoft PowerPoint"]
            }
          },
        ],
      },
      {
        name: "Supply Chain & HR",
        slug: "supply-chain-hr",
        subcourses: [
          {
            name: "Supply Chain Management",
            slug: "supply-chain-management",
            fullTitle: "Supply Chain Management Professional",
            description: "Optimize logistics and operations for efficient supply chains, from procurement to delivery and inventory control.",
            details: {
              overview: "This course provides a comprehensive overview of supply chain management, covering key processes, strategies, and technologies used to optimize the flow of goods and services. Learn to enhance efficiency and reduce costs across the supply chain.",
              whatYouWillLearn: [
                "Understand supply chain fundamentals and components.",
                "Master procurement and sourcing strategies.",
                "Learn inventory management and warehouse operations.",
                "Optimize logistics and transportation networks.",
                "Implement supply chain technology and analytics."
              ],
              requirements: ["Basic business understanding."],
              curriculum: [
                { title: "Module 1: Introduction to Supply Chain", modules: ["Supply Chain Concepts", "Components", "SCM Benefits"] },
                { title: "Module 2: Procurement & Sourcing", modules: ["Supplier Selection", "Contract Management"] },
                { title: "Module 3: Inventory Management", modules: ["Inventory Models", "Warehousing"] },
                { title: "Module 4: Logistics & Transportation", modules: ["Modes of Transport", "Network Design"] },
                { title: "Module 5: Supply Chain Technology", modules: ["ERP Systems (intro)", "SCM Software"] },
              ],
              duration: "8 weeks",
              level: "Intermediate",
              tags: ["Supply Chain", "Logistics", "Procurement", "Inventory"],
              certification: "Supply Chain Professional",
              includes: [{ icon: Briefcase, text: "Case studies" }]
            }
          },
          {
            name: "Human Resource Management",
            slug: "human-resource-management",
            fullTitle: "Human Resource Management",
            description: "Develop essential skills for managing human capital, covering recruitment, training, performance, and employee relations.",
            details: {
              overview: "This course provides a foundational understanding of Human Resource Management (HRM), covering key functions such as recruitment, training, performance management, and employee relations. Ideal for aspiring HR professionals and managers.",
              whatYouWillLearn: [
                "Understand the strategic role of HRM.",
                "Master recruitment and selection processes.",
                "Develop effective training and development programs.",
                "Implement performance appraisal systems.",
                "Handle employee relations and labor laws."
              ],
              requirements: ["No prior HR experience needed."],
              curriculum: [
                { title: "Module 1: Introduction to HRM", modules: ["Role of HR", "HR Functions", "HR Ethics"] },
                { title: "Module 2: Recruitment & Selection", modules: ["Job Analysis", "Hiring Process", "Interviewing Skills"] },
                { title: "Module 3: Training & Development", modules: ["Needs Assessment", "Training Methods", "Career Development"] },
                { title: "Module 4: Performance Management", modules: ["Appraisal Systems", "Feedback", "Goal Setting"] },
                { title: "Module 5: Employee Relations & Laws", modules: ["Employee Grievances", "Disciplinary Actions", "Labor Laws (intro)"] },
              ],
              duration: "8 weeks",
              level: "Beginner",
              tags: ["HR", "Human Resources", "Management", "Recruitment"],
              certification: "HR Management Certificate",
              includes: [{ icon: Users, text: "Practical Scenarios" }]
            }
          },
        ],
      },
      {
        name: "Finance & Entrepreneurship",
        slug: "finance-entrepreneurship",
        subcourses: [
          {
            name: "Financial Modeling",
            slug: "financial-modeling",
            fullTitle: "Financial Modeling Professional",
            description: "Build robust financial models for valuation, forecasting, and decision support in corporate finance and investment.",
            details: {
              overview: "This course teaches you to build comprehensive financial models from scratch using Excel, covering valuation, forecasting, and investment analysis. Essential for finance professionals and aspiring analysts.",
              whatYouWillLearn: [
                "Master Excel for financial modeling.",
                "Build dynamic financial statements models.",
                "Perform valuation using discounted cash flow (DCF).",
                "Create merger and acquisition (M&A) models.",
                "Develop sensitivity and scenario analysis."
              ],
              requirements: ["Strong Excel skills, basic finance knowledge."],
              curriculum: [
                { title: "Module 1: Excel Refresher & Best Practices", modules: ["Advanced Excel Functions", "Modeling Principles"] },
                { title: "Module 2: Financial Statement Modeling", modules: ["Income Statement", "Balance Sheet", "Cash Flow Statement"] },
                { title: "Module 3: Valuation Modeling", modules: ["Discounted Cash Flow (DCF)", "Relative Valuation"] },
                { title: "Module 4: M&A and LBO Models", modules: ["Merger Model", "Leveraged Buyout (LBO) Model"] },
                { title: "Module 5: Sensitivity & Scenario Analysis", modules: ["Data Tables", "Goal Seek"] },
              ],
              duration: "10 weeks",
              level: "Advanced",
              tags: ["Finance", "Modeling", "Excel", "Valuation"],
              certification: "Financial Modeling Expert",
              includes: [{ icon: Table, text: "Case studies" }]
            }
          },
          {
            name: "Entrepreneurship & Startup Management",
            slug: "entrepreneurship-startup-management",
            fullTitle: "Entrepreneurship & Startup Management",
            description: "Learn to launch, grow, and manage successful ventures, covering business planning, funding, and strategy.",
            details: {
              overview: "This course guides aspiring entrepreneurs through the entire startup journey, from ideation to funding and scaling. Learn how to develop a compelling business plan, secure investment, and build a sustainable business.",
              whatYouWillLearn: [
                "Develop innovative business ideas.",
                "Create a comprehensive business plan.",
                "Understand startup funding and valuation.",
                "Master lean startup methodologies.",
                "Learn about product-market fit and growth strategies."
              ],
              requirements: ["Passion for innovation."],
              curriculum: [
                { title: "Module 1: Ideation & Validation", modules: ["Idea Generation", "Market Research", "Problem-Solution Fit"] },
                { title: "Module 2: Business Planning", modules: ["Business Model Canvas", "Lean Startup Principles"] },
                { title: "Module 3: Funding & Finance", modules: ["Funding Rounds", "Valuation Basics", "Pitch Deck"] },
                { title: "Module 4: Product Development & Marketing", modules: ["MVP", "Go-to-Market Strategy", "Digital Marketing (intro)"] },
                { title: "Module 5: Legal & Operations", modules: ["Legal Structures", "Team Building", "Scaling"] },
              ],
              duration: "10 weeks",
              level: "Beginner",
              tags: ["Entrepreneurship", "Startup", "Business", "Innovation"],
              certification: "Startup Management",
              includes: [{ icon: Rocket, text: "Business Plan Development" }]
            }
          },
        ],
      },
    ],
  },
  {
    name: "Healthcare & Life Sciences",
    slug: "healthcare-life-sciences",
    icon: HeartPulse,
    courses: [
      {
        name: "Medical & Hospital",
        slug: "medical-hospital",
        subcourses: [
          {
            name: "Medical Coding", // Simplified name for featured list
            slug: "medical-coding",
            fullTitle: "Medical Coding Course Content",
            description: "Kickstart a career in healthcare administration with our in-depth medical coding course, covering ICD-10, CPT, and HCPCS coding systems.",
            details: {
              subtitle: "Master ICD-10, CPT, and HCPCS Coding for Healthcare Careers",
              overview: "This in-depth medical coding course prepares you for a career in healthcare administration, covering essential coding systems (ICD-10, CPT, HCPCS), healthcare terminology, documentation ethics, and certification exam preparation. Ideal for those seeking roles in medical billing and coding.",
              whatYouWillLearn: [
                "Understand the basics and importance of medical coding in healthcare.",
                "Master healthcare terminology, anatomy, and disease processes.",
                "Learn healthcare documentation standards and ethics (HIPAA).",
                "Gain expertise in ICD-10-CM, CPT, and HCPCS Level II coding.",
                "Understand coding guidelines, compliance, and medical billing basics.",
                "Familiarize yourself with coding tools and software.",
                "Prepare comprehensively for AAPC CPC and AHIMA CCS certification exams."
              ],
              requirements: ["Basic knowledge of biology or healthcare terms beneficial."],
              curriculum: [
                { title: "Module 1: Introduction to Medical Coding", modules: ["What is medical coding?", "Importance of medical coding in healthcare", "Overview of the healthcare revenue cycle", "Types of medical coders and career paths", "Key coding systems: ICD, CPT, HCPCS"] },
                { title: "Module 2: Healthcare Terminology & Anatomy", modules: ["Medical terminology basics", "Prefixes, suffixes, and root words", "Body systems and functions", "Disease processes", "Pharmacology essentials"] },
                { title: "Module 3: Healthcare Documentation & Ethics", modules: ["Types of medical records and documentation", "Electronic Health Records (EHRs)", "HIPAA and confidentiality", "Legal and ethical considerations"] },
                { title: "Module 4: ICD-10-CM Coding (Diagnosis Coding)", modules: ["Structure and format of ICD-10-CM codes", "Official coding guidelines", "Coding signs, symptoms, and conditions", "Chapter-specific guidelines", "Practice with real-world scenarios"] },
                { title: "Module 5: CPT Coding (Procedural Coding)", modules: ["Structure and format of CPT codes", "Evaluation and Management (E/M) coding", "Surgery, Radiology, Pathology, and Medicine sections", "Modifiers and their usage", "Documentation requirements for CPT coding"] },
                { title: "Module 6: HCPCS Level II Coding", modules: ["Introduction to HCPCS Level II", "Common HCPCS codes", "Durable Medical Equipment (DME)", "Coding supplies and services not included in CPT"] },
                { title: "Module 7: Coding Guidelines and Compliance", modules: ["National and local coverage determinations (NCDs and LCDs)", "NCCI edits and MUEs", "Fraud, abuse, and compliance programs", "Audit processes"] },
                { title: "Module 8: Medical Billing Basics (Optional Add-on)", modules: ["Claim forms: CMS-1500 and UB-04", "Explanation of Benefits (EOBs)", "Denials and appeals process", "Payer types (Medicare, Medicaid, private)"] },
                { title: "Module 9: Coding Tools and Software", modules: ["Encoder software overview", "Code books: ICD-10-CM, CPT, HCPCS", "Online coding resources", "Practice management software"] },
                { title: "Module 10: Certification Exam Preparation", modules: ["AAPC CPC exam overview", "AHIMA CCS exam overview", "Test-taking strategies", "Practice exams and case studies", "Time management tips"] },
                { title: "Optional Modules", modules: ["Risk Adjustment Coding (HCC)", "Inpatient Coding (ICD-10-PCS)", "Specialty coding (Orthopedics, Cardiology, OB/GYN)", "Remote medical coding and freelancing tips"] }
              ],
              duration: "2–3 months",
              level: "Beginner",
              tags: ["Medical Coding", "Healthcare", "ICD-10", "CPT", "HCPCS", "AAPC", "AHIMA"],
              certification: "CPC (AAPC) / CCS (AHIMA) Preparation",
              includes: [{ icon: Stethoscope, text: "Certification Ready" }]
            }
          },
          {
            name: "Hospital Administration",
            slug: "hospital-administration",
            fullTitle: "Hospital Administration & Management",
            description: "Learn effective management of healthcare facilities, operations, and patient services in this comprehensive program.",
            details: {
              overview: "This course covers the essential aspects of hospital administration, including healthcare operations, financial management, regulatory compliance, and patient care coordination. Ideal for professionals aspiring to leadership roles in healthcare.",
              whatYouWillLearn: [
                "Understand the organizational structure of hospitals.",
                "Learn healthcare financial management and budgeting.",
                "Master patient service management and quality improvement.",
                "Comply with healthcare regulations and policies.",
                "Develop leadership and communication skills for healthcare settings."
              ],
              requirements: ["No prior healthcare experience needed."],
              curriculum: [
                { title: "Module 1: Introduction to Hospital Administration", modules: ["Healthcare System Overview", "Hospital Structure", "Roles & Responsibilities"] },
                { title: "Module 2: Healthcare Operations", modules: ["Patient Flow Management", "Quality Assurance", "Supply Chain in Hospitals"] },
                { title: "Module 3: Financial Management", modules: ["Budgeting", "Revenue Cycle Management", "Cost Control"] },
                { title: "Module 4: Regulatory & Legal Aspects", modules: ["Compliance", "Healthcare Laws (intro)", "Ethics"] },
                { title: "Module 5: Patient Care & Services", modules: ["Patient Experience", "Service Delivery", "Medical Records Management"] },
              ],
              duration: "10 weeks",
              level: "Beginner",
              tags: ["Hospital", "Administration", "Healthcare", "Management"],
              certification: "Hospital Administrator",
              includes: [{ icon: Building, text: "Case Studies" }]
            }
          },
        ],
      },
      {
        name: "Clinical & Nutrition",
        slug: "clinical-nutrition",
        subcourses: [
          {
            name: "Clinical Research",
            slug: "clinical-research",
            fullTitle: "Clinical Research Professional",
            description: "Explore the principles and practices of clinical trials, drug development, and research ethics in healthcare.",
            details: {
              overview: "This course provides a foundational understanding of clinical research, covering trial design, regulatory affairs, ethical considerations, and data management. Ideal for those interested in pharmaceutical or medical device research.",
              whatYouWillLearn: [
                "Understand the phases of clinical trials.",
                "Learn about Good Clinical Practice (GCP).",
                "Comply with regulatory requirements (FDA, ICH).",
                "Master clinical data management and statistics.",
                "Develop ethical conduct in research."
              ],
              requirements: ["Science or healthcare background beneficial."],
              curriculum: [
                { title: "Module 1: Introduction to Clinical Research", modules: ["Drug Development Process", "Phases of Clinical Trials", "Roles & Responsibilities"] },
                { title: "Module 2: Regulatory & Ethics", modules: ["GCP", "IRB/Ethics Committee", "Informed Consent"] },
                { title: "Module 3: Study Design & Data Management", modules: ["Clinical Trial Design", "CRF Design", "Data Collection"] },
                { title: "Module 4: Clinical Operations", modules: ["Site Management", "Monitoring", "Drug Safety"] },
                { title: "Module 5: Biostatistics & Reporting", modules: ["Basic Biostatistics", "Clinical Study Report Writing"] },
              ],
              duration: "12 weeks",
              level: "Intermediate",
              tags: ["Clinical", "Research", "Pharmaceutical", "GCP"],
              certification: "Clinical Research Associate",
              includes: [{ icon: BookOpen, text: "Case Studies" }]
            }
          },
          {
            name: "Nutrition & Dietetics",
            slug: "nutrition-dietetics",
            fullTitle: "Nutrition & Dietetics Basics",
            description: "Understand human nutrition, dietary management, and the science of food for health and well-being.",
            details: {
              overview: "This course explores the fundamentals of human nutrition, macro and micronutrients, dietary guidelines, and their impact on health. Learn to assess nutritional needs and plan balanced diets.",
              whatYouWillLearn: [
                "Understand the role of macronutrients and micronutrients.",
                "Learn about energy balance and metabolism.",
                "Assess nutritional status and dietary intake.",
                "Develop healthy meal plans for various needs.",
                "Understand common nutritional deficiencies and disorders."
              ],
              requirements: ["Interest in health and food science."],
              curriculum: [
                { title: "Module 1: Introduction to Nutrition", modules: ["Basic Nutrients", "Food Groups", "Dietary Guidelines"] },
                { title: "Module 2: Macronutrients", modules: ["Carbohydrates", "Proteins", "Fats"] },
                { title: "Module 3: Micronutrients", modules: ["Vitamins", "Minerals"] },
                { title: "Module 4: Energy & Metabolism", modules: ["Energy Balance", "Metabolic Pathways (intro)"] },
                { title: "Module 5: Nutritional Assessment & Planning", modules: ["Dietary Assessment Methods", "Meal Planning Principles"] },
              ],
              duration: "8 weeks",
              level: "Beginner",
              tags: ["Nutrition", "Dietetics", "Health", "Wellness"],
              certification: "Nutrition Fundamentals",
              includes: [{ icon: Users, text: "Dietary Case Studies" }]
            }
          },
        ],
      },
      {
        name: "Emergency Services",
        slug: "emergency-services",
        subcourses: [
          {
            name: "Emergency Medical Technician (EMT)",
            slug: "emergency-medical-technician",
            fullTitle: "Emergency Medical Technician (EMT) Training",
            description: "Train to provide pre-hospital emergency medical care, including first aid, CPR, and patient assessment.",
            details: {
              overview: "This course provides comprehensive training to become a certified Emergency Medical Technician (EMT). You'll learn essential pre-hospital medical care, including patient assessment, trauma management, and medical emergencies, preparing you for critical situations.",
              whatYouWillLearn: [
                "Master patient assessment and vital signs.",
                "Perform basic life support (BLS) and CPR.",
                "Manage trauma and medical emergencies.",
                "Learn emergency pharmacology and medication administration.",
                "Understand medical legal and ethical issues."
              ],
              requirements: ["Valid CPR certification, basic literacy."],
              curriculum: [
                { title: "Module 1: Introduction to EMS", modules: ["Roles & Responsibilities", "Medical Legal & Ethics"] },
                { title: "Module 2: Airway & Respiration", modules: ["Airway Management", "Oxygen Therapy", "CPR"] },
                { title: "Module 3: Patient Assessment", modules: ["Medical Patient Assessment", "Trauma Patient Assessment"] },
                { title: "Module 4: Medical Emergencies", modules: ["Cardiac Emergencies", "Respiratory Emergencies", "Diabetic Emergencies"] },
                { title: "Module 5: Trauma Emergencies", modules: ["Bleeding & Shock", "Musculoskeletal Trauma", "Head & Spinal Injuries"] },
              ],
              duration: "12-16 weeks",
              level: "Beginner",
              tags: ["EMT", "Emergency", "Medical", "First Aid", "Pre-hospital"],
              certification: "EMT Certification Preparation",
              includes: [{ icon: LifeBuoy, text: "Practical Scenarios" }]
            }
          },
        ],
      },
    ],
  },
  {
    name: "Safety & Environment",
    slug: "safety-environment",
    icon: HardHat,
    courses: [
      {
        name: "Safety Management",
        slug: "safety-management",
        subcourses: [
          {
            name: "NEBOSH IGC",
            slug: "nebosh-igc",
            fullTitle: "NEBOSH International General Certificate (IGC)",
            description: "Gain internationally recognized qualification in health and safety, essential for managers and supervisors in any industry.",
            details: {
              overview: "The NEBOSH IGC is a globally respected qualification that provides a broad understanding of key health and safety issues. It's ideal for managers, supervisors, and staff who have health and safety responsibilities as part of a wider role.",
              whatYouWillLearn: [
                "Understand health and safety management systems.",
                "Identify common workplace hazards and risks.",
                "Learn methods for risk assessment and control.",
                "Comply with international health and safety standards.",
                "Develop effective health and safety policies."
              ],
              requirements: ["No prior health and safety knowledge required."],
              curriculum: [
                { title: "Unit IG1: Management of Health and Safety", modules: ["Why we should manage workplace health and safety", "How health and safety management systems work and what they look like", "Managing risk – understanding people and processes", "Health and safety monitoring and measuring"] },
                { title: "Unit IG2: Risk Assessment", modules: ["Physical and psychological health", "Musculoskeletal health", "Chemical and biological agents", "General workplace issues", "Work equipment", "Fire", "Electricity"] },
              ],
              duration: "10-12 days (intensive) / 65 taught hours + 40 self-study",
              level: "Beginner to Intermediate",
              tags: ["NEBOSH", "Health & Safety", "Management", "Risk Assessment"],
              certification: "NEBOSH IGC",
              includes: [{ icon: Award, text: "Internationally Recognized" }]
            }
          },
          {
            name: "Fire and Safety Engineering",
            slug: "fire-safety-engineering",
            fullTitle: "Fire and Safety Engineering",
            description: "Principles of fire prevention, fire protection systems, and safety system design for buildings and industrial facilities.",
            details: {
              overview: "This course covers the essential principles of fire safety engineering, including fire dynamics, prevention strategies, design of fire protection systems, and emergency response planning. Ideal for engineers, architects, and safety professionals.",
              whatYouWillLearn: [
                "Understand the science of fire and its behavior.",
                "Design passive and active fire protection systems.",
                "Implement fire safety codes and standards.",
                "Develop emergency evacuation plans.",
                "Conduct fire risk assessments."
              ],
              requirements: ["Basic engineering or construction knowledge beneficial."],
              curriculum: [
                { title: "Module 1: Fire Science & Behavior", modules: ["Fire Chemistry", "Combustion", "Smoke Movement"] },
                { title: "Module 2: Fire Prevention", modules: ["Building Codes", "Occupancy Classification", "Fire Loads"] },
                { title: "Module 3: Fire Protection Systems", modules: ["Sprinkler Systems", "Fire Alarms", "Detection Systems"] },
                { title: "Module 4: Emergency Planning", modules: ["Evacuation Routes", "Emergency Response", "Drills"] },
                { title: "Module 5: Fire Risk Assessment", modules: ["Hazard Identification", "Risk Evaluation", "Control Measures"] },
              ],
              duration: "8 weeks",
              level: "Intermediate",
              tags: ["Fire Safety", "Engineering", "Safety", "Protection"],
              certification: "Fire Safety Engineer",
              includes: [{ icon: ShieldCheck, text: "Design Case Studies" }]
            }
          },
          {
            name: "Industrial Safety Management",
            slug: "industrial-safety-management",
            fullTitle: "Industrial Safety Management",
            description: "Manage safety in industrial environments, covering occupational hazards, safety regulations, and incident prevention.",
            details: {
              overview: "This course focuses on managing health and safety in industrial settings, covering topics such as hazard identification, risk assessment, incident investigation, and the implementation of safety management systems. Essential for industrial safety professionals.",
              whatYouWillLearn: [
                "Identify and control industrial hazards.",
                "Implement safety management systems.",
                "Conduct incident investigations and root cause analysis.",
                "Comply with industrial safety regulations.",
                "Develop and promote a safety culture."
              ],
              requirements: ["No prior safety experience needed."],
              curriculum: [
                { title: "Module 1: Introduction to Industrial Safety", modules: ["Safety Fundamentals", "Hazard Types", "Risk Assessment Basics"] },
                { title: "Module 2: Safety Management Systems (SMS)", modules: ["Policy", "Organizing", "Planning", "Measuring & Reviewing"] },
                { title: "Module 3: Occupational Health", modules: ["Ergonomics", "Chemical Safety", "Personal Protective Equipment (PPE)"] },
                { title: "Module 4: Industrial Hazards & Controls", modules: ["Machine Guarding", "Confined Space", "Lockout/Tagout"] },
                { title: "Module 5: Incident Management", modules: ["Investigation", "Reporting", "Corrective Actions"] },
              ],
              duration: "6 weeks",
              level: "Beginner",
              tags: ["Industrial", "Safety", "Management", "Hazards"],
              certification: "Industrial Safety Professional",
              includes: [{ icon: HardHat, text: "Practical Guidelines" }]
            }
          },
          {
            name: "Environmental Management (ISO 14001)",
            slug: "environmental-management",
            fullTitle: "Environmental Management (ISO 14001)",
            description: "Implement environmental management systems compliant with ISO 14001 standards for sustainable and responsible operations.",
            details: {
              overview: "This course focuses on the principles and requirements of ISO 14001, guiding you through the establishment, implementation, maintenance, and improvement of an effective environmental management system (EMS).",
              whatYouWillLearn: [
                "Understand ISO 14001 standard requirements.",
                "Develop and implement an Environmental Management System (EMS).",
                "Identify environmental aspects and impacts.",
                "Ensure legal compliance and regulatory adherence.",
                "Drive continual improvement in environmental performance."
              ],
              requirements: ["No prior environmental knowledge needed."],
              curriculum: [
                { title: "Module 1: Introduction to EMS & ISO 14001", modules: ["Environmental Issues", "EMS Benefits", "ISO 14001 Structure"] },
                { title: "Module 2: Planning & Implementation", modules: ["Environmental Policy", "Aspects & Impacts", "Legal Requirements"] },
                { title: "Module 3: Operation & Support", modules: ["Competence & Awareness", "Communication", "Operational Control"] },
                { title: "Module 4: Performance Evaluation", modules: ["Monitoring & Measurement", "Internal Audit", "Management Review"] },
                { title: "Module 5: Improvement", modules: ["Nonconformity & Corrective Action", "Continual Improvement"] },
              ],
              duration: "5 days (bootcamp) / 3 weeks",
              level: "Beginner",
              tags: ["Environmental", "ISO 14001", "Management", "Sustainability"],
              certification: "ISO 14001 Lead Implementer",
              includes: [{ icon: Globe, text: "Framework for Green Practices" }]
            }
          },
          {
            name: "First Aid & Disaster Management",
            slug: "first-aid-disaster-management",
            fullTitle: "First Aid & Disaster Management",
            description: "Essential skills for providing immediate first aid and managing emergency situations, including disaster preparedness and response.",
            details: {
              overview: "This course equips you with vital skills in first aid for common emergencies and a foundational understanding of disaster management principles, preparing you to respond effectively in crisis situations.",
              whatYouWillLearn: [
                "Administer basic first aid for injuries and medical emergencies.",
                "Perform CPR and use automated external defibrillators (AED).",
                "Manage trauma and medical emergencies.",
                "Learn emergency pharmacology and medication administration.",
                "Understand medical legal and ethical issues."
              ],
              requirements: ["No prerequisites."],
              curriculum: [
                { title: "Module 1: First Aid Basics", modules: ["Assessing the Scene", "CPR & AED", "Bleeding Control", "Shock Management"] },
                { title: "Module 2: Medical Emergencies", modules: ["Heart Attack", "Stroke", "Diabetes", "Allergic Reactions"] },
                { title: "Module 3: Injury Emergencies", modules: ["Fractures", "Burns", "Head & Spinal Injuries"] },
                { title: "Module 4: Disaster Preparedness", modules: ["Types of Disasters", "Emergency Kits", "Communication Plans"] },
                { title: "Module 5: Disaster Response & Recovery", modules: ["Evacuation Procedures", "Shelter Management", "Psychological First Aid"] },
              ],
              duration: "3-5 days (intensive)",
              level: "Beginner",
              tags: ["First Aid", "Disaster", "Emergency", "Safety"],
              certification: "First Aid & Disaster Preparedness",
              includes: [{ icon: LifeBuoy, text: "Hands-on Drills" }]
            }
          },
        ],
      },
    ],
  },
  {
    name: "Green Building & Sustainability",
    slug: "green-building-sustainability",
    icon: Sprout,
    courses: [
      {
        name: "Sustainability Certifications",
        slug: "sustainability-certifications",
        subcourses: [
          {
            name: "LEED GA / LEED AP",
            slug: "leed-ga-leed-ap",
            fullTitle: "LEED GA / LEED AP Certifications",
            description: "Become a sustainability expert. Our LEED (Leadership in Energy and Environmental Design) courses prepare you for both GA and AP certifications.",
            details: {
              subtitle: "Green Building Design and Construction Expertise",
              overview: "Our LEED (Leadership in Energy and Environmental Design) courses prepare you for both GA (Green Associate) and AP (Accredited Professional) certifications, opening doors in the growing green building sector. Learn sustainable building principles and advanced expertise in specific LEED rating systems.",
              whatYouWillLearn: [
                "Understand sustainable building principles and practices.",
                "Learn the LEED rating system structure and categories.",
                "Prepare for the LEED Green Associate exam.",
                "Gain advanced expertise for specific LEED AP rating systems.",
                "Apply green building concepts in real-world projects."
              ],
              requirements: ["Interest in sustainability and construction/design."],
              curriculum: [
                { title: "Module 1: Introduction to Green Building", modules: ["Why Green Building?", "Environmental Impact", "Sustainability Concepts"] },
                { title: "Module 2: LEED Overview", modules: ["LEED Rating Systems", "Certification Process", "Core Concepts"] },
                { title: "Module 3: LEED GA Exam Prep", modules: ["Location & Transportation", "Sustainable Sites", "Water Efficiency", "Energy & Atmosphere", "Materials & Resources", "Indoor Environmental Quality"] },
                { title: "Module 4: LEED AP Specifics (BD+C Example)", modules: ["Integrative Process", "Project Team Roles", "Construction Phase"] },
                { title: "Module 5: Project & Case Studies", modules: ["LEED Project Examples", "Application of Concepts"] },
              ],
              duration: "5 weeks",
              level: "Beginner to Advanced",
              tags: ["LEED", "Green Building", "Sustainability", "USGBC", "Architecture", "Construction"],
              certification: "USGBC-based Prep",
              includes: [{ icon: Sprout, text: "Green Building Concepts" }]
            }
          },
          {
            name: "CFM – Certified Facility Manager",
            slug: "cfm-certified-facility-manager",
            fullTitle: "Complete CFM (Certified Facility Manager) Course Content",
            description: "Gain expertise in managing facilities efficiently, including operations, maintenance, sustainability, and workplace safety.",
            details: {
              subtitle: "Master Facility Management Operations, Maintenance & Strategy",
              overview: "This IFMA-aligned course prepares you for global opportunities in the built environment sector. Gain expertise in managing facilities efficiently, including operations, maintenance, sustainability, financial management, health & safety, technology, and leadership.",
              whatYouWillLearn: [
                "Understand the scope and importance of Facilities Management (FM).",
                "Master facility operations, maintenance, and asset management.",
                "Learn project management specific to facilities.",
                "Implement health, safety, and environmental (HSE) protocols.",
                "Manage financial aspects including budgeting and procurement.",
                "Utilize technology in FM (CAFM, BMS, IoT).",
                "Understand space & workplace management.",
                "Prepare for CFM certification exam (IFMA or similar)."
              ],
              requirements: ["Experience in facilities management or related fields is recommended (check IFMA for specific eligibility)."],
              curriculum: [
                { title: "Introduction to Facilities Management", modules: ["What is Facilities Management (FM)?", "Role and responsibilities of a Facility Manager", "Scope and importance of FM in organizations", "Types of facilities and industries served"] },
                { title: "Facility Operations & Maintenance", modules: ["Basics of building systems (HVAC, electrical, plumbing)", "Preventive vs corrective maintenance", "Maintenance planning and scheduling", "Asset management"] },
                { title: "Project Management in FM", modules: ["Introduction to project management for facilities", "Space planning & relocation projects", "Renovation and construction coordination", "Managing contractors and vendors"] },
                { title: "Health, Safety & Environment (HSE)", modules: ["Workplace health and safety principles", "Fire safety and emergency planning", "Environmental sustainability in FM", "Risk assessments and compliance"] },
                { title: "Financial Management", modules: ["Budgeting for facility operations", "Cost control strategies", "Procurement and contract management", "Life cycle costing"] },
                { title: "Leadership & Communication", modules: ["Team management in FM", "Communication with stakeholders", "Conflict resolution", "Leadership styles for FM professionals"] },
                { title: "Sustainability & Energy Management", modules: ["Energy efficiency in buildings", "Green building concepts (LEED, BREEAM basics)", "Waste management and recycling programs", "Sustainable procurement"] },
                { title: "Technology in Facilities Management", modules: ["CAFM/CMMS software overview", "IoT and smart buildings", "Building Management Systems (BMS)", "Data analytics in FM"] },
                { title: "Space & Workplace Management", modules: ["Space utilization and optimization", "Workplace ergonomics", "Flexible workspaces & hybrid office concepts", "Move management"] },
                { title: "Security & Emergency Preparedness", modules: ["Physical security systems (CCTV, access control)", "Business continuity planning", "Disaster recovery strategies", "Incident management"] },
                { title: "Contracting & Legal Aspects", modules: ["Key FM contracts and SLAs", "Understanding local regulations", "Vendor performance management", "Legal issues in property and facilities management"] },
                { title: "Advanced Topics", modules: ["Strategic facilities planning", "Benchmarking and performance metrics", "Global FM practices", "Preparing for CFM certification exam (IFMA or similar)"] }
              ],
              duration: "6 weeks",
              level: "Hybrid", // As mentioned in your document
              tags: ["CFM", "Facility Management", "IFMA", "Operations", "Maintenance"],
              certification: "CFM Preparation",
              includes: [{ icon: Building, text: "IFMA-aligned" }]
            }
          },
          {
            name: "IFMA Certification",
            slug: "ifma-certification",
            fullTitle: "IFMA Certification",
            description: "Achieve professional recognition in facility management through IFMA certifications, enhancing your credibility and career prospects.",
            details: {
              overview: "This course prepares you for various IFMA certifications, validating your expertise in specific areas of facility management. It focuses on the core competencies and best practices recognized globally by the industry.",
              whatYouWillLearn: [
                "Understand IFMA's core competencies.",
                "Master specific knowledge areas for selected IFMA certifications.",
                "Apply global best practices in facility management.",
                "Enhance problem-solving skills in FM scenarios.",
                "Prepare effectively for IFMA certification exams."
              ],
              requirements: ["Experience in facilities management (varies by certification)."],
              curriculum: [
                { title: "Module 1: IFMA Framework", modules: ["IFMA Global Job Task Analysis", "Competency Areas", "Ethics in FM"] },
                { title: "Module 2: Operations & Maintenance", modules: ["Asset Management", "Workplace Operations"] },
                { title: "Module 3: Project Management", modules: ["FM Projects", "Procurement"] },
                { title: "Module 4: Finance & Business", modules: ["Budgeting", "Contract Management"] },
                { title: "Module 5: Sustainability & Technology", modules: ["Green Building", "FM Software"] },
              ],
              duration: "Flexible (depends on certification type)",
              level: "Intermediate to Advanced",
              tags: ["IFMA", "Certification", "Facility Management"],
              certification: "IFMA Certification Preparation",
              includes: [{ icon: Award, text: "Globally Recognized" }]
            }
          },
        ],
      },
      {
        name: "Energy & Renewable",
        slug: "energy-renewable",
        subcourses: [
          {
            name: "Energy Management Systems",
            slug: "energy-management-systems",
            fullTitle: "Energy Management Systems",
            description: "Learn to implement and manage energy efficiency systems and sustainable energy practices in buildings and industries.",
            details: {
              overview: "This course covers the design, implementation, and management of effective energy management systems. You'll learn how to optimize energy consumption, reduce costs, and comply with energy efficiency standards.",
              whatYouWillLearn: [
                "Understand energy audit principles.",
                "Learn about energy efficient technologies.",
                "Implement ISO 50001 (Energy Management System).",
                "Analyze energy data and identify savings opportunities.",
                "Develop energy conservation plans."
              ],
              requirements: ["Basic engineering or facility management knowledge beneficial."],
              curriculum: [
                { title: "Module 1: Energy Management Fundamentals", modules: ["Energy Concepts", "Global Energy Landscape", "Energy Audits"] },
                { title: "Module 2: Energy Efficient Technologies", modules: ["HVAC Optimization", "Lighting Systems", "Smart Building Technology"] },
                { title: "Module 3: Energy Management Standards", modules: ["ISO 50001", "Energy Performance Indicators (EnPIs)"] },
                { title: "Module 4: Renewable Energy Integration", modules: ["Solar Power (intro)", "Wind Energy (intro)", "Geothermal (intro)"] },
                { title: "Module 5: Project Implementation", modules: ["Energy Savings Calculations", "Case Studies"] },
              ],
              duration: "8 weeks",
              level: "Intermediate",
              tags: ["Energy", "Management", "Efficiency", "ISO 50001"],
              certification: "Energy Manager",
              includes: [{ icon: Zap, text: "Cost Saving Strategies" }]
            }
          },
          {
            name: "Renewable Energy Systems",
            slug: "renewable-energy-systems",
            fullTitle: "Renewable Energy Systems",
            description: "Explore various renewable energy technologies, including solar, wind, and geothermal, and their applications.",
            details: {
              overview: "This course provides an overview of various renewable energy technologies and their practical applications. You'll learn about solar PV, wind power, biomass, and hydropower, understanding their principles, design, and environmental impact.",
              whatYouWillLearn: [
                "Understand the principles of solar photovoltaic (PV) systems.",
                "Learn about wind turbine technology and site assessment.",
                "Explore biomass and bioenergy conversion processes.",
                "Grasp concepts of hydropower and geothermal energy.",
                "Analyze the environmental benefits and challenges of renewable energy."
              ],
              requirements: ["Basic science knowledge beneficial."],
              curriculum: [
                { title: "Module 1: Introduction to Renewable Energy", modules: ["Global Energy Mix", "Renewable Energy Sources", "Environmental Impact"] },
                { title: "Module 2: Solar Energy", modules: ["Solar PV Systems", "Solar Thermal Systems", "Design & Sizing"] },
                { title: "Module 3: Wind Energy", modules: ["Wind Turbine Types", "Site Selection", "Wind Farm Design"] },
                { title: "Module 4: Other Renewables", modules: ["Biomass Energy", "Hydropower", "Geothermal Energy"] },
                { title: "Module 5: Grid Integration & Policy", modules: ["Grid Connection", "Energy Storage", "Renewable Energy Policies"] },
              ],
              duration: "10 weeks",
              level: "Beginner to Intermediate",
              tags: ["Renewable Energy", "Solar", "Wind", "Sustainability"],
              certification: "Renewable Energy Specialist",
              includes: [{ icon: Sprout, text: "Sustainable Solutions" }]
            }
          },
        ],
      },
    ],
  },
  {
    name: "Language & Soft Skills",
    slug: "language-soft-skills",
    icon: Languages,
    courses: [
      {
        name: "Language Proficiency",
        slug: "language-proficiency",
        subcourses: [
          {
            name: "Spoken English", // Simplified name for featured list
            slug: "spoken-english",
            fullTitle: "Spoken English Course Content",
            description: "Boost your confidence in English speaking, grammar, and presentation with our practical, communication-focused classes.",
            details: {
              subtitle: "Enhance Your Communication Skills for Professional & Everyday Use",
              overview: "This practical, communication-focused spoken English course is suitable for all levels, from basic to advanced. It will boost your confidence in English speaking, improve your grammar and pronunciation, and equip you with effective presentation skills for both professional and everyday interactions.",
              whatYouWillLearn: [
                "Understand the importance of spoken English as a global language.",
                "Master grammar foundations essential for speaking (tenses, parts of speech).",
                "Build a strong vocabulary for daily use and professional contexts.",
                "Improve pronunciation, accent, intonation, and rhythm.",
                "Practice speaking in various everyday and professional situations (self-introduction, conversations, role plays).",
                "Enhance listening comprehension skills.",
                "Develop fluency and correct common grammatical errors.",
                "Receive constructive feedback and self-evaluation methods."
              ],
              requirements: ["Desire to improve English communication."],
              curriculum: [
                { title: "Module 1: Introduction to Spoken English", modules: ["Importance of spoken English", "English as a global language", "Overcoming fear of speaking", "Basic communication skills"] },
                { title: "Module 2: Foundation - Grammar for Speaking", modules: ["Parts of speech (nouns, verbs, adjectives, adverbs, etc.)", "Sentence structure (subject + verb + object)", "Tenses in spoken form (present, past, future)", "Modal verbs for speaking (can, could, should, must, etc.)", "Common sentence patterns"] },
                { title: "Module 3: Vocabulary Building", modules: ["Daily use vocabulary", "Synonyms & antonyms", "Idioms & phrases", "Phrasal verbs", "Collocations (e.g., make a decision, take a chance)"] },
                { title: "Module 4: Pronunciation & Accent", modules: ["Vowel and consonant sounds", "Word stress and sentence stress", "Intonation and rhythm", "Common pronunciation mistakes", "Listening and repeating exercises"] },
                { title: "Module 5: Speaking Practice", modules: ["Self-introduction", "Describing people, places, events", "Talking about routines and hobbies", "Expressing opinions, likes & dislikes", "Making requests, suggestions, and complaints"] },
                { title: "Module 6: Conversations & Dialogues", modules: ["Greeting and introductions", "Asking and answering questions", "Small talk topics", "Role plays (shopping, restaurant, travel, interview, etc.)", "Debates and discussions"] },
                { title: "Module 7: Listening & Comprehension", modules: ["Listening to native speakers (videos, audio)", "Note-taking", "Summarizing spoken content", "Understanding different accents"] },
                { title: "Module 8: English for Everyday Situations", modules: ["At the bank, airport, hotel, or doctors office", "Telephone etiquette", "Giving and asking for directions", "Public speaking essentials"] },
                { title: "Module 9: Error Correction & Fluency Development", modules: ["Common grammar mistakes in speech", "Filler words and hesitation", "Sentence restructuring", "Speed and clarity"] },
                { title: "Module 10: Assessment & Feedback", modules: ["Self-evaluation methods", "Speaking tests (one-on-one or group)", "Listening exercises", "Role play performance", "Peer and trainer feedback", "Certificate of completion"] }
              ],
              duration: "4–6 weeks",
              level: "All Levels",
              tags: ["English", "Communication", "Fluency", "Grammar", "Vocabulary"],
              certification: "English Communication Certificate",
              includes: [{ icon: MessageSquareText, text: "Practical Communication" }]
            }
          },
          {
            name: "Hindi", // Added from your list
            slug: "hindi",
            fullTitle: "Hindi Language Course",
            description: "Learn to speak, read, and write Hindi, the fourth most spoken language in the world.",
            details: {
              overview: "This course offers a comprehensive introduction to the Hindi language, covering conversational skills, grammar, vocabulary, and basic reading and writing in Devanagari script. Ideal for beginners and those looking to enhance their cultural understanding.",
              whatYouWillLearn: [
                "Master basic conversational Hindi for everyday situations.",
                "Understand fundamental Hindi grammar and sentence structure.",
                "Build a practical vocabulary for various contexts.",
                "Learn to read and write in Devanagari script.",
                "Gain cultural insights into Hindi-speaking regions."
              ],
              requirements: ["No prior language experience needed."],
              curriculum: [
                { title: "Module 1: Introduction to Hindi", modules: ["Devanagari Script Basics", "Greetings and Introductions", "Basic Vocabulary"] },
                { title: "Module 2: Conversational Hindi", modules: ["Everyday Phrases", "Asking and Giving Directions", "Shopping & Ordering Food"] },
                { title: "Module 3: Grammar Fundamentals", modules: ["Nouns, Verbs, Adjectives", "Tenses (Present, Past, Future)", "Sentence Structure"] },
                { title: "Module 4: Reading & Writing", modules: ["Simple Texts", "Writing Practice", "Pronunciation Rules"] },
                { title: "Module 5: Cultural Immersion", modules: ["Indian Customs", "Festivals", "Basic Dialogues"] },
              ],
              duration: "8 weeks",
              level: "Beginner",
              tags: ["Hindi", "Language", "Communication"],
              certification: "Hindi Proficiency Certificate",
              includes: [{ icon: Languages, text: "Conversational Practice" }]
            }
          },
          {
            name: "IELTS / TOEFL / PTE Training",
            slug: "ielts-toefl-pte-training",
            fullTitle: "IELTS / TOEFL / PTE Training",
            description: "Prepare thoroughly for international English language proficiency tests like IELTS, TOEFL, and PTE to achieve your target scores.",
            details: {
              overview: "This course provides comprehensive preparation for globally recognized English proficiency tests: IELTS, TOEFL, and PTE. You'll master all sections (Reading, Writing, Listening, Speaking) and learn effective test-taking strategies to achieve your desired score.",
              whatYouWillLearn: [
                "Understand test formats and scoring criteria.",
                "Develop strategies for each section (Reading, Writing, Listening, Speaking).",
                "Improve academic vocabulary and grammar for test success.",
                "Practice with mock tests and simulated exam conditions.",
                "Receive personalized feedback on performance."
              ],
              requirements: ["Intermediate English proficiency."],
              curriculum: [
                { title: "Module 1: Test Format & Strategies", modules: ["Introduction to IELTS/TOEFL/PTE", "Scoring Criteria", "Overall Test Strategies"] },
                { title: "Module 2: Listening Skills", modules: ["Note-taking", "Identifying main ideas", "Different accents"] },
                { title: "Module 3: Reading Skills", modules: ["Skimming & Scanning", "Identifying Information", "Question Types"] },
                { title: "Module 4: Writing Skills", modules: ["Essay Structures", "Report Writing", "Letter Writing"] },
                { title: "Module 5: Speaking Skills", modules: ["Fluency & Coherence", "Lexical Resource", "Grammatical Range & Accuracy", "Pronunciation"] },
                { title: "Module 6: Practice & Feedback", modules: ["Full Length Mock Tests", "Performance Analysis", "Feedback Sessions"] },
              ],
              duration: "8 weeks",
              level: "Intermediate to Advanced",
              tags: ["IELTS", "TOEFL", "PTE", "English Proficiency", "Exam Prep"],
              certification: "Test Preparation Certificate",
              includes: [{ icon: BookOpen, text: "Mock Tests & Feedback" }]
            }
          },
          {
            name: "Business Communication",
            slug: "business-communication",
            fullTitle: "Effective Business Communication",
            description: "Enhance professional communication skills for the workplace, including written, verbal, and presentation techniques.",
            details: {
              overview: "This course is designed to equip professionals with essential business communication skills. You'll learn to write effective emails and reports, deliver compelling presentations, and master interpersonal communication in a corporate environment.",
              whatYouWillLearn: [
                "Master professional email and report writing.",
                "Improve verbal communication in meetings and discussions.",
                "Deliver impactful presentations with confidence.",
                "Negotiate effectively and manage conflicts constructively.",
                "Adapt communication styles for diverse audiences."
              ],
              requirements: ["Basic professional experience beneficial."],
              curriculum: [
                { title: "Module 1: Fundamentals of Business Communication", modules: ["Communication Process", "Verbal vs. Non-Verbal", "Active Listening"] },
                { title: "Module 2: Written Communication", modules: ["Email Etiquette", "Report Writing", "Business Letters"] },
                { title: "Module 3: Verbal Communication", modules: ["Meeting Management", "Presentation Skills", "Interview Skills"] },
                { title: "Module 4: Interpersonal Skills", modules: ["Negotiation", "Conflict Resolution", "Feedback"] },
                { title: "Module 5: Cross-Cultural Communication", modules: ["Cultural Sensitivity", "Global Communication"] },
              ],
              duration: "6 weeks",
              level: "Beginner to Intermediate",
              tags: ["Business", "Communication", "Professional Skills"],
              certification: "Business Communication Specialist",
              includes: [{ icon: Users, text: "Role-Playing Exercises" }]
            }
          },
          {
            name: "Personality Development",
            slug: "personality-development",
            fullTitle: "Personality Development",
            description: "Develop key personality traits for personal and professional growth, boosting confidence, self-awareness, and social skills.",
            details: {
              overview: "This course focuses on enhancing personal and professional effectiveness through self-awareness, confidence building, and improving interpersonal skills. It's designed to help you project a positive image and navigate various social and professional situations.",
              whatYouWillLearn: [
                "Boost self-confidence and self-esteem.",
                "Develop effective communication and public speaking skills.",
                "Improve body language and etiquette.",
                "Master emotional intelligence and stress management.",
                "Cultivate positive thinking and attitude."
              ],
              requirements: ["Desire for personal growth."],
              curriculum: [
                { title: "Module 1: Self-Awareness & Self-Confidence", modules: ["Understanding Self", "Strengths & Weaknesses", "Building Confidence"] },
                { title: "Module 2: Communication Skills", modules: ["Active Listening", "Assertiveness", "Verbal & Non-Verbal Communication"] },
                { title: "Module 3: Etiquette & Grooming", modules: ["Social Etiquette", "Professional Grooming", "Body Language"] },
                { title: "Module 4: Emotional Intelligence & Stress Management", modules: ["Understanding Emotions", "Stress Management Techniques", "Time Management"] },
                { title: "Module 5: Goal Setting & Positive Attitude", modules: ["SMART Goals", "Positive Thinking", "Leadership Qualities (intro)"] },
              ],
              duration: "4 weeks",
              level: "Beginner",
              tags: ["Personality", "Development", "Soft Skills", "Confidence"],
              certification: "Personality Development",
              includes: [{ icon: Users, text: "Interactive Workshops" }]
            }
          },
          {
            name: "Public Speaking",
            slug: "public-speaking",
            fullTitle: "Public Speaking Mastery",
            description: "Master the art of effective public speaking and presentations, overcoming fear and delivering impactful messages.",
            details: {
              overview: "This course is designed to transform hesitant speakers into confident presenters. You'll learn essential techniques for preparing, structuring, and delivering compelling speeches, engaging your audience, and managing stage fright.",
              whatYouWillLearn: [
                "Overcome public speaking anxiety.",
                "Structure compelling speeches and presentations.",
                "Engage your audience with vocal variety and body language.",
                "Handle Q&A sessions effectively.",
                "Deliver impactful messages in various settings."
              ],
              requirements: ["Desire to improve communication."],
              curriculum: [
                { title: "Module 1: Overcoming Stage Fright", modules: ["Understanding Anxiety", "Breathing Techniques", "Visualization"] },
                { title: "Module 2: Speech Preparation", modules: ["Audience Analysis", "Topic Selection", "Research"] },
                { title: "Module 3: Speech Structure", modules: ["Introduction, Body, Conclusion", "Storytelling", "Call to Action"] },
                { title: "Module 4: Delivery Techniques", modules: ["Vocal Variety", "Body Language", "Eye Contact"] },
                { title: "Module 5: Engaging the Audience", modules: ["Q&A Management", "Visual Aids", "Handling Interruptions"] },
              ],
              duration: "4 weeks",
              level: "Beginner to Intermediate",
              tags: ["Public Speaking", "Communication", "Presentation", "Confidence"],
              certification: "Public Speaking",
              includes: [{ icon: Presentation, text: "Practice Sessions" }]
            }
          },
        ],
      },
    ],
  },
];

// Helper to find a course by its slug across all categories (used by [slug] page and featured courses)
export function findCourseBySlug(slug: string): SubCourseItem | undefined {
  for (const category of allCourseCategories) {
    for (const courseGroup of category.courses) {
      if (courseGroup.subcourses) {
        const found = courseGroup.subcourses.find(sub => sub.slug === slug);
        if (found) return found;
      }
    }
  }
  return undefined;
}

// Helper to get a flattened list of all subcourses for generateStaticParams and potentially other uses
export const getAllSubCourses = (): SubCourseItem[] => {
  let allSubCourses: SubCourseItem[] = [];
  for (const category of allCourseCategories) {
    for (const courseGroup of category.courses) {
      if (courseGroup.subcourses) {
        allSubCourses = allSubCourses.concat(courseGroup.subcourses);
      }
    }
  }
  return allSubCourses;
};

// Define which courses are "featured" on the homepage (from your provided "Our Featured Courses" list)
export const featuredCoursesSlugs = [
  "pmp-project-management-professional",
  "cfm-certified-facility-manager",
  "leed-ga-leed-ap",
  "artificial-intelligence",
  "bim-building-information-modeling",
  "autocad",
  "medical-coding",
  "excel-powerpoint",
  "spoken-english",
  "data-science" // Make sure this slug matches the new data science course slug
];

// Helper to retrieve the actual featured course objects
export const getFeaturedCourses = () => {
    return featuredCoursesSlugs.map(slug => findCourseBySlug(slug)).filter(Boolean) as SubCourseItem[];
};