import React from 'react'
import "../styles/Graph.css"

export default function Graphs() {
  return (
    <div>
      <table>
  <tr>
    <th>USER ID</th>
    <th>DATE AND TIME</th>
    <th>INSTRUMENT COLLECTED </th>
    <th>INSTRUMENT BEING AUTOCLAVED </th>
    <th>INSTRUMENT STERILISED AND RETURNED </th>
    <th>MATERIAL COLLECTED</th>
    <th>MATERIAL RETURNED </th>
  </tr>
  <tr>
    <td>1</td>
    <td>03/03/2022  11:00:00</td>
    <td>PROBE 0003, MOUTH MIRROR 0014, MICROMOTOR 0008, AIROTOR 0022</td>
    <td>0022</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>1</td>
    <td>14:00, 3/3/22</td>
    <td></td>
    <td>PROBE 003, MM 0014</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>1</td>
    <td>15:00, 3/3/22</td>
    <td></td>
    <td></td>
    <td>PROBE 003, MM0014</td>
    <td></td>
    <td></td>
  </tr>
</table>
    </div>
  )
}
