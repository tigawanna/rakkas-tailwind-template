import { User } from "lucide-react";
import { IconWrapper } from "../../../components/shared/LucideIcon";

interface ProfileProps {

}

export function Profile({}:ProfileProps){
return (
 <div className='w-full h-full flex items-center justify-center'>
        <IconWrapper Icon={User} size={"100px"} />
 </div>
);
}
