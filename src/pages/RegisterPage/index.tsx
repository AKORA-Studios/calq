import { Box, Center, useToast } from "@chakra-ui/react";
import { Formik } from "formik";
import { CheckboxContainer, CheckboxControl, InputControl, SubmitButton } from "formik-chakra-ui";
import * as Yup from 'yup';
import { Page } from '../../Components';
import { val } from "../../database";

const validationSchema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
    subjects: Yup.array().required()
});

//const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const RegisterPage: React.FC = (() => {
    const initialValues = {

    };
    const toast = useToast();

    const onSubmit = async (values: {}) => {
        toast({
            title: "Account created.",
            description: "We've created your account for you.",
            position: "top",
            status: "success",
            duration: 900,
            isClosable: true,
        });
    };

    return (
        <Page name="login" style={{ color: '#ffffff' }}>
            <Center>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                >
                    {({ handleSubmit, values, errors }) => (
                        <Box
                            borderWidth="1px"
                            rounded="lg"
                            shadow="1px 1px 3px rgba(0,0,0,0.3)"
                            maxWidth={800}
                            p={6}
                            m="10px auto"
                            as="form"
                            onSubmit={handleSubmit as any}
                            display="grid"
                            gridTemplateColumns="1fr 1fr"
                        >

                            <div>
                                <InputControl name="username" label="Username" />
                                <InputControl name="password" label="Password" />
                                <SubmitButton>Submit</SubmitButton>
                            </div>

                            {/* <Box as="pre" marginY={10}>
                                            {JSON.stringify(values, null, 2)}
                                            <br />
                                            {JSON.stringify(errors, null, 2)}
                                        </Box> */}

                            <CheckboxContainer name="subjects" label="Subjects" >
                                {Object.keys(val.subjects).map((short: string) => (
                                    <CheckboxControl name="subjects" value={short}>
                                        {val.subjects[short as keyof typeof val.subjects]}
                                    </CheckboxControl>
                                ))}
                            </CheckboxContainer>

                        </Box>
                    )}
                </Formik>
            </Center>
        </ Page>
    )
})