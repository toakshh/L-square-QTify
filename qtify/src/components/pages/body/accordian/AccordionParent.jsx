import React from 'react';
import "./AccordionParent.css"
import AccordionItem from './AccordionItem';


const AccordionParent = () => {
    return (
        <div className='accordion-parent'>
            <h1>FAQ</h1>
            <div className='accordion-child'>
                <AccordionItem 
                    heading="Is QTify free to use?" 
                    paragraph="Yes! It is 100% free, and has 0% ads!"
                />
                
                <AccordionItem 
                    heading="Can I download and listen to songs offline?" 
                    paragraph="Sorry, unfortunately we don't provide the service to download any songs."
                />
            </div>
            
        </div>
       
    )
}

export default AccordionParent