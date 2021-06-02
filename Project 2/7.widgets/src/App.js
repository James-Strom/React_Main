import React, { useEffect, useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The Colour Red',
        value: 'red'
    },
    {
        label: 'The Colour Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    },
    
]

const App = () => {

    return (
        <div>
            <Translate />
            {/* {showDropdown ?
                <Dropdown
                    selected={selected} 
                    onSelectedChange={setSelected}
                    options={options}
                /> : null
            } */}
            {/* <Accordion items={items} /> */}
        </div>
    );
};

export default App;