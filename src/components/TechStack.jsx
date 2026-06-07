import {
  Code,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const stacksData = [
  {
    category: "Frontend",
    iconName: "Code",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    iconName: "Server",
    items: ["PHP", "Laravel", "Node.js", "Express.js", "REST API"],
  },
  {
    category: "Database",
    iconName: "Database",
    items: ["MySQL", "PostgreSQL", "Supabase"],
  },
  {
    category: "DevOps & Cloud",
    iconName: "Wrench",
    items: ["Docker", "AWS EC2", "AWS RDS", "Git", "GitHub", "Vercel"],
  },
];

const iconMap = {
  Code,
  Server,
  Database,
  Wrench,
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 px-6">
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-blue-400 mb-3 font-semibold">TECH STACK</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies yang saya gunakan
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Kumpulan technologies, frameworks, dan tools yang saya gunakan untuk membangun fullstack web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stacksData.map((stack, index) => {
            const IconComponent = iconMap[stack.iconName];
            return (
              <div
                key={index}
                className="bg-[#111827] border border-white/10 rounded-3xl p-6 hover:border-blue-500/50 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5">
                  <IconComponent size={24} />
                </div>

                <h3 className="text-xl font-semibold mb-5">
                  {stack.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-sm text-zinc-300 bg-white/5 border border-white/10 px-3 py-2 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}