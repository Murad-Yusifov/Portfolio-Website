import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { postData, putData } from "../../Utils/api";
import Button from "../common/Button";
import { useTheme } from "../../hooks/useTheme";

interface Project {
  name: string;
  tech: string[];
}

interface ExperienceInfo {
  company: string;
  role: string;
}

interface FormType {
  skills: string[];
  experience: string;
  experienceInfo: ExperienceInfo;
  projects: Project[];
}

interface ProjectFormProps {
  endpoint?: string | null;
  initialData?: FormType;
}

const ProjectForm = ({ endpoint = null, initialData }: ProjectFormProps) => {
  const { theme } = useTheme();

  const bgColor = theme === "light" ? "bg-white" : "bg-black";
  const textColor = theme === "light" ? "text-black" : "text-white";
  const inputBg = theme === "light" ? "bg-white" : "bg-neutral-900";
  const borderColor = theme === "light" ? "border-gray-300" : "border-neutral-700";

  const validationSchema = Yup.object({
    skills: Yup.array().of(Yup.string().required("Required")).min(1, "Add at least 1 skill"),
    experience: Yup.string().required("Required"),
    experienceInfo: Yup.object({
      company: Yup.string().required("Required"),
      role: Yup.string().required("Required"),
    }),
    projects: Yup.array().of(
      Yup.object({
        name: Yup.string().required("Required"),
        tech: Yup.array().of(Yup.string().required("Required")).min(1, "Add at least 1 tech"),
      })
    ),
  });

  const formik = useFormik<FormType>({
  initialValues: initialData || {
    skills: [],
    experience: "",
    experienceInfo: { company: "", role: "" },
    projects: [{ name: "", tech: [""] }],
  },
  enableReinitialize: true,
  validationSchema,
  onSubmit: async (values) => {
    try {
      if (endpoint) {
        // Update existing record
        await putData<FormType, undefined>(endpoint, values);
        alert("Form updated successfully!");
      } else {
        // Create new record
        await postData<FormType, undefined>(values);
        alert("Form submitted successfully!");
        formik.resetForm(); // optional: clear the form after submit
      }
    } catch (err) {
      console.error("Error sending form:", err);
      alert("Failed to submit form");
    }
  },
});
  return (
    <div className={`w-full flex justify-center px-4 py-8 ${bgColor} ${textColor}`}>
      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          className={`w-full max-w-3xl flex flex-col gap-6 p-6 rounded-lg shadow-md border ${borderColor}`}
        >
          <h2 className="text-2xl font-semibold text-center">Project Form</h2>

          {/* Skills */}
          <div>
            <label className="font-medium">Skills</label>
            <FieldArray
              name="skills"
              render={(arrayHelpers) => (
                <div className="flex flex-col gap-2">
                  {formik.values.skills.map((skill, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => formik.setFieldValue(`skills[${index}]`, e.target.value)}
                        className={`p-2 rounded-md border ${borderColor} ${inputBg} flex-1`}
                      />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                        className="px-2 bg-red-500 text-white rounded"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => arrayHelpers.push("")}
                    className="px-3 py-1 bg-blue-500 text-white rounded mt-1"
                  >
                    Add Skill
                  </button>
                </div>
              )}
            />
          </div>

          {/* Experience */}
          <div>
            <label>Experience</label>
            <input
              type="text"
              value={formik.values.experience}
              onChange={(e) => formik.setFieldValue("experience", e.target.value)}
              className={`p-2 rounded-md border ${borderColor} ${inputBg} w-full`}
            />
          </div>

          {/* Experience Info */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Experience Info</label>
            <input
              placeholder="Company"
              type="text"
              value={formik.values.experienceInfo.company}
              onChange={(e) => formik.setFieldValue("experienceInfo.company", e.target.value)}
              className={`p-2 rounded-md border ${borderColor} ${inputBg}`}
            />
            <input
              placeholder="Role"
              type="text"
              value={formik.values.experienceInfo.role}
              onChange={(e) => formik.setFieldValue("experienceInfo.role", e.target.value)}
              className={`p-2 rounded-md border ${borderColor} ${inputBg}`}
            />
          </div>

          {/* Projects */}
          <div>
            <label className="font-medium">Projects</label>
            <FieldArray
              name="projects"
              render={(arrayHelpers) => (
                <div className="flex flex-col gap-4">
                  {formik.values.projects.map((project, pIndex) => (
                    <div key={pIndex} className="border p-4 rounded-md flex flex-col gap-3">
                      <input
                        placeholder="Project Name"
                        type="text"
                        value={project.name}
                        onChange={(e) =>
                          formik.setFieldValue(`projects[${pIndex}].name`, e.target.value)
                        }
                        className={`p-2 rounded-md border ${borderColor} ${inputBg}`}
                      />

                      {/* Techs */}
                      <FieldArray
                        name={`projects[${pIndex}].tech`}
                        render={(techHelpers) => (
                          <div className="flex flex-col gap-2">
                            {project.tech.map((tech, tIndex) => (
                              <div key={tIndex} className="flex gap-2">
                                <input
                                  type="text"
                                  value={tech}
                                  onChange={(e) =>
                                    formik.setFieldValue(
                                      `projects[${pIndex}].tech[${tIndex}]`,
                                      e.target.value
                                    )
                                  }
                                  className={`p-2 rounded-md border ${borderColor} ${inputBg} flex-1`}
                                />
                                <button
                                  type="button"
                                  onClick={() => techHelpers.remove(tIndex)}
                                  className="px-2 bg-red-500 text-white rounded"
                                >
                                  Remove
                                </button>
                              </div>
                            ))}
                            <button
                              type="button"
                              onClick={() => techHelpers.push("")}
                              className="px-3 py-1 bg-blue-500 text-white rounded mt-1"
                            >
                              Add Tech
                            </button>
                          </div>
                        )}
                      />

                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(pIndex)}
                        className="px-3 py-1 bg-red-600 text-white rounded mt-2"
                      >
                        Remove Project
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => arrayHelpers.push({ name: "", tech: [""] })}
                    className="px-3 py-1 bg-blue-600 text-white rounded mt-2"
                  >
                    Add Project
                  </button>
                </div>
              )}
            />
          </div>

          <Button className="mt-4">{endpoint ? "Update" : "Submit"}</Button>
        </form>
      </FormikProvider>
    </div>
  );
};

export default ProjectForm;