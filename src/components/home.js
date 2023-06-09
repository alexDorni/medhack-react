/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

import {
    BarsArrowUpIcon,
    CheckBadgeIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon,
    RectangleStackIcon,
    StarIcon,
    BeakerIcon,
    UserGroupIcon,
    InformationCircleIcon,
} from '@heroicons/react/20/solid'
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'


const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Domains', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
const vaccinesToBeOffered = [
    {
        name: 'Hepatitis B Vaccine',
        href: '#',
        siteHref: 'https://www.cdc.gov/vaccines/vpd/hepb/index.html',
        repoHref: '#',
        administration: 'Administration: today',
        disease: 'Hep B',
        location: 'Cluj Napoca',
        starred: true,
        active: true,
    },

    {
        name: 'Calmette Guerrin Vaccine',
        href: '#',
        siteHref: 'https://www.cdc.gov/tb/publications/factsheets/prevention/bcg.htm',
        repoHref: '#',
        administration: 'Administration: next week',
        disease: 'BCG',
        location: 'Cluj-Napoca',
        starred: true,
        active: false,
    },

    {
        name: 'DTPa-VPI-Hib-Hep. B',
        href: '#',
        siteHref: 'https://www.cdc.gov/mmwr/volumes/69/wr/mm6905a5.htm',
        repoHref: '#',
        administration: 'Administration: May 2023',
        disease: 'DTPa-VPI-Hib-Hep. B',
        location: 'Cluj-Napoca',
        starred: true,
        active: false,
    },

    {
        name: 'Conjugated pneumococcal vaccine',
        href: '#',
        siteHref: 'https://www.cdc.gov/vaccines/vpd/pneumo/public/index.html',
        repoHref: '#',
        administration: 'Administration: May 2023',
        disease: 'Pneumococcal',
        location: 'Cluj-Napoca',
        starred: true,
        active: false,
    }



]
const activityItems = [
    { project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    // More items...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const people = [
    {
        id: 1,
        name: 'Kid 1',
        imageUrl:
            'https://plus.unsplash.com/premium_photo-1668806642968-c6bebdab7c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGJhYnl8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    },
    {
        id: 2,
        name: 'Kid 2',
        imageUrl:
            'https://images.unsplash.com/photo-1630304565761-d6f8d5a0facd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3V0ZSUyMGJhYnl8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    },
    {
        id: 3,
        name: 'Kid 3',
        imageUrl:
            'https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3V0ZSUyMGJhYnl8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    },
    {
        id: 4,
        name: 'Kid 4',
        imageUrl:
            'https://i.pinimg.com/736x/c6/b3/a2/c6b3a25a8385ace8c12dcdc1e400921d.jpg',
    },
    {
        id: 5,
        name: 'Kid 5',
        imageUrl:
            'https://i.insider.com/62c7762e99259b00181e6844?width=700',
    },
    
    // More users...
]




export function Home() {

    const [query, setQuery] = useState('')
    const [selectedPerson, setSelectedPerson] = useState(null)

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
            {/* Background color split screen for large screens */}
            <div className="fixed top-0 left-0 h-full w-1/2 bg-white" aria-hidden="true" />
            <div className="fixed top-0 right-0 h-full w-1/2 bg-gray-50" aria-hidden="true" />
            <div className="relative flex min-h-full flex-col">
                {/* Navbar */}
                <Disclosure as="nav" className="flex-shrink-0 bg-indigo-600">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                                <div className="relative flex h-16 items-center justify-between">
                                    {/* Logo section */}
                                    <div className="flex items-center px-2 lg:px-0 xl:w-64">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-auto"
                                                src="https://mc-42b990dd-5dae-4647-b81e-424724-cdn-endpoint.azureedge.net/-/media/blogs/2020/freevaccinelogo.png?rev=72dbc0db8dd84382a9525f72b161bb30"
                                            />
                                        </div>
                                    </div>

                                    {/* Search section */}
                                    <div className="flex flex-1 justify-center lg:justify-end">
                                        <div className="w-full px-2 lg:px-6">
                                            <label htmlFor="search" className="sr-only">
                                                Search vaccine
                                            </label>
                                            <div className="relative text-indigo-200 focus-within:text-gray-400">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                                </div>
                                                <input
                                                    id="search"
                                                    name="search"
                                                    className="block w-full rounded-md border-0 bg-indigo-400 bg-opacity-25 py-1.5 pl-10 pr-3 text-indigo-100 placeholder:text-indigo-200 focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                                    placeholder="Search vaccine or child"
                                                    type="search"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex lg:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-400 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3CenterLeftIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    {/* Links section */}
                                    <div className="hidden lg:block lg:w-80">
                                        <div className="flex items-center justify-end">
                                            {/* <div className="flex">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="rounded-md px-3 py-2 text-sm font-medium text-indigo-200 hover:text-white"
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div> */}
                                            {/* Profile dropdown */}
                                            <Menu as="div" className="relative ml-4 flex-shrink-0">
                                                <div>
                                                    <Menu.Button className="flex rounded-full bg-indigo-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img
                                                            className="h-8 w-8 rounded-full"
                                                            src="https://medhack.heartcluj.com/wp-content/uploads/2022/05/imageedit_26_9683296839-e1672011985524.png"
                                                            alt=""
                                                        />
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
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700 decoration-none'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="lg:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'bg-indigo-800 text-white'
                                                    : 'text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-indigo-800 pt-4 pb-3">
                                    <div className="space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                {/* 3 column wrapper */}
                <div className="mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8">
                    {/* Left sidebar & main wrapper */}
                    <div className="min-w-0 flex-1 bg-white xl:flex">
                        {/* Account profile */}
                        <div className="bg-white xl:w-64 xl:flex-shrink-0 xl:border-r xl:border-gray-200">
                            <div className="py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 space-y-8">
                                        <div className="space-y-8 sm:flex sm:items-center sm:justify-between sm:space-y-0 xl:block xl:space-y-8">
                                            {/* Profile */}
                                            <div className="flex items-center space-x-3">
                                                <div className="h-12 w-12 flex-shrink-0">
                                                    <img
                                                        className="h-12 w-12 rounded-full"
                                                        src="https://medhack.heartcluj.com/wp-content/uploads/2022/05/imageedit_26_9683296839-e1672011985524.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="text-sm font-medium text-gray-900">Dr. Samuel Pop</div>
                                                    <a href="#" className="group flex items-center space-x-2.5">
                                                    </a>
                                                </div>
                                                <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                                                    <div className="flex items-center space-x-2">
                                                        <UserGroupIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        <span className="text-sm font-medium text-gray-500">Parent</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Action buttons */}
                                            <div className="flex flex-col sm:flex-row xl:flex-col">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 xl:w-full"
                                                >
                                                    Vaccine info
                                                </button>

                                                <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
                                                    {/* <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Combobox.Label> */}
                                                    <div className="relative mt-2">
                                                        <Combobox.Input
                                                            placeholder="Select child"
                                                            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            onChange={(event) => setQuery(event.target.value)}
                                                            displayValue={(person) => person?.name}
                                                        />
                                                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        </Combobox.Button>

                                                        {filteredPeople.length > 0 && (
                                                            <Combobox.Options className="absolute z-10 bg-white mt-1 max-h-72 w-full pl-0 ml-4 overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                {filteredPeople.map((person) => (
                                                                    <Combobox.Option
                                                                        key={person.id}
                                                                        value={person}
                                                                        className={({ active }) =>
                                                                            classNames(
                                                                                'relative cursor-default select-none py-2 pr-9 pl-4',
                                                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                                                            )
                                                                        }
                                                                    >
                                                                        {({ active, selected }) => (
                                                                            <>
                                                                                <div className="flex items-center">
                                                                                    <img src={person.imageUrl} alt="" className="h-10 w-10 flex-shrink-0 rounded-full" />
                                                                                    <span className={classNames('ml-3 truncate', selected && 'font-semibold')}>{person.name}</span>
                                                                                </div>

                                                                                {selected && (
                                                                                    <span
                                                                                        className={classNames(
                                                                                            'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                                            active ? 'text-white' : 'text-indigo-600'
                                                                                        )}
                                                                                    >
                                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                    </span>
                                                                                )}
                                                                            </>
                                                                        )}
                                                                    </Combobox.Option>
                                                                ))}
                                                            </Combobox.Options>
                                                        )}
                                                    </div>
                                                </Combobox>
                                            </div>
                                        </div>
                                        {/* Meta info */}
                                        {/* <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                      <div className="flex items-center space-x-2">
                        <UserGroupIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="text-sm font-medium text-gray-500">Parent</span>
                      </div>
                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Projects List */}
                        <div className="bg-white lg:min-w-0 lg:flex-1">
                            <div className="border-b border-t border-gray-200 pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6">
                                <div className="flex items-center">
                                    <h1 className="flex-1 text-lg font-medium">Vaccines</h1>
                                    <Menu as="div" className="relative">
                                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                            <BarsArrowUpIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            Sort
                                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </Menu.Button>
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Name
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Date modified
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Date created
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
                                {vaccinesToBeOffered.map((project) => (
                                    <li
                                        key={project.repo}
                                        className="flex items-center justify-between relative py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
                                    >
                                        <div className="min-w-0 space-y-3">
                                            <div className="flex items-center space-x-3">
                                                <span
                                                    className={classNames(
                                                        project.active ? 'bg-green-100' : 'bg-gray-100',
                                                        'h-4 w-4 flex items-center justify-center rounded-full'
                                                    )}
                                                    aria-hidden="true"
                                                >
                                                    <span
                                                        className={classNames(
                                                            project.active ? 'bg-green-400' : 'bg-gray-400',
                                                            'h-2 w-2 rounded-full'
                                                        )}
                                                    />
                                                </span>

                                                <div className="text-sm font-medium">
                                                    <a href={project.href}>
                                                        {project.name}
                                                    </a>
                                                </div>
                                            </div>
                                            <a href={project.repoHref} className="group relative flex items-center space-x-2.5">
                                                {/* <svg
                            className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            viewBox="0 0 18 18"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372 16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761 13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487 4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408 11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97 0 8.99917 0Z"
                              fill="currentcolor"
                            />
                          </svg> */}
                                                {/* <span className="truncate text-sm font-medium text-gray-500 group-hover:text-gray-900">
                            {project.repo}
                          </span> */}
                                            </a>
                                        </div>

                                        <div className='flex flex-col max-w-[200px]'>
                                            <p className="flex space-x-1 ml-auto">
                                                <a
                                                    href={project.siteHref}
                                                    className="relative text-sm font-medium text-gray-500 hover:text-gray-900"
                                                >
                                                    Info
                                                </a>
                                                <button
                                                    type="button"
                                                    className="relative rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    <span className="sr-only">
                                                        {project.starred ? 'Add to favorites' : 'Remove from favorites'}
                                                    </span>

                                                </button>
                                                <InformationCircleIcon
                                                    className={classNames(
                                                        'h-5 w-5'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </p>

                                            <div className="hidden flex-shrink-0 flex-col items-end space-y-3 sm:flex">

                                                <p className="flex flex-col text-sm text-gray-500">

                                                    <div>{project.administration}</div>

                                                    <div>Disease {project.disease}</div>

                                                    <div>{project.location}</div>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Repo name and link */}

                                        <div className="sm:hidden">
                                            <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        {/* Repo meta info */}

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Activity feed */}
                    <div className="bg-gray-50 pr-4 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
                        <div className="pl-6 lg:w-80">
                            <div className="pt-6 pb-2">
                                <h2 className="text-sm font-semibold">Activity</h2>
                            </div>
                            <div>
                                <ul role="list" className="divide-y divide-gray-200">
                                    {activityItems.map((item) => (
                                        <li key={item.commit} className="py-4">
                                            <div className="flex space-x-3">
                                                <img
                                                    className="h-20 w-15 rounded-full"
                                                    src="https://images.unsplash.com/photo-1630304565761-d6f8d5a0facd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3V0ZSUyMGJhYnl8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                                                    alt=""
                                                />
                                                <div className="flex-1 space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-sm font-medium">Kid 2</h3>
                                                        <p className="text-sm text-gray-500">{item.time}</p>
                                                    </div>
                                                    <p className="text-sm text-gray-500">
                                                        Vaccines addministrated: 1
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
