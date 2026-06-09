const A = "./public/assets/";

const projects = {
  dp1: {
    id: "dp1",
    nav: "DP1",
    title: "Four-leaf Clover Spirits",
    titleLines: ["Four-leaf", "Clover Spirits"],
    kicker: "Design Project 1",
    accent: "#6f8f5f",
    deep: "#314531",
    short:
      "A pair of clover-inspired character robots that perform a choreographed dance through Arduino car movement, sewn textile forms, and motorized body gestures.",
    heroImage: `${A}media/DP1/Final/D8570BC4-6637-4EB3-B464-64FE013E1284.jpg`,
    video: `${A}media/DP1/0608.mp4`,
    presentation: `${A}media/DP1/機器人Four-leaff clover Spirits introduction.pdf`,
    summary: [
      ["Theme", "Inspired by the four-leaf clover motif from Can This Love Be Translated?"],
      ["Materials", "Arduino car, non-woven fabric, cotton, styrofoam balls, 3D printed base."],
      ["Function", "A dance robot sequence designed for the song Golden."],
      ["Mechanism", "Each robot uses three motors: two for arm movement and one for vertical body motion."]
    ],
    final: [
      [`${A}media/DP1/Final/D8570BC4-6637-4EB3-B464-64FE013E1284.jpg`, "Final character robot"],
      [`${A}media/DP1/Final/IMG_6447.jpg`, "Robot presentation image"]
    ],
    process: [
      [`${A}media/DP1/Progress/Sketch/Hu/LINE_ALBUM_角色設計_260602_1.jpg`, "Hu character sketch"],
      [`${A}media/DP1/Progress/Sketch/Hu/LINE_ALBUM_角色設計_260602_2.jpg`, "Hu character sketch"],
      [`${A}media/DP1/Progress/Sketch/Hu/LINE_ALBUM_角色設計_260602_3.jpg`, "Hu character sketch"],
      [`${A}media/DP1/Progress/Sketch/Hu/LINE_ALBUM_角色設計_260602_4.jpg`, "Hu character sketch"],
      [`${A}media/DP1/Progress/Sketch/Liang/IMG_5628.jpg`, "Liang mechanism and character sketch"],
      [`${A}media/DP1/Progress/Sketch/Liang/IMG_5946.jpg`, "Liang form sketch"],
      [`${A}media/DP1/Progress/Sketch/Liang/IMG_5948.jpg`, "Liang character sketch"],
      [`${A}media/DP1/Progress/PhysicalModel/Liang/IMG_5980.jpg`, "Physical prototype"],
      [`${A}media/DP1/Progress/PhysicalModel/Liang/IMG_6035.jpg`, "Assembly detail"],
      [`${A}media/DP1/Progress/PhysicalModel/Liang/IMG_6036.jpg`, "Assembly detail"],
      [`${A}media/DP1/Progress/PhysicalModel/Liang/IMG_6042.jpg`, "Assembly detail"],
      [`${A}media/DP1/Progress/PhysicalModel/Liang/IMG_6044.jpg`, "Assembly detail"],
      [`${A}media/DP1/Progress/PhysicalModel/Hu/LINE_ALBUM_Dp1_prototype_260602_1.jpg`, "Handmade textile prototype"],
      [`${A}media/DP1/Progress/PhysicalModel/Hu/LINE_ALBUM_Dp1_prototype_260602_2.jpg`, "Handmade textile prototype"],
      [`${A}media/DP1/Progress/PhysicalModel/Hu/LINE_ALBUM_Dp1_prototype_260602_3.jpg`, "Handmade textile prototype"]
    ],
    features: [
      ["Character Design", "The clover spirits turn a small mobile platform into a memorable performance character."],
      ["Motor Control", "Guide ropes connect the front motors to the arms, allowing each robot to gesture while moving."],
      ["3D Printed Base", "A circular lifting module helps the body move up and down during the dance."]
    ],
    skills: ["Arduino", "Motor Control", "3D Printing", "Sewing", "Character Design", "Choreography"]
  },
  dp2: {
    id: "dp2",
    nav: "DP2",
    title: "Siren",
    titleLines: ["Siren"],
    kicker: "Design Project 2",
    accent: "#31533f",
    deep: "#20392b",
    short:
      "A Starbucks-oriented conversational agent with a tsundere personality, designed to help users customize drinks and make ordering more playful.",
    heroImage: `${A}media/DP2/Final/First.png`,
    presentation: `${A}media/DP2/YOYO課＿聊天機器人_DP2.pdf`,
    chatLink: "https://chatgpt.com/g/g-69e72aa62ce88191b37222022bfe31eb-siren",
    summary: [
      ["Agent Type", "A drink-ordering chatbot for recommendation, customization, and menu guidance."],
      ["Persona", "Chemmy, a social-media-active user who enjoys witty and human-like AI responses."],
      ["Tone", "Sarcastic, tsundere, impatient, aloof, and secretly soft-hearted."],
      ["Interaction Goal", "Make drink decisions faster while making the conversation less dull."]
    ],
    final: [
      [`${A}media/DP2/Final/First.png`, "Siren chatbot cover image"],
      [`${A}media/DP2/Final/截圖 2026-06-08 晚上9.57.20.png`, "Recommendation flow"],
      [`${A}media/DP2/Final/截圖 2026-06-08 晚上9.57.43.png`, "Drink customization"],
      [`${A}media/DP2/Final/截圖 2026-06-08 晚上9.59.50.png`, "Prompt behavior test"]
    ],
    features: [
      ["Dynamic Menu Navigation", "Guides users through core espresso drinks, seasonal specials, and drink categories."],
      ["Deep-Dive Drink Specs", "Explains flavor profile, sweetness, caffeine level, and bitterness before ordering."],
      ["Live Promo Hunting", "Uses official event information to help users find current drink promotions."],
      ["Proactive Recommendations", "Turns user preferences into practical drink choices with a distinct voice."]
    ],
    skills: ["Prompt Design", "AI Constraints", "Persona Writing", "Conversation Testing", "Service Design"],
    chat: [
      ["user", "I hate super sweet drinks but need a lot of caffeine. What should I get?"],
      ["bot", "Fine. Get a Cold Brew with less syrup. It has enough caffeine to save your morning without turning it into dessert."],
      ["user", "Can you make it more interesting?"],
      ["bot", "Add vanilla sweet cream if you insist on having a personality. Just do not overdo it."]
    ]
  },
  dp3: {
    id: "dp3",
    nav: "DP3",
    title: "Abee",
    titleLines: ["Abee"],
    kicker: "Design Project 3",
    accent: "#86aebb",
    deep: "#416b78",
    short:
      "A mobile snowman refrigerator companion that delivers chilled drinks and snacks, returns to its dock, and supports voice-activated replenishment.",
    heroImage: `${A}media/DP3/Final/Poster.png`,
    demoVideo: `${A}media/DP3/Final/dp3-video.mov`,
    youtubeId: "ij4kgT1EWTg",
    youtubeUrl: "https://youtu.be/ij4kgT1EWTg",
    presentation: `${A}media/DP3/YOYO課＿期末機器人_DP3_Final.pdf`,
    summary: [
      ["Original Direction", "The project began as a snowman household robot concept."],
      ["Final Concept", "A mobile mini fridge that turns a static appliance into an active home companion."],
      ["Functions", "Voice replenishment, food placement, cold storage, autonomous delivery, and docking."],
      ["Scenario", "Abee moves between kitchen and living room to serve users during rest, work, or entertainment."]
    ],
    final: [
      [`${A}media/DP3/Final/Poster.png`, "Campaign visual poster"],
      [`${A}media/DP3/Final/IMG_6807 2.jpg`, "Final physical prototype"],
      [`${A}media/DP3/Final/移動圖.png`, "Moving to the living room"],
      [`${A}media/DP3/Final/拿飲料圖.png`, "Providing food and drinks"],
      [`${A}media/DP3/Final/放點心圖.png`, "Holding items"],
      [`${A}media/DP3/Final/充電圖.png?v=10`, "Returning to charging dock"],
      [`${A}media/DP3/Final/補貨圖.png`, "Voice-activated replenishment"]
    ],
    process: [
      [`${A}media/DP3/Progress/Sketch/Hu/44D869B6-602B-4669-8ABA-266E7E41C45F.png`, "Hu concept sketch"],
      [`${A}media/DP3/Progress/Sketch/Hu/49292339-8A85-4D55-B2DE-F6855DFACBF6.png`, "Hu concept sketch"],
      [`${A}media/DP3/Progress/Sketch/Hu/86992D8E-A1DF-4E13-8DE4-95319A798313.png`, "Hu concept sketch"],
      [`${A}media/DP3/Progress/Sketch/Liang/IMG_6525.jpg?v=2`, "Liang concept sketch"],
      [`${A}media/DP3/Progress/Sketch/Liang/IMG_6528.jpg?v=2`, "Liang concept sketch"],
      [`${A}media/DP3/Progress/Sketch/Liang/IMG_6690.jpg`, "Snowman form exploration"],
      [`${A}media/DP3/Progress/Sketch/Liang/IMG_6691.jpg`, "Snowman form exploration"],
      [`${A}media/DP3/Progress/Sketch/Liang/IMG_6692.jpg`, "Snowman form exploration"],
      [`${A}media/DP3/Progress/PhysicalModel/IMG_6763.jpg`, "Prototype construction"],
      [`${A}media/DP3/Progress/PhysicalModel/IMG_6765.jpg`, "Prototype construction"],
      [`${A}media/DP3/Progress/PhysicalModel/IMG_6767.jpg`, "Prototype construction"],
      [`${A}media/DP3/Progress/PhysicalModel/IMG_6768.jpg`, "Physical model detail"],
      [`${A}media/DP3/Progress/PhysicalModel/IMG_6769.jpg`, "Physical model detail"],
      [`${A}media/DP3/Progress/PhysicalModel/IMG_6771.jpg`, "Physical model detail"],
      [`${A}media/DP3/Progress/PhysicalModel/IMG_6774.jpg`, "Prototype testing"]
    ],
    features: [
      ["Screen Face", "Displays friendly expressions and communicates robot status."],
      ["Mini Fridge", "Keeps beverages and food chilled during delivery."],
      ["Extension Platform", "Slides out to place items within the user's reach."],
      ["Cup Holder", "Carries mugs, glasses, or canned drinks while moving."],
      ["Charging Dock", "Returns to the kitchen and backs into the dock after serving."]
    ],
    scenario: [
      ["Moving to the Living Room", "Abee leaves the kitchen and approaches the user on the sofa."],
      ["Providing Food and Drinks", "The platform extends so the user can pick up snacks or beverages."],
      ["Holding Items", "The tray and cup holder allow Abee to act as a mobile serving assistant."],
      ["Returning to the Charging Dock", "After serving, Abee returns to recharge under the vending unit."],
      ["Voice-Activated Replenishment", "Snacks and drinks are restocked into the mini fridge through a vertical chute."]
    ],
    skills: ["Scenario Design", "Physical Prototyping", "Product Storytelling", "Service Flow", "Form Development"]
  },
  bellabot: {
    id: "bellabot",
    nav: "BellaBot",
    title: "BellaBot Study",
    titleLines: ["BellaBot", "Study"],
    kicker: "Robot Observation",
    accent: "#b89d61",
    deep: "#6d5a31",
    short:
      "A study of service robot form, physical modeling, and how friendly visual cues influence human perception in everyday environments.",
    heroImage: `${A}media/BellaBot/Final/IMG_6022.jpg`,
    summary: [
      ["Project Focus", "Exploring service robot appearance, expression, and approachable interaction."],
      ["Method", "Sketching, form observation, and physical model making."],
      ["Outcome", "A prototype-oriented study of how a service robot can feel friendly and functional."],
      ["Note", "This page uses placeholder text that can be replaced with your final BellaBot description."]
    ],
    final: [
      [`${A}media/BellaBot/Final/IMG_6022.jpg`, "Final BellaBot model"],
      [`${A}media/BellaBot/Final/IMG_6023.JPG`, "Final presentation photo"],
      [`${A}media/BellaBot/Final/IMG_6047.jpg`, "Final physical detail"]
    ],
    process: [
      [`${A}media/BellaBot/Progress/Sketch/IMG_5881.jpg`, "Sketch exploration"],
      [`${A}media/BellaBot/Progress/Sketch/IMG_5885.JPG`, "Sketch refinement"],
      [`${A}media/BellaBot/Progress/Sketch/IMG_5894.jpg`, "Form study"],
      [`${A}media/BellaBot/Progress/PhysicalModel/IMG_5891.jpg`, "Physical model"],
      [`${A}media/BellaBot/Progress/PhysicalModel/IMG_5895.jpg`, "Physical model"],
      [`${A}media/BellaBot/Progress/PhysicalModel/IMG_5896.jpg`, "Model assembly"],
      [`${A}media/BellaBot/Progress/PhysicalModel/IMG_5897.jpg`, "Prototype detail"]
    ],
    features: [
      ["Friendly Form", "Rounded proportions and readable expression make the robot easier to approach."],
      ["Service Context", "The concept considers how people encounter delivery robots in public or semi-public spaces."],
      ["Model Making", "Physical prototyping helps test silhouette, scale, and visual personality."]
    ],
    skills: ["Observation", "Sketching", "Physical Model", "Robot Form", "Interaction Thinking"]
  }
};

