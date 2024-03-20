import styles from "./ListOfCrypto.module.scss";
import ListItem from "./components/ListItem";
import { useEffect, useState } from "react";
import { getCrypto } from "../../services/cryptoService";
import { CryptoCurrency } from "../../interfaces/CryptoCurrency";
import { Link } from "react-router-dom";

const ListOfCrypto = () => {
	const [cryptoTop10, setCryptoTop10] = useState<CryptoCurrency[]>([]);
	const [loading, setLoading] = useState(false);

	const getCryptoTop10 = async () => {
		const response = await getCrypto();
		if (!response) return;
		setCryptoTop10(response);
	};

	useEffect(() => {
		setLoading(true);
		getCryptoTop10();
		setLoading(false);
	}, []);

	// Effect to make request each 10s to update the currencyCrypto value
	// useEffect(() => {
	// 	const idInterval = setInterval(() => {
	// 		getCryptoTop10();
	// 	}, 10000);

	// 	return () => clearInterval(idInterval);
	// });

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
						<Link key={item.id} state={{ ...item }} to={{ pathname: "/details" }} style={{ textDecoration: "none" }}>
							<ListItem  {...item} />
						</Link>
					))}
			</ul>
		</div>
	);
};

export default ListOfCrypto;
