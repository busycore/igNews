import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton(props: SubscribeButtonProps) {
  return (
    <button className={styles.subscribeButton} type="button">
      Subscribe now
    </button>
  );
}
