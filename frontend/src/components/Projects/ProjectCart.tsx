import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { exampleData, type ProjectCartProps } from "../../lib/data";

const ProjectCart = ({ data = exampleData }: ProjectCartProps) => {
  const { theme } = useTheme();
  const navigation = useNavigate()

  // Dynamic colors based on theme
  const cardBg = theme === "light" ? "bg-white border-neutral-200" : "bg-neutral-900 border-neutral-800";
  const textPrimary = theme === "light" ? "text-neutral-900" : "text-white";
  const textSecondary = theme === "light" ? "text-neutral-500" : "text-neutral-300";
  const badgeBgBlue = theme === "light" ? "bg-blue-100 text-blue-700" : "bg-blue-800 text-blue-200";
  const badgeBgGreen = theme === "light" ? "bg-green-100 text-green-700" : "bg-green-800 text-green-200";
  const badgeBgPurple = theme === "light" ? "bg-purple-100 text-purple-700" : "bg-purple-800 text-purple-200";
  const badgeBgGray = theme === "light" ? "bg-gray-100 text-gray-600" : "bg-gray-700 text-gray-300";
  const sectionBg = theme ==="light"? "bg-gray-50 " : "bg-black"

  return (
    <section className={`w-full px-4 sm:px-6 lg:px-10 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-colors duration-300 ${sectionBg}`}>
      {data.map((item) => (
        <div
          key={item.id}
          className={`rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-4 border ${cardBg}`}
          onClick={() => navigation(`/project/${item.id}`)}
        >
          {/* Role */}
          <div>
            <h3 className={`text-lg sm:text-xl font-semibold ${textPrimary}`}>
              {item.experienceInfo.role}
            </h3>
            <p className={`text-sm ${textSecondary}`}>
              {item.experienceInfo.currentCompany}
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            <span className={`px-3 py-1 rounded-full ${badgeBgBlue}`}>
              {item.experience}
            </span>

            <span className={`px-3 py-1 rounded-full ${badgeBgGreen}`}>
              {item.experienceInfo.projectsCompleted} Projects
            </span>

            <span
              className={`px-3 py-1 rounded-full ${
                item.experienceInfo.remote ? badgeBgPurple : badgeBgGray
              }`}
            >
              {item.experienceInfo.remote ? "Remote" : "On-Site"}
            </span>
          </div>

          {/* Skills */}
          <div>
            <p className={`text-sm font-medium ${textPrimary}`}>Tech Stack</p>
            <p className={`text-sm ${textSecondary}`}>
              {item.skills.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectCart;