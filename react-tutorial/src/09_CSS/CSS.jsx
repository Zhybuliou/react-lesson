import React, { Fragment } from 'react'
import './style.css'

const Columns = () => (
    <Fragment>
        <td style={{color: 'red', textTransform: 'uppercase'}}>Hello</td>
        <td className="test">World</td>
    </Fragment>
)

const FragmentCSS = () => (
    
    <table>
        <tbody>
            <tr>
                <Columns />
            </tr>
        </tbody>
    </table>
);

export default FragmentCSS;