// script.js - Save to script.js
const examData = {
  "IT Project Management": {
    title: "IT Project Management",
    questions: [
      { text: "1. Which of the following is a temporary endeavor undertaken to create a unique product, service, or result?", options: ["Operations","A project","A program","A portfolio"], correct: 1, explanation: "A project is temporary and produces a unique product, service, or result." },
      { text: "2. Which of the following is NOT part of the triple constraint of project management?", options: ["Scope","Time","Cost","Meeting human resource plans"], correct: 3, explanation: "Triple constraint is scope, time, and cost; human resource plans are not one of the three primary constraints." },
      { text: "3. The project _______ usually provides the direction and funding for the project.", options: ["Manager","Sponsor","Team member","Opponent"], correct: 1, explanation: "The sponsor champions and funds the project." },
      { text: "4. According to the Standish Group's 2011 CHAOS study, what is the number one factor that helps IT projects succeed?", options: ["Executive support","User involvement","Clear business objectives","Agile processes"], correct: 0, explanation: "Executive support is often cited as a primary success factor for IT projects." },
      { text: "5. A _______ is a group of related projects managed in a coordinated way to obtain benefits and control not available from managing them individually.", options: ["Portfolio","Program","Solution","Process"], correct: 1, explanation: "A program is a set of related projects managed together." },
      { text: "6. Project portfolio management focuses on _________ goals, while individual project management focuses on _________ goals.", options: ["Tactical; Strategic","Strategic; Tactical","Financial; Operational","Short-term; Long-term"], correct: 1, explanation: "Portfolio management is strategic; project management is tactical/executional." },
      { text: "7. Which tool is a standard format for displaying project schedule information by listing project activities and their corresponding start and finish dates in calendar form?", options: ["Network diagram","Gantt chart","Fishbone diagram","Responsibility assignment matrix"], correct: 1, explanation: "A Gantt chart shows activities with start and finish dates." },
      { text: "8. What is the organizational group responsible for coordinating the project management function throughout an organization called?", options: ["Project Management Office (PMO)","Project Steering Committee","Human Resources Department","Quality Assurance Team"], correct: 0, explanation: "A PMO provides standards, governance and support for project management." },
      { text: "9. Who is famous for developing a scheduling chart in 1917 that is still widely used in project management today?", options: ["Robert Oppenheimer","Henry Gantt","Leslie Groves","Max Weber"], correct: 1, explanation: "Henry Gantt developed the Gantt chart." },
      { text: "10. Projects are often defined broadly when they begin, and as time passes, the specific details become clearer. This property is known as:", options: ["Scope creep","Progressive elaboration","Tactical execution","Decomposition"], correct: 1, explanation: "Progressive elaboration means details become clearer over time." },
      { text: "11. Understanding the organizational environment using a \"systems view\" means looking at the organization through which three-sphere model?", options: ["Scope, Time, and Cost","Business, Organization, and Technology","People, Process, and Tools","Strategy, Tactics, and Operations"], correct: 1, explanation: "A systems view considers business, organization, and technology together." },
      { text: "12. Which organizational frame focuses on structural roles, responsibilities, and coordination?", options: ["Structural frame","Human resources frame","Political frame","Symbolic frame"], correct: 0, explanation: "The structural frame emphasizes formal roles and coordination." },
      { text: "13. In which type of organizational structure do project managers have the most authority?", options: ["Functional","Weak Matrix","Projectized / Project-oriented","Balanced Matrix"], correct: 2, explanation: "Projectized organizations give project managers the most authority." },
      { text: "14. What are the four phases of a traditional project life cycle?", options: ["Initiation, Planning, Execution, Closing","Concept, Development, Implementation, Close-out","Requirements, Design, Code, Test","Analysis, Design, Implementation, Maintenance"], correct: 0, explanation: "Standard life cycle phases are Initiation, Planning, Execution, Closing." },
      { text: "15. A senior management review at the end of a project phase is often called a:", options: ["Milestone","Kick-off meeting","Phase exit or Kill point","Baseline check"], correct: 2, explanation: "A phase exit (or kill point) is a decision review at phase end." },
      { text: "16. Which software development approach is iterative and incremental, where requirements and solutions evolve through collaboration?", options: ["Waterfall","Predictive","Agile","Architecture-centric"], correct: 2, explanation: "Agile methods are iterative and collaborative." },
      { text: "17. The Manifesto for Agile Software Development values individuals and interactions over:", options: ["Working software","Customer collaboration","Responding to change","Processes and tools"], correct: 3, explanation: "The manifesto values individuals and interactions over processes and tools." },
      { text: "18. What is the most popular agile method framework used for managing software development projects?", options: ["Six Sigma","Scrum","PERT","CMMI"], correct: 1, explanation: "Scrum is a widely used agile framework." },
      { text: "19. Which trend involves hiring an external organization to perform distinct tasks or services?", options: ["Globalization","Outsourcing","Virtual teams","Co-location"], correct: 1, explanation: "Outsourcing delegates tasks to external providers." },
      { text: "20. A collective of people who work together with a shared goal but little or no time spent face-to-face is a:", options: ["Functional team","Matrix team","Virtual team","Dynamic team"], correct: 2, explanation: "Virtual teams collaborate remotely with little face-to-face time." },
      { text: "21. How many project management process groups are defined by PMI?", options: ["4","5","10","12"], correct: 1, explanation: "PMI defines five process groups: Initiating, Planning, Executing, Monitoring & Controlling, Closing." },
      { text: "22. Which process group generally requires the most time and resources?", options: ["Initiating","Planning","Executing","Monitoring and Controlling"], correct: 2, explanation: "Executing typically consumes the most time and resources." },
      { text: "23. Developing a project charter is an output of which process group?", options: ["Pre-initiating","Initiating","Planning","Executing"], correct: 1, explanation: "Creating the project charter is part of Initiating." },
      { text: "24. In Scrum, who is responsible for representing the business and maintaining the product backlog?", options: ["ScrumMaster","Project Manager","Product Owner","Development Team"], correct: 2, explanation: "The Product Owner manages and prioritizes the product backlog." },
      { text: "25. A Scrum team plans its work during a short, iterative cycle called a:", options: ["Phase","Sprint","Milestone","Increment"], correct: 1, explanation: "A sprint is a short development iteration in Scrum." },
      { text: "26. Which of the following is a key artifact in Scrum that lists everything needed or desired in the product?", options: ["Sprint Backlog","Burndown Chart","Product Backlog","WBS Dictionary"], correct: 2, explanation: "The product backlog contains desired product features and items." },
      { text: "27. What is the main purpose of the Daily Scrum meeting?", options: ["To demonstrate working software to stakeholders","To plan the entire scope of the project","To synchronize activities and report progress/impediments within 15 minutes","To sign off on final project documentation"], correct: 2, explanation: "Daily Scrum is a short sync to report progress and impediments." },
      { text: "28. What type of chart shows the cumulative work remaining in a Scrum sprint on a day-by-day basis?", options: ["Gantt chart","Burndown chart","Pareto chart","Milestone chart"], correct: 1, explanation: "A burndown chart tracks remaining work over time in a sprint." },
      { text: "29. Retrospective meetings are conducted during which process group?", options: ["Initiating","Planning","Executing","Closing"], correct: 3, explanation: "Retrospectives are held at the end of iterations or during closing to reflect and improve." },
      { text: "30. Mapping process groups to knowledge areas shows that every single knowledge area has at least one process in which process group?", options: ["Initiating","Planning","Executing","Closing"], correct: 1, explanation: "Planning includes processes across most knowledge areas." },
      { text: "31. Which knowledge area includes processes to identify, define, combine, unify, and coordinate various project management activities?", options: ["Project Scope Management","Project Integration Management","Project Communication Management","Project Stakeholder Management"], correct: 1, explanation: "Integration management ensures coordination across project processes." },
      { text: "32. A \"__________\" is a document that formally recognizes the existence of a project and provides direction on the project’s objectives and management.", options: ["Project Management Plan","Business Case","Project Charter","Work Breakdown Structure"], correct: 2, explanation: "The project charter formally authorizes the project." },
      { text: "33. What financial analysis method calculates the expected net monetary gain or loss from a project by discounting all expected future cash inflows and outflows to the present point in time?", options: ["Net Present Value (NPV)","Return on Investment (ROI)","Payback Analysis","Cost-Benefit Ratio"], correct: 0, explanation: "NPV discounts future cash flows to present value to evaluate projects." },
      { text: "34. If a company wants to choose a project based on its alignment with broad corporate goals and multiple weighted parameters, it should use a:", options: ["Payback model","Weighted Scoring Model","Net Present Value chart","Balanced Scorecard"], correct: 1, explanation: "Weighted scoring evaluates projects across multiple criteria aligned to goals." },
      { text: "35. A project management plan baseline is used to measure performance against which three targets?", options: ["Quality, Risk, and Human Resources","Scope, Time, and Cost","Communication, Procurement, and Stakeholders","Objectives, Charter, and Deliverables"], correct: 1, explanation: "Baselines commonly measure scope, schedule (time), and cost." },
      { text: "36. Directing and managing project work is part of which process group?", options: ["Initiating","Planning","Executing","Monitoring and Controlling"], correct: 2, explanation: "Directing and managing project work is an Executing process." },
      { text: "37. What process involves identifying, evaluating, and managing changes throughout the project life cycle?", options: ["Direct Change Management","Integrated Change Control","Configuration Control","Scope Change Control"], correct: 1, explanation: "Integrated change control manages all change requests and their impacts." },
      { text: "38. A ______ is a formal, documented group of people responsible for approving or rejecting changes to a project.", options: ["Steering Committee","Project Management Office","Change Control Board (CCB)","Stakeholder Committee"], correct: 2, explanation: "A Change Control Board reviews and approves/rejects change requests." },
      { text: "39. Administrative and contract closure happens during which process?", options: ["Integrated Change Control","Closing Projects or Phases","Directing and Managing Project Work","Controlling Scope"], correct: 1, explanation: "Administrative closure and contract closure occur during Closing." },
      { text: "40. What tool helps capture lessons learned at the end of a project to aid future initiatives?", options: ["Project Charter","Project Management Plan","Lessons-learned report","Risk Register"], correct: 2, explanation: "A lessons-learned report documents insights for future projects." },
      { text: "41. What is the process of developing a detailed description of the project and product called?", options: ["Planning Scope Management","Collecting Requirements","Defining Scope","Creating the WBS"], correct: 2, explanation: "Defining scope produces a detailed description of project and product scope." },
      { text: "42. A \"__________\" is a deliverable-oriented grouping of the work involved in a project that defines its total scope.", options: ["Project Charter","Work Breakdown Structure (WBS)","Scope Management Plan","Product Backlog"], correct: 1, explanation: "WBS is a hierarchical decomposition of project deliverables." },
      { text: "43. The lowest level of a WBS is called a(n):", options: ["Activity","Work package","Milestone","Task"], correct: 1, explanation: "Work packages are the lowest WBS elements assigned to teams." },
      { text: "44. What is a document that provides detailed information about every element in the WBS called?", options: ["Scope Statement","WBS Dictionary","Requirement Matrix","Project Blueprint"], correct: 1, explanation: "The WBS dictionary describes each WBS element in detail." },
      { text: "45. Constructing a WBS by starting with the largest items of the project and breaking them down into subordinate items is known as the:", options: ["Analogy approach","Bottom-up approach","Top-down approach","Mind mapping approach"], correct: 2, explanation: "Top-down decomposition starts with major deliverables and breaks them down." },
      { text: "46. Generating ideas for a WBS using a visual technique that branches outward from a central core idea is called:", options: ["Prototyping","Fishbone analysis","Mind Mapping","Storyboarding"], correct: 2, explanation: "Mind mapping uses a visual branching technique to generate ideas." },
      { text: "47. What occurs when the project scope increases slowly and organically without formal approval or adjustments to time and cost?", options: ["Scope Verification","Progressive Elaboration","Scope Creep","Gold Plating"], correct: 2, explanation: "Scope creep is uncontrolled expansion of project scope." },
      { text: "48. Formalizing acceptance of the completed project deliverables by stakeholders is known as:", options: ["Scope Definition","Validating Scope / Scope Verification","Quality Control","Closing the Project"], correct: 1, explanation: "Validating scope confirms deliverables meet acceptance criteria." },
      { text: "49. Managing changes to the project scope baseline is the main objective of:", options: ["Plan Scope Management","Define Scope","Controlling Scope","Quality Assurance"], correct: 2, explanation: "Controlling scope manages changes to the scope baseline." },
      { text: "50. The scope baseline consists of the approved scope statement, the WBS, and the:", options: ["Project Charter","WBS Dictionary","Project Schedule","Cost Baseline"], correct: 1, explanation: "The WBS dictionary accompanies the WBS in the scope baseline." },
      { text: "51. Which document lists the distinct items that must be performed to complete a project?", options: ["WBS Dictionary","Activity List","Gantt Chart","Milestone List"], correct: 1, explanation: "An activity list enumerates the specific tasks needed to complete work packages." },
      { text: "52. What is the dependency relationship where Task B cannot start until Task A finishes?", options: ["Start-to-Start (SS)","Finish-to-Finish (FF)","Finish-to-Start (FS)","Start-to-Finish (SF)"], correct: 2, explanation: "Finish-to-Start (FS) is the most common dependency: successor starts after predecessor finishes." },
      { text: "53. A network diagramming technique in which boxes represent activities and arrows show dependencies is called the:", options: ["Precedence Diagramming Method (PDM)","PERT technique","Arrow Diagramming Method (ADM)","Gantt charting method"], correct: 0, explanation: "PDM uses boxes for activities and arrows for dependencies." },
      { text: "54. What is the longest path through a network diagram that determines the earliest completion date of a project called?", options: ["The Slack Path","The Critical Path","The Buffer Path","The Fast Path"], correct: 1, explanation: "The critical path is the longest-duration path that sets project duration." },
      { text: "55. How much float or slack time does a task on the critical path have?", options: ["It depends on the resource allocation","Positive slack","Zero or negative slack","Max capacity slack"], correct: 2, explanation: "Tasks on the critical path usually have zero float." },
      { text: "56. Shortening a project schedule by overlapping tasks or performing them in parallel instead of sequentially is called:", options: ["Crashing","Fast tracking","Resource Leveling","Scope reduction"], correct: 1, explanation: "Fast tracking overlaps activities to reduce schedule duration." },
      { text: "57. Shortening a project schedule by adding more resources to critical path tasks, thereby increasing total cost, is called:", options: ["Crashing","Fast tracking","Critical Chain Scheduling","PERT Analysis"], correct: 0, explanation: "Crashing shortens schedule by adding resources at increased cost." },
      { text: "58. What scheduling technique utilizes a network diagram but adds \"buffers\" to protect the project completion date from resource constraints?", options: ["PERT","Gantt Method","Critical Chain Scheduling","Milestone tracking"], correct: 2, explanation: "Critical Chain Scheduling adds buffers to protect project end dates." },
      { text: "59. Which formula uses optimistic, pessimistic, and most likely duration estimates to calculate an expected task duration?", options: ["Earned Value","Net Present Value","PERT weighted average","Critical Path calculation"], correct: 2, explanation: "PERT uses three-point estimates to compute expected duration." },
      { text: "60. A ________ is a significant event on a project schedule with zero duration.", options: ["Activity","Work package","Milestone","Baseline"], correct: 2, explanation: "A milestone marks significant points and typically has zero duration." },
      { text: "61. What type of cost estimate has the highest accuracy and is done late in the planning phase or during execution?", options: ["Rough Order of Magnitude (ROM) estimate","Budgetary estimate","Definitive estimate","Parametric estimate"], correct: 2, explanation: "Definitive estimates have the highest accuracy and are done later." },
      { text: "62. If an IT project estimator uses the costs of a prior, highly similar software project to estimate the current project, they are using:", options: ["Bottom-up estimating","Analogous estimating","Parametric estimating","Three-point estimating"], correct: 1, explanation: "Analogous estimating uses historical project data for new estimates." },
      { text: "63. Sunk costs are defined as money that has:", options: ["Been reserved for future risk mitigation","Already been spent in the past and should not influence future decisions","Been lost due to scope reductions","Been borrowed from external financial stakeholders"], correct: 1, explanation: "Sunk costs are past expenditures that should not affect future decisions." },
      { text: "64. What project management technique integrates scope, time, and cost data to measure project performance?", options: ["Critical Path Method","Earned Value Management (EVM)","Balance Scorecard method","Portfolio Optimization"], correct: 1, explanation: "EVM integrates scope, schedule, and cost to assess performance." },
      { text: "65. In EVM, what does the Cost Variance (CV) formula measure?", options: ["$EV - PV$","$EV - AC$","$PV - AC$","$EV / AC$"], correct: 1, explanation: "CV = EV - AC indicates cost performance vs actual cost." },
      { text: "66. If a project has a Schedule Performance Index (SPI) of 1.2, this means the project is:", options: ["Over budget","Under budget","Ahead of schedule","Behind schedule"], correct: 2, explanation: "SPI > 1 indicates the project is ahead of schedule." },
      { text: "67. Aggregating the estimated costs of individual activities or work packages to establish an authorized cost baseline is the process of:", options: ["Estimating Costs","Determining the Budget","Controlling Costs","Financial Auditing"], correct: 1, explanation: "Determining the budget aggregates estimates into an authorized cost baseline." },
      { text: "68. What are the funds held to account for \"unknown unknowns\" in a project budget called?", options: ["Contingency reserves","Management reserves","Discretionary buffers","Expected Monetary Values"], correct: 1, explanation: "Management reserves are for unknown unknowns; contingency for identified risks." },
      { text: "69. The Cost Performance Index (CPI) is calculated by dividing:", options: ["Planned Value by Actual Cost ($PV / AC$)","Earned Value by Planned Value ($EV / PV$)","Earned Value by Actual Cost ($EV / AC$)","Actual Cost by Earned Value ($AC / EV$)"], correct: 2, explanation: "CPI = EV / AC measures cost efficiency." },
      { text: "70. Costs that can be directly attributed to a specific project work package (like software licenses purchased for the team) are called:", options: ["Indirect costs","Direct costs","Fixed costs","Variable costs"], correct: 1, explanation: "Direct costs are directly attributable to a project." },
      { text: "71. Conformance to requirements and fitness for use are common definitions of:", options: ["Scope","Quality","Integration","Risk"], correct: 1, explanation: "Quality is commonly defined as conformance to requirements and fitness for use." },
      { text: "72. What process group does \"Performing Quality Assurance\" belong to?", options: ["Initiating","Planning","Executing","Monitoring and Controlling"], correct: 2, explanation: "Performing Quality Assurance is an Executing process." },
      { text: "73. A graphic display of data that shows the relationship between two variables to see if there is a correlation is a:", options: ["Histogram","Pareto diagram","Scatter diagram / plot","Control chart"], correct: 2, explanation: "A scatter plot shows correlation between two variables." },
      { text: "74. The ________ principle states that 80 percent of problems are often due to 20 percent of the causes.", options: ["Six Sigma","Deming 14 points","Pareto (80/20 Rule)","Juran triple"], correct: 2, explanation: "The Pareto principle (80/20) attributes most problems to a small number of causes." },
      { text: "75. What quality management approach aims for near-perfection, defining quality as no more than 3.4 defects per million opportunities?", options: ["ISO 9000","Six Sigma","Total Quality Management (TQM)","Capability Maturity Model (CMM)"], correct: 1, explanation: "Six Sigma targets very low defect rates using statistical methods." },
      { text: "76. Which quality tool is used to help track repetitive operational steps and ensure everything is performed consistently?", options: ["Fishbone diagram","Control chart","Checklist","Matrix chart"], correct: 2, explanation: "Checklists ensure consistent execution of repeatable steps." },
      { text: "77. Testing a distinct unit of code or a single module within an application is called:", options: ["Unit testing","Integration testing","System testing","User acceptance testing"], correct: 0, explanation: "Unit testing verifies individual modules or units of code." },
      { text: "78. Who is famous for developing the 14 Points for Management and teaching quality control to Japanese industry after WWII?", options: ["Joseph Juran","W. Edwards Deming","Philip Crosby","Kaoru Ishikawa"], correct: 1, explanation: "W. Edwards Deming promoted quality and the 14 Points for Management." },
      { text: "79. The cost of evaluating, testing, and auditing a product to ensure it conforms to quality standards is called:", options: ["Prevention cost","Appraisal cost / Evaluation cost","Internal failure cost","External failure cost"], correct: 1, explanation: "Appraisal costs are incurred to inspect and test products for quality." },
      { text: "80. What framework describes evolutionary paths or stages of process organizational maturity?", options: ["Balanced Scorecard","Maturity Models (e.g., CMMI)","Fishbone methodology","Quality Function Deployment"], correct: 1, explanation: "Maturity models (like CMMI) describe stages of process maturity." },
      { text: "81. Which tool maps project work packages from the WBS to the individuals or columns representing resources responsible for execution?", options: ["Resource Histogram","Organizational Chart","Responsibility Assignment Matrix (RAM)","Staffing Management Plan"], correct: 2, explanation: "A RAM shows responsibility assignments (who does what)." },
      { text: "82. According to Maslow's Hierarchy of Needs, what is the highest level of human motivation?", options: ["Safety needs","Social needs","Esteem needs","Self-actualization"], correct: 3, explanation: "Self-actualization is the highest level in Maslow's hierarchy." },
      { text: "83. Herzberg's Motivation-Hygiene theory states that \"hygiene factors\" like salary or working conditions can:", options: ["Highly motivate employees if increased","Cause dissatisfaction if absent, but do not truly motivate on their own","Replace the need for self-actualization","Change a person's behavioral social style profile"], correct: 1, explanation: "Hygiene factors prevent dissatisfaction but don't motivate by themselves." },
      { text: "84. A manager who believes that employees inherently dislike work and must be closely monitored, coerced, and directed exhibits which of McGregor's theories?", options: ["Theory X","Theory Y","Theory Z","Acquired-Needs Theory"], correct: 0, explanation: "Theory X assumes employees dislike work and need direction." },
      { text: "85. What column chart shows the total number of resources assigned to a project over time?", options: ["Gantt Chart","Resource Histogram","Responsibility Matrix","Network Diagram"], correct: 1, explanation: "A resource histogram shows resource usage over time." },
      { text: "86. Delaying tasks within their slack time to smooth out resource utilization and resolve resource overallocations is known as:", options: ["Resource Loading","Resource Leveling","Crashing","Fast Tracking"], correct: 1, explanation: "Resource leveling delays tasks within float to resolve overallocation." },
      { text: "87. Which popular personality test categorizes human behavior into four dimensions (E/I, S/N, T/F, J/P) to help with team building?", options: ["Social Styles Profile","DISC Profile","Myers-Briggs Type Indicator (MBTI)","Thamhain Influence tool"], correct: 2, explanation: "MBTI categorizes personalities across four dimensions." },
      { text: "88. If a project has 5 stakeholders, how many communication channels exist?", options: ["5","10","15","20"], correct: 1, explanation: "Communication channels = n(n-1)/2; for 5 stakeholders that's 10." },
      { text: "89. What communication method is best suited for resolving complex interpersonal conflicts or delivering sensitive project news?", options: ["Text messaging","E-mail","Face-to-face meetings","Status reports"], correct: 2, explanation: "Face-to-face communication is best for sensitive or complex issues." },
      { text: "90. A document that defines who needs what project information, when they need it, and how it will be distributed is a:", options: ["Project Charter","Communications Management Plan","Stakeholder Register","Project Management Plan"], correct: 1, explanation: "A communications management plan specifies information needs and distribution." },
      { text: "91. What is a document that records identified risks, their root causes, potential responses, and risk owners called?", options: ["Risk Management Plan","Risk Register","Probability Matrix","Issues Log"], correct: 1, explanation: "A risk register documents identified risks and planned responses." },
      { text: "92. A qualitative risk tool that plots risks based on their likelihood of occurrence and systemic effect on project objectives is a:", options: ["Decision Tree","Expected Monetary Value chart","Sensitivity Analysis matrix","Probability / Impact Matrix"], correct: 3, explanation: "Probability/impact matrix helps prioritize risks qualitatively." },
      { text: "93. What calculation multiplies the probability of a risk event by its total financial impact?", options: ["Return on Investment (ROI)","Expected Monetary Value (EMV)","Net Present Value (NPV)","Cost Performance Index (CPI)"], correct: 1, explanation: "EMV = probability x impact to quantify risk exposure." },
      { text: "94. If a project manager shifts the operational risk of a server crash to an external cloud service vendor via a contract, which risk response strategy is being used?", options: ["Avoidance","Mitigation","Transfer / Allocation","Acceptance"], correct: 2, explanation: "Transferring risk allocates responsibility to a third party." },
      { text: "95. In which type of contract does the buyer bear the lowest financial risk because the total price for goods or services is predefined?", options: ["Cost-Plus-Incentive-Fee (CPIF)","Fixed-Price / Lump-Sum contract","Time and Material (T&M) contract","Cost-Plus-Fixed-Fee (CPFF)"], correct: 1, explanation: "Fixed-price contracts shift cost risk to the seller." },
      { text: "96. A document used to solicit formal proposals from prospective outside vendors to solve a specific corporate problem is a:", options: ["Request for Proposal (RFP)","Request for Quote (RFQ)","Statement of Work (SOW)","Purchase Request"], correct: 0, explanation: "An RFP solicits proposals describing how vendors would solve a problem." },
      { text: "97. Determining whether it is more cost-effective to develop a custom software module internally or purchase an off-the-shelf application is called a:", options: ["Procurement breakdown","Make-or-buy analysis","Source selection","Market survey"], correct: 1, explanation: "Make-or-buy analysis evaluates build vs buy decisions." },
      { text: "98. What is the newly added tenth knowledge area in the PMBOK® Guide, Fifth Edition?", options: ["Project Human Resource Management","Project Communications Management","Project Risk Management","Project Stakeholder Management"], correct: 3, explanation: "Stakeholder Management was added to emphasize stakeholder engagement." },
      { text: "99. The first step in project stakeholder management is:", options: ["Planning Stakeholder Engagement","Managing Stakeholder Engagement","Identifying Stakeholders","Controlling Stakeholder Engagement"], correct: 2, explanation: "Identifying stakeholders is the first step to manage them." },
      { text: "100. A tool used to categorize stakeholders based on their level of authority and their level of concern regarding project outcomes is a:", options: ["Responsibility Assignment Matrix","Power / Interest Grid","Stakeholder Histogram","Communication Matrix"], correct: 1, explanation: "A power/interest grid plots stakeholders by authority and interest." }
    ]
  },

  "Database Management System": {
    title: "Database Management System",
    questions: [
      { text: "1. Which of the following is a key characteristic of the database approach compared to the traditional file-processing approach?", options: ["Program-data dependence","Self-describing nature of a database system","Data redundancy by design","Single-user restriction"], correct: 1, explanation: "Database systems are self-describing via metadata." },
      { text: "2. The description of a database (metadata) is stored in the:", options: ["Database application","System catalog or data dictionary","Operating system registry","Transaction log"], correct: 1, explanation: "Metadata resides in the system catalog / data dictionary." },
      { text: "3. Which level of the Three-Schema Architecture describes how the data is actually stored physically on disk storage?", options: ["External level","Conceptual level","Internal / Physical level","Logical level"], correct: 2 },
      { text: "4. The ability to modify the conceptual schema without changing the external schemas or application programs is called:", options: ["Physical data independence","Logical data independence","Conceptual abstraction","Schema evolution"], correct: 1 },
      { text: "5. Which of the following database users is responsible for authorizing access to the database, coordinating and monitoring its use, and acquiring software/hardware resources?", options: ["Database Administrator (DBA)","Database Designer","End User","System Analyst"], correct: 0 },
      { text: "6. In the Three-Schema Architecture, the schema that describes the community user view of the entire database structure is the:", options: ["Internal schema","External schema","Conceptual schema","Physical schema"], correct: 2 },
      { text: "7. Which language is typically used by a DBA to specify the conceptual and internal schemas if no strict separation exists?", options: ["DML (Data Manipulation Language)","DDL (Data Definition Language)","VDL (View Definition Language)","SDL (Storage Definition Language)"], correct: 1 },
      { text: "8. What type of database end-user accesses the database by writing custom program code or queries, rather than using canned transactions?", options: ["Naive user","Sophisticated / Analytical user","Stand-alone user","Parametric user"], correct: 1 },
      { text: "9. Program-data independence means that:", options: ["Programs and data are stored in the same physical file","Changing data structures does not necessitate changing the application programs that access them","Data cannot be accessed by any program without explicit administrative privileges","Applications are written before the database is designed"], correct: 1 },
      { text: "10. A centralized control of data and programs is a main advantage of:", options: ["File-processing systems","Database management systems","Web hosting servers","Operating systems"], correct: 1 },
      { text: "11. Which data model represents data as a collection of records, where links are represented as pointers and organized into an arbitrary graph structure?", options: ["Relational model","Network model","Hierarchical model","Object-oriented model"], correct: 1 },
      { text: "12. The structure of a database, specified during database design, is called the:", options: ["Database state","Database snapshot","Database schema","Database extension"], correct: 2 },
      { text: "13. The actual data stored in a database at a specific moment in time is called the:", options: ["Database schema","Intension","Database state or instance","Metadata"], correct: 2 },
      { text: "14. Which component of a DBMS is responsible for ensuring that concurrent transactions do not interfere with each other?", options: ["Query Optimizer","Concurrency Control Subsystem","Recovery Manager","Buffer Manager"], correct: 1 },
      { text: "15. Data insulation refers to the concept where:", options: ["Data is kept entirely hidden from all network traffic","Program codes are insulated from modifications to the physical storage structures","Multiple users are blocked from accessing the data at the same time","Backups are kept in separate geographical locations"], correct: 1 },
      { text: "16. In an Entity-Relationship (ER) diagram, a rectangular box represents a(n):", options: ["Attribute","Relationship","Entity Type","Weak entity type"], correct: 2 },
      { text: "17. An attribute that can be broken down into smaller, independent component parts (e.g., Name into First_Name and Last_Name) is called a:", options: ["Simple attribute","Multi-valued attribute","Composite attribute","Derived attribute"], correct: 2 },
      { text: "18. In an ER diagram, a double oval represents which type of attribute?", options: ["Key attribute","Composite attribute","Multi-valued attribute","Derived attribute"], correct: 2 },
      { text: "19. An entity type that does not have its own key attributes and must depend on an identifying relationship is called a:", options: ["Strong entity type","Weak entity type","Subclass entity type","Associative entity type"], correct: 1 },
      { text: "20. The structural constraint that specifies whether the existence of an entity depends on its being related to another entity via the relationship type is called:", options: ["Cardinality ratio","Participation constraint (Total vs. Partial)","Degree of relationship","Binary constraint"], correct: 1 },
      { text: "21. If every Employee must work for a Department, the participation of Employee in the \"Works_For\" relationship is:", options: ["Partial","Total","Optional","Multi-valued"], correct: 1 },
      { text: "22. An attribute whose value can be computed from other related attributes or records (e.g., Age calculated from Date_of_Birth) is a:", options: ["Complex attribute","Multi-valued attribute","Derived attribute","Stored attribute"], correct: 2 },
      { text: "23. The number of participating entity types in a single relationship is known as the:", options: ["Cardinality of the relationship","Degree of the relationship","Role of the relationship","Multiplicity of the relationship"], correct: 1 },
      { text: "24. In EER modeling, the process of defining a set of subclasses from an entity type (superclass) is called:", options: ["Generalization","Specialization","Aggregation","Categorization"], correct: 1 },
      { text: "25. A specialization constraint that dictates an entity can belong to at most one subclass is called a:", options: ["Overlapping constraint","Disjoint constraint","Total specialization","Partial specialization"], correct: 1 },
      { text: "26. In EER diagrams, what does a double line connecting a superclass to a specialization circle signify?", options: ["Partial specialization","Total specialization / participation","Disjoint subclasses","Overlapping subclasses"], correct: 1 },
      { text: "27. The process of suppressing detailed differences among several entity types, identifying their common features, and combining them into a single superclass is called:", options: ["Specialization","Generalization","Categorization","Conceptualization"], correct: 1 },
      { text: "28. A subclass that represents a collection of entities from different distinct entity types (superclasses) is called a:", options: ["Shared subclass","Category or Union type","Disjoint specialization","Weak entity type"], correct: 1 },
      { text: "29. What type of key uniquely identifies a weak entity when combined with the key of its owner entity?", options: ["Primary key","Foreign key","Partial key / Discriminator","Superkey"], correct: 2 },
      { text: "30. When a relationship type itself has attributes, these attributes are best migrated to the primary key of the entities if the relationship cardinality is:", options: ["Many-to-Many (M:N)","One-to-One (1:1)","One-to-Many (1:N)","All of the above"], correct: 0 },
      { text: "31. A recursive relationship is a relationship where:", options: ["An entity type participates more than once in the same relationship type with different roles","Two different entities reference a weak entity","A sub-query calls itself repeatedly","A table points to a completely separate database"], correct: 0 },
      { text: "32. In a 1:N relationship between Department (1) and Employee (N), the foreign key is placed on:", options: ["The Department side","The Employee side","A separate lookup table only","Both sides"], correct: 1 },
      { text: "33. In EER modeling, if a subclass has more than one superclass, and the superclasses represent different entity types, it forms a:", options: ["Specialization hierarchy","Lattice structure","Disjoint tree","Categorization hierarchy"], correct: 1 },
      { text: "34. Attribute inheritance means that:", options: ["A superclass automatically inherits attributes from its subclasses","A subclass automatically inherits all attributes and relationships of its superclass","Attributes are copied from one database instance to another","Foreign keys map automatically to candidate keys"], correct: 1 },
      { text: "35. Which constraint prevents an entity from being a member of two subclasses simultaneously within a specialization?", options: ["Complete constraint","Overlapping constraint","Disjointness constraint","Multiplicity constraint"], correct: 2 },
      { text: "36. In the relational model, a row of a relation table is formally called a(n):", options: ["Attribute","Domain","Tuple","Degree"], correct: 2 },
      { text: "37. The number of attributes in a relation schema is referred to as its:", options: ["Cardinality","Degree / Arity","State","Domain value"], correct: 1 },
      { text: "38. Which type of constraint states that no primary key value can be NULL?", options: ["Referential integrity constraint","Entity integrity constraint","Domain constraint","Key constraint"], correct: 1 },
      { text: "39. A foreign key specifies a relationship between two relations and maintains:", options: ["Entity integrity","Referential integrity","Domain integrity","User-defined integrity"], correct: 1 },
      { text: "40. A minimal set of attributes that uniquely identifies each tuple in a relation is called a:", options: ["Superkey","Candidate key","Foreign key","Composite key"], correct: 1 },
      { text: "41. Which relational algebra operation filters out rows based on a specific predicate condition?", options: ["Project (π)","Select (σ)","Join (⋈)","Union (∪)"], correct: 1 },
      { text: "42. Which relational algebra operation drops columns from a relation and keeps only specified attributes?", options: ["Select (σ)","Project (π)","Cartesian Product (×)","Intersection (∩)"], correct: 1 },
      { text: "43. To combine all tuples from two relations that are union-compatible, you should use which operation?", options: ["Intersection","Set Difference","Union","Cartesian Product"], correct: 2 },
      { text: "44. The Cartesian Product (R × S) of relation R with n tuples and relation S with m tuples results in a relation containing how many tuples?", options: ["n + m","n × m","n^m","max(n, m)"], correct: 1 },
      { text: "45. Which join operation combines tuples from two relations based strictly on equality conditions between attributes with matching names?", options: ["Theta Join","Equijoin","Natural Join","Outer Join"], correct: 2 },
      { text: "46. If you want to keep all tuples from the first relation even if they do not match any tuple in the second relation during a join, you should use a:", options: ["Full Outer Join","Left Outer Join","Right Outer Join","Inner Join"], correct: 1 },
      { text: "47. Two relations must have the same number of attributes, and their corresponding attributes must have identical domains, to be compatible for:", options: ["Natural Join","Set Operations (Union, Intersection, Set Difference)","Cartesian Product","Division operation"], correct: 1 },
      { text: "48. In relational algebra, the symbol ρ (rho) is used for the:", options: ["Selection operation","Projection operation","Rename operation","Division operation"], correct: 2 },
      { text: "49. Which operation is useful for queries that involve a \"for all\" or \"every\" requirement (e.g., find students who took all courses required for graduation)?", options: ["Natural Join","Cartesian Product","Division (/)","Intersection"], correct: 2 },
      { text: "50. What is the fundamental difference between a Candidate Key and a Superkey?", options: ["Candidate keys can contain NULL values","A superkey is a set of attributes containing a candidate key; a candidate key is a minimal superkey","Candidate keys are selected by the user, superkeys are generated by the DBMS","There is no difference"], correct: 1 },
      { text: "51. If an operational statement violates referential integrity by deleting a referenced tuple, the DBMS can automatically handle it by setting the foreign key to NULL, rejecting the deletion, or using:", options: ["CASCADE","RESTRUCTURING","ABORT TRANSACTION","NORMALIZATION"], correct: 0 },
      { text: "52. The domain of an attribute defines:", options: ["The total number of rows allowed in the table","The set of all atomic, allowable values for that attribute","The server name where the data is hosted","The security clear level needed to read the attribute"], correct: 1 },
      { text: "53. Which operation is considered a unary operation?", options: ["Join","Cartesian Product","Projection","Intersection"], correct: 2 },
      { text: "54. An Equijoin is a specific type of Theta Join where the comparison operator (θ) is restricted exclusively to:", options: [">","<","=","≠"], correct: 2 },
      { text: "55. A relation instance is a set of tuples. By definition, this means that:", options: ["Order of tuples is strictly fixed","Duplicate tuples are not allowed in a formal mathematical relation","Tables must contain at least one column of type VARCHAR","Relations can have an infinite number of attributes"], correct: 1 },
      { text: "56. Which SQL clause is used to filter query results after rows have been grouped using aggregate functions?", options: ["WHERE","HAVING","ORDER BY","GROUP BY"], correct: 1 },
      { text: "57. Which standard SQL command is categorized under Data Definition Language (DDL)?", options: ["INSERT","SELECT","ALTER TABLE","UPDATE"], correct: 2 },
      { text: "58. What happens if you run an UPDATE command without a WHERE clause?", options: ["The operation will fail with a syntax error","Only the first row of the table will be updated","All rows in the table will be modified","The table schema will be deleted"], correct: 2 },
      { text: "59. Which SQL string-matching operator is used with the LIKE clause to match zero or more characters?", options: ["_ (underscore)","% (percent sign)","* (asterisk)","? (question mark)"], correct: 1 },
      { text: "60. Which command removes all data from a table permanently but preserves its structural definition/schema?", options: ["DROP TABLE","DELETE FROM","TRUNCATE TABLE","REMOVE TABLE"], correct: 2 },
      { text: "61. What is a virtual table derived from the result of an underlying SQL query called?", options: ["Base table","View","Index","Snapshot"], correct: 1 },
      { text: "62. Which aggregation function returns the total number of non-null values in a specific column?", options: ["SUM","COUNT","AVG","TOTAL"], correct: 1 },
      { text: "63. To sort query results in descending order based on a specific attribute, use:", options: ["SORT BY DESC","ORDER BY DESC","GROUP BY DOWN","ALIGN BY DESC"], correct: 1 },
      { text: "64. Which subquery comparison operator returns TRUE if the nested query returns one or more matching rows?", options: ["IN","EXISTS","ALL","ANY"], correct: 1 },
      { text: "65. How can you eliminate duplicate rows from the output of an SQL SELECT statement?", options: ["Use the UNIQUE keyword","Use the DISTINCT keyword","Use the GROUP BY ALL clause","Use the Clean() function"], correct: 1 },
      { text: "66. What type of constraint is implemented in SQL via CHECK?", options: ["Referential constraint","Domain / Attribute-level validation constraint","Entity constraint","Authorization constraint"], correct: 1 },
      { text: "67. Which join syntax explicitly returns rows when there is a match in either the left table or right table records?", options: ["LEFT JOIN","RIGHT JOIN","FULL OUTER JOIN","INNER JOIN"], correct: 2 },
      { text: "68. The SQL operational statement GRANT belongs to which sub-language category?", options: ["DDL (Data Definition Language)","DML (Data Manipulation Language)","DCL (Data Control Language)","TCL (Transaction Control Language)"], correct: 2 },
      { text: "69. How do you add a new row of data into an existing database table?", options: ["ADD ROW VALUES (...)","INSERT INTO table_name VALUES (...)","UPDATE table_name SET ROW (...)","CREATE ROW IN table_name"], correct: 1 },
      { text: "70. What is the default sorting behavior of the ORDER BY clause if no order modifier is explicitly provided?", options: ["Descending (DESC)","Ascending (ASC)","Random sorting based on disk configuration","Sorting by primary key value"], correct: 1 },
      { text: "71. What type of dependency occurs when an attribute uniquely determines the value of another attribute?", options: ["Functional Dependency","Join Dependency","Multivalued Dependency","Transitive Dependency"], correct: 0 },
      { text: "72. A relation schema is in First Normal Form (1NF) if and only if:", options: ["There are no partial dependencies","There are no transitive dependencies","All attribute values are atomic (no composite or multi-valued attributes)","Every determinant is a candidate key"], correct: 2 },
      { text: "73. A relation is in Second Normal Form (2NF) if it is in 1NF and:", options: ["It has no transitive functional dependencies","Every non-prime attribute is fully functionally dependent on the primary key (no partial dependencies)","It has no multi-valued dependencies","It contains a single foreign key column"], correct: 1 },
      { text: "74. If a non-prime attribute depends on another non-prime attribute, which then depends on the primary key, this relationship describes a:", options: ["Full functional dependency","Partial dependency","Transitive dependency","Trivial dependency"], correct: 2 },
      { text: "75. A relation schema is in Third Normal Form (3NF) if it satisfies 2NF and:", options: ["Has no partial dependencies","Has no transitive dependencies of non-prime attributes on the primary key","Has no multi-valued dependencies","Its primary key is composite"], correct: 1 },
      { text: "76. Boyce-Codd Normal Form (BCNF) is a stricter version of 3NF. A relation is in BCNF if, for every non-trivial functional dependency X → Y:", options: ["Y is a prime attribute","X is a superkey / candidate key","X is a subset of Y","Both X and Y are non-prime"], correct: 1 },
      { text: "77. What normal form addresses problems associated with independent Multi-valued Dependencies (MVDs)?", options: ["2NF","3NF","4NF","5NF"], correct: 2 },
      { text: "78. An attribute that is a member of any candidate key for a relation schema is called a:", options: ["Key attribute or Prime attribute","Non-prime attribute","Foreign attribute","Derived attribute"], correct: 0 },
      { text: "79. The rules used to infer new functional dependencies from a given set of dependencies are called:", options: ["Codd's Rules","Armstrong's Axioms","Normalization Rules","Relational Theorems"], correct: 1 },
      { text: "80. If X → Y and Y → Z, then X → Z. This inference rule is known as the:", options: ["Reflexivity rule","Augmentation rule","Transitivity rule","Decomposition rule"], correct: 2 },
      { text: "81. The undesirable side effects of poorly designed databases, such as redundant updates or loss of information during deletions, are called:", options: ["Synchronization errors","Storage faults","Modification/Design anomalies","Schema exceptions"], correct: 2 },
      { text: "82. Decomposing a relation schema into smaller schemas must always ensure which property to prevent creating incorrect records upon reconstruction?", options: ["Dependency preservation","Lossless-join property","Redundancy growth","Referential indexing"], correct: 1 },
      { text: "83. Fifth Normal Form (5NF) deals with dependencies known as:", options: ["Functional dependencies","Multivalued dependencies","Join dependencies","Transitive dependencies"], correct: 2 },
      { text: "84. If an attribute can be uniquely determined by a proper subset of a composite primary key, this is a violation of:", options: ["1NF","2NF","3NF","BCNF"], correct: 1 },
      { text: "85. The process of intentionally converting a normalized database schema back into lower normal forms to optimize query read performance is called:", options: ["Reverse engineering","Denormalization","De-structuring","Index optimization"], correct: 1 },
      { text: "86. What acronym encapsulates the four essential properties that every database transaction must maintain?", options: ["BASE","ACID","CRUD","FIFO"], correct: 1 },
      { text: "87. Which property states that a transaction must be treated as a single, indivisible unit of work—either all operations succeed or none do?", options: ["Atomicity","Consistency","Isolation","Durability"], correct: 0 },
      { text: "88. The property that ensures the changes made to the database by a committed transaction are permanent, even in the event of a system crash, is:", options: ["Isolation","Consistency","Durability","Concurrency"], correct: 2 },
      { text: "89. Which component of the DBMS is responsible for guaranteeing the transaction property of Atomicity?", options: ["Concurrency Control subsystem","Recovery manager","Query optimizer","Security subsystem"], correct: 1 },
      { text: "90. What concurrency anomaly occurs when a transaction reads data that has been modified by another concurrent transaction that has not yet committed?", options: ["Lost Update Problem","Dirty Read Problem (Temporary Update)","Unrepeatable Read Problem","Phantom Read Problem"], correct: 1 },
      { text: "91. Under a two-phase locking (2PL) protocol, a transaction cannot release any locks until:", options: ["It completes all of its read operations","It has acquired all the locks it needs (enters the shrinking phase)","The database is shut down","The transaction aborts"], correct: 1 },
      { text: "92. What occurs when two transactions are blocked permanently, each waiting for a lock held by the other?", options: ["Starvation","Cascading rollback","Deadlock","Serializability failure"], correct: 2 },
      { text: "93. The log file of a DBMS is written to disk before the actual database updates are applied to the physical storage. This rule is called:", options: ["Shadow paging","Write-Ahead Logging (WAL)","Cascading check","Pre-commit indexing"], correct: 1 },
      { text: "94. What type of lock allows multiple concurrent transactions to read an item, but prevents any transaction from writing to it?", options: ["Exclusive lock (X-lock)","Shared lock (S-lock)","Binary lock","Deadlock"], correct: 1 },
      { text: "95. A schedule of transactions is considered correct if it is equivalent to some execution order where transactions run one after another without overlapping. This property is known as:", options: ["Recoverability","Serializability","Concurrency","Multi-programming efficiency"], correct: 1 },
      { text: "96. What recovery technique involves undoing the effects of transactions that were active but uncommitted during a system crash?", options: ["REDO","UNDO / ROLLBACK","CHECKPOINT","COMMIT"], correct: 1 },
      { text: "97. Periodic points inserted into the transaction log where all modified buffers are flushed to the disk storage are called:", options: ["Savepoints","Checkpoints","Commit flags","Synchronization baselines"], correct: 1 },
      { text: "98. If a transaction fails or aborts, and its cancellation causes a chain reaction where other dependent transactions must also be undone, this schedule exhibits:", options: ["Cascading Rollback","Deadlock chain","Starvation sequence","Strict isolation"], correct: 0 },
      { text: "99. Which transaction management state is reached immediately after the last operational statement of the transaction has been executed?", options: ["Committed","Partially Committed","Active","Failed"], correct: 1 },
      { text: "100. In database security, preventing unauthorized users from deducing confidential data values by analyzing public aggregate statistics is a primary challenge of:", options: ["Discretionary Access Control (DAC)","Mandatory Access Control (MAC)","Statistical Database Security","Data Encryption Standards"], correct: 2 }
    ]
  },

  "Data Communication and Computer Networking": {
    title: "Data Communication and Computer Networking",
    questions: [
      { text: "1. Which organization developed the OSI model?", options: ["IEEE","ISO","IETF","ITU-T"], correct: 1 },
      { text: "2. A protocol is defined by three key elements:", options: ["Syntax, semantics, and timing","Data, signal, and media","Layer, host, and port","Hardware, software, and firmware"], correct: 0 },
      { text: "3. How many layers does the OSI model have?", options: ["4","5","6","7"], correct: 3 },
      { text: "4. Which OSI layer is responsible for routing?", options: ["Transport","Data Link","Network","Physical"], correct: 2 },
      { text: "5. Which layer handles end-to-end communication and flow control?", options: ["Physical","Transport","Data Link","Session"], correct: 1 },
      { text: "6. What is the primary purpose of the OSI model?", options: ["To specify physical hardware protocols","To allow different platforms to communicate","To replace the TCP/IP model","To increase network speed"], correct: 1 },
      { text: "7. Which layer ensures data is in a readable format for the application layer?", options: ["Presentation","Session","Transport","Network"], correct: 0 },
      { text: "8. In the OSI model, data encapsulation occurs:", options: ["From Application to Physical","From Physical to Application","Only at the Transport layer","Only at the Network layer"], correct: 0 },
      { text: "9. Which device operates at the Physical layer?", options: ["Router","Switch","Hub","Firewall"], correct: 2 },
      { text: "10. A switch typically operates at which OSI layer?", options: ["Layer 1","Layer 2","Layer 3","Layer 4"], correct: 1 },
      { text: "11. Which layer is responsible for hardware addressing (MAC addresses)?", options: ["Network","Physical","Data Link","Transport"], correct: 2 },
      { text: "12. Which layer provides services for the end-user application?", options: ["Session","Application","Presentation","Transport"], correct: 1 },
      { text: "13. \"Open system\" in networking refers to:", options: ["A system with no security","A set of protocols that allow different systems to communicate","A system that uses only open-source software","A system accessible by the public"], correct: 1 },
      { text: "14. What does the Physical layer transmit?", options: ["Packets","Frames","Bits","Segments"], correct: 2 },
      { text: "15. Routing is the main function of:", options: ["The Data Link layer","The Network layer","The Transport layer","The Session layer"], correct: 1 },
      { text: "16. Which layer is responsible for logical addressing?", options: ["Data Link","Network","Presentation","Physical"], correct: 1 },
      { text: "17. If a protocol ensures that a message arrives at the destination in the correct order, it is functioning at which layer?", options: ["Network","Transport","Data Link","Session"], correct: 1 },
      { text: "18. What is the PDU (Protocol Data Unit) of the Transport layer called?", options: ["Packet","Frame","Segment","Bit"], correct: 2 },
      { text: "19. Which layer establishes, manages, and terminates connections between applications?", options: ["Session","Network","Presentation","Transport"], correct: 0 },
      { text: "20. The OSI model is described as \"like an onion\" because:", options: ["It makes you cry","It has layered structure","It is spicy","It is easily peeled"], correct: 1 },
      { text: "21. A network is defined as:", options: ["A collection of independent computers that communicate over a shared medium","A group of printers connected to one PC","A single computer connected to the internet","A set of protocols stored on a hard drive"], correct: 0 },
      { text: "22. Which connection provides a dedicated link between two devices?", options: ["Multipoint","Point-to-Point","Broadcast","Mesh"], correct: 1 },
      { text: "23. In a multipoint connection, the capacity of the channel is:", options: ["Reserved for one device","Shared among multiple devices","Always 0","Only used by the server"], correct: 1 },
      { text: "24. Which is NOT a network classification based on geography?", options: ["LAN","MAN","WAN","Peer-to-Peer"], correct: 3 },
      { text: "25. LAN stands for:", options: ["Local Area Network","Long Area Network","Large Access Network","Logic Area Network"], correct: 0 },
      { text: "26. Which network type covers an office, building, or campus?", options: ["WAN","MAN","LAN","Internet"], correct: 2 },
      { text: "27. WAN stands for:", options: ["Wide Access Network","World Area Network","Wide Area Network","Wireless Area Network"], correct: 2 },
      { text: "28. Peer-to-peer and Client/Server are classifications based on:", options: ["Geography","Network size","Management method","Hardware cost"], correct: 2 },
      { text: "29. Which of the following is NOT a transmission medium mentioned in the course?", options: ["Terrestrial Microwave","Satellite Microwave","Infrared","Bluetooth"], correct: 3 },
      { text: "30. Microwave transmission typically travels in a:", options: ["Curved path","Straight line (line-of-sight)","Random path","Zigzag path"], correct: 1 },
      { text: "31. Satellite microwave uses what type of orbit?", options: ["Low Earth Orbit","Geostationary","Random","Static"], correct: 1 },
      { text: "32. What is a disadvantage of Satellite transmission?", options: ["High speed","Significant propagation delay","No license required","Cannot travel through space"], correct: 1 },
      { text: "33. Infrared signals are best for:", options: ["Global communication","Short-range communication","Long-distance WAN","Underwater networking"], correct: 1 },
      { text: "34. Which medium does NOT pass through solid walls?", options: ["Radio waves","Terrestrial Microwave","Infrared","Satellite"], correct: 2 },
      { text: "35. \"Repeaters\" in microwave transmission are spaced:", options: ["1-5 km","10-100 km","500-1000 km","Not needed"], correct: 1 },
      { text: "36. Which network management method allows all computers to share resources equally?", options: ["Client/Server","Peer-to-Peer","WAN","Centralized"], correct: 1 },
      { text: "37. A link is:", options: ["A protocol","A communication pathway","A computer","An OS"], correct: 1 },
      { text: "38. Which is a performance metric for networks?", options: ["Price of hardware","Response time","Number of cables","OS version"], correct: 1 },
      { text: "39. Response time is:", options: ["Time to install software","Time between inquiry and response","Time to boot a PC","Time to buy hardware"], correct: 1 },
      { text: "40. Transmit time is:", options: ["Time to type a message","Time required for a message to travel between devices","Time to power on a router","Time to update a database"], correct: 1 },
      { text: "41. The primary task of the Data Link layer is:", options: ["Routing packets","Providing reliable transfer of data across a physical link","Converting bits to electrical signals","Establishing session parameters"], correct: 1 },
      { text: "42. A MAC address is how many bits long?", options: ["32","48","64","128"], correct: 1 },
      { text: "43. In Ethernet, the access method used is:", options: ["Token Passing","CSMA/CD","Polling","TDMA"], correct: 2 },
      { text: "44. What does CSMA/CD stand for?", options: ["Carrier Sense Multiple Access with Collision Detection","Cable System Management Access/Carrier Data","Control Signal Multiple Access/Carrier Delivery","Centralized System Mode Access/Collision Domain"], correct: 0 },
      { text: "45. The \"Collision Domain\" refers to:", options: ["The entire network","The segment of a network where data packets can collide","The internet","The server room"], correct: 1 },
      { text: "46. Which device effectively segments collision domains?", options: ["Hub","Switch","Repeater","Coaxial cable"], correct: 1 },
      { text: "47. A frame is the PDU of the:", options: ["Physical layer","Network layer","Data Link layer","Transport layer"], correct: 2 },
      { text: "48. What is the process of attaching a connector to a UTP cable called?", options: ["Soldering","Crimping","Routing","Switching"], correct: 1 },
      { text: "49. In a standard RJ-45 connector (T568B), the wires are arranged by:", options: ["Color","Random order","Wire gauge","Length"], correct: 0 },
      { text: "50. Which layer handles \"Framing\"?", options: ["Data Link","Physical","Network","Transport"], correct: 0 },
      { text: "51. An Ethernet \"Broadcast Address\" is:", options: ["00:00:00:00:00:00","FF:FF:FF:FF:FF:FF","127.0.0.1","255.255.255.255"], correct: 1 },
      { text: "52. What is the purpose of the preamble in an Ethernet frame?", options: ["Addressing","Synchronization","Error correction","Padding"], correct: 1 },
      { text: "53. Which of these is a flow control method at the Data Link layer?", options: ["Stop-and-Wait","Sliding Window","Both A and B","Neither"], correct: 2 },
      { text: "54. The FCS (Frame Check Sequence) is used for:", options: ["Addressing","Error detection","Flow control","Routing"], correct: 1 },
      { text: "55. Ethernet was originally defined by which standard?", options: ["IEEE 802.3","IEEE 802.11","ISO 9000","IETF"], correct: 0 },
      { text: "56. A \"Switch\" learns MAC addresses by:", options: ["Being manually programmed","Inspecting source MAC addresses of incoming frames","Asking the server","Guessing"], correct: 1 },
      { text: "57. Hubs operate at the:", options: ["Physical layer","Data Link layer","Network layer","Application layer"], correct: 0 },
      { text: "58. Which layer performs physical addressing?", options: ["Data Link","Network","Transport","Physical"], correct: 0 },
      { text: "59. A \"Unicast\" frame is intended for:", options: ["All devices on the network","A specific single destination","A group of devices","The router only"], correct: 1 },
      { text: "60. What happens when a switch receives a frame with an unknown destination MAC address?", options: ["It drops the frame","It broadcasts it to all ports except the source","It returns an error to the sender","It stores it until the device is found"], correct: 1 },
      { text: "61. How many bits are in an IPv4 address?", options: ["32","64","128","16"], correct: 0 },
      { text: "62. Which class of IP address is used for large networks (starting with 1-126)?", options: ["Class A","Class B","Class C","Class D"], correct: 0 },
      { text: "63. Which part of an IP address identifies the network?", options: ["Host ID","Network ID","Port number","MAC address"], correct: 1 },
      { text: "64. Subnetting is used to:", options: ["Increase the speed of the internet","Divide a large network into smaller segments","Combine two networks","Encrypt data"], correct: 1 },
      { text: "65. A \"Class C\" IP address has a default subnet mask of:", options: ["255.0.0.0","255.255.0.0","255.255.255.0","255.255.255.255"], correct: 2 },
      { text: "66. What is the purpose of NAT?", options: ["To speed up network connections","To allow private IP addresses to access the internet","To encrypt packets","To replace MAC addresses"], correct: 1 },
      { text: "67. Which protocol is used to map an IP address to a MAC address?", options: ["DHCP","ARP","DNS","HTTP"], correct: 1 },
      { text: "68. What is the primary function of a router?", options: ["Switching frames","Forwarding packets between networks","Providing power to end devices","Assigning IP addresses"], correct: 1 },
      { text: "69. What is a \"Default Gateway\"?", options: ["The IP of the user's computer","The IP address of the router used to reach outside networks","The name of the server","The password for the network"], correct: 1 },
      { text: "70. Which of the following is a private IP address?", options: ["192.168.1.1","8.8.8.8","1.1.1.1","200.1.1.1"], correct: 0 },
      { text: "71. IPv6 addresses are how many bits long?", options: ["32","64","128","256"], correct: 2 },
      { text: "72. The term \"TTL\" in an IP packet header stands for:", options: ["Time To Live","Total Time Limit","Transmission To Location","Transfer To Link"], correct: 0 },
      { text: "73. What protocol is used to automatically assign IP addresses to hosts?", options: ["DNS","DHCP","SMTP","FTP"], correct: 1 },
      { text: "74. A logical address is:", options: ["An IP address","A MAC address","A serial number","A URL"], correct: 0 },
      { text: "75. Routing tables are used by:", options: ["Hubs","Switches","Routers","Cables"], correct: 2 },
      { text: "76. Which is a connectionless transport protocol?", options: ["TCP","UDP","HTTP","FTP"], correct: 1 },
      { text: "77. TCP is considered \"reliable\" because:", options: ["It uses acknowledgments and retransmission","It is faster than UDP","It doesn't use headers","It is only used for small files"], correct: 0 },
      { text: "78. Which layer is responsible for logical addressing?", options: ["Data Link","Network","Transport","Application"], correct: 1 },
      { text: "79. The range of Class B IP addresses starts with:", options: ["1-126","128-191","192-223","224-239"], correct: 1 },
      { text: "80. A packet is the PDU of the:", options: ["Physical Layer","Data Link Layer","Network Layer","Transport Layer"], correct: 2 },
      { text: "81. Which is a key component of network security?", options: ["Confidentiality","Integrity","Availability","All of the above"], correct: 3 },
      { text: "82. A firewall is used to:", options: ["Increase network speed","Monitor and control incoming/outgoing traffic","Replace a router","Manage user passwords"], correct: 1 },
      { text: "83. What is a \"Trojan Horse\"?", options: ["A virus that looks like legitimate software","A secure login method","A type of server","A network cable"], correct: 0 },
      { text: "84. Phishing is a technique used to:", options: ["Speed up the internet","Hack into servers","Trick users into revealing sensitive information","Optimize databases"], correct: 2 },
      { text: "85. Which of these is a common network management task?", options: ["Configuration management","Fault management","Performance management","All of the above"], correct: 3 },
      { text: "86. What does SNMP stand for?", options: ["Simple Network Management Protocol","Secure Network Management Protocol","System Network Message Protocol","Server Network Management Procedure"], correct: 0 },
      { text: "87. Which tool would you use to test the reachability of a host?", options: ["Ping","Ipconfig","Netstat","Task Manager"], correct: 0 },
      { text: "88. What is \"Encryption\"?", options: ["Deleting data","Transforming data to make it unreadable without a key","Compressing files","Organizing files in folders"], correct: 1 },
      { text: "89. A \"VPN\" (Virtual Private Network) provides:", options: ["A secure tunnel over a public network","Free internet access","Faster download speeds","A new IP address for every packet"], correct: 0 },
      { text: "90. Which is a sign of a network bottleneck?", options: ["High latency (delay)","High bandwidth utilization","Both A and B","Neither"], correct: 2 },
      { text: "91. What is the goal of \"Fault Management\"?", options: ["To detect, isolate, and fix network problems","To upgrade the hardware every year","To ban all users","To ignore all errors"], correct: 0 },
      { text: "92. Which device acts as a gateway to the internet?", options: ["Router","Repeater","Hub","Switch"], correct: 0 },
      { text: "93. What is \"Multicast\" communication?", options: ["One-to-one","One-to-many (specific group)","One-to-all","None"], correct: 1 },
      { text: "94. The command ipconfig (or ifconfig) is used to:", options: ["Shutdown the computer","View IP configuration","Ping a website","Change the password"], correct: 1 },
      { text: "95. What does the \"Data Link Layer\" do when it detects an error in a frame?", options: ["Requests retransmission","Discards the frame","Fixes it automatically","Forwards it anyway"], correct: 0 },
      { text: "96. Which is a common cause of network performance degradation?", options: ["High collision rate","Outdated hardware","Incorrect cabling","All of the above"], correct: 3 },
      { text: "97. What is \"DoS\" (Denial of Service)?", options: ["A way to improve network speed","An attempt to make a network/server unavailable","A secure connection method","A routing protocol"], correct: 1 },
      { text: "98. Which of these is a metric for performance management?", options: ["Throughput","Packet loss","Latency","All of the above"], correct: 3 },
      { text: "99. A \"Switch\" is more efficient than a \"Hub\" because:", options: ["It is cheaper","It uses intelligent packet forwarding","It requires no power","It is wireless"], correct: 1 },
      { text: "100. The primary purpose of a \"Network Administrator\" is to:", options: ["Design, install, and manage network systems","Write software code","Clean the hardware","Sell computers"], correct: 0 }
    ]
  },
"Introduction to Information Storage and Retrieval": {
    title: "Introduction to Information Storage and Retrieval",
    questions: [
      { text: "1. What is the fundamental difference between Data Retrieval (DR) and Information Retrieval (IR)?", options: ["DR deals with natural language text; IR deals with structured records","DR seeks exact matches using deterministic logic; IR deals with unstructured text and looks for relevant items using probabilistic or partial matching","DR always requires an index; IR never utilizes an index structure","DR has a high tolerance for ambiguity; IR requires strict error-free syntax"], correct: 1 },
      { text: "2. In an Information Retrieval context, a user's expression of an information need is called a:", options: ["Document token","Query","Index term","Metadata profile"], correct: 1 },

      { text: "3. The process from information need to query refinement is known as:", options: ["Indexing loop","Retrieval process","Normalization","Signature extraction"], correct: 1 },

      { text: "4. Converting text to lowercase and removing punctuation is called:", options: ["Stemming","Stop-word removal","Text normalization","Thesaurus construction"], correct: 2 },

      { text: "5. Frequently occurring words with little meaning are called:", options: ["Index terms","Stems","Stop-words","Synonyms"], correct: 2 },

      { text: "6. Reducing words to their root form is called:", options: ["Lemmatization","Stemming","Inversion","Clustering"], correct: 1 },

      { text: "7. Which is a popular English stemming algorithm?", options: ["Codd's Algorithm","Porter Stemmer","Salton's Normalizer","Dijkstra's Reducer"], correct: 1 },

      { text: "8. What is an index term?", options: ["Title word","A word used to represent document content","Memory address","Hyperlink"], correct: 1 },

      { text: "9. A disadvantage of aggressive stemming is:", options: ["Large indexes","False matches","Slow execution","Binary conversion"], correct: 1 },

      { text: "10. The collection of unique words is called:", options: ["Vocabulary","Posting list","Matrix","Profile"], correct: 0 },

      { text: "11. Zipf’s Law states word frequency is:", options: ["Proportional to length","Inversely proportional to rank","Equal for all words","Format dependent"], correct: 1 },

      { text: "12. According to Luhn, important terms occur at:", options: ["High frequency","Low frequency","Middle frequency","Beginning of documents"], correct: 2 },

      { text: "13. Which model uses AND, OR, NOT?", options: ["Vector","Probabilistic","Boolean","Extended Boolean"], correct: 2 },

      { text: "14. Boolean model limitation?", options: ["Too slow","Cannot rank","Needs weights","Indexes stop-words"], correct: 1 },

      { text: "15. Vector Space Model represents documents as:", options: ["Graphs","Vectors","Lists","Arrays"], correct: 1 },

      { text: "16. Similarity in VSM is measured using:", options: ["Euclidean distance","Cosine similarity","Matrix addition","XOR"], correct: 1 },

      { text: "17. TF stands for:", options: ["Total Files","Term Frequency","True Factor","Token Flow"], correct: 1 },

      { text: "18. IDF stands for:", options: ["Index Document File","Inverse Document Frequency","Internal Data Flow","Integrated Dictionary Factor"], correct: 1 },

      { text: "19. A term appearing in every document has IDF close to:", options: ["Maximum","Zero","1000","Undefined"], correct: 1 },

      { text: "20. TF-IDF favors terms that are:", options: ["Common everywhere","Frequent in one document but rare overall","Very long","In first paragraph"], correct: 1 },

      { text: "21. Which model uses Probability Ranking Principle?", options: ["Boolean","Probabilistic","Vector","LSI"], correct: 1 },

      { text: "22. Which weighting scheme comes from probabilistic IR?", options: ["Cosine","BM25","PageRank","Jaccard"], correct: 1 },

      { text: "23. BM25 improves TF using:", options: ["Length normalization","Translation matrices","Hyperlinks","Images"], correct: 0 },

      { text: "24. Which model uses Singular Value Decomposition?", options: ["Fuzzy","LSI","Generalized Vector","Proximal"], correct: 1 },

      { text: "25. LSI helps solve:", options: ["Compression","Synonymy and polysemy","Metadata","SQL errors"], correct: 1 },

      { text: "26. Which model estimates probability a document generates the query?", options: ["Vector","Language Model","Boolean","Hypertext"], correct: 1 },

      { text: "27. Preventing zero probability requires:", options: ["Stemming","Tokenization","Smoothing","Inversion"], correct: 2 },

      { text: "28. Main IR evaluation metrics are:", options: ["Precision and Recall","Speed and Size","Bandwidth and Throughput","Accuracy and CPU"], correct: 0 },

      { text: "29. Precision measures:", options: ["Relevant retrieved / total relevant","Relevant retrieved / total retrieved","Non-relevant / retrieved","Retrieved / database"], correct: 1 },

      { text: "30. Recall measures:", options: ["Relevant retrieved / retrieved","Relevant retrieved / total relevant","Retrieved / vocabulary","True negatives"], correct: 1 },

      { text: "31. Precision if 8 out of 10 retrieved docs are relevant?", options: ["0.20","0.50","0.80","1.00"], correct: 2 },

      { text: "32. Recall if 5 relevant docs retrieved from 20?", options: ["0.25","0.50","0.75","1.00"], correct: 0 },

      { text: "33. Precision and Recall usually have:", options: ["Direct relation","Inverse trade-off","Constant relation","Exponential relation"], correct: 1 },

      { text: "34. Which combines Precision and Recall?", options: ["MAP","F-measure","DCG","R-Precision"], correct: 1 },

      { text: "35. Harmonic mean is used because it:", options: ["Easy to compute","Penalizes imbalance","Ignores irrelevant docs","Normalizes vocabulary"], correct: 1 },

      { text: "36. Which metric evaluates ranked relevance levels?", options: ["R-Precision","NDCG","MRR","P@K"], correct: 1 },

      { text: "37. MRR is best for:", options: ["Exploration","Finding one answer","Compression","Indexing"], correct: 1 },

      { text: "38. Benchmark collections require:", options: ["Indexes","Relevance judgments","Stemmers","Crawlers"], correct: 1 },

      { text: "39. Pooling in TREC means:", options: ["Compressing docs","Combining top results from systems","Random selection","Power measurement"], correct: 1 },

      { text: "40. Efficiency evaluation focuses on:", options: ["Cosine values","Speed and storage","User surveys","Vocabulary"], correct: 1 },

      { text: "41. P@10 of 0.60 means:", options: ["60% recall","6 relevant in top 10","0.60 sec","6 query terms"], correct: 1 },

      { text: "42. Kappa statistics measure:", options: ["Compression","Judge agreement","Zipf slope","Latency"], correct: 1 },

      { text: "43. Recall of 1.0 means:", options: ["All retrieved relevant","All relevant retrieved","No stop-words","Perfect angle"], correct: 1 },

      { text: "44. Most common IR index structure?", options: ["BST","Sequential file","Inverted Index","Hash Matrix"], correct: 2 },

      { text: "45. Inverted index consists of:", options: ["Headers and footers","Vocabulary and posting lists","Trees only","Buffers"], correct: 1 },

      { text: "46. Posting list entry is called:", options: ["Token","Posting","Stem","Signature"], correct: 1 },

      { text: "47. Phrase queries require storing:", options: ["Dates","Word positions","IDF","Word length"], correct: 1 },

      { text: "48. Index compression mainly reduces:", options: ["Views","Storage and I/O","Security","Ranking"], correct: 1 },

      { text: "49. Posting lists often store:", options: ["Titles","TF only","d-gaps","Hashes"], correct: 2 },

      { text: "50. Variable-byte encoding is used for:", options: ["ASCII","Fixed binary","Compression","Trees"], correct: 2 },

      { text: "51. BSBI and SPIMI are used for:", options: ["Index construction","Signatures","Mapping","SVD"], correct: 0 },

      { text: "52. Signature files may suffer from:", options: ["False matches","Slow ranking","No storage","Overflow"], correct: 0 },

      { text: "53. Wildcard matching uses:", options: ["Basic index","Permuterm index","Signature","Bitmap"], correct: 1 },

      { text: "54. Complexity of AND query merging is:", options: ["O(x*y)","O(x+y)","O(x^y)","O(1)"], correct: 1 },

      { text: "55. Skip pointers are used to:", options: ["Skip stop-words","Speed intersections","Jump DB","Erase sectors"], correct: 1 },

      { text: "56. Heap’s Law models:", options: ["Speed","Vocabulary growth","Links","Latency"], correct: 1 },

      { text: "57. Vocabulary size grows:", options: ["Fixed","Sub-linearly","Exponentially","Decreases"], correct: 1 },

      { text: "58. Dynamic indexing supports:", options: ["Static indexes","Real-time updates","Refactoring","Passaging"], correct: 1 },

      { text: "59. Lossless compression means:", options: ["Deletes words","Exact reconstruction","Zero size","HTML only"], correct: 1 },

      { text: "60. Case folding is:", options: ["Compression","Normalization","Mapping","Merging"], correct: 1 },

      { text: "61. Dictionaries are often stored using:", options: ["Logs","B-Trees and Hash Tables","Rows","Buffers"], correct: 1 },

      { text: "62. Dividing indexes across servers is called:", options: ["Sharding","Stemming","Reduction","Shifting"], correct: 0 },

      { text: "63. DAAT strategy evaluates:", options: ["One document at a time","One term at a time","Random entries","Stop-words"], correct: 0 },

      { text: "64. Web IR differs due to:", options: ["Metadata","Spam and duplicates","Uniform format","Static files"], correct: 1 },

      { text: "65. A web crawler is also called:", options: ["Merger","Spider","Parser","Ranker"], correct: 1 },

      { text: "66. Politeness policy prevents:", options: ["Refresh","Server overload","Selection","Allocation"], correct: 1 },

      { text: "67. robots.txt specifies:", options: ["Homepage","Config","Crawler permissions","Logs"], correct: 2 },

      { text: "68. Crawl Frontier manages:", options: ["Repository","URL queue","Analyzer","Inverter"], correct: 1 },

      { text: "69. A hyperlink is treated as:", options: ["Authorization","Vote of confidence","Tag","Signature"], correct: 1 },

      { text: "70. Random surfer model is:", options: ["HITS","PageRank","BM25","TF-IDF"], correct: 1 },

      { text: "71. Damping factor represents:", options: ["Random jumps","Slow speed","Duplicates","Threads"], correct: 0 },

      { text: "72. HITS algorithm uses:", options: ["Vectors","Hubs and Authorities","Clients","Crawlers"], correct: 1 },

      { text: "73. Searching a company homepage is:", options: ["Informational","Navigational","Transactional","Exploratory"], correct: 1 },

      { text: "74. 'Buy laptop online' is a:", options: ["Navigational","Informational","Transactional","Bounded"], correct: 2 },

      { text: "75. Endless crawler loops are:", options: ["Spider traps","Blocks","Loops","Cycles"], correct: 0 },

      { text: "76. Combining PageRank with BM25 uses:", options: ["Tokenization","Learning to Rank","Boolean","Compression"], correct: 1 },

      { text: "77. Anchor text is:", options: ["Hidden metadata","Clickable hyperlink text","Config file","Search title"], correct: 1 },

      { text: "78. Hidden database content forms the:", options: ["Clear Web","Deep Web","Inverted Web","Indexed Grid"], correct: 1 },

      { text: "79. Near-duplicate detection uses:", options: ["Splitting","Shingling","Stemming","SVD"], correct: 1 },

      { text: "80. Black-hat SEO attempts to:", options: ["Cache","Manipulate rankings","Normalize text","Crawl"], correct: 1 },

      { text: "81. Focused crawling targets:", options: ["All pages","Specific topics","Universal pages","Linear scans"], correct: 1 },

      { text: "82. Search snippets provide:", options: ["Compression","Document summary","JavaScript","History cleanup"], correct: 1 },

      { text: "83. Artificial PageRank inflation uses:", options: ["Frontier","Link farm","Signature","Hub lattice"], correct: 1 },

      { text: "84. User Interface Manager handles:", options: ["Compression","Query processing","Crawling","Stemming"], correct: 1 },

      { text: "85. Dynamic web content requires:", options: ["Zero vocabulary","Frequent updates","No stop-words","No HTML"], correct: 1 },

      { text: "86. Meta-search engines:", options: ["Own crawlers","Combine results from multiple engines","Limit queries","Use signatures"], correct: 1 },

      { text: "87. Serving different pages to crawlers is:", options: ["Stemming","Cloaking","Shingling","Passaging"], correct: 1 },

      { text: "88. Enterprise search differs because:", options: ["Controlled collections","No indexes","Ignore TF","Only PageRank"], correct: 0 },

      { text: "89. Which model ignores word order?", options: ["Phrase model","Bag-of-Words","N-gram","Sequence"], correct: 1 },

      { text: "90. N-gram models are based on:", options: ["Vectors","Sequences of words","Links","Clusters"], correct: 1 },

      { text: "91. XML indexing maps:", options: ["Queries","Structural tags","Pages","Ranks"], correct: 1 },

      { text: "92. Cosine similarity measures:", options: ["Angles","Storage","Latency","Recall"], correct: 0 },

      { text: "93. Stop-word removal mainly improves:", options: ["Index efficiency","Image quality","Compression only","SQL"], correct: 0 },

      { text: "94. Phrase searching relies on:", options: ["Postings","Positional indexes","TF","IDF"], correct: 1 },

      { text: "95. A posting list stores:", options: ["URLs","Document IDs","Queries","Pages"], correct: 1 },

      { text: "96. Recall emphasizes:", options: ["All retrieved docs","Finding all relevant docs","Ranking","Storage"], correct: 1 },

      { text: "97. Precision emphasizes:", options: ["Relevant retrieved docs","Speed","Compression","Vocabulary"], correct: 0 },

      { text: "98. BM25 is widely used in:", options: ["Databases","Search engines","Networks","Graphics"], correct: 1 },

      { text: "99. Query reformulation improves:", options: ["Storage","Search results","Compression","Crawling"], correct: 1 },

    { text: "100. Information Retrieval mainly deals with:", options: ["Structured numeric data","Unstructured text documents","Only images","Only databases"], correct: 1 },
    { text: "101. What is the primary purpose of information storage?", options: ["To delete data","To retain data for future use","To encrypt data","To compress data"], correct: 1 },
    { text: "102. Which of these is an example of volatile storage?", options: ["Hard drive","SSD","RAM","CD-ROM"], correct: 2 },
    { text: "103. What does the term \"metadata\" refer to?", options: ["Data about data","Data that is encrypted","Data that is compressed","Data that is deleted"], correct: 0 },
    { text: "104. In database management, what does ACID stand for?", options: ["Atomicity, Consistency, Isolation, Durability","Availability, Consistency, Integrity, Durability"], correct: 0 },
    { text: "105. What is a \"primary key\" in a database?", options: ["A unique identifier for each record","A key used for encryption","A key used for decryption","A key used for indexing"], correct: 0 }
  
    ]
  },

  "System Analysis Design": {
    title: "System Analysis Design",
    questions: [

      { text: "1. What is an Information System fundamentally composed of?", options: ["Hardware and software only","People, data, processes, hardware, software, and networks","Databases and switches","Source code and documents"], correct: 1 },

      { text: "2. What is the role of a Systems Analyst?", options: ["Write machine code","Manage network cables","Design information systems solutions","Guard database servers"], correct: 2 },

      { text: "3. The framework used to manage an information system life cycle is called:", options: ["PMBOK","SDLC","UML","CMM"], correct: 1 },

      { text: "4. Correct SDLC order?", options: ["Planning → Design → Analysis → Implementation","Planning → Analysis → Design → Implementation","Analysis → Planning → Design → Implementation","Design → Analysis → Planning → Implementation"], correct: 1 },

      { text: "5. Business requirements are captured during:", options: ["Project Selection","System Design","System Analysis","Implementation"], correct: 2 },

      { text: "6. Technical blueprints are created during:", options: ["Planning","Design","Implementation","Maintenance"], correct: 1 },

      { text: "7. Coding and installation occur during:", options: ["Analysis","Planning","Implementation","Maintenance"], correct: 2 },

      { text: "8. Correcting bugs and updates is called:", options: ["Design","Implementation","Maintenance","Requirements"], correct: 2 },

      { text: "9. SDLC is iterative because:", options: ["Phases never repeat","Teams refine previous work","Uses random loops","Avoids documentation"], correct: 1 },

      { text: "10. Breaking systems into components demonstrates:", options: ["Coupling","Cohesion","Decomposition","Modularity"], correct: 3 },

      { text: "11. Breaking complex systems into smaller subsystems is:", options: ["Optimization","Decomposition","Requirements gathering","Reverse engineering"], correct: 1 },

      { text: "12. Dependency between subsystems is:", options: ["Cohesion","Interdependence","Decomposition","Isolation"], correct: 1 },

      { text: "13. The line defining what is inside or outside the system is:", options: ["Scope boundary","Interface gate","Environment grid","Constraint wall"], correct: 0 },

      { text: "14. Anything outside the system boundary is part of the:", options: ["Subsystem matrix","Internal layer","Environment","Core logic"], correct: 2 },

      { text: "15. Point-to-point data exchanges are called:", options: ["Parameters","Boundaries","Interfaces","Inputs"], correct: 2 },

      { text: "16. A factor limiting system design is a:", options: ["Interface","Objective","Constraint","Input"], correct: 2 },

      { text: "17. A system that does not adapt dynamically is:", options: ["Open system","Closed system","Reactive system","Adaptive system"], correct: 1 },

      { text: "18. Which methodology focuses on iterative releases and user collaboration?", options: ["Waterfall","Agile","SADT","Cleanroom"], correct: 1 },

      { text: "19. Main risk of Waterfall model?", options: ["No documentation","Too fast","Late changes are costly","No analysis"], correct: 2 },

      { text: "20. A person interested in project success is a:", options: ["Systems Analyst","Vendor","Stakeholder","DB Administrator"], correct: 2 },

      { text: "21. First activity in project selection?", options: ["Coding","Identifying projects","Interviews","Database creation"], correct: 1 },

      { text: "22. Who can initiate a project?", options: ["Management","Users","IT group","All of the above"], correct: 3 },

      { text: "23. Evaluating projects against company goals is:", options: ["Strategic alignment","Value chain","Capacity","Risk profile"], correct: 0 },

      { text: "24. Analyzing value added at each business step is:", options: ["Critical path","Value chain analysis","Feasibility","Reframing"], correct: 1 },

      { text: "25. Main deliverable of project planning phase?", options: ["Final code","Baseline Project Plan","Database","User manual"], correct: 1 },

      { text: "26. Checking financial viability is:", options: ["Technical","Economic","Operational","Schedule"], correct: 1 },

      { text: "27. Benefits measurable in money are:", options: ["Intangible","Tangible","Fixed","Baseline"], correct: 1 },

      { text: "28. Example of intangible benefit?", options: ["Reduced storage cost","Paper savings","Improved morale","Reduced staff"], correct: 2 },

      { text: "29. Costs incurred once are:", options: ["Recurring","Fixed","One-time","Liabilities"], correct: 2 },

      { text: "30. Annual hosting fees are:", options: ["Capital","One-time","Recurring","Sunk"], correct: 2 },

      { text: "31. Checking required tools and skills is:", options: ["Legal","Political","Technical","Schedule"], correct: 2 },

      { text: "32. Assessing system fit into business operations is:", options: ["Operational","Technical","Legal","Political"], correct: 0 },

      { text: "33. Determining if deadlines can be met is:", options: ["Legal","Operational","Schedule","Political"], correct: 2 },

      { text: "34. Copyright and contracts fall under:", options: ["Operational","Technical","Legal","Political"], correct: 2 },

      { text: "35. Evaluating stakeholder resistance is:", options: ["Economic","Operational","Technical","Political"], correct: 3 },

      { text: "36. Formal review of project plan is:", options: ["Inspection","Walkthrough","Alpha test","Compilation"], correct: 1 },

      { text: "37. Which chart uses bars on a timeline?", options: ["DFD","ERD","Gantt Chart","Dialogue Diagram"], correct: 2 },

      { text: "38. Which technique identifies the longest task sequence?", options: ["Value chain","CPM/PERT","Use case","Structure chart"], correct: 1 },

      { text: "39. Slack time means:", options: ["Delay without affecting project","Rest time","Crash duration","Documentation time"], correct: 0 },

      { text: "40. Critical path tasks have slack time of:", options: ["Maximum","Zero","Negative","Variable"], correct: 1 },

      { text: "41. Questioning everything shows:", options: ["Impartiality","Impertinence","Attention","Reframing"], correct: 1 },

      { text: "42. Looking at problems from fresh perspectives is:", options: ["Impertinence","Relaxation","Reframing","Detail"], correct: 2 },

      { text: "43. Primary qualitative requirements method?", options: ["Documents","Questionnaires","Interviews","Code review"], correct: 2 },

      { text: "44. Disadvantage of open interviews?", options: ["No viewpoints","Hard to standardize","Needs software","Executives only"], correct: 1 },

      { text: "45. Best low-cost method for many users?", options: ["Interviews","Questionnaires","JAD","Observation"], correct: 1 },

      { text: "46. Watching users perform jobs is:", options: ["Document analysis","Observation","Prototyping","Focus group"], correct: 1 },

      { text: "47. Reviewing manuals and reports is:", options: ["BPR","Document analysis","Prototyping","Reframing"], correct: 1 },

      { text: "48. Intensive collaborative requirement sessions are:", options: ["XP","JAD","BPP","Rapid prototyping"], correct: 1 },

      { text: "49. Building a quick working version is:", options: ["Value mapping","Prototyping","Walkthrough","Extraction"], correct: 1 },

      { text: "50. Main prototyping risk?", options: ["No feedback","Users think prototype is final","Slow mockups","Strict schemas"], correct: 1 },

      { text: "51. Radical redesign of processes is:", options: ["JAD","BPR","Agile","Review"], correct: 1 },

      { text: "52. Main structured analysis diagram?", options: ["Gantt","DFD","Dialogue","ERD"], correct: 1 },

      { text: "53. Rectangle in DFD represents:", options: ["Process","Store","External entity","Flow"], correct: 2 },

      { text: "54. Circle in DFD represents:", options: ["Flow","Process","Store","Boundary"], correct: 1 },

      { text: "55. Parallel lines in DFD represent:", options: ["Entity","Process","Data store","Dialogue"], correct: 2 },

      { text: "56. DFD showing entire system as one process is:", options: ["Level-1","Context Diagram","Primitive DFD","Structure chart"], correct: 1 },

      { text: "57. Matching parent and child DFD inputs/outputs is:", options: ["Tuning","Coupling","Balancing","Cohesion"], correct: 2 },

      { text: "58. Illegal DFD connection?", options: ["Entity to process","Process to store","Store to store directly","Process to entity"], correct: 2 },

      { text: "59. Modeling data entities and relationships uses:", options: ["DFD","ERD","Dialogue","Walkthrough"], correct: 1 },

      { text: "60. Relationship association count is:", options: ["Modularity","Cardinality","Coupling","Decomposition"], correct: 1 },

      { text: "61. A document requiring user input is:", options: ["Report","Form","Context Diagram","Chart"], correct: 1 },

      { text: "62. Passive read-only business document is:", options: ["Form","Report","Dialogue","Store"], correct: 1 },

      { text: "63. Correct forms/reports design sequence?", options: ["Code immediately","Understand users → design → test","Design files → context","Compile → install"], correct: 1 },

      { text: "64. User/task overview section is:", options: ["Narrative overview","Mockup","Usability","Schema"], correct: 0 },

      { text: "65. Important form layout guideline?", options: ["Bright colors","Consistent formatting","Hidden buttons","No labels"], correct: 1 },

      { text: "66. Text in reports should use:", options: ["All caps","Mixed case","Narrow spacing","Random wrapping"], correct: 1 },

      { text: "67. Numeric data should be:", options: ["Left aligned","Centered","Right aligned","Justified"], correct: 2 },

      { text: "68. Designing screen interaction flow is:", options: ["Data flow","Dialogue design","Indexing","Path analysis"], correct: 1 },

      { text: "69. Dialogue means:", options: ["Manager interview","Sequence of user interactions","Server communication","Presentation"], correct: 1 },

      { text: "70. Main dialogue design rule?", options: ["Variety","Consistency","Complexity","No help"], correct: 1 },

      { text: "71. Method for representing dialogue sequences?", options: ["ERD","Dialogue Diagram","Context plot","Gantt"], correct: 1 },

      { text: "72. Top section of dialogue box contains:", options: ["Screen name","Reference number","Accessible screens","Keys"], correct: 1 },

      { text: "73. Middle section of dialogue box contains:", options: ["Reference number","Screen description","Errors","Dimensions"], correct: 1 },

      { text: "74. Bottom section shows:", options: ["Users","File size","Connected displays","Sequence"], correct: 2 },

      { text: "75. Immediate confirmation/error messages demonstrate:", options: ["Maintenance","Analysis","Good interface design","Partitioning"], correct: 2 },

      { text: "76. Relational table representation is:", options: ["Physical DB","Logical DB","Context schema","Flow matrix"], correct: 1 },

      { text: "77. Mapping logical data to files/indexes is:", options: ["Requirements","Analysis","Physical DB design","Forms"], correct: 2 },

      { text: "78. Selecting exactly one option uses:", options: ["Checkboxes","Radio buttons","Text field","Subform"], correct: 1 },

      { text: "79. Selecting multiple options uses:", options: ["Radio buttons","Checkboxes","Text box","Labels"], correct: 1 },

      { text: "80. Breadcrumbs help users:", options: ["Authentication","Navigate hierarchy","Clear memory","Parse data"], correct: 1 },

      { text: "81. System implementation begins with:", options: ["Alternative software","Coding/testing/installation","Feasibility","Proposals"], correct: 1 },

      { text: "82. Testing isolated code units is:", options: ["System","Integration","Unit","Acceptance"], correct: 2 },

      { text: "83. Testing interaction between modules is:", options: ["Unit","Integration","Alpha","Direct"], correct: 1 },

      { text: "84. Testing the full integrated system is:", options: ["Unit","Desk","System","White-box"], correct: 2 },

      { text: "85. Internal lab testing by developers is:", options: ["Alpha","Beta","Maintenance","Stress"], correct: 0 },

      { text: "86. Testing by real users in real environments is:", options: ["Unit","Integration","Beta","White-box"], correct: 2 },

      { text: "87. Final user approval testing is:", options: ["Conversion","Acceptance","Loop","Verification"], correct: 1 },

      { text: "88. Automated test execution environment is:", options: ["Plan","Testing harness","Wrapper","Dialogue"], correct: 1 },

      { text: "89. Replacing old system instantly is:", options: ["Parallel","Direct","Pilot","Phased"], correct: 1 },

      { text: "90. Main risk of direct installation?", options: ["Expensive","Duplication","No fallback if failure","Double coding"], correct: 2 },

      { text: "91. Running old and new systems together is:", options: ["Direct","Parallel","Pilot","Phased"], correct: 1 },

      { text: "92. Main disadvantage of parallel installation?", options: ["Highest risk","Expensive extra work","No training","No testing"], correct: 1 },

      { text: "93. Pilot conversion means:", options: ["Direct","Parallel","Single-location","Phased"], correct: 2 },

      { text: "94. Gradual module deployment is:", options: ["Direct","Pilot","Phased","Plunge"], correct: 2 },

      { text: "95. Reassigning teams and evaluations occur during:", options: ["Initiation","Analysis","Close-down","Testing"], correct: 2 },

      { text: "96. Fixing bugs is:", options: ["Adaptive","Corrective","Perfective","Preventive"], correct: 1 },

      { text: "97. Updating system for new laws is:", options: ["Corrective","Adaptive","Perfective","Preventive"], correct: 1 },

      { text: "98. Adding enhancements is:", options: ["Corrective","Adaptive","Perfective","Preventive"], correct: 2 },

      { text: "99. Preventing future failures is:", options: ["Corrective","Perfective","Preventive","Adaptive"], correct: 2 },

      { text: "100. Largest long-term IS cost is:", options: ["Server cables","Interviews","Maintenance","Printing"], correct: 2 }

    ]
  },

"Artificial Intelligence": {
    title: "Artificial Intelligence",
    questions: [
      { text: "1. What is the branch of AI that allows machines to learn from data without being explicitly programmed?", options: ["Robotics","Supervised learning","Machine learning","Expert systems"], correct: 2 },
      { text: "2. Which AI technique is primarily used for classification and regression tasks?", options: ["Genetic algorithms","Neural networks","Database indexing","Compiler optimization"], correct: 1 },
      { text: "3. What does NLP stand for in AI?", options: ["Natural Language Processing","Neural Language Programming","Network Learning Protocol","Numeric Logic Processing"], correct: 0 },
      { text: "4. Which algorithm is commonly used for finding the shortest path in a graph?", options: ["A* search","Breadth First Search","Depth First Search","Bubble sort"], correct: 0 },
      { text: "5. In supervised learning, what is the data called that contains correct outputs?", options: ["Training data","Test data","Unlabeled data","Validation set"], correct: 0 },
      { text: "6. Which of these is a type of unsupervised learning?", options: ["Regression","Classification","Clustering","Decision trees"], correct: 2 },
      { text: "7. What is the goal of reinforcement learning?", options: ["Optimize a performance measure by learning from rewards","Cluster data points","Label data manually","Reduce dataset size"], correct: 0 },
      { text: "8. Which neural network layer is responsible for final predictions?", options: ["Input layer","Hidden layer","Output layer","Training layer"], correct: 2 },
      { text: "9. What is overfitting in machine learning?", options: ["Model performs poorly on training data","Model performs well on training data but poorly on new data","Model never converges during training","Model has too few parameters"], correct: 1 },
      { text: "10. Which technique helps prevent overfitting?", options: ["Underfitting","Regularization","Increasing learning rate","Removing hidden layers"], correct: 1 },
      { text: "11. What does a confusion matrix measure?", options: ["Training time","Model accuracy and error types","Dataset size","Number of hidden layers"], correct: 1 },
      { text: "12. Which evaluation metric is best for imbalanced classification?", options: ["Accuracy","Precision and recall","Training loss","Epoch count"], correct: 1 },
      { text: "13. In AI, what is a heuristic?", options: ["An exact solution method","A rule-of-thumb strategy","A data normalization technique","A neural network activation"], correct: 1 },
      { text: "14. Which search method expands the most promising node first?", options: ["Breadth First Search","Depth First Search","Best First Search","Hill Climbing"], correct: 2 },
      { text: "15. In natural language processing, what is tokenization?", options: ["Splitting text into meaningful units","Translating text into another language","Finding synonyms","Removing stop words"], correct: 0 },
      { text: "16. Which model is best known for image recognition tasks?", options: ["Convolutional Neural Network","Recurrent Neural Network","Support Vector Machine","K-means"], correct: 0 },
      { text: "17. What type of neural network is suitable for sequential data like text?", options: ["Convolutional Neural Network","Recurrent Neural Network","Feedforward Neural Network","Generative Adversarial Network"], correct: 1 },
      { text: "18. Which AI field focuses on robots interacting with the physical world?", options: ["Expert systems","Robotics","Computer vision","Speech recognition"], correct: 1 },
      { text: "19. What is a knowledge base used for in AI?", options: ["Storing learned weights","Representing domain facts and rules","Running training loops","Visualizing graphs"], correct: 1 },
      { text: "20. In expert systems, what component applies rules to the knowledge base?", options: ["Inference engine","Scheduler","Compiler","Decoder"], correct: 0 },
      { text: "21. What is the purpose of backpropagation?", options: ["To update neural network weights","To split datasets","To perform clustering","To normalize features"], correct: 0 },
      { text: "22. Which activation function outputs values between 0 and 1?", options: ["ReLU","Sigmoid","Tanh","Softmax"], correct: 1 },
      { text: "23. Which activation function sets negative inputs to zero?", options: ["Sigmoid","Tanh","ReLU","Softmax"], correct: 2 },
      { text: "24. What does the term deep refer to in deep learning?", options: ["Large datasets","Many layers in a network","Fast training","Multiple CPUs"], correct: 1 },
      { text: "25. Which method is used to reduce dimensionality?", options: ["Principal Component Analysis","Gradient descent","Backpropagation","Random forest"], correct: 0 },
      { text: "26. Which algorithm is commonly used for classification with a margin maximization principle?", options: ["K-nearest neighbors","Support Vector Machine","Naive Bayes","Linear regression"], correct: 1 },
      { text: "27. In AI, what is transfer learning?", options: ["Using a model trained on one task for another task","Training from scratch with more data","Using transfer functions in neural networks","Moving data between CPUs"], correct: 0 },
      { text: "28. What is a bias term in a neural network?", options: ["A fixed weight to shift activation","A learning rate parameter","A regularization term","A dropout rate"], correct: 0 },
      { text: "29. Which method randomly disables neurons during training to improve generalization?", options: ["Batch normalization","Dropout","Gradient clipping","Pooling"], correct: 1 },
      { text: "30. Which AI technology converts spoken language into text?", options: ["Speech recognition","Image captioning","Machine translation","Text summarization"], correct: 0 },
      { text: "31. Which model type is often used for natural language generation?", options: ["CNN","RNN","Transformer","KNN"], correct: 2 },
      { text: "32. Which technique is used for unsupervised feature learning in deep learning?", options: ["Autoencoder","Random forest","Decision tree","Linear regression"], correct: 0 },
      { text: "33. What is the purpose of gradient descent?", options: ["Maximize model loss","Minimize model loss","Encode input data","Normalize outputs"], correct: 1 },
      { text: "34. Which loss function is commonly used for binary classification?", options: ["Mean Squared Error","Cross-Entropy","Hinge loss","Euclidean distance"], correct: 1 },
      { text: "35. What is reinforcement learning's reward signal used for?", options: ["To penalize all actions","To guide action selection","To split training data","To initialize weights"], correct: 1 },
      { text: "36. Which search algorithm explores locally and climbs toward improvements?", options: ["Simulated annealing","Hill climbing","A* search","Genetic algorithm"], correct: 1 },
      { text: "37. What is a chatbot primarily designed to do?", options: ["Edit code","Respond to human language","Optimize databases","Detect images"], correct: 1 },
      { text: "38. Which AI term describes a model that can produce new examples similar to training data?", options: ["Predictive model","Generative model","Discriminative model","Clustering model"], correct: 1 },
      { text: "39. Which technique is used to measure similarity between text embeddings?", options: ["Euclidean distance","Cosine similarity","Decision threshold","Softmax"], correct: 1 },
      { text: "40. Which AI application detects objects in images?", options: ["Optical character recognition","Object detection","Speech synthesis","Route planning"], correct: 1 },
      { text: "41. What is the key idea behind ensemble methods?", options: ["Use a single model only","Combine many models to improve performance","Reduce model size","Increase learning rate"], correct: 1 },
      { text: "42. Which ensemble method builds trees sequentially, each correcting previous errors?", options: ["Bagging","Boosting","Stacking","K-fold"], correct: 1 },
      { text: "43. In AI, what is a reward function?", options: ["A function that assigns value to actions in reinforcement learning","A performance optimization setting","A clustering objective","A data preprocessing step"], correct: 0 },
      { text: "44. Which problem type is solved by a decision tree?", options: ["Classification or regression","Clustering only","Data encoding","Signal filtering"], correct: 0 },
      { text: "45. What is semantic parsing used for?", options: ["Converting text into structured meaning representations","Translating text to another language","Compressing data","Detecting anomalies"], correct: 0 },
      { text: "46. What is the primary goal of computer vision?", options: ["Understand and interpret visual data","Generate new text","Perform statistical tests","Schedule tasks"], correct: 0 },
      { text: "47. Which AI concept involves machines performing tasks requiring human-like intelligence?", options: ["Weak AI","Strong AI","Narrow AI","General AI"], correct: 2 },
      { text: "48. Which model is used for sequence-to-sequence tasks such as translation?", options: ["CNN","RNN","Transformer","SVM"], correct: 2 },
      { text: "49. What is the main purpose of feature engineering?", options: ["Create meaningful input variables for models","Reduce model complexity","Train multiple models","Deploy models"], correct: 0 },
      { text: "50. What does the term \"explainable AI\" mean?", options: ["AI that runs faster","AI whose decisions can be understood by humans","AI with more hidden layers","AI that uses more data"], correct: 1 },
      { text: "51. In natural language processing, what is lemmatization used for?", options: ["Converting words to their base form","Translating text into another language","Tokenizing sentences","Detecting sentiment"], correct: 0 },
      { text: "52. Which type of neural network is frequently used for time series forecasting?", options: ["Feedforward Neural Network","Recurrent Neural Network","Convolutional Neural Network","Decision Tree"], correct: 1 },
      { text: "53. Which optimization algorithm adjusts learning rates individually for each parameter?", options: ["SGD","Adam","Batch Gradient Descent","Momentum"], correct: 1 },
      { text: "54. What is a validation set used for?", options: ["Training the model","Evaluating model performance during training","Testing the final model on unseen data","Storing model weights"], correct: 1 },
      { text: "55. Which of the following is a generative modeling technique?", options: ["Linear regression","k-means clustering","Variational Autoencoder","Logistic regression"], correct: 2 },
      { text: "56. What is the main advantage of a decision tree model?", options: ["It requires very large datasets","It is easy to interpret","It always has perfect accuracy","It never overfits"], correct: 1 },
      { text: "57. In reinforcement learning, the agent learns by interacting with:", options: ["A stationary dataset","An environment","A human tutor","A database"], correct: 1 },
      { text: "58. What does bias-variance tradeoff describe?", options: ["The balance between training accuracy and test speed","The relationship between model simplicity and generalization error","The number of hidden layers in a network","The size of the training dataset"], correct: 1 },
      { text: "59. Which technique normalizes the outputs of a layer by subtracting the batch mean and dividing by the batch standard deviation?", options: ["Dropout","Batch normalization","Weight decay","Early stopping"], correct: 1 },
      { text: "60. What is the primary use for a confusion matrix?", options: ["Visualizing data clusters","Analyzing classification performance","Tuning hyperparameters","Scaling features"], correct: 1 },
      { text: "61. Which learning paradigm uses labeled positive and negative examples?", options: ["Supervised learning","Unsupervised learning","Reinforcement learning","Self-supervised learning"], correct: 0 },
      { text: "62. What is the purpose of cross-validation?", options: ["To evaluate a model on multiple training/test splits","To increase model complexity","To reduce dataset size","To fix missing values"], correct: 0 },
      { text: "63. Which algorithm is used to reduce the dimensionality of data by projecting it to directions of maximum variance?", options: ["PCA","K-means","Decision tree","Naive Bayes"], correct: 0 },
      { text: "64. What is a word embedding used for?", options: ["Encoding words as vectors capturing semantic information","Sorting words alphabetically","Counting word frequency","Detecting part-of-speech"], correct: 0 },
      { text: "65. In machine learning, feature selection is mainly used to:", options: ["Increase the number of input variables","Reduce irrelevant or redundant features","Create new categories","Normalize labels"], correct: 1 },
      { text: "66. Which model is typically best for handling very large text corpora in NLP?", options: ["Naive Bayes","Transformer-based models","K-means","Linear regression"], correct: 1 },
      { text: "67. Which AI concept focuses on assigning probabilities to events and making decisions under uncertainty?", options: ["Symbolic AI","Probabilistic reasoning","Deterministic planning","Heuristic search"], correct: 1 },
      { text: "68. What is the main idea behind deep reinforcement learning?", options: ["Using deep neural networks to approximate value functions or policies","Training linear models with reinforcement signals","Using decision trees for control problems","Applying clustering to state transitions"], correct: 0 },
      { text: "69. Which term describes the situation where a model learns patterns specific to the training data too well?", options: ["Underfitting","Generalization","Overfitting","Regularization"], correct: 2 },
      { text: "70. Which technique uses multiple models to make a final prediction by averaging or voting?", options: ["Ensembling","Feature engineering","Gradient descent","Normalization"], correct: 0 },
      { text: "71. What is the name of the layer that directly receives raw input data in a neural network?", options: ["Hidden layer","Output layer","Input layer","Embedding layer"], correct: 2 },
      { text: "72. Which loss function is commonly used for multiclass classification problems?", options: ["Mean Squared Error","Binary Cross-Entropy","Categorical Cross-Entropy","Hinge loss"], correct: 2 },
      { text: "73. Which metric is most appropriate for imbalanced classification problems?", options: ["Accuracy","Mean Absolute Error","F1-score","Training loss"], correct: 2 },
      { text: "74. What is the role of attention mechanisms in transformer models?", options: ["To ignore all inputs","To focus on relevant parts of the input sequence","To increase dataset size","To perform data augmentation"], correct: 1 },
      { text: "75. What is transfer learning commonly used for?", options: ["Training a model from scratch for every new task","Using pre-trained models to adapt to new tasks","Deleting old models","Normalizing features"], correct: 1 },
      { text: "76. Which type of model is trained to distinguish between real and fake data?", options: ["Autoencoder","Generative Adversarial Network","Support Vector Machine","Linear regression"], correct: 1 },
      { text: "77. What is the main purpose of a loss function?", options: ["To measure how well a model performs on given data","To initialize weights","To split datasets","To generate predictions"], correct: 0 },
      { text: "78. Which term refers to the process of adjusting model weights using gradients?", options: ["Regularization","Optimization","Dropout","Tokenization"], correct: 1 },
      { text: "79. What is the output type of a softmax function?", options: ["Binary labels","Probability distribution over classes","Real-valued test scores","Sparse vectors"], correct: 1 },
      { text: "80. In NLP, what is sentiment analysis?", options: ["Generating summaries of text","Determining the emotional tone of text","Translating text into another language","Counting words"], correct: 1 },
      { text: "81. Which technique is used to stop training when validation performance stops improving?", options: ["Batch normalization","Early stopping","Dropout","Gradient clipping"], correct: 1 },
      { text: "82. Which evaluation metric compares predicted and actual values for regression tasks?", options: ["Accuracy","Mean Absolute Error","Precision","Recall"], correct: 1 },
      { text: "83. What is the primary challenge addressed by generative AI?", options: ["Predicting numeric values","Creating new content that resembles training data","Classifying images","Sorting data"], correct: 1 },
      { text: "84. Which AI field deals with understanding spoken language?", options: ["Computer vision","Speech recognition","Robotics","Machine translation"], correct: 1 },
      { text: "85. In a recommendation system, collaborative filtering uses:", options: ["Only item attributes","User-item interaction patterns","Random guesswork","Physical sensor data"], correct: 1 },
      { text: "86. Which method can reduce overfitting by randomly zeroing out neurons during training?", options: ["L1 regularization","Dropout","Feature scaling","PCA"], correct: 1 },
      { text: "87. What is a hyperparameter?", options: ["A parameter learned during training","A parameter set before training begins","An output prediction value","A feature extracted from data"], correct: 1 },
      { text: "88. Which activation function is commonly used in hidden layers of modern deep networks?", options: ["Sigmoid","ReLU","Softmax","Linear"], correct: 1 },
      { text: "89. What is the purpose of a tokenizer in NLP?", options: ["Translate words into images","Split text into tokens","Evaluate model accuracy","Store training data"], correct: 1 },
      { text: "90. Which algorithm is typically used for shortest path problems with heuristic guidance?", options: ["Dijkstra's algorithm","A* search","Bellman-Ford","Floyd-Warshall"], correct: 1 },
      { text: "91. What is the difference between classification and regression?", options: ["Classification predicts discrete labels; regression predicts continuous values","Classification uses neural networks; regression uses decision trees","Classification is unsupervised; regression is supervised","Classification only works with text data"], correct: 0 },
      { text: "92. What is an embedding vector?", options: ["A scalar value used for scaling","A dense vector representation of discrete data","A special bias term","A type of regularization"], correct: 1 },
      { text: "93. Which of these is a model evaluation method for classification?", options: ["ROC curve","Confusion matrix","Precision-recall curve","All of the above"], correct: 3 },
      { text: "94. Which type of machine learning task is object detection?", options: ["Regression","Clustering","Supervised learning","Dimensionality reduction"], correct: 2 },
      { text: "95. What is the main role of a feature extractor in a model pipeline?", options: ["Convert raw data into numerical features","Train the final classifier","Optimize the learning rate","Split the dataset"], correct: 0 },
      { text: "96. What is a common reason to use regularization?", options: ["Improve test accuracy by reducing overfitting","Make models train faster","Increase the number of features","Remove noise from labels"], correct: 0 },
      { text: "97. Which neural network is particularly effective for image data?", options: ["Recurrent Neural Network","Convolutional Neural Network","Linear Regression","K-means"], correct: 1 },
      { text: "98. Which of the following is a disadvantage of deep networks?", options: ["They always generalize perfectly","They may require very large datasets and computing resources","They have no activation functions","They cannot be used for image tasks"], correct: 1 },
      { text: "99. What is the name of the process that updates neural network weights by moving opposite to the gradient of the loss?", options: ["Gradient ascent","Gradient descent","Weight expansion","Prediction scaling"], correct: 1 },
      { text: "100. What is a common application of artificial intelligence in healthcare?", options: ["Patient scheduling","Medical image analysis","Database indexing","Printer management"], correct: 1 }
    ]
  },

  "Internet Programming": {
    title: "Internet Programming",
    questions: [

      {
        text: "1. Which network, started in 1969 by the US Department of Defense, is recognized as the origin of the modern Internet?",
        options: ["NSFNET", "ALOHANET", "ARPANET", "INTRANET"],
        correct: 2
      },

      {
        text: "2. Which of the following statements about Internet ownership is TRUE based on the course materials?",
        options: [
          "The US Department of Defense owns and manages all infrastructure",
          "No single company or central administration owns the internet; it is a cooperative effort governed by standards and rules",
          "The World Wide Web Consortium (W3C) physically owns all web servers",
          "Internet service providers (ISPs) own the internet collectively as a single legal corporation"
        ],
        correct: 1
      },

      {
        text: "3. What specific protocol does the Telnet service use to allow a user to log on to a remote computer and interactively access its resources?",
        options: [
          "Simple Mail Transfer Protocol (SMTP)",
          "Network Terminal Protocol",
          "File Transfer Protocol (FTP)",
          "Hypertext Transfer Protocol (HTTP)"
        ],
        correct: 1
      },

      {
        text: "4. A standardized set of rules that governs all communication over a computer network is called a:",
        options: [
          "System script",
          "Browser extensions",
          "Protocol",
          "Markup layout"
        ],
        correct: 2
      },

      {
        text: "5. How are the Internet and the World Wide Web (WWW) related?",
        options: [
          "They are identical terms that describe the exact same network technology",
          "The Internet is a collection of computers and devices connected together, while the WWW is a system of accessing information over that infrastructure",
          "The WWW is the physical hardware network, and the Internet is the software protocol running on it",
          "The Internet is a subset of the World Wide Web running exclusively on client machines"
        ],
        correct: 1
      },

      {
        text: "6. Which architecture form serves as the primary structural design pattern for web applications connecting browsers and web servers?",
        options: [
          "Peer-to-Peer Architecture",
          "Monolithic Desktop Architecture",
          "Client-Server Architecture",
          "Distributed Pipeline Grid"
        ],
        correct: 2
      },

      {
        text: "7. Which component represents the web server environment that executes a server-side scripting language before delivering the output to the client?",
        options: [
          "Google Chrome or Mozilla Firefox",
          "The local operating system registry",
          "A server-side environment or web server program (e.g., Apache, NGINX)",
          "The client's hardware CPU cache"
        ],
        correct: 2
      },

      {
        text: "8. Which architectural model allows web pages to be generated dynamically on demand from a centralized server repository?",
        options: [
          "Static Information Architecture",
          "Client-side static caching model",
          "Dynamic Server-Side Web Architecture",
          "Micro-instruction pipeline layout"
        ],
        correct: 2
      },

      {
        text: "9. What primary action occurs when a client browser makes an HTTP request to a dynamic PHP page?",
        options: [
          "The complete PHP code is transferred directly to the user's browser for execution",
          "The web server executes the PHP script, embeds the resulting text/data into HTML, and sends only the plain HTML output back to the client",
          "The browser compiles the PHP source code into bytecode via a local virtual machine",
          "The server sends an encrypted JSON database schema instead of a web page document"
        ],
        correct: 1
      },

      {
        text: "10. In the context of Request-Response communication, which two HTTP methods are most commonly utilized?",
        options: [
          "PUSH and PULL",
          "GET and POST",
          "FETCH and SEND",
          "LOAD and SAVE"
        ],
        correct: 1
      },

      {
        text: "11. Where are query strings (name/value pairs) appended when executing an HTTP GET request?",
        options: [
          "Inside the hidden HTTP message payload body",
          "Directly within the URL string of the request",
          "In a separate local client-side text file",
          "In the server's root installation configuration registry"
        ],
        correct: 1
      },

      {
        text: "12. Which of the following is an explicit characteristic of HTTP GET requests?",
        options: [
          "They never remain in the browser history",
          "They can be safely bookmarked by the user",
          "They have absolutely no restrictions on data length",
          "They are completely hidden from external users and ideal for highly sensitive passwords"
        ],
        correct: 1
      },

      {
        text: "13. Where does an HTTP POST request place its variable name/value data pairs?",
        options: [
          "Within the URL query string trailing path",
          "Inside the HTTP message payload body",
          "In the local browser's address bar history",
          "In an absolute server path configuration header"
        ],
        correct: 1
      },

      {
        text: "14. Which statement about the HTTP POST method is completely accurate?",
        options: [
          "POST requests are heavily cached by default by all major browsers",
          "POST requests cannot be bookmarked and have no explicit limits on data length",
          "POST requests must only be used to retrieve non-sensitive raw document catalogs",
          "POST requests expose all parameters to the browser address bar environment"
        ],
        correct: 1
      },

      {
        text: "15. Which HTTP request method is explicitly used to request that a server store data or replace content at a specific uniform resource identifier (URI)?",
        options: [
          "OPTIONS",
          "DELETE",
          "PUT",
          "HEAD"
        ],
        correct: 2
      },

      {
        text: "16. What does the acronym HTML stand for?",
        options: [
          "High Tech Markup Language",
          "Hypertext Markup Language",
          "Hyperlink Management Tools Layout",
          "Hyperactive Matrix Language"
        ],
        correct: 1
      },

      {
        text: "17. HTML tags are written using special structural semantic enclosures consisting of:",
        options: [
          "Square brackets [ ]",
          "Curly braces { }",
          "Angle brackets < >",
          "Parentheses ( )"
        ],
        correct: 2
      },

      {
        text: "18. What is the standard syntactic layout for a normal paired HTML element?",
        options: [
          "</tagname> content <tagname>",
          "<tagname> content </tagname>",
          "<tagname> content <tagname>",
          "[tagname] content [/tagname]"
        ],
        correct: 1
      },

      {
        text: "19. What specific piece of software is required to read, interpret HTML markup tags, and display them as structured web pages?",
        options: [
          "A Compiler",
          "A Web Browser",
          "A Database Server",
          "An Integrated Development Environment (IDE)"
        ],
        correct: 1
      },

      {
        text: "20. Which tag represents the mandatory root structural container wrapper for an entire HTML document?",
        options: [
          "<head>",
          "<body>",
          "<html>",
          "<root>"
        ],
        correct: 2
      },

      {
        text: "21. Where must meta-information, style layouts, scripts, and the document page title be placed inside an HTML file?",
        options: [
          "Within the <body> element blocks",
          "Inside the <head> structural section",
          "Below the closing </html> tag marker",
          "Inside a structural footer element"
        ],
        correct: 1
      },

      {
        text: "22. Which element defines the specific text shown in the browser tab or upper title bar of a web browser?",
        options: [
          "<header>",
          "<meta>",
          "<title>",
          "<h1>"
        ],
        correct: 2
      },

      {
        text: "23. The visible content of a web page document (such as paragraphs, images, and links) must be contained within which tag?",
        options: [
          "<head>",
          "<body>",
          "<content>",
          "<main>"
        ],
        correct: 1
      },

      {
        text: "24. How many levels of structural headings does HTML provide natively, and which one represents the largest heading size?",
        options: [
          "3 levels; <h6> is the largest",
          "6 levels; <h1> is the largest",
          "10 levels; <h10> is the largest",
          "5 levels; <h5> is the largest"
        ],
        correct: 1
      },

      {
        text: "25. Which element is used to define a standard block-level paragraph layout of text?",
        options: [
          "<para>",
          "<text>",
          "<p>",
          "<br>"
        ],
        correct: 2
      },

      {
        text: "26. To force a simple line break or move to a newline without creating a new paragraph block, which tag is appropriate?",
        options: [
          "<lb>",
          "<break>",
          "<p>",
          "<br>"
        ],
        correct: 3
      },

      {
        text: "27. What attribute must be added to an anchor tag (<a>) to declare the target URL destination for a hyperlink?",
        options: [
          "src",
          "href",
          "link",
          "target"
        ],
        correct: 1
      },

      {
        text: "28. Which tag is used to embed a graphic image asset into an HTML web document?",
        options: [
          "<image>",
          "<img>",
          "<picture>",
          "<src>"
        ],
        correct: 1
      },

      {
        text: "29. What two critical attributes are required within an <img> tag to properly load the source path and provide alternative description text?",
        options: [
          "href and title",
          "src and alt",
          "path and desc",
          "link and name"
        ],
        correct: 1
      },

      {
        text: "30. Which tag pair is used to initialize an Unordered List that uses bullet points?",
        options: [
          "<ol> ... </ol>",
          "<ul> ... </ul>",
          "<li> ... </li>",
          "<dl> ... </dl>"
        ],
        correct: 1
      },
      { 
  text: "31. Every item inside an ordered or unordered list container must be wrapped within which tag?",
  options: ["<item>","<list>","<li>","<ui>"],
  correct: 2
},

{ 
  text: "32. What HTML tag is used to create a structured grid container for rows and cells of tabular data?",
  options: ["<grid>","<table>","<matrix>","<form>"],
  correct: 1
},

{ 
  text: "33. Inside a standard table definition, rows and regular data cells are declared using which sequence of tags?",
  options: ["<tr> for rows, and <td> for data cells","<th> for rows, and <tr> for data cells","<row> for rows, and <cell> for data cells","<td> for rows, and <tr> for data cells"],
  correct: 0
},

{ 
  text: "34. What element is explicitly used to collect input information from a user on a web page and send it to a server application?",
  options: ["<input>","<select>","<form>","<textarea>"],
  correct: 2
},

{ 
  text: "35. Which HTML character entity reference should be written to introduce a standard non-breaking space character?",
  options: ["&amp;","&lt;","&nbsp;","&quot;"],
  correct: 2
},

{ 
  text: "36. What does CSS stand for in web engineering?",
  options: ["Computer Style Sheets","Creative System Styles","Cascading Style Sheets","Complex Structural Syntax"],
  correct: 2
},

{ 
  text: "37. What are the two core structural parts of a standard CSS rule declaration block?",
  options: ["A tag and an attribute","A selector, and one or more declarations containing a property and a value","A class reference and an inline script tag","An ID marker and an active script handle"],
  correct: 1
},

{ 
  text: "38. In the CSS rule structure: h1 {color: blue; font-size: 12px;}, what term describes the token color?",
  options: ["Selector","Value","Property","Class"],
  correct: 2
},

{ 
  text: "39. Which of the following shows the correct character markers used to write comments inside a CSS document file?",
  options: ["// comment","# comment","/* comment */","``"],
  correct: 2
},

{ 
  text: "40. What are the three standard methods available to insert and apply CSS style sheets to an HTML document?",
  options: ["Primary, Secondary, and Tertiary","Inline, Internal (Document Level), and External style sheets","Head, Body, and Footer declarations","Direct, Indirect, and Compiled styling links"],
  correct: 1
},

{ 
  text: "41. An Inline style sheet is defined directly inside an individual HTML opening tag using which attribute?",
  options: ["class","id","style","css"],
  correct: 2
},

{ 
  text: "42. Which statement correctly describes a disadvantage of using Inline style sheets?",
  options: ["They load much slower than database connections","They are highly inefficient because styles are spread throughout the document, making maintenance difficult","They cannot accept basic color formatting properties","They force the entire web document to compile into an external file framework"],
  correct: 1
},

{ 
  text: "43. Internal or document-level style sheets must be placed within which tags inside the HTML <head> block?",
  options: ["<script> ... </script>","<css> ... </css>","<style> ... </style>","<link> ... </link>"],
  correct: 2
},

{ 
  text: "44. What element and attribute pair are required in the HTML head section to attach an External style sheet file to a web page?",
  options: ["<style src='filename.css'>","<link rel='stylesheet' href='filename.css'>","<script href='filename.css'>","<meta link='filename.css'>"],
  correct: 1
},

{ 
  text: "45. Which selector format is used to apply a CSS style block to all paragraphs (<p>) universally across a page?",
  options: [".p { }","#p { }","p { }","*p { }"],
  correct: 2
},

{ 
  text: "46. To target an HTML element marked with a specific unique id attribute (e.g., <div id='mainheader'>), which character prefix must be used in the CSS selector?",
  options: ["Dot symbol .","Hash symbol #","Asterisk symbol *","At symbol @"],
  correct: 1
},

{ 
  text: "47. To target elements belonging to a specific style class group (e.g., <p class='error'>), which prefix character must be placed before the class name in the CSS selector?",
  options: ["Hash symbol #","Ampersand symbol &","Dot symbol .","Percent symbol %"],
  correct: 2
},

{ 
  text: "48. Which CSS property is used to specify the background color of an element?",
  options: ["color","bg-color","background-color","text-background"],
  correct: 2
},

{ 
  text: "49. Which property is used to control the absolute text color of an HTML element?",
  options: ["text-color","font-color","color","foreground"],
  correct: 2
},

{ 
  text: "50. What property should be adjusted to change the font style family of text elements to Arial or Sans-Serif?",
  options: ["font-style","font-family","font-type","text-font"],
  correct: 1
},

{ 
  text: "51. Which CSS property allows a developer to increase or decrease the physical rendering size of text characters?",
  options: ["font-weight","text-size","font-size","character-dimension"],
  correct: 2
},

{ 
  text: "52. What property controls the boldness of text characters in a CSS declaration?",
  options: ["font-style","font-weight","text-decoration","font-size"],
  correct: 1
},

{ 
  text: "53. To completely remove the default underline styling from a standard anchor hyperlink tag, which property and value combination is correct?",
  options: ["text-decoration: none;","font-style: plain;","link-decoration: clear;","border: hidden;"],
  correct: 0
},

{ 
  text: "54. What are the four pseudo-class states of a link element that can be styled uniquely using CSS selectors?",
  options: ["start, stop, pause, resume","view, hide, click, close","link, visited, hover, active","standard, past, pointer, click"],
  correct: 2
},

{
  text: "55. When establishing rules for multiple link pseudo-class states, what is the mandatory structural ordering requirement for the rules to evaluate properly?",
  options: [
    ":active must come before everything else",
    ":hover must come after :link and :visited, and :active must come after :hover",
    ":visited must always follow :active directly",
    "There are no order rules; they can be arranged randomly"
  ],
  correct: 1
},

{
  text: "56. Where does JavaScript code physically run and execute in standard client-side web application processing?",
  options: [
    "On the remote back-end database cluster",
    "Right inside the user's web browser environment",
    "Within the web server's compiler thread",
    "Inside the server's network routing hardware"
  ],
  correct: 1
},
{ 
  text: "57. JavaScript code execution is classified as which paradigm type?",
  options: ["Server-Side compiled processing","Interpreted Client-Side scripting","Direct machine binary compilation","Low-level assembly language routing"],
  correct: 1
},

{ 
  text: "58. What is a key difference between Java and JavaScript based on the course materials?",
  options: ["Java runs inside browsers without a engine, while JavaScript requires a full compiler setup","Java is a full-fledged compiled object-oriented language running via a JVM; JavaScript is an interpreted, prototype-based language running directly inside the browser","JavaScript is just an updated, lighter script framework version of Java owned by the same company","Java is dynamically typed and runs on client browsers only, while JavaScript is strongly typed"],
  correct: 1
},

{ 
  text: "59. Which of the following represents a significant advantage of utilizing client-side scripting like JavaScript?",
  options: ["It increases the continuous network data loading processing overhead on the host server","Processing can be offloaded from the server to client machines, reducing server load and enabling rapid responses to user events","It prevents clients from seeing any structural markup elements","It converts the entire browser document object model into physical relational database tables"],
  correct: 1
},

{ 
  text: "60. The structural object model pattern in JavaScript means that almost everything is an object, and these objects are based on:",
  options: ["Pure Class-based architectures","Prototype-based structures rather than strict class-based blueprints","Monolithic pointer matrices","Static abstract interfaces"],
  correct: 1
},

{ 
  text: "61. What does it mean that JavaScript is a dynamically typed programming language?",
  options: ["Data variables must be declared with fixed strict primitive types before compiling","Variables can hold values of any data type, and their types can change dynamically during runtime execution","Variables are typed manually by keyboard operations on the system database","Data types are limited entirely to textual string characters"],
  correct: 1
},

{ 
  text: "62. Which built-in native method is used to locate and select an HTML element node from the document structure based on its unique id attribute value?",
  options: ["document.searchId()","document.getElementById()","window.fetchNode()","form.selectElement()"],
  correct: 1
},

{ 
  text: "63. Which properties can be used to read or modify the textual content contained inside an HTML element node via JavaScript?",
  options: [".value or .text",".innerHTML or .textContent",".src or .href",".type or .checked"],
  correct: 1
},

{ 
  text: "64. To determine if a specific HTML checkbox input element is actively ticked by a user, which boolean state property should be checked?",
  options: [".selected",".ticked",".checked",".value"],
  correct: 2
},

{ 
  text: "65. Which method is called on a form's node variable within JavaScript to execute a programmatic submission of that form to the server?",
  options: [".send()",".submit()",".postData()",".execute()"],
  correct: 1
},

{ 
  text: "66. What is the primary purpose of writing JavaScript code to execute client-side Form Validation?",
  options: ["To permanently encrypt the user data values before saving them on disk","To check for empty fields or invalid entries on the client side, reducing incorrect submissions and decreasing server load","To clear out all user input fields every time a button is clicked","To alter the database schema tables dynamically without server intervention"],
  correct: 1
},

{ 
  text: "67. Which event handler attribute is triggered the exact moment a user clicks on an HTML element (like a button)?",
  options: ["onload","onmouseover","onclick","onsubmit"],
  correct: 2
},

{ 
  text: "68. Which event attribute fires automatically the moment an entire web page document completes its loading process inside the browser window?",
  options: ["onclick","onload","onready","onfocus"],
  correct: 1
},

{ 
  text: "69. Which form-specific event attribute triggers immediately when a user attempts to submit a form, allowing for client-side pre-validation code to run?",
  options: ["onreset","onselect","onsubmit","onchange"],
  correct: 2
},

{ 
  text: "70. What happens when an onchange event is triggered on an input element?",
  options: ["The user simply moves their mouse over the input boundaries","The input field loses focus after its content value has been modified by the user","The form is instantly wiped of all input entries","The browser opens a brand-new navigation window"],
  correct: 1
},

{ 
  text: "71. Which event attribute activates the moment an input element gains active focus (e.g., when a user tabs into or clicks inside a text box)?",
  options: ["onblur","onfocus","onselect","onreset"],
  correct: 1
},

{ 
  text: "72. What event handler is triggered when an element loses focus (the opposite of gaining focus)?",
  options: ["onfocus","onblur","onreset","onchange"],
  correct: 1
},

{ 
  text: "73. Inside a JavaScript function designed to validate a form, returning a value of false within an onsubmit event handler accomplishes what outcome?",
  options: ["It forces the form to clear all fields and restart","It cancels the form submission event, preventing the data from being sent to the server","It immediately crashes the browser window with an error trace","It changes the HTTP method from GET to POST automatically"],
  correct: 1
},

{ 
  text: "74. Which dialog window method can be called in JavaScript to display a simple popup text box with an OK button to give information to the user?",
  options: ["prompt()","confirm()","alert()","print()"],
  correct: 2
},

{
  text: "75. How are JavaScript comments formatted?",
  options: [
    "`` for single line",
    "// comment for single line, and /* comment */ for multi-line blocks",
    "# comment exclusively for all blocks",
    "\\' comment at the start of every line block"
  ],
  correct: 1
},   

{
  text: "76. What does the server-side language acronym PHP stand for?",
  options: [
    "Private Home Page",
    "Programming Hypertext Processor",
    "PHP: Hypertext Preprocessor",
    "Portable Hardware Protocol"
  ],
  correct: 2
},
{ 
  text: "77. Where are PHP script files processed and executed?",
  options: ["Inside the client side web browser engine","On the web server, before the final data/HTML is passed to the browser","In a local text editor environment during navigation","Inside a network firewall gateway device"],
  correct: 1
},

{ 
  text: "78. Which of the following is a completely valid character token combination used to open a PHP script block?",
  options: ["<script php>","<?php","<%php","[@php"],
  correct: 1
},

{ 
  text: "79. Every single standard PHP script statement or command line execution block must be terminated with a:",
  options: ["Period symbol .","Colon symbol :","Semicolon symbol ;","Exclamation point !"],
  correct: 2
},

{ 
  text: "80. All standard user-defined variables in a PHP script file must begin with which character symbol prefix?",
  options: ["Ampersand symbol &","Hash symbol #","Dollar sign symbol $","At symbol @"],
  correct: 2
},

{ 
  text: "81. What are the three standard variable scoping levels supported natively inside PHP applications?",
  options: ["Primary, Secondary, Universal","Local, Global, and Static scopes","Public, Private, Protected","Internal, External, Overridden"],
  correct: 1
},

{ 
  text: "82. What specific types of array structures are supported natively by PHP?",
  options: ["Row arrays, Column arrays, Matrix arrays","Indexed arrays, Associative arrays, and Multi-dimensional arrays","Flat arrays and Nested pointer chains only","Static binary arrays and Constant map arrays"],
  correct: 1
},

{ 
  text: "83. Which built-in control flow loop structure is specifically designed to iterate through the elements of an array easily in PHP?",
  options: ["for loop","while loop","foreach loop","do...while loop"],
  correct: 2
},

{ 
  text: "84. Which built-in PHP statement or command is utilized to output or print text/HTML strings directly onto a webpage layout?",
  options: ["print_line","echo","system.out","document.write"],
  correct: 1
},

{ 
  text: "85. What are the superglobal array variables provided by PHP to collect form data submitted via web documents?",
  options: ["$_REQUEST_GET and $_REQUEST_POST","$_GET and $_POST","$HTTP_GET and $HTTP_POST","$FORM_GET and $FORM_POST"],
  correct: 1
},

{ 
  text: "86. Which statement regarding the behavior of the PHP $_GET superglobal array is TRUE?",
  options: ["Variables passed via $_GET are invisible to everyone","It sends variables via the HTTP POST headers","It is an array of variables passed via the URL parameters, making them visible to everyone in the address bar","It has absolutely no structural limits on the total amount of information sent"],
  correct: 2
},

{ 
  text: "87. Why should the $_GET method NEVER be utilized for sending highly sensitive form information (like user account passwords)?",
  options: ["It processes data much slower than any other routine","Data parameters are appended directly into the visible URL parameter path, remaining visible in browser history","It requires an active database framework connection to send requests","It converts textual strings into unreadable binary files automatically"],
  correct: 1
},

{ 
  text: "88. Which statement correctly identifies a key advantage of utilizing the PHP $_POST superglobal array over $_GET?",
  options: ["It displays all variable configurations openly to the viewer for easier debugging","It sends variable parameters invisibly via the HTTP POST method body and has no explicit strict data length restrictions","It caches all data values directly inside the user's bookmark library","It doesn't require the web server to execute any script handling loops"],
  correct: 1
},

{ 
  text: "89. What tool is used to help a web application maintain user-specific state information across multiple pages during a continuous browsing timeline?",
  options: ["A local URL query parameter cache","PHP Session handling ($_SESSION)","A static local text script file","A server-side database schema upgrade"],
  correct: 1
},

{ 
  text: "90. What is the fundamental functional difference between the PHP include and require statements when an external file is missing or fails to load?",
  options: ["They perform identical actions and generate the exact same warning message logs","require will produce a fatal error (E_COMPILE_ERROR) and halt script execution; include only gives a warning (E_WARNING) and allows the script to continue","include stops the entire server engine immediately, while require skips to the next file link","require is utilized exclusively for HTML, and include is utilized for database tables"],
  correct: 1
},

{ 
  text: "91. Writing to a file using server-side PHP scripts means that data is being saved on:",
  options: ["The client's keyboard buffer cache","The web server or a specified server storage device","The client's local web browser storage partition","A global network DNS registry hub"],
  correct: 1
},

{ 
  text: "92. Reading from a file in server-side scripting involves which operational sequence?",
  options: ["Downloading a new compiler layout to the client browser","Retrieving stored data records from a server file for processing or display on a website","Clearing out all database table configurations","Converting web documents into structural XML formatting strings"],
  correct: 1
},

{ 
  text: "93. What primary function does an Application Service Provider (ASP) fulfill in software sourcing alternatives?",
  options: ["It builds custom physical server motherboards for local departments","It acts as an outside firm that hosts and manages software applications over a network for a customer","It translates client-side scripts into physical assembly machine tokens","It acts as an open-source tool for checking HTML character entity syntax errors"],
  correct: 1
},

{ 
  text: "94. What document is provided to external software vendors to ask them to propose hardware and system software configurations that meet a new system's requirements?",
  options: ["Design Specification Report (DSR)","Request for Proposal (RFP)","Feasibility Assessment Matrix (FAM)","Narrative Overview Document (NOD)"],
  correct: 1
},

{ 
  text: "95. When choosing off-the-shelf software packages, which evaluation criteria focuses on assessing the vendor's long-term business survival and technical support capabilities?",
  options: ["Viability of Vendor","Baseline cost parameterization","Internal customization flexibility","Response Time capacity metrics"],
  correct: 0
},

{ 
  text: "96. What does the modern acronym PDO stand for when managing relational database server connections within PHP scripts?",
  options: ["PHP Data Objects","Program Database Operations","Primary Data Overrides","Protected Document Outputs"],
  correct: 0
},

{ 
  text: "97. What is the correct sequence of steps executed during a Parameterized SQL Prepared Statement workflow to prevent dangerous SQL Injection attacks?",
  options: ["Fetch, Clear, Log","Prepare, Bind, and Execute","Query, Format, Output","Load, Reassign, Terminate"],
  correct: 1
},

{ 
  text: "98. Fetching stored relational records from a database table to display content on a webpage is initiated via which SQL keyword command?",
  options: ["INSERT","UPDATE","SELECT","DELETE"],
  correct: 2
},

{ 
  text: "99. Why is the inclusion of a specific WHERE clause critically mandatory when executing an SQL UPDATE or DELETE statement via PHP?",
  options: ["It increases the security encryption level of the host script file","Without a WHERE clause, the statement will modify or delete all records in the database table indiscriminately","It formats the data rows into readable HTML table layouts automatically","It forces the web server to create an automatic backup directory on disk"],
  correct: 1
},

{ 
  text: "100. Which type of database cost describes the ongoing expenses associated with the continuous operation, maintenance, and regular use of an information system?",
  options: ["One-time cost","Intangible benefit parameter","Recurring cost","Tangible initial startup cost"],
  correct: 2
}
  ]
  },

  "Comprehensive Exit Exam": {
    title: "Comprehensive Exit Exam",
    questions: [

      {
        text: "1. Which software development lifecycle (SDLC) model is best suited for projects with well-defined, stable requirements where changes are unlikely?",
        options: ["Scrum", "Spiral Model", "Waterfall Model", "Prototyping"],
        correct: 2
      },

      {
        text: "2. In Object-Oriented Analysis and Design (OOAD), which diagram is used to depict the interaction between actors and the system to achieve a specific goal?",
        options: ["Class Diagram", "Use Case Diagram", "Data Flow Diagram (DFD)", "Entity Relationship Diagram (ERD)"],
        correct: 1
      },

      {
        text: "3. During which phase of the SDLC are requirements gathered from stakeholders, analyzed for feasibility, and documented?",
        options: ["Planning", "Analysis", "Design", "Implementation"],
        correct: 1
      },

      {
        text: "4. What does a DFD Level 0 (Context Diagram) represent?",
        options: [
          "The internal logic of a single software module",
          "The database physical schema matrix",
          "An overview of the entire system showing external entities and data flows without internal details",
          "The user interface navigation hierarchy"
        ],
        correct: 2
      },

      {
        text: "5. In a Class Diagram, what type of relationship is represented by a solid line with an unfilled diamond shape at the parent end?",
        options: ["Inheritance / Generalization", "Aggregation", "Composition", "Dependency"],
        correct: 1
      },

      {
        text: "6. The process of breaking a complex system down into smaller, more manageable subsystems or modules is called:",
        options: ["Progressive Elaboration", "Cohesion", "Decomposition", "Encapsulation"],
        correct: 2
      },

      {
        text: "7. Which term describes the degree of interdependence between software modules?",
        options: ["Coupling", "Cohesion", "Inheritance", "Polymorphism"],
        correct: 0
      },

      {
        text: "8. For an ideal system architecture, developers strive to achieve:",
        options: [
          "High coupling and high cohesion",
          "High coupling and low cohesion",
          "Low coupling and low cohesion",
          "Low coupling and high cohesion"
        ],
        correct: 3
      },

      {
        text: "9. What type of system testing involves testing individual units or pieces of code independently?",
        options: ["System Testing", "Integration Testing", "Unit Testing", "Acceptance Testing"],
        correct: 2
      },

      {
        text: "10. A feasibility study that evaluates whether the organization has the technical expertise, hardware, and software resources to build a system is called:",
        options: ["Economic Feasibility", "Technical Feasibility", "Operational Feasibility", "Legal Feasibility"],
        correct: 1
      },

      {
        text: "11. Which diagram shows the chronological sequencing of messages exchanged between objects over time?",
        options: ["Activity Diagram", "State Machine Diagram", "Sequence Diagram", "Deployment Diagram"],
        correct: 2
      },

      {
        text: "12. What is the primary purpose of user acceptance testing (UAT)?",
        options: [
          "To find deep logical bugs in the source code",
          "To confirm that the system meets business requirements and is ready for operational deployment",
          "To stress test the database servers",
          "To document structural system requirements"
        ],
        correct: 1
      },

      {
        text: "13. In agile methodologies, a short narrative description of a feature or requirement written from the perspective of an end-user is a:",
        options: ["Product Backlog", "Use Case", "User Story", "Test Case"],
        correct: 2
      },

      {
        text: "14. A dynamic behavioral UML diagram that models workflows or business processes is the:",
        options: ["Class Diagram", "Component Diagram", "Activity Diagram", "Object Diagram"],
        correct: 2
      },

      {
        text: "15. Which deployment strategy involves running the old system and the new system simultaneously for a period of time?",
        options: ["Direct Cutover", "Phased Implementation", "Parallel Implementation", "Pilot Implementation"],
        correct: 2
      },

      {
        text: "16. Which level of the Three-Schema Architecture defines how data is physically arranged and stored?",
        options: ["External level", "Conceptual level", "Internal / Physical level", "Logical level"],
        correct: 2
      },

      {
        text: "17. The ability to modify the conceptual schema without altering external schemas is known as:",
        options: ["Physical data independence", "Logical data independence", "Relational encapsulation", "Structural transparency"],
        correct: 1
      },

      {
        text: "18. In an ERD, a weak entity type is represented graphically by a:",
        options: ["Double Rectangle", "Double Oval", "Diamond Box", "Dotted Line"],
        correct: 0
      },

      {
        text: "19. Which constraint states that no primary key attribute value can contain NULL?",
        options: ["Referential Integrity", "Domain Integrity", "Entity Integrity", "Key Constraint"],
        correct: 2
      },

      {
        text: "20. A foreign key strictly enforces:",
        options: ["Entity Integrity", "Referential Integrity", "User-Defined Constraints", "Column Cardinality"],
        correct: 1
      }
,
      {
        text: "21. Which relational algebra operation filters out rows from a relation based on a Boolean predicate?",
        options: ["Project (π)", "Select (σ)", "Join (⋈)", "Intersection (∩)"],
        correct: 1
      },

      {
        text: "22. To eliminate unnecessary columns and keep only selected fields, which relational operation is used?",
        options: ["Select", "Project", "Rename", "Division"],
        correct: 1
      },

      {
        text: "23. A relation schema is in First Normal Form (1NF) if:",
        options: [
          "It contains no partial dependencies",
          "It contains no transitive dependencies",
          "All attribute values are atomic",
          "Every determinant is a candidate key"
        ],
        correct: 2
      },

      {
        text: "24. A non-prime attribute depending on another non-prime attribute creates a:",
        options: [
          "Full functional dependency",
          "Partial dependency",
          "Transitive dependency",
          "Trivial dependency"
        ],
        correct: 2
      },

      {
        text: "25. A relation schema is in Third Normal Form (3NF) if it satisfies 2NF and has no:",
        options: [
          "Multi-valued attributes",
          "Partial dependencies",
          "Transitive dependencies",
          "Join anomalies"
        ],
        correct: 2
      },

      {
        text: "26. Which SQL clause filters grouped records returned by aggregate functions?",
        options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
        correct: 1
      },

      {
        text: "27. What happens if DELETE FROM table_name is executed without a WHERE clause?",
        options: [
          "The table schema is dropped",
          "The statement fails",
          "Only the first row is removed",
          "All records are deleted"
        ],
        correct: 3
      },

      {
        text: "28. What type of database view generates results dynamically without storing data physically?",
        options: ["Base table", "Virtual View", "Materialized View", "Stored Index"],
        correct: 1
      },

      {
        text: "29. In ACID transaction properties, what does A stand for?",
        options: ["Authority", "Availability", "Atomicity", "Authenticity"],
        correct: 2
      },

      {
        text: "30. Which transaction property guarantees committed data remains permanent?",
        options: ["Isolation", "Consistency", "Durability", "Deadlock prevention"],
        correct: 2
      },

      {
        text: "31. Reading uncommitted data from another transaction is called:",
        options: ["Lost Update", "Dirty Read", "Unrepeatable Read", "Phantom Read"],
        correct: 1
      },

      {
        text: "32. In Two-Phase Locking (2PL), a transaction cannot:",
        options: [
          "Read data without an exclusive lock",
          "Acquire new locks after releasing locks",
          "Commit before releasing locks",
          "Abort after deadlock"
        ],
        correct: 1
      },

      {
        text: "33. What recovery rule requires log entries be written before database pages?",
        options: ["Shadow Paging", "Write-Ahead Logging", "Cascading Abort Control", "Checkpointing"],
        correct: 1
      },

      {
        text: "34. Which SQL keyword removes duplicate rows from query results?",
        options: ["UNIQUE", "DISTINCT", "SINGLE", "GROUP ALL"],
        correct: 1
      },

      {
        text: "35. A minimal superkey that uniquely identifies tuples is called:",
        options: ["Primary Key", "Candidate Key", "Foreign Key", "Composite Matrix"],
        correct: 1
      },

      {
        text: "36. Which information system supports routine operational transactions?",
        options: [
          "Decision Support System",
          "Management Information System",
          "Transaction Processing System",
          "Executive Support System"
        ],
        correct: 2
      },

      {
        text: "37. ERP systems are primarily used to:",
        options: [
          "Connect desktops to printers",
          "Integrate business processes enterprise-wide",
          "Route internet traffic",
          "Host blogs"
        ],
        correct: 1
      },

      {
        text: "38. Which architecture separates applications into presentation, logic, and data layers?",
        options: [
          "Monolithic Architecture",
          "Three-Tier Architecture",
          "Peer-to-Peer Architecture",
          "Mainframe Architecture"
        ],
        correct: 1
      },

      {
        text: "39. In DSS systems, which component supports what-if analysis?",
        options: [
          "Transaction log",
          "Database index",
          "Model Management System",
          "User profile matrix"
        ],
        correct: 2
      },

            {
        text: "40. Supply Chain Management (SCM) systems primarily focus on optimizing information flows, materials, and finances between an enterprise and its:",
        options: ["Internal human resources","Competitors","Suppliers and distributors","Board of directors"],
        correct: 2
      },

      {
        text: "41. Customer Relationship Management (CRM) systems are designed to assist businesses in managing:",
        options: [
          "Employee payroll schedules",
          "All aspects of marketing, sales, and service interactions with clients",
          "Legal compliances for environmental hazards",
          "Internal server infrastructure configurations"
        ],
        correct: 1
      },

      {
        text: "42. What framework is widely used to provide strategic governance and management guidelines for corporate Information Technology?",
        options: ["COBIT","Scrum","UML","TCP/IP"],
        correct: 0
      },

      {
        text: "43. Porter's Five Forces model helps organizations analyze their competitive environment. Which of the following is NOT one of the five forces?",
        options: [
          "Threat of new entrants",
          "Bargaining power of buyers",
          "Threat of substitute products",
          "Total organizational cost structure"
        ],
        correct: 3
      },

      {
        text: "44. Which cloud computing service model provides customers with access to raw computing infrastructure like virtual machines, storage, and networks?",
        options: ["Software as a Service (SaaS)","Platform as a Service (PaaS)","Infrastructure as a Service (IaaS)","Data as a Service (DaaS)"],
        correct: 2
      },

      {
        text: "45. When an organization moves its internal applications from on-premise servers to a cloud provider's shared infrastructure accessible via the internet, it is adopting a:",
        options: ["Private Cloud","Public Cloud","Hybrid Cloud","Distributed Local Grid"],
        correct: 1
      },

      {
        text: "46. What is the primary purpose of a Data Warehouse in an enterprise setting?",
        options: [
          "To run real-time transactional updates across operational stores",
          "To act as a central repository of historical data gathered from multiple sources for business intelligence analysis",
          "To cache temporary web documents for local clients",
          "To host corporate backup application software"
        ],
        correct: 1
      },

      {
        text: "47. The extraction of hidden, predictive patterns and trends from massive enterprise datasets is known as:",
        options: ["Data Normalization","Data Mining","Data Partitioning","Data Scrubbing"],
        correct: 1
      },

      {
        text: "48. In project management, what is the sequence of tasks that determines the shortest possible duration to complete a project called?",
        options: ["The Slack Path","The Critical Path","The Buffer Path","The Fast Path"],
        correct: 1
      },

      {
        text: "49. An interactive digital dashboard that presents key performance indicators (KPIs) tailored for high-level corporate executives is typical of which system?",
        options: ["TPS","MIS","ESS / EIS","DSS"],
        correct: 2
      },

      {
        text: "50. What type of business strategy focuses on achieving competitive advantage by producing products or services at a lower cost than rivals?",
        options: ["Differentiation Strategy","Niche Focus Strategy","Cost Leadership Strategy","Innovation Strategy"],
        correct: 2
      },

      {
        text: "51. How many layers are defined in the standard Open Systems Interconnection (OSI) reference model?",
        options: ["4","5","7","9"],
        correct: 2
      },

      {
        text: "52. At which OSI model layer do routers operate to forward data packets across disparate networks using logical addressing?",
        options: ["Physical Layer","Data Link Layer","Network Layer","Transport Layer"],
        correct: 2
      },

      {
        text: "53. Which protocol operates at the Transport Layer of the TCP/IP stack to provide reliable, connection-oriented packet delivery?",
        options: ["UDP","IP","TCP","ICMP"],
        correct: 2
      },

      {
        text: "54. What is the primarily utilized physical address permanently burned into a network interface card (NIC)?",
        options: ["IP Address","MAC Address","Port Number","Subnet Mask"],
        correct: 1
      },

      {
        text: "55. Which application layer protocol dynamically assigns IP addresses, subnet masks, and default gateways to client devices on a network?",
        options: ["DNS","DHCP","FTP","HTTP"],
        correct: 1
      },

      {
        text: "56. The protocol responsible for translating human-readable domain names into IP addresses is:",
        options: ["DHCP","SMTP","DNS","SNMP"],
        correct: 2
      },

      {
        text: "57. What is the fundamental difference between IPv4 and IPv6 addresses?",
        options: [
          "IPv4 is 64-bit; IPv6 is 128-bit",
          "IPv4 uses decimal format; IPv6 uses binary",
          "IPv4 is 32-bit; IPv6 is 128-bit",
          "IPv4 cannot route over public networks"
        ],
        correct: 2
      },

      {
        text: "58. Which network topology connects all devices to a central hub or switch?",
        options: ["Bus Topology","Ring Topology","Star Topology","Mesh Topology"],
        correct: 2
      },

      {
        text: "59. What is a subnet mask primarily used for in IP networking?",
        options: [
          "Encrypt data payloads",
          "Separate network ID from host ID",
          "Map MAC addresses to ports",
          "Block malicious traffic"
        ],
        correct: 1
      },

      {
        text: "60. Which protocol operates unencrypted by default on port 80?",
        options: ["HTTPS","HTTP","SSH","SFTP"],
        correct: 1
      },

      {
        text: "61. What device operates at the Data Link layer to forward frames using MAC addresses?",
        options: ["Hub","Switch","Repeater","Modulator"],
        correct: 1
      },

      {
        text: "62. Which protocol is connectionless and does not guarantee delivery?",
        options: ["TCP","UDP","FTP","TLS"],
        correct: 1
      },

      {
        text: "63. What is the range of private Class C IP addresses?",
        options: [
          "10.0.0.0 – 10.255.255.255",
          "172.16.0.0 – 172.31.255.255",
          "192.168.0.0 – 192.168.255.255",
          "224.0.0.0 – 239.255.255.255"
        ],
        correct: 2
      },

      {
        text: "64. Which technology allows multiple devices to share one public IP?",
        options: ["NAT","VLAN","VPN","DMZ"],
        correct: 0
      },

      {
        text: "65. A logical segmentation of a LAN is called:",
        options: ["Subnet","VLAN","WAN","Proxy Grid"],
        correct: 1
      },

      {
        text: "66. Which command is used to test connectivity using ICMP?",
        options: ["ipconfig","netstat","ping","nslookup"],
        correct: 2
      },

      {
        text: "67. Which medium uses light for data transmission?",
        options: ["Coaxial Cable","UTP","Fiber Optic Cable","Infrared Waves"],
        correct: 2
      },

      {
        text: "68. Which layer defines physical connectors and voltage levels?",
        options: ["Network Access Layer","Transport Layer","Application Layer","Internet Layer"],
        correct: 0
      },

      {
        text: "69. Which protocol is used for email transfer between servers?",
        options: ["POP3","IMAP","SMTP","SNMP"],
        correct: 2
      },

      {
        text: "70. A collision domain is:",
        options: [
          "A secure IP range",
          "A network segment where packet collisions can occur",
          "A database structure",
          "A firewall rule set"
        ],
        correct: 1
      },

      {
        text: "71. What does CIA triad stand for?",
        options: ["Control, Isolation, Authority","Confidentiality, Integrity, Availability","Cryptography, Identity, Authentication","Cyber Inspection Access"],
        correct: 1
      },

      {
        text: "72. What ensures a sender cannot deny sending a message?",
        options: ["Confidentiality","Authentication","Non-repudiation","Authorization"],
        correct: 2
      },

      {
        text: "73. Malware disguised as legitimate software is:",
        options: ["Worm","Virus","Trojan Horse","Spyware"],
        correct: 2
      },

      {
        text: "74. Intercepting and altering communication is called:",
        options: ["DoS","Man-in-the-Middle","SQL Injection","Phishing"],
        correct: 1
      },

      {
        text: "75. Public key + private key cryptography is:",
        options: ["Symmetric","Asymmetric","Hashing","Salting"],
        correct: 1
      },

      {
        text: "76. A network security filtering device is:",
        options: ["Router","Switch","Firewall","Load Balancer"],
        correct: 2
      },

      {
        text: "77. Fake emails stealing credentials is:",
        options: ["Spoofing","Phishing","Sniffing","Pharming"],
        correct: 1
      },

      {
        text: "78. SQL code injection attack is:",
        options: ["XSS","Buffer Overflow","SQL Injection","DoS"],
        correct: 2
      },

      {
        text: "79. A hash function is:",
        options: ["Reversible encryption","Fixed-size irreversible output","Symmetric key system","Compression tool"],
        correct: 1
      },

      {
        text: "80. NOT an authentication factor:",
        options: ["Something you know","Something you have","Something you are","Something you want"],
        correct: 3
      },

      {
        text: "81. Massive distributed traffic attack is:",
        options: ["Brute Force","DDoS","Ransomware","Dictionary Attack"],
        correct: 1
      },

      {
        text: "82. Policy defining employee system usage rules is:",
        options: ["DRP","AUP","SLA","Access Matrix"],
        correct: 1
      },

      {
        text: "83. Zero-day vulnerability is:",
        options: [
          "Fully patched flaw",
          "Unknown vulnerability with no fix available",
          "Instant attack",
          "Backup system"
        ],
        correct: 1
      },

      {
        text: "84. Digital signatures are created using:",
        options: ["Public Key","Private Key","Symmetric Key","Subnet Token"],
        correct: 1
      },

      {
        text: "85. Principle of least privilege means:",
        options: [
          "Full admin access",
          "Minimum required access only",
          "No access control",
          "Shared passwords"
        ],
        correct: 1
      },

      {
        text: "86. AI system that perceives and acts is:",
        options: ["Expert System","Rational Agent","Neural Matrix","Search Algorithm"],
        correct: 1
      },

      {
        text: "87. Learning with labeled data is:",
        options: ["Unsupervised","Supervised","Reinforcement","Clustering"],
        correct: 1
      },

      {
        text: "88. Heuristic-based AI search is:",
        options: ["Uninformed","Informed Search","BFS","DFS"],
        correct: 1
      },

      {
        text: "89. IF-THEN rule-based AI is:",
        options: ["ANN","Genetic Algorithm","Expert System","SVM"],
        correct: 2
      },

      {
        text: "90. Predicting continuous values is:",
        options: ["Classification","Regression","Clustering","Dimensionality Reduction"],
        correct: 1
      },

      {
        text: "91. Grouping unlabeled data is:",
        options: ["Supervised","Reinforcement","Unsupervised","Regularization"],
        correct: 2
      },

      {
        text: "92. Brain-like layered model is:",
        options: ["Decision Tree","KNN","ANN","Linear Regression"],
        correct: 2
      },

      {
        text: "93. Learning noise in training data is:",
        options: ["Underfitting","Overfitting","Optimization","Convergence"],
        correct: 1
      },

      {
        text: "94. Evolution-based optimization is:",
        options: ["Simulated Annealing","A* Search","Genetic Algorithm","Alpha-Beta Pruning"],
        correct: 2
      },

      {
        text: "95. NLP focuses on:",
        options: [
          "3D graphics",
          "Human language understanding",
          "Robotics movement",
          "Database encryption"
        ],
        correct: 1
      },

      {
        text: "96. Pruning search algorithm is:",
        options: ["DFS","Minimax with Alpha-Beta","Uniform Cost","Greedy Search"],
        correct: 1
      },

      {
        text: "97. Turing Test measures:",
        options: [
          "Math solving speed",
          "Human-like behavior in conversation",
          "Robot movement",
          "Data storage"
        ],
        correct: 1
      },

      {
        text: "98. Reward-based learning is:",
        options: ["Supervised","Reinforcement","Clustering","Semi-supervised"],
        correct: 1
      },

      {
        text: "99. Classification evaluation tool:",
        options: ["Scatter Plot","Confusion Matrix","Regression Line","Gantt Chart"],
        correct: 1
      },

      {
        text: "100. Concept network with relationships is:",
        options: ["Semantic Network","Decision Tree","Search Matrix","Bayesian Matrix"],
        correct: 0
      }

    ]
  },

    
"Object Oriented Programming": {
    title: "Object Oriented Programming",
    questions: [
      { text: "1. Which of the following components is responsible for executing Java bytecode on a specific hardware platform?", options: ["Java Compiler (javac)","Java Virtual Machine (JVM)","Java Source Editor","Java Archive (JAR) utility"], correct: 1 },
      { text: "2. What is the extension of a compiled Java class file?", options: [".java",".class",".exe",".obj"], correct: 1 },
      { text: "3. Which primitive data type in Java is used to store a single 16-bit Unicode character?", options: ["byte","short","char","String"], correct: 2 },
      { text: "4. What is the default value of an uninitialized instance variable of type int in a Java class?", options: ["0","null","1","Garbage value"], correct: 0 },
      { text: "5. Which of the following is a valid identifier in Java?", options: ["2_total_Amount","total$Amount","total-Amount","class"], correct: 1 },
      { text: "6. What will be the result of the expression 7 / 2 in Java?", options: ["3.5","3","4","1"], correct: 1 },
      { text: "7. What is the result of the expression 11 % 3 in Java?", options: ["3","2","1","0"], correct: 1 },
      { text: "8. Which operator is used to check if two primitive values are exactly equal in Java?", options: ["=","equals()","==","==="], correct: 2 },
      { text: "9. What is the effect of the prefix increment operator (++x) compared to the postfix increment operator (x++) when used inside an assignment expression like y = operator?", options: ["Prefix increments x after assigning its value to y","Postfix increments x before assigning its value to y","Prefix increments x first, then assigns the new value to y","They behave identically in all assignment expressions"], correct: 2 },
      { text: "10. Which statement regarding the switch control structure is TRUE?", options: ["It can only test expressions of type double","A break statement is strictly mandatory after every case label to compile","If a matching case does not contain a break, execution \"falls through\" to subsequent cases","The default case must always be placed at the very beginning"], correct: 2 },
      { text: "11. Which loop structure is guaranteed to execute its body at least once, regardless of the loop-continuation condition?", options: ["for loop","while loop","do...while loop","Enhanced for loop"], correct: 2 },
      { text: "12. What happens when a break statement is executed inside a nested loop?", options: ["It terminates the entire program execution","It skips the current iteration and jumps to the next iteration of that same loop","It terminates the innermost loop in which it appears","It breaks out of all nested loops simultaneously"], correct: 2 },
      { text: "13. What does the continue statement do when encountered inside a loop body?", options: ["It exits the loop immediately","It skips the remaining statements in the current iteration and evaluates the loop-continuation condition for the next cycle","It restarts the entire loop from the initial state values","It pauses program execution for a specified timeout"], correct: 1 },
      { text: "14. Which logical operator represents short-circuit evaluation for a logical AND operation?", options: ["&","&&","|","||"], correct: 1 },
      { text: "15. If a condition evaluates to true, which operator acts as a compact alternative to an if...else statement?", options: ["Bitwise assignment operator ^=","Ternary operator ?:","Instanceof operator instanceof","Cast operator ()"], correct: 1 },
      { text: "16. Which of the following is NOT a primitive data type in Java?", options: ["boolean","float","long","String"], correct: 3 },
      { text: "17. What is the size of an int primitive data type in Java?", options: ["8 bits","16 bits","32 bits","64 bits"], correct: 2 },
      { text: "18. Casting a double value to an int explicit value (e.g., (int) 5.9) results in:", options: ["Rounding up to 6","Truncation of the fractional part, resulting in 5","A compilation syntax error","A runtime ClassCastException"], correct: 1 },
      { text: "19. Which standard package is implicitly imported into every single Java program without writing an import statement?", options: ["java.util","java.io","java.lang","java.net"], correct: 2 },
      { text: "20. What is the primary purpose of the main method signature public static void main(String[] args)?", options: ["To instantiate a base database connection window","To act as the precise entry point for application execution by the JVM","To define global structural constants for a class file","To handle system garbage collection routines"], correct: 1 },
      { text: "21. How do you declare and allocate an array of 5 integers in Java?", options: ["int arr = new array(5);","int[] arr = new int[5];","int arr[5] = new int[];","array arr = new int[5];"], correct: 1 },
      { text: "22. What is the index number of the very last element in an array named values containing $N$ elements?", options: ["N","N + 1","N - 1","0"], correct: 2 },
      { text: "23. Attempting to access an index of -1 or an index equal to the array's length causes which runtime exception?", options: ["NullPointerException","ArrayIndexOutOfBoundsException","IllegalArgumentException","ClassCastException"], correct: 1 },
      { text: "24. Which field or method is used to determine the exact number of elements in a Java array named myArray?", options: ["myArray.length()","myArray.size()","myArray.length","myArray.capacity"], correct: 2 },
      { text: "25. The enhanced for statement (for-each loop) is explicitly designed to iterate through:", options: ["Only multidimensional arrays containing null values","Elements of an array or a collection sequentially without using counter indices","Any conditional block requiring backward steps","Variables declared strictly with the volatile modifier"], correct: 1 },
      { text: "26. When passing a primitive argument to a method in Java, the argument is passed by:", options: ["Reference","Value (a copy of the primitive value is passed)","Pointer","Dynamic binding reference"], correct: 1 },
      { text: "27. When passing an object reference to a method in Java, the reference itself is passed by:", options: ["Reference matrix","Value (a copy of the memory address reference is passed)","Virtual pointer clone","Constant stream"], correct: 1 },
      { text: "28. Method overloading occurs when two or more methods within the same class have:", options: ["The exact same name and same parameter list but different return types","The same name but different parameter lists (different number, type, or order of parameters)","Different names but identical parameter signatures","The final modifier applied to their declarations"], correct: 1 },
      { text: "29. What is a constructor's primary responsibility in a Java class structure?", options: ["To destroy old instances and reclaim memory allocation blocks","To initialize the instance variables of a newly created class object","To expose internal variables to external web clients directly","To compile bytecode dynamically during runtime execution"], correct: 1 },
      { text: "30. If a programmer does not write any constructor for a class, what does the Java compiler do?", options: ["It fails to compile the class with a syntax error","It implicitly provides a default, no-argument constructor that initializes instance variables to their default values","It creates a random constructor that requires string arguments","It marks all class fields as final constants"], correct: 1 },
      { text: "31. Which keyword is explicitly used to instantiate a new object of a class in Java?", options: ["class","this","new","super"], correct: 2 },
      { text: "32. What type of variable is declared inside a method body and can only be used within that specific method?", options: ["Instance variable","Static field","Local variable","Global class token"], correct: 2 },
      { text: "33. The this keyword inside a non-static method reference represents:", options: ["A reference to the parent class of the current object","An implicit reference to the current object whose method is being invoked","The absolute storage block address of the class structure","A static pointer to the main execution thread"], correct: 1 },
      { text: "34. A method declared with the static modifier can:", options: ["Access non-static instance variables of its class directly without an object reference","Be called directly using the class name without creating an instance of the class","Never accept primitive arguments","Be overridden by subclasses to demonstrate polymorphism"], correct: 1 },
      { text: "35. A static field (class variable) is shared among:", options: ["Only subclasses that declare an explicit copy","All instances/objects of that specific class","Methods contained within separate package structures only","No elements; it is recreated for each new constructor call"], correct: 1 },
      { text: "36. Which access modifier restricts visibility so that class members can only be accessed within the defining class itself?", options: ["public","protected","private","Default (package-private)"], correct: 2 },
      { text: "37. Which access modifier allows visibility to the defining class, its subclasses, and all other classes within the same package structure?", options: ["private","public","protected","Package-private only"], correct: 2 },
      { text: "38. What is the return type of a constructor in Java?", options: ["void","int","Object reference type","Constructors do not declare any return type, not even void"], correct: 3 },
      { text: "39. How can a constructor call another overloaded constructor within the exact same class?", options: ["Using the super() method call on the first line","Using the this() method call on the first line","By invoking the class name directly as a function","Overloaded constructors cannot call each other"], correct: 1 },
      { text: "40. A multi-dimensional array in Java (such as int[][] matrix) is fundamentally structured as:", options: ["A contiguous single flat block of memory disk bits","An array of arrays, where each row can potentially have a different length","A strictly uniform symmetric square grid governed by hardware constraints","A linked stack of reference nodes"], correct: 1 },
      { text: "41. Which keyword is used to create an inheritance relationship between a subclass and a superclass in Java?", options: ["implements","extends","inherits","instanceof"], correct: 1 },
      { text: "42. Java supports which model of class inheritance?", options: ["Multiple inheritance (a class can directly extend multiple parent classes)","Single inheritance (a class can directly extend only one parent class)","Triple interface hierarchy nesting","Dynamic runtime parent swapping"], correct: 1 },
      { text: "43. Every class in Java that does not explicitly extend another class automatically inherits from which base class?", options: ["java.lang.Class","java.lang.Object","java.lang.System","java.lang.Main"], correct: 1 },
      { text: "44. Which keyword is used by a subclass method to call a method or a constructor defined in its immediate superclass?", options: ["this","parent","super","base"], correct: 2 },
      { text: "45. Method overriding occurs when a subclass defines a method that has:", options: ["The same name but a completely different parameter signature than the superclass method","The exact same name, same parameter list, and same (or covariant) return type as a method in its superclass","The static modifier applied to hide the parent implementation","A more restrictive access modifier than the superclass method"], correct: 1 },
      { text: "46. If a class or a method is declared with the final modifier, it means:", options: ["The class cannot be instantiated, and the method cannot be called","The class cannot be extended (subclassed), and the method cannot be overridden","The class must be abstract, and the method must have no body","The class can only be utilized inside local loops"], correct: 1 },
      { text: "47. An abstract class in Java:", options: ["Can be fully instantiated using the new keyword anywhere","Cannot be instantiated directly; it is designed to act as a base superclass for other subclasses","Cannot contain any concrete methods with fully implemented bodies","Must declare all its instance fields as static variables"], correct: 1 },
      { text: "48. An abstract method in an abstract class:", options: ["Declares a full implementation body enclosed in curly braces {}","Consists of only a signature followed by a semicolon ; and must be overridden by concrete subclasses","Must be declared with the private access modifier","Is implicitly static by default"], correct: 1 },
      { text: "49. Polymorphism enables you to write programs that handle objects of different classes smoothly as long as they:", options: ["Are declared inside the same source code file","Share the same inheritance superclass hierarchy or implement the same interface","Contain exactly identical primitive instance fields","Use static variables for all execution returns"], correct: 1 },
      { text: "50. Consider the statement: SuperClass obj = new SubClass();. If obj.method() is invoked, which version of the method runs?", options: ["The SuperClass version of the method","The SubClass version of the method, determined at runtime via dynamic binding","A compilation error is thrown immediately","The method executes both versions in parallel threads"], correct: 1 },
      { text: "51. Which operator is used to test whether an object is an instance of a specific class or implements a specific interface?", options: ["==","equals","instanceof","cast"], correct: 2 },
      { text: "52. Downcasting an object reference explicitly (e.g., SubClass sub = (SubClass) superObj;) can trigger which runtime exception if the actual object is not of the target subclass type?", options: ["NullPointerException","ClassCastException","IllegalArgumentException","ArrayStoreException"], correct: 1 },
      { text: "53. A Java interface is a reference type that can contain:", options: ["Concrete instance variables with no restrictions","Only constants (public static final) and abstract method signatures (or default/static methods in newer versions)","Private non-static constructors","Code blocks for managing low-level garbage collection"], correct: 1 },
      { text: "54. Which keyword is used by a concrete class to implement a Java interface?", options: ["extends","implements","uses","imports"], correct: 1 },
      { text: "55. How many interfaces can a single Java class implement?", options: ["Only one","Exactly two","Zero; classes cannot implement interfaces","Multiple interfaces can be implemented by a single class"], correct: 3 },
      { text: "56. Can an interface extend another interface?", options: ["No, interfaces cannot use inheritance mechanics","Yes, an interface can extend one or more other interfaces using the extends keyword","Interfaces can only extend concrete abstract classes","Only if all contained methods are marked final"], correct: 1 },
      { text: "57. Declaring a reference variable of an interface type (e.g., MyInterface ref;) is:", options: ["A syntax error","Perfectly valid; it can store a reference to any object whose class implements that interface","Only allowed if the interface contains zero methods","Restricted to static execution contexts only"], correct: 1 },
      { text: "58. What is the default access modifier for all abstract methods declared inside a standard Java interface?", options: ["private","protected","public","Package-private"], correct: 2 },
      { text: "59. The @Override annotation is used to:", options: ["Compile code faster by skipping checks","Inform the compiler explicitly that a method is intended to override a superclass method, catching signature mismatches at compile time","Change private access modifiers to public during execution","Allocate extra space on the memory heap"], correct: 1 },
      { text: "60. Polymorphic method behavior relies heavily on which mechanism during runtime?", options: ["Static binding","Lexical tokenization","Dynamic (late) binding","Macro expansion"], correct: 2 },
      { text: "61. Which structural block in Java exception handling is used to enclose code that might throw an exception?", options: ["catch block","try block","finally block","throw statement"], correct: 1 },
      { text: "62. Multiple catch blocks associated with a single try block must be ordered so that:", options: ["Subclass exception types are caught before superclass exception types","Superclass exception types are caught before subclass exception types","They are sorted alphabetically by class name","The ordering has absolutely no effect on compilation"], correct: 0 },
      { text: "63. The finally block associated with a try-catch structure is guaranteed to execute:", options: ["Only if an exception occurs during the try block's execution","Only if no exceptions occur at all","Regardless of whether an exception is thrown or caught, making it ideal for resource cleanup","Only if the program exits normally via a return statement"], correct: 2 },
      { text: "64. Which keyword is explicitly used to generate and throw an exception object manually within a method body?", options: ["throws","throw","exception","raise"], correct: 1 },
      { text: "65. What is the difference between the keywords throw and throws?", options: ["They are identical and can be used interchangeably","throw is used to declare exceptions in a method header; throws instantiates the object","throw is used to explicitly clear exception histories; throws catches errors","throw is used to active-launch a specific exception; throws is used in a method header to declare checked exceptions"], correct: 3 },
      { text: "66. What is a \"checked exception\" in Java?", options: ["An exception that is checked by the JVM only after program termination","An exception extending RuntimeException that can be ignored during writing","An exception that the compiler forces the programmer to handle using a try-catch block or declare in a throws clause","An error caused by hardware connection failures"], correct: 2 },
      { text: "67. Which of the following is an example of an unchecked exception (inheriting from RuntimeException)?", options: ["IOException","SQLException","NullPointerException","ClassNotFoundException"], correct: 2 },
      { text: "68. The ultimate superclass for all objects that can be handled by the Java exception-handling mechanism is:", options: ["java.lang.Exception","java.lang.Throwable","java.lang.Error","java.lang.RuntimeException"], correct: 1 },
      { text: "69. What type of exception represents serious corporate problems (like OutOfMemoryError) that a standard application should generally not attempt to catch?", options: ["Checked Exception","Runtime Exception","java.lang.Error subclasses","User-defined exceptions"], correct: 2 },
      { text: "70. String objects in Java are \"immutable.\" This means that:", options: ["They cannot be initialized with literal strings","Once a String object is created, its contents cannot be modified or altered; any modification creates a brand new String object","They can only hold numerical characters","They are automatically deleted after a single print statement"], correct: 1 },
      { text: "71. Which method should be used to compare the literal characters of two String objects for equality?", options: ["==","equals()","compareTo() return value check","indexOf()"], correct: 1 },
      { text: "72. What does the expression \"Java\".charAt(2) evaluate to?", options: ["'J'","'a'","'v'","A syntax error"], correct: 1 },
      { text: "73. Which class should be preferred over standard String if your application requires heavy, frequent string concatenation operations inside loops within a single thread?", options: ["StringTokenizer","StringBuilder","Character","StringFormatter"], correct: 1 },
      { text: "74. What is the difference between StringBuilder and StringBuffer?", options: ["StringBuilder is thread-safe; StringBuffer is not","StringBuilder is not thread-safe but offers higher performance; StringBuffer is thread-safe (synchronized)","StringBuilder can only hold characters; StringBuffer handles bytes","They are completely identical in performance and structure"], correct: 1 },
      { text: "75. What does the String.length() method return?", options: ["The number of words in the string text","The total memory footprint of the string in bytes","The exact number of characters contained in the string object","The index position of the terminating character"], correct: 2 },
      { text: "76. What is the output of \"Hello \".trim()?", options: ["\"Hello\" (removes the trailing whitespace)","\"Hello \" (leaves it unaltered)","An empty string \"\"","A NullPointerException"], correct: 0 },
      { text: "77. The process of breaking a single long string down into smaller token substrings based on a delimiter character is called:", options: ["String concatenation","Tokenization","Regular matching","Formatting"], correct: 1 },
      { text: "78. Which method is used to locate the first occurrence of a specific character or substring within a String object, returning -1 if not found?", options: ["substring()","indexOf()","contains()","replace()"], correct: 1 },
      { text: "79. What does the expression \"Programming\".substring(3, 7) return?", options: ["\"gram\"","\"rogra\"","\"rogr\"","\"gramm\""], correct: 2 },
      { text: "80. In Java, string literals (like \"abc\") are managed efficiently using a specific memory area called the:", options: ["Garbage Collection stack","Constant String Pool","Register segment Matrix","Temporary byte buffer"], correct: 1 },
      { text: "81. Which library framework represents Java's newer, advanced set of GUI components designed to replace older Abstract Window Toolkit (AWT) structures?", options: ["JDBC","Swing (found in javax.swing)","POSIX","RMI"], correct: 1 },
      { text: "82. Swing components are often referred to as \"lightweight\" because:", options: ["They occupy zero bytes of storage space on the hard disk drive","They are written entirely in Java and do not rely directly on local platform peer components for rendering","They cannot display text images","They run exclusively on mobile processor chips"], correct: 1 },
      { text: "83. Which class acts as the foundational top-level window frame container used to display an application interface in Swing?", options: ["JPanel","JButton","JFrame","JLabel"], correct: 2 },
      { text: "84. What is the primary purpose of a JPanel component?", options: ["To act as a specialized text input area for large paragraphs","To serve as a sub-container area for organizing and grouping other GUI components","To display clickable system hyper-menus","To handle database SQL queries"], correct: 1 },
      { text: "85. Which Swing component is explicitly designed to display uneditable text or an image icon to a user?", options: ["JTextField","JLabel","JTextArea","JComboBox"], correct: 1 },
      { text: "86. Which Swing component allows a user to input a single line of plain text characters via the keyboard?", options: ["JLabel","JButton","JTextField","JList"], correct: 2 },
      { text: "87. Event-driven programming is a model where application execution flow is triggered by:", options: ["Sequential top-down line parsing by the compiler","User actions or occurrences such as mouse clicks, button presses, or key strokes","Periodic forced reboots of the underlying operating system","Clearing the constant string pool"], correct: 1 },
      { text: "88. An object that is notified whenever a specific GUI event occurs is formally called a(n):", options: ["Event source","Event listener","Event adapter","Event dispatcher"], correct: 1 },
      { text: "89. To handle a button click action (JButton), an event listener class must implement which specific interface?", options: ["MouseListener","KeyListener","ActionListener","WindowListener"], correct: 2 },
      { text: "90. Which method must be explicitly overridden by any class implementing the ActionListener interface?", options: ["mouseClicked(MouseEvent e)","actionPerformed(ActionEvent e)","handleEvent(Event e)","start()"], correct: 1 },
      { text: "91. Registering an event listener object onto a Swing GUI component like a button is achieved using which method format?", options: ["button.register(listener);","button.addActionListener(listener);","button.setListener(listener);","button.connect(listener);"], correct: 1 },
      { text: "92. What component or layout manager is responsible for automatically arranging components within a container area based on structural rules?", options: ["Event handler Matrix","Layout Manager","Frame controller","Swing context builder"], correct: 1 },
      { text: "93. Which layout manager arranges components into five distinct spatial regions: North, South, East, West, and Center?", options: ["FlowLayout","GridLayout","BorderLayout","BoxLayout"], correct: 2 },
      { text: "94. What is the default layout manager for a standard JFrame content pane?", options: ["FlowLayout","BorderLayout","GridLayout","GridBagLayout"], correct: 1 },
      { text: "95. Which layout manager arranges components sequentially from left to right, wrapping lines when space runs out, and serves as the default manager for a JPanel?", options: ["BorderLayout","FlowLayout","GridLayout","BoxLayout"], correct: 1 },
      { text: "96. Which layout manager divides a container area into an exact grid of uniform rows and columns where every cell is given identical size?", options: ["BoxLayout","FlowLayout","GridLayout","BorderLayout"], correct: 2 },
      { text: "97. What method must be invoked on a JFrame object to make it physically appear visible on a user's display monitor?", options: ["frame.showWindow();","frame.setVisible(true);","frame.display(1);","frame.init();"], correct: 1 },
      { text: "98. What argument is passed to JFrame.setDefaultCloseOperation() to ensure the entire application stops running completely when the user clicks the window's close (X) button?", options: ["JFrame.HIDE_ON_CLOSE","JFrame.EXIT_ON_CLOSE","JFrame.DISPOSE_ON_CLOSE","JFrame.DO_NOTHING_ON_CLOSE"], correct: 1, explanation: "JFrame.EXIT_ON_CLOSE stops the application when the user closes the window." },
      { text: "99. A class defined entirely inside the body of another enclosing class is called a(n):", options: ["Outer class","Inner class / Nested class","Superclass","Abstract package layout"], correct: 1 },
  {
    text: "100. Anonymous inner classes are commonly used in GUI programming because they allow you to:",
    options: [
      "Conceal the source code identity from database access filters",
      "Declare and instantiate an event listener class simultaneously on the spot where it is needed without giving it a formal name",
      "Avoid declaring methods entirely",
      "Run interface layouts without any underlying JVM structures"
    ],
    correct: 1
  },
  {
    text: "101. According to software engineering history, which issue was a primary driver of the Software Crisis?",
    options: [
      "The complete lack of high-level programming languages",
      "The rapid decline in hardware processing speeds",
      "Difficulty in representing real-life entities, ensuring module reusability, managing time schedules, and reducing software costs",
      "The introduction of open-source licenses"
    ],
    correct: 2
  },
  {
    text: "102. What is the fundamental path of Software Evolution leading up to Object-Oriented Programming?",
    options: [
      "Object-Oriented → Procedure-Oriented → Assembly → Machine Efficiency",
      "Machine-language → Assembly-language → Procedure-Oriented → Object-Oriented",
      "Monolithic Frameworks → Relational Schemas → Functional Matrices",
      "Component-Based Architecture → Logic Gates → Macro Blocks"
    ],
    correct: 1
  },
  {
    text: "103. In traditional Procedure-Oriented Programming (such as classic C), what is the main focus of the program design?",
    options: [
      "Data security and hiding",
      "Objects and their relationships",
      "Doing things (algorithms and executing list of instructions)",
      "Inheriting interfaces"
    ],
    correct: 2
  },
  {
    text: "104. Which of the following is a core characteristic of Procedure-Oriented Programming?",
    options: [
      "Large programs are divided into smaller programs known as functions",
      "Data is tied closely to the functions and completely hidden from external access",
      "It employs a bottom-up design approach",
      "Objects communicate with each other through message passing"
    ],
    correct: 0
  },
  {
    text: "105. How is data handled in a Procedure-Oriented Programming paradigm?",
    options: [
      "Data is local to every block and fully protected",
      "Most functions share global data, allowing data to move openly around the system from function to function",
      "Data can only be modified through public accessor methods",
      "Data is encapsulated within class parameters"
    ],
    correct: 1
  },
  {
    text: "106. Object-Oriented Programming decomposes a problem domain into entities called:",
    options: ["Functions", "Procedures", "Objects", "Modules"],
    correct: 2
  },
  {
    text: "107. Which design approach does Object-Oriented Programming (OOP) follow?",
    options: [
      "Top-down approach",
      "Bottom-up approach",
      "Linear sequential approach",
      "Dynamic random access approach"
    ],
    correct: 1
  },
  {
    text: "108. In OOP, what binds data and the functions that operate on that data safely together?",
    options: [
      "A global matrix loop",
      "An Object",
      "A Pointer variable",
      "An Assembly directive"
    ],
    correct: 1
  },
  {
    text: "109. The principle of insulation that prevents data from being accessed directly by outside code is called:",
    options: ["Data Hiding / Encapsulation", "Inheritance", "Polymorphism", "Dynamic Overriding"],
    correct: 0
  },
  {
    text: "110. Which of the following is an explicit benefit of Object-Oriented Programming?",
    options: [
      "It eliminates the need for compiling source code",
      "Through inheritance, we can eliminate redundant code and extend the use of existing classes",
      "It reduces program memory usage to zero bits",
      "It converts programs automatically into physical database tables"
    ],
    correct: 1
  },
  {
    text: "111. What OOP feature enables secure programs that cannot be invaded by other code?",
    options: ["Dynamic Binding", "Message Passing", "Data Hiding", "Operator Overloading"],
    correct: 2
  },
  {
    text: "112. The process of mapping real-world objects to program structure is simplified in OOP because:",
    options: [
      "Objects in code can directly model real-world entities",
      "Functions are executed globally",
      "Data is completely separated from structural logic",
      "Subclasses must always be abstract"
    ],
    correct: 0
  },
  {
    text: "113. Which technique is used for communication between separate objects in OOP?",
    options: [
      "Direct memory address writing",
      "Global variable sharing",
      "Message passing",
      "File system pipelining"
    ],
    correct: 2
  },
  {
    text: "114. An object is fundamentally considered a(n):",
    options: [
      "Runtime instance of a class",
      "Abstract functional algorithm",
      "Compile-time macro definition",
      "Static database constraint query"
    ],
    correct: 0
  },
  {
    text: "115. What does a class define for a collection of similar objects?",
    options: [
      "Only the memory location addresses",
      "The entire template, blueprint, data attributes, and methods",
      "The execution time limit configuration",
      "The interface network protocols"
    ],
    correct: 1
  },
  {
    text: "116. The wrapping up of data and methods into a single unit is known as:",
    options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
    correct: 1
  },
  {
    text: "117. Representing essential features without low-level details is called:",
    options: ["Cohesion", "Coupling", "Abstraction", "Overloading"],
    correct: 2
  },
  {
    text: "118. The process by which objects acquire properties of another class is called:",
    options: ["Polymorphism", "Encapsulation", "Inheritance", "Aggregation"],
    correct: 2
  },
 {
  text: "119. Polymorphism can be best described as:",
  options: [
    "A variable storing multiple data types",
    "An operation taking different forms depending on object",
    "Forcing all classes to inherit one base class",
    "Preventing modification of fields"
  ],
  correct: 1
},
{
  text: "120. The mechanism where method binding happens at runtime is called:",
  options: [
    "Static Binding",
    "Dynamic (Late) Binding",
    "Compile-time tokenization",
    "Early macro optimization"
  ],
  correct: 1
},
  {
    text: "121. Why is Java considered a highly platform-independent language?",
    options: [
      "It writes source code directly to native machine assembly language strings",
      "Java source code compiles into bytecode that runs on JVM",
      "It does not require memory allocation routines",
      "It relies only on web browsers"
    ],
    correct: 1
  },
  {
    text: "122. Which tool compiles Java source code (.java) into bytecode (.class)?",
    options: ["java", "javac", "javadoc", "jar"],
    correct: 1
  },
  {
    text: "123. What is the Java Virtual Machine (JVM)?",
    options: [
      "A physical hardware chip",
      "An engine that executes Java bytecode",
      "A text editor",
      "A database driver"
    ],
    correct: 1
  },
  {
    text: "124. Java bytecode is executed by:",
    options: [
      "CPU directly",
      "Java Virtual Machine",
      "Operating system kernel",
      "Web server"
    ],
    correct: 1
  },
  {
    text: "125. Java memory management uses:",
    options: [
      "Manual memory deallocation",
      "Garbage collection",
      "Only CPU registers",
      "No heap usage"
    ],
    correct: 1
  },
  {
    text: "126. WORA stands for:",
    options: [
      "Write Once, Run Anywhere",
      "Windows Operations Registry Architecture",
      "Work Order Resource Access",
      "Web Object Rational Array"
    ],
    correct: 0
  },
  {
    text: "127. Component with JVM but no compiler is:",
    options: ["JDK", "JRE", "API", "IDE"],
    correct: 1
  },
  {
    text: "128. To compile and run Java programs you need:",
    options: ["Only JRE", "JDK", "Web container", "Hardware card"],
    correct: 1
  },
  {
    text: "129. Java was developed at:",
    options: ["Microsoft", "Sun Microsystems", "IBM", "Apple"],
    correct: 1
  },
  {
    text: "130. Java original project name was:",
    options: ["Oak", "C++ Plus", "Basic Script", "NetBeans"],
    correct: 0
  },
  {
    text: "131. Which statement about Java comments is TRUE?",
    options: [
      "Multi-line uses //",
      "Javadoc comments generate documentation",
      "Comments become bytecode",
      "Uses # symbol"
    ],
    correct: 1
  },
  {
    text: "132. Java application must contain:",
    options: ["start()", "init()", "main()", "execute()"],
    correct: 2
  },
  {
    text: "133. Correct main method signature:",
    options: [
      "public void main(String args)",
      "private static void main(String[] args)",
      "public static void main(String[] args)",
      "public static int main(String[] matrix)"
    ],
    correct: 2
  },
  {
    text: "134. static keyword means:",
    options: [
      "Must create 10 objects first",
      "Belongs to class not object",
      "Cannot take parameters",
      "Cannot be cached"
    ],
    correct: 1
  },
  {
    text: "135. System.out.println() is used to:",
    options: [
      "Read keyboard input",
      "Print output with newline",
      "Stop program",
      "Clear screen"
    ],
    correct: 1
  },
  {
    text: "136. Java is strongly typed because:",
    options: [
      "Every variable has a type",
      "Only strings allowed",
      "Only 2 methods allowed",
      "All data becomes text"
    ],
    correct: 0
  },
  {
    text: "137. NOT a primitive type:",
    options: ["int", "boolean", "double", "String"],
    correct: 3
  },
  {
    text: "138. Boolean type is:",
    options: ["int", "char", "boolean", "float"],
    correct: 2
  },
  {
    text: "39. char size in Java is:",
    options: ["8 bits", "16 bits", "32 bits", "64 bits"],
    correct: 1
  },
  {
    text: "140. Variable inside method is:",
    options: ["Instance field", "Class attribute", "Local variable", "Global constant"],
    correct: 2
  },
  {
    text: "141. A class is a:",
    options: [
      "Array index",
      "Blueprint for objects",
      "File tool",
      "Hardware register"
    ],
    correct: 1
  },
  {
    text: "142. Class variables outside methods are:",
    options: [
      "Local parameters",
      "Instance variables",
      "Registers",
      "Static arguments"
    ],
    correct: 1
  },
  {
    text: "143. Keyword to create object:",
    options: ["class", "extends", "new", "this"],
    correct: 2
  },
  {
    text: "44. Object access operator:",
    options: ["->", "::", ".", "&"],
    correct: 2
  },
  {
    text: "145. Constructor is:",
    options: [
      "Memory remover",
      "Initializer of object",
      "Compiler tool",
      "Interface builder"
    ],
    correct: 1
  },
  {
    text: "146. Constructors:",
    options: [
      "Must return void",
      "Same name as class, no return type",
      "Only one allowed",
      "Called manually with this"
    ],
    correct: 1
  },
  {
    text: "147. If no constructor:",
    options: [
      "Compile error",
      "Default constructor created",
      "Becomes abstract",
      "Random values assigned"
    ],
    correct: 1
  },
  {
    text: "148. Method overloading:",
    options: [
      "Same name in parent/child",
      "Same name, different parameters",
      "Too many lines",
      "Multiple return values"
    ],
    correct: 1
  },
  {
    text: "149. Overloading resolved at:",
    options: ["Runtime", "Compile-time", "Deployment", "Database"],
    correct: 1
  },
  {
    text: "150. Method signature includes:",
    options: [
      "Name, return type, modifiers",
      "Parameter types and order",
      "Local variables",
      "File path"
    ],
    correct: 1
  },
  {
    text: "151. Keyword for current object:",
    options: ["super", "this", "parent", "self"],
    correct: 1
  },
  {
    text: "152. Constructor chaining uses:",
    options: ["method()", "this()", "super()", "none"],
    correct: 1
  },
  {
    text: "153. Private means:",
    options: ["public access", "package access", "class only access", "global access"],
    correct: 2
  },
  {
    text: "154. Why use private fields?",
    options: [
      "Faster execution",
      "Encapsulation protection",
      "Constant conversion",
      "Garbage collection"
    ],
    correct: 1
  },
  {
    text: "155. Getters and setters are:",
    options: [
      "Constructors",
      "Accessors and mutators",
      "Static blocks",
      "Overriders"
    ],
    correct: 1
  },
  {
    text: "156. Primitive passing is:",
    options: [
      "By reference",
      "By value",
      "Null exception",
      "Pointer cast"
    ],
    correct: 1
  },
  {
    text: "157. Object reference passing sends:",
    options: [
      "Full object copy",
      "Reference address copy",
      "Class layout",
      "String only"
    ],
    correct: 1
  },
  {
    text: "158. Constant variable keyword:",
    options: ["static", "constant", "final", "abstract"],
    correct: 2
  },
  {
    text: "159. Private constructor prevents:",
    options: [
      "Inheritance",
      "Object creation using new",
      "Static method use",
      "Compilation"
    ],
    correct: 1
  },
  {
    text: "160. Package is:",
    options: [
      "Compressed file",
      "Namespace grouping classes",
      "CPU memory block",
      "Method type"
    ],
    correct: 1
  },
  {
    text: "161. Inheritance keyword:",
    options: ["implements", "extends", "inherits", "instanceof"],
    correct: 1
  },
  {
    text: "162. Java supports:",
    options: [
      "Multiple inheritance",
      "Single inheritance",
      "Triple inheritance",
      "Dynamic inheritance"
    ],
    correct: 1
  },
  {
    text: "163. Default parent class:",
    options: [
      "System",
      "Class",
      "Object",
      "Main"
    ],
    correct: 2
  },
  {
    text: "164. Protected allows:",
    options: ["private only", "package + subclass", "public only", "none"],
    correct: 1
  },
  {
    text: "165. Method overriding:",
    options: [
      "Same name different loop",
      "Same signature in subclass",
      "Same name different parameters",
      "Abstract forcing"
    ],
    correct: 1
  },
  {
    text: "166. Parent access keyword:",
    options: ["this", "super", "parent", "base"],
    correct: 1
  },
  {
    text: "167. If super() not written:",
    options: [
      "Compile error",
      "Auto calls default constructor",
      "Fields uninitialized",
      "Skips constructor"
    ],
    correct: 1
  },
  {
    text: "168. final class means:",
    options: [
      "No objects",
      "Cannot be extended",
      "All abstract",
      "Only static variables"
    ],
    correct: 1
  },
  {
    text: "169. final method means:",
    options: [
      "Not callable",
      "Not overloaded",
      "Not overridden",
      "Not compiled"
    ],
    correct: 2
  },
  {
    text: "170. Abstract class:",
    options: [
      "Cannot be instantiated",
      "Only abstract methods",
      "Browser class",
      "No fields"
    ],
    correct: 0
  },
  {
    text: "171. Abstract method:",
    options: [
      "Has body",
      "Ends with semicolon",
      "Private method",
      "Static block"
    ],
    correct: 1
  },
  {
    text: "172. Subclass of abstract class must:",
    options: [
      "Make constants",
      "Implement abstract methods",
      "Private constructor",
      "No methods"
    ],
    correct: 1
  },
  {
    text: "173. Abstract class can have:",
    options: [
      "No methods",
      "Only abstract",
      "Both abstract and concrete",
      "Only static"
    ],
    correct: 2
  },
  {
    text: "174. Polymorphism call executes:",
    options: [
      "Parent method",
      "Child method",
      "Error",
      "Both threads"
    ],
    correct: 1
  },
  {
    text: "175. Compile vs runtime type:",
    options: [
      "Dog/Animal",
      "Animal/Dog",
      "Animal/Animal",
      "Dog/Dog"
    ],
    correct: 1
  },
  {
    text: "176. instanceof operator:",
    options: ["==", "equals", "instanceof", "cast"],
    correct: 2
  },
  {
    text: "177. Wrong cast throws:",
    options: [
      "NullPointerException",
      "ArrayIndexOutOfBounds",
      "ClassCastException",
      "IllegalArgumentException"
    ],
    correct: 2
  },
  {
    text: "178. Interface is:",
    options: [
      "Concrete class",
      "Behavior contract",
      "Database schema",
      "Memory tracker"
    ],
    correct: 1
  },
  {
  text: "179. Interface keyword:",
  options: ["extends", "implements", "uses", "requires"],
  correct: 1
},
{
  text: "180. A class can implement:",
  options: ["One interface", "Three interfaces", "None", "Multiple interfaces"],
  correct: 3
},
{
  text: "181. Declare int array of size 10:",
  options: [
    "int arr[10];",
    "int[] arr = new int[10];",
    "array arr = new int(10);",
    "int arr = new array[10];"
  ],
  correct: 1
},
{
  text: "182. First array index:",
  options: ["-1", "0", "1", "system dependent"],
  correct: 1
},
{
  text: "183. Array length property:",
  options: ["size()", "length", "capacity", "length()"],
  correct: 1
},
{
  text: "184. Out of bounds error:",
  options: [
    "NullPointerException",
    "ArrayIndexOutOfBoundsException",
    "ClassCastException",
    "NumberFormatException"
  ],
  correct: 1
},
{
  text: "185. String immutability means:",
  options: [
    "Cannot initialize",
    "Cannot change after creation",
    "Only numbers",
    "Auto deleted"
  ],
  correct: 1
},
{
  text: "186. Compare strings:",
  options: ["==", "equals()", "compareTo()", "equalsIgnoreCase()"],
  correct: 1
},
{
  text: "187. charAt(3) returns:",
  options: ["I", "n", "o", "f"],
  correct: 2
},
{
  text: "188. String pool is:",
  options: ["Stack", "Constant pool", "CPU registers", "Disk cache"],
  correct: 1
},
{
  text: "189. Mutable string class:",
  options: ["StringTokenizer", "StringBuilder", "StringFormatter", "CharacterArray"],
  correct: 1
},
{
  text: "190. Exception handling is for:",
  options: ["Speed up code", "Handle runtime errors", "Fix syntax errors", "Encrypt data"],
  correct: 1
},
{
  text: "191. Code that may throw exception:",
  options: ["catch", "try", "finally", "throw"],
  correct: 1
},
{
  text: "192. Always executes block:",
  options: ["try", "catch", "finally", "throws"],
  correct: 2
},
{
  text: "193. Manually throw exception:",
  options: ["throws", "throw", "exception", "raise"],
  correct: 1
},
{
  text: "194. throw vs throws:",
  options: [
    "Same",
    "throw creates exception, throws declares",
    "throw catches error",
    "throw is variable"
  ],
  correct: 1
},
{
  text: "195. Runtime exceptions are:",
  options: ["Checked", "Unchecked", "Errors", "Warnings"],
  correct: 1
},
{
  text: "196. Unchecked exception example:",
  options: [
    "IOException",
    "SQLException",
    "NullPointerException",
    "FileNotFoundException"
  ],
  correct: 2
},
{
  text: "197. Severe system failure class:",
  options: ["Checked", "Runtime", "Error", "User exception"],
  correct: 2
},
{
  text: "198. Root exception class:",
  options: ["Exception", "Throwable", "RuntimeException", "Error"],
  correct: 1
},
{
  text: "199. substring(1,4) returns:",
  options: ["Obj", "bje", "bjec", "ject"],
  correct: 1
},
{
  text: "200. String length method:",
  options: ["length", "size()", "length()", "capacity"],
  correct: 2
}
    ]
  }
};
window.examData = examData;

