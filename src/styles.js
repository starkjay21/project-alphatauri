import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
    ${tw`
        h-screen
        w-full
        bg-midnight
        grid
        grid-rows-5
        justify-items-center
        align-middle
        gap-6
    `}`;
    

export const Header = styled.h1`
    ${tw`
        text-tahiti
        text-6xl
        text-center
        p-5
        row-span-1
    `}
`;

export const Container = styled.div`
    ${tw`
       h-auto
       lg:w-3/4
       rounded-2xl
       bg-purple
       grid
       grid-cols-4
       gap-8
       p-7
       align-middle
       justify-center
       row-span-4
    `}
`;

export const Screen = styled.input`
    ${tw`
        h-auto
        col-span-4
        bg-bubble-gum
        text-silver
        rounded-lg
        outline-0
        p-4
        text-3xl
    `}
    ::placeholder{
        color: #ecebff
    }
`;

export const ResultContainer = styled.div`
    ${tw`
        h-auto
        col-span-4
        bg-bubble-gum
        text-silver
        rounded-lg
        p-4
        text-3xl
        grid
        grid-rows-3
        gap-3
        uppercase
    `}
`;

export const RadixContainer = styled.input`
    ${tw`
        col-span-2
        bg-bubble-gum
        text-midnight
        rounded-lg
        outline-0
        p-2
        text-3xl
    `}

    ::placeholder{
        color: black;
    }
`;

export const Button = styled.button`
    ${tw`
        rounded-3xl
        bg-bubble-gum
        text-midnight
        md:w-24
        w-1/3
        float-right
        p-3
        mb-2
        row-span-1
    `}

    &:hover{
        ${tw`
        bg-purple
        text-white
        `}
    }
`;