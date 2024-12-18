import SelectBoxes from "../SelectBoxes.tsx";

interface Props {
    setSuccess: (val: boolean) => void;
    setP: (paragraph: string) => void;
    setL: (paragraph: string) => void;
}

function CrossingGrid(props: Props) {
    const correct = [12, 13, 14, 15];
    props.setP("Select all the images with");
    props.setL("Crosswalks");

    return (
        <>
            <SelectBoxes setSuccess={props.setSuccess} img="crossing.png" correct={correct}/>
        </>
    );
}

export default CrossingGrid;
