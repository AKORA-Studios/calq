import { Box, Button, Center, Grid, } from "@chakra-ui/react";
import { Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { Component } from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { Page } from '../../Components';

const validationSchema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
});



export class LoginPage extends Component {
    initialValues = {

    };

    onSubmit(values: {}) {
        window.alert(JSON.stringify(values, null, 4));
    }



    render() {
        return (
            <Page name="login" style={{ color: '#ffffff' }}>
                <Center>
                    <Formik
                        initialValues={this.initialValues}
                        onSubmit={this.onSubmit}
                        validationSchema={validationSchema}>

                        {({ handleSubmit, values, errors }) => (
                            <Box
                                borderWidth="1px"
                                rounded="lg"
                                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                                maxWidth={800}
                                p={6}
                                m="10px auto"
                                pt="5px"
                                as="form"
                                onSubmit={handleSubmit as any}>

                                <InputControl name="username" label="Username" />
                                <InputControl name="password" label="Password" />
                                <Grid>
                                    <SubmitButton>Login</SubmitButton>
                                    <Button as="a" href="/register" colorScheme="teal" backgroundColor="transparent" mt="3%">Register</Button>
                                </Grid>
                            </Box>
                        )}
                    </Formik>
                </Center>
            </ Page>
        )
    }
}