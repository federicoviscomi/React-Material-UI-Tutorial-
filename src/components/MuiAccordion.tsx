import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | undefined>(undefined);
    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : undefined);
    };
    return (
        <Stack>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={(_, isExpanded) => handleChange(isExpanded, 'panel1')}
            >
                <AccordionSummary
                    id='panel1-header'
                    aria-controls="panel1-content"
                >
                    <Typography variant="h5">Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem facere, rerum beatae nostrum sed eum, animi ratione mollitia placeat asperiores nihil reprehenderit iure quisquam voluptas accusamus quasi consectetur laborum corporis.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={(_, isExpanded) => handleChange(isExpanded, 'panel2')}
            >
                <AccordionSummary
                    id='panel2-header'
                    aria-controls="panel2-content"
                >
                    <Typography variant="h5">Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem facere, rerum beatae nostrum sed eum, animi ratione mollitia placeat asperiores nihil reprehenderit iure quisquam voluptas accusamus quasi consectetur laborum corporis.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={(_, isExpanded) => handleChange(isExpanded, 'panel3')}
            >
                <AccordionSummary
                    id='panel3-header'
                    aria-controls="panel3-content"
                >
                    <Typography variant="h5">Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem facere, rerum beatae nostrum sed eum, animi ratione mollitia placeat asperiores nihil reprehenderit iure quisquam voluptas accusamus quasi consectetur laborum corporis.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Stack >
    );
};