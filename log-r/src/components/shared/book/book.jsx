import Nav from '../nav/nav'
import Building from '../building/building'
import './book.css'

function Book(){
    return(
        <div className="book internal bg-stone-100 h-screen flex max-[850px]:block">
            <Nav dashboard={true} />
            <div className="book relative w-full max-[850px]:mt-20">
                <header className="w-full flex justify-end p-5 mt-2">
                    <div className='w-fit'>
                        <h2 className='text-4xl font-semibold'>Logbook 1</h2>
                        <div className='w-full flex justify-between mt-2'>
                            <button className="text-sm text-gray-500 py-1 px-4 border border-gray-400 rounded-md">Preview</button>
                            <button className="text-sm text-gray-500 py-1 px-4 border border-gray-400 rounded-md">Download</button>
                        </div>
                    </div>
                </header>
                <div className='px-10 max-[600px]:px-5'>
                    <div>
                        <div className='text-violet-600'>Week 1</div>
                        <div className='w-full flex justify-end border-t-2 border-violet-400'>
                            <button className='text-3xl text-violet-600 px-3 py-1 border-2 border-violet-500 rounded-md'>+</button>
                        </div>
                        <div className='flex justify-between flex-wrap mt-5'>
                            {[0, 1, 2, 3, 4, 5, 6].map((i)=>{
                                return(
                                    <div className='log p-4 rounded-md bg-white mb-10'>
                                        <div className='w-full text-right text-gray-400 mb-2'>12/12/2030</div>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, libero voluptatibus! Facilis voluptatem, explicabo quod aliquid beataemolestias. Fuga vel magni porro molestiae cum pariatur autem! Ipsam magni neque quod?
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Book