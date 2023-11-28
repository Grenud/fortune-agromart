import React, {useRef} from 'react'
import { Link } from 'react-router-dom'

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
        <p className='align-center text-[white] text-[18px] my-[15px] animate-fade-up'>Gain a competitive edge with next-gen personalization, automation, and AI.</p>
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
          <p className='text-[#424242] w-[30%] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorem itaque eligendi enim deleniti. Accusantium, odio officia quia doloribus eaque aspernatur nesciunt velit ad suscipit fugit, est, aperiam facilis qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id eum officia nemo eveniet minima dolorum mollitia, ullam cum fuga distinctio eius aperiam doloremque possimus!</p>
        </header>

        <main className='flex flex-col justify-center items-center bg-[#f2f5f7] pt-[8em]'>
          <h1 className='text-[35px] text-center font-semibold'>Reap the benefits of the <span className="text-primary">most impactful trends in Agriculture</span></h1>
          <p className='text-center text-[#424242] text-[16px] my-[30px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>  Accusamus cum ipsum voluptatem optio ut iste et? Consectetur natus voluptates et?</p>
          <div className='flex justify-center items-center flex-wrap mt-[60px]'>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[28px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-fingerprint text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[24px] pt-[28px] pb-[21px] rounded-[50px]"><i class="fa-solid fa-link text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[25px] pt-[28px] pb-[21px] rounded-[50px]"><i class="fa-solid fa-sitemap text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[28px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-fingerprint text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[24px] pt-[28px] pb-[21px] rounded-[50px]"><i class="fa-solid fa-link text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[25px] pt-[28px] pb-[21px] rounded-[50px]"><i class="fa-solid fa-sitemap text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[24px] pt-[28px] pb-[21px] rounded-[50px]"><i class="fa-solid fa-link text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[25px] pt-[28px] pb-[21px] rounded-[50px]"><i class="fa-solid fa-sitemap text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

          </div>

          <Link href="#" className='inline-block text-center my-[30px] hover:underline hover:text-[#6e6e6e] transition-all' >Let's Work Together <i className="transition-all translate-x-1 fa-solid fa-chevron-right"></i></Link>

        </main>

        <div className="flex flex-col justify-center items-start mx-[50px]">
          <div className='flex justify-start items-start py-[20px] px-[20%] relative mt-[86px]'>
            <h4 className='text-[150px] pb-5 text-primary absolute top-[-26px]'>
            ❞
            </h4>
            <h4 className="text-[26px] w-[70%] font-bold my-2 ml-[86px]">
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

        <div className='flex flex-col justify-center items-center pt-[8em]'>
          <h1 className='text-[35px] text-center font-semibold'>Choose the right roles to suit your needs</h1>
          <p className='text-center text-[#424242] text-[16px] my-[30px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>  Accusamus cum ipsum voluptatem optio ut iste et? Consectetur natus voluptates et?</p>
          <div className='flex justify-center items-center flex-wrap mt-[60px]'>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[28px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-fingerprint text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[24px] pt-[28px] pb-[21px] rounded-[50px]"><i class="fa-solid fa-link text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[25px] pt-[28px] pb-[21px] rounded-[50px]"><i class="fa-solid fa-sitemap text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[20%] mx-[10px] px-[25px] py-[20px]'>
              <span className="ico bg-[white] px-[28px] pt-[28px] pb-[21px] rounded-[50px]"><i className="fa-solid fa-fingerprint text-[25px] text-primary"></i></span>
              <h4 className="text-[16px] font-semibold my-2">Lorem ipsum dolor sit amet.</h4>
              <p className='text-center text-[#424242] text-[14px] my-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate eius minus vel harum cum eos autem expedita odio facere.</p>
            </div>

          </div>

          <Link href="#" className='inline-block text-center my-[30px] hover:underline hover:text-[#6e6e6e] transition-all' >Let's Work Together <i className="transition-all translate-x-1 fa-solid fa-chevron-right"></i></Link>

        </div>

      </section>


      <section ref={approachRef}>

        <header className='flex justify-evenly items-center px-[10px] py-[50px]'>
          <h1 className='relative text-[35px] w-[30%] font-bold'><span className="absolute z-[-1] text-[93px] top-[0px] left-[-56px] text-[#dddddd]">02</span> Project management through Agile best practices to deliver successful products</h1>
          <p className='text-[#424242] w-[30%] '>Project management is the key to the successful delivery of your product. Our effective model is based on an adaptive, incremental process that complements traditional project management with Agile practices to deliver the most value.<br/><br/>We help you successfully deliver concept-to-product projects, implement iterative efforts to make your product better, and maintain a great relationship in the process.</p>
        </header>

        <div className='relative flex justify-center items-start bg-[#f2f5f7] py-[8em]'>
          <div className="sticky top-[80px]">
            <img src="https://www.netguru.com/hs-fs/hubfs/Screenshot%202023-05-25%20at%2011.29.22.png?width=669&height=690&name=Screenshot%202023-05-25%20at%2011.29.22.png" alt="" />
          </div>

          <div className='flex flex-col justify-center items-center w-[40%] mx-[10px] px-[25px] pb-[20px]'>

            <div className='bg-[white] w-[100%] p-[30px] mb-[15px] mt-[0px] flex flex-col justify-center items-center'>
              <h5 className='relative text-[20px] w-[75%] font-bold p-[20px] mb-4'><span className="absolute z-[0] text-[80px] top-[-24px] left-[-56px] text-[#dddddd]">01</span><span className='relative z-[1]'>Requirements and Plan</span></h5>
              <p className='w-[75%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eius natus, dolores laboriosam adipisci ad fugiat cum tempore deserunt, architecto eligendi. Quod molestias hic saepe?</p>
            </div>

            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-center'>
              <h5 className='relative text-[20px] w-[75%] font-bold p-[20px] mb-4'><span className="absolute z-[0] text-[80px] top-[-24px] left-[-56px] text-[#dddddd]">02</span><span className='relative z-[1]'>Design</span></h5>
              <p className='w-[75%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eius natus, dolores laboriosam adipisci ad fugiat cum tempore deserunt, architecto eligendi. Quod molestias hic saepe?</p>
            </div>

            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-center'>
              <h5 className='relative text-[20px] w-[75%] font-bold p-[20px] mb-4'><span className="absolute z-[0] text-[80px] top-[-24px] left-[-56px] text-[#dddddd]">03</span><span className='relative z-[1]'>Develop</span></h5>
              <p className='w-[75%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eius natus, dolores laboriosam adipisci ad fugiat cum tempore deserunt, architecto eligendi. Quod molestias hic saepe?</p>
            </div>

            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-center'>
              <h5 className='relative text-[20px] w-[75%] font-bold p-[20px] mb-4'><span className="absolute z-[0] text-[80px] top-[-24px] left-[-56px] text-[#dddddd]">04</span><span className='relative z-[1]'>Test</span></h5>
              <p className='w-[75%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eius natus, dolores laboriosam adipisci ad fugiat cum tempore deserunt, architecto eligendi. Quod molestias hic saepe?</p>
            </div>

            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-center'>
              <h5 className='relative text-[20px] w-[75%] font-bold p-[20px] mb-4'><span className="absolute z-[0] text-[80px] top-[-24px] left-[-56px] text-[#dddddd]">05</span><span className='relative z-[1]'>Release and Iterate</span></h5>
              <p className='w-[75%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eius natus, dolores laboriosam adipisci ad fugiat cum tempore deserunt, architecto eligendi. Quod molestias hic saepe?</p>
            </div>

            <div className='bg-[white] w-[100%] p-[30px] my-[15px] flex flex-col justify-center items-center'>
              <h5 className='relative text-[20px] w-[75%] font-bold p-[20px] mb-4'><span className="absolute z-[0] text-[80px] top-[-24px] left-[-56px] text-[#dddddd]">06</span><span className='relative z-[1]'>Continuous Improvement</span></h5>
              <p className='w-[75%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eius natus, dolores laboriosam adipisci ad fugiat cum tempore deserunt, architecto eligendi. Quod molestias hic saepe?</p>
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


      
      <section ref={expertiseRef}></section>

    </>
  )
}

export default Home