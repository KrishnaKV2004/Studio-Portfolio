import { TimeLine } from "../components/TimeLine";
import { experiences } from "../constants"

const Experience = () => {
    return (
        <div className="w-full">
            <TimeLine data={experiences}/>
        </div>
    )
}

export default Experience;