import {useState, useEffect} from 'react';
import {type Picture, type FinishedPicture} from "./types/Picture.ts";
import styled from 'styled-components';
import Cats from "./components/Cats.tsx"


const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px green solid;
`;

export default function App() { //App() is a component, since it returns jsx/tsx

  const[data, setData] = useState<FinishedPicture[]>([]); //useState is a hook (preprogrammed helper function)
  //if first value is named x, the second must be setX

  // make http call using fetch, await, and handling exceptions

  //handling exception is done through useEffect

  useEffect(()=> { //async tells the page to do the tasks after first, then come back to the async function
    async function fetchData(){
      //fetch data in a raw JSON data format, which must be converted to JSON
      const rawData = await fetch("https://api.artic.edu/api/v1/artworks/search?q=cats");

      //turn raw JSON Data to readable object
      const data = (await rawData.json()).data;

      let x:FinishedPicture[] = [];
      var y: FinishedPicture;
      data.map((pic: Picture) =>
          {
            try{
              y = {
                id: pic.id,
                is_boosted: pic.is_boosted,
                alt_text: pic.thumbnail.alt_text,
                height: pic.thumbnail.height,
                lqip: pic.thumbnail.lqip,
                width: pic.thumbnail.width,
                title: pic.title
              };
              x.push(y);
            }catch{
              console.warn("missing data; skipping");
            }
          }
      ) //Map doesn't return anything, it just does the code inside with the given array
      setData(x);


      //everything that has been pulled is being put into data through setData
      console.log(data);
      //console.log(data[0]["thumbnail"]["lqip"]);
    }
    fetchData()
        .then(()=> console.log("success"))
        .catch((e) => console.error("The following error occurred: " +e));
  }, [data.length]); //check if the length of the data from the API changed


  return (
    <ParentDiv>
      <Cats finishedData={data}/>
    </ParentDiv>
  )
}
