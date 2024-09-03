import React from "react";
import homelogo from "../images/task-list.png";
import bglogo from "../images/task-home.svg";

const Home = () => {
    
    return (
        <>
            <div className="homr-root w-full h-full box-border   flex flex-col justify-start items-center bg-[url('C:\Users\DELL\Desktop\Blogger\blogger\src\images\task-home.svg')]">
                {/* <div  style={{backgroundImage: `url(${bglogo})`, height: "1000px", width: "100%"}}>
                    
                </div> */}
                <div className="align-con flex flex-col justify-start items-center w-[80%] h-[auto] bg-[red]  box-border p-[5px] bg-opacity-30 ">

                    <div className=" navigation-bar flex items-center justify-between h-[60px] box-border p-[5px] w-full bg-[lightblue] gap-x-[10px]">

                        <div className="logo-menu-con flex justify-center items-center box-border gap-x-[10p]">
                            <div className="brand flex justify-center items-center box-border">
                                
                                <div className="logo-holder w-[50px] h-[50px] flex justify-center items-center ">
                                    <img src={homelogo} alt="" className="w-[50px] h-[50px]" />
                                </div>
                                <span className="text-[1.5rem] font-bold font-[Poppins,_sans-serif]" >TaskItUp</span>
                            </div>

                            <div className="menuitems flex justify-center items-center gap-[10px] ml-[50px]">
                                <div className="ser  inline font-[Poppins,_sans-serif] hover:cursor-pointer">
                                    SERVICES
                                </div>
                                <div className="cont  inline font-[Poppins,_sans-serif] hover:cursor-pointer">
                                    SUPPORT
                                </div>

                                <div className="cont  inline font-[Poppins,_sans-serif] hover:cursor-pointer">
                                    BLOG
                                </div>
                            </div>
                        </div>
                        

                        <div className="get-start-con font-[Poppins,_sans-serif]">
                            <button className="font-[Poppins,_sans-serif]">GET STARTED</button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Home;
