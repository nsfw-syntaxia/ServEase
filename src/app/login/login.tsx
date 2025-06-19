import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/login.module.css";

const Login: NextPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login1}>
        <div className={styles.background} />
        <div className={styles.authwindow}>
          <div className={styles.authwindow1}>
            <div
              className={styles.errorMessage}
            >{`ERROR: <error message>`}</div>
          </div>
          <div className={styles.authcontent}>
            <div className={styles.logincontent}>
              <div className={styles.navigationbar}>
                <div className={styles.navbar}>
                  <div className={styles.login2}>
                    <div className={styles.logIn}>Log In</div>
                  </div>
                  <div className={styles.signup}>
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
                    <div className={styles.tbx}>
                      <div className={styles.inputemail}>
                        <div className={styles.welcomeToServeaseContainer}>
                          123456
                        </div>
                        <div className={styles.typing} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.password}>
                  <div className={styles.password1}>
                    <div className={styles.emailAddress}>
                      <div className={styles.label}>Password</div>
                    </div>
                    <div className={styles.tbx}>
                      <div className={styles.inputemail}>
                        <div className={styles.welcomeToServeaseContainer}>
                          123456
                        </div>
                        <div className={styles.typing} />
                      </div>
                    </div>
                  </div>
                  <Image
                    className={styles.hideIcon}
                    width={30}
                    height={25}
                    sizes="100vw"
                    alt=""
                    src="hide.svg"
                  />
                  <div className={styles.action}>
                    <div className={styles.rememberMe}>
                      <div className={styles.stateLayer}>
                        <div className={styles.container} />
                      </div>
                      <div className={styles.rememberMe1}>Remember me</div>
                    </div>
                    <div className={styles.forgetPassword}>Forget Password</div>
                  </div>
                </div>
              </div>
              <div className={styles.buttoncontainer}>
                <div className={styles.buttontext}>
                  <div className={styles.rememberMe1}>Log In</div>
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
          src="close.svg"
        />
        <Image
          className={styles.authlogoIcon}
          width={832}
          height={978}
          sizes="100vw"
          alt=""
          src="authLogo.svg"
        />
      </div>
    </div>
  );
};

export default Login;
