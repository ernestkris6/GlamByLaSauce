import React from 'react'

export default function Button({children, type}) {

    const styles = {
        primary: 'px-8 py-3 rounded-xl bg-[#c1630b] text-[#fff] text-sm transition-colors duration-300 disabled:cursor-not-allowed inline-block tracking-wide cursor-pointer',
        flat: 'px-12 py-3 mb-2 border-2 border-amber-700 text-amber-700 text-sm transition-all duration-500 disabled:cursor-not-allowed inline-block tracking-wide cursor-pointer hover:text-white/90 hover:bg-amber-700 duration-500 cursor-pointer',
        span: "px-8 py-3 text-white outline-none border-none rounded-lg bg-gradient-to-l from-[#92400E] to-[#DF8908] cursor-pointer hover:scale-105 transition-all duration-500",
        small: "px-6 py-2 border-2 border-amber-700 text-amber-700 text-[0.8rem] mb-4 transition-all duration-500 disabled:cursor-not-allowed inline-block tracking-wide cursor-pointer hover:text-white/90 hover:bg-amber-700 duration-500 cursor-pointer md:hidden"
    }

    //bg-gradient-to-l from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent 
    //hover:shadow-lg transition-all duration-300

  return (
    <button className={styles[type]}>{children}</button>
  )
}


//hover:bg-primary hover:text-white duration-500 transition-all