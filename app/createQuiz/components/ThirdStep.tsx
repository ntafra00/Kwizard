import { Flex, Text, Center, Switch } from "@chakra-ui/react";
import { QuizSection } from "./QuizSection"
import { Input } from "./Input";
import { NumberInput } from "@/components/commons/forms";
import { Button } from "@/components/commons/buttons";
import { QuizPassword } from "./QuizPassword";

export function ThirdStep() {
    return (
        <>
            <QuizSection imageDescription="Number seven" imageUrl="numberSeven.png" title="Change Your Time Settings">
                <Flex alignItems="center" justifyContent="space-between" gap="58px" pb="28px">
                    <Flex width="30%">
                        <Text color="blue" fontWeight="medium" fontSize="18px">Quiz Available From</Text>
                    </Flex>
                    <Input type="date" placeholder="Choose start date" />
                    <Switch size="lg" colorScheme="blackAlpha" id="switch-label" />
                </Flex>
                <Flex alignItems="center" justifyContent="space-between" gap="58px" pb="28px">
                    <Flex width="30%">
                        <Text color="blue" fontWeight="medium" fontSize="18px">Quiz Available Until</Text>
                    </Flex>
                    <Input type="date" placeholder="Choose end date" />
                    <Switch size="lg" colorScheme="facebook" isChecked />
                </Flex>
                <Flex alignItems="center" justifyContent="space-between" gap="58px">
                    <Flex width="30%">
                        <Text color="blue" fontWeight="medium" fontSize="18px">Time Limit</Text>
                    </Flex>
                    <NumberInput minimumValue={10} maximumValue={60} format={(value) => `${value} minutes`} parse={(value) => value.replace(/^ minutes$/, '')} step={5} />
                    <Switch size="lg" colorScheme="facebook" isChecked />
                </Flex>
            </QuizSection >
            <QuizSection imageDescription="Number eight" imageUrl="numberEight.png" title="Change Your Grading Settings">
                <Flex alignItems="center" justifyContent="space-between" gap="58px" pb="28px">
                    <Flex width="30%">
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Points for Correct Answer</Text>
                    </Flex>
                    <NumberInput maximumValue={200} minimumValue={10} step={10} />
                    <Switch size="lg" colorScheme="facebook" isChecked />
                </Flex>
                <Flex alignItems="center" justifyContent="space-between" gap="58px" pb="28px">
                    <Flex width="30%">
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Penalty for Wrong Answer</Text>
                    </Flex>
                    <NumberInput maximumValue={0} minimumValue={-50} step={10} defaultValue={0} />
                    <Switch size="lg" colorScheme="facebook" isChecked />
                </Flex>
                <Flex alignItems="center" gap="58px" pb="28px">
                    <Flex width="30%">
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Allow Multiple Attempts?</Text>
                    </Flex>
                    <Switch size="lg" colorScheme="facebook" isChecked />
                </Flex>
            </QuizSection>
            <QuizSection imageDescription="Number nine" imageUrl="numberNine.png" title="Change Your Quiz Visibility Settings">
                <Flex alignItems="center" justifyContent="space-between" gap="58px" pb="28px">
                    <Flex width="30%">
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Quiz Access Password</Text>
                    </Flex>
                    <QuizPassword />
                    <Switch size="lg" colorScheme="facebook" isChecked />
                </Flex>
                <Flex alignItems="center" gap="58px" pb="28px">
                    <Flex width="30%">
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Show Correct Answer Immediately?</Text>
                    </Flex>
                    <Switch size="lg" colorScheme="facebook" isChecked />
                </Flex>
                <Flex alignItems="center" gap="58px" pb="28px">
                    <Flex width="30%">
                        <Text color="blue" fontWeight="medium" fontSize="18px">Randomize Questions?</Text>
                    </Flex>
                    <Switch size="lg" colorScheme="facebook" isChecked />
                </Flex>
            </QuizSection>
            <QuizSection imageDescription="Number ten" imageUrl="numberTen.png" title="Ready to cast the finishing spell?" isLast>
                <Center backgroundImage="">
                    <Button text="Finissimo!" textColor="white" backgroundColor="blue" fontSize="md" buttonAction={() => { }} borderRadius="50px" />
                </Center>
            </QuizSection>
        </>
    )
}