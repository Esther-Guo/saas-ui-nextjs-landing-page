import { NextPage } from "next";
import { List, IconButton } from "@saas-ui/react";
import { Avatar, Tag, Center } from "@chakra-ui/react";
import { FiSettings } from "react-icons/fi";
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { PageTransition } from 'components/motion/page-transition'
import { Section } from 'components/section'

const Spells: NextPage = () => {
    return (
        <Section height="calc(100vh - 200px)" innerWidth="container.sm">
            <BackgroundGradient zIndex="-1" />

            <Center height="100%" pt="20">
                <PageTransition width="100%">
                <List
                    items={[
                        {
                        href: '#',
                        icon: <Avatar name="Elliot Alderson" size="sm" />,
                        primary: 'Elliot Alderson',
                        secondary: 'Hacker',
                        tertiary: <Tag>admin</Tag>,
                        action: <IconButton icon={<FiSettings />} aria-label="setting" />,
                        },
                        {
                        href: '#',
                        icon: <Avatar name="Martin Wallström" size="sm" />,
                        primary: 'Martin Wallström',
                        secondary: 'CEO',
                        tertiary: <Tag>owner</Tag>,
                        action: <IconButton icon={<FiSettings />} aria-label="setting"/>,
                        },
                    ]}
                />
                </PageTransition>
            </Center>
        </Section>
        
    )
}

export default Spells;