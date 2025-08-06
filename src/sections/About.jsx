import { useRef } from "react";
import Card from "../components/Card";
import Globe from "../components/Globe";

const About = () => {

    const grid2Container = useRef();

    return (
        <section className="c-space section-spacing">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

                {/* Grid-1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"/>
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Krishna Verma</p>
                        <p className="subtext">A passionate developer and technology enthusiast
                            who loves exploring new technologies to expand skills
                            and bring ideas to life.</p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
                </div>

                {/* Grid-2 */}
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">
                            Code Is Craft
                        </p>
                        <Card style={{rotate: "75deg", top: "30%", left: "20%"}} text="Specs" containerRef={grid2Container}/>
                        <Card style={{rotate: "-30deg", top: "60%", left: "45%"}} text="Code" containerRef={grid2Container}/>
                        <Card style={{rotate: "90deg", bottom: "30%", left: "70%"}} text="Build" containerRef={grid2Container}/>
                        <Card style={{rotate: "20deg", bottom: "60%", left: "40%"}} text="Test" containerRef={grid2Container}/>
                        <Card style={{rotate: "-45deg", top: "55%", left: "0%"}} text="Deploy" containerRef={grid2Container}/>
                        <Card style={{rotate: "30deg", top: "70%", left: "70%"}} image="assets/logos/csharp-pink.png" containerRef={grid2Container}/>
                        <Card style={{rotate: "-45deg", top: "70%", left: "25%"}} image="assets/logos/dotnet-pink.png" containerRef={grid2Container}/>
                        <Card style={{rotate: "-45deg", top: "5%", left: "10%"}} image="assets/logos/blazor-pink.png" containerRef={grid2Container}/>
                    </div>
                </div>

                {/* Grid-3 */}
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Time Zone - UTC+5:30</p>
                        <p className="subtext">I'm based in India and open to remote work world wide</p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>

                {/* Grid-4 */}
                <div className="grid-special-color grid-4"></div>

                {/* Grid-5 */}
                <div className="grid-default-color grid-5"></div>
            </div>
        </section>
    )
}

export default About;