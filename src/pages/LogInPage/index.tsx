import { Box, Button, Center, Grid, useToast, } from "@chakra-ui/react";
import { Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { FC } from "react";
import * as Yup from 'yup';
import { Page } from '../../Components';
import { login, user, User } from "../../database";

const validationSchema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
});



export const LoginPage: FC = () => {
    const toast = useToast();
    const initialValues = {};

    const onSubmit = async (values: {}) => {
        try {
            console.log(user);
            await login(values as unknown as User);
            toast({
                title: "Erfolgreich angemeldet",
                position: "top",
                status: "success",
                duration: 900,
                isClosable: true,
            });
            console.log(user);
        } catch (e) {
            console.log(e);
            toast({
                title: "Fehler",
                description: "Ungültiger Benutzername und/oder Passwort",
                position: "top",
                status: "error",
                duration: 900,
                isClosable: true,
            });
        }
    }


    return (
        <Page name="login" style={{ color: '#ffffff' }}>
            <Center>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
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