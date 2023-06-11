import React, {useState} from 'react';
import css from './main.module.css';
import OptionOne from "../Options/OptionOne";
import ReactDOM from 'react-dom'
import CustomModal from "../Modal/Modal";
import {Button} from "@mui/material";


const Main = () => {
    const [checkBoxes, setCheckBoxes] = useState({
        checkBox1: false,
        checkBox2: false,
        checkBox3: false,
        checkBox4: false,
        checkBox5: false,
        checkBox6: false,
        checkBox7: false,
        checkBox8: false,
        checkBox9: false,
        checkBox10: false,
        checkBox11: false,
        checkBox12: false,
        checkBox13: false,
        checkBox14: false,
        checkBox15: false,
        checkBox16: false,
    });

    const handleCheckBoxChange = (name) => {
        setCheckBoxes({
            ...checkBoxes,
            [name]: !checkBoxes[name],
        });
    };

    const handleNextButtonClick = () => {
        const selectedCheckboxes = Object.entries(checkBoxes)
            .filter(([name, isChecked]) => isChecked)
            .map(([name, isChecked]) => name);

        if (selectedCheckboxes.length > 0) {
            const newTab = window.open('', '_blank');
            newTab.document.body.innerHTML = '<div id="root"></div>';

            const SelectedCheckBoxesComponent = getSelectedCheckBoxesComponent(selectedCheckboxes);

            ReactDOM.render(
                <NewTab SelectedCheckBoxesComponent={SelectedCheckBoxesComponent} />,
                newTab.document.getElementById('root')
            );
        }
    };


    const getSelectedCheckBoxesComponent = (selectedCheckboxes) => {
        return () => (
            <div>
                {selectedCheckboxes.map((checkboxName) => {
                    const CheckBoxComponent = getCheckBoxComponent(checkboxName);
                    return <CheckBoxComponent key={checkboxName} />;
                })}
            </div>
        );
    };

    const getCheckBoxComponent = (name) => {
        switch (name) {
            case 'checkBox1':
                return CheckBox1;
            case 'checkBox2':
                return CheckBox2;
            case 'checkBox3':
                return CheckBox3;
            case 'checkBox4':
                return CheckBox4;
            case 'checkBox5':
                return CheckBox5;
            case 'checkBox6':
                return CheckBox6;
            case 'checkBox7':
                return CheckBox7;
            case 'checkBox8':
                return CheckBox8;
            case 'checkBox9':
                return CheckBox9;
            case 'checkBox10':
                return CheckBox10;
            case 'checkBox11':
                return CheckBox11;
            case 'checkBox12':
                return CheckBox12;
            case 'checkBox13':
                return CheckBox13;
            case 'checkBox14':
                return CheckBox14;
            case 'checkBox15':
                return CheckBox15;
            case 'checkBox16':
                return CheckBox16;
            default:
                return null;
        }
    };
    return (
        <div>
            <h1>
                Наименование пунктов ГОСТ 7392-2014 по которым проводятся испытания
            </h1>
            <style></style>
            <table>
                <tr>
                    <td></td>
                    <td>Пункт требований</td>
                    <td>Пункт метода</td>
                    <td>Пункт есть в ТЗ</td>
                </tr>
                <tr>
                    <td>Анализ поступившей лабораторной пробы</td>
                    <td>-</td>
                    <td>7.1</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox1}
                            onChange={() => handleCheckBoxChange('checkBox1')}
                            type="checkbox"
                            id="option1"
                            name="option1"
                            value="1" /><label for="option1"></label>
                    </td>
                </tr>
                <tr>
                    <td>Определение зернового состава</td>
                    <td>5.1.1</td>
                    <td>7.2</td>
                    <td>
                        <input
                            onChange={() => handleCheckBoxChange('checkBox2')}
                            checked={checkBoxes.checkBox2}
                            type="checkbox"
                            id="option2"
                            name="option2"
                            value="2" /><label for="option2"></label>
                    </td>
                </tr>
                <tr>
                    <td>Определение доли мелкого продукта</td>
                    <td>5.1.2</td>
                    <td>7.5</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox3}
                            onChange={() => handleCheckBoxChange('checkBox3')}
                            type="checkbox"
                            id="option3"
                            name="option3"
                            value="3" /><label for="option3"></label>
                    </td>
                </tr>
                <tr>
                    <td>Определение зёрен пластинчатой и игольчатой формы</td>
                    <td>5.1.3</td>
                    <td>7.6</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox4}
                            onChange={() => handleCheckBoxChange('checkBox4')}
                            type="checkbox"
                            id="option4"
                            name="option4"
                            value="4" /><label for="option4"></label>
                    </td>
                </tr>
                <tr>
                    <td>Определение доли длинного зерна в щебне</td>
                    <td>5.1.4</td>
                    <td>7.15</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox5}
                            onChange={() => handleCheckBoxChange('checkBox5')}
                            type="checkbox"
                            id="option5"
                            name="option5"
                            value="5" /><label for="option5"></label>
                    </td>
                </tr>
                <tr>
                    <td>Определение содержания дробленых зерен</td>
                    <td>5.1.5</td>
                    <td>7.12</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox6}
                            onChange={() => handleCheckBoxChange('checkBox6')}
                            type="checkbox"
                            id="option6"
                            name="option6"
                            value="6" /><label for="option6"></label>
                    </td>
                </tr>
                <tr>
                    <td>Определение наличия органических примисей</td>
                    <td>5.1.6</td>
                    <td>7.7</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox7}
                            onChange={() => handleCheckBoxChange('checkBox7')}
                            type="checkbox"
                            id="option7"
                            name="option7"
                            value="7" /><label for="option7"></label>
                    </td>
                </tr>
                <tr>
                    <td>Определение Наличия глины в комках</td>
                    <td>5.1.7</td>
                    <td>7.3</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox8}
                            onChange={() => handleCheckBoxChange('checkBox8')}
                            type="checkbox"
                            id="option8"
                            name="option8"
                            value="8" /><label for="option8"></label>
                    </td>
                </tr>
                <tr>
                    <td>Определение зёрен слабых пород</td>
                    <td>5.1.8</td>
                    <td>7.4</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox9}
                            onChange={() => handleCheckBoxChange('checkBox9')}
                            type="checkbox"
                            id="option9"
                            name="option9"
                            value="9" /><label for="option9"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        Определение величины потери массы после испытаний на
                        истираемость в полочном барабане
                    </td>
                    <td>5.1.9.1</td>
                    <td>7.8</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox10}
                            onChange={() => handleCheckBoxChange('checkBox10')}
                            type="checkbox"
                            id="option10"
                            name="option10"
                            value="10" /><label for="option10"></label>
                    </td>
                </tr>
                <tr>
                    <td>
                        Определение величины потери массы после испытаний на
                        сопротивление удару на копре
                    </td>
                    <td>5.1.9.2</td>
                    <td>7.9</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox11}
                            onChange={() => handleCheckBoxChange('checkBox11')}
                            type="checkbox"
                            id="option11"
                            name="option11"
                            value="11" /><label for="option11"></label>
                    </td>
                </tr>
                <tr>
                    <td>Определение марки щебня по морозостойкости</td>
                    <td>5.1.10</td>
                    <td>7.11</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox12}
                            onChange={() => handleCheckBoxChange('checkBox12')}
                            type="checkbox"
                            id="option12"
                            name="option12"
                            value="12" /><label for="option12"></label>
                    </td>
                </tr>
                <tr>
                    <td>Определение средней плотности зёрен щебня</td>
                    <td>5.1.11</td>
                    <td>7.10</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox13}
                            onChange={() => handleCheckBoxChange('checkBox13')}
                            type="checkbox"
                            id="option13"
                            name="option13"
                            value="13" /><label for="option13"></label>
                    </td>
                </tr>
                <tr>
                    <td>Определение удельной электропроводимости щебня</td>
                    <td>5.1.12</td>
                    <td>7.13</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox14}
                            onChange={() => handleCheckBoxChange('checkBox14')}
                            type="checkbox"
                            id="option14"
                            name="option14"
                            value="14" /><label for="option14"></label>
                    </td>
                </tr>
                <tr>
                    <td>Определение ЕРН (радиация)</td>
                    <td>5.1.13</td>
                    <td>7.14</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox15}
                            onChange={() => handleCheckBoxChange('checkBox15')}
                            type="checkbox"
                            id="option15"
                            name="option15"
                            value="15" /><label for="option15"></label>
                    </td>
                </tr>
                <tr>
                    <td>Определение наличия признаков солнечного ожёга</td>
                    <td>5.1.14</td>
                    <td>7.16</td>
                    <td>
                        <input
                            checked={checkBoxes.checkBox16}
                            onChange={() => handleCheckBoxChange('checkBox16')}
                            type="checkbox"
                            id="option16"
                            name="option16"
                            value="16" /><label for="option16"></label>
                    </td>
                </tr>
            </table>
            <div className={css.TopRightButton}>
                <button className={`${css.CustomBtn} ${css.Btn13}`}>Сравнение</button>
            </div>
            <div>
                <button onClick={handleNextButtonClick} className={`${css.CustomBtn} ${css.Btn13} ${css.BottomButton}`}>Далее</button>
            </div>
        </div>
    );
};
function NewTab({ SelectedCheckBoxesComponent }) {
    return (
        <div>
            <SelectedCheckBoxesComponent />
        </div>
    );
}
function CheckBox1() {
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
}
function CheckBox2() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 2 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox3() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 3 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox4() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 4 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox5() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 5 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox6() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 6 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox7() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 7 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox8() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 8 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox9() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 9 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox10() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 10 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox11() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 11 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox12() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 12 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox13() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 13 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox14() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 14 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox15() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 15 в новой вкладке
            </label>
        </div>
    );
}
function CheckBox16() {
    return (
        <div>
            <label>
                <input type="checkbox" />
                Чекбокс 16 в новой вкладке
            </label>
        </div>
    );
}
export default Main;