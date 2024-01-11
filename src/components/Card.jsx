import { useState } from "react";
import { BsStack } from "react-icons/bs";
import { MdAttachFile, MdDateRange, MdShoppingBag } from "react-icons/md";
import { PiChatsCircleThin } from "react-icons/pi";
import { useApi } from "../context/ApiProvider";
import avater from "./../assets/image/avater.png";
import Modal from "./Modal";

/*eslint-disable*/
const Card = () => {
    const { data } = useApi();
    const [openModalId, setOpenModalId] = useState(null);

    if (!data) {
        return <p>Loading...</p>;
    }

    const openModal = (id) => {
        setOpenModalId(id);
    };

    const closeModal = () => {
        setOpenModalId(null);
    };
    return (
        <div className="h-screen overflow-y-auto flex flex-col gap-3">
            {
                data.map(curElem => <div key={curElem.id} className="bg-white p-2 rounded-md relative">
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <img className="w-[30px] h-[30px] rounded-full" src={avater} alt="" />
                            <h1>Client Name</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img className="w-[30px] h-[30px] rounded-full" src={avater} alt="" />
                            <h1>{curElem.name}</h1>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="flex gap-1 items-center">
                            <BsStack />
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div className="flex gap-1 items-center bg-slate-100 px-1 rounded-sm">
                            <MdShoppingBag />
                            <p>1/2</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4 items-center">
                        <div className="flex gap-1">
                            <img className="w-[25px] h-[25px] rounded-full" src={avater} alt="" />
                            <img className="w-[25px] h-[25px] rounded-full" src={avater} alt="" />
                        </div>
                        <div className="bg-slate-200 rounded-full w-[23px] h-[23px] flex justify-center items-center">
                            <p className="text-[13px]">12+</p>
                        </div>
                        <div className="flex items-center gap-1 text-[16px]">
                            <PiChatsCircleThin className="text-[20px]" />
                            <p>15</p>
                        </div>
                        <div className="flex items-center gap-1 text-[15px]">
                            <MdAttachFile onClick={() => openModal(curElem.id)} className="text-[18px] cursor-pointer" />
                            <p>25</p>
                        </div>
                        <div className="flex items-center text-[15px]">
                            <MdDateRange className="text-[18px] font-bold" />
                            <p>30-12-2020</p>
                        </div>
                    </div>
                </div>
                )}
            {openModalId !== null && <Modal closeModal={closeModal} />}
        </div>
    );
};

export default Card;