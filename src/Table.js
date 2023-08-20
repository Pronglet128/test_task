export default function Table ({headers, rows}) {
    return (
        <table id="table">
            <thead>
                <tr>
                    {headers.map((item) => <th key={item.heading}>{item.heading}</th>)}
                </tr>
            </thead>
            <tbody>
                    {Object.values(rows).map((row, index) => <TableRow key={index} row={row}/>)}
            </tbody>
        </table>
    )
}

const TableRow = ({row}) => {
        return (
            <tr>{Object.values(row).map((cellItem, index) =>
                <td key={index} className={cellItem.align}>{cellItem.value}</td>)}
            </tr>

        )
}