import { NavBar } from "../nav/navBar";

export const Home = () => {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <NavBar></NavBar>
            <h1>Home</h1>
        </div>
    );
};