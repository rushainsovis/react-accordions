import React, { useState } from 'react';
import styles from './Accordion.module.css';

type AccordionItem = {
    id: string;
    title: string;
    content: React.ReactNode;
};

type AccordionProps = {
    items: AccordionItem[];
    allowMultipleOpen?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ items, allowMultipleOpen }) => {
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
        <div className={styles.accordion}>
            {items.map(({ id, title, content }) => {
                const isOpen = openItems.includes(id);
                return (
                    <div
                        key={id}
                        className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
                    >
                        <button
                            className={styles.accordionHeader}
                            onClick={() => toggleItem(id)}
                            aria-expanded={isOpen}
                        >
                            <span
                                className={`${styles.symbol} ${isOpen ? styles.rotate : ''}`}
                            >
                                {isOpen ? '-' : '+'}
                            </span>
                            <span className={styles.title}>{title}</span>
                        </button>
                        <div
                            className={styles.accordionContent}
                            style={{ display: isOpen ? 'block' : 'none' }}
                        >
                            {content}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;
