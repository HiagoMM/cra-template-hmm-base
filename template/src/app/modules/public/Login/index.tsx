import React from "react";
import useLoginStyles from "./styles";
import { TextField } from "material-ui-formik-components/TextField";
import { Paper, Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LockIcon from "@material-ui/icons/Lock";
import { loginUser } from "../../../core/security/loginUser";
import authService from "../../../core/security/authService";
import { useHistory } from "react-router";

const initialValues: loginUser = {
  username: "",
  password: ""
};

export default function Login() {
  const styles = useLoginStyles();
  const history = useHistory();

  const handleSubmit = (user: loginUser) => {
    authService.login(user).then(() => {
      history.push("/private");
    });
  };

  return (
    <div className={styles.container}>
      <Paper className={styles.loginContainer}>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form className={styles.form}>
            <div className={styles.field}>
              <AccountBoxIcon className={styles.icon} />
              <Field name="username" label="usuario" component={TextField} />
            </div>
            <div className={styles.field}>
              <LockIcon className={styles.icon} />
              <Field
                type="password"
                name="password"
                label="senha"
                autoComplete="on"
                component={TextField}
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button
                className={styles.button}
                color="primary"
                variant="contained"
                type="submit"
              >
                Entrar
              </Button>
            </div>
          </Form>
        </Formik>
      </Paper>
    </div>
  );
}
