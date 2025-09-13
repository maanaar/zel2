const Aboutus1 = () => {
    return(
        <div className="flex flex-col lg:flex-row items-center gap-10 p-8 bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-md mx-auto">
        {/* <!-- Image --> */}
        <div className="flex-shrink-0">
            <img
            src="../../src/assets/Aboutus1.jpeg"
            alt="Event"
            className="rounded-xl w-full max-w-md object-cover"
            />
        </div>

        {/* <!-- Text Content --> */}
        <div className="text-center lg:text-left max-w-2xl">
            <p className="text-sm uppercase text-blue-600 font-semibold tracking-wide mb-2">Who We Are</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4">
            Transforming Visions Into Unforgettable Experiences
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Established in 2024, Ozel Events is a leading event management company based in Alexandria, Egypt.
            We specialize in creating extraordinary experiences that connect people, inspire collaboration, and
            leave a lasting impression. With innovative concepts and attention to detail, we turn your ideas into
            reality, ensuring every event is seamlessly executed and unforgettable. Trust Ozel Events to bring your
            vision to life with creativity, professionalism, and passion.
            </p>
        </div>
        </div>
    );
};
export default Aboutus1; 