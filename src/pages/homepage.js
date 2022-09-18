import React, { Fragment, useState, useReducer } from 'react'
import { Dialog, Transition, Menu, Popover } from '@headlessui/react'
import {
  Bars3BottomLeftIcon,
  CalendarIcon,
  UserCircleIcon,
  FolderIcon,
  XMarkIcon,
  BuildingOffice2Icon,
  ComputerDesktopIcon,
  ClipboardDocumentCheckIcon,
  QueueListIcon,
  ChevronUpIcon,
  Bars2Icon,
  ChevronDownIcon,
  PlusIcon,
  Bars3Icon,
  CogIcon
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Logo from '../assets/images/logo.png'
import todoReducer from '../reducer/todoReducer'
import TodoActions from '../components/todoActions'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

const HomePage = () => {
  const navigation = [
    {
      title: 'General',
      menu: [
        { name: 'All', icon: QueueListIcon },
        { name: 'Today', icon: FolderIcon },
        { name: 'Upcoming', icon: CalendarIcon },
        { name: 'Completed', icon: ClipboardDocumentCheckIcon }
      ]
    },
    {
      title: 'Category',
      menu: [
        { name: 'Personal', icon: UserCircleIcon },
        { name: 'Work', icon: BuildingOffice2Icon },
        { name: 'Meeting', icon: ComputerDesktopIcon }
      ]
    },
    {
      title: 'Priority',
      menu: [
        { name: 'High', icon: ChevronUpIcon },
        { name: 'Medium', icon: Bars2Icon },
        { name: 'Low', icon: ChevronDownIcon }
      ]
    }
  ]

  const initailState = {
    todoList: []
  }

  const [selectedTab, setSelectedTab] = useState('Today')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [openTodoSidebar, setOpenTodoSidebar] = useState({
    open: false,
    action: ''
  })
  const [state, dispatch] = useReducer(todoReducer, initailState)

  return (
    <div>
      <Popover className='relative bg-white'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-40 md:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            <div className='fixed inset-0 z-40 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-green-600 pt-3 pb-4'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-[6px] right-0 -mr-12 '>
                      <button
                        type='button'
                        className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                        <XMarkIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>

                  <div className=' h-0 flex-1 overflow-y-auto'>
                    <nav className='space-y-6 px-3'>
                      {navigation?.map(item => (
                        <div>
                          <h3 className='text-2xl text-white pb-3 mb-3 font-bold border-b border-green-100'>
                            {item.title}
                          </h3>
                          {item.menu?.map(list => (
                            <button
                              key={list.name}
                              onClick={() => {
                                setSelectedTab(list.name)
                                setSidebarOpen(false)
                              }}
                              className={classNames(
                                list.name === selectedTab
                                  ? 'bg-green-800 text-white'
                                  : 'text-white hover:bg-green-600',
                                'group w-full flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md'
                              )}
                            >
                              <list.icon
                                className='mr-4 h-6 w-6 flex-shrink-0 text-green-300'
                                aria-hidden='true'
                              />
                              {list.name}
                            </button>
                          ))}
                        </div>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className='w-14 flex-shrink-0' aria-hidden='true'></div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
          <div className='flex flex-grow flex-col overflow-y-auto bg-green-600 pt-3'>
            <div className=' flex flex-1 flex-col'>
              <nav className='flex-1 space-y-6 px-2 pb-4'>
                {navigation?.map(item => (
                  <div>
                    <h3 className='text-2xl text-white mb-3 pb-3 font-bold border-b border-green-100'>
                      {item.title}
                    </h3>
                    {item.menu?.map(list => (
                      <button
                        key={list.name}
                        onClick={() => {
                          setSelectedTab(list.name)
                          setSidebarOpen(false)
                        }}
                        className={classNames(
                          list.name === selectedTab
                            ? 'bg-green-800 text-white'
                            : 'text-white hover:bg-green-800',
                          'group w-full flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md'
                        )}
                      >
                        <list.icon
                          className='mr-4 h-6 w-6 flex-shrink-0 text-green-300'
                          aria-hidden='true'
                        />
                        {list.name}
                      </button>
                    ))}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className='flex md:flex-1 flex-col md:pl-64'>
          <div className='sticky top-0 z-10 flex h-16 justify-between sm:px-4 flex-shrink-0 bg-white shadow '>
            <button
              type='button'
              className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 md:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <Bars3BottomLeftIcon className='h-6 w-6' aria-hidden='true' />
            </button>
            <div className='flex  text-transparent bg-clip-text  bg-gradient-to-r from-green-800 to-green-400 justify-between items-center lg:text-4xl sm:text-2xl text-xl font-bold px-4'>
              My Bucket
            </div>
            <div className='items-center gap-4 md:flex hidden'>
              <div className='relative mt-1 rounded-md shadow-sm'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                  <MagnifyingGlassIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </div>
                <input
                  type='text'
                  name='search'
                  id='searchtodo'
                  className='block w-full rounded-md border-2 p-2 border-gray-300 pl-10 focus:outline-none focus:border-green-500 sm:text-sm'
                  placeholder='Search'
                />
              </div>

              <button
                onClick={() =>
                  setOpenTodoSidebar({ open: true, action: 'add' })
                }
              >
                <PlusIcon className='h-5 w-5 text-green-800' />
              </button>
            </div>
            <div className=' h-16  md:hidden'>
              <Popover.Button className='border-l h-full border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 md:hidden'>
                <span className='sr-only'>Open menu</span>
                <CogIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
          </div>

          <main>
            <div className='py-6'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
                <h1 className='text-2xl font-semibold text-gray-900'>
                  {selectedTab}
                </h1>
              </div>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
                <div className='py-4'>{console.log('STATE', state)}</div>
              </div>
            </div>
          </main>

          {/* TODO Action Sidebar */}
          <TodoActions
            openTodoSidebar={openTodoSidebar}
            setOpenTodoSidebar={setOpenTodoSidebar}
          />
        </div>

        {/* Responsive PopOver Menu */}
        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute inset-x-0 top-0 z-20 origin-top-right transform p-2 transition md:hidden'
          >
            <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex  text-transparent bg-clip-text  bg-gradient-to-r from-green-800 to-green-400 justify-between items-center lg:text-4xl sm:text-2xl text-xl font-bold px-4'>
                    My Bucket
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500'>
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <div className='relative mt-1 rounded-md shadow-sm'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                      <MagnifyingGlassIcon
                        className='h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                    <input
                      type='text'
                      name='search'
                      id='searchtodo'
                      className='block w-full rounded-md border-2 p-2 border-gray-300 pl-10 focus:outline-none focus:border-green-500 sm:text-sm'
                      placeholder='Search task'
                    />
                  </div>
                  <button
                    className='mt-4 flex gap-4 w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700'
                    onClick={() =>
                      setOpenTodoSidebar({ open: true, action: 'add' })
                    }
                  >
                    <PlusIcon className='h-6 w-6 ' />
                    <span className=''>Add Task</span>
                  </button>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default HomePage
