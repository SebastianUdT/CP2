import {useState} from "react";

import style from "./loginForm.module.css";

function validate(user) {
  let errors = {};

  if (!user.email) {
    errors.email = "Enter tour email";
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
    errors.email = "Invalid email";
  }
  if (user.email.length >= 35) {
    errors.email = "Invalid email";
  }
  if (!/\d/.test(user.password)) {
    errors.password = "Password must contain a number";
  }
  if (user.password.length < 6 || user.password.length > 10) {
    errors.password = "Password must be 6 to 10 characters";
  }
  if (!user.password) {
    errors.password = "Enter a password";
  }

  return errors;
}

function LoginForm({login}) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: " ",
    password: " ",
  });

  function handleChange(e) {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!errors.email && !errors.password) {
      login(user);
    } else {
      alert("Datos incorrectos");
    }
  }

  return (
    <div className={style.formContainer}>
      <div className={style.formTitle}>
        <h1>Fill Your Credentials</h1>
      </div>
      <form type="submit">
        <div className={style.credentials}>
          <label>Username</label>
          <input
            onChange={handleChange}
            placeholder="wubalubadubdub@flarg.com"
            name="email"
            value={user.email}
          />
          {errors.email ? <span>{errors.email}</span> : null}
        </div>
        <div className={style.credentials}>
          <label>Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={user.password}
          />
          {errors.password ? <span>{errors.password}</span> : null}
        </div>
        <button className={style.submitBtn} onClick={handleSubmit}>
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
