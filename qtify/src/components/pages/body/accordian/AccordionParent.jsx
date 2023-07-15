import React from 'react';
import "./AccordionParent.css"
import AccordionItem from './AccordionItem';


const AccordionParent = () => {
    return (
        <div className='accordion-parent'>
            <h1>FAQ</h1>
            <div className='accordion-child'>
                <AccordionItem heading="one" paragraph="rositen sriotn otiens toisten aotinars toirsntot iensatoisartn rsoitern tioraetn raotirsnea toisarnt oarsitenar toiraset "/>
                <AccordionItem heading="two" paragraph="nitrsnteoa rstneao teiaoston itoena toiesrtn oritnstie raotn itoarsnteraist onrati raotier sntoiarstn oitena tiearnti aostnsrtie orant eriaotn rtieosrnt ioet nairstoe rseiotno sitoen rsatioer stnoiretn resitonar toiaorns tsiotn satinarstiosrantiarestn tinrsatoiartn eoitnersat oiare"/>
            </div>
            
        </div>
       
    )
}

export default AccordionParent