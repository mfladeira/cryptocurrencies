import styles from "./Header.module.scss";
import metaMaskIcon from "../../assets/metamask.svg";
import coingecko from "../../assets/coingecko.svg";

const Header = () => {
	return (
		<header className={styles.Header}>
			<div className={styles.container}>
				<img src={coingecko} alt="Ícone do MetaMask" className={styles.coingecko} />
				<div className={styles.containerRight}>
					<button className={styles.btnConnect}>Conectar MetaMask</button>
					<img src={metaMaskIcon} alt="Ícone do MetaMask" className={styles.metamask} />
				</div>
			</div>
		</header>
	);
};

export default Header;