const projectOrder = ["dp1", "dp2", "dp3", "bellabot"];
const app = document.querySelector("#app");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const header = document.querySelector("[data-header]");
let activeObserver;

function renderHome() {
  const cards = projectOrder
    .map((id) => {
      const project = projects[id];
      return `
        <a class="project-card reveal" href="#${project.id}" style="--accent:${project.accent}">
          <img src="${project.heroImage}" alt="${project.title}" loading="lazy" onerror="removeBrokenMedia(this)">
          <div class="project-card-content">
            <p class="eyebrow">${project.kicker}</p>
            <h3>${project.title}</h3>
            <p>${project.short}</p>
          </div>
        </a>
      `;
    })
    .join("");

  app.innerHTML = `
    <div class="page">
      <section class="hero">
        <div class="hero-media">
          <video src="${projects.dp1.video}" autoplay muted loop playsinline poster="${projects.dp1.heroImage}"></video>
        </div>
        <div class="hero-content">
          <p class="eyebrow reveal">Course Portfolio</p>
          <h1 class="hero-title reveal">Designing <span>Human-Robot</span> Interaction and <span>Human-AI</span> Interaction</h1>
          <p class="lead reveal">Four design projects documenting character robots, chatbot behavior, mobile service concepts, and physical prototyping by Liang Jia Xiang and Hu Nai-Yun.</p>
          <div class="hero-actions reveal">
            <a class="btn primary" href="#dp1">View Projects</a>
            <a class="btn" href="#about">Meet the Team</a>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          <p class="eyebrow reveal">Project Archive</p>
          <h2 class="reveal">From sketch to interaction.</h2>
          <p class="lead reveal">The portfolio keeps a consistent visual system while giving each project its own accent color, interaction rhythm, and case-study structure.</p>
          <div class="project-grid">${cards}</div>
        </div>
      </section>
    </div>
  `;
}

