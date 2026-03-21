import { useTheme } from "../../hooks/useTheme";
import { type DataType } from "../../lib/data";

interface SkillsCardProps {
  data?: DataType[] | null; // array of objects
}

const SkillsCard = ({ data }: SkillsCardProps) => {
  const { theme } = useTheme();

  const bgColor = theme === "light" ? "bg-white" : "bg-black";
  const cardBg =
    theme === "light"
      ? "bg-white border border-gray-200"
      : "bg-neutral-900 border border-neutral-800";
  const textColor = theme === "light" ? "text-black" : "text-white";
  const badgeBg =
    theme === "light"
      ? "bg-gray-100 text-gray-800"
      : "bg-gray-700 text-gray-200";

  return (
    <section id="skills" className={`${bgColor} py-4 px-2 border-t-2 border-gray-100`}>
      <div className={`w-1/4 p-6 rounded-2xl ${cardBg} transition-colors duration-300 border-2`}>
        <h2 className={`text-xl font-semibold mb-4 ${textColor}`}>Skills</h2>
        <div className="flex flex-wrap gap-3">
          {(data || []).map((item) =>
            (item.skills || []).map((skill) => (
              <div
                key={`${item.id}-${skill}`}
                className={`px-4 py-2 rounded-lg ${badgeBg} text-sm font-medium`}
              >
                {skill}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsCard;