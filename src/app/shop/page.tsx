"use client"
import Image from 'next/image'
import ScholashipBtn from '../component/ScholashipBtn'
import Link from 'next/link'
import { FaAlignJustify, FaHouse, FaPlus, FaMinus } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import assets from '../util/images';
import {
	WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment } from "@react-three/drei"

// import { Mesh } from "three";
// const Model = () => {
//     // location of the 3D model
//     const gltf = useGLTF("/img/3Dhoodiev3.glb");
//     console.log("glft -> ", gltf);
    
//     return (
//       <>
//         {/* Use scale to control the size of the 3D model */}
//         <primitive object={gltf.scene} />
//       </>
//     );
// };
function MeshComponent() {
    useThree(({camera}) => {
        camera.position.x = 6;
        camera.lookAt(0, 0, 0);
    });
    const gltf = useGLTF("/img/3Dhoodiev3.glb");
  
    return (
      <>
        <primitive object={gltf.scene} />
      </>
    );
}
export default function Home() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className='w-full bg-bgColor font-ShPinscher'>
        {/* --------------------------------- Header --------------------------------- */}
            <div className='w-full flex flex-col justify-center items-center relative'>
                <div className='w-5/6 flex justify-between mt-8 h-[40px]'>
                    <div className='flex gap-1'>
                        <ScholashipBtn content = "Get exclusive access to the Private Akatsuki FNF Group" url = "/" />
                        <div className='hidden md:flex'>
                            <WalletMultiButton style={{color: '#FFAB24', height: "32px", border: "1px solidrgb(250, 22, 18)", borderRadius: "10px", backgroundColor: "transparent", fontSize: '15px', fontFamily: "SHPinscher, sans-serif'"}} />
                        </div>
                    </div>
                    
                    <div className='hidden md:flex justify-between gap-6 text-white text-content'>
                        <Link href = "/mint" className='hover:border-b-4 hover:border-darkYello pb-1 duration-200'>Mint</Link>
                        <Link href = "https://x.com/UnleashedFNF" className='hover:border-b-4 hover:border-darkYello pb-1 duration-200'>Twitter</Link>
                        <Link href = "https://t.me/AkatsukiCalls_Sol" className='hover:border-b-4 hover:border-darkYello pb-1 duration-200'>Telegram</Link>
                    </div>
                    <div
                        onClick={() => setOpen(!isOpen)}
                        className='flex md:hidden justify-center items-center bg-white p-3 rounded-[10px] border-[1px] border-[#000] w-[32] sm:w-[50px] text-black hover:bg-btnYellow cursor-pointer'
                    >
                        <FaAlignJustify className="w-[16px] h-[16px]" />
                    </div>
                    {isOpen && (
                        <div className='absolute w-full bg-bgColor top-[5rem] left-0 p-4 text-white flex md:hidden flex-col gap-4'>
                            <div className='w-full flex justify-center'>
                                <WalletMultiButton style={{color: ':rgb(255, 71, 25)', height: "32px", border: "1px solidrgb(250, 22, 18)", borderRadius: "10px", backgroundColor: "transparent", fontSize: '15px', fontFamily: "SHPinscher, sans-serif'"}} />
                            </div>
                            <Link href="/mint"className='w-full Kongz Dao text-center hover:bg-[#907848] duration-300'>Mint</Link>
                            <Link href="https://x.com/UnleashedFNF" className='w-full Kongz Dao text-center hover:bg-[#907848] duration-300'>Twitter</Link>
                            <Link href="https://t.me/AkatsukiCalls_Sol" className='w-full Kongz Dao text-center hover:bg-[#907848] duration-300'>Telegram</Link>
                        </div>
                    )}
                </div>
            </div>
            {/* --------------------------------- Header End ----------------------------- */}
            {/* --------------------------------- Body ----------------------------------- */}

            <div className='w-full flex justify-center items-center gap-20 pb-14 mt-12'>
                <div className='w-2/3 flex'>
                    <div className='flex flex-col'>
                        <p className='text-title text-borderYellow'> Akatuki Unleashed Membership</p>
                        <p className='text-title text-white'> 1 $SOL EACH</p>
                    </div>
                    
                    <div className='flex justify-center items-center h-screen w-1/2'>
                        <Canvas className='h-full w-full'>
                            <OrbitControls />
                            <ambientLight />
                            <pointLight position={[10, 10, 10]} />
                            <MeshComponent />
                            <Environment preset="city" />
                        </Canvas>
                        
                    </div>
                </div>
                
            </div>
            {/* --------------------------------- Body End-------------------------------- */}   
        </div>
    )
}
