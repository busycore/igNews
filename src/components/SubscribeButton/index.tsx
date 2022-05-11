import { signIn, useSession } from "next-auth/react";
import { api } from "../../services/api";
import { getStripeJS } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton(props: SubscribeButtonProps) {
  const session = useSession().data;

  async function createSubscribeSection() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe");
      console.log(response);
      const { sessionId } = response.data;

      const stripe = await getStripeJS();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err);
    }
  }

  return (
    <button
      className={styles.subscribeButton}
      type="button"
      onClick={() => createSubscribeSection()}
    >
      Subscribe now
    </button>
  );
}
