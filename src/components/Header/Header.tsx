import styles from "./Header.module.scss";
import metaMaskIcon from "../../assets/metamask.svg";
import coingecko from "../../assets/coingecko.svg";
import Web3 from "web3";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/metaMaskSlice";
import { RootState } from "../../redux/store";

const Header = () => {
	const account = useSelector((state: RootState) => state.metaMask.account);
	const dispatch = useDispatch();

	const connectToMetaMask = async () => {
		if (window.ethereum) {
			try {
				// To connect to metamask
				await window.ethereum.request({ method: "eth_requestAccounts" });
				const web3 = new Web3(window.ethereum);

				const accounts = await web3.eth.getAccounts();

				const balance = await web3.eth.getBalance(accounts[0]);

				const balanceInEther = web3.utils.fromWei(balance, "ether");

				dispatch(login({ id: accounts[0], balance: balanceInEther }));
			} catch (error) {
				console.error("Error connecting to MetaMask:", error);
			}
		} else {
			console.error("MetaMask not detected");
		}
	};

	return (
		<header className={styles.Header}>
			<div className={styles.container}>
				<img src={coingecko} alt="Ícone do Coin Gecko" className={styles.coingecko} />
				<div className={styles.containerRight}>
					{account.id ? (
						<div className={styles.containerAccount}>
							<p>
								Conta: {account.id.slice(0, 7)}...{account.id.slice(account.id.length - 5)}
							</p>
							<p>Saldo: {account.balance.slice(0, -1)} ETH</p>
						</div>
					) : (
						<button onClick={connectToMetaMask} className={styles.btnConnect}>
							Conectar MetaMask
						</button>
					)}

					<img src={metaMaskIcon} alt="Ícone do MetaMask" className={styles.metamask} />
				</div>
			</div>
		</header>
	);
};

export default Header;
