import React from 'react'

export default function Button({children, type}) {

    const styles = {
        primary: 'px-8 py-3 rounded-xl bg-[#c1630b] text-[#fff] text-sm transition-colors duration-300 disabled:cursor-not-allowed inline-block tracking-wide cursor-pointer',
        flat: 'px-12 py-3 border-2 border-[#c1630b] text-[#c1630b] text-sm transition-colors duration-300 disabled:cursor-not-allowed inline-block tracking-wide cursor-pointer',
        span: "px-8 py-3 text-white outline-none border-none rounded-lg bg-gradient-to-l from-[#92400E] to-[#DF8908] cursor-pointer hover:scale-105 transition-all duration-500"
    }

    //bg-gradient-to-l from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent 
    //hover:shadow-lg transition-all duration-300

  return (
    <button className={styles[type]}>{children}</button>
  )
}


//