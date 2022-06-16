import React from "react";
import { useFormik } from "formik";
import "./App.css";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form: ", values);
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};

      // Validate email
      if (!values.email) errors.email = "Field Required";
      // const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

      // const ok = reg.exec(values.email);

      if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.exec(values.email)) {
        errors.email = "Username should be an email";
      }

      // Validate password
      if (!values.password) errors.password = "Field Required";

      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
          name="email"
          id="emailField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
        <div>Password</div>
        <input
          name="password"
          id="pswError"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        <div>
          <button id="submitBtn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
