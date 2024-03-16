import styles from "./ListOfCrypto.module.scss";
import ListItem from "./components/ListItem";
import reactIcon from "../../assets/react.svg";

const ListOfCrypto = () => {
	const mockList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<div className={styles.ListOfCrypto}>
			<ul className={styles.ul}>
				<li className={styles.tableHeader}>
					<div className={styles.firstColumn}>Nome</div>
					<div className={styles.secondColumn}>Preço</div>
					<div className={styles.thirdColumn}>Ações</div>
				</li>
				{mockList.map((item, i) => (
					<ListItem
						key={i}
						currencyName="Bitcoin"
						currencyPrice="$64,000.00"
						symbol="BTC"
						imgSrc={reactIcon}
					/>
				))}
			</ul>
		</div>
	);
};

export default ListOfCrypto;
