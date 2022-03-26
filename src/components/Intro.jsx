import React from "react";
import { Button, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Background3D from "../components/DistortPlane";

const Intro = () => {


    return (
        <>
            <Background3D/>
            <Box
                justifyContent="center" component="span" mt={10} className="Intro"
                sx={{ display: 'inline-block', mx: '2px', width:'60vw'}}
            >
                <Typography inline variant="h3" align="left" color="textPrimary" >👋 Hello! I am</Typography>
                <Typography inline variant="h1" align="left" gutterBottom='true' color="textPrimary">Charlotte Cheng,</Typography>
                <Typography inline variant="h5" align="left"  gutterBottom='true' color="textPrimary">and I am a third year Software Engineering student at McMaster University.</Typography>
                <Typography inline variant="h5" align="left" color="textPrimary">I am currently working as a Junior Backend Developer / DevOps Engineer at IBM. I've also volunteered at Illetonna as a NLP Program Manager in the past.</Typography>
            </Box>
        </>
    );
};
export default Intro;
