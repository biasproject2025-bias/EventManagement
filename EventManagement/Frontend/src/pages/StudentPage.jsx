import React from "react";
import heroBg from "/heroBg.webp";
import { NavLink } from "react-router-dom";

/* -------------------- COUNTER COMPONENT -------------------- */
function Counter({ target, duration = 6000 }) {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let start = 0;
        const end = parseInt(target);
        if (start === end) return;

        const incrementTime = duration / end;

        let timer = setInterval(() => {
            start += 1;
            setCount(start);

            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [target, duration]);

    return <span>{count}+</span>;
}

/* -------------------- MAIN PAGE -------------------- */
export default function StudentPage() {

    /* IMAGE SLIDER LOGIC */
    const images = [
        "/aboutSlide-1.jpg",
        "/aboutSlide-2.jpg",
        "/aboutSlide-3.png",
        "/aboutSlide-4.jpg",
        "/aboutSlide-5.jpg",
        "/aboutSlide-6.jpg",
    ];

    const [currentImage, setCurrentImage] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    /* --------------- SOCIETIES DATA ---------------- */
    const societies = [
        { name: "Cultural Society", logo: "/soclogo1.png" },
        { name: "Sahitya Society", logo: "/soclogo2.png" },
        { name: "Fine Arts Society", logo: "/soclogo3.png" },
        { name: "Eco Society BIAS", logo: "/soclogo4.png" },
        { name: "Photography Society", logo: "/soclogo5.png" },
        { name: "Sports Society", logo: "/soclogo6.png" },
        { name: "Mess Society", logo: "/soclogo7.png" },
        { name: "Techno Society", logo: "/soclogo8.png" },
        { name: "Literature Club", logo: "/soclogo9.png" },
        { name: "Entrepreneurship Cell", logo: "/soclogo10.png" },
    ];

    return (
        <div className="w-full min-h-screen scroll-smooth">

            {/* ------------------ HERO SECTION ------------------ */}
            <div
                className="relative w-full h-[80vh] bg-center bg-cover group"
                style={{
                    backgroundImage: `url(${heroBg})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>

                {/* Text + Button */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                        Welcome to Your College
                    </h1>

                    <p className="mt-3 text-lg md:text-xl opacity-90">
                        Discover amazing clubs and societies
                    </p>

                    <a href="#societies">
                        <button
                            className="
                                mt-6 opacity-0 group-hover:opacity-100
                                bg-white text-black font-semibold px-6 py-3 rounded-full
                                shadow-lg transition-opacity duration-300
                            "
                        >
                            Explore Societies
                        </button>
                    </a>
                </div>
            </div>

            {/* ------------------ STATS SECTION ------------------ */}
            <div className="w-full bg-white py-16 flex justify-center ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">

                    <div className="group">
                        <h2 className="text-4xl font-extrabold text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                            <Counter target={8} />
                        </h2>
                        <p className="text-lg text-gray-700 font-medium">Active Societies</p>
                    </div>

                    <div className="group">
                        <h2 className="text-4xl font-extrabold text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                            <Counter target={100} />
                        </h2>
                        <p className="text-lg text-gray-700 font-medium">
                            Students Participating
                        </p>
                    </div>

                    <div className="group">
                        <h2 className="text-4xl font-extrabold text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                            <Counter target={20} />
                        </h2>
                        <p className="text-lg text-gray-700 font-medium">Yearly Events</p>
                    </div>

                </div>
            </div>

            {/* ------------------ ABOUT SECTION ------------------ */}
            <div className="w-full bg-gray-50 py-16 px-6 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT — TEXT */}
                    <div>
                        <h2 className="text-4xl font-bold text-indigo-700 mb-4">
                            About Our Societies
                        </h2>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            At Birla Institute of Applied Sciences, student societies play a
                            transformative role in shaping the overall development of students.
                            These groups offer a space to explore passions, build leadership
                            skills, and collaborate with peers beyond the classroom. Whether
                            through cultural activities, technical innovation, or creative
                            expression, societies help students gain confidence, discipline,
                            teamwork, and real-world exposure. Joining a society is much more
                            than participation—it's an opportunity to grow, discover new
                            interests, and create unforgettable memories throughout your college journey.
                        </p>
                    </div>

                    {/* RIGHT — IMAGE SLIDER */}
                    <div className="relative w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-xl">
                        {images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt="Society"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
                                    ${i === currentImage ? "opacity-100" : "opacity-0"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* ------------------ SOCIETIES GRID ------------------ */}
            <div id="societies" className="w-full py-20 px-6 md:px-16 bg-white">
                <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
                    Our Societies
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

                    {societies.map((soc, i) => (
                        <div key={i} className="relative">

                            {/* SHADOW BOX */}
                            <div className="absolute w-full h-full bg-indigo-100 rounded-xl translate-x-3 translate-y-3 -z-10"></div>

                            {/* CARD */}
                            <div
                                className="group bg-white rounded-xl shadow-md p-5 flex flex-col items-center
                                relative overflow-hidden cursor-pointer
                                transition-transform duration-300 hover:-translate-y-2"
                            >

                                <img
                                    src={soc.logo}
                                    alt={soc.name}
                                    className="w-24 h-24 object-contain"
                                />

                                {/* HOVER NAME SLIDE-UP */}
                                <div
                                    className="absolute bottom-0 left-0 w-full
                                        bg-black/60 text-white text-center text-sm font-semibold
                                        py-2 translate-y-full group-hover:translate-y-0
                                        transition-all duration-300"
                                >
                                    {soc.name}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* ------------------ JOIN A SOCIETY SECTION ------------------ */}
            <div className="w-full py-20 px-6 md:px-16 bg-indigo-600 text-white text-center mt-10 ">

                <h2 className="text-4xl font-bold mb-4">Want to Join a Society?</h2>

                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                    Become part of something bigger! Whether you love coding, art, culture, sports or literature—
                    there’s a society waiting for you. Discover your talent, make new friends and create memories.
                </p>

                <a href="#societies">
                <button className="
    mt-8 bg-white text-indigo-700 font-semibold 
    px-10 py-4 rounded-full shadow-lg
    hover:bg-gray-200 transition-all duration-300
  ">
                    Join Now
                </button>

            </a>

        </div>

            {/* ------------------ FAQ SECTION ------------------ */ }
    <div className="w-full py-20 px-6 md:px-16 bg-gray-50">

        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto space-y-4">

            {/* FAQ ITEM */}
            {[
                {
                    q: "How can I join a society?",
                    a: "Visit the society page, choose the society you are interested in, and click on the 'Join Now' button. You may need to attend the first introductory meeting."
                },
                {
                    q: "Is there any registration fee?",
                    a: "Most societies at BIAS are free to join. Some technical or event–based clubs may charge a minimal fee for maintenance or materials."
                },
                {
                    q: "Can first-year students join?",
                    a: "Yes! All societies openly welcome first-year students. It’s one of the best ways to start your college journey."
                },
                {
                    q: "Can I join more than one society?",
                    a: "Absolutely. You can join multiple societies as long as you manage your time and responsibilities effectively."
                },
                {
                    q: "Do societies conduct events regularly?",
                    a: "Yes. Every society hosts workshops, competitions, fests, and fun activities throughout the academic year."
                }
            ].map((item, idx) => (
                <details
                    key={idx}
                    className="bg-white shadow-md p-5 rounded-xl cursor-pointer transition-all"
                >
                    <summary className="font-semibold text-lg text-indigo-700">
                        {item.q}
                    </summary>
                    <p className="text-gray-600 mt-2">{item.a}</p>
                </details>
            ))}

        </div>
    </div>



        </div >
    );
}
