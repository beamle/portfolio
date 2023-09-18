import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import s from "./Stack.module.css";
import Avatar from "@mui/material/Avatar";
import {Stack} from "@mui/material";


const DemoPaper = styled(Paper)(({theme}) => ({
    width: 50,
    height: 50,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    margin: 2,
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
            <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 16}}>
                <Stack direction="row" spacing={2}>
                    <DemoPaper > <img src="./pics/mui.png" alt="Mui Logo" width="100%" height="100%" /></DemoPaper>
                    <DemoPaper ><img src="./pics/react.png" alt="Mui Logo" width="100%" height="100%" /></DemoPaper>
                    <DemoPaper ><img src="./pics/storybook.png" alt="Mui Logo" width="100%" height="100%" /></DemoPaper>
                    <DemoPaper ><img src="./pics/logo-javascript.svg" alt="Mui Logo" width="100%" height="100%" /></DemoPaper>
                    <DemoPaper ><img src="./pics/jest-logo-png-transparent.png" alt="Mui Logo" width="100%" height="100%" /></DemoPaper>

                </Stack>
                <Stack direction="row" spacing={2}>
                    <DemoPaper ><img src="./pics/html-1.svg" alt="Mui Logo" width="100%" height="100%" /></DemoPaper>
                    <DemoPaper ><img src="./pics/css-3.svg" alt="Mui Logo" width="100%" height="100%" /></DemoPaper>
                    <DemoPaper ><img src="./pics/postman.svg" alt="Mui Logo" width="100%" height="100%" /></DemoPaper>
                    <DemoPaper ><img src="./pics/redux.svg" alt="Mui Logo" width="100%" height="100%" /></DemoPaper>
                    <DemoPaper ><img src="./pics/formik.png" alt="Mui Logo" width="100%" height="100%" /></DemoPaper>

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