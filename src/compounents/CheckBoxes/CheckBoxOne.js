import React from 'react';
import {Button, Modal} from "@mui/material";

const CheckBoxOne = () => {
    return (
        <div>
                <Button variant="contained">
                    Открыть модальное окно
                </Button>
                <Modal>
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
                </Modal>
        </div>
    );
};

export default CheckBoxOne;