import StaticBubble from "../staticBubble"
import CallToAction from "./Call-To-Action"

const WhyUs = () => {
  return (
    <div>
        <section id="features" className="min-h-screen pt-[100px] pb-12 relative overflow-hidden">
            <main className="flex flex-col gap-8 md:gap-10 items-center md:px-20 z-5">
                <header>
                    <h1 className="primary-header text-4xl sm:text-5xl">Why Data Janitors</h1>
                </header>

                <div className="flex flex-col items-center gap-10 w-full">
                    <div className="w-full flex justify-center">
                        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 w-full max-w-[950px]">
                            <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
                                <h1 className="primary-header text-3xl sm:text-4xl z-5">Intuitive Control</h1>
                                <p className="text-lg w-[30ch]">Describe your data needs in plain English, and watch our AI make it happen.</p>
                            </div>
                            <img width={500} height={500} className="w-[350px] h-[320px] lg:w-[380px] lg:h-[350px]" src="../../image-assets/soap-bottles.png" alt="Soap Bottles with data janitors emblem resembling how they produce clean data"/>
                        </div>
                    </div>

                    <div className="w-full flex justify-center">
                        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 w-full max-w-[950px]">
                            <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4 order-1 md:order-2">
                                <h1 className="primary-header text-3xl sm:text-4xl">Powerful Transformations</h1>
                                <p className="text-lg w-[30ch]">Our system orchestrates a wide array of data tools to meet your specific requirements.</p>
                            </div>
                            <img width={500} height={500} className="w-[350px] h-[320px] lg:w-[380px] lg:h-[350px] order-2 md:order-1" src="../../image-assets/cloud-mop.png" alt="A mop cleaning the cloud resembling how at Data janitors data is cleaned"/>
                        </div>
                    </div>

                    <div className="w-full flex justify-center">
                        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 w-full max-w-[950px]">
                            <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
                                <h1 className="primary-header text-3xl sm:text-4xl">Continous Learning</h1>
                                <p className="text-lg w-[30ch]">With each task, our AI gets smarter, ensuring ever-improving results.</p>
                            </div>
                            <img width={500} height={500} className="w-[350px] h-[320px] lg:w-[380px] lg:h-[350px]" src="../../image-assets/soap-bottles.png" alt="Soap Bottles with data janitors emblem resembling how they produce clean data"/>
                        </div>
                    </div>
                </div>
            </main>

            <StaticBubble className="top-20 md:top-32 -left-10" />
            <StaticBubble className="bottom-48 md:bottom-28 -right-[200px]" imageStyling="scale-x-[-1] -rotate-[35deg]"/>
        </section>
        <CallToAction 
                title="Clean Data,Clear Insights" 
                titleDescription="tech driven data detox" 
                description="In today's data-driven world, the ability to quickly clean and transform data is your competitive edge. Data Janitors leverages advanced AI to turn your data requests into reality, ensuring your information is spotless, reliable, and ready for action."
                primaryButton="Signup to our Wishlist"
                secondPrimaryButton="Schedule Free Consultation" 
                imageStyling="w-[400px] h-[400px]"
                src="../../image-assets/aws-foam.png"
                alt="Foam with the words AWS in the middle to resemble data cleaning."
        />
    </div>
  )
}

export default WhyUs
