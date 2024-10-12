import React from 'react';

const AnnualApplicationForm: React.FC = () => {
    return (
        <div className="h-auto w-full flex flex-col justify-center text-center align-middle">
            <div className="flex w-full space-x-4 justify-center text-center align-middle mt-12">
                <div className="flex w-1/2 justify-center text-center align-middle">
                    <label className="block pt-3 text-3xl font-sans font-bold text-gray-700 pl-6 pr-20">이름 </label>
                    <div className='flex justify-center text-gray-700 text-2xl w-[60%] font-sans font-bold h-14 bg-gray-300 rounded-lg shadow-lg items-center'>
                        하정우
                    </div>

                </div>
                <div className="flex w-1/2">
                    <label className="block pt-3 text-3xl font-sans font-bold text-gray-700 pl-6 pr-12">부서 </label>
                    <div className='flex justify-center text-gray-700 text-2xl w-[60%] font-sans font-bold h-14 bg-gray-300 rounded-lg shadow-lg items-center'>
                        프론트엔드 개발팀
                    </div>
                </div>
            </div>

            <div className="flex mt-10">
                <div className="flex w-1/2 justify-center text-center align-middle">
                    <label className=" text-2xl font-bold text-gray-700 font-sans mt-4 pl-4">연차 시작일</label>
                    <input
                        type="date"
                        className="border-2 mt-1 w-[60%] rounded-md border-gray-300 shadow-sm ml-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg font-sans"
                    />
                </div>

                <div className="flex w-1/2">
                    <label className=" text-2xl font-bold text-gray-700 font-sans mt-4">연차 종료일</label>
                    <input
                        type="date"
                        className=" border-2 mt-1 w-[60%] rounded-md border-gray-300 shadow-sm ml-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg font-sans"
                    />
                </div>
            </div>
            <div className="flex w-full">
                <div className="w-full">
                    <label className="flex text-2xl font-sans align-middle font-bold text-gray-700 pl-32 mt-10">연차 사유</label>
                    <textarea
                        className="text-xl border p-3 rounded-ml mt-2 w-[90%] font-sans"
                        placeholder="사유를 입력하세요"
                        rows={15}
                    />
                </div>
            </div>

            <div className="flex justify-center mt-4">
                <button className="text-2xl font-sans w-48 bg-mainColor text-white rounded-ml p-4">
                    결재 신청
                </button>
            </div>
        </div>
    );
};
export default AnnualApplicationForm;

