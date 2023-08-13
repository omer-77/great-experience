import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useContext } from "react";
import { GlobalContext } from "@/context/global";

type FormValues = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const { isLoggedIn, setLoginStatus } = useContext(GlobalContext);

  const initialValues: FormValues = { username: "", password: "" };
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(4, "يجب ألا يقل اسم المستخدم عن 4 أحرف").required("اسم المستخدم مطلوب"),
    password: Yup.string().min(5, "يجب ألا يقل اسم المستخدم عن 5 أحرف").required("كلمة المرور مطلوبة"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        if (values.username === "omer" && values.password === "12345") {
          setLoginStatus(true);
          
          router.back();
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Form method="post" action="#" className="flex flex-col w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-md" htmlFor="username">
              اسم المستخدم
            </label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="true"
              className="form-control w-full p-2 bg-white appearance-none rounded-md border text-md"
              placeholder="اسم المستخدم.."
              onChange={handleChange}
              value={values.username}
            />

            <p className="error text-red-600 my-2">{errors.username && touched.username && errors.username}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-md" htmlFor="password">
              كلمة المرور
            </label>
            <input
              type="password"
              name="password"
              autoComplete="true"
              id="password"
              value={values.password}
              onChange={handleChange}
              className="form-control w-full p-2 bg-white appearance-none rounded-md border text-md"
              placeholder="كلمة المرور.."
            />
            <p className="error text-red-600 my-2">{errors.password && touched.password && errors.password}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => {
                handleSubmit();
              }}
              type="button"
              className="w-full bg-primary text-secondary flex-1 p-2 text-md rounded-md"
            >
              دخول
            </button>
            <button type="button" className="w-fit text-primary underline p-2 text-md rounded-md">
              نسيت كلمة المرور؟
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const login = () => {
  return (
    <div>
      <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto">
        <div className="flex flex-col text-center items-center justify-center mb-6">
          <h2 className="text-lg">تسجيل الدخول</h2>
          <span className="text-xs text-gray-500">قم بتسجيل الدخول لمتابعة التسوق</span>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default login;
