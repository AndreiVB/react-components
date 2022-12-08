import Accordion from "./components/Accordion";

function App() {
	const items = [
		{
			id: "1",
			label: "First label",
			content:
				"Some content one.Some content one.Some content one.Some content one.Some content one.Some content one.Some content one",
		},
		{
			id: "2",
			label: "Second label",
			content:
				"Some content two.Some content two.Some content two.Some content two.Some content two",
		},
		{
			id: "3",
			label: "Third label",
			content:
				"Some content three.Some content three.Some content three.Some content three.Some content three",
		},
	];

    return <Accordion items={items}/>;
}

export default App;