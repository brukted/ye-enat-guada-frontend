import { Link } from "react-router-dom"
import { Menu } from '@headlessui/react'

function MyDropdown() {
    return (
        <Menu>
            <Menu.Button>More</Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                            Account settings
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                            Documentation
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item disabled>
                    <span className="opacity-75">Invite a friend (coming soon!)</span>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}

export const NavBar = () => {
    return (
        <nav className='p-2 w-full flex flex-row justify-between bg-orange-500 text-white items-center'>
            <h1 className='text-4xl'>የእናት ጓዳ</h1>
            <MyDropdown />
        </nav>)
}