import React from 'react'
import BigText from 'ink-big-text';

export const Header = () => {
  return (
		<BigText
			text="Elegant Weather"
			font="chrome"
			align="center"
			colors={["cyan", "greenBright"]}
		/>
	);
}
