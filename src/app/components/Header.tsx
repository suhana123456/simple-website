export const Header=()=>{
    return(
        <div className=" bg-black text-gray-100 flex justify-between shadow-2x1 px-7">

            <div className="cursor-pointer"> Logo</div>
            <div className="flex gap-4 cursor-pointer px-3">
                <div>Home</div>
                <div> About</div>
                <div> Contact us</div>
                <div> Services</div>

            </div>

        </div>
    );
};
export default Header;