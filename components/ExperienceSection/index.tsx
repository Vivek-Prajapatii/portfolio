import React from 'react'
import { experiences } from '@/configs/experiences'
import { ExternalLink } from 'lucide-react'

const ExperienceSection = () => {
    return (
        <section
            id="experience"
            className="py-20 px-4 md:px-8 max-w-7xl mx-auto"
        >
            <h2 className="text-primary md:text-6xl text-5xl font-semibold mt-5 mb-10 ml-5">
                Experience
            </h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transition-colors"
                    >
                        <h3 className="text-2xl font-semibold text-primary">
                            <a
                                href={exp.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline inline-flex items-center gap-2 group"
                            >
                                {exp.company}
                                <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </h3>
                        <p className="text-xl mt-2">{exp.role}</p>
                        <p className="text-muted-foreground mt-1">
                            {exp.period}
                        </p>
                        <p className="text-muted-foreground text-sm">
                            {exp.location}
                        </p>
                        <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                            {Array.isArray(exp.description) ? (
                                exp.description.map((desc, i) => (
                                    <li
                                        key={i}
                                        className="text-muted-foreground"
                                    >
                                        {desc}
                                    </li>
                                ))
                            ) : (
                                <li className="text-muted-foreground">
                                    {exp.description}
                                </li>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ExperienceSection
