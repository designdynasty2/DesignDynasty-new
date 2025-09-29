export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  review: string;
  rating: number;
}

export const testimonialData: TestimonialType[] = [
  {
    review:
      "Design Dynasty completely transformed our outdated website into a modern, user-friendly platform. The team understood our vision and delivered beyond expectations. Our traffic and customer inquiries have doubled since launch",
    name: "Sandra Burton",
    role: "Business Owner.",
    id:1,
    rating: 5,
  },
  {
    review:
      "Professional, responsive, and detail-oriented – Design Dynasty handled everything from design to deployment flawlessly. They are our go-to partner for all things web",
    name: "Emily Rodriguez",
    role: "Founder, Marketing Manager",
    id:2,
    rating: 5,
  },
  {
    review:
      "Our nonprofit organization needed a website with donation management and event features. Design Dynasty delivered a clean and functional site that made it easy for donors and members to engage with us",
    name: "Sarah L",
    role: "Nonprofit Director",
    id:3,
    rating: 5,
  },
  {
    review:
      "I loved how the team patiently walked me through every step of the process. They made sure the website reflected my brand identity perfectly. Highly recommend Design Dynasty for anyone starting fresh online.",
    name: "Rohit S",
    role: "Startup Founder",
    id:4,
    rating: 4,
  },
  {
    review:
      "Design Dynasty built a school management mobile app for us, and it has been a game-changer. Teachers, parents, and students now communicate effortlessly, and managing schedules has never been easier.",
    name: "Priya",
    role: "M., School Principal",
    id:5,
    rating: 5,
  },
];

