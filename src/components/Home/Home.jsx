import React, {useRef} from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const overviewRef = useRef(null);
  const approachRef = useRef(null);
  const expertiseRef = useRef(null);

  const scrollToElement = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };


  return (
    <>

      <section className='flex flex-col justify-center items-center bg-[#0000008f] h-[80vh] relative'>
        <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute top-0 left-0 w-screen h-[100%] z-[-1]" alt="" />
        <h1 className='align-center text-[white] text-[45px] font-extrabold animate-fade-up'>Welcome to the Future of <span className='text-primary'>Agriculture</span></h1>
        <p className='align-center text-[white] text-[18px] my-[15px] animate-fade-up'>Gain a competitive edge with next-gen personalization, automation, and AI.</p>
      </section>

      <div className="navigation">
        <ul className='flex justify-center items-center p-[20px] list-none'>
          <li><Link href="#" onClick={() => {scrollToElement(overviewRef)}} className='inline-block my-[10x] mx-[45px] text-[#424242] hover:text-[#686868]'>Overview</Link></li>
          <li><Link href="#" onClick={() => {scrollToElement(approachRef)}} className='inline-block my-[10x] mx-[45px] text-[#424242] hover:text-[#686868]'>Approach</Link></li>
          <li><Link href="#" onClick={() => {scrollToElement(expertiseRef)}} className='inline-block my-[10x] mx-[45px] text-[#424242] hover:text-[#686868]'>Expertise</Link></li>
        </ul>
      </div>

      <section className='' ref={overviewRef}>
        <header className='flex justify-evenly items-center px-[10px] py-[50px]'>
          <h1 className='relative text-[35px] font-bold'><span className="absolute z-[-1] text-[93px] bottom-[-43px] left-[-56px] text-[#dddddd]">01</span> <span className="text-primary">Future-Proof</span> Agriculture</h1>
          <p className='text-[#424242] w-[30%] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorem itaque eligendi enim deleniti. Accusantium, odio officia quia doloribus eaque aspernatur nesciunt velit ad suscipit fugit, est, aperiam facilis qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id eum officia nemo eveniet minima dolorum mollitia, ullam cum fuga distinctio eius aperiam doloremque possimus!</p>
        </header>

        <main className='bg-[#f2f5f7] pt-[8em]'>
          <h1 className='text-[35px] text-center font-semibold'>Reap the benefits of the <span className="text-primary">most impactful trends in Agriculture</span></h1>
          <p className='text-center text-[#424242] text-[16px] my-[30px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>  Accusamus cum ipsum voluptatem optio ut iste et? Consectetur natus voluptates et?</p>
          <div className='flex justify-evenly items-center flex-wrap mt-[60px]'>

            <div className='flex flex-col justify-center items-center w-[16%] py-[20px]'>
              <span className="ico bg-[white] px-[28px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-fingerprint text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[16%] py-[20px]'>
              <span className="ico bg-[white] px-[24px] pt-[28px] pb-[21px] rounded-[50px]"><i class="fa-solid fa-link text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[16%] py-[20px]'>
              <span className="ico bg-[white] px-[25px] pt-[28px] pb-[21px] rounded-[50px]"><i class="fa-solid fa-sitemap text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

          </div>
        </main>
      </section>


      <section ref={approachRef}></section>
      <section ref={expertiseRef}></section>

    </>
  )
}

export default Home