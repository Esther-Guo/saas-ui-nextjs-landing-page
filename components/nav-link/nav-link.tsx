import { forwardRef, Menu, MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider, } from '@chakra-ui/react'

import { Button, ButtonProps } from '@saas-ui/react'

import Link from 'next/link'

export interface NavLinkProps extends ButtonProps {
  isActive?: boolean
  isdropdown?: boolean
  href?: string
  id?: string
}

export const NavLink = forwardRef<NavLinkProps, 'a'>((props, ref) => {
  const { href, type, isActive, isdropdown, ...rest } = props

  if (isdropdown) {
    return (
    <Menu>
      <MenuButton as={Button} variant="nav-link">
        Build
      </MenuButton>
      <MenuList>
        <MenuItem as={Link} href='/quickstart'>Quickstart</MenuItem>
        <MenuItem as={Link} href='/documentation'>Documentation</MenuItem>
        <MenuItem as={Link} href='/api'>API Reference</MenuItem>
      </MenuList>
    </Menu>
        )
    }
  else {
    return (<Button
      as={Link}
      href={href}
      ref={ref}
      variant="nav-link"
      lineHeight="2rem"
      isActive={isActive}
      fontWeight="medium"
      {...rest}
    />)
  }
})

NavLink.displayName = 'NavLink'
