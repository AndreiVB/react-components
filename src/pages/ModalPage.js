import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

	const handleClose = () => {
		setShowModal(false);
	};

	const actionBar = <div><Button onClick={handleClose} primary>I accept</Button></div>;
	const modal = <Modal onClose={handleClose} actionBar={actionBar}>
			<p>Here is something important</p>
		</Modal>
    return (
			<div>
				<Button onClick={handleClick} primary>
					Open modal
				</Button>
				{showModal && modal}
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
					vestibulum tellus vel venenatis iaculis. Phasellus vitae interdum
					libero. Pellentesque egestas lobortis elementum. Integer eget mattis
					lectus. Suspendisse ultrices odio et magna lacinia, quis blandit urna
					mattis. Pellentesque a sem sed sapien fringilla blandit in a felis. In
					eu blandit ex. Pellentesque in vulputate orci, eu molestie tortor.
					Quisque tincidunt malesuada neque, eu viverra diam fringilla non.
					Integer porttitor arcu felis, in lacinia sapien pellentesque ac. Donec
					ultricies justo leo, at lacinia magna auctor vitae. Quisque ipsum
					odio, elementum nec molestie ac, accumsan non neque. Praesent sit amet
					tincidunt enim, ac accumsan massa. Aliquam sagittis pretium libero,
					sed sodales urna venenatis id. Nulla facilisi. Phasellus arcu leo,
					tincidunt nec lacus dignissim, pellentesque pulvinar risus. Ut euismod
					orci at odio feugiat facilisis. Fusce sed sem purus. Sed ornare justo
					et nibh malesuada, laoreet fermentum dui varius. Phasellus arcu quam,
					volutpat non turpis vitae, aliquam luctus ante. Duis tincidunt, elit
					ut consequat posuere, purus nisl fermentum est, vel fringilla dui orci
					ut velit. Nam ullamcorper eget metus vel mollis. Morbi maximus ipsum
					id lacus egestas, eu congue felis mattis. Integer eu dolor justo.
					Donec sed sem mauris. Morbi tristique varius leo.
				</p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum
				tellus vel venenatis iaculis. Phasellus vitae interdum libero.
				Pellentesque egestas lobortis elementum. Integer eget mattis lectus.
				Suspendisse ultrices odio et magna lacinia, quis blandit urna mattis.
				Pellentesque a sem sed sapien fringilla blandit in a felis. In eu
				blandit ex. Pellentesque in vulputate orci, eu molestie tortor. Quisque
				tincidunt malesuada neque, eu viverra diam fringilla non. Integer
				porttitor arcu felis, in lacinia sapien pellentesque ac. Donec ultricies
				justo leo, at lacinia magna auctor vitae. Quisque ipsum odio, elementum
				nec molestie ac, accumsan non neque. Praesent sit amet tincidunt enim,
				ac accumsan massa. Aliquam sagittis pretium libero, sed sodales urna
				venenatis id. Nulla facilisi. Phasellus arcu leo, tincidunt nec lacus
				dignissim, pellentesque pulvinar risus. Ut euismod orci at odio feugiat
				facilisis. Fusce sed sem purus. Sed ornare justo et nibh malesuada,
				laoreet fermentum dui varius. Phasellus arcu quam, volutpat non turpis
				vitae, aliquam luctus ante. Duis tincidunt, elit ut consequat posuere,
				purus nisl fermentum est, vel fringilla dui orci ut velit. Nam
				ullamcorper eget metus vel mollis. Morbi maximus ipsum id lacus egestas,
				eu congue felis mattis. Integer eu dolor justo. Donec sed sem mauris.
				Morbi tristique varius leo.
			</div>
		);
}

export default ModalPage;