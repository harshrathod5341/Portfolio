
export default function About() {
    return (
        <>
            <div>
                <p class='font-light text-5xl m-12 p-10'>Hello I was born in <span class='text-red-600 font-normal'>India</span>, and currently based in Canada. I'm Enthusiast in AI, ML<i class="uil uil-brain ml-3"></i> </p>
            </div>
        
            <div>
                <a href="Harsh_Rathod_Resume.pdf" download='Harsh_Rathod_Resume.pdf'>
                    <button type="download" class="transition all hover:scale-125 ml-20 p-10 bg-blue-500 text-white py-2 px-4 rounded shadow-lg shadow-blue-500/50">Resume</button></a>
            </div>

            <div class='flex items-center ml-10 mr-20 p-10 gap-4 '>
                <a class='text-4xl transition delay-150 hover:scale-125' href="https://www.linkedin.com/in/harsh-rathod-695ab7196" target="_blank "><i class="uil uil-linkedin"></i></a>
                <a class='text-4xl transition delay-150 hover:scale-125' href="https://github.com/harshrathod5341" target="_blank"><i class="uil uil-github"></i></a>
                <a class='text-4xl transition delay-150 hover:scale-125' href="https://mail.google.com/mail/u/1/#inbox" target="_blank"><i class="uil uil-envelope"></i></a>
                <a class='text-4xl transition delay-150 hover:scale-125' href="https://api.whatsapp.com/send?phone=5198591055"><i class="uil uil-whatsapp"></i></a>
            </div>
        </>

    )
}