function renderProject(id) {
  const project = projects[id];
  const title = projectTitle(project);
  const summary = project.summary.map(([label, value]) => `<div class="summary-item"><strong>${label}</strong><span>${value}</span></div>`).join("");
  const features = project.features.map(([title, text]) => `<article class="feature reveal"><h3>${title}</h3><p>${text}</p></article>`).join("");
  const finalGallery = gallery(project.final || [], "final-gallery");
  const processGallery = carousel(project.process || [], project.id);
  const skills = project.skills.map((skill) => `<span class="chip">${skill}</span>`).join("");

  app.innerHTML = `
    <div class="page project-page" style="--primary:${project.accent}; --primary-deep:${project.deep || project.accent}">
      <section class="section">
        <div class="section-inner split">
          <aside class="info-panel">
            <p class="eyebrow reveal">${project.kicker}</p>
            <h1 class="project-title reveal">${title}</h1>
            <p class="lead reveal">${project.short}</p>
            <div class="button-row reveal">
              ${project.presentation ? `<a class="btn primary" href="${project.presentation}" target="_blank" rel="noreferrer">Presentation</a>` : ""}
              ${project.chatLink ? `<a class="btn primary" href="${project.chatLink}" target="_blank" rel="noreferrer">Chat with Siren</a>` : ""}
              <a class="btn" href="#home">Back Home</a>
            </div>
            <div class="summary-list reveal">${summary}</div>
          </aside>
          <div class="media-frame reveal">
            ${
              project.video
                ? `<video src="${project.video}" autoplay muted loop playsinline controls poster="${project.heroImage}"></video>`
                : `<img src="${project.heroImage}" alt="${project.title} final outcome" onerror="removeBrokenMedia(this)">`
            }
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          <p class="eyebrow reveal">Final Outcome</p>
          <h2 class="reveal">What the project became.</h2>
          ${finalGallery}
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          <p class="eyebrow reveal">Design Details</p>
          <h2 class="reveal">Key functions and decisions.</h2>
          <div class="feature-grid">${features}</div>
          <div class="chips reveal">${skills}</div>
        </div>
      </section>
      ${project.chat ? chatSection(project.chat) : ""}
      ${project.scenario ? scenarioSection(project) : ""}
      ${project.demoVideo || project.youtubeId ? videoSection(project) : ""}
      ${
        processGallery
          ? `<section class="section"><div class="section-inner"><p class="eyebrow reveal">Progress</p><h2 class="reveal">Sketches, models, and iteration.</h2>${processGallery}</div></section>`
          : ""
      }
    </div>
  `;
}

