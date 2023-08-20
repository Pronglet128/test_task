import { useEffect, useState } from "react"
import Table from "./Table"
import './Table.css';

export default function TableData ({fetchedFile, handleDropdownChange}) {
    const [tableData, setTableData] = useState()
    useEffect(() => {
        fetch(fetchedFile)
            .then(response => response.json())
            .then((json) => setTableData(json))
            .catch(err => console.log(err))
    }, [handleDropdownChange])

    const headers = []
    const parsedData = []

    const getAlign = (cellType) => {
        switch (cellType) {
            case "float":
            case "int":
                cellType = "right";
                break;
            case "boolean":
                cellType = "center"
                break;
            default:
                cellType = "left"
        }

        return cellType;
    }

    const fixedOutput = (cellType, cellOutput) => {
        switch (cellType) {
            case "float":
                return cellOutput.toFixed(2)
            case "int":
            case "boolean":
                return cellOutput.toString()
        }

        return cellOutput;
    }

    if (tableData) {
        tableData.data.forEach((row) => {
            var newRow = {}
            row.forEach((item, index) => {
                if (item == null)
                {
                    newRow[tableData.header[index].id]=[]
                }
                else {
                    newRow[tableData.header[index].id]= {
                        value: fixedOutput(tableData.header[index].type, item.d === undefined ? item : item.d),
                        align: tableData.header[index].align ? tableData.header[index].align : getAlign(tableData.header[index].type)
                    }
                }
            })

            parsedData.push(newRow)
        })

        tableData.header.forEach(item => {
            headers.push({
                heading: item.caption,
                id: item.id,
                style: item.align,
                dataType: item.type
            })
        })
    }

    return (
        <main>
            <Table headers={headers} rows={parsedData}/>
        </main>
        )
}