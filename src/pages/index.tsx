import type {NextPage} from "next";
import Head from "next/head";
import {trpc} from "../utils/trpc";
import {forEach} from "superjson/dist/util";
import {useRef} from "react";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({text: "from tRPC"});

  const grid = [
    [{color: 'bg-white'}, {color: 'bg-red-100'}, {color: 'bg-white'}],
    [{color: 'bg-white'}, {color: 'bg-red-100'}, {color: 'bg-white'}],
    [{color: 'bg-white'}, {color: 'bg-red-100'}, {color: 'bg-white'}],
  ];

  return (
    <div className='bg-blue-900 w-screen h-screen flex justify-between'>

      <div className='flex w-1/2 h-screen place-content-center p-3'>
        <div className='rounded bg-white w-5/6 h-5/6 self-center flex flex-col'>
          {grid.map((_, y) => {
            return <div className='flex flex-grow flex-shrink'>
              {grid[y]?.map(cell => {
                return <div className={`border border-black ${cell.color} flex-grow flex-shrink`}/>
              })}
            </div>
          })}
        </div>
      </div>

      <div className='w-1/2 p-3'>

      </div>
    </div>
  );
};

export default Home;
