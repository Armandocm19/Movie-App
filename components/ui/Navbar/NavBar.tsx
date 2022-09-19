import { useState } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link'
import { Navbar, Text, Avatar, Dropdown, Input } from "@nextui-org/react";

import { FaSearch, FaRegCaretSquareRight } from 'react-icons/fa';

export default function App() {

  const { push } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchQuery = () => {
    if( searchQuery.trim().length === 0 ) return;
    push(`/search/${searchQuery}`)
  }

  return (

      <Navbar isBordered variant="sticky" css={{ width: '100% !important' }} >
        <Navbar.Brand css={{ mr: "$4" }}>
          <NextLink  href='/' passHref>
            <FaRegCaretSquareRight className='logo-movie' />
          </NextLink>
          <NextLink href='/' passHref>
            <Text b css={{ mr: "$11", cursor: 'pointer', ml: 10, textGradient: "45deg, $yellow600 -20%, $red600 100%" }} hideIn="xs">
              MovieApp
            </Text>
          </NextLink>
          <Navbar.Content hideIn="xs" variant="highlight">
            <Navbar.Link href="#">Movies</Navbar.Link>
            <Navbar.Link href="#">Actors</Navbar.Link>
            <Navbar.Link href="#">Series</Navbar.Link>
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <FaSearch />
              }
              value={ searchQuery }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
              onChange={ (e) => setSearchQuery( e.target.value ) }
              onKeyPress={ (e) => e.key === 'Enter' ? onSearchQuery() : null }
            />
          </Navbar.Item>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
            >
              <Dropdown.Item key="profile" css={{ height: "$18", borderBottom: '1px solid rgba(255, 255, 255, 0.5)' }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>

  );
}
