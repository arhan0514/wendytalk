
const EmptyState =() => {
    return(
        <div
         className='
            px-4
            py-10
            sm:px-6
            lg:px-8
            h-full
            flex
            justify-center
            items-center
            bg-grey-100

         '
        >
            <div className='text-center items-center flex flex-col'>
                <h3 className='mt-2 text-2xl font-semibold text-pink-600'>
                채팅방을 선택하거나 새 대화를 시작하세요.
                </h3>

            </div>
        </div>
    )
}

export default EmptyState;