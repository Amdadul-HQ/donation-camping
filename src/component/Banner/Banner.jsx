
const Banner = () => {
    return (
        <section className="h-[500px] w-full bg-[url('/Resources/bannerbg.png')] rounded-xl mb-32 bg-cover bg-no-repeat flex flex-col justify-center items-center">
            <h1 className="text-[#0B0B0B] text-5xl font-bold mb-10">I Grow By Helping People In Need</h1>
            <div className="h-[50px] flex w-[470px]">
                <input className="flex-1 rounded-l-lg border-[#DEDEDE] outline-none border-2 px-3 " type="text" />
                <button className="bg-[#FF444A] px-7 rounded-r-lg">Search</button>
            </div>
        </section>
    );
};

export default Banner;