import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const address = useAddress();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ConnectWallet
          theme="dark"
          btnTitle="Login"
          style={{
            backgroundColor: "rgb(41, 106, 163)",
            fontWeight: "bold",
          }}
        />
      </main>
    </div>
  );
}
