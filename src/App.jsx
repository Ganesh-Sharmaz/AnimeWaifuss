import { useState, useEffect, useCallback } from 'react'
import './App.css'



function App() {

  const getCategories = (type) => {
    if(type === 'sfw'){
      return ['waifu', 'neko', 'shinobu', 'blush', 'bully', 'cuddle', 'cry', 'cringe', 'dance', 'happy', 'poke', 'wink', 'kick', 'kill', 'slap', 'glomp', 'bite', 'nom', 'handhold', 'highfive', 'wave', 'smile', 'yeet', 'smug', 'pat', 'lick', 'kiss', 'awoo', 'hug', 'megumin'];
    }
    else{
      return ['waifu', 'neko', 'trap', 'blowjob'];
    }
    return [];

  }

  const handleType = () => {
    setType((prev) => (prev === 'sfw' ? 'nsfw' : 'sfw') );
    setCategory(getCategories(type)[0]);
  
  }

  const [type, setType] = useState('sfw')
  const [waifu, setWaifu] = useState('')
  const [waifu2, setWaifu2] = useState('')
  const [waifu3, setWaifu3] = useState('')
  const [categories, setCategories] = useState(getCategories('sfw'))
  const [category, setCategory] = useState(categories[0])
  const [nsfwAllowed, setNsfwAllowed] = useState(false)


  





    


      const apiUrl = `https://api.waifu.pics/${type}/${category}`
    




    const fetchImage1 = async() => {
      
      const response1 = await fetch(apiUrl)
      const data1 = await response1.json()
      

      

      
      if (
        response1.ok ){
        setWaifu(data1.url)
      }
  }


    
    const fetchImage2 = async() => {
      const response2 = await fetch(apiUrl)
      const data2 = await response2.json()
    if (
        response2.ok ){
        setWaifu2(data2.url)
      }
  }


    const fetchImage3 = async() => {
      const response3 = await fetch(apiUrl)
      const data3 = await response3.json()
    if (
        response3.ok ){
        setWaifu3(data3.url)
        console.log(data3.url)
        console.log(data3)
        console.log(apiUrl)
      }
  }
  useEffect(()=>{
    fetchImage1();
    fetchImage2();
    fetchImage3();
  }, [setType, category])



  const btnChange = () => {
    fetchImage1();
    fetchImage2();
    fetchImage3();
  }




   

return (
    <>
      <div id='back' className='flex flex-col min-h-screen bg-no-repeat ' >
        {/* header starts here */}
        <div className='w-full h-14 bg-black shadow-xl flex justify-between
         items-center '>  
          <div className=' pl-20 flex justify-start scale-128'><p id="glow">Anime Waifus</p></div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className=' p-2 rounded w-28 bg-black text-white'>
            {categories.map((cat) => (
              <option className='text-white bg-black' key={cat} value={cat}>{cat}</option>
            ))}

          </select>
          
              <label class="relative  inline-flex items-center cursor-pointer scale-50 pr-12">
                <input type="checkbox"
                defaultChecked = {nsfwAllowed}  
                onChange={handleType}
                   class="sr-only peer"/>
                <div class="group peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-300 w-24 h-12  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-hover:after:scale-95">
                  <svg class="absolute  top-1 left-12 stroke-gray-900 w-10 h-10" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
               <path class="svg-fill-primary" d="M50,18A19.9,19.9,0,0,0,30,38v8a8,8,0,0,0-8,8V74a8,8,0,0,0,8,8H70a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H38V38a12,12,0,0,1,23.6-3,4,4,0,1,0,7.8-2A20.1,20.1,0,0,0,50,18Z">
               </path>
              </svg>
                  <svg class="absolute top-1 left-1 stroke-gray-900  w-10 h-10" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
               <path d="M30,46V38a20,20,0,0,1,40,0v8a8,8,0,0,1,8,8V74a8,8,0,0,1-8,8H30a8,8,0,0,1-8-8V54A8,8,0,0,1,30,46Zm32-8v8H38V38a12,12,0,0,1,24,0Z" fill-rule="evenodd">
               </path>
              </svg>
                </div>
              </label>
           </div>

        {/* Picture Section */}

        <div className='flex-1 flex w-full justify-center items-center flex-col '>
        <div className='flex gap-3 pb-2'>
            
              <div  id='card' className=' h-128 w-80  rounded-2xl shadow-xl backdrop-blur-md outline-cyan-500 object-contain overflow-hidden'>
              {waifu && <img src={waifu} className=' '/>}
              </div>
               <div  id='card' className=' h-128 w-80  rounded-2xl shadow-xl backdrop-blur-md outline-cyan-500 object-contain overflow-hidden'>
              {waifu2 && <img src={waifu2} className=' '/>}
              </div>
              <div  id='card' className=' h-128 w-80  rounded-2xl shadow-xl backdrop-blur-md outline-cyan-500 object-contain overflow-hidden'>
              {waifu3 && <img src={waifu3} className=' '/>}
              </div>
             
          
          
              </div>
          
          
          
          <div>
          <button id='hero-btn' onClick={btnChange}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    width="36px"
    height="36px"
  >
    <rect width="36" height="36" x="0" y="0" fill="#fdd835"></rect>
    <path
      fill="#e53935"
      d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
    ></path>
    <path
      fill="#b71c1c"
      d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
    ></path>
    <path
      fill="#212121"
      d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
    ></path>
    <path
      fill="#01579b"
      d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
    ></path>
    <path
      fill="#212121"
      d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
    ></path>
    <path
      fill="#81d4fa"
      d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
    ></path>
    <path
      fill="#212121"
      d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
    ></path>
    <path
      fill="#e1f5fe"
      d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
    ></path>
  </svg>
  <span class="now">more</span>
  <span class="play">see</span>
</button>
          
          </div>
          

        </div>


        {/* Footer Section  */}

        <div className='w-full bg-black shadow-xl flex justify-around py-1 items-center bg-cover bg-no-repeat '>
          <div className=' font-Dance text-2xl text-white'>Made with Love for the cuties</div>
        <ul className='flex space-x-7 items-center justify-center'>
          
            
            <li className='flex items-center pt-2' >
            <a href="https://www.instagram.com/ganesh_sharmaz/" className="flex items-center text-slate-800 space-x-3 hover:text-sky-400 transition" id='glow' >
            <div class="group relative">
              <button>
              <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="1" stroke="currentColor" fill="none" viewBox="0 0 24 24" class=" flex items-center scale-125 w-6 hover:scale-150 duration-200 hover:stroke-white"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
              </button>
              <span class="absolute -top-14 left-[50%] -translate-x-[50%] 
              z-20 origin-left scale-0 px-3 rounded-lg border 
              border-gray-300 bg-white py-2 text-sm font-bold
              shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100">Instagram  <span>
            </span></span></div>
                        
                          
                      </a>
            </li>

            <li className='flex items-center pt-2'>
                      <a href="https://github.com/Ganesh-Sharmaz/" className="flex items-center space-x-3  text-slate-800 hover:text-sky-400 transition" ><div class="group relative" id='glow'>
                      <button>
                        <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 hover:scale-125 duration-200 hover:stroke-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </button>
                        <span class="absolute -top-14 left-[50%] -translate-x-[50%] 
                        z-20 origin-left scale-0 px-3 rounded-lg border 
                        border-gray-300 bg-white py-2 text-sm font-bold
                        shadow-md transition-all duration-300 ease-in-out 
                        group-hover:scale-100">GitHub<span>
                      </span></span></div>
                      </a>
                  </li>
          </ul>
          
        </div>





      </div>
    </>
  )
}

export default App


