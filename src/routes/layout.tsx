// This is the main layout of our app. It renders the header and the footer.

import { Layout } from "rakkasjs";
import "../styles/globals.css";
import "../styles/scrollbar.css";
import { AppShell } from "./index/components/AppShell";


const MainLayout: Layout = ({ children }) => <AppShell children={children} />;
export default MainLayout;
