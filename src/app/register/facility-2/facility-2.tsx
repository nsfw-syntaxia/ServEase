import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../../styles/register-facility-2.module.css";

const FacilitySignup2: NextPage = () => {
  return (
    <div className={styles.facilitySignup2}>
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
            <div className={styles.documents2}>
              <div className={styles.documentsDescrip}>
                <div className={styles.documentsDescrip1}>
                  <div className={styles.documentsTitle}>
                    <div className={styles.docuncheckedIcon}>
                      <div className={styles.bg4} />
                      <div className={styles.div4}>2</div>
                    </div>
                    <div className={styles.contactInformation}>Documents</div>
                  </div>
                  <div className={styles.submitDocumentsNeeded}>
                    Submit documents needed for verification. All information is
                    handled securely and used solely to confirm your
                    eligibility.
                  </div>
                  <div className={styles.allFieldsRequired}>
                    All fields required unless noted.
                  </div>
                </div>
              </div>
              <div className={styles.uploadFiles}>
                <b className={styles.uploadFilesText}>Upload files</b>
                <div className={styles.uploadPhoto}>
                  <div className={styles.upload}>
                    <Image
                      className={styles.fileAddIcon}
                      width={30}
                      height={30}
                      sizes="100vw"
                      alt=""
                      src="/file-add.svg"
                    />
                    <div className={styles.clickToUpload}>Click to upload</div>
                  </div>
                </div>
                <div className={styles.documentsType}>
                  <div className={styles.pdf}>
                    <div className={styles.pdf1}>PDF</div>
                  </div>
                  <div className={styles.pdf}>
                    <div className={styles.pdf1}>DOCX</div>
                  </div>
                  <div className={styles.pdf}>
                    <div className={styles.pdf1}>TXT</div>
                  </div>
                  <div className={styles.pdf6}>
                    <div className={styles.pdf1}>{`> 10 MB`}</div>
                  </div>
                </div>
                <div className={styles.businessRegis}>
                  <div className={styles.document1}>
                    <b className={styles.uploadFilesText}>
                      Business Registration
                    </b>
                    <div className={styles.uploadComplete}>Upload</div>
                  </div>
                  <Image
                    className={styles.docuncheckedIcon}
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/docUnchecked.svg"
                  />
                </div>
                <div className={styles.businessRegis}>
                  <div className={styles.document1}>
                    <b className={styles.uploadFilesText}>
                      Valid Government-issued ID
                    </b>
                    <div className={styles.uploadComplete}>Upload</div>
                  </div>
                  <Image
                    className={styles.docuncheckedIcon}
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/docUnchecked.svg"
                  />
                </div>
                <div className={styles.businessRegis}>
                  <div className={styles.document1}>
                    <b className={styles.uploadFilesText}>Facility Photos</b>
                    <div className={styles.uploadComplete}>Upload</div>
                  </div>
                  <Image
                    className={styles.docuncheckedIcon}
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/docUnchecked.svg"
                  />
                </div>
                <div className={styles.businessRegis}>
                  <div className={styles.document1}>
                    <b className={styles.uploadFilesText}>
                      Service Licenses / Certifications
                    </b>
                    <div className={styles.uploadComplete}>Upload</div>
                  </div>
                  <Image
                    className={styles.docuncheckedIcon}
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/docUnchecked.svg"
                  />
                </div>
                <div className={styles.businessRegis}>
                  <div className={styles.document1}>
                    <b className={styles.uploadFilesText}>Proof of Address</b>
                    <div className={styles.uploadComplete}>Upload</div>
                  </div>
                  <Image
                    className={styles.docuncheckedIcon}
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/docUnchecked.svg"
                  />
                </div>
                <div className={styles.businessRegis}>
                  <div className={styles.document1}>
                    <b className={styles.uploadFilesText}>Tax Documents</b>
                    <div className={styles.uploadComplete}>Upload</div>
                  </div>
                  <Image
                    className={styles.docuncheckedIcon}
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/docUnchecked.svg"
                  />
                </div>
                <div className={styles.businessRegis}>
                  <div className={styles.document1}>
                    <b className={styles.uploadFilesText}>
                      Insurance or Safety Compliance
                    </b>
                    <div className={styles.uploadComplete}>Upload complete</div>
                  </div>
                  <Image
                    className={styles.docuncheckedIcon}
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/docuChecked.svg"
                  />
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.next}>
                  <div className={styles.uploadFilesText}>Next</div>
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
            <div className={styles.contactInfo}>
              <div className={styles.profileDescrip}>
                <div className={styles.profileContent}>
                  <div className={styles.profileTitle}>
                    <div className={styles.docuncheckedIcon}>
                      <div className={styles.bg4} />
                      <div className={styles.div4}>4</div>
                    </div>
                    <div className={styles.contactInformation}>Login</div>
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

export default FacilitySignup2;
