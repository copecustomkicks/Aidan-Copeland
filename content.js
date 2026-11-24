// ─────────────────────────────────────────────────────────────
// AIDAN COPELAND — PORTFOLIO CONTENT
// Every word and image on the site comes from this file.
//
// Placeholders: any string wrapped in [square brackets] renders as a
// dashed "to add" block on the site. Replace it with real text.
// Images: set `src` / `image` / `cover` to a path like "media/cope/hero.jpg".
// null = striped placeholder panel showing the `label` hint.
// To add a project: copy a record in `projects`, give it a new slug,
// and (optionally) reference its slug in `related`, `connections`, `timeline`.
// ─────────────────────────────────────────────────────────────

export default {
  site: {
    name: "Aidan Copeland",
    firstName: "Aidan",
    headline: ["Built from", "curiosity."],
    intro: "I'm Aidan — an engineer, entrepreneur, and creator exploring the intersection of design, technology, and business.",
    portrait: "media/aidan-portrait.jpg",
    email: "aidan.copeland.21@gmail.com",
    phone: "203-638-4815",
    resume: "docs/aidan-copeland-resume.pdf",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/aidan-copeland/" },
      { label: "GitHub", href: "https://github.com/copecustomkicks" },
      { label: "Cope Custom Kicks", href: "https://cope-customs.vercel.app/" },
      { label: "TeamSplit on the App Store", href: "https://apps.apple.com/us/app/teamsplit-pay/id6805079472" },
      { label: "Instagram", href: "https://www.instagram.com/aidan.copeland.21/" },
      { label: "TikTok", href: "https://www.tiktok.com/@aidan.cope.21" },

      { label: "Résumé (PDF)", href: "docs/aidan-copeland-resume.pdf" },
    ],
    facts: [
      { label: "Education", value: "B.S. Mechanical Engineering, Certificate in A.I. · University of Florida · May 2027" },
      { label: "Experience", value: "L'Oréal · Huupe · Cuso's · MJ Daly" },
      { label: "Ventures", value: "Cope Custom Kicks · TeamSplit" },
      { label: "Looking for", value: "AI consulting, AI solutions, and footwear product development roles" },
    ],
  },

  about: {
    headline: "Engineer, entrepreneur, athlete.",
    bio: [
      "My path started with a pair of sneakers and a set of paints in 8th grade. Customizing shoes became my first creative outlet and my first business, and it left me with questions: how are shoes actually constructed, why are they made the way they are, and what does it take to bring a product to market?",
      "Those questions led me to mechanical engineering at the University of Florida, to product development at L'Oréal and Huupe, and to building software of my own. Building TeamSplit taught me how much AI can do for one person. Now I'm applying that to businesses: finding the bottlenecks in how a team works and building AI workflows that remove them.",
      "Outside of work, I love sports. I played basketball through high school and had a few offers from smaller schools, but chose to study engineering at UF. I started as a student manager for the UF Women's Basketball team my freshman year and have been a practice player for the past 3 years. Practices and game days change quickly, and plans shift with little notice, so it taught me to stay calm and adapt when things are fast-moving or unclear. I also played baseball and football growing up, and I'm a huge sports fan in general... especially Boston sports!",
    ],
    approach: [
      { title: "Validate the problem first", text: "TeamSplit taught me this. I skipped most of the market research and problem validation, and it showed when it came time to sell people on the idea. Now I check that a problem is a real pain point before I build." },
      { title: "Look from several angles", text: "Design, engineering and business each see a problem differently. I try to use all 3." },
      { title: "Make it tangible", text: "A painted shoe, a tech pack, a dashboard, an app. Building something is how I find out what I don't know yet." },
    ],
    education: [{ school: "University of Florida", program: "B.S. Mechanical Engineering · Certificate in A.I.", dates: "Graduating May 2027" }],
    nowExploring: [
      "AI solutions and workflows that streamline how businesses operate",
      "AI consulting: finding bottlenecks and automating them",
      "Footwear materials, manufacturing and construction for my senior research",
    ],
    interests: "Basketball above all: UF Women's Basketball practice player for 3 years, after starting as a student manager. Baseball growing up, football now, and pretty much every sport.",
    photos: [
      { label: "Aidan at UF", src: "media/about-suit.jpg" },
      { label: "Aidan with a basketball", src: "media/about-basketball.jpg" },
      { label: "Aidan in Iceland", src: "media/about-iceland.jpg" },
    ],
  },

  themes: [
    { id: "create", label: "Create", hue: 30, blurb: "Where it started: designing and hand-painting sneakers for real customers." },
    { id: "engineer", label: "Engineer", hue: 230, blurb: "Learning how products are designed, built and tested, from CAD to footwear construction." },
    { id: "build", label: "Build", hue: 150, blurb: "Starting things from nothing, from a sneaker business to an app on the App Store." },
    { id: "innovate", label: "Innovate", hue: 310, blurb: "Using product development and AI to solve problems for real companies." },
  ],

  projects: [
    {
      slug: "cope-custom-kicks", title: "Cope Custom Kicks", kind: "Personal venture",
      themes: ["create", "build"], featured: true,
      short: "Hand-painted custom sneakers since 2019 — 50+ pairs and my first business.",
      intro: "I started customizing sneakers in 2019, in 8th grade. It became my first creative outlet and my first business, and it's still running.",
      meta: { Role: "Founder & artist", Dates: "June 2019 – present", Status: "Active" },
      cover: "media/cck-collage.png", coverLabel: "Collage of custom pairs",
      sections: {
        Context: "Every pair starts as a blank shoe, usually white. What began as a creative interest turned into my first experience of making something people wanted and delivering it to them.",
        Process: "First I prep the surface. Leather gets sanded and wiped down with acetone; on canvas I thin the paint so it bonds to the fabric. Then I tape off the sole and any panels that shouldn't get paint, and cut stencils when a design needs them. I paint with an airbrush using Angelus and Liquid Kicks paints, heat-set the paint with a heat gun, and finish with a UV-, scratch- and water-resistant sealer.",
        "My Role": "Everything: design, mock-ups, prep, painting, sealing, pricing and customer communication. Customers come through word of mouth, friends and family, and outreach to athletes and public figures, some of whom I've made pairs for free.",
        Result: "50+ custom pairs for clients nationwide. A profitable business with 54% annual price growth.",
        "What I Learned": "This is where my interest in how products are designed, made and sold began. It led directly to mechanical engineering and to footwear product development.",
      },
      gallery: [
        { label: "Air Jordan 1 Low — UF Florida", src: "media/cck/rhyne.jpg" }, { label: "Air Jordan 3 cleats — Gators #11", src: "media/cck/cleats.jpg" },
        { label: "Air Jordan 4 — Louis Vuitton monogram", src: "media/cck/louisvuitton.jpg" }, { label: "Vans slip-on — Rocky", src: "media/cck/rocky.jpg" },
        { label: "Kyrie 7 — galaxy", src: "media/cck/dims.jpg" }, { label: "Air Jordan 1 Low — DTX", src: "media/cck/dtx.jpg" },
        { label: "Vans slip-on — Chupa Chups", src: "media/cck/chupachups.jpg" }, { label: "Tim Tebow Foundation", src: "media/cck/tebow.jpg" },
        { label: "Fleetwood Mac", src: "media/cck/fleetwood.jpg" }, { label: "Jordan Tatum 1 — Brown #10", src: "media/cck/willyrich.jpg" },
        { label: "Vans Old Skool — paw print camo", src: "media/cck/puppy.jpg" }, { label: "Holiday flannel patchwork", src: "media/cck/christmas.jpg" },
        { label: "Air Jordan 1 Low — detail", src: "media/cck/rhyne2.jpg" },
      ],
      documents: [],
      site: { kicker: "The full collection", title: "See every pair at Cope Custom Kicks", text: "Browse the complete portfolio and request a custom pair of your own.", cta: "Visit the website", href: "https://cope-customs.vercel.app/" },
      links: [{ label: "Cope Custom Kicks website", href: "https://cope-customs.vercel.app/" }, { label: "@cope_custom_kicks on Instagram", href: "https://www.instagram.com/cope_custom_kicks/" }],
      related: ["footwear-research", "mechanical-engineering", "teamsplit"],
    },
    {
      slug: "footwear-research", title: "Footwear Product Development", kind: "Coursework & research",
      themes: ["engineer", "create"], featured: true,
      short: "A reverse tech pack of the Air Force 1 Low, and senior research into how sneakers are made.",
      intro: "Customizing sneakers showed me the outside of a shoe. This work is about the inside: how footwear is constructed, which materials are chosen and why, and how a design gets communicated to a factory.",
      meta: { Type: "Original coursework · Senior research", Course: "Footwear Product Development", Tools: "Canva" },
      cover: "docs/reverse-tech-pack.pdf", coverLabel: "Air Force 1 Low reverse tech pack",
      sections: {
        Context: "I made the Air Force 1 Low reverse tech pack for a footwear product development course taught by Elizabeth Brock-Jones through Lasell University. All of the work is my own.",
        Process: "Deconstructing the shoe meant documenting every component and how it attaches to the next, then writing the construction callouts a factory would need to build it.",
        "What I Learned": "It gave me an understanding of each component of a shoe, how they come together, and how important construction callouts are to the overall design process.",
        "Senior Research": "My senior research project is on footwear. This fall I'm researching the materials, manufacturing and processes used in footwear and writing a design brief: a specific wearer and intent, such as a runner who overpronates or an everyday casual shoe. In the spring I'll build that sneaker and iterate on it with prototypes and at-home manufacturing processes.",
      },
      gallery: [],
      documents: [{ title: "Air Force 1 Low — reverse tech pack", type: "PDF", provenance: "Original coursework", href: "docs/reverse-tech-pack.pdf" }],
      links: [],
      related: ["cope-custom-kicks", "mechanical-engineering", "loreal"],
    },
    {
      slug: "loreal", title: "L'Oréal", kind: "Professional experience",
      themes: ["innovate", "engineer"], featured: true,
      short: "11 weeks, 165+ meetings, 50+ projects on the L'Oréal Paris Hair Color team.",
      intro: "A summer as a product development intern on the L'Oréal Paris Hair Color team: 170+ hours of deep work, 165+ meetings, and 45+ collaborators across 15+ departments.",
      meta: { Role: "Product Development Intern", Dates: "June – August 2026", Team: "L'Oréal Paris Hair Color · Clark, NJ" },
      cover: "media/loreal-products.png", coverFit: "contain", coverBg: "#1c1c1c", coverLabel: "L'Oréal Paris Hair Color products",
      sections: {
        Context: "Over 11 weeks I worked with Product Development, Operations, R&D, Manufacturing, Supply Chain, Packaging, Marketing, Quality, Sourcing, Legal and more, and moved 50+ projects from ideation to close.",
        "My Role": "I built the SLP Pre-Base Dashboard with Claude to standardize and compare pre-bases across complexity, SKU count and development criteria, then secured it with email verification and documented it so it would keep running after I left. I led cross-functional status meetings for the Magic Root Cover-Up Spray and coordinated its component purchase orders, ran the SB-343 recycling symbol rollout across 90+ SKUs, and helped launch the Preference Shade Gaps and Preference Jet Blacks projects, coordinating consumer-testing logistics.",
        Result: "The dashboard cut discontinuation decision-making time by 70%. An analysis of an 18-to-20-point carton material change translated into a $350k pricing increase across multiple product families. I presented the dashboard's business impact to HR and Product Development leadership in a 25-minute presentation with Q&A.",
        "What I Learned": "At this scale everyone has a specialized job, and there's almost always an expert for whatever you need, so the resources are there to help you. But you can't cut corners, because any mistake gets amplified.",
      },
      gallery: [{ label: "SLP Pre-Base Dashboard", src: "media/loreal-dashboard.png" }], galleryFit: "contain", documents: [], links: [],
      related: ["footwear-research", "huupe", "cusos"],
    },
    {
      slug: "teamsplit", title: "TeamSplit", kind: "Software venture",
      themes: ["build", "innovate"], featured: false,
      short: "A fantasy-league payments app I took from a UF club project to the App Store in about 8 months.",
      intro: "TeamSplit collects fantasy league buy-ins before anyone can draft, then pays out the winners when the season ends, so no commissioner has to chase payments.",
      meta: { Role: "Founder & developer", Dates: "January – August 2026", Status: "On the App Store · no longer developed" },
      cover: "media/teamsplit-app-store.png", coverLabel: "App screenshot",
      sections: {
        Context: "It started as my final project for UF Product Space, a product management club, where we had to pick a product we used and make 1 change to it. I chose ESPN Fantasy. After presenting, I decided to actually build it, and documented the whole process on TikTok and Instagram.",
        Challenge: "In every league there's a commissioner who has to collect the money and pay it out at the end. I was tired of being that person.",
        Process: "With no coding background, I built the full-stack iOS app with Cursor, Claude and ChatGPT, using React Native, Expo, TypeScript, Supabase, PostgreSQL and Stripe. Commissioners can create leagues, collect entry fees, track payments, finalize results and distribute payouts.",
        Result: "TeamSplit went live on the App Store in late August 2026. The same day, I opened Sleeper to set up another league and saw it had just launched Sleeper Safe, a free built-in feature that does what TeamSplit does. The app is still available, but I've stopped developing it.",
        "What I Learned": "Confirm a real pain point before you build, and before you try to market it. People saying they'd use something isn't enough.",
      },
      gallery: [{ label: "TeamSplit login", src: "media/teamsplit/login.png" }, { label: "TeamSplit home", src: "media/teamsplit/home.png" }, { label: "Create a league", src: "media/teamsplit/create.png" }, { label: "League payments", src: "media/teamsplit/payment.png" }, { label: "Payout sent", src: "media/teamsplit/payout.png" }, { label: "App Store listing", src: "media/teamsplit-app-store.png" }],
      documents: [], links: [{ label: "TeamSplit on the App Store", href: "https://apps.apple.com/us/app/teamsplit-pay/id6805079472" }, { label: "teamsplit-pay.com", href: "https://teamsplit-pay.com/" }, { label: "@team.split.app on Instagram", href: "https://www.instagram.com/team.split.app" }, { label: "Build journey on TikTok", href: "https://www.tiktok.com/@aidan.cope.21" }],
      related: ["cusos", "ai-automation", "cope-custom-kicks"],
    },
    {
      slug: "authentic-intelligence", title: "Authentic Intelligence", kind: "Case study",
      themes: ["build", "innovate"], featured: false,
      short: "Case study: using AI to understand customer feedback. Gator Tank semifinalist.",
      intro: "A case study on how AI could help teams collect and understand customer feedback, presented at UF's Gator Tank competition.",
      meta: { Type: "Case study", Team: "With Svetlana Martin", Recognition: "Gator Tank semifinalist" },
      cover: "docs/authentic-intelligence-pitch.pdf", coverLabel: "Pitch deck",
      sections: {
        Context: "Customer feedback tends to be scattered across conversations, surveys, reviews and support channels, which makes it hard for a team to see patterns and act on them.",
        Challenge: "How can a team turn fragmented customer feedback into insight it can use in product decisions, and where does AI genuinely help?",
        Result: "I developed the case study with Svetlana Martin, a statistics major at UF and an AI agent tester for Raia. We presented it at Gator Tank and made the semifinal round.",
        "What I Learned": "It gave me the foundation for how to build and consult with AI, and it's a big part of why I want to work in AI consulting and implementation.",
      },
      gallery: [], documents: [{ title: "Authentic Intelligence — pitch deck", type: "PDF", provenance: "Gator Tank semifinalist pitch", href: "docs/authentic-intelligence-pitch.pdf" }], links: [],
      related: ["ai-automation", "cusos"],
    },
    {
      slug: "huupe", title: "Huupe", kind: "Professional experience",
      themes: ["engineer", "innovate"], featured: true,
      short: "Product development for Huupe's smart basketball hoops, from intern to engineer.",
      intro: "Huupe makes high-tech basketball hoops. Its first product was a roughly $10,000 in-ground hoop with a screen, camera and sensors in the backboard. It followed that with a $500 Mini Hoop, now in its second generation, and the Huupe Sensor Hub: a lidar attachment for any backboard that tracks every shot, including swish percentage, with no camera or privacy concerns.",
      meta: { Role: "Intern → Product Development Engineer", Dates: "May 2025 – present", Location: "Irvine, CA (remote)" },
      cover: "media/huupe.png", coverFit: "contain", coverLabel: "Huupe Mini",
      sections: {
        Context: "I joined Huupe's product development team in summer 2025 and have stayed on as a Product Development Engineer, working remotely with the team in Irvine. It's been a chance to contribute to connected-fitness hardware and software while it's being built, at a company that's redefining how players train.",
        "My Role": "I developed 300+ customized workout plans using analytical modeling and Excel-based systems to organize training data and standardize how workouts are built. I also led brand protection and e-commerce enforcement: investigating unauthorized Huupe listings and coordinating trademark documentation, marketplace removal requests and cease-and-desist actions.",
        Result: "A MATLAB model I built automated workout variety and cut workout generation time by more than 50% for the product development team.",
        "What I Learned": "At a small company everyone's role is amplified, and each person has more say over the final product than at a company where jobs are more specialized.",
      },
      gallery: [{ label: "Huupe in-ground hoop", src: "media/huupe/pro.png" }, { label: "Huupe Mini", src: "media/huupe/mini.png" }, { label: "Huupe Sensor Hub", src: "media/huupe/sensor-hub.png" }], galleryFit: "contain", coverCollage: ["media/huupe/pro.png", "media/huupe/mini.png", "media/huupe/sensor-hub.png"], documents: [], links: [],
      related: ["loreal", "mechanical-engineering", "mj-daly"],
    },
    {
      slug: "cusos", title: "Cuso's Seasonings", kind: "Professional experience",
      themes: ["innovate", "build"], featured: true,
      short: "AI operations contractor: 5 shipped automations for an all-natural seasoning brand.",
      intro: "Cuso's started with Jack Mancuso's grilling and cooking videos on Instagram and YouTube. As his following grew he launched an all-natural seasoning company. As the team expanded, it needed someone experienced with Claude and AI automation.",
      meta: { Role: "A.I. Operations Contractor", Dates: "June 2026 – present", Location: "Lincoln, CA (remote)" },
      cover: "media/cusos.png", coverFit: "contain", coverLabel: "Cuso's Maple Bourbon",
      sections: {
        Context: "After building TeamSplit, I reached out to COO Cody Allen, who brought me on as an automations contractor. Over 75+ hours I have shipped 5 automations.",
        "My Role": "I engineer AI automations end to end, including a Gorgias support chatbot, Shopify–ShipBob address validation across 1,200+ orders, and ClickUp task delegation. I also redesigned the digital asset library in Air, consolidating 22 top-level boards into 11 with a 14-field tagging system. And I integrated nutrition data and product labels into the Gorgias AI knowledge base for 24/7 support. Other work included adding a human-approval checkpoint to the Gorgias + Klaviyo back-in-stock workflow, and setting up Claude with workspace connectors so SOP updates reach the whole team automatically.",
        Result: "Manual support tickets fell 40% and address-related fulfillment errors fell 98%. Average first-reply time went from 2.8 hours to 0.9 hours, asset search time dropped 65%, and accurate back-in-stock alerts rose 30%. Everyone completed onboarding on the new ClickUp dashboard and SOPs within two weeks, and task completion rates rose 25%.",
      },
      gallery: [], documents: [], links: [],
      related: ["teamsplit", "ai-automation", "loreal"],
    },
    {
      slug: "mj-daly", title: "MJ Daly Mechanical Contracting", mapTitle: "MJ Daly", kind: "Professional experience",
      themes: ["engineer"], featured: true,
      short: "Assistant project engineer on mechanical systems projects, including a $10M closeout.",
      intro: "2 summers of mechanical contracting work in Waterbury, CT, first as an intern and then as an assistant project engineer.",
      meta: { Role: "Intern & Assistant Project Engineer", Dates: "July 2023 – August 2024", Location: "Waterbury, CT" },
      cover: "media/mjdaly-logo.png", coverFit: "contain", coverLabel: "MJ Daly",
      sections: {
        "My Role": "Coordinated engineering, procurement and installation teams, along with external vendors, to deliver mechanical components on time while meeting quality and performance standards.",
        Result: "Led the closeout of a $10M mechanical systems project, delivering accurate technical documentation from design through installation, testing and client handoff. Glycol saturation testing I ran to evaluate system performance saved the company over $165,000 from faulty glycol.",
        "What I Presented": "At the end of the summer I presented a bid proposal to company leadership, turning a summer of project analysis into data-driven recommendations.",
      },
      gallery: [], documents: [], links: [],
      related: ["mechanical-engineering", "huupe"],
    },
    {
      slug: "mechanical-engineering", title: "Mechanical Engineering at UF", mapTitle: "UF Mechanical Engineering", kind: "Academic",
      themes: ["engineer"], featured: false,
      short: "The technical foundation under everything else, plus a Certificate in A.I.",
      intro: "I study mechanical engineering at the University of Florida, with a Certificate in A.I. I graduate in May 2027.",
      meta: { Program: "B.S. Mechanical Engineering · Certificate in A.I.", School: "University of Florida", Graduation: "May 2027" },
      cover: "media/endobronchial-blocker-machine.png", coverFit: "contain", coverLabel: "Nitinol endobronchial blocker machine (CAD)",
      sections: {
        Context: "Customizing and studying footwear made me want to understand the engineering underneath products. Mechanical engineering gives me the fundamentals: design, modeling, testing and analysis.",
      },
      collection: [
        { title: "Nitinol endobronchial blocker manufacturing machine", kind: "Mechanical Design 2 · Team lead · SolidWorks · Excel", text: "An endobronchial blocker is a coil of nitinol wire placed in the airway to stop bleeding and let a clot form. For UF Health Shands and the Herbert Wertheim College of Engineering, I led a team of seven designing a machine that coils 0.3 mm nitinol wire around a die into its heat-set shape, then straightens it back out for insertion into the patient. With a deputy lead and five sub-teams, I delegated the work, oversaw output and coordinated everything feeding the final design. The hardest problem was sizing the die's center diameter: small enough for the coil to stop bleeding, without fracturing the wire. We completed the full CAD and 3D printed the die, the most critical part, at an estimated $3,912 against a $4,000 budget. My biggest lesson was about leading people: knowing when to push and when to pull, and how hard, depending on the issue." },
        { title: "Senior research: designing a sneaker", kind: "Footwear · Materials · Manufacturing", text: "Researching footwear materials and manufacturing processes this fall, then building and iterating on a sneaker from my own design brief in the spring." },
        { title: "Exoskeleton buckle mechanism", kind: "UF Biodesign · Structures & OpenSim", text: "Designed and tested a structural buckle mechanism for a lower-body exoskeleton, using CAD and iterative prototyping to improve safety and function. Now working with the OpenSim team to model and analyze biomechanical systems that inform the exoskeleton design." },
        { title: "UF in Iceland", kind: "Study abroad · May 2025", text: "Saw renewable energy, carbon capture, sustainable agriculture and circular-economy systems in action around Reykjavik, and how sustainability works as both a technical and cultural practice." },
      ],
      gallery: [], documents: [], links: [],
      related: ["footwear-research", "huupe", "mj-daly"],
    },
    {
      slug: "ai-automation", title: "AI & Automation", kind: "Ongoing collection",
      themes: ["innovate", "build"], featured: false,
      short: "Tools I've built with AI for myself, and the agent work I'm doing now.",
      intro: "I use Claude and ChatGPT every day. These are things I've built with them, plus the business-focused agent work I'm learning now.",
      meta: { Tools: "Claude · ChatGPT · Cursor · Raia · n8n" },
      cover: null, coverLabel: "Screenshot of an AI tool or workflow",
      sections: {},
      collection: [
        { title: "ReLink", kind: "Personal CRM", text: "Logs and tracks my industry connections and tells me when to follow up next. It keeps me organized, and it can expand to friends and family." },
        { title: "Net worth tracker", kind: "Personal finance", text: "A tracker I built and update weekly." },
        { title: "Raia AI agents", kind: "UF course · Raia · n8n", text: "Building business-focused agents on Raia, an enterprise agent platform, using prompt logic, tool integrations, testing and human-in-the-loop workflows, including automations built with n8n." },
      ],
      gallery: [], documents: [], links: [],
      related: ["cusos", "teamsplit", "authentic-intelligence"],
    },
  ],

  // Floating objects in Explore mode. x/y are % of the stage; w/h in px at 1440 wide.
  artifacts: [
    { id: "sneaker", label: "Cope Custom Kicks", href: "#/work/cope-custom-kicks", theme: "create", x: 13, y: 12, w: 200, h: 200, radius: "50%", depth: 1.0, image: "media/cck-logo.png", hint: "sneaker cutout · transparent PNG", text: "Hand-painted customs since 2019. 50+ pairs.", connects: ["techpack", "cad", "phone"] },
    { id: "techpack", label: "Footwear Product Development", href: "#/work/footwear-research", theme: "engineer", x: 2.6, y: 50, w: 210, h: 150, radius: "6px", depth: 0.6, image: "media/techpack-sneaker.png", hint: "tech pack page · flat scan", text: "A reverse tech pack: construction, materials and callouts.", connects: ["sneaker", "cad", "prototype"] },
    { id: "photo", label: "Aidan Copeland", href: "#/about", theme: null, x: 21, y: 34, w: 120, h: 142, radius: "4px", depth: 0.4, hint: "personal photo", image: "media/aidan-cutout.png", text: "", connects: [] },
    { id: "cad", label: "Engineering Design Project", href: "#/work/mechanical-engineering", theme: "engineer", x: 72, y: 12, w: 215, h: 200, radius: "50%", depth: 0.8, image: "media/endobronchial-blocker-tile-v2.png", hint: "CAD render · transparent PNG", text: "Nitinol wire endobronchial blocker machine · Mechanical Design 2, UF.", connects: ["sneaker", "techpack", "prototype"], align: "right" },
    { id: "phone", label: "TeamSplit app", href: "#/work/teamsplit", theme: "build", x: 87, y: 50, w: 150, h: 150, radius: "34px", depth: 1.1, image: "media/teamsplit-icon.png", hint: "app screenshot", text: "From club project to the App Store in eight months.", connects: ["orb", "sneaker"], align: "right" },
    { id: "orb", label: "Cuso's Seasonings", href: "#/work/cusos", theme: "innovate", x: 69, y: 69, w: 165, h: 165, radius: "50%", depth: 0.7, image: "media/cusos.png", hint: "abstract AI object", text: "AI operations: 5 shipped automations.", connects: ["phone", "prototype"], align: "right" },
    { id: "prototype", label: "Huupe", href: "#/work/huupe", theme: "innovate", x: 19.5, y: 69, w: 165, h: 150, radius: "18px", depth: 0.9, image: "media/huupe.png", hint: "product / prototype photo", text: "Product development for smart basketball hoops.", connects: ["techpack", "cad", "orb"] },
  ],

  // Conceptual connections between projects (not a strict timeline).
  connections: [
    { from: "cope-custom-kicks", to: "footwear-research", label: "Interest in footwear" },
    { from: "mechanical-engineering", to: "footwear-research", label: "Engineering fundamentals" },
    { from: "mechanical-engineering", to: "mj-daly", label: "Engineering in practice" },
    { from: "mechanical-engineering", to: "huupe", label: "Engineering" },
    { from: "mj-daly", to: "huupe", label: "Engineering experience" },
    { from: "huupe", to: "loreal", label: "Product development" },
    { from: "basketball", to: "mechanical-engineering", label: "Life at UF" },
    { from: "basketball", to: "cope-custom-kicks", label: "Sneakers for athletes" },
    { from: "basketball", to: "huupe", label: "Love of basketball" },
    { from: "mechanical-engineering", to: "teamsplit", label: "Started as a UF club project" },
    { from: "teamsplit", to: "cusos", label: "Claude & automation experience" },
    { from: "teamsplit", to: "authentic-intelligence", label: "Building with AI" },
    { from: "cusos", to: "ai-automation", label: "AI in a real business" },
    { from: "teamsplit", to: "ai-automation", label: "Built with AI tools" },
    { from: "loreal", to: "ai-automation", label: "Dashboard built with Claude" },
    { from: "huupe", to: "ai-automation", label: "Workout automation" },
    { from: "ai-automation", to: "authentic-intelligence", label: "AI consulting" },
  ],
  stories: [
    { id: "footwear", label: "The footwear thread", path: ["mechanical-engineering", "cope-custom-kicks", "footwear-research"] },
    { id: "ventures", label: "The AI thread", path: ["mechanical-engineering", "teamsplit", "cusos", "ai-automation", "authentic-intelligence"] },
  ],
  // Nodes that appear only on the map (not case studies).
  mapNodes: {
    basketball: { title: "UF Women's Basketball", kind: "Student manager → practice player", href: "#/about" },
  },
  // Career map: x = time (left → right), y = lane.
  graph: {
    "mechanical-engineering": [6, 24], "cope-custom-kicks": [6, 62],
    "mj-daly": [25, 10], basketball: [25, 82],
    huupe: [43, 32], teamsplit: [57, 64], loreal: [63, 10],
    cusos: [68, 84], "footwear-research": [83, 24], "ai-automation": [85, 82], "authentic-intelligence": [94, 44],
  },
  graphTicks: [
    { x: 6, label: "Starting points" }, { x: 25, label: "2023–24" }, { x: 43, label: "2025" }, { x: 63, label: "2026" },
  ],

  timeline: [
    { when: "2019", title: "Cope Custom Kicks", text: "Started customizing sneakers in 8th grade. First creative work, first customers.", slug: "cope-custom-kicks" },
    { when: "2023", title: "Mechanical Engineering, University of Florida", text: "Started at UF, and with UF Women's Basketball as a student manager.", slug: "mechanical-engineering" },
    { when: "2023", title: "UF Women's Basketball", text: "Student manager, then practice player for 3 years.", slug: null },
    { when: "2023 – 2024", title: "MJ Daly Mechanical Contracting", text: "Assistant project engineer; led a $10M project closeout.", slug: "mj-daly" },
    { when: "2025", title: "Huupe", text: "Product development intern, now engineer.", slug: "huupe" },
    { when: "2026", title: "TeamSplit", text: "Built with no coding background and shipped to the App Store in about 8 months.", slug: "teamsplit" },
    { when: "Summer 2026", title: "L'Oréal", text: "Product development intern, L'Oréal Paris Hair Color.", slug: "loreal" },
    { when: "2026", title: "Cuso's Seasonings", text: "AI operations contractor.", slug: "cusos" },
    { when: "Fall 2026", title: "Footwear product development", text: "Air Force 1 Low tech pack and senior footwear research.", slug: "footwear-research" },
    { when: "Fall 2026", title: "Authentic Intelligence", text: "Gator Tank semifinalist AI case study.", slug: "authentic-intelligence" },
    { when: "Now", title: "AI & automation", text: "Raia agents, n8n, and tools built for myself.", slug: "ai-automation" },
    { when: "Next", title: "AI consulting & product development", text: "Graduating May 2027.", slug: null },
  ],

  skills: [
    { group: "Engineering", items: ["SolidWorks (Certified)", "Fusion 360 (Certified)", "CAD", "Lathe & mill", "MATLAB", "OpenSim", "Rapid prototyping", "Design for manufacturing"] },
    { group: "Product", items: ["Product lifecycle management", "User needs analysis", "Market research", "Footwear tech packs", "Data visualization"] },
    { group: "AI & automation", items: ["Claude", "ChatGPT", "Cursor", "Raia", "n8n", "Gorgias", "Klaviyo", "ClickUp", "ShipBob", "Shopify"] },
    { group: "Software", items: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "GitHub", "Figma", "Excel"] },
  ],
};
