import { Form, Formik } from "formik";
import { Project_initialvalue, Project_validation } from "@/Data/Apps/Project/ProjectListData";
import ButtonSection from "./ButtonSection";
import { setCreatedData } from "@/Redux/Reducer/ProjectSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";
import TitleAndClentSection from "./TitleAndClentSection";
import ProjectSection from "./ProjectSection";
import DateSection from "./DateSection";
import DescriptionSection from "./DescriptionSection";
import UploadProjectFile from "./UploadProjectFile";
import { ProjectInitialValue } from "@/TypeCommon/Apps/Ecommerce/ProductListType";

const CreateNewProjectForm = () => {
  const router = useRouter();
  const { createdFormData } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const randomValue = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  const projectSubmit = (values: ProjectInitialValue) => {
    const submitedData = {
      id: randomValue.toString(),
      title: values.title,
      badge: values.progress === 100 ? "Done" : "Doing",
      img: "user/3.jpg",
      sites: "Themeforest, australia",
      desc: "Boho Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: randomValue.toString(),
      resolved: randomValue.toString(),
      comment: randomValue.toString(),
      like: randomValue.toString(),
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
      progress: values.progress,
      projectLevel: values.progress,
    };
    dispatch(setCreatedData([...createdFormData, submitedData]));
    router.push(`/apps/project/projectlist`);
  };
  return (
    <Formik initialValues={Project_initialvalue} validationSchema={Project_validation} onSubmit={projectSubmit}>
      {() => (
        <Form className='theme-form'>
          <TitleAndClentSection />
          <ProjectSection />
          <DateSection />
          <DescriptionSection />
          <UploadProjectFile />
          <ButtonSection />
        </Form>
      )}
    </Formik>
  );
};

export default CreateNewProjectForm;
