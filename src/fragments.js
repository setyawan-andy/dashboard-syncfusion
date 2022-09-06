import tw from 'tailwind-styled-components'

export const MainContainer = tw.div`
    flex
    relative
    dark:bg-main-dark-bg
`

export const TooltipContainer = tw.div`
    fixed
    right-4
    bottom-4
    z-[1000]
`

export const ButtonSetting = tw.button`
    text-3xl
    p-3
    hover:drop-shadow-xl
    text-white
    bg-blue-700
    rounded-full
`

export const SidebarActive = tw.div`
    fixed
    w-72
    dark:bg-secondary-dark-bg
    bg-white
`

export const SidebarNotActive = tw.div`
    w-0
    dark:bg-secondary-dark-bg
`

export const MenuContainer = tw.div`
    dark:bg-main-bg
    bg-main-bg
    min-h-screen
    w-full
    ${props => props.activeMenu ? 'md:ml-72' : 'flex-2' }
`

export const MenuItem = tw.div`
    fixed
    md:static
    bg-main-bg
    dark:bg-main-dark-bg
    w-full
`