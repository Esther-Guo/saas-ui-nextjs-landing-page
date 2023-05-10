import { NextPage } from "next";
import { Section } from "components/section";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Center } from "@chakra-ui/react";
import { PageTransition } from "components/motion/page-transition";
import { Field, Form, FormLayout, InputField, SubmitButton, TextareaField, Button } from '@saas-ui/react'
// import Button from "theme/components/button";

const Create: NextPage = () => {
    return (
        <Section innerWidth="container.md">
            <BackgroundGradient zIndex="-1" />

            <Center height="100%" pt="20">
                <PageTransition width="100%">
                <Form onSubmit={() => {}}>
                    <FormLayout>
                        <FormLayout>
                        <InputField
                            name="name"
                            label="Spell Name"
                            width="300px"
                        />
                        </FormLayout>
                        <FormLayout columns={2}>
                            <FormLayout>
                                <TextareaField name="description" label="Spell Description" height="100px"/>
                                <TextareaField name="env" label="Spell Env"  height="100px"/>
                            </FormLayout>
                            <TextareaField name="prompt" label="Spell Prompt"  height="245px"/>
                        </FormLayout>
                        <TextareaField name="implementation" label="Spell Implementation" height="300px"></TextareaField>
                        <FormLayout columns={2}>
                            <Center><Button onClick={() => {}}>Save for Later</Button></Center>
                            <Center><SubmitButton>Create Spell</SubmitButton></Center>
                        </FormLayout>
                    </FormLayout>

                    </Form>
                </PageTransition>
            </Center>
        </Section>
    )
}

export default Create;