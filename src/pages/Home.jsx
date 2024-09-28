import React from "react";
import homelogo from "../images/task-list.png";
import taskdistribution from "../images/task-distribution.png";
import collaboration from "../images/collaboration.png";
import groups from "../images/groups.png";
import authorize from "../images/authorize.png";

import tasks from "../images/tasks.png";
import easy from "../images/easy.png";
import security from "../images/secure.png";
import mobileaccess from "../images/mobile.png";
import heart from "../images/hearts.png";
// import bglogo from "../images/task-home.svg";
// import todo from "../images/todo.png";
// bg-[#451aba]
const Home = () => {
    
    const getStarted = (e) => {
        window.location.href = `${process.env.REACT_APP_FRONTEND_ORIGIN}/auth`
    }
    return (
        <>

            <div className="homr-root w-full  box-border   flex flex-col justify-start items-center overflow-y-scroll " >
               
                <div className="align-con  w-[90%]   box-border " >

                    <div className=" navigation-bar flex items-center justify-between h-[60px] box-border p-[5px] w-full  gap-x-[10px] ">

                        <div className="logo-menu-con flex justify-center items-center box-border gap-x-[10p]">
                            <div className="brand flex justify-center items-center box-border">
                                
                                <div className="logo-holder w-[50px] h-[50px] flex justify-center items-center ">
                                    <img src={homelogo} alt="" className="w-[50px] h-[50px]" />
                                </div>
                                <span className="text-[1.5rem] font-bold font-[Poppins,_sans-serif]" >TaskItUp</span>
                            </div>

                            <div className="menuitems flex justify-center items-center gap-[10px] ml-[50px]">
                                <div className="ser  inline px-[5px] font-[Poppins,_sans-serif] hover:cursor-pointer bg-[#8bde47] rounded-[25px] text-[1.2rem]">
                                    SERVICES
                                </div>
                                <div className="cont  inline font-[Poppins,_sans-serif] hover:cursor-pointer bg-[#8bde47] rounded-[25px] text-[1.2rem] px-[5px]">
                                    SUPPORT
                                </div>

                                <div className="cont  inline font-[Poppins,_sans-serif] hover:cursor-pointer bg-[#8bde47] rounded-[25px] text-[1.2rem] px-[5px]">
                                    BLOG
                                </div>
                            </div>
                        </div>
                        

                        <div className="get-start-con font-[Poppins,_sans-serif]">
                            <button className="font-[Poppins,_sans-serif] box-border border-[black] rounded-[25px] text-[1.2rem] px-[3px] border-[2px] hover:bg-[#282A35] hover:text-[white]" onClick={getStarted}>GET STARTED</button>
                        </div>
                        
                    </div>

                    <div className="split flex justify-center items-center w-full h-auto p-[2px] box-border ">
                        <div className="qoute w-full flex justify-center items-center  box-border h-full">
                            
                            <div className="font-['Matemasie',_sans-serif] font-normal not-italic text-[64px] w-[80%] h-full box-border p-[50px] keep-all">
                                
                            Organize your <span className="text-[blueviolet]">tasks</span>, <span className="text-[orangered]">optimize</span> your time, and unlock the power to <span className="text-[lightgreen]">achieve</span> more with <span className="text-[orange]">less</span> effort.
                            </div>
                        </div>

                        
                    </div>
                    
                    
                    <div className="features p-[2px]  h-auto mt-[10px] ">
                        <div className="features-holder flex flex justify-between items-center w-full gap-x-[10px] h-[120px]">
                            <div className="card rounded-[10px] bg-[radial-gradient(circle,_blueviolet,_#661a82)] p-[10px] box-border border-none bg-opacity-70 h-full">
                                <div className="heading-holder flex justify-start items-center  w-full ">
                                    <div className="img-holder"><img src={taskdistribution} width="50px" height="50px" /></div>
                                    <div className="img-heading font-[Poppins,_sans-serif] font-bold text-[white]">Task Distribution</div>
                                </div>

                                <div className="headcontent text-[white]">
                                    Enables Easy Distribiution of work.
                                </div>
                                
                            </div>


                            <div className="card rounded-[10px] bg-[radial-gradient(circle,_blueviolet,_#661a82)] p-[10px] box-border bg-opacity-70 w-1/4 h-full">
                                <div className="heading-holder flex justify-start items-center  w-full ">
                                    <div className="img-holder"><img src={collaboration} width="50px" height="50px" /></div>
                                    <div className="img-heading font-[Poppins,_sans-serif] font-bold text-[white]">Collaboration</div>
                                </div>

                                <div className="headcontent text-[white]">
                                    Enables Seamless Connectivity with members.
                                </div>
                                
                            </div>


                            <div className="card rounded-[10px] bg-[radial-gradient(circle,_blueviolet,_#661a82)] p-[10px] box-border bg-opacity-70 w-1/4 h-full">
                                <div className="heading-holder flex justify-start items-center  w-full ">
                                    <div className="img-holder"><img src={groups} width="50px" height="50px" /></div>
                                    <div className="img-heading font-[Poppins,_sans-serif] font-bold text-[white]">Groups</div>
                                </div>

                                <div className="headcontent text-[white]">
                                    Groups allows Privacy and Security.
                                </div>
                                
                            </div>


                            <div className="card rounded-[10px] bg-[flex flex-col bg-[radial-gradient(circle,_rgba(138,43,226,1),_#661a82)] p-[10px] box-border w-1/4 h-full">
                                <div className="heading-holder flex justify-start items-center  w-full ">
                                    <div className="img-holder"><img src={authorize} width="50px" height="50px" /></div>
                                    <div className="img-heading font-[Poppins,_sans-serif] font-bold text-[white]">Authorization</div>
                                </div>

                                <div className="headcontent text-[white]">
                                    Obly admin of the task can manage the task.
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="seperator h-[20px]">
                        
                    </div>
                    


                    
                    
                </div>
                {/*  bg-[#451aba]*/}
                <div className="moreinfo flex flex-col justify-start items-center box-border  h-auto w-full ">
                    <div className="tabholder flex justify-between items-center  w-[90%] h-auto bg-[#451aba] rounded-[10px] my-[5px] ">
                        <div className="imgholder w-[30%] h-[350px] flex justify-center items-center box-border p-[20px]">
                            <img src={tasks} alt="tasks" className="w-full h-full object-contain"/>
                        </div>
                        <div className="dataholder flex flex-col justify-start items-center w-[70%]">
                            <div className="title font-['Rowdies',_sans-serif] text-[3rem] text-[white]">
                                Flexible Task Views
                            </div>
                            <div className="desc font-['Karla',_sans-serif] font-bold text-[2rem] text-[white] keep-all">
                                Switch between list, board, or calendar views to manage tasks the way that works best for you.
                            </div>
                        </div>
                    </div>


                    <div className="tabholder flex justify-between items-center  w-[90%] h-auto bg-[#451aba] rounded-[10px] my-[5px]">
                        
                        <div className="dataholder flex flex-col justify-start items-center w-[70%]">
                            <div className="title font-['Rowdies',_sans-serif] text-[3rem] text-[white]">
                                Easy Onboarding
                            </div>
                            <div className="desc font-['Karla',_sans-serif] font-bold text-[2rem] text-[white] keep-all">
                                Simple setup and intuitive design mean your team can jump in and start managing tasks without missing a beat.
                            </div>
                        </div>
                        <div className="imgholder w-[30%] h-[350px] flex justify-center items-center box-border p-[20px]">
                            <img src={easy} alt="tasks" className="w-full h-full object-contain"/>
                        </div>
                    </div>

                    <div className="tabholder flex justify-between items-center  w-[90%] h-auto bg-[#451aba] rounded-[10px] my-[5px]">
                        <div className="imgholder w-[30%] h-[350px] flex justify-center items-center box-border p-[20px] ">
                            <img src={security} alt="tasks" className="w-full h-full object-contain"/>
                        </div>
                        <div className="dataholder flex flex-col justify-start items-center w-[70%]">
                            <div className="title font-['Rowdies',_sans-serif] text-[3rem] text-[white]">
                                Secure and Reliable
                            </div>
                            <div className="desc font-['Karla',_sans-serif] font-bold text-[2rem] text-[white] keep-all">
                                Trust in top-tier security with encrypted data and reliable backups, so your tasks are always protected.
                            </div>
                        </div>
                    </div>
                    
                    <div className="tabholder flex justify-between items-center  w-[90%] h-auto bg-[#451aba] rounded-[10px] my-[5px]">
                        
                        <div className="dataholder flex flex-col justify-start items-center w-[70%]">
                            <div className="title font-['Rowdies',_sans-serif] text-[3rem] text-[white]">
                                Mobile Access
                            </div>
                            <div className="desc font-['Karla',_sans-serif] font-bold text-[2rem] text-slate-300 keep-all">
                                Access and update your tasks anytime, anywhere with our mobile-friendly platform.
                            </div>
                        </div>
                        <div className="imgholder w-[30%] h-[350px] flex justify-center items-center box-border p-[20px]">
                            <img src={mobileaccess} alt="tasks" className="w-full h-full object-contain"/>
                        </div>
                    </div>

                        
                </div>

                
                <div className=" footer w-full text-[1.2rem] font-bold">
                    <p className="h-[50px] flex justify-center items-center">MADE WITH LOVE <img src={heart} alt="" className="w-[30px] h-[30px] mx-2" /></p>
                    
                </div>
            </div>
        </>
    )
}

export default Home;
