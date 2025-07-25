import skills from '@/configs/skills'
import React from 'react'

function SkillsSection() {
    return (
        <section
            id="skills"
            className="lg:min-h-screen max-w-7xl mx-auto p-10 py-28"
        >
            <h2 className="text-primary text-5xl md:text-6xl font-semibold mb-20">
                Skills
            </h2>
            <div className="flex flex-col-reverse lg:flex-row w-full items-center">
                <div className="w-full lg:w-1/2 items-center px-0 lg:px-10">
                    <img
                        loading="lazy"
                        src="/image1.svg"
                        alt=""
                        className="w-full aspect-square"
                    />
                </div>
                <div className="w-full lg:px-20 lg:w-1/2 grid grid-cols-3  md:grid-cols-4 gap-4 lg:gap-10">
                    {skills.map(({ name, icon: Icon, color }, index) => {
                        return (
                            <div
                                key={index}
                                className="skill w-full flex flex-col items-center gap-4 px-4 hover:scale-110 transition-transform duration-200"
                            >
                                <Icon size={40} color={color} />
                                <p className="text-center">{name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
