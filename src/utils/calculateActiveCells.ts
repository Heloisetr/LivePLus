import { CoordinatesContentType } from "types/CoordinatesType";

function splitFileData(data: string, length: number): boolean[] {
  let table: boolean[] = new Array(length*length);
  table.fill(false);
  
  const tmpTable = data.split(";");

  for (let index = 0; index < tmpTable.length; index++) {
    const tmpCoord = tmpTable[index].split(",");

    table[(length * Number(tmpCoord[1])) + Number(tmpCoord[0])] = true;
  }
  
  return table;
}

export function calculateActiveCells(data: string): {mapLength: number, fileCoordinates: boolean[] } {
  const splitData = data.split("\n");
  const mapLength =  Number(splitData[0]);
  
  const fileCoordinates = splitFileData(splitData[1], mapLength);
  
  return { mapLength, fileCoordinates }
}


function calculateCell(coordData: CoordinatesContentType, index: number): boolean {
  let countAlive = 0;

  const length = coordData.mapLength;
  
  if (coordData.coordinates[index - 1]) {
    countAlive = countAlive + 1;
  }
  if (coordData.coordinates[index + 1]) {
    countAlive = countAlive + 1;
  }
  if (coordData.coordinates[index - length]) {
    countAlive = countAlive + 1;
  }
  if (coordData.coordinates[index + length]) {
    countAlive = countAlive + 1;
  }
  if (coordData.coordinates[index - (1 + length)]) {
    countAlive = countAlive + 1;
  }
  if (coordData.coordinates[index - (length - 1)]) {
    countAlive = countAlive + 1;
  }
  if (coordData.coordinates[index + (length - 1)]) {
    countAlive = countAlive + 1;
  }
  if (coordData.coordinates[index + (1 + length)]) {
    countAlive = countAlive + 1;
  }

  switch(countAlive) {
    case 2:
      return (coordData.coordinates[index]) ? true : false;

    case 3:
      return true;
    
    default:
      return false;
  }
}

export function modifyCells(coordData: CoordinatesContentType): boolean[] {
  const table: boolean[]= [];
  const coord = coordData.coordinates;

  coord.map((cell, index) => {
    table.push(calculateCell(coordData, index));
    return null;
  });

  return table;
}

export function convertToDataBrut(coordinates: boolean[], mapLength: number): string {
  const tmp: string[] = [];


  coordinates.map((cell, index) => {
    if (cell === true) {
      tmp.push(String(Math.floor(index % mapLength)) + "," + String(Math.floor(index / mapLength)));
    }
    return null;
  });

  return tmp.join(';');
}