function projectTitle(project) {
  return (project.titleLines || [project.title]).map((line) => `<span>${line}</span>`).join("");
}

function gallery(items, className = "gallery") {
  if (!items.length) return "";
  return `<div class="${className}">${items
    .map(([src, caption]) => `<figure class="reveal"><img src="${src}" alt="${caption}" loading="lazy" onerror="removeBrokenMedia(this)"><figcaption>${caption}</figcaption></figure>`)
    .join("")}</div>`;
}

function carousel(items, id) {
  if (!items.length) return "";
  return `
    <div class="progress-carousel reveal" data-carousel="${id}">
      <div class="carousel-toolbar">
        <p>${items.length} process images</p>
        <div>
          <button class="carousel-btn" type="button" data-carousel-prev aria-label="Previous image">‹</button>
          <button class="carousel-btn" type="button" data-carousel-next aria-label="Next image">›</button>
        </div>
      </div>
      <div class="carousel-viewport" data-carousel-viewport>
        <div class="carousel-track" data-carousel-track>
          ${items
            .map(
              ([src, caption], index) =>
                `<figure class="carousel-slide">
                  <div class="carousel-image"><img src="${src}" alt="${caption}" loading="lazy" onerror="removeBrokenMedia(this)"></div>
                  <figcaption><span>${String(index + 1).padStart(2, "0")}</span>${caption}</figcaption>
                </figure>`
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function chatSection(items) {
  return `
    <section class="section">
      <div class="section-inner split">
        <div>
          <p class="eyebrow reveal">Conversation Behavior</p>
          <h2 class="reveal">Helpful, but with attitude.</h2>
          <p class="lead reveal">Siren was designed to avoid generic service politeness. The prompt controls keep the agent useful while letting the personality show through concise, sarcastic replies.</p>
        </div>
        <div class="chat-demo">${items.map(([type, text]) => `<div class="bubble ${type} reveal">${text}</div>`).join("")}</div>
      </div>
    </section>
  `;
}

function scenarioSection(project) {
  const mainImage = `${A}media/DP3/Final/移動圖.png`;
  return `
    <section class="section">
      <div class="section-inner scenario">
        <div class="media-frame reveal"><img src="${mainImage}" alt="Abee scenario"></div>
        <div>
          <p class="eyebrow reveal">Scenario Flow</p>
          <h2 class="reveal">A fridge that comes to you.</h2>
          <div class="scenario-list">
            ${project.scenario
              .map(
                ([title, text], index) =>
                  `<article class="scenario-item reveal"><h3>${index + 1}. ${title}</h3><p>${text}</p></article>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function videoSection(project) {
  return `
    <section class="section">
      <div class="section-inner split">
        <div>
          <p class="eyebrow reveal">Video</p>
          <h2 class="reveal">Prototype in motion.</h2>
          <p class="lead reveal">This video documents the DP3 final concept and helps connect the physical prototype with its service scenario.</p>
          <div class="button-row reveal">
            <a class="btn primary" href="${project.youtubeUrl}" target="_blank" rel="noopener">Watch on YouTube</a>
          </div>
        </div>
        ${project.demoVideo ? localVideo(project) : youtubeEmbed(project)}
      </div>
    </section>
  `;
}

function localVideo(project) {
  return `
    <div class="video-embed reveal">
      <video src="${project.demoVideo}" controls preload="metadata" playsinline></video>
    </div>
  `;
}

function youtubeEmbed(project) {
  const embedUrl = youtubeEmbedUrl(project.youtubeId, "epKjz1GLPRHWKNAP");
  return `
    <div class="video-embed reveal">
      <iframe
        src="${embedUrl}"
        title="${project.title} prototype video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  `;
}

function youtubeEmbedUrl(videoId, shareId) {
  const params = new URLSearchParams({
    rel: "0",
    si: shareId,
    origin: window.location.origin
  });
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

function renderAbout() {
  app.innerHTML = `
    <div class="page">
      <section class="section">
        <div class="section-inner split">
          <div>
            <p class="eyebrow reveal">About Us</p>
            <h1 class="reveal">Liang and Hu</h1>
            <p class="lead reveal">We created this portfolio to document one semester of designing robots, AI agents, physical prototypes, and interaction scenarios for the course Designing Human-Robot Interaction and Human-AI Interaction.</p>
            <div class="summary-list reveal">
              <div class="summary-item"><strong>Liang Jia Xiang</strong><span>Technical prototyping, sketch development, system logic, and interaction planning.</span></div>
              <div class="summary-item"><strong>Hu Nai-Yun</strong><span>Character design, visual storytelling, handmade modeling, and presentation development.</span></div>
              <div class="summary-item"><strong>Course Focus</strong><span>Human-robot interaction, human-AI interaction, physical prototyping, Arduino, prompt design, and scenario storytelling.</span></div>
            </div>
          </div>
          <div class="team-grid">
            <article class="team-card reveal">
              <img src="${A}media/About us/IMG_6095.jpg" alt="Team member portrait">
              <div><h3>Team Member</h3><p>Portrait photo from the project archive.</p></div>
            </article>
            <article class="team-card reveal">
              <img src="${A}media/About us/IMG_7605.jpg" alt="Team member portrait">
              <div><h3>Team Member</h3><p>Portrait photo from the project archive.</p></div>
            </article>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          <p class="eyebrow reveal">Semester Skills</p>
          <h2 class="reveal">What this course helped us practice.</h2>
          <div class="feature-grid">
            ${[
              ["Visual Ideation", "Turning rough sketches into character, product, and service concepts."],
              ["Physical Prototyping", "Using craft materials, model making, and 3D printing to test form and scale."],
              ["Interaction Design", "Designing how people speak to, move with, and emotionally interpret robots and AI agents."],
              ["AI Prompting", "Building constraints, tone, and persona rules for a chatbot with a distinct voice."],
              ["Arduino Motion", "Connecting motors, movement logic, and performance choreography."],
              ["Storytelling", "Using scenarios, posters, and presentations to make a robot concept understandable."]
            ]
              .map(([title, text]) => `<article class="feature reveal"><h3>${title}</h3><p>${text}</p></article>`)
              .join("")}
          </div>
        </div>
      </section>
    </div>
  `;
}

function route() {
  const id = window.location.hash.replace("#", "") || "home";
  if (!app) return;
  document.body.classList.remove("nav-open");
  document.body.classList.remove("io-animate");
  if (id === "home") renderHome();
  else if (id === "about") renderAbout();
  else renderProject(projects[id] ? id : "dp1");
  updateActiveNav(id);
  runAnimations();
  setupCarousels();
  refreshAfterMediaLoads();
  window.scrollTo(0, 0);
}

function updateActiveNav(id) {
  [...nav.querySelectorAll("a")].forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
}

function runAnimations() {
  const revealItems = [...document.querySelectorAll(".reveal")];
  if (activeObserver) {
    activeObserver.disconnect();
    activeObserver = undefined;
  }

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.set(revealItems, { opacity: 0, y: 28 });
    revealItems.forEach((item) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: item, start: "top 86%" }
      });
    });
    document.querySelectorAll(".carousel-slide").forEach((slide, index) => {
      gsap.fromTo(
        slide,
        { opacity: 0, rotate: index % 2 ? 2 : -2, y: 36 },
        {
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: slide, start: "top 90%" }
        }
      );
    });
    return;
  }

  document.body.classList.add("io-animate");
  activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  requestAnimationFrame(() => {
    revealItems.forEach((item) => activeObserver.observe(item));
  });
}

