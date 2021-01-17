import { Box, Button, ButtonGroup, Center, FormControl, FormErrorMessage, FormLabel, Input, Radio } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { CheckboxContainer, CheckboxControl, CheckboxSingleControl, InputControl, NumberInputControl, PercentComplete, RadioGroupControl, ResetButton, SelectControl, SubmitButton, SwitchControl, TextareaControl } from "formik-chakra-ui";
import { Component } from "react";
import { Page } from '../../Components';
import { val } from "../../database";

interface FormValues {
    firstName: string;
}

export class RegisterPage extends Component {
    initialValues = {

    };

    sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    onSubmit = (values: {}) => {
        this.sleep(300).then(() => {
            window.alert(JSON.stringify(values, null, 2));
        });
    };

    validateName(value: string) {
        let error
        if (!value) {
            error = "Name is required"
        } else if (value.toLowerCase() !== "naruto") {
            error = "Jeez! You're not a fan 😱"
        }
        return error
    }


    render() {
        return (
            <Page name="add" style={{ color: '#ffffff' }}>
                <Center>
                    <Formik
                        initialValues={this.initialValues}
                        onSubmit={this.onSubmit}
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
                            >
                                <InputControl name="username" label="Username" />
                                <InputControl name="password" label="Password" />
                                <CheckboxContainer name="subjects" label="Subjects">
                                    {Object.keys(val.subjects).map((short: string) => (
                                        <CheckboxControl name="subjects" value={short}>
                                            {val.subjects[short as keyof typeof val.subjects]}
                                        </CheckboxControl>
                                    ))}
                                </CheckboxContainer>
                                <SelectControl
                                    name="notes"
                                    selectProps={{ placeholder: "Select option" }}>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </SelectControl>

                                <SubmitButton>Submit</SubmitButton>

                                <Box as="pre" marginY={10}>
                                    {JSON.stringify(values, null, 2)}
                                    <br />
                                    {JSON.stringify(errors, null, 2)}
                                </Box>
                            </Box>
                        )}
                    </Formik>
                </Center>
            </ Page>
        )
    }
}