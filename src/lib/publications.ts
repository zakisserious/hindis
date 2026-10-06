export interface PublicationStat {
  value: string;
  label: string;
}

export interface PublicationSection {
  heading: string;
  /** Drives layout: findings get editorial treatments, recommendations get grouped columns. */
  kind: "findings" | "recommendations";
  intro?: string;
  items: { title: string; body: string }[];
}

export interface Publication {
  slug: string;
  type: string;
  title: string;
  subtitle: string;
  partner: string;
  /** ISO date, used for sorting the hub and the homepage "recent" list. */
  date: string;
  dateLabel: string;
  /** One-line summary for hub and homepage cards. */
  summary: string;
  cover: string;
  coverAlt: string;
  files: { label: string; file: string }[];
  stats: PublicationStat[];
  overview: string[];
  quote?: { text: string; attribution: string };
  sections: PublicationSection[];
  gallery?: { src: string; alt: string; caption: string }[];
}

export const publications: Publication[] = [
  {
    slug: "snu-education-report",
    type: "Research Report",
    title:
      "Why Students Are Not Choosing to Enrol in the Faculty of Education",
    subtitle:
      "And what prevents those who enrol from completing their programmes",
    partner: "Somali National University, Faculty of Education",
    date: "2026-08-27",
    dateLabel: "August 2026",
    summary:
      "An analysis of enrolment and retention in teacher education at Somalia's only public national university, produced in partnership with Hindis.",
    cover: "/images/snu-kii.jpg",
    coverAlt: "A key informant interview with faculty leadership at Somali National University",
    files: [
      {
        label: "Download full report (PDF, 18 pages)",
        file: "/resources/snu-education-report-2026.pdf",
      },
    ],
    stats: [
      { value: "37%", label: "National literacy rate" },
      { value: "9.6%", label: "MoECHE hires holding an education degree, down from 25.9%" },
      { value: "12%", label: "Entered the Faculty as a first choice" },
      { value: "27,657", label: "Applied for teaching posts, Cohort 2" },
    ],
    overview: [
      "Somali National University is Somalia's only public national university and its oldest institution of higher learning. As the faculty charged with preparing the country's teachers, its difficulty in attracting and retaining students carries consequences far beyond the institution.",
      "This research was conducted as a partnership between SNU and Hindis. It draws on three focus group discussions and five key informant interviews with current students, alumni, faculty leadership and administrative staff, alongside six peer-reviewed articles and MoECHE teacher recruitment data for 2023-2024. Fieldwork was conducted at SNU in July 2026.",
      "The analysis identifies the principal barriers to enrolment and retention, and sets out the institutional strengths that already exist within the faculty and can be strengthened deliberately rather than built from nothing.",
    ],
    quote: {
      text: "If students do not see opportunities after graduation, it becomes difficult to convince them to choose education.",
      attribution: "University Official, Key Informant Interview",
    },
    sections: [
      {
        heading: "Barriers to enrolment and retention",
        kind: "findings",
        intro:
          "Five interconnected issues emerged consistently across the interviews.",
        items: [
          {
            title: "Negative community perceptions of teaching",
            body: "The most frequently cited barrier. Students reported discouraging remarks such as \"Will you always be a teacher?\" and some admitted concealing their faculty. The Dean identified community perception as the greatest single challenge.",
          },
          {
            title: "Financial constraints",
            body: "The English Foundation Program, introduced for Batches 11 and 12, adds to existing tuition costs. One student described paying fifty dollars in tuition and a further seventy dollars for the English programme a week later, and considering dropping out as a result.",
          },
          {
            title: "Programme length",
            body: "Students noted that, having already spent twelve years in school, the additional foundation year reinforced a sense of an extended educational journey.",
          },
          {
            title: "Inadequate laboratory and library resources",
            body: "Interviewees consistently reported that the faculty lacks the laboratory and library resources its programmes require. One student had completed only two titration experiments across an entire course of study.",
          },
          {
            title: "Weak career visibility",
            body: "MoECHE teaching posts are open to applicants from all academic backgrounds, without specific consideration for graduates holding education degrees. Education graduates report competing for teaching positions against candidates with no professional preparation in teaching.",
          },
        ],
      },
      {
        heading: "Institutional strengths",
        kind: "findings",
        intro:
          "Participants also identified clear strengths: factors that already encourage students to stay.",
        items: [
          {
            title: "Lecturer quality",
            body: "The most consistently praised feature. Alumni described having \"the best lecturers, including PhD holders\", who advised them on the job market as well as teaching them.",
          },
          {
            title: "Affordability",
            body: "As a publicly funded faculty it does not depend on student contributions, since its budget is provided by government. This matters particularly for students from lower-income families and the federal member states.",
          },
          {
            title: "Awareness and orientation programmes",
            body: "Sessions on future careers, strong school connections, supervised teaching placements and practical classroom experience gave students a concrete sense of the profession, and several reported gains in confidence and leadership attributable directly to the programme.",
          },
          {
            title: "Emerging employment pathways",
            body: "The Rajo Kaabo government scholarship initiative has supported female students in particular and helped improve enrolment.",
          },
        ],
      },
      {
        heading: "Recommendations for the Ministry of Education",
        kind: "recommendations",
        intro:
          "Strengthening Somalia's teaching profession requires coordinated action across institutions, not action by the faculty alone.",
        items: [
          {
            title: "Create clearer recruitment pathways for education graduates",
            body: "Consider reserving a proportion of government teaching positions for candidates holding recognized education degrees, so that professional preparation carries measurable value at the point of recruitment.",
          },
          {
            title: "Strengthen collaboration with SNU",
            body: "Engage Faculty of Education students directly through recruitment events, career information sessions, internships and school placement opportunities.",
          },
          {
            title: "Recognize professional teacher qualifications",
            body: "Revise teacher recruitment criteria so that candidates trained specifically for teaching are distinguished from applicants from unrelated disciplines.",
          },
          {
            title: "Support a national teacher certification framework",
            body: "Work towards certification that prioritizes professionally trained teachers and restricts entry to classroom teaching by unqualified applicants.",
          },
        ],
      },
      {
        heading: "Recommendations for Somali National University",
        kind: "recommendations",
        intro:
          "Actions within the faculty's own remit to attract, prepare and retain students.",
        items: [
          {
            title: "Strengthen recruitment into the Faculty of Education",
            body: "Promote teaching as a professional career and communicate available employment pathways to prospective students. A \"Future Educators\" scheme could engage current students and alumni to visit secondary schools and set out the range of careers open to education graduates.",
          },
          {
            title: "Develop a targeted regional recruitment strategy",
            body: "Extend outreach to students across the Federal Member States. Participants from the regions valued the faculty highly but reported limited prior awareness of the programme.",
          },
          {
            title: "Diversify recruitment materials to show varied career paths",
            body: "Feature graduates who have moved into educational policy, curriculum development, educational leadership and research, addressing prevailing perceptions directly through alumni profiles and video.",
          },
          {
            title: "Improve student retention",
            body: "Extend orientation into a week-long career exploration period with alumni participation and realistic previews of teaching in Somali schools, and provide stronger academic, mentoring and career support to students identified as at risk of leaving.",
          },
          {
            title: "Address financial barriers",
            body: "Reduce or waive English Foundation Programme fees for Education students, extend scholarship provision along the lines of the Rajo Kaabo programme, and introduce a fee deferral option for students facing temporary hardship.",
          },
          {
            title: "Invest in teaching and learning resources",
            body: "Renovate and equip the chemistry, biology and physics laboratories, bring the library up to the standard the programmes require, and establish a Teaching Resource Centre.",
          },
        ],
      },
      {
        heading: "Recommendations for national leadership",
        kind: "recommendations",
        items: [
          {
            title: "Elevate the status of the teaching profession",
            body: "Position teachers as essential professionals within Somalia's human capital and national development agenda.",
          },
          {
            title: "Improve teacher incentives",
            body: "Address salaries, career progression, professional recognition and working conditions as part of efforts to attract talented young people into teaching.",
          },
          {
            title: "Develop a national teacher workforce strategy",
            body: "Align university teacher preparation, teacher demand, recruitment and long-term workforce planning, so that the number and profile of graduates match the needs of the school system.",
          },
        ],
      },
    ],
    gallery: [
      {
        src: "/images/snu-kii.jpg",
        alt: "A key informant interview in progress with faculty leadership at Somali National University",
        caption:
          "A key informant interview in progress with faculty leadership at Somali National University, Mogadishu, July 2026.",
      },
      {
        src: "/images/snu-fgd.jpg",
        alt: "Combined student and alumni focus group discussion at Somali National University",
        caption:
          "Combined student and alumni discussion with the research team, the source of several recommendations set out above.",
      },
    ],
  },
  {
    slug: "eac-foundational-learning-crisis",
    type: "Conference Paper",
    title: "Unveiling the Foundation Learning Crisis in Somalia",
    subtitle:
      "A dire educational challenge, presented at the Inaugural East African Community Regional Education Conference",
    partner: "East African Community Regional Education Conference",
    date: "2024-08-12",
    dateLabel: "August 2024",
    summary:
      "Saida Hassan's paper and presentation on the foundational learning crisis, delivered at the EAC Regional Education Conference in Arusha, Tanzania.",
    cover: "/images/eac-classroom.jpg",
    coverAlt: "Students at their desks during a lesson",
    files: [
      {
        label: "Download conference paper (PDF)",
        file: "/resources/EAST AFRICAN COMMUNITY REGIONAL EDUCATION CONFERENCE COMMEMORATING THE AU YEAR OF EDUCATION.pdf",
      },
      {
        label: "Download presentation slides (PDF)",
        file: "/resources/EAST AFRICAN CONFERENCE PREZ.pdf",
      },
    ],
    stats: [
      { value: "24%", label: "Of students have access to schools" },
      { value: "36%", label: "Of children complete primary education" },
      { value: "37%", label: "National literacy rate" },
      { value: "80%+", label: "Of Sub-Saharan students struggle with literacy and numeracy" },
    ],
    overview: [
      "Despite Africa's emphasis on universal access to education over the past decade, over 80% of students in Sub-Saharan countries struggle with low literacy and numeracy skills. In Somalia, where nearly half the population is between 10 and 29 years old, there is a pressing need for a strong and coherent system for early foundational learning.",
      "The study reviews and analyses reports from the United Nations, World Bank, UNICEF, UNESCO and the African Union, and examines the Bar Ama Baro project, a USAID-funded initiative focused on improving foundational education for marginalized children in Somalia.",
      "It places Somalia's challenges in regional context, and draws on comparable approaches in Ghana and Kenya to set out practical policy recommendations.",
    ],
    sections: [
      {
        heading: "Policy recommendations",
        kind: "recommendations",
        items: [
          {
            title: "Enhance stakeholder involvement",
            body: "Increase engagement of government agencies, educational institutions, non-governmental organizations and community leaders to foster a collaborative approach to reform, focused on policies that address the core challenges of foundational learning.",
          },
          {
            title: "Prioritize educational reform",
            body: "Align the educational framework with modern needs and standards, including revising curricula, improving teacher training, and adopting new educational technologies that facilitate effective learning in literacy and numeracy.",
          },
          {
            title: "Adopt technology and community-led models",
            body: "Draw on Kenya's e-learning initiatives and Ghana's teacher training model to mitigate teacher shortages, facilitate remote learning, and improve access to resources.",
          },
        ],
      },
    ],
  },
];

export const publicationsByDate = [...publications].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export function getPublication(slug: string) {
  return publications.find((p) => p.slug === slug);
}
