import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { GlobalContext } from "@/context/global";

type FormValues = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const { isLoggedIn, setLoginStatus } = useContext(GlobalContext);
  const [error, setError] = useState<string | null>(null);

  if (isLoggedIn) {
    router.push("/");
  }

  const initialValues: FormValues = { username: "", password: "" };
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(4, "Username must be at least 4 characters long.").required("Username is required"),
    password: Yup.string().min(5, "Password must be at least 6 characters long.").required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        const res = await fetch(`/api/auth`, {
          method: "POST",
          body: JSON.stringify(values),
        });

        const { message } = await res.json();

        if (res.status === 200) {
          setLoginStatus(true);

          router.back();
          return;
        }

        setError(message);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Form method="post" action="#" className="flex flex-col w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-md" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="true"
              className="form-control w-full p-2 bg-white appearance-none rounded-md border text-md"
              placeholder="Username..."
              onChange={handleChange}
              value={values.username}
            />

            <p className="error text-red-600 my-2">{errors.username && touched.username && errors.username}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-md" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              autoComplete="true"
              id="password"
              value={values.password}
              onChange={handleChange}
              className="form-control w-full p-2 bg-white appearance-none rounded-md border text-md"
              placeholder="Password..."
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
              Login
            </button>
          </div>
          <p className="error text-red-600  my-2">{error}</p>
        </Form>
      )}
    </Formik>
  );
};

const login = () => {
  return (
    <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto">
      <div className="flex-center flex-col text-center mb-6">
        <h2 className="text-lg">Login</h2>
        <span className="text-xs text-gray-500">Sign in to continue shopping</span>
      </div>
      <LoginForm />
    </div>
  );
};

export default login;
