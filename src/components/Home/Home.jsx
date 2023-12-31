import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
// Components
import CarouselBody1 from './CarouselBody1';
import CarouselBody2 from './CarouselBody2';

// Data
import {CarouselData1, CarouselData2} from './CarouselData';


const Home = () => {

  // Page section refs
  const overviewRef = useRef(null);
  const approachRef = useRef(null);
  const expertiseRef = useRef(null);

  // Sub Section refs
  const subSection1Ref = useRef(null);
  const subSection2Ref = useRef(null);
  const subSection3Ref = useRef(null);
  const subSection4Ref = useRef(null);
  const subSection5Ref = useRef(null);

  const scrollToElement = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };


  return (
    <>

      <section className='flex flex-col justify-center items-center bg-[#0000008f] h-[80vh] relative'>
        <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute top-0 left-0 w-screen h-[100%] z-[-1]" alt="" />
        <h1 className='align-center text-[white] text-[45px] font-extrabold animate-fade-up'>Welcome to the Future of <span className='text-primary'>Agriculture</span></h1>
        <p className='w-[60%] text-center text-[white] text-[16px] my-[40px] font-semibold animate-fade-up'>Where innovation meets cultivation, and sustainability sprouts from every seed. Embrace a journey of excellence as we redefine the landscape of farming, cultivating a future that blends cutting-edge technology with time-honored traditions. Join us in sowing the seeds of progress, where every harvest is a testament to our commitment to shaping a sustainable and bountiful tomorrow.</p>
        <Link href="#" className="bg-primary hover:bg-primary-hover text-[darkText] border-[transparent] border-0 py-[15px] px-[30px] rounded-md font-semibold animate-fade-up">Get Started</Link>
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
          <p className='text-[#424242] w-[30%] '>In our commitment to sustainable practices, we cultivate a future where resilience meets innovation. Seamlessly bridging tradition and technology, we're not just growing crops; we're cultivating a legacy of agricultural excellence that withstands the test of time. Join us on this journey, where each seed planted is a promise for a harvest-rich future, and every field we tend to is a testament to our dedication to a thriving, future-proof agricultural landscape.</p>
        </header>

        <main className='flex flex-col justify-center items-center bg-[#f2f5f7] pt-[8em]'>
          <h1 className='text-[35px] text-center font-semibold'>Reap the benefits of the <span className="text-primary">most impactful trends in Agriculture</span></h1>
          <p className='text-center text-[#424242] text-[16px] w-[60%] my-[30px]'>Where every innovation transforms the field into a canvas of opportunity. Embrace a harvest of possibilities as we navigate the agri-tech frontier, integrating smart solutions and sustainable practices."</p>
          <div className='flex justify-center items-center flex-wrap mt-[60px]'>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[28px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-fingerprint text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[24px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-link text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[25px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-sitemap text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[28px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-fingerprint text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[24px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-link text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[25px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-sitemap text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[24px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-link text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[25px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-sitemap text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

          </div>

          <Link href="#" className='font-semibold inline-block text-center my-[30px] hover:underline hover:text-[#6e6e6e] transition-all' >Let's Work Together <i className="transition-all translate-x-1 fa-solid fa-chevron-right"></i></Link>

        </main>

        <div className="flex flex-col justify-center items-start mx-[50px]">
          <div className='flex justify-start items-start py-[20px] px-[20%] relative mt-[86px]'>
            <h4 className='text-[150px] pb-5 text-primary absolute top-[-26px]'>
            ❞
            </h4>
            <h4 className="text-[26px] w-[70%] font-bold my-2 ml-[86px]">
            Join us in sowing the seeds of progress, where the convergence of cutting-edge trends ensures a yield of prosperity for farmers and a nourished planet for generations to come.
            </h4>
          </div>
          <div className="flex ml-[28em]">
            <img src="https://pics.craiyon.com/2023-06-29/c42ecedad3464836a4a55d64d1136d47.webp" className='h-[50px] w-[50px] mx-[10px]' alt="" />
            <div className="flex flex-col">
              <p className='font-semibold text-[#000000]'>Vaibhav Nehwal</p>
              <p className='text-[#5c5c5c]'>Author Designation</p>
            </div>
          </div>
        </div>

        {/* <div className='flex flex-col justify-center items-center pt-[8em]'>
          <h1 className='text-[35px] text-center font-semibold'>Choose the right roles to suit your needs</h1>
          <p className='text-center text-[#424242] text-[16px] my-[30px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>  Accusamus cum ipsum voluptatem optio ut iste et? Consectetur natus voluptates et?</p>
          <div className='flex justify-center items-center flex-wrap mt-[60px]'>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[28px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-fingerprint text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[24px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-link text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[25px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-sitemap text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[28px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-fingerprint text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

          </div>

          <Link href="#" className='font-semibold inline-block text-center my-[30px] hover:underline hover:text-[#6e6e6e] transition-all' >Let's Work Together <i className="transition-all translate-x-1 fa-solid fa-chevron-right"></i></Link>

        </div> */}

      </section>


      <section ref={approachRef}>

        <header className='flex justify-evenly items-center px-[10px] py-[50px]'>
          <h1 className='relative text-[35px] w-[30%] font-bold'><span className="absolute z-[-1] text-[93px] top-[0px] left-[-56px] text-[#dddddd]">02</span> Revolutionizing Agriculture with Cutting-Edge Technology and Sustainable Practices</h1>
          <p className='text-[#424242] w-[30%] '>Welcome to the Future of Agriculture, where innovation meets cultivation, and sustainability sprouts from every seed. Embrace a journey of excellence as we redefine the landscape of farming, cultivating a future that blends high-tech solutions with time-honored traditions. Join us in sowing the seeds of progress, where every harvest is a testament to our commitment to shaping a sustainable and bountiful tomorrow.</p>
        </header>

        <div className='relative flex justify-center items-start bg-[#f2f5f7] py-[8em]'>
          <div className="sticky top-[80px]">
            <img src="https://www.netguru.com/hs-fs/hubfs/Screenshot%202023-05-25%20at%2011.29.22.png?width=669&height=690&name=Screenshot%202023-05-25%20at%2011.29.22.png" alt="" />
          </div>

          <div className='flex flex-col justify-center items-center w-[40%] mx-[10px] px-[25px] pb-[20px]'>

            <div className='bg-[white] w-[100%] p-[30px] mb-[15px] mt-[0px] flex flex-col justify-center items-center'>
              <h5 className='relative text-[20px] w-[75%] font-bold p-[20px] mb-4'><span className="absolute z-[0] text-[80px] top-[-24px] left-[-56px] text-[#dddddd]">01</span><span className='relative z-[1]'>🌾 Smart Agriculture Solutions</span></h5>
              <p className='w-[75%]'>Explore our cutting-edge Smart Agriculture Solutions that harness the power of technology to optimize farming processes. From automated monitoring systems to intelligent irrigation, we empower farmers with innovative tools that enhance efficiency and crop yield.</p>
            </div>

            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-center'>
              <h5 className='relative text-[20px] w-[75%] font-bold p-[20px] mb-4'><span className="absolute z-[0] text-[80px] top-[-24px] left-[-56px] text-[#dddddd]">02</span><span className='relative z-[1]'>🚜 Precision Farming</span></h5>
              <p className='w-[75%]'>Embark on a new era of farming precision with our advanced Precision Farming techniques. We leverage technology to analyze and optimize every aspect of crop cultivation, ensuring resource efficiency and sustainable agricultural practices.</p>
            </div>

            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-center'>
              <h5 className='relative text-[20px] w-[75%] font-bold p-[20px] mb-4'><span className="absolute z-[0] text-[80px] top-[-24px] left-[-56px] text-[#dddddd]">03</span><span className='relative z-[1]'>🌱 Agile Crop Management</span></h5>
              <p className='w-[75%]'>Experience Agile Crop Management, a project management approach that adapts to the evolving needs of modern agriculture. Our agile practices ensure successful product delivery, continuous improvement, and a responsive approach to the dynamic challenges of crop management.</p>
            </div>

            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-center'>
              <h5 className='relative text-[20px] w-[75%] font-bold p-[20px] mb-4'><span className="absolute z-[0] text-[80px] top-[-24px] left-[-56px] text-[#dddddd]">04</span><span className='relative z-[1]'>🌐 Global Sourcing</span></h5>
              <p className='w-[75%]'>Benefit from our Global Sourcing network, connecting farmers with international markets. We facilitate the global exchange of agricultural products, providing farmers with access to a diverse range of opportunities and ensuring a sustainable market for their produce.</p>
            </div>

            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-center'>
              <h5 className='relative text-[20px] w-[75%] font-bold p-[20px] mb-4'><span className="absolute z-[0] text-[80px] top-[-24px] left-[-56px] text-[#dddddd]">05</span><span className='relative z-[1]'>📊 Data-Driven Insights</span></h5>
              <p className='w-[75%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eius natus, dolores laboriosam adipisci ad fugiat cum tempore deserunt, architecto eligendi. Quod molestias hic saepe?</p>
            </div>

            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-center'>
              <h5 className='relative text-[20px] w-[75%] font-bold p-[20px] mb-4'><span className="absolute z-[0] text-[80px] top-[-24px] left-[-56px] text-[#dddddd]">06</span><span className='relative z-[1]'>🌿 Sustainable Agriculture Practices</span></h5>
              <p className='w-[75%]'>Embrace Sustainable Agriculture Practices that prioritize environmental stewardship. From organic farming initiatives to eco-friendly pest control, we are committed to practices that ensure the long-term health of both crops and the planet.

Reap the benefits of the most impactful trends in Agriculture, where every innovation transforms the field into a canvas of opportunity. Embrace a harvest of possibilities as we navigate the agri-tech frontier, integrating smart solutions and sustainable practices. Join us in sowing the seeds of progress, where the convergence of cutting-edge trends ensures a yield of prosperity for farmers and a nourished planet for generations to come.</p>
            </div>

          </div>
        </div>

        <div className='relative flex justify-center items-start pt-[8em]'>

          <div className='flex flex-col justify-center items-center w-[60%] mx-[10px] px-[25px] py-[20px]'>

            <div ref={subSection1Ref}></div>
            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-start'>
              <h2 className='text-[30px] w-[75%] font-bold py-[20px] mb-4'>Agile Project Management: End chaos and gain control</h2>
              <p className='w-[75%]'>Agile is an iterative, flexible approach to software development that embraces the fact that requirements evolve as a product develops.<br/><br/>Project Management is the application of knowledge, skills, tools and techniques to project activities in order to meet the project requirements.<br/><br/>Agile Project Management controls software development by delivering work against requirements iteratively and incrementally. User needs evolve and we need to adapt to the changes that can occur throughout a project’s life cycle.<br/><br/>To create products that align with user needs and business objectives, we encourage short development cycles that continuously improve the product.<br/><br/>Requirements and solutions evolve through collaboration between customers, end users and self-organizing, cross-functional teams.<br/><br/>The Agile Project Management philosophy stems from the core values highlighted in the Agile Manifesto:<br/><br/>As agile proponents, we value:</p>
              <ul className='p-[10px]'>
                <li className='px-[10px] py-[20px]'>
                  <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Individuals and interactions</span> over processes and tools</p>
                </li>
                <li className='px-[10px] py-[20px]'>
                  <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Working software</span>  over comprehensive documentation</p>
                </li>
                <li className='px-[10px] py-[20px]'>
                  <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Customer collaboration</span>  over contract negotiation</p>
                </li>
                <li className='px-[10px] py-[20px]'>
                  <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Responding to change</span>  over following a plan</p>
                </li>
              </ul>
              <p className='w-[75%]'>and alike the Independent Signatories of the Manifesto for Agile Software Development, we also believe that there is value in the items on the right, yet we value the items on the left more.<br/><br/>Agile is an umbrella term for a number of methodologies and frameworks, sharing the principles and values described above. Each of them has its own areas of use and distinctive features. Organizations often utilize agile methods like Kanban or Scrum to improve time to market, quality, and happiness.</p>
            </div>

            <div ref={subSection2Ref}></div>
            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-start'>
              <h2 className='text-[30px] w-[75%] font-bold py-[20px] mb-4'>Agile Project Management vs Traditional Project Management Methodologies</h2>
                <p className='w-[75%]'>Agile is an iterative, flexible approach to software development that embraces the fact that requirements evolve as a product develops.<br/><br/>Project Management is the application of knowledge, skills, tools and techniques to project activities in order to meet the project requirements.<br/><br/>Agile Project Management controls software development by delivering work against requirements iteratively and incrementally. User needs evolve and we need to adapt to the changes that can occur throughout a project’s life cycle.<br/><br/>To create products that align with user needs and business objectives, we encourage short development cycles that continuously improve the product.<br/><br/>Requirements and solutions evolve through collaboration between customers, end users and self-organizing, cross-functional teams.<br/><br/>The Agile Project Management philosophy stems from the core values highlighted in the Agile Manifesto:<br/><br/>As agile proponents, we value:</p>
                <ul className='p-[10px]'>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Individuals and interactions</span> over processes and tools</p>
                  </li>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Working software</span>  over comprehensive documentation</p>
                  </li>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Customer collaboration</span>  over contract negotiation</p>
                  </li>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Responding to change</span>  over following a plan</p>
                  </li>
                </ul>
                <p className='w-[75%]'>and alike the Independent Signatories of the Manifesto for Agile Software Development, we also believe that there is value in the items on the right, yet we value the items on the left more.<br/><br/>Agile is an umbrella term for a number of methodologies and frameworks, sharing the principles and values described above. Each of them has its own areas of use and distinctive features. Organizations often utilize agile methods like Kanban or Scrum to improve time to market, quality, and happiness.</p>
            </div>

            <div ref={subSection3Ref}></div>
            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-start'>
              <h2 className='text-[30px] w-[75%] font-bold py-[20px] mb-4'>The advantages of Agile Methodologies</h2>
                <p className='w-[75%]'>Agile is an iterative, flexible approach to software development that embraces the fact that requirements evolve as a product develops.<br/><br/>Project Management is the application of knowledge, skills, tools and techniques to project activities in order to meet the project requirements.<br/><br/>Agile Project Management controls software development by delivering work against requirements iteratively and incrementally. User needs evolve and we need to adapt to the changes that can occur throughout a project’s life cycle.<br/><br/>To create products that align with user needs and business objectives, we encourage short development cycles that continuously improve the product.<br/><br/>Requirements and solutions evolve through collaboration between customers, end users and self-organizing, cross-functional teams.<br/><br/>The Agile Project Management philosophy stems from the core values highlighted in the Agile Manifesto:<br/><br/>As agile proponents, we value:</p>
                <ul className='p-[10px]'>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Individuals and interactions</span> over processes and tools</p>
                  </li>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Working software</span>  over comprehensive documentation</p>
                  </li>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Customer collaboration</span>  over contract negotiation</p>
                  </li>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Responding to change</span>  over following a plan</p>
                  </li>
                </ul>
                <p className='w-[75%]'>and alike the Independent Signatories of the Manifesto for Agile Software Development, we also believe that there is value in the items on the right, yet we value the items on the left more.<br/><br/>Agile is an umbrella term for a number of methodologies and frameworks, sharing the principles and values described above. Each of them has its own areas of use and distinctive features. Organizations often utilize agile methods like Kanban or Scrum to improve time to market, quality, and happiness.</p>
            </div>

            <div ref={subSection4Ref}></div>
            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-start'>
              <h2 className='text-[30px] w-[75%] font-bold py-[20px] mb-4'>Agile Sprint Planning</h2>
                <p className='w-[75%]'>Agile is an iterative, flexible approach to software development that embraces the fact that requirements evolve as a product develops.<br/><br/>Project Management is the application of knowledge, skills, tools and techniques to project activities in order to meet the project requirements.<br/><br/>Agile Project Management controls software development by delivering work against requirements iteratively and incrementally. User needs evolve and we need to adapt to the changes that can occur throughout a project’s life cycle.<br/><br/>To create products that align with user needs and business objectives, we encourage short development cycles that continuously improve the product.<br/><br/>Requirements and solutions evolve through collaboration between customers, end users and self-organizing, cross-functional teams.<br/><br/>The Agile Project Management philosophy stems from the core values highlighted in the Agile Manifesto:<br/><br/>As agile proponents, we value:</p>
                <ul className='p-[10px]'>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Individuals and interactions</span> over processes and tools</p>
                  </li>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Working software</span>  over comprehensive documentation</p>
                  </li>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Customer collaboration</span>  over contract negotiation</p>
                  </li>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Responding to change</span>  over following a plan</p>
                  </li>
                </ul>
                <p className='w-[75%]'>and alike the Independent Signatories of the Manifesto for Agile Software Development, we also believe that there is value in the items on the right, yet we value the items on the left more.<br/><br/>Agile is an umbrella term for a number of methodologies and frameworks, sharing the principles and values described above. Each of them has its own areas of use and distinctive features. Organizations often utilize agile methods like Kanban or Scrum to improve time to market, quality, and happiness.</p>
            </div>

            <div ref={subSection5Ref}></div>
            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-start'>
              <h2 className='text-[30px] w-[75%] font-bold py-[20px] mb-4'>Agile Development Process at Netguru</h2>
                <p className='w-[75%]'>Agile is an iterative, flexible approach to software development that embraces the fact that requirements evolve as a product develops.<br/><br/>Project Management is the application of knowledge, skills, tools and techniques to project activities in order to meet the project requirements.<br/><br/>Agile Project Management controls software development by delivering work against requirements iteratively and incrementally. User needs evolve and we need to adapt to the changes that can occur throughout a project’s life cycle.<br/><br/>To create products that align with user needs and business objectives, we encourage short development cycles that continuously improve the product.<br/><br/>Requirements and solutions evolve through collaboration between customers, end users and self-organizing, cross-functional teams.<br/><br/>The Agile Project Management philosophy stems from the core values highlighted in the Agile Manifesto:<br/><br/>As agile proponents, we value:</p>
                <ul className='p-[10px]'>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Individuals and interactions</span> over processes and tools</p>
                  </li>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Working software</span>  over comprehensive documentation</p>
                  </li>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Customer collaboration</span>  over contract negotiation</p>
                  </li>
                  <li className='px-[10px] py-[20px]'>
                    <p><span className='text-[green]'>⦿</span> <span className='font-semibold'>Responding to change</span>  over following a plan</p>
                  </li>
                </ul>
                <p className='w-[75%]'>and alike the Independent Signatories of the Manifesto for Agile Software Development, we also believe that there is value in the items on the right, yet we value the items on the left more.<br/><br/>Agile is an umbrella term for a number of methodologies and frameworks, sharing the principles and values described above. Each of them has its own areas of use and distinctive features. Organizations often utilize agile methods like Kanban or Scrum to improve time to market, quality, and happiness.</p>
            </div>

          </div>

          <div className="sticky top-[80px] w-[18%]">
            <div className='bg-[#f2f5f7] py-[40px] px-[30px] w-[100%] my-[30px]'>

              <h4 className='font-semibold text-[20px]'>Contents</h4>

              <ul className=''>
                <li className='my-[15px] w-[90%] text-[15px] truncate text-[#797979] hover:text-[black] hover:underline'>
                  <Link onClick={() => {scrollToElement(subSection1Ref)}} className='w-[90%]'>Agile Project Management: End chaos and gain control</Link>
                </li>
                <li className='my-[15px] w-[90%] text-[15px] truncate text-[#797979] hover:text-[black] hover:underline'>
                  <Link onClick={() => {scrollToElement(subSection2Ref)}} className='w-[90%]'>Agile Project Management vs Traditional Project Management Methodologies</Link>
                </li>
                <li className='my-[15px] w-[90%] text-[15px] truncate text-[#797979] hover:text-[black] hover:underline'>
                  <Link onClick={() => {scrollToElement(subSection3Ref)}} className='w-[90%]'>The advantages of Agile Methodologies</Link>
                </li>
                <li className='my-[15px] w-[90%] text-[15px] truncate text-[#797979] hover:text-[black] hover:underline'>
                  <Link onClick={() => {scrollToElement(subSection4Ref)}} className='w-[90%]'>Agile Sprint Planning</Link>
                </li>
                <li className='my-[15px] w-[90%] text-[15px] truncate text-[#797979] hover:text-[black] hover:underline'>
                  <Link onClick={() => {scrollToElement(subSection5Ref)}} className='w-[90%]'>Agile Development Process at Netguru</Link>
                </li>
              </ul>

            </div>
          </div>

        </div>

      </section>



      <section ref={expertiseRef}>

        <header className='flex justify-evenly items-center px-[10px] py-[50px]'>
          <h1 className='relative text-[35px] w-[30%] font-bold'><span className="absolute z-[-1] text-[93px] top-[0px] left-[-56px] text-[#dddddd]">03</span> Our project management consultants help innovators to deliver the most value</h1>
          <p className='text-[#424242] w-[30%] '>Netguru helps innovators maximise their products’ business value through implementation of Agile and Project Management practices.<br/><br/>2Our team of 60+ multi-disciplinary and certified Project Managers, Scrum Masters, Product Owners and Agile Coaches have experience in international projects for startups and well-established enterprises. We will support you on your Agile journey.</p>
        </header>

        <main className='flex flex-col justify-center items-center bg-[#f2f5f7] py-[6em]'>

          <div className="flex justify-center items-center py-[25px]">
            <img src="https://images.unsplash.com/photo-1530464684439-723262c0d16e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhcm1pbmd8ZW58MHwxfDB8fHww" className='rounded-md w-[30%]' alt="Soil" />

            <div className='flex flex-col justify-center items-start w-[40%] mx-[85px] px-[25px] pb-[20px]'>
              <h2 className='text-[30px] w-[75%] font-bold py-[20px] mb-4'>Agile Project Management: End chaos and gain control</h2>
              <p className='w-[75%] text-[15px]'>Agile is an iterative, flexible approach to software development that embraces the fact that requirements evolve as a product develops.<br/><br/>Project Management is the application of knowledge, skills, tools and techniques to project activities in order to meet the project requirements.<br/><br/>Agile Project Management controls software development by delivering work against requirements iteratively and incrementally. User needs evolve and we need to adapt to the changes that can occur throughout a project’s life cycle.<br/><br/>To create products that align with user needs and business objectives, we encourage short development cycles that continuously improve the product.<br/><br/>Requirements and solutions evolve through collaboration between customers, end users and self-organizing, cross-functional teams.</p>
              <Link href="#" className='font-semibold inline-block text-center my-[30px] hover:underline hover:text-[#6e6e6e] transition-all' >Let's Work Together <i className="transition-all translate-x-1 fa-solid fa-chevron-right"></i></Link>
            </div>

          </div>

          {/* <div className="flex justify-center items-center py-[25px]">

            <div className='flex flex-col justify-center items-start w-[45%] mx-[10px] px-[25px] pb-[20px]'>
              <h2 className='text-[30px] w-[75%] font-bold py-[20px] mb-4'>Agile Project Management: End chaos and gain control</h2>
              <div className="flex flex-col justify-center items-start mx-[50px]">
                <div className='flex justify-start items-start py-[20px] px-[20px] relative mt-[86px]'>
                  <h4 className='text-[100px] pb-5 text-primary absolute top-[-26px]'>
                  ❞
                  </h4>
                  <h4 className="text-[20px] w-[70%] font-bold my-2 ml-[86px]">
                    Constantly super impressed with our PM. She is the most reliable member of all my teams. Thanks to her dedication and proactive approach the projects are running smoothly and we avoided some major delays or disasters.
                  </h4>
                </div>
                <div className="flex ml-[28em]">
                  <img src="https://pics.craiyon.com/2023-06-29/c42ecedad3464836a4a55d64d1136d47.webp" className='h-[50px] w-[50px] mx-[10px]' alt="" />
                  <div className="flex flex-col">
                    <p className='font-semibold text-[#000000]'>Author Name</p>
                    <p className='text-[#5c5c5c]'>Author Designation</p>
                  </div>
                </div>
              </div>
              <Link href="#" className='font-semibold inline-block text-center my-[30px] hover:underline hover:text-[#6e6e6e] transition-all' >Let's Work Together <i className="transition-all translate-x-1 fa-solid fa-chevron-right"></i></Link>
            </div>

            <img src="https://images.unsplash.com/photo-1530464684439-723262c0d16e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhcm1pbmd8ZW58MHwxfDB8fHww" className='rounded-md w-[30%]' alt="Soil" />

          </div> */}


          <div className="flex flex-col justify-center items-center py-[40px]">
            <h2 className='text-[30px] font-bold my-[20px]'>What our partners say about cooperating</h2>

            <div className="flex justify-center items-center my-[35px]">

              <div className="flex flex-col justify-center items-start w-[25%] mx-[20px]">
                <img src="" alt="Logo" className='font-bold text-[30px] text-primary' />
                <p className='text-[13px] my-[15px] text-[#353535]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta culpa accusamus ullam, dignissimos dolorum voluptatum quasi earum sunt atque repudiandae incidunt id eos repellat reprehenderit? Odio temporibus beatae doloribus id?</p>
                <div className="flex my-[10px]">
                  <img src="https://pics.craiyon.com/2023-06-29/c42ecedad3464836a4a55d64d1136d47.webp" className='h-[50px] w-[50px] mx-[10px]' alt="" />
                  <div className="flex flex-col">
                    <p className='font-semibold text-[#000000]'>Author Name</p>
                    <p className='text-[#5c5c5c]'>Author Designation</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-start w-[25%] mx-[20px]">
                <img src="" alt="Logo" className='font-bold text-[30px] text-primary' />
                <p className='text-[13px] my-[15px] text-[#353535]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta culpa accusamus ullam, dignissimos dolorum voluptatum quasi earum sunt atque repudiandae incidunt id eos repellat reprehenderit? Odio temporibus beatae doloribus id?</p>
                <div className="flex my-[10px]">
                  <img src="https://pics.craiyon.com/2023-06-29/c42ecedad3464836a4a55d64d1136d47.webp" className='h-[50px] w-[50px] mx-[10px]' alt="" />
                  <div className="flex flex-col">
                    <p className='font-semibold text-[#000000]'>Author Name</p>
                    <p className='text-[#5c5c5c]'>Author Designation</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-start w-[25%] mx-[20px]">
                <img src="" alt="Logo" className='font-bold text-[30px] text-primary' />
                <p className='text-[13px] my-[15px] text-[#353535]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta culpa accusamus ullam, dignissimos dolorum voluptatum quasi earum sunt atque repudiandae incidunt id eos repellat reprehenderit? Odio temporibus beatae doloribus id?</p>
                <div className="flex my-[10px]">
                  <img src="https://pics.craiyon.com/2023-06-29/c42ecedad3464836a4a55d64d1136d47.webp" className='h-[50px] w-[50px] mx-[10px]' alt="" />
                  <div className="flex flex-col">
                    <p className='font-semibold text-[#000000]'>Author Name</p>
                    <p className='text-[#5c5c5c]'>Author Designation</p>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className="flex justify-evenly items-center w-screen mt-[70px] my-[30px]">

            <div className="flex flex-col justify-center items-center">
              <h1 className='text-[35px] text-primary font-bold'>15+</h1>
              <p className='text-[13px] text-[#414141]'>Years On Market</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className='text-[35px] text-primary font-bold'>600+</h1>
              <p className='text-[13px] text-[#414141]'>People On Board</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className='text-[35px] text-primary font-bold'>1000+</h1>
              <p className='text-[13px] text-[#414141]'>Projects Delivered</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className='text-[35px] text-primary font-bold'>73</h1>
              <p className='text-[13px] text-[#414141]'>Our Score</p>
            </div>

          </div>

        </main>


        <div className='flex flex-col justify-center items-center py-[6em]'>
          <h2 className='text-[30px] font-bold'>Delivered by Fortune Agromart</h2>
          <p className='text-center text-[16px] text-[#444444] w-[50%] my-[30px]'>We are actively boosting our international footprint across various industries such as banking, healthcare, real estate, e-commerce, travel, and more. We deliver products to such brands as solarisBank, PAYBACK, DAMAC, Volkswagen, Babbel, Santander, Keller Williams, and Hive.</p>
          <CarouselBody1 data={CarouselData1} />
        </div>

        <div className='flex flex-col justify-center items-center py-[4em]'>
          <h2 className='text-[30px] font-bold'>Read more on <span className='text-primary'>Our Blog</span></h2>
          <p className='text-center text-[16px] text-[#444444] w-[50%] my-[30px]'>We are actively boosting our international footprint across various industries such as banking, healthcare, real estate, e-commerce, travel, and more. We deliver products to such brands as solarisBank, PAYBACK, DAMAC, Volkswagen, Babbel, Santander, Keller Williams, and Hive.</p>
          <CarouselBody2 data={CarouselData2} />
        </div>

      </section>


      <div className='flex flex-col justify-center items-center bg-[#0000008f] h-[50vh] relative'>
        <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute top-0 left-0 w-screen h-[100%] z-[-1]" alt="" />
        <h1 className='align-center text-[white] text-[45px] font-extrabold animate-fade-up'>Welcome to the Future of <span className='text-primary'>Agriculture</span></h1>
        <Link href="#" className="bg-primary hover:bg-primary-hover text-[darkText] border-[transparent] border-0 py-[15px] mt-[15px] px-[30px] rounded-md font-semibold animate-fade-up">Get Started</Link>
      </div>

    </>
  )
}

export default Home