"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import styles from "../../../styles/register-facility-4.module.css";

const FacilitySignup4: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSignUpClick = () => {
    setButtonClicked(true);
    setTimeout(() => setButtonClicked(false), 200);

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all required fields.");
      setShowError(true);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setShowError(true);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setShowError(true);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setShowError(true);
      return;
    }

    setError("");
    setShowError(false);
    console.log("Form is valid, proceeding to next step");
  };

  const isFormValid =
    email &&
    password &&
    confirmPassword &&
    validateEmail(email) &&
    password === confirmPassword &&
    password.length >= 8;

  return (
    <div className={styles.facilitySignup4}>
      <div className={styles.header}>
        <Image
          className={styles.regislogoIcon}
          width={40}
          height={40}
          sizes="100vw"
          alt=""
          src="/regisLogo.svg"
        />
        <div className={styles.divider} />
        <Image
          className={styles.arrowIcon}
          width={24}
          height={24}
          sizes="100vw"
          alt=""
          src="/arrow.svg"
        />
        <div className={styles.back}>Back</div>
      </div>
      <div className={styles.register}>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.joinUs}>Join us</div>
            <div className={styles.signUpAnd}>
              Sign up and get connected with trusted professionals.
            </div>
          </div>
          <div className={styles.nav}>
            <div className={styles.profile}>
              <div className={styles.number}>
                <div className={styles.bg} />
                <div className={styles.div}>1</div>
              </div>
              <div className={styles.profile1}>Profile</div>
            </div>
            <div className={styles.line} />
            <div className={styles.documents}>
              <div className={styles.number}>
                <div className={styles.bg} />
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.profile1}>Documents</div>
            </div>
            <div className={styles.line} />
            <div className={styles.contacts}>
              <div className={styles.number}>
                <div className={styles.bg} />
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.profile1}>Contacts</div>
            </div>
            <div className={styles.line} />
            <div className={styles.login}>
              <div className={styles.number}>
                <div className={styles.bg} />
                <div className={styles.div}>4</div>
              </div>
              <div className={styles.profile1}>Login</div>
            </div>
          </div>
          <div className={styles.navcontents}>
            <div className={styles.contactInfo}>
              <div className={styles.profileDescrip}>
                <div className={styles.profileContent}>
                  <div className={styles.profileTitle}>
                    <div className={styles.docuncheckedIcon}>
                      <div className={styles.bg4} />
                      <div className={styles.div4}>1</div>
                    </div>
                    <div className={styles.contactInformation}>Profile</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.profileDescrip}>
                <div className={styles.profileContent}>
                  <div className={styles.profileTitle}>
                    <div className={styles.docuncheckedIcon}>
                      <div className={styles.bg4} />
                      <div className={styles.div4}>2</div>
                    </div>
                    <div className={styles.contactInformation}>Documents</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.profileDescrip}>
                <div className={styles.profileContent}>
                  <div className={styles.profileTitle}>
                    <div className={styles.docuncheckedIcon}>
                      <div className={styles.bg4} />
                      <div className={styles.div4}>3</div>
                    </div>
                    <div className={styles.contactInformation}>
                      Contact Information
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.login2}>
              <div className={styles.loginDescrip}>
                <div className={styles.loginDescrip1}>
                  <div className={styles.loginTitle}>
                    <div className={styles.docuncheckedIcon}>
                      <div className={styles.bg4} />
                      <div className={styles.div4}>4</div>
                    </div>
                    <div className={styles.contactInformation}>Login</div>
                  </div>
                  <div className={styles.setUpYour}>
                    Set up your login credential to keep your account secure.
                    We’ll send a one-time link to confirm it’s really you.
                  </div>
                  <div className={styles.allFieldsRequired}>
                    *All fields required unless noted.
                  </div>
                </div>
              </div>
              <div className={styles.loginForm}>
                <div className={styles.email}>
                  <div className={styles.emailLabel}>
                    <div className={styles.label}>*Email address</div>
                  </div>
                  <div
                    className={`${styles.tbxemail} ${styles.inputBox} ${
                      email ? styles.tbxFilled : ""
                    }`}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.passwordInput}
                    />
                  </div>
                </div>
                <div className={styles.password}>
                  <div className={styles.emailLabel}>
                    <div className={styles.label}>*Password</div>
                  </div>
                  <div
                    className={`${styles.tbxemail} ${styles.inputBox} ${
                      password ? styles.tbxFilled : ""
                    }`}
                  >
                    <input
                      type={passwordVisible ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={styles.passwordInput}
                    />
                    <Image
                      className={styles.hideIcon}
                      width={30}
                      height={25}
                      sizes="100vw"
                      alt={passwordVisible ? "Hide password" : "Show password"}
                      src={passwordVisible ? "/show.svg" : "/hide.svg"}
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                </div>
                <div className={styles.confirmPassword}>
                  <div className={styles.emailLabel}>
                    <div className={styles.label}>*Confirm Password</div>
                  </div>
                  <div
                    className={`${styles.tbxemail} ${styles.inputBox} ${
                      confirmPassword ? styles.tbxFilled : ""
                    }`}
                  >
                    <input
                      type={confirmPasswordVisible ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={styles.passwordInput}
                    />
                    <Image
                      className={styles.hideIcon1}
                      width={30}
                      height={25}
                      sizes="100vw"
                      alt={
                        confirmPasswordVisible
                          ? "Hide password"
                          : "Show password"
                      }
                      src={confirmPasswordVisible ? "/show.svg" : "/hide.svg"}
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.buttonSection}>
                <div
                  className={`${styles.errorbox} ${
                    showError ? styles.visible : styles.hidden
                  }`}
                >
                  <div className={styles.errorMessage}>{error}</div>
                </div>
                <div
                  className={`${styles.buttoncontainer} ${
                    buttonClicked ? styles.clicked : ""
                  } ${isFormValid ? "" : styles.disabled}`}
                  onClick={handleSignUpClick}
                >
                  <div className={styles.signup}>
                    <div className={styles.signupText}>Sign Up</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitySignup4;
