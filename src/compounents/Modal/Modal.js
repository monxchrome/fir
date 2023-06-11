import React, { useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from './CustomModal';

const TableModal = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" onClick={handleOpen}>
                Открыть модальное окно
            </Button>
            <CustomModal open={open} onClose={handleClose}>
                <table>
                    <thead>
                    <tr>
                        <th>Заголовок столбца 1</th>
                        <th>Заголовок столбца 2</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Значение 1</td>
                        <td>Значение 2</td>
                    </tr>
                    {/* Добавьте дополнительные строки таблицы, если нужно */}
                    </tbody>
                </table>
            </CustomModal>
        </>
    );
};

export default TableModal;