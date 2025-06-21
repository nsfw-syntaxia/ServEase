"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/login.module.css";

const Login: NextPage = () => {
  const [rememberMeChecked, setRememberMeChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    password: false,
  });
  const [fieldTouched, setFieldTouched] = useState({
    email: false,
    password: false,
  });
  const router = useRouter();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    const newValidation = {
      email: email.length > 0 && validateEmail(email),
      password: password.length > 0,
    };

    if (showError) {
      const newFieldErrors = { ...fieldErrors };
      let errorCleared = false;

      if (fieldErrors.email && newValidation.email) {
        newFieldErrors.email = false;
        errorCleared = true;
      }

      if (fieldErrors.password && newValidation.password) {
        newFieldErrors.password = false;
        errorCleared = true;
      }

      if (errorCleared) {
        setFieldErrors(newFieldErrors);
      }

      if (newValidation.email && newValidation.password) {
        setError("");
        setShowError(false);
        setFieldErrors({
          email: false,
          password: false,
        });
      }
    }
  }, [email, password, showError, fieldErrors]);

  const toggleRememberMe = () => {
    setRememberMeChecked(!rememberMeChecked);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!fieldTouched.email) {
      setFieldTouched((prev) => ({ ...prev, email: true }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!fieldTouched.password) {
      setFieldTouched((prev) => ({ ...prev, password: true }));
    }
  };

  const getInputClassName = (
    fieldName: keyof typeof fieldErrors,
    value: string
  ) => {
    let className = `${styles.tbx} ${styles.inputBox}`;

    if (value) {
      className += ` ${styles.tbxFilled}`;
    }

    if (fieldErrors[fieldName]) {
      className += ` ${styles.tbxError}`;
    }

    return className;
  };

  const handleLogin = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);

      setFieldTouched({
        email: true,
        password: true,
      });

      setFieldErrors({
        email: false,
        password: false,
      });

      let hasError = false;
      let errorMessage = "";
      const newFieldErrors = {
        email: false,
        password: false,
      };

      if (!email || !password) {
        errorMessage = "Please fill in all required fields.";
        hasError = true;
        if (!email) newFieldErrors.email = true;
        if (!password) newFieldErrors.password = true;
      } else if (!validateEmail(email)) {
        errorMessage = "Please enter a valid email address.";
        hasError = true;
        newFieldErrors.email = true;
      }

      if (hasError) {
        setError(errorMessage);
        setShowError(true);
        setFieldErrors(newFieldErrors);
        return;
      }

      setError("");
      setShowError(false);
      setFieldErrors({
        email: false,
        password: false,
      });
      console.log("Logging in with:", { email, password, rememberMeChecked });
      router.push("/signup");
    }, 200);
  };

  return (
    <div className={styles.login}>
      <div className={styles.login1}>
        <div className={styles.background} />
        <div className={styles.authwindow}>
          <div className={styles.authwindow1} />
          <div className={styles.authcontent}>
            <div className={styles.logincontent}>
              <div className={styles.navigationbar}>
                <div className={styles.navbar}>
                  <div className={styles.login2}>
                    <div className={styles.logIn}>Log In</div>
                  </div>
                  <div
                    className={styles.signup}
                    onClick={() => router.push("/signup")}
                  >
                    <div className={styles.signUp}>Sign Up</div>
                  </div>
                </div>
              </div>
              <div className={styles.title}>
                <div className={styles.welcomeToServeaseContainer}>
                  <span>Welcome to serv</span>
                  <b>ease</b>
                  <span>!</span>
                </div>
                <div className={styles.pleaseLogIn}>
                  Please log in to access your account.
                </div>
              </div>
              <div className={styles.userinputs}>
                <div className={styles.email}>
                  <div className={styles.email1}>
                    <div className={styles.emailAddress}>
                      <div className={styles.label}>Email address</div>
                    </div>
                    <div className={getInputClassName("email", email)}>
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email address"
                        className={styles.passwordInput}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.password}>
                  <div className={styles.password1}>
                    <div className={styles.emailAddress}>
                      <div className={styles.label}>Password</div>
                    </div>
                    <div className={getInputClassName("password", password)}>
                      <input
                        type={passwordVisible ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                        className={styles.passwordInput}
                      />
                      <Image
                        className={styles.hideIcon}
                        width={30}
                        height={25}
                        alt={
                          passwordVisible ? "Hide password" : "Show password"
                        }
                        src={passwordVisible ? "/show.svg" : "/hide.svg"}
                        onClick={togglePasswordVisibility}
                      />
                    </div>
                  </div>

                  <div className={styles.action}>
                    <div
                      className={styles.rememberMe}
                      onClick={toggleRememberMe}
                    >
                      <div className={styles.stateLayer}>
                        <div
                          className={
                            rememberMeChecked
                              ? styles.checkedContainer
                              : styles.container
                          }
                        >
                          {rememberMeChecked && (
                            <Image
                              className={styles.checkIcon}
                              width={14}
                              height={14}
                              alt="check"
                              src="/check.svg"
                            />
                          )}
                        </div>
                      </div>
                      <div className={styles.rememberMe1}>Remember me</div>
                    </div>
                    <div className={styles.forgetPassword}>Forget Password</div>
                  </div>
                </div>
              </div>
              <div className={styles.buttonSection}>
                <div
                  className={`${styles.errorbox} ${
                    showError ? styles.visible : styles.hidden
                  }`}
                >
                  {error}
                </div>
                <div
                  className={`${styles.buttoncontainer} 
                    ${email && password ? styles.buttoncontainerActive : ""} 
                    ${isClicked ? styles.clicked : ""}`}
                  onClick={handleLogin}
                >
                  <div className={styles.buttontext}>
                    <div className={styles.rememberMe1}>Log In</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          className={styles.closeIcon}
          width={32}
          height={32}
          sizes="100vw"
          alt=""
          src="/close.svg"
        />
        <Image
          className={styles.authlogoIcon}
          width={832}
          height={978}
          sizes="100vw"
          alt=""
          src="/authLogo.svg"
        />
      </div>
    </div>
  );
};

export default Login;
