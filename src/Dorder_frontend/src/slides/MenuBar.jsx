import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { useAuth } from '../utils/useAuthClientHelper';
import { useNavigate } from 'react-router-dom';
const options = ["Be A Seller", "Support", "License", "Sign out", "Account settings"];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MenuBar() {
    const { login, logout, isAuthenticated, identity } = useAuth();
    const navigate = useNavigate();

    const handleMenuClicks = async (val) => {
        if (val === "Be A Seller") {
            navigate('/seller-signup');
        } else if (val === "Sign out") {
            await logout().then((res) => {
                console.log(res);
                navigate('/');
            });
        }
    }
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <Bars3Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options && options.map((option, index) => (
                            <Menu.Item key={index} onClick={() => handleMenuClicks(option)}>
                                {({ active }) => (
                                    <span
                                        className={classNames(
                                            active ? 'bg-gray-200 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        {option}
                                    </span>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
