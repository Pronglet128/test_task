import TableData from './TableData';
import './Table.css';
import { useState } from 'react';


function App() {
  const arrayJson = ['project-profit', 'project-details', 'mimesis-details']
  const optionsJson = arrayJson.map(result => <option key={result} value={result.index}>{result}</option>)
  const [fetchedFile, setFetchedFile] = useState('Json/' + arrayJson[0] + '.json')
  const handleDropdownChange = (e) => {
    setFetchedFile('Json/' + [e.target.value] + '.json')
  }

  return (
    <>
      <select id="dropdown" onChange={handleDropdownChange}>
        {optionsJson}
      </select>
      <TableData handleDropdownChange={handleDropdownChange} fetchedFile={fetchedFile}/>
    </>
  );
}

export default App;
