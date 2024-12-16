import Accordion from './components/Accordion/Accordion';
import './index.css';
import Content from "./components/pages/Content.tsx";

const App = () => {

    const accordionItems = [
        {
            id: '1',
            title: 'Metadata',
            content: <Content/>,
        },
        {
            id: '2',
            title: 'Content',
            content: <Content/>,
        }
    ];

    return (
        <div className="app">
            <h1>VQA</h1>
            <Accordion items={accordionItems} allowMultipleOpen={true}/>
        </div>
    );
};

export default App;