function refreshAfterMediaLoads() {
  const media = [...document.querySelectorAll("img, video")];
  media.forEach((item) => {
    item.addEventListener(
      "load",
      () => {
        if (window.ScrollTrigger) ScrollTrigger.refresh();
      },
      { once: true }
    );
    item.addEventListener(
      "loadedmetadata",
      () => {
        if (window.ScrollTrigger) ScrollTrigger.refresh();
      },
      { once: true }
    );
  });
}

function setupCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((carouselEl) => {
    const viewport = carouselEl.querySelector("[data-carousel-viewport]");
    const prev = carouselEl.querySelector("[data-carousel-prev]");
    const next = carouselEl.querySelector("[data-carousel-next]");
    const getStep = () => viewport.clientWidth;

    prev.addEventListener("click", () => viewport.scrollBy({ left: -getStep(), behavior: "smooth" }));
    next.addEventListener("click", () => viewport.scrollBy({ left: getStep(), behavior: "smooth" }));
  });
}

function removeBrokenMedia(img) {
  const removable = img.closest("figure, .team-card, .project-card, .media-frame");
  if (removable) removable.remove();
}

navToggle?.addEventListener("click", () => document.body.classList.toggle("nav-open"));
document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const target = link.getAttribute("href");
  if (!target || target === "#") return;
  event.preventDefault();
  if (window.location.hash === target) route();
  else window.location.hash = target;
});
window.addEventListener("hashchange", route);
window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 20));
window.addEventListener("pageshow", route);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", route, { once: true });
} else {
  route();
}
