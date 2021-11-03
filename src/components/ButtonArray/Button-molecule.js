import { useState } from 'react';
import ButtonAtom from './Button/Button-atom';

export default function ButtonMolecule({onClick, classPlanet}) {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    function clickHandler(number) {
        switch (number) {
            case "01":
                {
                    setIsActive1(true);
                    setIsActive2(false);
                    setIsActive3(false);
                    onClick(number);
                }
                break;
            case "02":
                {
                    setIsActive2(true);
                    setIsActive1(false);
                    setIsActive3(false);
                    onClick(number);
                }
                break;
            case "03":
                {
                    setIsActive3(true);
                    setIsActive1(false);
                    setIsActive2(false);
                    onClick(number);
                }
                break;
        }
    };

    return (
        <>
            <div class='container-btn-array-col' >
                <ButtonAtom
                    id="01"
                    isActive={isActive1}
                    href="#"
                    number="01"
                    content="overview"
                    clicked={clickHandler}
                    classPlanet={classPlanet}
                />
                <ButtonAtom
                    id="02"
                    isActive={isActive2}
                    href="#"
                    number="02"
                    content="internal structure"
                    clicked={clickHandler}
                    classPlanet={classPlanet}
                />
                <ButtonAtom
                    id="03"
                    isActive={isActive3}
                    href="#"
                    number="03"
                    content="surface geology"
                    clicked={clickHandler}
                    classPlanet={classPlanet}
                />
            </div>

            <div class='container-btn-array-row'>
                <ButtonAtom
                    id="01"
                    isActive={isActive1}
                    href="#"
                    number="01"
                    content="overview"
                    clicked={clickHandler}
                    classPlanet={classPlanet}
                />
                <ButtonAtom
                    id="02"
                    isActive={isActive2}
                    href="#"
                    number="02"
                    content="structure"
                    clicked={clickHandler}
                    classPlanet={classPlanet}
                />
                <ButtonAtom
                    id="03"
                    isActive={isActive3}
                    href="#"
                    number="03"
                    content="surface"
                    clicked={clickHandler}
                    classPlanet={classPlanet}
                />
            </div>
        </>
    );
}

