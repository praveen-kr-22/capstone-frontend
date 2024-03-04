import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

import GooleAuth from "./GoogleAuth";
import classes from "../css/AuthForm.module.css";
import LogoWithName from "../../../UI/LogoWithName";

function AuthForm() {
  const error = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <main className={classes.main}>
        <div className={classes.logoContainer}>
          <LogoWithName />
        </div>
        <Form method="post" className={classes.form}>
          <div className={classes.body}>
            <h2>Login</h2>
            <div>Welcome! Please sign in to continue</div>
            {error && <h3 className={classes.error}>{error}</h3>}
            {/* <div className={classes.input}>
              <p>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required />
              </p>
              <p>
                <label htmlFor="image">Password</label>
                <input id="password" type="password" name="password" required />
              </p>
            </div> */}
          </div>
          {/* <div className={classes.actions}>
            <Link>forgot password ?</Link>
            <button disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Login"}
            </button>
          </div> */}
        </Form>
        <GooleAuth />
      </main>
    </>
  );
}

export default AuthForm;
