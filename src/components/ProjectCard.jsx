import { motion } from "motion/react"

const ProjectCard = ({
    title,
    description,
    subDescription,
    image,
    tags,
    href,
    closeCard
}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
            <motion.div
                className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}>
                <motion.button onClick={closeCard} className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                    <img src="assets/close.svg" className="w-6 h-6"/>
                </motion.button>
                <img src={image} alt={title} className="w-full rounded-t-2xl"/>
                <div className="p-5">
                    <h5 className="mb-4 text-2xl font-bold text-white">{title}</h5>
                    <p className="mb-4 font-normal text-neutral-400">{description}</p>
                    {subDescription.map((subDesc, index) => (
                        <p className="font-normal text-neutral-400">{subDesc}</p>
                    ))}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex gap-3">
                            {tags.map((tag) => (
                                <img key={tag.id} src={tag.path} alt={tag.name} className="rounded-lg size-10 hover-animation w-7"/>
                            ))}
                        </div>
                        <a className="inline-flex items-center gap-2 font-medium hover-animation cursor-pointer" href={href} target="_blank">View Project <img src="assets/arrow-up.svg" className="size-4"/></a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCard;