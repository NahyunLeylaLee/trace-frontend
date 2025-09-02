"use client"

import { QUESTION_TYPES } from "@/app/constants";

export default function Create() {
  return (
    <div className="p-5 h-full overflow-auto">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-2xl">새 질문</h1>
        <button className="border-2 border-black p-2 rounded-md">저장</button>
      </div>
      <div className="my-4">
        <h2 className="font-bold text-xl">타입</h2>
        <div className="grid grid-cols-4 gap-4 py-2 text-sm">
          {QUESTION_TYPES.map((question) => <button className='border border-black p-2 rounded-md' key={question.key}>{question.value}</button>)}
        </div>
      </div>
      {/* <form onSubmit={handleSubmit(onSubmitForm)}> */}
      <div className="my-4">
        <h2 className="font-bold text-xl">질문</h2>
        <div className="flex flex-col">
          <input type='text' placeholder='질문을 입력하세요.' className='p-2 border border-gray-300 rounded-md my-2' />
          별칭 (선택)
          <input type='text' placeholder='이 질문의 별칭을 입력하세요.' className='p-2 border border-gray-300 rounded-md my-2' />
          도움말 (선택)
          <input type='text' placeholder='이 질문에 대한 부가 설명을 입력하세요.' className='p-2 border border-gray-300 rounded-md my-2' />
        </div>
      </div>
      <div className="my-4">
        <h2 className="font-bold text-xl">선택지</h2>
        {/* <div className="flex gap-2 text-center *:py-2 my-2">
            <div className='border w-20'>-</div>
            <input type='number' className='border w-20 text-center' min={0} {...register('score')} />
            <input placeholder='선택지를 입력하세요' className='border flex-1' {...register('title')} />
          </div> */}
        {/* {options.map((option, idx) => <SurveyOption key={idx} register={register} />)}
          <div className='flex justify-center cursor-pointer' onClick={addOption}>+ 선택지</div> */}
      </div>
      {/* </form> */}
    </div>
  );
}