import React, {useState} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

type AccordionItem = {
    id: string;
    title: string;
    content: React.ReactNode;
};

type AccordionProps = {
    items: AccordionItem[];
    allowMultipleOpen?: boolean;
    variant?: 'default' | 'alternative';
};

const Accordion: React.FC<AccordionProps> = ({
                                                 items,
                                                 allowMultipleOpen,
                                                 variant = 'default',
                                             }) => {
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
        <AccordionContainer variant={variant}>
            {items.map(({id, title, content}) => {
                const isOpen = openItems.includes(id);
                return (
                    <AccordionItem key={id} isOpen={isOpen} variant={variant}>
                        <AccordionHeader
                            onClick={() => toggleItem(id)}
                            aria-expanded={isOpen}
                            variant={variant}
                        >
                            {/* Conditional Symbol Rendering */}
                            <Symbol isOpen={isOpen} variant={variant}>
                                {variant === 'default' ? (
                                    isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.36334 4.77345L1.76344 10.4061C1.41219 10.7708 1.41219 11.3621 1.76344 11.7266C2.11438 12.0911 2.68356 12.0911 3.03447 11.7266L7.99886 6.67598L12.9655 11.7263C13.3166 12.0908 13.8858 12.0908 14.2367 11.7263C14.5878 11.3617 14.5878 10.7705 14.2367 10.4058L8.63423 4.7733C8.45868 4.59103 8.22884 4.5 7.99888 4.5C7.76882 4.5 7.53881 4.59121 7.36334 4.77345Z"
                                                fill="#0056B6"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8.63666 12.2266L14.2366 6.59388C14.5878 6.22919 14.5878 5.63792 14.2366 5.27341C13.8856 4.90887 13.3164 4.90887 12.9655 5.27341L8.00114 10.324L3.03446 5.27372C2.68338 4.90918 2.11425 4.90918 1.76331 5.27372C1.41223 5.63826 1.41223 6.22951 1.76331 6.5942L7.36577 12.2267C7.54132 12.409 7.77116 12.5 8.00112 12.5C8.23118 12.5 8.46119 12.4088 8.63666 12.2266Z"
                                                fill="#0056B6"
                                            />
                                        </svg>
                                    )
                                ) : isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19.4866 10.5L4.51403 10.5C3.6792 10.5 3 11.1733 3 12.0003C3 12.827 3.67894 13.5 4.51403 13.5H19.4866C20.3211 13.5 21 12.827 21 12.0003C21.0001 11.1733 20.3211 10.5 19.4866 10.5Z"
                                            fill="#0056B6"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19.4866 10.4866H13.514V4.51291C13.5141 3.67862 12.8351 3 12 3C11.1649 3 10.486 3.67862 10.486 4.51291V10.4866H4.51403C3.6792 10.4866 3 11.1658 3 12C3 12.834 3.67894 13.5129 4.51403 13.5129H10.486V19.4866C10.486 20.3211 11.1646 21 12 21C12.8351 21 13.514 20.3211 13.514 19.4866V13.5129H19.4866C20.3211 13.5129 21 12.834 21 12C21.0001 11.1658 20.3211 10.4866 19.4866 10.4866Z"
                                            fill="#0056B6"
                                        />
                                    </svg>
                                )}
                            </Symbol>
                            <Title>{title}</Title>
                        </AccordionHeader>
                        <AccordionContent isOpen={isOpen} variant={variant}>
                            {content}
                        </AccordionContent>
                    </AccordionItem>
                );
            })}
        </AccordionContainer>
    );
};

export default Accordion;

// == Styled components == //

const AccordionContainer = styled.div<{ variant: string }>`
    display: flex;
    flex-direction: column;
    ${({variant}) =>
            variant === 'alternative' &&
            css`
                gap: 32px;
                //width: 90%;
                //margin: 32px auto 0;
                margin: 32px 16px auto 16px;
            `}
`;

const AccordionItem = styled.div<{ isOpen: boolean; variant: string }>`
    overflow: hidden;
    //background-color: aqua;
    ${({variant, isOpen}) =>
            variant === 'alternative'
                    ? css`
                        border: 1px solid #e0e0e0;
                        border-radius: 4px;
                        background-color: ${isOpen ? '#e0e0e0' : '#f0f0f0'};
                    `
                    : css`
                        border-bottom: 1px solid #f5f5f5;
                    `}
`;

const AccordionHeader = styled.button<{ variant: string }>`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 16px;
    cursor: pointer;
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    line-height: 130%;
    letter-spacing: 0.15px;
    font-weight: 600;
    color: #333;

    ${({variant}) =>
            variant === 'alternative' &&
            css`
                background-color: #f5f5f5;

                &:hover {
                    background-color: #f0f0f0;
                }
            `}
    &:focus {
        outline: 1px solid #f5f5f5;
        outline-offset: 2px;
    }
`;

const Symbol = styled.span<{ isOpen: boolean; variant: string }>`
    font-size: 20px;
    font-weight: bold;
    color: #0056b6;
    transition: transform 0.3s ease, color 0.3s ease;
`;

const Title = styled.span`
    flex: 1;
    text-align: left;
    padding-left: 8px;
`;

const AccordionContent = styled.div<{ isOpen: boolean; variant: string }>`
    padding: 12px 16px;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
    animation: ${({isOpen}) => (isOpen ? 'fadeIn 0.3s ease-in' : 'none')};
`;
