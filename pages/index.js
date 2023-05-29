import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const address = useAddress();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Welcome, This is MhKarimi78</h1>
        <p>please Login👇🏻</p>
        <ConnectWallet
          theme="dark"
          btnTitle="Login"
          style={{
            backgroundColor: "rgb(41, 200, 163)",
            fontWeight: "bold",
          }}
        />
      </main>
    </div>
  );
}
