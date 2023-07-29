import { useState } from "react";

import { Input, Text, Flex, HStack } from "@chakra-ui/react";

import { PaginationButton } from "@/components/commons/buttons";
import { LeftArrow, RightArrow } from "@/components/commons/icons";
import { COMMON_PAGE_PADDING } from "@/constants";

interface Props {
    numberOfPages: string
}

export function Pagination({ numberOfPages }: Props) {

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageIncrease = () => {
        setCurrentPage((prevState) => prevState + 1);
    }

    const handlePageDecrease = () => {
        setCurrentPage((prevState) => prevState - 1);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPage = e.currentTarget.value;
        if (!newPage) {
            return;
        }
        if (+newPage < 0 || +newPage > +numberOfPages) {
            return;
        }
        setCurrentPage(+newPage);
    }

    return (
        <Flex px={COMMON_PAGE_PADDING} justify="flex-end" pb="76px">
            <HStack pr="200px" spacing="30px">
                <PaginationButton isButtonVisible={currentPage > 1} icon={<LeftArrow />} iconPosition="left" text="Previous Page" buttonAction={handlePageDecrease} key="Left pagination button" />
                <PaginationButton isButtonVisible={currentPage < +numberOfPages} icon={<RightArrow />} iconPosition="right" text="Next Page" buttonAction={handlePageIncrease} key="Right pagination button" />
            </HStack>
            <HStack>
                <input type="number" width="20px" value={+currentPage} color="gray" onChange={handleInputChange} />
                <Text>of {numberOfPages}</Text>
            </HStack>
        </Flex>
    )
}