import type {NextPage} from "next";
import {trpc} from "../utils/trpc";
import {useRef, useState} from "react";

const mock = {
  mapDimension : 100,
  roomsPerRow: 4,
  fill: 40,
  seed: "",
  roomWallMinimumWidth: 2,
  pathWidth: 3,
  organicPaths: true,
  deadEndSpawnChance: 50,
  entryCell: {
    id: -1,
    name: "entry",
    solid: false,
    color: "#0ea432"
  },
  exitCell: {
    id: -2,
    name: "exit",
    solid: false,
    color: "#0d71bb"
  },
  cellTypes : [
    {
      id: 0,
      name: "empty",
      solid: false,
      color: "#bfbfbf",
      spawnChance: 90
    },
    {
      id: 1,
      name: "gold",
      solid: false,
      color: "#f1c40f",
      spawnChance: 5
    },
    {
      id: 2,
      name: "enemy",
      solid: false,
      color: "#e74c3c",
      spawnChance: 5
    },
    {
      id: 3,
      name: "block",
      solid: true,
      color: "#000000",
      spawnChance: 100
    }
  ]
};
const Home: NextPage = () => {
  const disabledClass = 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:opacity-70 disabled:hover:scale-100'

  const [config, setConfig] = useState(mock)
  const grid = trpc.mapGenerator.generateMapGrid.useQuery(config);

  return (
    <div className='bg-blue-900 w-screen h-screen flex justify-between'>

      <div className='flex w-1/2 h-screen place-content-center p-3'>
        <div className={`rounded bg-white w-5/6 h-5/6 self-center flex flex-col p-1`}>
            {grid.data?.map(row => {
              return <div className='flex flex-grow flex-shrink'>
                {row.map(cell => {
                  return <div className={`flex-grow flex-shrink transition duration-3000 ${cell.color}`}/>
                })}
              </div>
            })}
        </div>
      </div>

      <div className='w-1/2 p-3'>
        <div className='flex place-content-center w-full'>
          <button
            className={`rounded bg-green-500 py-2 px-4 text-white font-bold hover:bg-green-400 hover:scale-95 transform duration-100 ease-in-out ${disabledClass}`}
            disabled={grid.isLoading}
            onClick={()=> {
              //setConfig()
            }}>
            GENERATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