document.addEventListener('DOMContentLoaded', () => {

  // ===================== ELEMENTS =====================
  const studentPage = document.getElementById('studentPage');
  const examPage = document.getElementById('examPage');

  const studentName = document.getElementById('studentName');
  const studentId = document.getElementById('studentId');
  const okBtn = document.getElementById('okBtn');

  const courseSelect = document.getElementById('courseSelect');
  const questionsContainer = document.getElementById('questions');

  const startBtn = document.getElementById('startBtn');
  const examContainer = document.getElementById('examContainer');
  const startPage = document.getElementById('startPage');

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');

  const questionCounter = document.getElementById('questionCounter');
  const resultBox = document.getElementById('resultBox');

  const backBtn = document.getElementById('backBtn');
  const navButtons = document.querySelector('.nav-buttons');
  const resultActions = document.querySelector('.result-actions');

  // ===================== STATE =====================
  let currentQuestionIndex = 0;
  let totalQuestions = 0;
  let reviewMode = false;

  courseSelect.value = "Database Management System";
  startBtn.disabled = true;

  // ===================== SLIDE 1: STUDENT CHECK =====================
  okBtn.addEventListener('click', () => {
    if (!studentName.value || !studentId.value) {
      alert("Please enter Name and ID");
      return;
    }

    studentName.disabled = true;
    studentId.disabled = true;
    okBtn.textContent = "Verified ✔";
    startBtn.disabled = false;

    studentPage.classList.add('hidden');
    examPage.classList.remove('hidden');
  });

  // ===================== QUESTION RENDER =====================
  function renderQuestions(courseKey) {
    const course = examData[courseKey];
    if (!course) return;

    questionsContainer.innerHTML = '';
    currentQuestionIndex = 0;

    course.questions.forEach((q, i) => {
      const card = document.createElement('div');
      card.className = 'question-card hidden';

      const title = document.createElement('h2');
      title.textContent = q.text;

      const answers = document.createElement('div');
      answers.className = 'answers';

      q.options.forEach((opt, j) => {
        const label = document.createElement('label');
        label.className = 'answer-option';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question-${i}`;
        input.value = j;

        label.appendChild(input);
        label.appendChild(document.createTextNode(opt));
        answers.appendChild(label);
      });

      const result = document.createElement('div');
      result.className = 'q-result';

      const explanation = document.createElement('div');
      explanation.className = 'explanation hidden';

      card.appendChild(title);
      card.appendChild(answers);
      card.appendChild(result);
      card.appendChild(explanation);

      questionsContainer.appendChild(card);
    });

    totalQuestions = course.questions.length;
    showQuestion(0);
  }

  // ===================== NAVIGATION =====================
  function showQuestion(index) {
    const cards = document.getElementsByClassName('question-card');
    if (!cards.length) return;

    if (index < 0) index = 0;
    if (index >= cards.length) index = cards.length - 1;

    currentQuestionIndex = index;

    Array.from(cards).forEach((c, i) => {
      c.classList.toggle('hidden', i !== index);
    });

    questionCounter.textContent =
      `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === totalQuestions - 1;
  }

  // ===================== START EXAM =====================
  function startExam() {
    startPage.classList.add('hidden');
    examContainer.classList.remove('hidden');
    renderQuestions(courseSelect.value);
  }

  // ===================== SCORE =====================
  function calculateScore(courseKey) {
    const course = examData[courseKey];
    let score = 0;

    course.questions.forEach((q, i) => {
      const selected = document.querySelector(
        `input[name="question-${i}"]:checked`
      );
      if (selected && +selected.value === q.correct) {
        score++;
      }
    });

    return score;
  }

  // ===================== RESULT DASHBOARD =====================
  function showResult(score, total) {
    const percent = Math.round((score / total) * 100);

    let status = "Keep practicing!";
    if (percent >= 80) status = "Excellent 🎉";
    else if (percent >= 50) status = "Good 👍";

    resultBox.innerHTML = `
      <h2> Result</h2>
      <p><b>Score:</b> ${score} / ${total}</p>
      <p><b>Percentage:</b> ${percent}%</p>
      <p><b>Status:</b> ${status}</p>
    `;
  }

  // ===================== REVIEW MODE =====================
  function enableReviewMode() {
    const course = examData[courseSelect.value];
    const cards = document.getElementsByClassName('question-card');

    reviewMode = true;

    Array.from(cards).forEach((card, i) => {

      const inputs = document.getElementsByName(`question-${i}`);
      const selected = document.querySelector(`input[name="question-${i}"]:checked`);
      const correctIndex = course.questions[i].correct;

      const resultEl = card.querySelector('.q-result');
      const explanation = card.querySelector('.explanation');

      inputs.forEach(inp => inp.disabled = true);

      const correctInput = Array.from(inputs).find(
        inp => +inp.value === correctIndex
      );

      if (selected && +selected.value === correctIndex) {
        selected.parentNode.classList.add('correct');
        resultEl.textContent = "Correct";
      } else {
        if (selected) selected.parentNode.classList.add('incorrect');
        if (correctInput) correctInput.parentNode.classList.add('correct');
        resultEl.textContent = "Incorrect";
      }

      explanation.innerHTML =
        `Correct Answer: <b>${course.questions[i].options[correctIndex]}</b>`;
      explanation.classList.remove('hidden');

      card.classList.add('hidden');
    });

    currentQuestionIndex = 0;
    cards[0].classList.remove('hidden');

    navButtons.classList.remove('hidden');
    resultActions.classList.remove('hidden');
  }

  // ===================== EVENTS =====================
  startBtn.addEventListener('click', startExam);

  prevBtn.addEventListener('click', () =>
    showQuestion(currentQuestionIndex - 1)
  );

  nextBtn.addEventListener('click', () =>
    showQuestion(currentQuestionIndex + 1)
  );

  submitBtn.addEventListener('click', () => {
    const courseKey = courseSelect.value;
    const total = examData[courseKey].questions.length;
    const score = calculateScore(courseKey);

    showResult(score, total);
    enableReviewMode();
  });

  backBtn.addEventListener('click', () => {
    location.reload(); // FULL RESTART CLEAN
  });

});