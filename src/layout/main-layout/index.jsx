import { Header, Sidebar, Footer } from "@component"
import "./style.scss"

function index({ children }) {
    return <>

        <div className="flex w-full">

            <div className=" w-[25%]">
                <Sidebar />
            </div>
            <div className='w-[75%] '>
                <Header />
                <main className="container mx-auto min-h-[80vh]">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    </>
}

export default index;