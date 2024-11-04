`<tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr>`
for (var i = 0; i < 24; i++) {
    document.querySelector("tbody").innerHTML +=
    `<tr>
    <th scope="row">${i}:00</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>`
}