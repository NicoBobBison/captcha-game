import SelectBoxes from "./SelectBoxes";

interface Props {
    setSuccess: (val: boolean) => void;
    setP: (paragraph: string) => void;
    setL: (paragraph: string) => void;
}

function Level2(props: Props) {
    const correct = [6, 7];
    props.setP("Select all the images with");
    props.setL("Traffic Lights");

    return (
        <>
            <SelectBoxes setSuccess={props.setSuccess} img={"stop-sign.jpg"} correct={correct}/>
        </>
    );
}

export default Level2;