import { GoBell, GoCloudDownload, GoCreditCard } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
	const handleClick = () => {
		
	};

	const handleHover = () => {
		
	};

	return (
		<div>
			<div>
				<Button primary rounded outline onClick={handleClick} className="mb-5">
					<GoBell />
					Click me!
				</Button>
			</div>
			<div>
				<Button secondary outline onMouseEnter={handleHover}>
					<GoCloudDownload />
					Byee bye!
				</Button>
			</div>
			<div>
				<Button success>
					<GoCreditCard /> Click bait!
				</Button>
			</div>
			<div>
				<Button warning outline>
					Click him!
				</Button>
			</div>
			<div>
				<Button danger rounded>
					Click us!
				</Button>
			</div>
		</div>
	);
}

export default ButtonPage;
