import styles from "./ListItem.module.scss";
import reportIcon from "../../../assets/report.svg";

interface IListItem {
	imgSrc: string;
	symbol: string;
	currencyName: string;
	currencyPrice: string;
}

const ListItem = (props: IListItem) => {
	return (
		<li className={styles.ListItem}>
			<div className={styles.firstColumn}>
				<img src={props.imgSrc} alt="" width={28} height={28} />
				<span className={styles.symbol}>{props.symbol}</span>
				<span className={styles.nameOfCurrency}>{props.currencyName}</span>
			</div>
			<div className={styles.secondColumn}>{props.currencyPrice}</div>
			<div className={styles.thirdColumn}>
				<img src={reportIcon} alt="Ícone da moeda" className={styles.reportIcon} />
			</div>
		</li>
	);
};

export default ListItem;
