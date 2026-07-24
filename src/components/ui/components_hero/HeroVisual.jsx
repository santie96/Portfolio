import fotoCv from "../../../assets/img/foto-per-cv.png"

function HeroVisual() {
  return (
    <>

      <div className="relative flex items-center justify-center w-full h-96 overflow-hidden font-text mt-10">
        
        <div
          className="absolute z-39 border-2 border-[#06B6D4]/30 rounded-3xl h-64 w-64 bottom-20 rotate-[70deg] shadow-[0_0_25px_rgba(6,182,212,0.1)]"
          style={{ borderRadius: '60% 30% 100% 40%' }}
        />

        <div
          className="absolute z-40 bg-linear-to-bl from-[#06B6D4]/20 via-[#3B82F6]/20 to-[#7C3AED]/20 rounded-3xl h-64 w-64 bottom-20 rotate-[-20deg] shadow-[0_0_25px_rgba(6,182,212,0.1)]"
          style={{ borderRadius: '60% 30% 100% 40%' }}
        />

        <div
          className="absolute z-41 border-2 border-[#06B6D4]/30 rounded-3xl h-64 w-64 bottom-20 rotate-[-80deg] shadow-[0_0_25px_rgba(6,182,212,0.1)]"
          style={{ borderRadius: '60% 30% 100% 40%' }}
        />

        <div
          className="absolute z-42 bg-linear-to-br from-[#06B6D4]/40 via-[#3B82F6]/40 to-[#7C3AED]/60 h-64 w-64 shadow-[0_0_25px_rgba(6,182,212,0.3)]"
          style={{ borderRadius: '60% 60% 100% 40%' }}
        />

        <div className="absolute z-44 left-0 top-40 ">
          <div className="bg-[#101A2E]/60 px-4 py-1 rounded-xl border-2 border-[#06B6D4]/30">
            <div className="space-x-1 shadow-[0_0_25px_rgba(6,182,212,0.1)]">
              <span className="inline-block bg-red-600 p-0.5 rounded-full"></span>
              <span className="inline-block bg-yellow-400 p-0.5 rounded-full"></span>
              <span className="inline-block bg-green-500 p-0.5 rounded-full"></span>
            </div>
            <div className="text-[0.7rem] mb-1">
              <div className="flex gap-1">
                <p className="text-[#7C3AED]">const</p>
                <p className="text-[#06B6D4]">developer</p>
                <p className="text-white">= (</p>
              </div>
              <div className="flex gap-1 ml-3">
                <p className="text-[#7C3AED]">skills:</p>
                <p className="text-white">{`[`}</p>
                <p className="text-white">{`'`}</p>
                <p className="text-[#3B82F6]">React</p>
                <p className="text-white">{`'`}</p>
                <p className="text-white">{`,`}</p>
              </div>
              <div className="flex gap-1 ml-7">
                <p className="text-white">{`'`}</p>
                <p className="text-[#3B82F6]">Javascript</p>
                <p className="text-white">{`'`}</p>
                <p className="text-white">{`,`}</p>
              </div>
              <div className="flex gap-1 ml-7">
                <p className="text-white">{`'`}</p>
                <p className="text-[#3B82F6]">Tailwind</p>
                <p className="text-white">{`'`}</p>
                <p className="text-white">{`}`}</p>
                <p className="text-white">{`,`}</p>
              </div>
              <div className="flex gap-1">
                <p className="text-[#7C3AED]">passion</p>
                <p className="text-white">{`:`}</p>
                <p className="text-white">{`'`}</p>
                <p className="text-white">{`Front-end`}</p>
                <p className="text-white">{`'`}</p>
                <p className="text-white">{`;`}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute z-43 h-80 w-80 left-5 bottom-24">
          <img src={fotoCv} alt="" />
        </div>

        <div className="absolute z-44 bottom-10">
          <div className="bg-[#101A2E]/60 px-4 py-2 rounded-xl border-2 border-[#06B6D4]/30 flex items-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.1)]">
            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-green-500"></span>
            <p className="text-white text-[0.8rem]">Available for new opportunities</p>
          </div>
        </div>

        <div className="absolute z-44 right-8 top-13 text-sm">
          <div className="bg-[#101A2E]/60 p-2 rounded-xl border-2 border-[#06B6D4]/30 shadow-[0_0_5px_rgba(6,182,212,0.3)]">
            <span className="text-white">{`<`}</span>
            <span className="text-[#06B6D4]">{`/`}</span>
            <span className="text-white">{`>`}</span>
          </div>
        </div>



      </div>

    </>
  );
}

export default HeroVisual
