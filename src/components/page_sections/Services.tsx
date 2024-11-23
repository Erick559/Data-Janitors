import Mockup from '../../image-assets/mockup.png'

const Services = () => {
  return (
    <section className="min-h-screen overflow-hidden p-12 md:pb-16 md:px-5 lg:px-10 relative">
        <main className="p-5 md:px-5 lg:px-20 flex flex-col gap-20 min-h-screen">
        <div className="xl:pt-24 flex flex-col gap-8">
            <div className="flex flex-col justify-center gap-6 max-w-[550px]">
            <div>
                <h1 className="primary-header text-4xl sm:text-5xl text-center">Tech-powered Clean</h1>
            </div>
            <div className="flex flex-col gap-8">
                <div className="p-5 border-l-4 border-[#72A0FE]">
                <h1 className="text-xl font-bold text-[#252C75]">Data cleaning</h1>
                <p className="text-lg">Describe your data needs in plain English, and watch our AI make it happen.</p>
                </div>
                <div className="p-5 border-l-4 border-[#72A0FE]">
                <h1 className="text-xl font-bold text-[#252C75]">Data cleaning</h1>
                <p className="text-lg">Describe your data needs in plain English, and watch our AI make it happen.</p>
                </div>
                <div className="p-5 border-l-4 border-[#72A0FE]">
                <h1 className="text-xl font-bold text-[#252C75]">Data cleaning</h1>
                <p className="text-lg">Describe your data needs in plain English, and watch our AI make it happen.</p>
                </div>
            </div>
            </div>
            <div className="block h-full xl:absolute xl:top-24 xl:-right-56">
            <div className="w-full h-full">
                <img className="mockup-image" src={Mockup} alt="model of a laptop" />
            </div>
            </div>
        </div>
        </main>
    </section>
  )
}

export default Services
