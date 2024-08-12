import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-fuchsia-500	 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal Isabelly Dornelas | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo href='#' className="hover:underline me-4 md:me-6" size={48} weight='bold' />
              <InstagramLogo href='#' className="hover:underline me-4 md:me-6"  size={48} weight='bold' />
              <FacebookLogo href='#' className="hover:underline me-4 md:me-6"  size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer