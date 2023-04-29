import { Head } from "rakkasjs";
import { NavBar } from "./NavBar";
import { IconWrapper } from "../../../components/shared/LucideIcon";
import { Menu } from "lucide-react";
import { useBackDrop } from "../../../hooks/useBackDrop";


interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { open, setOpen, is_mobile, slowlyCloseBackdrop } = useBackDrop();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center ">
      <Head title="Home" />
      

      {/* header */}
      <div className="flex h-14  w-full items-center justify-center">
        <div className="w-full p-2">
          <IconWrapper
            Icon={Menu}
            size={"40px"}
            className="hover:brightness-75"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/*  main body */}
      <div className="flex h-full w-full justify-between ">
        {/* SideNavBar */}

        {open && (
          <div
            onClick={slowlyCloseBackdrop}
            className="fixed flex h-full w-full flex-col animate-in slide-in-from-left 
            duration-300 md:static md:w-[15%] "
          >
            <NavBar open={open} setOpen={setOpen} />
          </div>
        )}

        {/* app children */}
        <div className="h-full w-full items-center justify-center overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
}
