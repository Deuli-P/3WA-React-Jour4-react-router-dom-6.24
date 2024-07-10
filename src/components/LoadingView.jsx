
const LoadingView = () => {
  return (
    <div className='bg-slate-300 rounded-sm flex flex-col justify-center items-center gap-2 p-4'>
        <div className='flex flex-col gap-1 text-center'>
            <div className='w-full h-4 bg-slate-700'/>
            <div className='w-full h-8 bg-slate-900'/>
        </div>
        <div
            className=' px-8 py-2 border-2 border-black hover:bg-slate-50 duration-200 transition-all'
        />
    </div>
  )
}

export default LoadingView