import { Users, Lightbulb, Target, MessageCircle } from "lucide-react";

const skillsData = [
  {
    category: "Leadership",
    iconName: "Users",
    description: "Mentoring, team collaboration, dan community building"
  },
  {
    category: "Problem Solving",
    iconName: "Target",
    description: "Analytical thinking, debugging, dan logical reasoning"
  },
  {
    category: "Innovation",
    iconName: "Lightbulb",
    description: "Creative solutions, AI integration, dan technology exploration"
  },
  {
    category: "Communication",
    iconName: "MessageCircle",
    description: "Clear documentation, technical presentations, dan teamwork"
  },
];

const iconMap = {
  Users,
  Target,
  Lightbulb,
  MessageCircle,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="absolute right-0 top-20 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-blue-400 mb-3 font-semibold">SOFT SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Beyond Code
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Skills yang membuat saya menjadi developer yang lebih baik dan colleague yang lebih valuable dalam team development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName];
            return (
              <div
                key={index}
                className="bg-[#111827] border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition">
                  <IconComponent size={24} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {skill.category}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
