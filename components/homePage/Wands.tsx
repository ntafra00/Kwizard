"use client";

import { Flex, Heading, Box, useMediaQuery, Center } from "@/components/chakra";
import { Button } from "../commons/buttons";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function Wands() {
  const router = useRouter();
  const [isSmallerThanGivenWidth] = useMediaQuery("(max-width: 712px)");

  const handleRedirectToQuizzes = () => {
    router.push("/quizzes");
  };

  return (
    <Flex>
      {!isSmallerThanGivenWidth && (
        <Image
          src="/wandHandLeft.png"
          alt="Left hand with wand"
          width={350}
          height={350}
        />
      )}
      <Center w="100%">
        <Flex
          direction={"column"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          h={"80%"}
          py="10px"
        >
          <Box pb={{ base: "40px", md: "80px" }}>
            <Heading
              color="black"
              size={{ base: "sm", md: "md", l: "xxl" }}
              pt={20}
              textAlign="center"
            >
              Are you ready?
            </Heading>
            <Heading
              color="black"
              size={{ base: "sm", md: "md", l: "xxl" }}
              textAlign="center"
            >
              We are!
            </Heading>
          </Box>
          <Button
            buttonAction={handleRedirectToQuizzes}
            text="Get started now!"
            textColor="blue"
            key="getStartedNowButton"
            backgroundColorOnClick="transparentOnClick"
          />
        </Flex>
      </Center>
      {!isSmallerThanGivenWidth && (
        <Image
          src="/wandHandRight.png"
          alt="Right hand with wand"
          width={350}
          height={350}
        />
      )}
    </Flex>
  );
}
