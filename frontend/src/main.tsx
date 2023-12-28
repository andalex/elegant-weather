#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import { App } from './view/App.js';

const cli = meow(
	`
	Usage
	  $ elegant-weather

	Options
		--name  Your name

	Examples
	  $ elegant-weather --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
			},
		},
	},
);

render(<App />);