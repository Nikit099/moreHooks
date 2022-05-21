import React from "react";
import CollapseWrapper from "../common/collapse";

const HocExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                Вам необходимо реализовать компонент{" "}
                <code>SimpleComponent</code>, который:
            </p>
            <ul>
                <li>
                    В <code>props</code> имеет параметры: <code>onLogin</code>,{" "}
                    <code>onLogOut</code>, <code>isAuth</code>
                </li>
                <li>
                    Отображает кнопку <code>Войти</code>, если пользователь НЕ
                    авторизован.
                </li>
                <li>
                    Отображает кнопку с содержанием{" "}
                    <code>Выйти из системы</code>, если пользователь
                    авторизован.
                </li>
                <li>
                    При нажатии на <code>Войти</code>, вызывается функция{" "}
                    <code>onLogin</code>, а при нажатии на{" "}
                    <code>Выйти из системы</code> вызывается{" "}
                    <code>onLogOut</code>
                </li>
            </ul>
            <p className="mt-3">
                Вам необходимо создать <code>HOC</code> с названием{" "}
                <code>withFunctions</code>, который будет модифицировать
                компонент <code>SimpleComponent</code> следующим образом:
            </p>
            <ul>
                <li>
                    Добавит обертку на содержимое в виде карточки boostrap
                    (компонент <code>components/common/Card.jsx</code>)
                </li>
                <li>
                    Передает параметр <code>isAuth</code>. Этот параметр
                    является обычной переменной в <code>withFunctions</code> и
                    содержит в себе результат проверки наличия данных по ключу{" "}
                    <code>user</code> в <code>localStorage</code>
                </li>
                <li>
                    Передает параметры <code>onLogin</code> и{" "}
                    <code>onLogOut</code>. Функции также находятся в{" "}
                    <code>withFunctions</code>. <br />
                    <code>onLogin</code> - добавляет <code>user</code> в{" "}
                    <code>localStorage</code> с любым значением <br />
                    <code>onLogOut</code> - удаляет <code>user</code> из{" "}
                    <code>localStorage</code>
                </li>
            </ul>
        </CollapseWrapper>
    );
};

export default HocExercise;
