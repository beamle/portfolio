import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import s from "./Stack.module.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";


const Item = styled(Paper)(({theme}) => ({
    width: 100,
    height: 100,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    borderRadius: 50,
    boxShadow: '0px 4px 8px rgb(244 244 244 / 31%)',
}));


export default function SquareCorners() {
    return (
        <div className={s.stack}>
            <Container>
                <h1>Stack</h1>
            </Container>
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5,  flexWrap: 'wrap'}}>
                <Stack className={s.stack__container} direction="row" sx={{display: 'flex', flexWrap: 'wrap', gap: 5, maxWidth: '75%'}}>
                    <Item className={s.stackItem}> <img src="./pics/mui.png" alt="Mui Logo" width="100%" height="100%" /></Item>
                    <Item className={s.stackItem}><img src="./pics/react.png" alt="react Logo" width="100%" height="100%" /></Item>
                    <Item className={s.stackItem}><img src="./pics/storybook.png" alt="storybook Logo" width="100%" height="100%" /></Item>
                    <Item className={s.stackItem}><img src="./pics/logo-javascript.svg" alt="javascript Logo" width="100%" height="100%" /></Item>
                    <Item className={s.stackItem}><img src="./pics/jest-logo-png-transparent.png" alt="jest Logo" width="100%" height="100%" /></Item>
                    <Item className={s.stackItem}><img src="./pics/html-1.svg" alt="html Logo" width="100%" height="100%" /></Item>
                    <Item className={s.stackItem}><img src="./pics/css-3.svg" alt="css Logo" width="100%" height="100%" /></Item>
                    <Item className={s.stackItem}><img src="./pics/postman.svg" alt="postman Logo" width="100%" height="100%" /></Item>
                    <Item className={s.stackItem}><img src="./pics/redux.svg" alt="redux Logo" width="100%" height="100%" /></Item>
                    <Item className={s.stackItem}><img src="./pics/formik.png" alt="formik Logo" width="100%" height="100%" /></Item>
                </Stack>
            </Container>
        </div>
    );
}

// const Item = styled(Paper)(({theme}) => ({
//     backgroundColor: '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     borderRadius: '50px',
//     width: '50px',
//     height: '50px',
//
//     color: theme.palette.text.secondary,
// }));
//
// function FormRow() {
//     return (
//         <React.Fragment>
//             <Grid item xs={2}>
//                 <Item elevation={2}></Item>
//             </Grid>
//             <Grid item xs={2}>
//                 <Item>Item</Item>
//             </Grid>
//             <Grid item xs={2}>
//                 <Item>Item</Item>
//             </Grid>
//             <Grid item xs={2}>
//                 <Item>Hell</Item>
//             </Grid>
//             <Grid item xs={2}>
//                 <Item>Item</Item>
//             </Grid>
//             <Grid item xs={2}>
//                 <Item>Item</Item>
//             </Grid>
//         </React.Fragment>
//     );
// }
//
// export default function NestedGrid() {
//     return (
//         <div className={s.stack}>
//             <Container>
//                 <h1>Stack</h1>
//             </Container>
//             <Container>
//                 <Box sx={{flexGrow: 1}}>
//                     <Grid container spacing={1}>
//                         <Grid container item spacing={3}>
//                             <FormRow/>
//                         </Grid>
//                         <Grid container item spacing={3}>
//                             <FormRow/>
//                         </Grid>
//                         <Grid container item spacing={3}>
//                             <FormRow/>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Container>
//         </div>
//     );
// }