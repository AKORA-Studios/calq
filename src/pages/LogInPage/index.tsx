import { Box, Button, ButtonGroup, Center, FormControl, FormErrorMessage, FormLabel, Input, Radio } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { CheckboxContainer, CheckboxControl, CheckboxSingleControl, InputControl, NumberInputControl, PercentComplete, RadioGroupControl, ResetButton, SelectControl, SubmitButton, SwitchControl, TextareaControl } from "formik-chakra-ui";
import { Component } from "react";
import { Page } from '../../Components';

interface FormValues {
    firstName: string;
}

export class LoginPage extends Component {
    initialValues = {
        firstName: "",
        lastName: "",
        age: 0,
        employed: false,
        favoriteColor: "",
        toppings: ["tuna"],
        notes: "",
        employedd: false
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
            <Page name="login" style={{ color: '#ffffff' }}>
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
                                <InputControl name="firstName" label="First Name" />
                                <InputControl name="lastName" label="Last Name" />
                                <NumberInputControl name="age" label="Last Name" />
                                <CheckboxSingleControl name="employed">
                                    Employed
                                </CheckboxSingleControl>
                                <RadioGroupControl name="favoriteColor" label="Favorite Color">
                                    <Radio value="#ff0000">Red</Radio>
                                    <Radio value="#00ff00">Green</Radio>
                                    <Radio value="#0000ff">Blue</Radio>
                                </RadioGroupControl>
                                <CheckboxContainer name="toppings" label="Toppings">
                                    <CheckboxControl name="toppings" value="chicken">
                                        🐓 Chicken
                                    </CheckboxControl>
                                    <CheckboxControl name="toppings" value="ham">
                                        🐷 Ham
                                    </CheckboxControl>
                                    <CheckboxControl name="toppings" value="mushrooms">
                                        🍄 Mushrooms
                                    </CheckboxControl>
                                    <CheckboxControl name="toppings" value="cheese">
                                        🧀 Cheese
                                    </CheckboxControl>
                                    <CheckboxControl name="toppings" value="tuna">
                                        🐟 Tuna
                                    </CheckboxControl>
                                    <CheckboxControl name="toppings" value="pineapple">
                                        🍍 Pineapple
                                    </CheckboxControl>
                                </CheckboxContainer>
                                <TextareaControl name="notes" label="Notes" />
                                <SwitchControl name="employedd" label="Employed" />
                                <SelectControl
                                    name="notes"
                                    selectProps={{ placeholder: "Select option" }}
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </SelectControl>

                                <PercentComplete />
                                <ButtonGroup>
                                    <SubmitButton>Submit</SubmitButton>
                                    <ResetButton>Reset</ResetButton>
                                </ButtonGroup>

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