import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react";

export function SignInButton() {
  const isUserLoggedIn = useSession().data;
  return isUserLoggedIn ? (
    <button
      type="button"
      className={styles.SignInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04de61" />
      {isUserLoggedIn.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.SignInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sign In with Github
    </button>
  );
}
