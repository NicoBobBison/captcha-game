import SelectBoxes from "../SelectBoxes.tsx";

interface Props {
    setSuccess: (val: boolean) => void;
    setP: (paragraph: string) => void;
    setL: (paragraph: string) => void;
}

function TrafficGrid(props: Props) {
    const correct = [1, 2, 5, 6];
    props.setP("Select all the images with");
    props.setL("Traffic Lights");

    return (
        <>
            <SelectBoxes setSuccess={props.setSuccess} img={"traffic-lights.jpg"} correct={correct}/>
        </>
    );
}

export default TrafficGrid;
