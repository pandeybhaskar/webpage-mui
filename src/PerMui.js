import { Delete } from '@mui/icons-material';
import { Chip, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, Typography } from '@mui/material';
import React, { Children, useState } from 'react'

const PerMui = (props) => {
    let object = props.object;
    let mode = props.mode;
    const [display_object, set_display_object] = useState(object);

    let copy_display_object = [...display_object];

  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{
                        color:'red',
                        fontFamily: 'monospace',
                        fontSize: '20px',
                        alignItems:'right',
                        justifySelf:'right',
                        padding:'0px',
                        width:'33.3%',
                    }} align='center'>Product Name</TableCell>

                    <TableCell sx={{
                        color:'red',
                        fontFamily: 'monospace',
                        fontSize: '20px',
                        padding:'0px',
                        width:'33.3%'
                    }} align='center'>Product Price</TableCell>

                    <TableCell sx={{
                        display:'flex',
                        color:'red',
                        fontFamily: 'monospace',
                        fontSize: '20px',
                        padding:'0px',
                        justifyContent:'center',
                        width:'100%'
                    }} align='center'>Product Availability</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                { copy_display_object.map((value, index)=>{
                    {console.log(value)}
                    return (<TableRow 
                        className='tablerow'
                        key={index}
                        >
                        <TableCell color='primary' align='center'>{value.product}</TableCell>
                        <TableCell align='center'>{value.price}</TableCell>
                        <TableCell align='center'>{value.available}</TableCell>
                        
                        <IconButton               
                            sx={{
                               backgroundColor:'cornsilk',
                               marginTop:'1vh'
                            }}                            
                            onClick={()=>{
                                console.log(index);
                                copy_display_object.splice(index,1);
                                set_display_object(copy_display_object);
                            }}
                        >
                            <Delete/>
                        </IconButton>
                    </TableRow>)
                })}
            </TableBody>
        </Table>
    </TableContainer>
)
}

export default PerMui