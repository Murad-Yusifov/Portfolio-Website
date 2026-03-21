import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { type DataType } from "../../lib/data";

const ProjectCart = ({ data }: {data: DataType | null |undefined  }) => {
  const { theme } = useTheme();
  const navigation = useNavigate();

  // Dynamic colors based on theme
  const cardBg =
    theme === "light"
      ? "bg-white border-neutral-200"
      : "bg-neutral-900 border-neutral-800";
  const textPrimary = theme === "light" ? "text-neutral-900" : "text-white";
  const textSecondary =
    theme === "light" ? "text-neutral-500" : "text-neutral-300";
  const badgeBgBlue =
    theme === "light"
      ? "bg-blue-100 text-blue-700"
      : "bg-blue-800 text-blue-200";
  const badgeBgGreen =
    theme === "light"
      ? "bg-green-100 text-green-700"
      : "bg-green-800 text-green-200";
  const badgeBgPurple =
    theme === "light"
      ? "bg-purple-100 text-purple-700"
      : "bg-purple-800 text-purple-200";
  const badgeBgGray =
    theme === "light"
      ? "bg-gray-100 text-gray-600"
      : "bg-gray-700 text-gray-300";
  // const sectionBg = theme === "light" ? "bg-gray-50 " : "bg-black";

  return (
    <>
      {data && (
        <div
          key={data?.id}
          className={`rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-4 border ${cardBg}`}
          onClick={() => navigation(`/project/${data?.id}`)}
        >
          {/* Role */}
          <div>
            <h3 className={`text-lg sm:text-xl font-semibold ${textPrimary}`}>
              {data?.experienceInfo?.role}
            </h3>
            <p className={`text-sm ${textSecondary}`}>
              {data?.experienceInfo?.currentCompany}
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            <span className={`px-3 py-1 rounded-full ${badgeBgBlue}`}>
              {data?.experience}
            </span>

            <span className={`px-3 py-1 rounded-full ${badgeBgGreen}`}>
              {data?.experienceInfo?.projectsCompleted} Projects
            </span>

            <span
              className={`px-3 py-1 rounded-full ${
                data?.experienceInfo?.remote ? badgeBgPurple : badgeBgGray
              }`}
              >
              {data?.experienceInfo?.remote ? "Remote" : "On-Site"}
            </span>
          </div>

          {/* Skills */}
          <div>
            <p className={`text-sm font-medium ${textPrimary}`}>Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {(data?.skills || []).map((skill: string) => (
                <span
                key={skill}
                  className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
  </>
  );
};

export default ProjectCart;
