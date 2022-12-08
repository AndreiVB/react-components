import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({items}) {
	const [expandedIndex, setExpandedIndex] = useState(-1);
	//is recommended that handle click is outside the mapping function
	const handleClick = (nextIndex) => {
		setExpandedIndex(nextIndex);
		if (expandedIndex === nextIndex) {
			setExpandedIndex(-1);
		} else {
			setExpandedIndex(nextIndex);
		}
	};

	// used very rare if the a value dependeds on an old one; tested with $0.click();$0.click(); in the console

	// const handleClick = (nextIndex) => {
	//     console.log('stale version of expandedIndex', expandedIndex);
	// 		setExpandedIndex((currentExpandedIndex) => {
	//             console.log('up to date version', currentExpandedIndex);
	//             if(currentExpandedIndex === nextIndex) {
	//                 return -1;
	//             } else {
	//                 return nextIndex;
	//             }
	//         });
	// 	};

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;
		const icon = (
			<span className="text-xl">
				{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
			</span>
		);
		return (
			<div key={item.id}>
				<div
					className="flex justify-between p-3 bg-gray-400 border-b items-center cursor-pointer"
					onClick={() => handleClick(index)}
				>
					{item.label}
					{icon}
				</div>
				{isExpanded && (
					<div className="border-b p-5 bg-gray-200">{item.content}</div>
				)}
			</div>
		);
	});

	return <div className="border-x border-t roudned">{renderedItems}</div>;
}

export default Accordion;