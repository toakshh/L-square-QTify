import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ReactComponent as ArrowDown } from '../../../assets/svg/ArrowDown.svg';
import "./AccordionItem.css"

const AccordionItem = (props) => {
    const {heading, paragraph} = props;
    return (
        <Accordion style={{
            fontWeight: "500",
            color: "var(--light-color)",
            borderRadius: "10px",
            border: "1px solid #FFF",
            fontSize: "20px",
            textAlign: "left"
        }}>
            <AccordionSummary
                expandIcon={<ArrowDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ borderRadius: "10px",backgroundColor:"var(--dark-color)" }}
            >
                <Typography>{heading}</Typography>
            </AccordionSummary>

            <AccordionDetails
                style={{
                    backgroundColor: "var(--light-color)",
                    color: "var(--dark-color)",
                    borderRadius: " 0 0 10px 10px",
                    fontSize:"18px"
                }} >
                <Typography>
                   {paragraph}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionItem