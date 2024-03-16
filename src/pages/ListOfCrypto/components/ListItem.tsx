import styles from "./ListItem.module.scss";
import reportIcon from "../../../assets/report.svg";
import { CryptoCurrency } from "../../../interfaces/CryptoCurrency";

const ListItem = (props: CryptoCurrency) => {
	return (
		<li className={styles.ListItem}>
			<div className={styles.firstColumn}>
				{props.rank}
			</div>
			<div className={styles.secondColumn}>
				{/* <img src={props.imgSrc} alt="" width={28} height={28} /> */}
				<span className={styles.symbol}>{props.symbol}</span>
				<span className={styles.nameOfCurrency}>{props.name}</span>
			</div>
			<div className={styles.thirdColumn}>{Number(props.priceUsd).toFixed(2)}</div>
			<div className={styles.fourthColumn}>
				<img src={reportIcon} alt="Ícone da moeda" className={styles.reportIcon} />
			</div>
		</li>
	);
};

export default ListItem;
