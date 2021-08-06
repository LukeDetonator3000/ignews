import styles from './styles.module.scss'

interface SubscribeInButtonProps {
    priceId: string;
}

export function SubscribeInButton({ priceId }: SubscribeInButtonProps) {
    return (
        <button
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe!
        </button>
    );
}