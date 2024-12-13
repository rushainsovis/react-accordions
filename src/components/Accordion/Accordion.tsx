import React, { useState } from 'react';
import './Accordion.module.css';

type AccordionItem = {
    id: string;
    title: string;
    content: React.ReactNode;
};

type AccordionProps = {
    items: AccordionItem[];
    allowMultipleOpen?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ items, allowMultipleOpen = false }) => {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        setOpenItems((prev) => {
            if (prev.includes(id)) {
                return prev.filter((itemId) => itemId !== id);
            } else {
                return allowMultipleOpen ? [...prev, id] : [id];
            }
        });
    };

    return (
        <div className="accordion">
            {items.map(({ id, title, content }) => (
                <div key={id} className="accordion-item">
                    <button
                        className="accordion-header"
                        onClick={() => toggleItem(id)}
                        aria-expanded={openItems.includes(id)}
                    >
                        {title}
                    </button>
                    <div
                        className={`accordion-content ${openItems.includes(id) ? 'open' : ''}`}
                        style={{ display: openItems.includes(id) ? 'block' : 'none' }}
                    >
                        {content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;