import { useState } from "react";
import emailjs from "@emailjs/browser"
import Alert from "../components/Alert";
import { Particles } from "../components/particles";

const Contact = () => {

    const [formData, setFormData] = useState({name: "", email: "", message: ""})
    const [isLoading, setIsLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertType, setAlertType] = useState("Success")
    const [alertMessage, setAlertMessage] = useState("")

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const showAlertMessage = (type, message) => {
        setAlertType(type)
        setAlertMessage(message)
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 5000)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            await emailjs.send("service_jcwkb8s", "template_ihl2fd8",
            {
                from_name: formData.name,
                to_name: "Krishna Verma",
                from_email: formData.email,
                to_email: "krishnaverma.0227@gmail.com",
                message: formData.message
            }, "Qb7kiZ3i4vg5yTQTU")
            setIsLoading(false)
            setFormData({name: "", email: "", message: ""})
            showAlertMessage("Success", "Your Mail is delivered to their Inbox !")
        } catch (error) {
            setIsLoading(false)
            showAlertMessage("Danger", "Something went Wrong !")
        }
    }

    return (
        <section id="contact" className="relative flex items-center c-space section-spacing">
            <Particles 
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
            />
            {showAlert && <Alert type={alertType} text={alertMessage}/>}
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                <div className="flex flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">Let's Talk</h2>
                    <p className="font-normal text-neutral-400">I'm always open to new ideas and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out. Let's create something amazing together!</p>
                </div>
                <form
                    className="w-full"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-5">
                        <label htmlFor="name" className="feild-label">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="field-input field-input-focus"
                            placeholder="Tokyo"
                            autoComplete="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="feild-label">E Mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="field-input field-input-focus"
                            placeholder="tokyo@galaxystudio.org"
                            autoComplete="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="feild-label">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            type="text"
                            rows="5"
                            className="field-input field-input-focus"
                            placeholder="Share your thoughts ..."
                            autoComplete="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-x-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
                        {!isLoading ? "Send" : "Sending ..."}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;