import styles from "./ListOfCrypto.module.scss";
import ListItem from "./components/ListItem";
import { useEffect, useState } from "react";
import { getCrypto } from "../../services/cryptoService";
import { CryptoCurrency } from "../../interfaces/CryptoCurrency";

const ListOfCrypto = () => {
	const [cryptoTop10, setCryptoTop10] = useState<CryptoCurrency[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		getCrypto()
			.then((response) => {
				setLoading(false);

				if (!response) return;

				setCryptoTop10(response.data);
			})
			.catch((error) => {});
	}, []);

	return (
		<div className={styles.ListOfCrypto}>
			<ul className={styles.ul}>
				<li className={styles.tableHeader}>
					<div className={styles.firstColumn}>Rank</div>
					<div className={styles.secondColumn}>Nome</div>
					<div className={styles.thirdColumn}>Preço</div>
					<div className={styles.fourthColumn}>Ações</div>
				</li>
				{!loading &&
					cryptoTop10.map((item) => (
						<ListItem
							key={item.id}
							{...item}
							// imgSrc={reactIcon}
						/>
					))}
			</ul>
		</div>
	);
};

export default ListOfCrypto;
