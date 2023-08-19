import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './DownloadHistory.css'
const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames('AccordionTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
));

// Set display name for AccordionTrigger
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
));

// Set display name for AccordionContent
AccordionContent.displayName = 'AccordionContent';

export const AccordionDemo = () => {
    return (
        <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>

    
        <Accordion.Item className="AccordionItem" value="item-2">
          <AccordionTrigger>Framework?</AccordionTrigger>
          <AccordionContent>
            Next-React
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-1">
          <AccordionTrigger>The Library?</AccordionTrigger>
          <AccordionContent>Yes. I used <strong>jspdf</strong> for PDf document convertion & creation.</AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
          <AccordionTrigger>styling?</AccordionTrigger>
          <Accordion.Content className="AccordionContent">
            <div className="AccordionContentText">
              Tailwind, sure it is the ONLY maintainable way to style my site
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );
};
