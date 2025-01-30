import { LibraryBig, LineChart, MessageSquare, Shield } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { Button } from '../../../components/ui/button';




function SideNav() {
    const menuList = [
        {

            id: 1,
            name: 'My Forms',
            icon: LibraryBig,
            path: '/dashboard'

        },
        {

            id: 1,
            name: 'Responses',
            icon: MessageSquare,
            path: '/dashboard/responses'

        },
        {

            id: 1,
            name: 'Analytics',
            icon: LineChart,
            path: '/dashboard/analytics'

        },
        {

            id: 1,
            name: 'Upgrade',
            icon: Shield,
            path: '/dashboard/upgrade'

        }

    ]

    const path = usePathname();
    useEffect(() => {
        // console.log(path)
    }, [path])
    return (
        <div className='h-screen shadow-md border'>
            <div className='p-5'>
                {menuList.map((menu, index) => (
                    <h2 key={index}
                        className={`flex items-center gap-3 p-4 mb-3
                 hover:bg-primary hover:text-white rounded-lg
                 cursor-pointer text-gray-500
                 ${path == menu.path && 'bg-primary text-white'}
                 `}>



                        <menu.icon />
                        {menu.name}
                    </h2>
                ))}
            </div>
                <div>
                    <Button> + create form</Button>
                </div>




        </div>


    )
}

export default SideNav