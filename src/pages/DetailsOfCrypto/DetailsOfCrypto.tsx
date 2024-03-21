import { Link, useLocation } from "react-router-dom";
import styles from "./DetailsOfCrypto.module.scss";
import { CryptoCurrency } from "../../interfaces/CryptoCurrency";
import { formatNumber } from "../../helpers/formatNumber";
import { getMarketChartOfCrypto } from "../../services/cryptoService";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import { formatTimestampToTime } from "../../helpers/formatTimestampToTime";

const DetailsOfCrypto = () => {
	let state = useLocation().state as CryptoCurrency;
	const [marketChart, setMarketChart] = useState<Array<CryptoMarketChart>>();
	let didInit = false;

	const getMarketChart = async () => {
		const marketChart = await getMarketChartOfCrypto(state.id);
		setMarketChart(marketChart);
	};

	useEffect(() => {
		if (didInit) return;

		getMarketChart();

		return () => {
			didInit = true;
		};
	}, []);

	const CustomTooltip: React.FC<{ active: boolean; payload: Array<{ payload: CryptoMarketChart }> | undefined }> = ({
		active,
		payload,
	}) => {
		if (active && payload && payload.length) {
			const data = payload[0].payload;

			return (
				<div className={styles.tooltip}>
					<div>
						<p className={styles.text}>{new Date(data[0]).toLocaleDateString()}</p>
						<p className={styles.text} style={{ fontWeight: 700 }}>
							${data[1].toFixed(2)}
						</p>
					</div>
					<div>
						<p className={styles.text}>{formatTimestampToTime(data[0])}</p>
					</div>
				</div>
			);
		}

		return null;
	};

	return (
		<main className={styles.DetailsOfCrypto}>
			<section className={styles.card}>
				<p className={styles.linkToGoBack}>
					<Link to={"/"}>Página inicial</Link> <span className={styles.greater}>{">"}</span> Valor do{" "}
					{state.name}
				</p>
				<header className={styles.header}>
					<div className={styles.containerLeft}>
						<div className={styles.containerCoin}>
							<img className={styles.coinImg} src={state.image} alt="Image de um token" />
							<span className={styles.coinName}>Valor do {state.name}</span>
							<span className={styles.coinSymbol}>({state.symbol})</span>
						</div>
						<div className={styles.containerPrice}>
							<span className={styles.coinPrice}>${state.current_price}</span>
							<span
								className={styles.coinChangePercentage}
								style={{
									color: Number(state.price_change_percentage_24h) < 0 ? "#d01919fc" : "#1c8e1c",
								}}
							>
								{state.price_change_percentage_24h.toFixed(2)}%
							</span>
							<span className={styles.symbol24H}>24H</span>
						</div>
					</div>
					<div className={styles.containerRight}>
						<span className={styles.high24h}>
							<span className={styles.field}>Preço máximo(24h)</span> ${state.high_24h.toFixed(2)}
						</span>
						<span className={styles.low24h}>
							<span className={styles.field}>Preço mínimo(24h)</span> ${state.low_24h.toFixed(2)}
						</span>
						<span className={styles.low24h}>
							<span className={styles.field}>Volume(24h)</span> ${formatNumber(state.total_volume)}
						</span>
					</div>
				</header>
				<section className={styles.graphic}>
					<ResponsiveContainer width="100%" height={400}>
						<LineChart data={marketChart}>
							<XAxis dataKey="0" tickFormatter={formatTimestampToTime} stroke="#c7c7c7d1" />
							<YAxis
								domain={["auto", "auto"]}
								stroke="#c7c7c7d1"
								padding={{ bottom: 20 }}
								tickFormatter={(value) => `$${value}`}
							/>
							<Tooltip content={<CustomTooltip active={false} payload={undefined} />} />
							<CartesianGrid stroke="#ffffff33" strokeDasharray="3 3" />
							<Line type="monotone" dataKey="1" stroke="#82ca9d" activeDot={{ r: 8 }} />
						</LineChart>
					</ResponsiveContainer>
				</section>
			</section>
		</main>
	);
};

export default DetailsOfCrypto;
