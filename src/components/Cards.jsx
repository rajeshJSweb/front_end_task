import Card from "./Card";

/*eslint-disable*/
const Cards = () => {
    return (
        <div className="inline-flex gap-2">
            <div className="w-[355px]">
                <div className="bg-slate-100 py-4 px-2 flex flex-col gap-2">
                    <div className="flex justify-between mb-4">
                        <div className="flex items-center gap-1">
                            <div className="w-[20px] h-[25px] bg-red-500 rounded-l-full" />
                            <h1 className="text-[18px] font-semibold">Incomplete</h1>
                        </div>
                        <p className="bg-slate-200 px-3 font-bold rounded-sm">0</p>
                    </div>
                    <Card />
                </div>
            </div>
            <div className="w-[355px] flex flex-col gap-2 overflow-y-auto">
                <div className="bg-slate-100 py-4 px-2 flex flex-col gap-2">
                    <div className="flex justify-between mb-4">
                        <div className="flex items-center gap-1">
                            <div className="w-[20px] h-[25px] bg-blue-500 rounded-l-full" />
                            <h1 className="text-[18px] font-semibold">To Do</h1>
                        </div>
                        <p className="bg-slate-200 px-3 font-bold rounded-sm">0</p>
                    </div>
                    <Card />
                </div>
            </div>
            {/* Card3 */}
            <div className="w-[355px] flex flex-col gap-2 overflow-y-auto">
                <div className="bg-slate-100 py-4 px-2 flex flex-col gap-2">
                    <div className="flex justify-between mb-4">
                        <div className="flex items-center gap-1">
                            <div className="w-[20px] h-[25px] bg-yellow-500 rounded-l-full" />
                            <h1 className="text-[18px] font-semibold">Doing</h1>
                        </div>
                        <p className="bg-slate-200 px-3 font-bold rounded-sm">0</p>
                    </div>
                    <Card />
                </div>
            </div>
            {/* Under review card */}
            <div className="w-[355px] flex flex-col gap-2 overflow-y-auto">
                <div className="bg-slate-100 py-4 px-2 flex flex-col gap-2">
                    <div className="flex justify-between mb-4">
                        <div className="flex items-center gap-1">
                            {/* <div className="w-[20px] h-[25px] bg-yellow-500 rounded-l-full" /> */}
                            <h1 className="text-[18px] font-semibold">Under Review</h1>
                        </div>
                        <p className="bg-slate-200 px-3 font-bold rounded-sm">0</p>
                    </div>
                    <Card />
                </div>
            </div>
            {/* Completed card */}
            <div className="w-[355px] flex flex-col gap-2 overflow-y-auto">
                <div className="bg-slate-100 py-4 px-2 flex flex-col gap-2">
                    <div className="flex justify-between mb-4">
                        <div className="flex items-center gap-1">
                            {/* <div className="w-[20px] h-[25px] bg-yellow-500 rounded-l-full" /> */}
                            <h1 className="text-[18px] font-semibold">Completed</h1>
                        </div>
                        <p className="bg-slate-200 px-3 font-bold rounded-sm">0</p>
                    </div>
                    <Card />
                </div>
            </div>
            {/* Completed card */}
            <div className="w-[355px] flex flex-col gap-2 overflow-y-auto">
                <div className="bg-slate-100 py-4 px-2 flex flex-col gap-2">
                    <div className="flex justify-between mb-4">
                        <div className="flex items-center gap-1">
                            {/* <div className="w-[20px] h-[25px] bg-yellow-500 rounded-l-full" /> */}
                            <h1 className="text-[18px] font-semibold">Overd</h1>
                        </div>
                        <p className="bg-slate-200 px-3 font-bold rounded-sm">0</p>
                    </div>
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Cards;