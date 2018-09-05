
import React from 'react';
import ReactDom from 'react-dom';
import ElfHeader from './ElfHeader';
import  { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react';

//instantiate Adapter with config
configure({ adapter: new Adapter});

describe('ElfHeader tests', function(){

	it('Renders without crashing', () => {
		const div = document.createElement("div");
		ReactDom.render(<ElfHeader />, div);
		ReactDom.unmountComponentAtNode(div);
	});
})