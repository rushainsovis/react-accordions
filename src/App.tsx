import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './components/Accordion/Accordion';
import './index.css'; // Global styles for the demo

const App = () => {
    const accordionItems = [
        {
            id: '1',
            title: 'Metadata',
            content: <p>Content for metadata section.</p>,
        },
        {
            id: '2',
            title: 'Content',
            content: <p>Content for content section.</p>,
        }
    ];

    return (
        <div className="app">
            <h1>Accordion Demo</h1>
            <Accordion items={accordionItems} />
        </div>
    );
};

export default App;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);