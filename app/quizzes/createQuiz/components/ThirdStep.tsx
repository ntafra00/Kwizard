import { Flex, Text, Center, Box } from "@/components/chakra";
import { QuizSection } from "./QuizSection"
import { Input } from "./Input";
import { NumberInput } from "@/components/commons/forms";
import { Button } from "@/components/commons/buttons";
import { QuizPassword } from "./QuizPassword";
import { Switch } from "@/components/commons/switch";
import { useRouter } from "next/navigation";

export function ThirdStep() {

    const router = useRouter();

    const handleRedirectToQuizzes = () => {
        router.push("/quizzes");
    }

    return (
        <>
            <QuizSection imageDescription="Number six" imageUrl="/numberSix.png" title="Change Your Time Settings">
                <Flex alignItems="center" justifyContent="space-between" gap={{ base: "20px", lg: "58px" }} pb="28px" direction={{ base: "column", lg: "row" }}>
                    <Center width={{ base: "80%", lg: "30%" }}>
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Quiz Available Until</Text>
                    </Center>
                    <Center width={{ base: "80%", lg: "70%" }} gap="20px">
                        <Box width="90%">
                            <Input type="date" placeholder="Choose start date" />
                        </Box>
                        <Switch />
                    </Center>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between" gap={{ base: "20px", lg: "58px" }} pb="28px" direction={{ base: "column", lg: "row" }}>
                    <Center width={{ base: "80%", lg: "30%" }}>
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Quiz Available From</Text>
                    </Center>
                    <Center width={{ base: "80%", lg: "70%" }} gap="20px">
                        <Box width="90%">
                            <Input type="date" placeholder="Choose end date" />
                        </Box>
                        <Switch />
                    </Center>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between" gap={{ base: "20px", lg: "58px" }} direction={{ base: "column", lg: "row" }}>
                    <Center width={{ base: "80%", lg: "30%" }}>
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Time Limit</Text>
                    </Center>
                    <Center width={{ base: "80%", lg: "70%" }} gap="20px">
                        <Box width="90%">
                            <NumberInput minimumValue={10} maximumValue={60} format={(value) => `${value} minutes`} parse={(value) => value.replace(/^ minutes$/, '')} step={5} />
                        </Box>
                        <Switch />
                    </Center>
                </Flex>
            </QuizSection >
            <QuizSection imageDescription="Number seven" imageUrl="/numberSeven.png" title="Change Your Grading Settings">
                <Flex alignItems="center" justifyContent="space-between" gap={{ base: "20px", lg: "58px" }} pb="28px" direction={{ base: "column", lg: "row" }}>
                    <Center width={{ base: "80%", lg: "30%" }}>
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Points for Correct Answer</Text>
                    </Center>
                    <Center width={{ base: "80%", lg: "70%" }} gap="20px">
                        <Box width="90%">
                            <NumberInput maximumValue={200} minimumValue={10} step={10} />
                        </Box>
                        <Switch />
                    </Center>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between" gap={{ base: "20px", lg: "58px" }} pb="28px" direction={{ base: "column", lg: "row" }}>
                    <Center width={{ base: "80%", lg: "30%" }}>
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Points for Wrong Answer</Text>
                    </Center>
                    <Center width={{ base: "80%", lg: "70%" }} gap="20px">
                        <Box width="90%">
                            <NumberInput maximumValue={0} minimumValue={-50} step={10} defaultValue={0} />
                        </Box>
                        <Switch />
                    </Center>
                </Flex>
                <Flex alignItems="center" gap={{ base: "20px", lg: "58px" }} direction={{ base: "column", lg: "row" }}>
                    <Center width={{ base: "80%", lg: "30%" }}>
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Allow Multiple Attempts</Text>
                    </Center>
                    <Switch />
                </Flex>
            </QuizSection >
            <QuizSection imageDescription="Number eight" imageUrl="/numberEight.png" title="Change Your Quiz Visibility Settings">
                <Flex alignItems="center" gap={{ base: "20px", lg: "58px" }} pb="28px" direction={{ base: "column", lg: "row" }}>
                    <Center width={{ base: "80%", lg: "30%" }}>
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Quiz Access Password</Text>
                    </Center>
                    <Flex width={{ base: "80%", lg: "70%" }} gap="40px" justifyContent="flex-start" alignItems="center" direction={{ base: "column", lg: "row" }}>
                        <QuizPassword />
                        <Switch />
                    </Flex>
                </Flex>
                <Flex alignItems="center" gap={{ base: "20px", lg: "58px" }} pb="28px" direction={{ base: "column", lg: "row" }}>
                    <Center width={{ base: "80%", lg: "30%" }}>
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Show Correct Answer Immediately?</Text>
                    </Center>
                    <Switch />
                </Flex>
                <Flex alignItems="center" gap={{ base: "20px", lg: "58px" }} direction={{ base: "column", lg: "row" }}>
                    <Center width={{ base: "80%", lg: "30%" }}>
                        <Text color="blue" fontWeight="medium" fontSize="18px" textAlign="center">Randomize Questions?</Text>
                    </Center>
                    <Switch />
                </Flex>
            </QuizSection>
            <QuizSection imageDescription="Number nine" imageUrl="/numberNine.png" title="Ready to cast the finishing spell?" isLast>
                <Center backgroundImage="">
                    <Button text="Finissimo!" textColor="white" backgroundColor="blue" buttonAction={handleRedirectToQuizzes} backgroundColorOnClick="blueOnClick" />
                </Center>
            </QuizSection>
        </>
    )
}