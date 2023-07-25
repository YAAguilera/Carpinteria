import { RiArrowDropRightLine } from 'react-icons/ri';


const Faq = ({question, answer, isDrop, onDrop}) => {

  return (
    <article className={`${isDrop.isOpen ? 'h-auto' : 'h-auto'} transition-all duration-200 bg-gray-200 border-2 px-4 shadow-md rounded-3xl xxl:w-[30em] xl:w-[30em] lg:w-[30em] md:w-[30em] sm:w-[30em] xs:w-[20em]  pb-2 cursor-pointer`} onClick={onDrop}>
      <div className="flex flex-row items-center">
        <RiArrowDropRightLine className={`text-5xl text-secondary cursor-pointer ${isDrop.isOpen && 'rotate-90'} transition-all`} />
        <p className="flex text-base-light text-lg font-semibold">{question}</p>
    
      </div>
        <p className={`text-base-light/80 block ${!isDrop.isOpen ? ' hidden' : 'block' } transition-opacity`}>
            {answer}
          </p>
    </article>
  )
}

export default Faq